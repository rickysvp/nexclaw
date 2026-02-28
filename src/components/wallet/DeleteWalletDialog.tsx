'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, AlertTriangle } from 'lucide-react';
import { Wallet } from '@/types';

interface DeleteWalletDialogProps {
  wallet: Wallet;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export function DeleteWalletDialog({ wallet, isOpen, onClose, onDelete }: DeleteWalletDialogProps) {
  const [confirmText, setConfirmText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (confirmText !== 'DELETE') {
      setError('请输入 DELETE 以确认删除');
      return;
    }

    setIsDeleting(true);
    setError(null);

    // 模拟删除延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    onDelete();
    setIsDeleting(false);
    setConfirmText('');
    onClose();
  };

  const handleClose = () => {
    if (!isDeleting) {
      setConfirmText('');
      setError(null);
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
            <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-red-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <Trash2 className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">删除钱包</h3>
                    <p className="text-sm text-gray-400">此操作不可撤销</p>
                  </div>
                </div>
                <motion.button
                  onClick={handleClose}
                  className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={isDeleting}
                >
                  <X className="h-5 w-5 text-gray-400" />
                </motion.button>
              </div>

              {/* Warning */}
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-400 font-medium mb-1">警告</p>
                    <p className="text-sm text-gray-400">
                      删除钱包后，您将无法再通过 NexClaw 管理该钱包。
                      请确保您已备份钱包地址和私钥（如果有）。
                      此操作不会删除区块链上的资产。
                    </p>
                  </div>
                </div>
              </div>

              {/* Wallet Info */}
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700/30 mb-6">
                <p className="text-sm text-gray-400 mb-2">即将删除的钱包：</p>
                <p className="text-white font-medium">{wallet.name || `Wallet #${wallet.id}`}</p>
                <p className="text-sm text-gray-500 font-mono">{wallet.address}</p>
                <p className="text-sm text-orange-400 mt-1">{wallet.balance}</p>
              </div>

              {/* Confirmation Input */}
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">
                  请输入 <span className="text-red-400 font-mono">DELETE</span> 以确认删除
                </label>
                <input
                  type="text"
                  value={confirmText}
                  onChange={(e) => {
                    setConfirmText(e.target.value);
                    setError(null);
                  }}
                  placeholder="DELETE"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900/80 border text-white placeholder-gray-500 focus:outline-none transition-colors font-mono uppercase ${
                    error ? 'border-red-500/50' : 'border-gray-700/50 focus:border-red-500/50'
                  }`}
                  disabled={isDeleting}
                />
                {error && (
                  <p className="text-red-400 text-sm mt-2">{error}</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <motion.button
                  onClick={handleClose}
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isDeleting}
                >
                  取消
                </motion.button>
                <motion.button
                  onClick={handleDelete}
                  className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isDeleting || confirmText !== 'DELETE'}
                >
                  {isDeleting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      删除中...
                    </>
                  ) : (
                    <>
                      <Trash2 className="h-4 w-4" />
                      确认删除
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
