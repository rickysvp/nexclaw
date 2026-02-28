'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search, ArrowUpRight, ArrowDownLeft, ExternalLink, Wallet
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockTransactions } from '@/lib/mockData';

export default function TransactionsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'send' | 'receive'>('all');

  const filteredTransactions = useMemo(() => {
    return mockTransactions.filter(tx => {
      const matchesSearch = 
        (tx.txHash || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tx.from || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tx.to || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = typeFilter === 'all' || 
        (typeFilter === 'send' && tx.type === 'send') ||
        (typeFilter === 'receive' && tx.type === 'receive');
      
      return matchesSearch && matchesType;
    });
  }, [searchQuery, typeFilter]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success': return <Badge className="bg-green-500/20 text-green-400">成功</Badge>;
      case 'failed': return <Badge className="bg-red-500/20 text-red-400">失败</Badge>;
      case 'pending': return <Badge className="bg-yellow-500/20 text-yellow-400">处理中</Badge>;
      default: return <Badge className="bg-gray-500/20 text-gray-400">未知</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">交易记录</h1>
          <p className="text-gray-400">查看所有交易历史</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="搜索交易哈希、地址..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-800/50 border-gray-700 text-white"
          />
        </div>
        <div className="flex gap-2">
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
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-900/50 border-b border-gray-700/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">交易哈希</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">类型</th>
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
                    <button className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white">
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
        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <Wallet className="h-12 w-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500">没有找到匹配的交易</p>
          </div>
        )}
      </div>
    </div>
  );
}
