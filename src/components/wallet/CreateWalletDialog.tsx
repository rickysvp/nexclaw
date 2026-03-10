'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wallet } from '@/types';

interface CreateWalletDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (wallet: Wallet) => void;
}

export function CreateWalletDialog({ isOpen, onClose, onCreate }: CreateWalletDialogProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async () => {
    if (!name.trim()) {
      setError('请输入钱包名称');
      return;
    }

    setIsCreating(true);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newWallet: Wallet = {
      id: `wallet_${Date.now()}`,
      name: name.trim(),
      description: description.trim() || undefined,
      address: `0x${Math.random().toString(16).slice(2, 42)}`,
      balance: '0 ETH',
      createdAt: new Date().toISOString(),
      uid: `agent_wallet_${Date.now()}`,
      userId: 'user_001',
    };
    
    onCreate(newWallet);
    setIsCreating(false);
    setName('');
    setDescription('');
    setError('');
    onClose();
  };

  const handleClose = () => {
    if (!isCreating) {
      setName('');
      setDescription('');
      setError('');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Plus className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">创建新钱包</h2>
                    <p className="text-sm text-gray-500">为您的 Agent 创建新钱包</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    钱包名称 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="例如：主钱包、投资钱包"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    描述（可选）
                  </label>
                  <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="钱包用途说明"
                    className="w-full"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500">
                    创建后，系统将自动生成一个新的钱包地址。您可以通过 Agent 使用自然语言来管理这个钱包。
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100 bg-gray-50">
                <Button
                  variant="outline"
                  onClick={handleClose}
                  disabled={isCreating}
                >
                  取消
                </Button>
                <Button
                  onClick={handleCreate}
                  disabled={isCreating}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  {isCreating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      创建中...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      创建钱包
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
