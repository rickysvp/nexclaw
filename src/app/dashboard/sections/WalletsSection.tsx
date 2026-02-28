'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wallet, Search, Plus, Send, ArrowDownLeft, Trash2, Download, Copy,
  X, AlertTriangle, CheckCircle, Eye, EyeOff, Loader2, ChevronRight,
  TrendingUp, DollarSign, Bitcoin, Coins
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useWallet } from '@/lib/wallet-store';
import { useAuth } from '@/lib/auth-context';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Token price mock data (in USDC)
const tokenPrices: Record<string, number> = {
  ETH: 3200,
  USDC: 1,
  USDT: 1,
  BTC: 65000,
  MATIC: 0.8,
  ARB: 1.2,
  OP: 2.5,
};

// Token colors for pie chart
const tokenColors: Record<string, string> = {
  ETH: '#6366f1',
  USDC: '#22c55e',
  USDT: '#10b981',
  BTC: '#f97316',
  MATIC: '#a855f7',
  ARB: '#3b82f6',
  OP: '#ef4444',
};

// Mock multi-chain balances for each wallet
interface TokenBalance {
  symbol: string;
  balance: number;
  chain: string;
  usdcValue: number;
}

interface WalletWithBalances {
  id: string;
  name: string;
  address: string;
  uid: string;
  status: 'active' | 'expired';
  createdAt: string;
  tokens: TokenBalance[];
  totalUSDC: number;
  chains: string[];
}

// Generate mock balances for wallets
const generateWalletBalances = (wallets: any[]): WalletWithBalances[] => {
  return wallets.map(wallet => {
    const tokens: TokenBalance[] = [
      { symbol: 'ETH', balance: parseFloat((Math.random() * 5 + 0.1).toFixed(4)), chain: 'Ethereum', usdcValue: 0 },
      { symbol: 'USDC', balance: parseFloat((Math.random() * 5000 + 100).toFixed(2)), chain: 'Ethereum', usdcValue: 0 },
      { symbol: 'USDT', balance: parseFloat((Math.random() * 3000 + 50).toFixed(2)), chain: 'Polygon', usdcValue: 0 },
      { symbol: 'MATIC', balance: parseFloat((Math.random() * 1000 + 100).toFixed(2)), chain: 'Polygon', usdcValue: 0 },
      { symbol: 'ARB', balance: parseFloat((Math.random() * 500 + 10).toFixed(2)), chain: 'Arbitrum', usdcValue: 0 },
    ].map(t => ({
      ...t,
      usdcValue: t.balance * (tokenPrices[t.symbol] || 1)
    }));
    
    const totalUSDC = tokens.reduce((sum, t) => sum + t.usdcValue, 0);
    const chains = [...new Set(tokens.map(t => t.chain))];
    
    return {
      ...wallet,
      tokens,
      totalUSDC,
      chains,
    };
  });
};

