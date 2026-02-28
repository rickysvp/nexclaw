'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wallet, ArrowUpRight, ArrowDownLeft, Clock, Shield, AlertTriangle,
  CheckCircle, TrendingUp, Activity, ChevronRight, RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useWallet } from '@/lib/wallet-store';

interface DashboardOverviewProps {
  onNavigate?: (section: string) => void;
}

export default function DashboardOverview({ onNavigate }: DashboardOverviewProps) {
  const { wallets, stats, activities, pendingTransactions, isLoading } = useWallet();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
  };

  const navigateTo = (section: string) => {
    onNavigate?.(section);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'transaction':
        return <ArrowUpRight className="h-4 w-4" />;
      case 'approval':
        return <CheckCircle className="h-4 w-4" />;
      case 'risk':
        return <Shield className="h-4 w-4" />;
      case 'wallet':
        return <Wallet className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string, status: string) => {
    if (status === 'blocked' || status === 'failed') return 'bg-red-500/20 text-red-400';
    if (status === 'warning') return 'bg-yellow-500/20 text-yellow-400';
    
    switch (type) {
      case 'transaction':
        return 'bg-green-500/20 text-green-400';
      case 'approval':
        return 'bg-blue-500/20 text-blue-400';
      case 'risk':
        return 'bg-red-500/20 text-red-400';
      case 'wallet':
        return 'bg-purple-500/20 text-purple-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const parseBalance = (balance: string): string => {
    try {
      const num = parseFloat(balance.replace(/[^0-9.]/g, ''));
      if (isNaN(num)) return balance;
      return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
    } catch {
      return balance;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">仪表盘</h1>
          <p className="text-gray-400">欢迎回来，查看您的资产概况</p>
        </div>
        <motion.button
          onClick={handleRefresh}
          disabled={refreshing}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium flex items-center gap-2 hover:bg-gray-700 disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          刷新
        </motion.button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 cursor-pointer"
          onClick={() => navigateTo('wallets')}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">总资产 (USDC)</p>
              <p className="text-2xl font-bold text-white">${stats.totalBalanceUSDC.toLocaleString()}</p>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <p className="text-sm text-green-400">+{stats.balanceChangePercent}%</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-purple-600">
              <Wallet className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 cursor-pointer"
          onClick={() => navigateTo('wallets')}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">钱包数量</p>
              <p className="text-2xl font-bold text-white">{stats.walletCount}/{stats.walletLimit}</p>
              <p className="text-sm text-gray-500 mt-2">还可创建 {stats.walletLimit - stats.walletCount} 个</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
              <Wallet className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 cursor-pointer"
          onClick={() => navigateTo('transactions')}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">今日交易</p>
              <p className="text-2xl font-bold text-white">{stats.todayTransactions}</p>
              <p className="text-sm text-green-400 mt-2">{stats.todaySuccessRate}% 成功率</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600">
              <Activity className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 cursor-pointer"
          onClick={() => navigateTo('risk')}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">风控拦截</p>
              <p className="text-2xl font-bold text-white">{stats.riskBlockedToday}</p>
              <p className="text-sm text-gray-500 mt-2">今日拦截交易</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Alerts */}
      <AnimatePresence>
        {stats.pendingApprovals > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-yellow-500/20">
                <Clock className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">待审批交易</h3>
                <p className="text-gray-400 text-sm mb-3">有 {stats.pendingApprovals} 笔交易等待您的审批</p>
                <Button 
                  onClick={() => navigateTo('approvals')}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
                >
                  立即处理
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">最近活动</h2>
              <p className="text-gray-400 text-sm">实时更新您的账户动态</p>
            </div>
            <Button 
              variant="outline" 
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
              onClick={() => navigateTo('transactions')}
            >
              查看全部
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-3">
            <AnimatePresence>
              {activities.slice(0, 5).map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800/50"
                >
                  <div className={`p-2 rounded-lg ${getActivityColor(activity.type, activity.status)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-white truncate">{activity.title}</p>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {new Date(activity.timestamp).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Wallet Quick List */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">我的钱包</h3>
              <p className="text-gray-400 text-sm">快速查看钱包余额</p>
            </div>
            <Button 
              variant="outline" 
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
              onClick={() => navigateTo('wallets')}
            >
              管理
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            <AnimatePresence>
              {wallets.map((wallet, index) => (
                <motion.div
                  key={wallet.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => navigateTo('wallets')}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-900/50 border border-gray-800/50 cursor-pointer hover:border-gray-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                      <Wallet className="h-4 w-4 text-orange-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">{wallet.name}</p>
                      <p className="text-xs text-gray-500">{wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}</p>
                    </div>
                  </div>
                  <p className="font-medium text-white">{parseBalance(wallet.balance)}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Pending Approvals Preview */}
      {pendingTransactions.length > 0 && (
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">待审批交易预览</h3>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500/20 text-yellow-400">{pendingTransactions.length} 笔</Badge>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigateTo('approvals')}
                className="text-gray-400 hover:text-white"
              >
                查看全部
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            {pendingTransactions.slice(0, 3).map((tx) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => navigateTo('approvals')}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 cursor-pointer hover:border-gray-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{tx.agentName}</p>
                    <p className="text-xs text-gray-500">{tx.type === 'transfer' ? '转账' : tx.type === 'swap' ? '兑换' : '合约交互'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-white">{tx.amount} {tx.token}</p>
                  <p className="text-xs text-gray-500">${tx.amountUSDC}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
