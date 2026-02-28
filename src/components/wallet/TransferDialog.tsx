'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  AlertCircle,
  CheckCircle,
  Loader2,
  ArrowRight,
  Wallet,
  Shield,
} from 'lucide-react';
import { Wallet as WalletType, TransferRequest, TransferResult, SecurityRule } from '@/types';
import { getWalletSecurityRule, mockTransactions } from '@/lib/mockData';

interface TransferDialogProps {
  wallet: WalletType;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (result: TransferResult) => void;
}

// 模拟 Gas 价格
const MOCK_GAS_PRICE = '0.001';

export function TransferDialog({ wallet, isOpen, onClose, onSuccess }: TransferDialogProps) {
  const [step, setStep] = useState<'form' | 'confirm' | 'pin' | 'processing' | 'success' | 'error'>('form');
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [token, setToken] = useState('ETH');
  const [pinCode, setPinCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [securityRule, setSecurityRule] = useState<SecurityRule | null>(null);
  const [transferResult, setTransferResult] = useState<TransferResult | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);

  // 重置状态
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setToAddress('');
      setAmount('');
      setPinCode('');
      setError(null);
      setWarnings([]);
      setTransferResult(null);
      
      const rule = getWalletSecurityRule(wallet.id);
      setSecurityRule(rule || null);
    }
  }, [isOpen, wallet.id]);

  // 验证地址格式
  const isValidAddress = (address: string): boolean => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  // 检查是否在白名单
  const isInWhitelist = (address: string): boolean => {
    if (!securityRule?.whitelistAddresses) return false;
    return securityRule.whitelistAddresses.some(
      (item) => item.address.toLowerCase() === address.toLowerCase()
    );
  };

  // 检查是否在黑名单
  const isInBlacklist = (address: string): boolean => {
    if (!securityRule?.blacklistContracts) return false;
    return securityRule.blacklistContracts.some(
      (item) => item.address.toLowerCase() === address.toLowerCase()
    );
  };

  // 检查交易限额
  const checkLimits = (amount: string): string[] => {
    const warnings: string[] = [];
    const amountNum = parseFloat(amount);
    
    if (securityRule?.maxAmountPerTx) {
      const maxPerTx = parseFloat(securityRule.maxAmountPerTx);
      if (amountNum > maxPerTx) {
        warnings.push(`超过单笔交易限额 (${securityRule.maxAmountPerTx} ETH)`);
      }
    }
    
    // 检查日累计限额
    if (securityRule?.maxAmountPerDay) {
      const maxPerDay = parseFloat(securityRule.maxAmountPerDay);
      const todayTransactions = mockTransactions.filter(
        (tx) =>
          tx.walletId === wallet.id &&
          tx.type === 'send' &&
          tx.status === 'success' &&
          new Date(tx.timestamp).toDateString() === new Date().toDateString()
      );
      const todayTotal = todayTransactions.reduce((sum, tx) => sum + parseFloat(tx.amount), 0);
      
      if (todayTotal + amountNum > maxPerDay) {
        warnings.push(`将超过日累计限额 (${securityRule.maxAmountPerDay} ETH)`);
      }
    }
    
    return warnings;
  };

  // 检查余额
  const hasEnoughBalance = (amount: string): boolean => {
    const balance = parseFloat(wallet.balance.replace(' ETH', ''));
    const amountNum = parseFloat(amount);
    const gasFee = parseFloat(MOCK_GAS_PRICE);
    return balance >= amountNum + gasFee;
  };

  // 处理下一步
  const handleNext = () => {
    setError(null);
    
    // 验证地址
    if (!toAddress) {
      setError('请输入收款地址');
      return;
    }
    if (!isValidAddress(toAddress)) {
      setError('地址格式不正确');
      return;
    }
    
    // 验证金额
    if (!amount || parseFloat(amount) <= 0) {
      setError('请输入有效的金额');
      return;
    }
    
    // 检查余额
    if (!hasEnoughBalance(amount)) {
      setError('余额不足（需包含 Gas 费）');
      return;
    }
    
    // 检查黑名单
    if (isInBlacklist(toAddress)) {
      setError('该地址在黑名单中，无法转账');
      return;
    }
    
    // 检查限额
    const limitWarnings = checkLimits(amount);
    setWarnings(limitWarnings);
    
    // 检查白名单
    if (!isInWhitelist(toAddress)) {
      setWarnings((prev) => [...prev, '该地址不在白名单中，请确认地址正确']);
    }
    
    setStep('confirm');
  };

  // 处理确认
  const handleConfirm = () => {
    if (securityRule?.pinCode) {
      setStep('pin');
    } else {
      handleTransfer();
    }
  };

  // 验证 PIN
  const handlePinSubmit = () => {
    if (pinCode !== securityRule?.pinCode) {
      setError('PIN 码错误');
      return;
    }
    handleTransfer();
  };

  // 执行转账
  const handleTransfer = async () => {
    setStep('processing');
    setError(null);
    
    // 模拟处理延迟
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // 模拟转账结果（90% 成功率）
    const isSuccess = Math.random() > 0.1;
    
    if (isSuccess) {
      const result: TransferResult = {
        success: true,
        transactionId: `tx_${Date.now()}`,
        status: 'success',
      };
      
      // 添加交易记录
      mockTransactions.unshift({
        id: result.transactionId!,
        type: 'send',
        to: toAddress,
        amount: `${amount} ETH`,
        status: 'success',
        timestamp: new Date().toISOString(),
        walletId: wallet.id,
        gasFee: MOCK_GAS_PRICE,
        txHash: `0x${Math.random().toString(16).substring(2, 66)}`,
      });
      
      // 更新余额（通过回调通知父组件更新）
      const currentBalance = parseFloat(wallet.balance.replace(' ETH', ''));
      const newBalance = currentBalance - parseFloat(amount) - parseFloat(MOCK_GAS_PRICE);
      // 创建新对象而不是修改原对象
      const updatedWallet = { ...wallet, balance: `${newBalance.toFixed(4)} ETH` };
      
      setTransferResult(result);
      setStep('success');
      onSuccess?.(result);
    } else {
      const result: TransferResult = {
        success: false,
        error: '网络拥堵，请稍后重试',
        status: 'failed',
      };
      setTransferResult(result);
      setStep('error');
    }
  };

  // 关闭对话框
  const handleClose = () => {
    if (step === 'processing') return;
    onClose();
  };

  // 计算总费用
  const totalCost = parseFloat(amount || '0') + parseFloat(MOCK_GAS_PRICE);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -trangray-x-1/2 -trangray-y-1/2 w-full max-w-lg z-50"
          >
            <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-700/50 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                    {step === 'success' ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : step === 'error' ? (
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    ) : (
                      <Send className="h-5 w-5 text-orange-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {step === 'form' && '转账'}
                      {step === 'confirm' && '确认转账'}
                      {step === 'pin' && '输入 PIN'}
                      {step === 'processing' && '处理中...'}
                      {step === 'success' && '转账成功'}
                      {step === 'error' && '转账失败'}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {wallet.name || `Wallet #${wallet.id}`}
                    </p>
                  </div>
                </div>
                {step !== 'processing' && (
                  <motion.button
                    onClick={handleClose}
                    className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </motion.button>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Step: Form */}
                {step === 'form' && (
                  <>
                    {/* From Wallet */}
                    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/30">
                      <label className="text-sm text-gray-400 block mb-2">付款钱包</label>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-white">{wallet.name || `Wallet #${wallet.id}`}</p>
                          <p className="text-sm text-gray-400">{wallet.balance}</p>
                        </div>
                      </div>
                    </div>

                    {/* To Address */}
                    <div>
                      <label className="text-sm text-gray-400 block mb-2">收款地址</label>
                      <input
                        type="text"
                        value={toAddress}
                        onChange={(e) => {
                          setToAddress(e.target.value);
                          setError(null);
                        }}
                        placeholder="0x..."
                        className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors font-mono"
                      />
                      {toAddress && !isValidAddress(toAddress) && (
                        <p className="text-red-400 text-sm mt-2">地址格式不正确</p>
                      )}
                    </div>

                    {/* Amount */}
                    <div>
                      <label className="text-sm text-gray-400 block mb-2">转账金额</label>
                      <div className="flex gap-3">
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => {
                            setAmount(e.target.value);
                            setError(null);
                          }}
                          placeholder="0.00"
                          step="0.001"
                          min="0"
                          className="flex-1 px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                        />
                        <select
                          value={token}
                          onChange={(e) => setToken(e.target.value)}
                          className="px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white focus:outline-none focus:border-orange-500/50 transition-colors"
                        >
                          <option value="ETH">ETH</option>
                          <option value="USDC">USDC</option>
                          <option value="USDT">USDT</option>
                        </select>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Gas 费约 {MOCK_GAS_PRICE} ETH
                      </p>
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-400" />
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    {/* Total */}
                    {amount && (
                      <div className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-xl">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">总计</span>
                          <span className="text-xl font-bold text-white">{totalCost.toFixed(4)} ETH</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          金额: {amount} ETH + Gas: {MOCK_GAS_PRICE} ETH
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Step: Confirm */}
                {step === 'confirm' && (
                  <>
                    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/30 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">收款地址</span>
                        <span className="text-white font-mono">{toAddress.slice(0, 6)}...{toAddress.slice(-4)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">转账金额</span>
                        <span className="text-white">{amount} {token}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Gas 费</span>
                        <span className="text-white">{MOCK_GAS_PRICE} ETH</span>
                      </div>
                      <div className="border-t border-gray-700/30 pt-3 flex justify-between">
                        <span className="text-gray-400">总计</span>
                        <span className="text-xl font-bold text-orange-400">{totalCost.toFixed(4)} ETH</span>
                      </div>
                    </div>

                    {/* Warnings */}
                    {warnings.length > 0 && (
                      <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-yellow-400" />
                          <span className="text-yellow-400 font-medium">安全提示</span>
                        </div>
                        <ul className="space-y-1">
                          {warnings.map((warning, index) => (
                            <li key={index} className="text-sm text-yellow-400/80">
                              • {warning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                {/* Step: PIN */}
                {step === 'pin' && (
                  <>
                    <div className="text-center py-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-orange-400" />
                      </div>
                      <p className="text-gray-400 mb-4">请输入 6 位 PIN 码以确认交易</p>
                      <input
                        type="password"
                        value={pinCode}
                        onChange={(e) => {
                          setPinCode(e.target.value.replace(/\D/g, '').slice(0, 6));
                          setError(null);
                        }}
                        placeholder="000000"
                        maxLength={6}
                        className="w-32 px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white text-center text-2xl tracking-widest focus:outline-none focus:border-orange-500/50 transition-colors font-mono"
                        autoFocus
                      />
                    </div>
                    {error && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-400" />
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}
                  </>
                )}

                {/* Step: Processing */}
                {step === 'processing' && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                      <Loader2 className="h-8 w-8 text-orange-400 animate-spin" />
                    </div>
                    <p className="text-white font-medium">正在处理交易...</p>
                    <p className="text-gray-400 text-sm mt-2">请稍候，不要关闭窗口</p>
                  </div>
                )}

                {/* Step: Success */}
                {step === 'success' && (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <p className="text-white font-medium text-lg mb-2">转账成功！</p>
                    <p className="text-gray-400 text-sm mb-4">
                      交易 ID: {transferResult?.transactionId}
                    </p>
                    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/30">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">转账金额</span>
                        <span className="text-white">{amount} {token}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">收款地址</span>
                        <span className="text-white font-mono">{toAddress.slice(0, 6)}...{toAddress.slice(-4)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step: Error */}
                {step === 'error' && (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="h-8 w-8 text-red-400" />
                    </div>
                    <p className="text-white font-medium text-lg mb-2">转账失败</p>
                    <p className="text-red-400 text-sm">{transferResult?.error}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              {step !== 'processing' && (
                <div className="flex gap-3 mt-6">
                  {(step === 'form' || step === 'success' || step === 'error') && (
                    <motion.button
                      onClick={handleClose}
                      className="flex-1 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {step === 'success' || step === 'error' ? '关闭' : '取消'}
                    </motion.button>
                  )}
                  {step === 'confirm' && (
                    <>
                      <motion.button
                        onClick={() => setStep('form')}
                        className="flex-1 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        返回
                      </motion.button>
                      <motion.button
                        onClick={handleConfirm}
                        className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        确认转账
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </>
                  )}
                  {step === 'pin' && (
                    <>
                      <motion.button
                        onClick={() => setStep('confirm')}
                        className="flex-1 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        返回
                      </motion.button>
                      <motion.button
                        onClick={handlePinSubmit}
                        disabled={pinCode.length !== 6}
                        className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        确认
                      </motion.button>
                    </>
                  )}
                  {step === 'form' && (
                    <motion.button
                      onClick={handleNext}
                      disabled={!toAddress || !amount}
                      className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      下一步
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