export default function WalletsSection() {
  const { 
    wallets: rawWallets, 
    createWallet, 
    deleteWallet, 
    depositToWallet, 
    transferFromWallet,
    exportWalletKey,
    isLoading,
    stats 
  } = useWallet();
  const { hasPermission } = useAuth();
  
  // Generate wallets with balances
  const wallets = useMemo(() => generateWalletBalances(rawWallets), [rawWallets]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [viewingWallet, setViewingWallet] = useState<WalletWithBalances | null>(null);
  
  // Dialog states
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDepositDialog, setShowDepositDialog] = useState(false);
  const [showTransferDialog, setShowTransferDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [showGuideDialog, setShowGuideDialog] = useState(false);
  const [createdWallet, setCreatedWallet] = useState<{uid: string, address: string, name: string} | null>(null);
  
  // Form states
  const [newWalletName, setNewWalletName] = useState('');
  const [newWalletDesc, setNewWalletDesc] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [depositToken, setDepositToken] = useState('ETH');
  const [transferTo, setTransferTo] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [transferToken, setTransferToken] = useState('ETH');
  const [exportPassword, setExportPassword] = useState('');
  const [exportedKey, setExportedKey] = useState('');
  const [showExportedKey, setShowExportedKey] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState('');
  
  // Action states
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Calculate total portfolio value
  const totalPortfolioValue = useMemo(() => {
    return wallets.reduce((sum, w) => sum + w.totalUSDC, 0);
  }, [wallets]);

  // Calculate token totals across all wallets for pie chart
  const pieChartData = useMemo(() => {
    const totals: Record<string, number> = {};
    wallets.forEach(wallet => {
      wallet.tokens.forEach(token => {
        if (!totals[token.symbol]) totals[token.symbol] = 0;
        totals[token.symbol] += token.usdcValue;
      });
    });
    return Object.entries(totals)
      .map(([symbol, value]) => ({ name: symbol, value, color: tokenColors[symbol] || '#6b7280' }))
      .sort((a, b) => b.value - a.value);
  }, [wallets]);

  const filteredWallets = useMemo(() => {
    return wallets.filter(wallet => 
      wallet.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wallet.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wallet.uid.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [wallets, searchQuery]);

  const handleCreateWallet = async () => {
    setActionError(null);
    try {
      const newWallet = await createWallet(newWalletName, newWalletDesc);
      setCreatedWallet({
        uid: newWallet.uid || '',
        address: newWallet.address,
        name: newWallet.name || newWalletName
      });
      setShowCreateDialog(false);
      setShowGuideDialog(true);
      setNewWalletName('');
      setNewWalletDesc('');
    } catch (error: any) {
      setActionError(error.message);
    }
  };

  const handleDeposit = async () => {
    setActionError(null);
    if (!selectedWallet || !depositAmount) return;
    
    try {
      await depositToWallet(selectedWallet, depositAmount, depositToken);
      setActionSuccess('充值成功');
      setShowDepositDialog(false);
      setDepositAmount('');
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (error: any) {
      setActionError(error.message);
    }
  };

  const handleTransfer = async () => {
    setActionError(null);
    if (!selectedWallet || !transferTo || !transferAmount) return;
    
    try {
      await transferFromWallet(selectedWallet, transferTo, transferAmount, transferToken);
      setActionSuccess('转账成功');
      setShowTransferDialog(false);
      setTransferTo('');
      setTransferAmount('');
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (error: any) {
      setActionError(error.message);
    }
  };

  const handleDelete = async () => {
    setActionError(null);
    if (!selectedWallet) return;
    
    const wallet = wallets.find(w => w.id === selectedWallet);
    if (deleteConfirm !== wallet?.name) {
      setActionError('请输入正确的钱包名称以确认删除');
      return;
    }
    
    try {
      await deleteWallet(selectedWallet);
      setActionSuccess('钱包已删除');
      setShowDeleteDialog(false);
      setDeleteConfirm('');
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (error: any) {
      setActionError(error.message);
    }
  };

  const handleExport = async () => {
    setActionError(null);
    if (!selectedWallet || !exportPassword) return;
    
    try {
      const key = await exportWalletKey(selectedWallet, exportPassword);
      setExportedKey(key);
    } catch (error: any) {
      setActionError(error.message);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setActionSuccess('已复制到剪贴板');
    setTimeout(() => setActionSuccess(null), 2000);
  };

  const getTokenIcon = (symbol: string) => {
    switch (symbol) {
      case 'ETH': return <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><span className="text-indigo-400 font-bold text-[10px]">ETH</span></div>;
      case 'BTC': return <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center"><span className="text-orange-400 font-bold text-[10px]">BTC</span></div>;
      case 'USDC': return <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center"><span className="text-green-400 font-bold text-[10px]">USDC</span></div>;
      case 'USDT': return <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center"><span className="text-green-400 font-bold text-[10px]">USDT</span></div>;
      case 'MATIC': return <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center"><span className="text-purple-400 font-bold text-[10px]">MATIC</span></div>;
      case 'ARB': return <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center"><span className="text-blue-400 font-bold text-[10px]">ARB</span></div>;
      default: return <div className="w-6 h-6 rounded-full bg-gray-500/20 flex items-center justify-center"><Coins className="h-3 w-3 text-gray-400" /></div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Notifications */}
      <AnimatePresence>
        {actionSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 z-50 px-6 py-3 rounded-lg bg-green-500 text-white shadow-lg flex items-center gap-2"
          >
            <CheckCircle className="h-5 w-5" />
            {actionSuccess}
          </motion.div>
        )}
        {actionError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 z-50 px-6 py-3 rounded-lg bg-red-500 text-white shadow-lg flex items-center gap-2"
          >
            <AlertTriangle className="h-5 w-5" />
            {actionError}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">钱包管理</h1>
          <p className="text-gray-400">
            管理您的所有 Agent 钱包 
            <span className="text-gray-500">({wallets.length}/{stats.walletLimit})</span>
          </p>
        </div>
        <motion.button
          onClick={() => setShowCreateDialog(true)}
          disabled={wallets.length >= stats.walletLimit || isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
          创建钱包
        </motion.button>
      </div>

      {/* Portfolio Overview with Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Total Value Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-orange-400" />
            </div>
            <p className="text-gray-400">总资产价值</p>
          </div>
          <p className="text-3xl font-bold text-white">
            ≈ ${totalPortfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <p className="text-sm text-gray-500 mt-1">USDC</p>
        </motion.div>

        {/* Pie Chart */}
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3">资产分布</h3>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-40 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`$${Number(value).toFixed(2)} USDC`, '']}
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-3">
              {pieChartData.map(item => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-gray-300">{item.name}</span>
                  <span className="text-sm text-gray-500">({((item.value / totalPortfolioValue) * 100).toFixed(1)}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          placeholder="搜索钱包名称、地址或 UID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-gray-800/50 border-gray-700 text-white"
        />
      </div>

      {/* Wallets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWallets.map((wallet) => (
          <motion.div
            key={wallet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setViewingWallet(wallet)}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{wallet.name}</h3>
                  <p className="text-xs text-gray-500 font-mono">{wallet.uid}</p>
                </div>
              </div>
              <Badge className={wallet.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}>
                {wallet.status === 'active' ? '活跃' : '已过期'}
              </Badge>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">代币种类</span>
                <span className="font-medium text-white">{wallet.tokens.length} 种</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">支持链</span>
                <span className="font-medium text-white">{wallet.chains.length} 条</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">地址</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-gray-300">
                    {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
                  </span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); copyToClipboard(wallet.address); }}
                    className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Token Icons */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-gray-500">持有代币:</span>
              <div className="flex -space-x-1">
                {wallet.tokens.slice(0, 4).map(token => (
                  <div key={token.symbol} className="w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center text-[8px] font-bold text-white" style={{ backgroundColor: tokenColors[token.symbol] || '#6b7280' }}>
                    {token.symbol.slice(0, 2)}
                  </div>
                ))}
                {wallet.tokens.length > 4 && (
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-[8px] text-white">
                    +{wallet.tokens.length - 4}
                  </div>
                )}
              </div>
            </div>

            {/* Chain Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {wallet.chains.map(chain => (
                <span key={chain} className="px-2 py-1 rounded bg-gray-900/50 text-xs text-gray-400">
                  {chain}
                </span>
              ))}
            </div>

            {/* View Details Button */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
              <span className="text-sm text-gray-500">点击查看详情</span>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {filteredWallets.length === 0 && (
        <div className="text-center py-12">
          <Wallet className="h-12 w-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500">没有找到匹配的钱包</p>
        </div>
      )}

      {/* Wallet Detail Dialog */}
      <Dialog open={!!viewingWallet} onClose={() => setViewingWallet(null)} title={viewingWallet?.name || '钱包详情'}>
        {viewingWallet && (
          <div className="space-y-6">
            {/* Wallet Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <Wallet className="h-7 w-7 text-orange-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{viewingWallet.name}</h2>
                  <p className="text-xs text-gray-500 font-mono">{viewingWallet.uid}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-xs text-gray-400">
                      {viewingWallet.address.slice(0, 10)}...{viewingWallet.address.slice(-6)}
                    </span>
                    <button 
                      onClick={() => copyToClipboard(viewingWallet.address)}
                      className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white"
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
              <Badge className={viewingWallet.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}>
                {viewingWallet.status === 'active' ? '活跃' : '已过期'}
              </Badge>
            </div>

            {/* Total Balance */}
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-4">
              <p className="text-gray-400 text-sm">总资产价值</p>
              <p className="text-2xl font-bold text-white">≈ ${viewingWallet.totalUSDC.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDC</p>
            </div>

            {/* Token Balances */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">资产详情</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {viewingWallet.tokens.sort((a, b) => b.usdcValue - a.usdcValue).map((token) => (
                  <div
                    key={token.symbol}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-900/50 border border-gray-800/50"
                  >
                    <div className="flex items-center gap-3">
                      {getTokenIcon(token.symbol)}
                      <div>
                        <p className="font-medium text-white text-sm">{token.symbol}</p>
                        <p className="text-xs text-gray-500">{token.chain}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-white text-sm">{token.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })} {token.symbol}</p>
                      <p className="text-xs text-gray-500">≈ ${token.usdcValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.button
                onClick={() => { setSelectedWallet(viewingWallet.id); setShowDepositDialog(true); setViewingWallet(null); }}
                className="flex-1 px-4 py-3 rounded-xl bg-green-500/20 text-green-400 font-medium flex items-center justify-center gap-2 hover:bg-green-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowDownLeft className="h-4 w-4" />
                充值
              </motion.button>
              <motion.button
                onClick={() => { setSelectedWallet(viewingWallet.id); setShowTransferDialog(true); setViewingWallet(null); }}
                className="flex-1 px-4 py-3 rounded-xl bg-indigo-500/20 text-indigo-400 font-medium flex items-center justify-center gap-2 hover:bg-indigo-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-4 w-4" />
                转账
              </motion.button>
              <motion.button
                onClick={() => { setSelectedWallet(viewingWallet.id); setShowExportDialog(true); setViewingWallet(null); }}
                disabled={!hasPermission('export')}
                className="flex-1 px-4 py-3 rounded-xl bg-amber-500/20 text-amber-400 font-medium flex items-center justify-center gap-2 hover:bg-amber-500/30 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4" />
                导出
              </motion.button>
            </div>
          </div>
        )}
      </Dialog>

      {/* Dialogs */}
      <Dialog open={showCreateDialog} onClose={() => setShowCreateDialog(false)} title="创建新钱包">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">钱包名称</label>
            <Input
              value={newWalletName}
              onChange={(e) => setNewWalletName(e.target.value)}
              placeholder="例如：主钱包"
              className="bg-gray-900/80 border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">描述（可选）</label>
            <Input
              value={newWalletDesc}
              onChange={(e) => setNewWalletDesc(e.target.value)}
              placeholder="添加描述..."
              className="bg-gray-900/80 border-gray-700 text-white"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => setShowCreateDialog(false)} className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800">
              取消
            </Button>
            <motion.button
              onClick={handleCreateWallet}
              disabled={!newWalletName || isLoading}
              className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin mx-auto" /> : '创建'}
            </motion.button>
          </div>
        </div>
      </Dialog>

      <Dialog open={showDepositDialog} onClose={() => setShowDepositDialog(false)} title="充值">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">代币</label>
            <select
              value={depositToken}
              onChange={(e) => setDepositToken(e.target.value)}
              className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-2 text-white"
            >
              <option value="ETH">ETH</option>
              <option value="USDC">USDC</option>
              <option value="USDT">USDT</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">金额</label>
            <Input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="0.00"
              className="bg-gray-900/80 border-gray-700 text-white"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => setShowDepositDialog(false)} className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800">
              取消
            </Button>
            <motion.button
              onClick={handleDeposit}
              disabled={!depositAmount || isLoading}
              className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin mx-auto" /> : '确认充值'}
            </motion.button>
          </div>
        </div>
      </Dialog>

      <Dialog open={showTransferDialog} onClose={() => setShowTransferDialog(false)} title="转账">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">接收地址</label>
            <Input
              value={transferTo}
              onChange={(e) => setTransferTo(e.target.value)}
              placeholder="0x..."
              className="bg-gray-900/80 border-gray-700 text-white font-mono"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">代币</label>
              <select
                value={transferToken}
                onChange={(e) => setTransferToken(e.target.value)}
                className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="ETH">ETH</option>
                <option value="USDC">USDC</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">金额</label>
              <Input
                type="number"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="0.00"
                className="bg-gray-900/80 border-gray-700 text-white"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => setShowTransferDialog(false)} className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800">
              取消
            </Button>
            <motion.button
              onClick={handleTransfer}
              disabled={!transferTo || !transferAmount || isLoading}
              className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin mx-auto" /> : '确认转账'}
            </motion.button>
          </div>
        </div>
      </Dialog>

      <Dialog open={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} title="删除钱包">
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
              <div>
                <p className="font-medium text-red-400">警告</p>
                <p className="text-sm text-gray-400">删除钱包后无法恢复，请确保已备份私钥。</p>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              请输入钱包名称 "{wallets.find(w => w.id === selectedWallet)?.name}" 以确认删除
            </label>
            <Input
              value={deleteConfirm}
              onChange={(e) => setDeleteConfirm(e.target.value)}
              placeholder="输入钱包名称"
              className="bg-gray-900/80 border-gray-700 text-white"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)} className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800">
              取消
            </Button>
            <motion.button
              onClick={handleDelete}
              disabled={isLoading}
              className="flex-1 px-4 py-2 rounded-lg bg-red-500 text-white font-medium disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin mx-auto" /> : '确认删除'}
            </motion.button>
          </div>
        </div>
      </Dialog>

      <Dialog open={showExportDialog} onClose={() => { setShowExportDialog(false); setExportedKey(''); setShowExportedKey(false); }} title="导出私钥">
        <div className="space-y-4">
          {!exportedKey ? (
            <>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-400">安全提示</p>
                    <p className="text-sm text-gray-400">私钥是访问您资产的唯一凭证，请勿泄露给他人。</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">输入密码确认</label>
                <Input
                  type="password"
                  value={exportPassword}
                  onChange={(e) => setExportPassword(e.target.value)}
                  placeholder="输入您的账户密码"
                  className="bg-gray-900/80 border-gray-700 text-white"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setShowExportDialog(false)} className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800">
                  取消
                </Button>
                <motion.button
                  onClick={handleExport}
                  disabled={!exportPassword || isLoading}
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin mx-auto" /> : '确认导出'}
                </motion.button>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm text-gray-400 mb-2">私钥</label>
                <div className="relative">
                  <Input
                    type={showExportedKey ? 'text' : 'password'}
                    value={exportedKey}
                    readOnly
                    className="bg-gray-900/80 border-gray-700 text-white font-mono pr-20"
                  />
                  <button
                    onClick={() => setShowExportedKey(!showExportedKey)}
                    className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                  >
                    {showExportedKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => copyToClipboard(exportedKey)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <Button
                onClick={() => { setShowExportDialog(false); setExportedKey(''); setShowExportedKey(false); setExportPassword(''); }}
                className="w-full bg-gray-700 hover:bg-gray-600"
              >
                完成
              </Button>
            </>
          )}
        </div>
      </Dialog>

      <Dialog open={showGuideDialog} onClose={() => setShowGuideDialog(false)} title="钱包创建成功">
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </div>
          
          {createdWallet && (
            <div className="bg-gray-900/50 rounded-xl p-4 space-y-3">
              <div>
                <p className="text-sm text-gray-400">钱包名称</p>
                <p className="text-white font-medium">{createdWallet.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">钱包地址</p>
                <div className="flex items-center gap-2">
                  <p className="text-white font-mono text-sm">{createdWallet.address.slice(0, 20)}...{createdWallet.address.slice(-8)}</p>
                  <button onClick={() => copyToClipboard(createdWallet.address)} className="text-gray-500 hover:text-white">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">钱包 UID</p>
                <div className="flex items-center gap-2">
                  <p className="text-white font-mono text-sm">{createdWallet.uid}</p>
                  <button onClick={() => copyToClipboard(createdWallet.uid)} className="text-gray-500 hover:text-white">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
            <h4 className="font-medium text-orange-400 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              如何导入到 OpenClaw
            </h4>
            <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
              <li>复制上方的钱包 UID</li>
              <li>打开 OpenClaw 应用程序</li>
              <li>进入「设置」→「钱包管理」</li>
              <li>点击「导入钱包」</li>
              <li>粘贴钱包 UID 并确认导入</li>
            </ol>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <h4 className="font-medium text-blue-400 mb-2">安全提示</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• 请妥善保管您的钱包 UID</li>
              <li>• 不要将私钥分享给任何人</li>
              <li>• 建议启用双重验证保护账户</li>
            </ul>
          </div>

          <Button
            onClick={() => setShowGuideDialog(false)}
            className="w-full bg-gradient-to-r from-orange-500 to-purple-600"
          >
            我知道了
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

// Dialog Component
function Dialog({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
