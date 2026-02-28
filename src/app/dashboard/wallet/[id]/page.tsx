'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Copy,
  Download,
  Wallet,
  Activity,
  Clock,
  TrendingUp,
  Send,
  Plus,
  Shield,
  MoreVertical,
  Edit3,
  Trash2,
  ExternalLink,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { mockWallets, mockTransactions, getWalletStats, getWalletSecurityRule } from '@/lib/mockData';
import { Wallet as WalletType, Transaction } from '@/types';
import { EditWalletDialog } from '@/components/wallet/EditWalletDialog';
import { DeleteWalletDialog } from '@/components/wallet/DeleteWalletDialog';
import { TransferDialog } from '@/components/wallet/TransferDialog';
import { DepositDialog } from '@/components/wallet/DepositDialog';

export default function WalletDetailPage() {
  const params = useParams();
  const router = useRouter();
  const walletId = params.id as string;

  const [wallet, setWallet] = useState<WalletType | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [stats, setStats] = useState({
    totalTransactions: 0,
    totalVolume: '0 ETH',
    lastActivity: '',
  });
  const [securityScore, setSecurityScore] = useState(0);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const [showActions, setShowActions] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false);
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false);

  useEffect(() => {
    const foundWallet = mockWallets.find((w) => w.id === walletId);
    if (foundWallet) {
      setWallet(foundWallet);
      const walletTransactions = mockTransactions.filter((tx) => tx.walletId === walletId);
      setTransactions(walletTransactions);
      setStats(getWalletStats(walletId));
      
      const securityRule = getWalletSecurityRule(walletId);
      setSecurityScore(securityRule?.securityScore || 0);
    }
  }, [walletId]);

  const handleUpdateWallet = (updatedWallet: WalletType) => {
    setWallet(updatedWallet);
    // 更新 mockWallets 数组
    const index = mockWallets.findIndex((w) => w.id === updatedWallet.id);
    if (index !== -1) {
      mockWallets[index] = updatedWallet;
    }
    setCopyMessage('钱包信息已更新');
    setTimeout(() => setCopyMessage(null), 2000);
  };

  const handleDeleteWallet = () => {
    // 从 mockWallets 中删除
    const index = mockWallets.findIndex((w) => w.id === walletId);
    if (index !== -1) {
      mockWallets.splice(index, 1);
    }
    // 跳转到仪表盘
    router.push('/dashboard');
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyMessage(`${label}已复制`);
    setTimeout(() => setCopyMessage(null), 2000);
  };

  const handleExport = () => {
    if (!wallet) return;
    
    const data = {
      wallet,
      transactions,
      stats,
      exportDate: new Date().toISOString(),
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wallet-${wallet.id}-export.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!wallet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Wallet className="h-8 w-8 text-white" />
          </div>
          <p className="text-gray-400">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Copy Message */}
      {copyMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          {copyMessage}
        </motion.div>
      )}

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => router.push('/dashboard')}
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="h-5 w-5 text-gray-400" />
            </motion.button>
            <div>
              <h1 className="text-2xl font-bold text-white">{wallet.name || `Wallet #${wallet.id}`}</h1>
              <p className="text-gray-400 text-sm">{wallet.description || 'Agent Wallet'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={handleExport}
              className="px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-white flex items-center gap-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-4 w-4" />
              导出
            </motion.button>

            <div className="relative">
              <motion.button
                onClick={() => setShowActions(!showActions)}
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </motion.button>

              {showActions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-900 border border-gray-800 shadow-xl z-50"
                >
                  <button 
                    onClick={() => {
                      setShowActions(false);
                      setIsEditDialogOpen(true);
                    }}
                    className="w-full px-4 py-3 text-left text-white hover:bg-gray-800 flex items-center gap-2 transition-colors"
                  >
                    <Edit3 className="h-4 w-4" />
                    编辑钱包
                  </button>
                  <button 
                    onClick={() => {
                      setShowActions(false);
                      setIsDeleteDialogOpen(true);
                    }}
                    className="w-full px-4 py-3 text-left text-red-400 hover:bg-gray-800 flex items-center gap-2 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    删除钱包
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Wallet Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Balance Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">余额</span>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-orange-400" />
                </div>
              </div>
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
                {wallet.balance}
              </div>
              <div className="flex gap-3 mt-6">
                <motion.button
                  onClick={() => setIsTransferDialogOpen(true)}
                  className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-4 w-4" />
                  转账
                </motion.button>
                <motion.button
                  onClick={() => setIsDepositDialogOpen(true)}
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus className="h-4 w-4" />
                  充值
                </motion.button>
              </div>
            </div>

            {/* Wallet Details */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-white">钱包信息</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 block mb-1">地址</label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 bg-gray-900/80 px-3 py-2 rounded-lg text-sm text-gray-300 font-mono truncate">
                      {wallet.address}
                    </code>
                    <motion.button
                      onClick={() => handleCopy(wallet.address, '地址')}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Copy className="h-4 w-4 text-orange-400" />
                    </motion.button>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-400 block mb-1">Agent UID</label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 bg-gray-900/80 px-3 py-2 rounded-lg text-sm text-gray-300 font-mono">
                      {wallet.uid}
                    </code>
                    <motion.button
                      onClick={() => handleCopy(wallet.uid, 'UID')}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Copy className="h-4 w-4 text-orange-400" />
                    </motion.button>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-400 block mb-1">创建时间</label>
                  <p className="text-white">{new Date(wallet.createdAt).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Security Score */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-400" />
                  <span className="text-white font-medium">安全评分</span>
                </div>
                <span className={`text-2xl font-bold ${
                  securityScore >= 80 ? 'text-green-400' : 
                  securityScore >= 60 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {securityScore}
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    securityScore >= 80 ? 'bg-green-500' : 
                    securityScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${securityScore}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {securityScore >= 80 ? '安全等级：优秀' : 
                 securityScore >= 60 ? '安全等级：良好' : '安全等级：需加强'}
              </p>
            </div>
          </motion.div>

          {/* Middle & Right Columns - Stats & Transactions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-gray-400">总交易</span>
                </div>
                <p className="text-2xl font-bold text-white">{stats.totalTransactions}</p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  </div>
                  <span className="text-gray-400">总交易量</span>
                </div>
                <p className="text-2xl font-bold text-white">{stats.totalVolume}</p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-gray-400">最后活动</span>
                </div>
                <p className="text-lg font-bold text-white">
                  {stats.lastActivity ? new Date(stats.lastActivity).toLocaleDateString() : '无'}
                </p>
              </div>
            </div>

            {/* Transactions List */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">交易记录</h3>
                <button className="text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1">
                  查看全部
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              {transactions.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mx-auto mb-4">
                    <Activity className="h-8 w-8 text-gray-600" />
                  </div>
                  <p className="text-gray-400">暂无交易记录</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {transactions.map((tx, index) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          tx.type === 'send' ? 'bg-red-500/20' :
                          tx.type === 'receive' ? 'bg-green-500/20' :
                          'bg-blue-500/20'
                        }`}>
                          {tx.type === 'send' ? (
                            <Send className="h-5 w-5 text-red-400" />
                          ) : tx.type === 'receive' ? (
                            <Plus className="h-5 w-5 text-green-400" />
                          ) : (
                            <Activity className="h-5 w-5 text-blue-400" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            {tx.type === 'send' ? '转账' :
                             tx.type === 'receive' ? '收款' :
                             `购买 ${tx.token}`}
                          </p>
                          <p className="text-sm text-gray-400">
                            {new Date(tx.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${
                          tx.type === 'send' ? 'text-red-400' :
                          tx.type === 'receive' ? 'text-green-400' :
                          'text-blue-400'
                        }`}>
                          {tx.type === 'send' ? '-' : tx.type === 'receive' ? '+' : ''}
                          {tx.amount}
                        </p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          tx.status === 'success' ? 'bg-green-500/20 text-green-400' :
                          tx.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {tx.status === 'success' ? '成功' :
                           tx.status === 'pending' ? '处理中' : '失败'}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Edit Wallet Dialog */}
      {wallet && (
        <EditWalletDialog
          wallet={wallet}
          isOpen={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          onSave={handleUpdateWallet}
        />
      )}

      {/* Delete Wallet Dialog */}
      {wallet && (
        <DeleteWalletDialog
          wallet={wallet}
          isOpen={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          onDelete={handleDeleteWallet}
        />
      )}

      {/* Transfer Dialog */}
      {wallet && (
        <TransferDialog
          wallet={wallet}
          isOpen={isTransferDialogOpen}
          onClose={() => setIsTransferDialogOpen(false)}
          onSuccess={() => {
            // 刷新交易记录和余额
            const walletTransactions = mockTransactions.filter((tx) => tx.walletId === walletId);
            setTransactions(walletTransactions);
            setStats(getWalletStats(walletId));
            setCopyMessage('转账成功');
            setTimeout(() => setCopyMessage(null), 2000);
          }}
        />
      )}

      {/* Deposit Dialog */}
      {wallet && (
        <DepositDialog
          wallet={wallet}
          isOpen={isDepositDialogOpen}
          onClose={() => setIsDepositDialogOpen(false)}
        />
      )}
    </div>
  );
}
