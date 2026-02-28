'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, TrendingDown, DollarSign, Activity,
  BarChart3, PieChart, Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock data for charts
const mockChartData = {
  totalAssets: [
    { date: '2026-02-20', value: 7500 },
    { date: '2026-02-21', value: 7800 },
    { date: '2026-02-22', value: 7200 },
    { date: '2026-02-23', value: 8100 },
    { date: '2026-02-24', value: 7900 },
    { date: '2026-02-25', value: 8200 },
    { date: '2026-02-26', value: 8450 },
  ],
  transactionsByType: [
    { type: '转账', count: 45, amount: 12500 },
    { type: '兑换', count: 12, amount: 5600 },
    { type: '合约交互', count: 8, amount: 3200 },
  ],
  weeklyStats: {
    totalVolume: 21300,
    totalTransactions: 65,
    successRate: 94.5,
    avgGasFee: 0.0025,
  }
};

export default function AnalyticsSection() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('7d');

  // Calculate stats
  const currentValue = mockChartData.totalAssets[mockChartData.totalAssets.length - 1].value;
  const previousValue = mockChartData.totalAssets[0].value;
  const changePercent = ((currentValue - previousValue) / previousValue * 100).toFixed(2);
  const isPositive = parseFloat(changePercent) >= 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">数据分析</h1>
          <p className="text-gray-400">资产分析与交易统计</p>
        </div>
        <div className="flex gap-2">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <motion.button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                timeRange === range
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">总资产变化</p>
              <p className="text-2xl font-bold text-white">${currentValue.toLocaleString()}</p>
              <div className={`flex items-center gap-1 mt-2 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                {isPositive ? '+' : ''}{changePercent}%
              </div>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">交易总量</p>
              <p className="text-2xl font-bold text-white">{mockChartData.weeklyStats.totalTransactions}</p>
              <p className="text-sm text-gray-500 mt-2">本周</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600">
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
              <p className="text-gray-400 text-sm mb-1">成功率</p>
              <p className="text-2xl font-bold text-white">{mockChartData.weeklyStats.successRate}%</p>
              <p className="text-sm text-green-400 mt-2">+2.3% 环比</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">平均 Gas</p>
              <p className="text-2xl font-bold text-white">{mockChartData.weeklyStats.avgGasFee} ETH</p>
              <p className="text-sm text-gray-500 mt-2">每笔交易</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
              <PieChart className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Simple Chart Visualization */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">资产趋势</h3>
        <div className="h-64 flex items-end gap-2">
          {mockChartData.totalAssets.map((data, index) => {
            const height = (data.value / 10000) * 100;
            return (
              <motion.div
                key={data.date}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: index * 0.1 }}
                className="flex-1 bg-gradient-to-t from-orange-500/50 to-orange-500/20 rounded-t-lg relative group"
              >
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                  ${data.value}
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex justify-between mt-4 text-sm text-gray-400">
          {mockChartData.totalAssets.map((data) => (
            <span key={data.date}>{data.date.slice(5)}</span>
          ))}
        </div>
      </div>

      {/* Transaction Types */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">交易类型分布</h3>
        <div className="space-y-4">
          {mockChartData.transactionsByType.map((type) => (
            <div key={type.type} className="flex items-center gap-4">
              <div className="w-24 text-white">{type.type}</div>
              <div className="flex-1 bg-gray-700/50 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(type.amount / 21300) * 100}%` }}
                  className="h-full bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"
                />
              </div>
              <div className="w-32 text-right">
                <span className="text-white font-medium">{type.count} 笔</span>
                <span className="text-gray-400 text-sm ml-2">${type.amount.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
