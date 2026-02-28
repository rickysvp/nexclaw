'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Plus,
  Copy,
  CheckCircle,
  Wallet,
  AlertCircle,
  QrCode,
  ExternalLink,
} from 'lucide-react';
import { Wallet as WalletType } from '@/types';

interface DepositDialogProps {
  wallet: WalletType;
  isOpen: boolean;
  onClose: () => void;
}

export function DepositDialog({ wallet, isOpen, onClose }: DepositDialogProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'address' | 'qr'>('address');
  const [showWarning, setShowWarning] = useState(true);

  // 重置状态
  useEffect(() => {
    if (isOpen) {
      setCopied(false);
      setActiveTab('address');
      setShowWarning(true);
    }
  }, [isOpen]);

  // 复制地址
  const handleCopy = () => {
    navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 生成 QR Code URL（使用 Google Chart API）
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    wallet.address
  )}`;

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
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-700/50 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    <Plus className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">充值</h3>
                    <p className="text-sm text-gray-400">
                      {wallet.name || `Wallet #${wallet.id}`}
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5 text-gray-400" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Warning */}
                {showWarning && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-yellow-400 font-medium mb-1">重要提示</p>
                        <p className="text-sm text-yellow-400/80">
                          请确保只向此地址发送 ETH 和 ERC-20 代币。发送其他类型的代币可能导致资产丢失。
                        </p>
                      </div>
                      <button
                        onClick={() => setShowWarning(false)}
                        className="text-yellow-400/60 hover:text-yellow-400"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Tabs */}
                <div className="flex gap-2">
                  <motion.button
                    onClick={() => setActiveTab('address')}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                      activeTab === 'address'
                        ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30'
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    钱包地址
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab('qr')}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                      activeTab === 'qr'
                        ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30'
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    二维码
                  </motion.button>
                </div>

                {/* Tab Content */}
                {activeTab === 'address' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    {/* Address Display */}
                    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/30">
                      <label className="text-sm text-gray-400 block mb-2">钱包地址</label>
                      <div className="flex items-center gap-3">
                        <code className="flex-1 text-sm text-white font-mono break-all">
                          {wallet.address}
                        </code>
                        <motion.button
                          onClick={handleCopy}
                          className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {copied ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </motion.button>
                      </div>
                      {copied && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-green-400 text-sm mt-2"
                        >
                          地址已复制到剪贴板
                        </motion.p>
                      )}
                    </div>

                    {/* Network Info */}
                    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Wallet className="h-4 w-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium text-white">以太坊主网</p>
                          <p className="text-sm text-gray-400">Ethereum Mainnet</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        请确保发送方使用以太坊主网，使用其他网络可能导致资产丢失。
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'qr' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-center space-y-4"
                  >
                    {/* QR Code */}
                    <div className="inline-block p-4 bg-white rounded-2xl">
                      <img
                        src={qrCodeUrl}
                        alt="Wallet QR Code"
                        className="w-48 h-48"
                      />
                    </div>
                    <p className="text-gray-400 text-sm">
                      扫描二维码获取钱包地址
                    </p>
                  </motion.div>
                )}

                {/* Instructions */}
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/30">
                  <h4 className="font-medium text-white mb-3">充值说明</h4>
                  <ol className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-medium">1.</span>
                      复制上方钱包地址或扫描二维码
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-medium">2.</span>
                      在您的交易所或其他钱包中发起转账
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-medium">3.</span>
                      粘贴此地址作为收款地址
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-medium">4.</span>
                      确认转账并等待网络确认（通常需要 1-5 分钟）
                    </li>
                  </ol>
                </div>

                {/* Explorer Link */}
                <a
                  href={`https://etherscan.io/address/${wallet.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  在区块链浏览器中查看
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
