'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Wallet,
  TrendingUp,
  Shield,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MoreHorizontal,
  ChevronRight,
  RefreshCw,
  Zap,
  Users,
  BarChart3,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockWallets, mockTransactions, mockAlerts } from '@/lib/mockData';
import { Wallet as WalletType, Transaction, Alert } from '@/types';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DashboardOverview() {
  const [wallets, setWallets] = useState<WalletType[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadData();
  }, []);

  const loadData = () => {
    setWallets(mockWallets);
    setTransactions(mockTransactions.slice(0, 5));
    setAlerts(mockAlerts.slice(0, 3));
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      loadData();
      setIsRefreshing(false);
    }, 1000);
  };

  const stats = [
    {
      title: '总资产',
      value: '12.458 ETH',
      change: '+8.2%',
      trend: 'up',
      icon: Wallet,
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: '今日收益',
      value: '+0.245 ETH',
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
    },
    {
      title: '安全评分',
      value: '92/100',
      change: '优秀',
      trend: 'neutral',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: '待处理交易',
      value: '3',
      change: '2笔紧急',
      trend: 'down',
      icon: Clock,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const quickActions = [
    { label: '转账', icon: ArrowUpRight, color: 'bg-orange-500', href: '/dashboard/wallets' },
    { label: '收款', icon: ArrowDownRight, color: 'bg-green-500', href: '/dashboard/wallets' },
    { label: '审批', icon: CheckCircle2, color: 'bg-blue-500', href: '/dashboard/approvals' },
    { label: '分析', icon: BarChart3, color: 'bg-purple-500', href: '/dashboard/analytics' },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">仪表盘</h1>
          <p className="text-gray-500 mt-1">欢迎回来，查看您的资产概览</p>
        </div>
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
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  {stat.trend === 'up' && <ArrowUpRight className="h-4 w-4 text-green-500" />}
                  {stat.trend === 'down' && <ArrowDownRight className="h-4 w-4 text-red-500" />}
                  {stat.trend === 'neutral' && <Activity className="h-4 w-4 text-blue-500" />}
                  <span className={`text-sm ${
                    stat.trend === 'up' ? 'text-green-500' :
                    stat.trend === 'down' ? 'text-red-500' :
                    'text-blue-500'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action) => (
          <motion.a
            key={action.label}
            href={action.href}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all"
          >
            <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
              <action.icon className="h-5 w-5 text-white" />
            </div>
            <span className="font-medium text-gray-900">{action.label}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">最近交易</h2>
            <a href="/dashboard/transactions" className="text-sm text-orange-500 hover:text-orange-600 flex items-center gap-1">
              查看全部
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            {transactions.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500">暂无交易记录</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {transactions.map((tx, index) => (
                  <motion.div
                    key={tx.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'receive' ? 'bg-green-100' :
                        tx.type === 'send' ? 'bg-red-100' :
                        'bg-blue-100'
                      }`}>
                        {tx.type === 'receive' ? (
                          <ArrowDownRight className="h-5 w-5 text-green-600" />
                        ) : tx.type === 'send' ? (
                          <ArrowUpRight className="h-5 w-5 text-red-600" />
                        ) : (
                          <Zap className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {tx.type === 'receive' ? '收款' :
                           tx.type === 'send' ? '转账' :
                           '合约交互'}
                        </p>
                        <p className="text-sm text-gray-500">{new Date(tx.timestamp).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${
                        tx.type === 'receive' ? 'text-green-600' :
                        tx.type === 'send' ? 'text-red-600' :
                        'text-blue-600'
                      }`}>
                        {tx.type === 'receive' ? '+' : tx.type === 'send' ? '-' : ''}
                        {tx.amount} {tx.token}
                      </p>
                      <Badge variant={tx.status === 'success' ? 'default' : tx.status === 'pending' ? 'secondary' : 'destructive'} className="text-xs">
                        {tx.status === 'success' ? '成功' : tx.status === 'pending' ? '处理中' : '失败'}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div variants={itemVariants} className="space-y-4">
          {/* Alerts */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">安全提醒</h2>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              {alerts.length} 条新消息
            </Badge>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            {alerts.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-gray-500">暂无安全提醒</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        alert.severity === 'high' ? 'bg-red-100' :
                        alert.severity === 'medium' ? 'bg-yellow-100' :
                        'bg-blue-100'
                      }`}>
                        {alert.severity === 'high' ? (
                          <AlertCircle className="h-4 w-4 text-red-600" />
                        ) : alert.severity === 'medium' ? (
                          <AlertCircle className="h-4 w-4 text-yellow-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm">{alert.title}</p>
                        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{alert.message}</p>
                        <p className="text-gray-400 text-xs mt-2">{new Date(alert.timestamp).toLocaleString()}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Wallet Summary */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                <span className="font-medium">钱包概览</span>
              </div>
              <MoreHorizontal className="h-5 w-5 opacity-70" />
            </div>
            <p className="text-3xl font-bold">{wallets.length}</p>
            <p className="text-orange-100 text-sm">活跃钱包</p>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between text-sm">
                <span className="text-orange-100">主钱包</span>
                <span>{wallets.find(w => w.isDefault)?.name || '未设置'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
