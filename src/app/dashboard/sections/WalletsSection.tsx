'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Wallet,
  Plus,
  Search,
  Filter,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Copy,
  ExternalLink,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  RefreshCw,
  Grid3X3,
  List,
  Trash2,
  Edit3,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockWallets, mockTransactions } from '@/lib/mockData';
import { Wallet as WalletType } from '@/types';
import { CreateWalletDialog } from '@/components/wallet/CreateWalletDialog';
import { EditWalletDialog } from '@/components/wallet/EditWalletDialog';
import { DeleteWalletDialog } from '@/components/wallet/DeleteWalletDialog';
import { TransferDialog } from '@/components/wallet/TransferDialog';
import { DepositDialog } from '@/components/wallet/DepositDialog';
import Link from 'next/link';

export default function WalletsSection() {
  const [wallets, setWallets] = useState<WalletType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Dialog states
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false);
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<WalletType | null>(null);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    loadWallets();
  }, []);

  const loadWallets = () => {
    setWallets(mockWallets);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      loadWallets();
      setIsRefreshing(false);
    }, 1000);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyMessage(`${label}已复制`);
    setTimeout(() => setCopyMessage(null), 2000);
  };

  const handleCreateWallet = (newWallet: WalletType) => {
    mockWallets.push(newWallet);
    loadWallets();
    setIsCreateDialogOpen(false);
  };

  const handleEditWallet = (updatedWallet: WalletType) => {
    const index = mockWallets.findIndex((w) => w.id === updatedWallet.id);
    if (index !== -1) {
      mockWallets[index] = updatedWallet;
    }
    loadWallets();
    setIsEditDialogOpen(false);
    setSelectedWallet(null);
  };

  const handleDeleteWallet = () => {
    if (selectedWallet) {
      const index = mockWallets.findIndex((w) => w.id === selectedWallet.id);
      if (index !== -1) {
        mockWallets.splice(index, 1);
      }
      loadWallets();
      setIsDeleteDialogOpen(false);
      setSelectedWallet(null);
    }
  };

  const filteredWallets = wallets.filter((wallet) => {
    const matchesSearch = (wallet.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                         (wallet.address?.toLowerCase() || '').includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' ||
                         (filterStatus === 'active' && wallet.status === 'active') ||
                         (filterStatus === 'inactive' && wallet.status !== 'active');
    return matchesSearch && matchesFilter;
  });

  const totalBalance = wallets.reduce((sum, w) => {
    const balance = parseFloat(w.balance.split(' ')[0]);
    return sum + (isNaN(balance) ? 0 : balance);
  }, 0);

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-6">
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

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">钱包管理</h1>
          <p className="text-gray-500 mt-1">
            管理 {wallets.length} 个钱包 · 总资产 {totalBalance.toFixed(3)} ETH
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="border-gray-200 text-gray-600 hover:bg-gray-100"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            刷新
          </Button>
          <Button
            onClick={() => setIsCreateDialogOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-orange-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            创建钱包
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">总资产</p>
              <p className="text-2xl font-bold text-gray-900">{totalBalance.toFixed(3)} ETH</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Wallet className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">活跃钱包</p>
              <p className="text-2xl font-bold text-gray-900">{wallets.filter(w => w.status === 'active').length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">待处理</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockTransactions.filter(t => t.status === 'pending').length}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="搜索钱包名称或地址..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white border-gray-200"
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm"
          >
            <option value="all">全部状态</option>
            <option value="active">活跃</option>
            <option value="inactive">非活跃</option>
          </select>
          <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Wallets Grid */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWallets.map((wallet, index) => (
            <motion.div
              key={wallet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{wallet.name}</h3>
                    <p className="text-sm text-gray-500">{wallet.type || '普通钱包'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {wallet.isDefault && (
                    <Badge className="bg-orange-100 text-orange-700">默认</Badge>
                  )}
                  <div className="relative">
                    <button
                      onClick={() => setSelectedWallet(selectedWallet?.id === wallet.id ? null : selectedWallet)}
                      className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-500 text-sm">余额</p>
                <p className="text-2xl font-bold text-gray-900">{wallet.balance}</p>
              </div>

              <div className="flex items-center gap-2 mb-4 p-3 bg-gray-50 rounded-xl">
                <code className="flex-1 text-sm text-gray-600 font-mono truncate">
                  {wallet.address.slice(0, 8)}...{wallet.address.slice(-6)}
                </code>
                <button
                  onClick={() => handleCopy(wallet.address, '地址')}
                  className="p-2 rounded-lg hover:bg-gray-200 text-gray-500"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-200 text-gray-600 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedWallet(wallet);
                    setIsTransferDialogOpen(true);
                  }}
                >
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  转账
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-200 text-gray-600 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedWallet(wallet);
                    setIsDepositDialogOpen(true);
                  }}
                >
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                  充值
                </Button>
                <Link
                  href={`/dashboard/wallet/${wallet.id}`}
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  详情
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredWallets.map((wallet, index) => (
              <motion.div
                key={wallet.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">{wallet.name}</h3>
                      {wallet.isDefault && (
                        <Badge className="bg-orange-100 text-orange-700 text-xs">默认</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{wallet.address.slice(0, 8)}...{wallet.address.slice(-6)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{wallet.balance}</p>
                  <p className="text-sm text-gray-500">{wallet.type || '普通钱包'}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(wallet.address, '地址')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Link
                    href={`/dashboard/wallet/${wallet.id}`}
                    className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md text-orange-500 hover:bg-orange-50"
                  >
                    详情
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {filteredWallets.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <Wallet className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">没有找到钱包</h3>
          <p className="text-gray-500 mb-4">尝试调整搜索条件或创建新钱包</p>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            创建钱包
          </Button>
        </div>
      )}

      {/* Dialogs */}
      <CreateWalletDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onCreate={handleCreateWallet}
      />

      {selectedWallet && (
        <>
          <EditWalletDialog
            wallet={selectedWallet}
            isOpen={isEditDialogOpen}
            onClose={() => {
              setIsEditDialogOpen(false);
              setSelectedWallet(null);
            }}
            onSave={handleEditWallet}
          />
          <DeleteWalletDialog
            wallet={selectedWallet}
            isOpen={isDeleteDialogOpen}
            onClose={() => {
              setIsDeleteDialogOpen(false);
              setSelectedWallet(null);
            }}
            onDelete={handleDeleteWallet}
          />
          <TransferDialog
            wallet={selectedWallet}
            isOpen={isTransferDialogOpen}
            onClose={() => {
              setIsTransferDialogOpen(false);
              setSelectedWallet(null);
            }}
            onSuccess={() => {
              loadWallets();
              setCopyMessage('转账成功');
              setTimeout(() => setCopyMessage(null), 2000);
            }}
          />
          <DepositDialog
            wallet={selectedWallet}
            isOpen={isDepositDialogOpen}
            onClose={() => {
              setIsDepositDialogOpen(false);
              setSelectedWallet(null);
            }}
          />
        </>
      )}
    </div>
  );
}
