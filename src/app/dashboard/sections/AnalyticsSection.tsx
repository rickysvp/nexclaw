'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, TrendingDown, DollarSign, Activity,
  BarChart3, PieChart, Calendar, ArrowUpRight, ArrowDownRight,
  Wallet, Zap, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  AreaChart, Area, BarChart, Bar, PieChart as RePieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line
} from 'recharts';
import {
  mockTotalAssetsHistory,
  mockTransactionVolumeHistory,
  mockTransactionTypeData,
  mockDailyTransactions,
  mockGasFeeHistory,
  mockAssetDistribution,
  mockAnalyticsSummary
} from '@/lib/mockData';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

export default function AnalyticsSection() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('7d');
  const [activeTab, setActiveTab] = useState<'overview' | 'assets' | 'transactions' | 'gas'>('overview');

  const summary = mockAnalyticsSummary;
  const currentAssets = mockTotalAssetsHistory[mockTotalAssetsHistory.length - 1].value;
  const previousAssets = mockTotalAssetsHistory[0].value;
  const assetsChange = ((currentAssets - previousAssets) / previousAssets * 100);

  const statsCards = [
    {
      title: '7日交易总量',
      value: `$${summary.totalVolume7d.toLocaleString()}`,
      change: `+${summary.totalVolumeChange}%`,
      isPositive: true,
      icon: DollarSign,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: '交易笔数',
      value: summary.transactionCount7d.toString(),
      change: `+${summary.transactionCountChange}%`,
      isPositive: true,
      icon: Activity,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: '平均交易额',
      value: `$${summary.avgTransactionValue.toFixed(2)}`,
      change: '-2.1%',
      isPositive: false,
      icon: BarChart3,
      color: 'from-green-500 to-green-600'
    },
    {
      title: '平均 Gas 费用',
      value: `${summary.avgGasFee} ETH`,
      change: '+5.3%',
      isPositive: false,
      icon: Zap,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl">
          <p className="text-slate-300 text-sm mb-1">{label}</p>
          <p className="text-white font-bold">
            {payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">数据分析</h1>
          <p className="text-slate-400">资产分析与交易统计</p>
        </div>
        <div className="flex gap-2">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <motion.button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                timeRange === range
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {range === '7d' ? '7天' : range === '30d' ? '30天' : '90天'}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <div className={`flex items-center gap-1 mt-2 text-sm ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  {stat.change}
                </div>
              </div>
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 p-1 bg-slate-800/50 rounded-xl">
        {[
          { id: 'overview', label: '总览', icon: PieChart },
          { id: 'assets', label: '资产', icon: Wallet },
          { id: 'transactions', label: '交易', icon: Activity },
          { id: 'gas', label: 'Gas', icon: Zap },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asset Trend Chart */}
        {(activeTab === 'overview' || activeTab === 'assets') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">资产趋势</h3>
                <p className="text-slate-400 text-sm">总资产价值变化 (USDC)</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">${currentAssets.toLocaleString()}</span>
                <Badge className={assetsChange >= 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                  {assetsChange >= 0 ? '+' : ''}{assetsChange.toFixed(2)}%
                </Badge>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockTotalAssetsHistory}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} tickFormatter={(value) => `$${value}`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}

        {/* Transaction Volume Chart */}
        {(activeTab === 'overview' || activeTab === 'transactions') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">交易量趋势</h3>
                <p className="text-slate-400 text-sm">每日交易金额 (USDC)</p>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockTransactionVolumeHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}

        {/* Asset Distribution Pie Chart */}
        {(activeTab === 'overview' || activeTab === 'assets') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">资产分布</h3>
                <p className="text-slate-400 text-sm">按代币类型</p>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={mockAssetDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="valueUSDC"
                  >
                    {mockAssetDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }: any) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl">
                            <p className="text-white font-bold">{data.token}</p>
                            <p className="text-slate-300 text-sm">{data.amount} {data.token}</p>
                            <p className="text-slate-400 text-sm">${data.valueUSDC.toLocaleString()} ({data.percentage}%)</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend />
                </RePieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {mockAssetDistribution.map((asset, index) => (
                <div key={asset.token} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                  <span className="text-slate-300 text-sm">{asset.token}</span>
                  <span className="text-slate-400 text-sm">{asset.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Daily Transactions Count */}
        {(activeTab === 'overview' || activeTab === 'transactions') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">每日交易数</h3>
                <p className="text-slate-400 text-sm">交易笔数统计</p>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockDailyTransactions}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ fill: '#10b981', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}

        {/* Transaction Types */}
        {(activeTab === 'overview' || activeTab === 'transactions') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">交易类型分布</h3>
                <p className="text-slate-400 text-sm">按交易类别统计</p>
              </div>
            </div>
            <div className="space-y-4">
              {mockTransactionTypeData.map((type, index) => (
                <div key={type.type} className="flex items-center gap-4">
                  <div className="w-20 text-white text-sm">{type.type}</div>
                  <div className="flex-1 bg-slate-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${type.percentage}%` }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: COLORS[index] }}
                    />
                  </div>
                  <div className="w-28 text-right">
                    <span className="text-white font-medium text-sm">{type.count} 笔</span>
                    <span className="text-slate-400 text-xs ml-2">{type.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gas Fee History */}
        {(activeTab === 'overview' || activeTab === 'gas') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Gas 费用趋势</h3>
                <p className="text-slate-400 text-sm">平均 Gas 费用 (ETH)</p>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockGasFeeHistory}>
                  <defs>
                    <linearGradient id="colorGas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} tickFormatter={(value) => `${value} ETH`} />
                  <Tooltip
                    content={({ active, payload, label }: any) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl">
                            <p className="text-slate-300 text-sm mb-1">{label}</p>
                            <p className="text-white font-bold">{payload[0].value} ETH</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorGas)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}
      </div>

      {/* Top Tokens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6"
      >
        <h3 className="text-lg font-bold text-white mb-4">热门代币</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {mockAssetDistribution.map((asset, index) => (
            <div key={asset.token} className="bg-slate-800/50 rounded-xl p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: COLORS[index] }}>
                {asset.token[0]}
              </div>
              <p className="text-white font-medium">{asset.token}</p>
              <p className="text-slate-400 text-sm">${asset.valueUSDC.toLocaleString()}</p>
              <p className="text-slate-500 text-xs">{asset.amount} {asset.token}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
