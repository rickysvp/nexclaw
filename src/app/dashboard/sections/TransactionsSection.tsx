'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ArrowUpRight, ArrowDownLeft, ExternalLink, Wallet, X,
  Calendar, Filter, ChevronDown, Eye, Copy, CheckCircle2, Clock, AlertCircle,
  FileText, User, Hash
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/lib/wallet-store';
import { Transaction } from '@/types';
import { formatAddress, formatDateTime, copyToClipboard } from '@/lib/utils';

export default function TransactionsSection() {
  const { transactions, isLoading } = useWallet();
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'send' | 'receive'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'success' | 'failed' | 'pending'>('all');
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');
  const [showFilters, setShowFilters] = useState(false);
  
  // Detail view state
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Filter transactions
  const filteredTransactions = useMemo(() => {
    return transactions.filter(tx => {
      const matchesSearch = 
        (tx.txHash || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tx.from || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tx.to || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tx.walletName || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = typeFilter === 'all' || tx.type === typeFilter;
      const matchesStatus = statusFilter === 'all' || tx.status === statusFilter;
      
      let matchesDate = true;
      if (dateFilter !== 'all') {
        const txDate = new Date(tx.timestamp);
        const now = new Date();
        if (dateFilter === 'today') {
          matchesDate = txDate.toDateString() === now.toDateString();
        } else if (dateFilter === 'week') {
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          matchesDate = txDate >= weekAgo;
        } else if (dateFilter === 'month') {
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          matchesDate = txDate >= monthAgo;
        }
      }
      
      return matchesSearch && matchesType && matchesStatus && matchesDate;
    });
  }, [transactions, searchQuery, typeFilter, statusFilter, dateFilter]);

  // Stats
  const stats = useMemo(() => {
    const total = filteredTransactions.length;
    const totalIn = filteredTransactions
      .filter(tx => tx.type === 'receive' && tx.status === 'success')
      .reduce((sum, tx) => sum + parseFloat(tx.amount), 0);
    const totalOut = filteredTransactions
      .filter(tx => tx.type === 'send' && tx.status === 'success')
      .reduce((sum, tx) => sum + parseFloat(tx.amount), 0);
    return { total, totalIn, totalOut };
  }, [filteredTransactions]);

  const handleCopy = async (text: string, field: string) => {
    await copyToClipboard(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success': return <Badge className="bg-green-500/20 text-green-400 border-green-500/30"><CheckCircle2 className="h-3 w-3 mr-1" />成功</Badge>;
      case 'failed': return <Badge className="bg-red-500/20 text-red-400 border-red-500/30"><AlertCircle className="h-3 w-3 mr-1" />失败</Badge>;
      case 'pending': return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"><Clock className="h-3 w-3 mr-1" />处理中</Badge>;
      default: return <Badge className="bg-gray-500/20 text-gray-400">未知</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"><CheckCircle2 className="h-5 w-5 text-green-400" /></div>;
      case 'failed': return <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center"><AlertCircle className="h-5 w-5 text-red-400" /></div>;
      case 'pending': return <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center"><Clock className="h-5 w-5 text-yellow-400" /></div>;
      default: return <div className="w-10 h-10 rounded-full bg-gray-500/20 flex items-center justify-center"><FileText className="h-5 w-5 text-gray-400" /></div>;
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setTypeFilter('all');
    setStatusFilter('all');
    setDateFilter('all');
  };

  const hasActiveFilters = searchQuery || typeFilter !== 'all' || statusFilter !== 'all' || dateFilter !== 'all';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">交易记录</h1>
          <p className="text-gray-400">查看和管理所有交易历史</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm text-gray-400">总交易数</p>
            <p className="text-xl font-bold text-white">{stats.total}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div 
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <ArrowDownLeft className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">总收入</p>
              <p className="text-lg font-bold text-green-400">+${stats.totalIn.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">总支出</p>
              <p className="text-lg font-bold text-orange-400">-${stats.totalOut.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Wallet className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">净收支</p>
              <p className={`text-lg font-bold ${stats.totalIn - stats.totalOut >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                ${(stats.totalIn - stats.totalOut).toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -trangray-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="搜索交易哈希、地址、钱包名称..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800/50 border-gray-700 text-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -trangray-y-1/2 p-1 rounded hover:bg-gray-700/50"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className={`border-gray-700 ${showFilters ? 'bg-gray-700/50 text-white' : 'text-gray-400'}`}
          >
            <Filter className="h-4 w-4 mr-2" />
            筛选
            <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </Button>
          {hasActiveFilters && (
            <Button variant="ghost" onClick={clearFilters} className="text-gray-400">
              清除筛选
            </Button>
          )}
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 space-y-4">
                {/* Type Filter */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">交易类型</p>
                  <div className="flex flex-wrap gap-2">
                    {([
                      { key: 'all', label: '全部' },
                      { key: 'send', label: '发送' },
                      { key: 'receive', label: '接收' }
                    ] as const).map((type) => (
                      <button
                        key={type.key}
                        onClick={() => setTypeFilter(type.key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          typeFilter === type.key
                            ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                            : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">交易状态</p>
                  <div className="flex flex-wrap gap-2">
                    {([
                      { key: 'all', label: '全部' },
                      { key: 'success', label: '成功' },
                      { key: 'pending', label: '处理中' },
                      { key: 'failed', label: '失败' }
                    ] as const).map((status) => (
                      <button
                        key={status.key}
                        onClick={() => setStatusFilter(status.key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          statusFilter === status.key
                            ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                            : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50'
                        }`}
                      >
                        {status.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Filter */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">时间范围</p>
                  <div className="flex flex-wrap gap-2">
                    {([
                      { key: 'all', label: '全部时间' },
                      { key: 'today', label: '今天' },
                      { key: 'week', label: '最近7天' },
                      { key: 'month', label: '最近30天' }
                    ] as const).map((date) => (
                      <button
                        key={date.key}
                        onClick={() => setDateFilter(date.key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          dateFilter === date.key
                            ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                            : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50'
                        }`}
                      >
                        {date.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Transactions Table */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900/50 border-b border-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">交易</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">发送方</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">接收方</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">金额</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">状态</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">时间</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">操作</th>
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
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        tx.type === 'receive' ? 'bg-green-500/20' : 'bg-orange-500/20'
                      }`}>
                        {tx.type === 'receive' ? (
                          <ArrowDownLeft className="h-5 w-5 text-green-400" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-orange-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-white">{tx.type === 'receive' ? '接收' : '发送'} {tx.token}</p>
                        <p className="text-sm text-gray-500">{formatAddress(tx.txHash || tx.id)}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-white font-mono">{formatAddress(tx.from || '')}</p>
                    <p className="text-xs text-gray-500">{tx.walletName || '外部地址'}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-white font-mono">{formatAddress(tx.to || '')}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${tx.type === 'receive' ? 'text-green-400' : 'text-orange-400'}`}>
                      {tx.type === 'receive' ? '+' : '-'}{tx.amount} {tx.token}
                    </span>
                    <p className="text-sm text-gray-500">≈ ${(parseFloat(tx.amount) * (tx.token === 'USDT' ? 1 : 3000)).toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(tx.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {formatDateTime(tx.timestamp)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedTx(tx)}
                      className="text-gray-400 hover:text-white"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      详情
                    </Button>
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
            {hasActiveFilters && (
              <Button variant="ghost" onClick={clearFilters} className="mt-4 text-orange-400">
                清除筛选条件
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Transaction Detail Modal */}
      <AnimatePresence>
        {selectedTx && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedTx(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(selectedTx.status)}
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {selectedTx.type === 'receive' ? '接收' : '发送'} {selectedTx.token}
                      </h3>
                      <p className="text-sm text-gray-400">{getStatusBadge(selectedTx.status)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTx(null)}
                    className="p-2 rounded-lg hover:bg-gray-800 text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Amount */}
                <div className="text-center py-4 bg-gray-800/30 rounded-xl">
                  <p className={`text-3xl font-bold ${selectedTx.type === 'receive' ? 'text-green-400' : 'text-orange-400'}`}>
                    {selectedTx.type === 'receive' ? '+' : '-'}{selectedTx.amount} {selectedTx.token}
                  </p>
                  <p className="text-gray-400 mt-1">
                    ≈ ${(parseFloat(selectedTx.amount) * (selectedTx.token === 'USDT' ? 1 : 3000)).toLocaleString()} USD
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Hash className="h-4 w-4" />交易哈希
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-mono">{formatAddress(selectedTx.txHash || selectedTx.id)}</span>
                      <button
                        onClick={() => handleCopy(selectedTx.txHash || selectedTx.id, 'hash')}
                        className="p-1 rounded hover:bg-gray-800"
                      >
                        {copiedField === 'hash' ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-gray-500" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Wallet className="h-4 w-4" />钱包
                    </span>
                    <span className="text-white">{selectedTx.walletName || '未知钱包'}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400 flex items-center gap-2">
                      <ArrowUpRight className="h-4 w-4" />发送方
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-mono">{formatAddress(selectedTx.from || '')}</span>
                      {selectedTx.from && (
                        <button
                          onClick={() => handleCopy(selectedTx.from!, 'from')}
                          className="p-1 rounded hover:bg-gray-800"
                        >
                          {copiedField === 'from' ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-gray-500" />}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400 flex items-center gap-2">
                      <ArrowDownLeft className="h-4 w-4" />接收方
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-mono">{formatAddress(selectedTx.to || '')}</span>
                      {selectedTx.to && (
                        <button
                          onClick={() => handleCopy(selectedTx.to!, 'to')}
                          className="p-1 rounded hover:bg-gray-800"
                        >
                          {copiedField === 'to' ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-gray-500" />}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />时间
                    </span>
                    <span className="text-white">{formatDateTime(selectedTx.timestamp)}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400 flex items-center gap-2">
                      <FileText className="h-4 w-4" />Gas费用
                    </span>
                    <span className="text-white">{selectedTx.gasFee || '0.001'} ETH</span>
                  </div>

                  {selectedTx.description && (
                    <div className="py-2">
                      <span className="text-gray-400 flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4" />备注
                      </span>
                      <p className="text-white bg-gray-800/30 p-3 rounded-lg">{selectedTx.description}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-800 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700"
                  onClick={() => window.open(`https://etherscan.io/tx/${selectedTx.txHash}`, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  在浏览器查看
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600"
                  onClick={() => setSelectedTx(null)}
                >
                  关闭
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
