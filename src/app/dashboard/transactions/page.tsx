'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Search, Filter, ArrowUpRight, ArrowDownLeft, ChevronLeft,
  Settings, User, ExternalLink, Calendar, Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockTransactions } from '@/lib/mockData';

export default function TransactionsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'send' | 'receive'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'success' | 'failed' | 'pending'>('all');

  const filteredTransactions = useMemo(() => {
    return mockTransactions.filter(tx => {
      const matchesSearch = 
        (tx.txHash || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tx.from || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tx.to || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = typeFilter === 'all' || 
        (typeFilter === 'send' && tx.type === 'send') ||
        (typeFilter === 'receive' && tx.type === 'receive');
      
      const matchesStatus = statusFilter === 'all' || tx.status === statusFilter;
      
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchQuery, typeFilter, statusFilter]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success': return <Badge className="bg-green-500/20 text-green-400">成功</Badge>;
      case 'failed': return <Badge className="bg-red-500/20 text-red-400">失败</Badge>;
      case 'pending': return <Badge className="bg-yellow-500/20 text-yellow-400">处理中</Badge>;
      default: return <Badge className="bg-gray-500/20 text-gray-400">未知</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
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
                  <h1 className="text-xl font-bold text-white">交易记录</h1>
                  <p className="text-xs text-gray-400">{filteredTransactions.length} 笔交易</p>
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
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -trangray-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="搜索交易哈希、地址..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800/50 border-gray-700 text-white"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {(['all', 'send', 'receive'] as const).map((type) => (
              <motion.button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  typeFilter === type
                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {type === 'all' ? '全部' : type === 'send' ? '发送' : '接收'}
              </motion.button>
            ))}
            {(['all', 'success', 'failed', 'pending'] as const).map((status) => (
              <motion.button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  statusFilter === status
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'all' ? '全部状态' : status === 'success' ? '成功' : status === 'failed' ? '失败' : '处理中'}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900/50 border-b border-gray-700/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">交易哈希</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">类型</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">从</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">到</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">金额</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">状态</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">时间</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/30">
                {filteredTransactions.map((tx) => (
                  <motion.tr
                    key={tx.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-gray-300">{(tx.txHash || tx.id).slice(0, 12)}...</span>
                        <button className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white transition-colors">
                          <ExternalLink className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {tx.type === 'receive' ? (
                          <ArrowDownLeft className="h-4 w-4 text-green-400" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 text-orange-400" />
                        )}
                        <span className="text-white">{tx.type === 'receive' ? '接收' : '发送'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm text-gray-400">{(tx.from || '').slice(0, 8)}...</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm text-gray-400">{(tx.to || '').slice(0, 8)}...</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-white">{tx.amount} {tx.token}</span>
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(tx.status)}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(tx.timestamp).toLocaleString('zh-CN')}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <Wallet className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">没有找到匹配的交易</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
