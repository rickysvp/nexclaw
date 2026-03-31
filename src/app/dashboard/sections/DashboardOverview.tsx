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
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockWallets, mockTransactions, mockAlerts } from '@/lib/mockData';
import { Wallet as WalletType, Transaction, Alert } from '@/types';
import AgentStrategy from '@/components/wallet/AgentStrategy';
import { useAgentStrategyStore } from '@/lib/agent-strategy-store';

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
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const { selectStrategy, selectedStrategy, executeStrategy } = useAgentStrategyStore();

  useEffect(() => {
    setMounted(true);
    loadWallets();
    loadTransactions();
    loadAlerts();
  }, []);

  const loadWallets = () => {
    setWallets(mockWallets);
  };

  const loadTransactions = () => {
    setTransactions(mockTransactions);
  };

  const loadAlerts = () => {
    setAlerts(mockAlerts);
  };

  const loadData = () => {
    loadWallets();
    loadTransactions();
    loadAlerts();
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      loadData();
      setIsRefreshing(false);
    }, 1000);
  };

  const handleStrategySelect = (strategy: any) => {
    selectStrategy(strategy);
    setRightSidebarOpen(true);
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

          {/* Agent Strategy */}
          <AgentStrategy onStrategySelect={handleStrategySelect} />
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
                        alert.type === 'error' || alert.type === 'warning' ? 'bg-red-100' :
                        alert.type === 'success' ? 'bg-green-100' :
                        'bg-blue-100'
                      }`}>
                        {alert.type === 'error' || alert.type === 'warning' ? (
                          <AlertCircle className="h-4 w-4 text-red-600" />
                        ) : alert.type === 'success' ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
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
                <span>{wallets[0]?.name || '未设置'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Sidebar for Strategy Details */}
      {rightSidebarOpen && (
        <>
          {/* Backdrop for Right Sidebar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setRightSidebarOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-96 bg-white border-l border-gray-200 z-50 flex flex-col"
          >
            {/* Sidebar Header */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">策略详情</h2>
              <button
                onClick={() => setRightSidebarOpen(false)}
                className="p-2 rounded-lg bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Strategy Details */}
            <div className="flex-1 p-4 overflow-y-auto">
              {selectedStrategy && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-4">
                    <h3 className="font-medium text-gray-900 text-lg">{selectedStrategy.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{selectedStrategy.description}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">状态:</span>
                        <Badge
                          variant={
                            selectedStrategy.status === 'active'
                              ? 'default'
                              : selectedStrategy.status === 'pending'
                              ? 'secondary'
                              : 'destructive'
                          }
                          className={
                            selectedStrategy.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : selectedStrategy.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-700 animate-pulse'
                              : 'bg-red-100 text-red-700'
                          }
                        >
                          {selectedStrategy.status === 'active'
                            ? '运行中'
                            : selectedStrategy.status === 'pending'
                            ? '执行中...'
                            : '已停止'}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">风险等级:</span>
                        <Badge
                          variant="secondary"
                          className={
                            selectedStrategy.risk === 'low'
                              ? 'bg-blue-100 text-blue-700'
                              : selectedStrategy.risk === 'medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }
                        >
                          {selectedStrategy.risk === 'low'
                            ? '低风险'
                            : selectedStrategy.risk === 'medium'
                            ? '中风险'
                            : '高风险'}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">收益:</span>
                        <motion.span 
                          className={`font-medium ${selectedStrategy.profit?.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}
                          initial={{ scale: 1 }}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 0.5, repeat: selectedStrategy.status === 'active' ? Infinity : 0, repeatType: 'reverse' }}
                        >
                          {selectedStrategy.profit || 'N/A'}
                        </motion.span>
                      </div>
                      {selectedStrategy.lastExecuted && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">上次执行:</span>
                          <span>{selectedStrategy.lastExecuted}</span>
                        </div>
                      )}
                      {selectedStrategy.nextExecution && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">下次执行:</span>
                          <span>{selectedStrategy.nextExecution}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-4">
                    <h3 className="font-medium text-gray-900">策略配置</h3>
                    <div className="mt-4 space-y-3">
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">执行频率</label>
                        <div className="bg-gray-50 rounded-lg p-2">
                          <span className="text-sm">{selectedStrategy.config?.frequency || '每周一次'}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">目标资产</label>
                        <div className="bg-gray-50 rounded-lg p-2">
                          <span className="text-sm">{selectedStrategy.config?.asset || 'BTC'}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">执行金额</label>
                        <div className="bg-gray-50 rounded-lg p-2">
                          <span className="text-sm">{selectedStrategy.config?.amount || '0.001'} {selectedStrategy.config?.asset || 'BTC'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-4">
                    <h3 className="font-medium text-gray-900">历史执行记录</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>2024-01-15 09:00</span>
                        <Badge variant="default" className="bg-green-100 text-green-700">成功</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>2024-01-08 09:00</span>
                        <Badge variant="default" className="bg-green-100 text-green-700">成功</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>2024-01-01 09:00</span>
                        <Badge variant="default" className="bg-green-100 text-green-700">成功</Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-200 space-y-2">
              <Button variant="default" className="w-full bg-[#FF4D2E] hover:bg-[#FF4D2E]/90">
                编辑策略
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => selectedStrategy && executeStrategy(selectedStrategy.id)}
                disabled={selectedStrategy?.status === 'pending'}
              >
                {selectedStrategy?.status === 'pending' ? '执行中...' : '立即执行'}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
