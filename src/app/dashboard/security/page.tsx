'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Lock,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Plus,
  Trash2,
  Save,
  ChevronLeft,
  Wallet,
  ArrowLeft,
  Check,
  X,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { mockWallets, mockSecurityRules, getWalletSecurityRule } from '@/lib/mockData';
import { SecurityRule, WhitelistAddress, BlacklistContract, Wallet as WalletType } from '@/types';

export default function SecurityPage() {
  const router = useRouter();
  const [selectedWallet, setSelectedWallet] = useState<WalletType | null>(null);
  const [securityRule, setSecurityRule] = useState<SecurityRule | null>(null);
  const [activeTab, setActiveTab] = useState<'pin' | 'limits' | 'whitelist' | 'blacklist'>('pin');
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // PIN Code State
  const [pinCode, setPinCode] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [oldPin, setOldPin] = useState('');
  const [showPinSuccess, setShowPinSuccess] = useState(false);

  // Limits State
  const [maxAmountPerTx, setMaxAmountPerTx] = useState('');
  const [maxAmountPerDay, setMaxAmountPerDay] = useState('');

  // Whitelist State
  const [whitelistAddresses, setWhitelistAddresses] = useState<WhitelistAddress[]>([]);
  const [newWhitelistAddress, setNewWhitelistAddress] = useState('');
  const [newWhitelistName, setNewWhitelistName] = useState('');

  // Blacklist State
  const [blacklistContracts, setBlacklistContracts] = useState<BlacklistContract[]>([]);
  const [newBlacklistAddress, setNewBlacklistAddress] = useState('');
  const [newBlacklistName, setNewBlacklistName] = useState('');
  const [newBlacklistReason, setNewBlacklistReason] = useState('');

  // Initialize with first wallet
  useEffect(() => {
    if (mockWallets.length > 0 && !selectedWallet) {
      setSelectedWallet(mockWallets[0]);
    }
  }, []);

  useEffect(() => {
    if (selectedWallet) {
      const rule = getWalletSecurityRule(selectedWallet.id);
      if (rule) {
        setSecurityRule(rule);
        setPinCode(rule.pinCode || '');
        setMaxAmountPerTx(rule.maxAmountPerTx || '');
        setMaxAmountPerDay(rule.maxAmountPerDay || '');
        setWhitelistAddresses(rule.whitelistAddresses);
        setBlacklistContracts(rule.blacklistContracts);
      } else {
        // Create default rule
        const newRule: SecurityRule = {
          id: `sr_${selectedWallet.id}`,
          walletId: selectedWallet.id,
          pinCode: '',
          maxAmountPerTx: '',
          maxAmountPerDay: '',
          whitelistAddresses: [],
          blacklistContracts: [],
          securityScore: 50,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        setSecurityRule(newRule);
        mockSecurityRules.push(newRule);
        setPinCode('');
        setMaxAmountPerTx('');
        setMaxAmountPerDay('');
        setWhitelistAddresses([]);
        setBlacklistContracts([]);
      }
      // Reset PIN states
      setOldPin('');
      setConfirmPin('');
      setShowPinSuccess(false);
    }
  }, [selectedWallet]);

  const calculateSecurityScore = (rule: Partial<SecurityRule>): number => {
    let score = 50; // Base score
    if (rule.pinCode) score += 15;
    if (rule.maxAmountPerTx) score += 10;
    if (rule.maxAmountPerDay) score += 10;
    if (rule.whitelistAddresses && rule.whitelistAddresses.length > 0) score += 10;
    if (rule.blacklistContracts && rule.blacklistContracts.length > 0) score += 5;
    return Math.min(score, 100);
  };

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    if (type === 'success') {
      setSaveMessage(message);
      setTimeout(() => setSaveMessage(null), 3000);
    } else {
      setErrorMessage(message);
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };

  const handleSavePin = () => {
    if (!securityRule) return;

    // Validate PIN
    if (pinCode.length !== 6) {
      showNotification('PIN 码必须是 6 位数字', 'error');
      return;
    }

    if (pinCode !== confirmPin) {
      showNotification('两次输入的 PIN 码不一致', 'error');
      return;
    }

    // If changing existing PIN, verify old PIN
    if (securityRule.pinCode && oldPin !== securityRule.pinCode) {
      showNotification('当前 PIN 码错误', 'error');
      return;
    }

    const updatedRule: SecurityRule = {
      ...securityRule,
      pinCode,
      securityScore: calculateSecurityScore({ ...securityRule, pinCode }),
      updatedAt: new Date().toISOString(),
    };

    updateSecurityRule(updatedRule);
    setShowPinSuccess(true);
    setOldPin('');
    setConfirmPin('');
    setTimeout(() => setShowPinSuccess(false), 2000);
  };

  const handleSaveLimits = () => {
    if (!securityRule) return;

    const updatedRule: SecurityRule = {
      ...securityRule,
      maxAmountPerTx: maxAmountPerTx || undefined,
      maxAmountPerDay: maxAmountPerDay || undefined,
      securityScore: calculateSecurityScore({ ...securityRule, maxAmountPerTx, maxAmountPerDay }),
      updatedAt: new Date().toISOString(),
    };

    updateSecurityRule(updatedRule);
  };

  const updateSecurityRule = (updatedRule: SecurityRule) => {
    const index = mockSecurityRules.findIndex((r) => r.id === updatedRule.id);
    if (index !== -1) {
      mockSecurityRules[index] = updatedRule;
    }
    setSecurityRule(updatedRule);
    showNotification('保存成功！');
  };

  const addWhitelistAddress = () => {
    if (!newWhitelistAddress || !newWhitelistName) return;
    
    // Validate Ethereum address
    if (!newWhitelistAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      showNotification('请输入有效的以太坊地址', 'error');
      return;
    }

    const newEntry: WhitelistAddress = {
      id: `wl_${Date.now()}`,
      address: newWhitelistAddress,
      name: newWhitelistName,
      addedAt: new Date().toISOString(),
    };
    
    const updated = [...whitelistAddresses, newEntry];
    setWhitelistAddresses(updated);
    
    if (securityRule) {
      const updatedRule: SecurityRule = {
        ...securityRule,
        whitelistAddresses: updated,
        securityScore: calculateSecurityScore({ ...securityRule, whitelistAddresses: updated }),
        updatedAt: new Date().toISOString(),
      };
      updateSecurityRule(updatedRule);
    }
    
    setNewWhitelistAddress('');
    setNewWhitelistName('');
  };

  const removeWhitelistAddress = (id: string) => {
    const updated = whitelistAddresses.filter((addr) => addr.id !== id);
    setWhitelistAddresses(updated);
    
    if (securityRule) {
      const updatedRule: SecurityRule = {
        ...securityRule,
        whitelistAddresses: updated,
        securityScore: calculateSecurityScore({ ...securityRule, whitelistAddresses: updated }),
        updatedAt: new Date().toISOString(),
      };
      updateSecurityRule(updatedRule);
    }
  };

  const addBlacklistContract = () => {
    if (!newBlacklistAddress || !newBlacklistName) return;
    
    // Validate Ethereum address
    if (!newBlacklistAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      showNotification('请输入有效的合约地址', 'error');
      return;
    }

    const newEntry: BlacklistContract = {
      id: `bl_${Date.now()}`,
      address: newBlacklistAddress,
      name: newBlacklistName,
      reason: newBlacklistReason || undefined,
      addedAt: new Date().toISOString(),
    };
    
    const updated = [...blacklistContracts, newEntry];
    setBlacklistContracts(updated);
    
    if (securityRule) {
      const updatedRule: SecurityRule = {
        ...securityRule,
        blacklistContracts: updated,
        securityScore: calculateSecurityScore({ ...securityRule, blacklistContracts: updated }),
        updatedAt: new Date().toISOString(),
      };
      updateSecurityRule(updatedRule);
    }
    
    setNewBlacklistAddress('');
    setNewBlacklistName('');
    setNewBlacklistReason('');
  };

  const removeBlacklistContract = (id: string) => {
    const updated = blacklistContracts.filter((contract) => contract.id !== id);
    setBlacklistContracts(updated);
    
    if (securityRule) {
      const updatedRule: SecurityRule = {
        ...securityRule,
        blacklistContracts: updated,
        securityScore: calculateSecurityScore({ ...securityRule, blacklistContracts: updated }),
        updatedAt: new Date().toISOString(),
      };
      updateSecurityRule(updatedRule);
    }
  };

  const getSecurityLevel = (score: number) => {
    if (score >= 80) return { label: '高', color: 'text-green-400', bgColor: 'bg-green-500/20' };
    if (score >= 60) return { label: '中', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' };
    return { label: '低', color: 'text-red-400', bgColor: 'bg-red-500/20' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Notifications */}
      <AnimatePresence>
        {saveMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <Check className="h-5 w-5" />
            {saveMessage}
          </motion.div>
        )}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <X className="h-5 w-5" />
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => router.push('/dashboard')}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="h-5 w-5" />
              </motion.button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">安全规则</h1>
                  <p className="text-xs text-gray-400">配置钱包安全设置</p>
                </div>
              </div>
            </div>
            {selectedWallet && securityRule && (
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm">安全评分</span>
                <div className={`px-3 py-1 rounded-full ${getSecurityLevel(securityRule.securityScore).bgColor}`}>
                  <span className={`font-bold ${getSecurityLevel(securityRule.securityScore).color}`}>
                    {securityRule.securityScore} - {getSecurityLevel(securityRule.securityScore).label}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Wallet Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-white">选择钱包</h3>
              <div className="space-y-3">
                {mockWallets.map((wallet) => (
                  <motion.button
                    key={wallet.id}
                    onClick={() => setSelectedWallet(wallet)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                      selectedWallet?.id === wallet.id
                        ? 'border-orange-500/50 bg-gradient-to-r from-orange-500/10 to-purple-500/10'
                        : 'border-gray-700/50 hover:border-gray-600/50 bg-gray-900/30'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                        <Wallet className="h-5 w-5 text-orange-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white truncate">{wallet.name || `Wallet #${wallet.id}`}</p>
                        <p className="text-sm text-gray-400">{wallet.balance}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Security Settings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {selectedWallet ? (
              <div className="space-y-6">
                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {[
                    { id: 'pin', label: 'PIN 码', icon: Lock },
                    { id: 'limits', label: '交易限额', icon: DollarSign },
                    { id: 'whitelist', label: '白名单', icon: CheckCircle },
                    { id: 'blacklist', label: '黑名单', icon: AlertCircle },
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-4 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30'
                          : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.label}
                    </motion.button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'pin' && (
                    <motion.div
                      key="pin"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">PIN 码设置</h3>
                        <p className="text-gray-400">设置 6 位数字 PIN 码，用于交易确认</p>
                      </div>

                      <div className="space-y-4 max-w-md">
                        {securityRule?.pinCode && (
                          <div>
                            <label className="block text-sm text-gray-400 mb-2">当前 PIN 码</label>
                            <input
                              type="password"
                              value={oldPin}
                              onChange={(e) => setOldPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                              placeholder="输入当前 PIN 码"
                              maxLength={6}
                              className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors font-mono tracking-widest"
                            />
                          </div>
                        )}

                        <div>
                          <label className="block text-sm text-gray-400 mb-2">
                            {securityRule?.pinCode ? '新 PIN 码' : '设置 PIN 码'}
                          </label>
                          <input
                            type="password"
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            placeholder="6 位数字"
                            maxLength={6}
                            className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors font-mono tracking-widest"
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-gray-400 mb-2">确认 PIN 码</label>
                          <input
                            type="password"
                            value={confirmPin}
                            onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            placeholder="再次输入 PIN 码"
                            maxLength={6}
                            className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors font-mono tracking-widest"
                          />
                          {pinCode && confirmPin && pinCode !== confirmPin && (
                            <p className="text-red-400 text-sm mt-2">PIN 码不匹配</p>
                          )}
                        </div>

                        <motion.button
                          onClick={handleSavePin}
                          disabled={!pinCode || pinCode.length !== 6 || pinCode !== confirmPin || (securityRule?.pinCode ? !oldPin : false)}
                          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Save className="h-5 w-5" />
                          {securityRule?.pinCode ? '修改 PIN 码' : '设置 PIN 码'}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'limits' && (
                    <motion.div
                      key="limits"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">交易限额</h3>
                        <p className="text-gray-400">设置交易金额限制，保护资产安全</p>
                      </div>

                      <div className="space-y-4 max-w-md">
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">单笔交易限额 (ETH)</label>
                          <input
                            type="number"
                            value={maxAmountPerTx}
                            onChange={(e) => setMaxAmountPerTx(e.target.value)}
                            placeholder="例如：1.0"
                            step="0.01"
                            min="0"
                            className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                          />
                          <p className="text-sm text-gray-500 mt-2">超过此金额的交易需要额外确认</p>
                        </div>

                        <div>
                          <label className="block text-sm text-gray-400 mb-2">日累计限额 (ETH)</label>
                          <input
                            type="number"
                            value={maxAmountPerDay}
                            onChange={(e) => setMaxAmountPerDay(e.target.value)}
                            placeholder="例如：5.0"
                            step="0.01"
                            min="0"
                            className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                          />
                          <p className="text-sm text-gray-500 mt-2">每日累计交易金额上限</p>
                        </div>

                        <motion.button
                          onClick={handleSaveLimits}
                          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Save className="h-5 w-5" />
                          保存限额设置
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'whitelist' && (
                    <motion.div
                      key="whitelist"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">地址白名单</h3>
                        <p className="text-gray-400">添加信任的地址，交易时无需额外确认</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <input
                            type="text"
                            value={newWhitelistName}
                            onChange={(e) => setNewWhitelistName(e.target.value)}
                            placeholder="名称（例如：我的主钱包）"
                            className="flex-1 px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                          />
                          <input
                            type="text"
                            value={newWhitelistAddress}
                            onChange={(e) => setNewWhitelistAddress(e.target.value)}
                            placeholder="0x..."
                            className="flex-[2] px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors font-mono"
                          />
                          <motion.button
                            onClick={addWhitelistAddress}
                            disabled={!newWhitelistAddress || !newWhitelistName}
                            className="px-4 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Plus className="h-5 w-5" />
                          </motion.button>
                        </div>

                        <div className="space-y-3">
                          {whitelistAddresses.map((addr) => (
                            <motion.div
                              key={addr.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-700/30"
                            >
                              <div>
                                <p className="font-medium text-white">{addr.name}</p>
                                <p className="text-sm text-gray-400 font-mono">{addr.address}</p>
                              </div>
                              <motion.button
                                onClick={() => removeWhitelistAddress(addr.id)}
                                className="p-2 rounded-lg hover:bg-red-500/20 text-red-400 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </motion.button>
                            </motion.div>
                          ))}
                          {whitelistAddresses.length === 0 && (
                            <div className="text-center py-12">
                              <CheckCircle className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                              <p className="text-gray-500">暂无白名单地址</p>
                              <p className="text-gray-600 text-sm mt-1">添加信任地址可提升安全评分</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'blacklist' && (
                    <motion.div
                      key="blacklist"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">合约黑名单</h3>
                        <p className="text-gray-400">添加可疑合约地址，阻止交互</p>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={newBlacklistName}
                            onChange={(e) => setNewBlacklistName(e.target.value)}
                            placeholder="名称（例如：钓鱼合约）"
                            className="px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                          />
                          <input
                            type="text"
                            value={newBlacklistAddress}
                            onChange={(e) => setNewBlacklistAddress(e.target.value)}
                            placeholder="合约地址 0x..."
                            className="px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors font-mono"
                          />
                        </div>
                        <input
                          type="text"
                          value={newBlacklistReason}
                          onChange={(e) => setNewBlacklistReason(e.target.value)}
                          placeholder="原因（可选）"
                          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                        />
                        <motion.button
                          onClick={addBlacklistContract}
                          disabled={!newBlacklistAddress || !newBlacklistName}
                          className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Plus className="h-4 w-4" />
                          添加到黑名单
                        </motion.button>

                        <div className="space-y-3 mt-6">
                          {blacklistContracts.map((contract) => (
                            <motion.div
                              key={contract.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              className="flex items-center justify-between p-4 bg-red-500/5 rounded-xl border border-red-500/20"
                            >
                              <div>
                                <p className="font-medium text-white">{contract.name}</p>
                                <p className="text-sm text-gray-400 font-mono">{contract.address}</p>
                                {contract.reason && (
                                  <p className="text-sm text-red-400 mt-1">{contract.reason}</p>
                                )}
                              </div>
                              <motion.button
                                onClick={() => removeBlacklistContract(contract.id)}
                                className="p-2 rounded-lg hover:bg-red-500/20 text-red-400 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </motion.button>
                            </motion.div>
                          ))}
                          {blacklistContracts.length === 0 && (
                            <div className="text-center py-12">
                              <AlertCircle className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                              <p className="text-gray-500">暂无黑名单合约</p>
                              <p className="text-gray-600 text-sm mt-1">添加可疑合约可提升安全评分</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center mb-6">
                  <Wallet className="h-10 w-10 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">选择钱包</h3>
                <p className="text-gray-400">请从左侧选择一个钱包来配置安全规则</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
