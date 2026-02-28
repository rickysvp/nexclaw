'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Wallet, ArrowUpRight, ArrowDownRight, Clock, Shield, AlertTriangle,
  CheckCircle, TrendingUp, Activity, Bell, Settings, User,
  ChevronRight, RefreshCw, Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockDashboardStats, mockWallets } from '@/lib/mockData';
import { Activity as ActivityType } from '@/types';

// Stat Card Component
function StatCard({
  title,
  value,
  subValue,
  change,
  changeType,
  icon: Icon,
  color,
  onClick
}: {
  title: string;
  value: string;
  subValue?: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: any;
  color: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-1">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          {subValue && <p className="text-sm text-gray-500 mt-1">{subValue}</p>}
          {change && (
            <div className={`flex items-center gap-1 mt-2 text-sm ${
              changeType === 'positive' ? 'text-green-400' :
              changeType === 'negative' ? 'text-red-400' : 'text-gray-400'
            }`}>
              {changeType === 'positive' ? <TrendingUp className="h-4 w-4" /> :
               changeType === 'negative' ? <TrendingUp className="h-4 w-4 rotate-180" /> : null}
              {change}
            </div>
          )}
        </div>
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

// Activity Item Component
function ActivityItem({ activity }: { activity: ActivityType }) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'transaction': return Wallet;
      case 'approval': return CheckCircle;
      case 'risk': return AlertTriangle;
      case 'wallet': return Wallet;
      case 'system': return Bell;
      default: return Activity;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      case 'blocked': return 'bg-red-500/20 text-red-400';
      case 'warning': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const Icon = getIcon(activity.type);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-gray-700/50 transition-colors"
    >
      <div className={`p-2 rounded-lg ${getStatusColor(activity.status)}`}>
        <Icon className="h-4 w-4" />
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
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const stats = mockDashboardStats;
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">NexClaw</h1>
                <p className="text-xs text-gray-400">Agent Wallet Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                onClick={handleRefresh}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className={`h-5 w-5 ${refreshing ? 'animate-spin' : ''}`} />
              </motion.button>
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
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3 mb-8">
          <motion.button
            onClick={() => router.push('/dashboard/wallets')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            创建钱包
          </motion.button>
          <motion.button
            onClick={() => router.push('/dashboard/approvals')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium flex items-center gap-2 border border-gray-700"
          >
            <CheckCircle className="h-4 w-4" />
            待审批 ({stats.pendingApprovals})
          </motion.button>
          <motion.button
            onClick={() => router.push('/dashboard/risk')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium flex items-center gap-2 border border-gray-700"
          >
            <Shield className="h-4 w-4" />
            风控 ({stats.riskBlockedToday})
          </motion.button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="总资产 (USDC)"
            value={`$${stats.totalBalanceUSDC}`}
            change={`+${stats.balanceChangePercent}%`}
            changeType="positive"
            subValue={`+$${stats.balanceChange24h} (24h)`}
            icon={Wallet}
            color="bg-gradient-to-br from-orange-500 to-orange-600"
            onClick={() => router.push('/dashboard/wallets')}
          />
          <StatCard
            title="钱包数量"
            value={`${stats.walletCount}/${stats.walletLimit}`}
            subValue={`还可创建 ${stats.walletLimit - stats.walletCount} 个`}
            icon={Wallet}
            color="bg-gradient-to-br from-blue-500 to-blue-600"
            onClick={() => router.push('/dashboard/wallets')}
          />
          <StatCard
            title="今日交易"
            value={stats.todayTransactions.toString()}
            change={`${stats.todaySuccessRate}% 成功率`}
            changeType="positive"
            subValue="12 成功 / 1 失败"
            icon={Activity}
            color="bg-gradient-to-br from-green-500 to-green-600"
            onClick={() => router.push('/dashboard/transactions')}
          />
          <StatCard
            title="风控拦截"
            value={stats.riskBlockedToday.toString()}
            subValue="今日拦截交易"
            icon={Shield}
            color="bg-gradient-to-br from-red-500 to-red-600"
            onClick={() => router.push('/dashboard/risk')}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">最近活动</h2>
                  <p className="text-gray-400 text-sm">实时更新您的账户动态</p>
                </div>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  onClick={() => router.push('/dashboard/transactions')}
                >
                  查看全部
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-3">
                <AnimatePresence>
                  {stats.recentActivities.slice(0, 5).map((activity) => (
                    <ActivityItem key={activity.id} activity={activity} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats / Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {/* Pending Approvals Alert */}
            {stats.pendingApprovals > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-yellow-500/20">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1">待审批交易</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      有 {stats.pendingApprovals} 笔交易等待您的审批
                    </p>
                    <Button
                      onClick={() => router.push('/dashboard/approvals')}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
                    >
                      立即处理
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Risk Alert */}
            {stats.riskBlockedToday > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-500/20">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1">安全提醒</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      今日已拦截 {stats.riskBlockedToday} 笔风险交易
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => router.push('/dashboard/risk')}
                      className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                    >
                      查看详情
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Wallet Quick List */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">我的钱包</h3>
              <div className="space-y-3">
                {mockWallets.map((wallet) => (
                  <motion.div
                    key={wallet.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-900/50 cursor-pointer"
                    onClick={() => router.push(`/dashboard/wallets`)}
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
                    <p className="font-medium text-white">{wallet.balance}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
