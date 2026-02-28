'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wallet, ArrowUpRight, ArrowDownLeft, Clock, Shield, AlertTriangle,
  CheckCircle, TrendingUp, Activity, Plus, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockDashboardStats, mockWallets } from '@/lib/mockData';

export default function DashboardOverview() {
  const stats = mockDashboardStats;
  const [refreshing, setRefreshing] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">仪表盘</h1>
          <p className="text-gray-400">欢迎回来，查看您的资产概况</p>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            创建钱包
          </motion.button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">总资产 (USDC)</p>
              <p className="text-2xl font-bold text-white">${stats.totalBalanceUSDC}</p>
              <p className="text-sm text-green-400 mt-2">+{stats.balanceChangePercent}%</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
              <Wallet className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
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
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
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
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
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
      {stats.pendingApprovals > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-yellow-500/20">
              <Clock className="h-6 w-6 text-yellow-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white mb-1">待审批交易</h3>
              <p className="text-gray-400 text-sm mb-3">有 {stats.pendingApprovals} 笔交易等待您的审批</p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
                立即处理
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Recent Activity */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">最近活动</h2>
            <p className="text-gray-400 text-sm">实时更新您的账户动态</p>
          </div>
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            查看全部
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="space-y-3">
          {stats.recentActivities.slice(0, 5).map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800/50"
            >
              <div className={`p-2 rounded-lg ${
                activity.status === 'success' ? 'bg-green-500/20 text-green-400' :
                activity.status === 'blocked' ? 'bg-red-500/20 text-red-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                <Activity className="h-4 w-4" />
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
        </div>
      </div>

      {/* Wallet Quick List */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
        <h3 className="font-bold text-white mb-4">我的钱包</h3>
        <div className="space-y-3">
          {mockWallets.map((wallet) => (
            <motion.div
              key={wallet.id}
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-900/50"
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
    </div>
  );
}
