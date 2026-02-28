'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Wallet, Search, Plus, MoreVertical, Send, ArrowDownLeft,
  Trash2, Download, RefreshCw, Copy, ExternalLink,
  CheckCircle, XCircle, AlertCircle, ChevronLeft,
  Settings, User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { mockWallets, mockSecurityRules } from '@/lib/mockData';
import { Wallet as WalletType } from '@/types';
import { TransferDialog } from '@/components/wallet/TransferDialog';
import { DepositDialog } from '@/components/wallet/DepositDialog';

export default function WalletsPage() {
  const router = useRouter();
  const [wallets, setWallets] = useState<WalletType[]>(mockWallets);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'expired'>('all');
  const [selectedWallet, setSelectedWallet] = useState<WalletType | null>(null);
  const [transferWallet, setTransferWallet] = useState<WalletType | null>(null);
  const [depositWallet, setDepositWallet] = useState<WalletType | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [exportKeyOpen, setExportKeyOpen] = useState(false);
  const [exportPin, setExportPin] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const [newWalletName, setNewWalletName] = useState('');
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  // Filter wallets
  const filteredWallets = useMemo(() => {
    return wallets.filter(wallet => {
      const matchesSearch = 
        wallet.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wallet.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wallet.uid.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'active' && wallet.status === 'active') ||
        (statusFilter === 'expired' && wallet.status === 'expired');
      
      return matchesSearch && matchesStatus;
    });
  }, [wallets, searchQuery, statusFilter]);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCreateWallet = () => {
    if (wallets.length >= 15) {
      showNotification('已达到钱包数量上限 (15个)', 'error');
      return;
    }
    
    const newWallet: WalletType = {
      id: String(wallets.length + 1),
      name: newWalletName || `Agent Wallet ${String(wallets.length + 1).padStart(3, '0')}`,
      address: `0x${Math.random().toString(16).substring(2, 42)}`,
      balance: "0 ETH",
      createdAt: new Date().toISOString(),
      uid: `agent_${Math.random().toString(36).substring(2, 10)}`,
      userId: 'user_001',
      status: 'active',
    };
    
    setWallets([...wallets, newWallet]);
    setCreateOpen(false);
    setNewWalletName('');
    showNotification('钱包创建成功！');
  };

  const handleDeleteWallet = () => {
    if (deleteConfirmText !== 'DELETE') {
      showNotification('请输入 DELETE 确认删除', 'error');
      return;
    }
    
    if (selectedWallet) {
      setWallets(wallets.filter(w => w.id !== selectedWallet.id));
      setDeleteConfirmOpen(false);
      setDeleteConfirmText('');
      setSelectedWallet(null);
      showNotification('钱包已删除');
    }
  };

  const handleExportKey = () => {
    const rule = mockSecurityRules.find(r => r.walletId === selectedWallet?.id);
    if (rule?.pinCode && exportPin !== rule.pinCode) {
      showNotification('PIN 码错误', 'error');
      return;
    }
    
    setExportKeyOpen(false);
    setExportPin('');
    showNotification('私钥已导出到剪贴板');
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showNotification(`${label}已复制`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">活跃</Badge>;
      case 'expired':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">已过期</Badge>;
      case 'frozen':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">已冻结</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-400">未知</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
              notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {notification.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
            {notification.message}
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
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">钱包管理</h1>
                  <p className="text-xs text-gray-400">{wallets.length}/15 个钱包</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => router.push('/dashboard/settings')}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Settings className="h-5 w-5" />
              </motion.button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="搜索钱包名称、地址或 UID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="flex gap-2">
            {(['all', 'active', 'expired'] as const).map((status) => (
              <motion.button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  statusFilter === status
                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'all' ? '全部' : status === 'active' ? '活跃' : '已过期'}
              </motion.button>
            ))}
            <motion.button
              onClick={() => setCreateOpen(true)}
              disabled={wallets.length >= 15}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium flex items-center gap-2 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus className="h-4 w-4" />
              创建
            </motion.button>
          </div>
        </div>

        {/* Wallets Table */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900/50 border-b border-gray-700/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">钱包</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">地址</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">AUID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">余额</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">状态</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">创建时间</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-gray-400">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/30">
                {filteredWallets.map((wallet) => (
                  <motion.tr
                    key={wallet.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-orange-400" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{wallet.name}</p>
                          <p className="text-xs text-gray-500">ID: {wallet.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-gray-300">
                          {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
                        </span>
                        <button
                          onClick={() => handleCopy(wallet.address, '地址')}
                          className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white transition-colors"
                        >
                          <Copy className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-gray-300">{wallet.uid}</span>
                        <button
                          onClick={() => handleCopy(wallet.uid, 'UID')}
                          className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white transition-colors"
                        >
                          <Copy className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-white">{wallet.balance}</p>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(wallet.status || 'active')}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(wallet.createdAt).toLocaleDateString('zh-CN')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <motion.button
                          onClick={() => setDepositWallet(wallet)}
                          className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="充值"
                        >
                          <ArrowDownLeft className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          onClick={() => setTransferWallet(wallet)}
                          className="p-2 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="转账"
                        >
                          <Send className="h-4 w-4" />
                        </motion.button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <motion.button
                              className="p-2 rounded-lg bg-gray-700/50 text-gray-400 hover:bg-gray-600/50 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <MoreVertical className="h-4 w-4" />
                            </motion.button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                            <DropdownMenuItem
                              onClick={() => router.push(`/dashboard/wallet/${wallet.id}`)}
                              className="text-gray-300 focus:bg-gray-700 focus:text-white"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              查看详情
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedWallet(wallet);
                                setExportKeyOpen(true);
                              }}
                              className="text-gray-300 focus:bg-gray-700 focus:text-white"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              导出私钥
                            </DropdownMenuItem>
                            {wallet.status === 'expired' && (
                              <DropdownMenuItem
                                onClick={() => showNotification('AUID 刷新成功')}
                                className="text-gray-300 focus:bg-gray-700 focus:text-white"
                              >
                                <RefreshCw className="h-4 w-4 mr-2" />
                                刷新 AUID
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator className="bg-gray-700" />
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedWallet(wallet);
                                setDeleteConfirmOpen(true);
                              }}
                              className="text-red-400 focus:bg-red-500/20 focus:text-red-400"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              删除钱包
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredWallets.length === 0 && (
            <div className="text-center py-12">
              <Wallet className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">没有找到匹配的钱包</p>
            </div>
          )}
        </div>
      </div>

      {/* Transfer Dialog */}
      <TransferDialog
        wallet={transferWallet || { id: '', address: '', balance: '0 ETH', createdAt: '', uid: '', userId: '' }}
        isOpen={!!transferWallet}
        onClose={() => setTransferWallet(null)}
        onSuccess={() => {
          setTransferWallet(null);
          showNotification('转账成功！');
        }}
      />

      {/* Deposit Dialog */}
      <DepositDialog
        wallet={depositWallet || { id: '', address: '', balance: '0 ETH', createdAt: '', uid: '', userId: '' }}
        isOpen={!!depositWallet}
        onClose={() => setDepositWallet(null)}
      />

      {/* Create Wallet Dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">创建新钱包</DialogTitle>
            <DialogDescription className="text-gray-400">
              创建一个新的 Agent 钱包 (当前: {wallets.length}/15)
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">钱包名称 (可选)</label>
              <Input
                value={newWalletName}
                onChange={(e) => setNewWalletName(e.target.value)}
                placeholder="例如：小龙虾交易钱包"
                className="bg-gray-900/80 border-gray-700 text-white"
              />
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium text-white mb-1">安全提示</p>
                  <p>请妥善保管您的私钥和助记词，丢失后将无法找回资产。</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setCreateOpen(false)}
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                取消
              </Button>
              <motion.button
                onClick={handleCreateWallet}
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                确认创建
              </motion.button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirm Dialog */}
      <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <DialogContent className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-red-400">删除钱包</DialogTitle>
            <DialogDescription className="text-gray-400">
              此操作不可撤销，请谨慎操作
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                请输入 <span className="font-mono text-red-400">DELETE</span> 确认删除钱包：
              </p>
              <p className="font-medium text-white mt-2">{selectedWallet?.name}</p>
            </div>
            <Input
              value={deleteConfirmText}
              onChange={(e) => setDeleteConfirmText(e.target.value)}
              placeholder="输入 DELETE"
              className="bg-gray-900/80 border-gray-700 text-white"
            />
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setDeleteConfirmOpen(false);
                  setDeleteConfirmText('');
                }}
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                取消
              </Button>
              <motion.button
                onClick={handleDeleteWallet}
                disabled={deleteConfirmText !== 'DELETE'}
                className="flex-1 px-4 py-2 rounded-lg bg-red-500 text-white font-medium disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                确认删除
              </motion.button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Export Key Dialog */}
      <Dialog open={exportKeyOpen} onOpenChange={setExportKeyOpen}>
        <DialogContent className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">导出私钥</DialogTitle>
            <DialogDescription className="text-gray-400">
              验证 PIN 码后导出私钥
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium text-white mb-1">安全警告</p>
                  <p>私钥是访问您资产的唯一凭证，请勿泄露给任何人！</p>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">输入 PIN 码</label>
              <Input
                type="password"
                value={exportPin}
                onChange={(e) => setExportPin(e.target.value)}
                placeholder="6 位数字 PIN 码"
                maxLength={6}
                className="bg-gray-900/80 border-gray-700 text-white font-mono tracking-widest"
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setExportKeyOpen(false);
                  setExportPin('');
                }}
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                取消
              </Button>
              <motion.button
                onClick={handleExportKey}
                disabled={exportPin.length !== 6}
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                确认导出
              </motion.button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
