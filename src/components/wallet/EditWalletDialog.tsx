'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Edit3, Check } from 'lucide-react';
import { Wallet } from '@/types';

interface EditWalletDialogProps {
  wallet: Wallet;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedWallet: Wallet) => void;
}

export function EditWalletDialog({ wallet, isOpen, onClose, onSave }: EditWalletDialogProps) {
  const [name, setName] = useState(wallet.name || '');
  const [description, setDescription] = useState(wallet.description || '');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    
    // 模拟保存延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onSave({
      ...wallet,
      name: name.trim() || undefined,
      description: description.trim() || undefined,
    });
    
    setIsSaving(false);
    onClose();
  };

  const handleClose = () => {
    if (!isSaving) {
      onClose();
    }
  };

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
            className="fixed left-1/2 top-1/2 -trangray-x-1/2 -trangray-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-700/50 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                    <Edit3 className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">编辑钱包</h3>
                    <p className="text-sm text-gray-400">修改钱包信息</p>
                  </div>
                </div>
                <motion.button
                  onClick={handleClose}
                  className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={isSaving}
                >
                  <X className="h-5 w-5 text-gray-400" />
                </motion.button>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    钱包名称 <span className="text-gray-600">(可选)</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="例如：主钱包、投资钱包"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                    disabled={isSaving}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    钱包描述 <span className="text-gray-600">(可选)</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="添加钱包的用途说明..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                    disabled={isSaving}
                  />
                </div>

                {/* Wallet Info Display */}
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700/30">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">地址</span>
                      <span className="text-gray-300 font-mono">{wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">余额</span>
                      <span className="text-white font-medium">{wallet.balance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">UID</span>
                      <span className="text-gray-300 font-mono">{wallet.uid}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <motion.button
                  onClick={handleClose}
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSaving}
                >
                  取消
                </motion.button>
                <motion.button
                  onClick={handleSave}
                  className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      保存中...
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" />
                      保存
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
