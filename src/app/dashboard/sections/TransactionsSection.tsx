'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  History,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Search,
  Filter,
  Download,
  ExternalLink,
  Wallet,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockTransactions, mockWallets } from '@/lib/mockData';
import { Transaction } from '@/types';

export default function TransactionsSection() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'send' | 'receive' | 'swap'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'success' | 'pending' | 'failed'>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = () => {
    setTransactions(mockTransactions);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      loadTransactions();
      setIsLoading(false);
    }, 1000);
  };

  const handleExport = () => {
    const csv = [
      ['时间', '类型', '金额', '代币', '状态', '交易哈希'].join(','),
      ...filteredTransactions.map(t => [
        new Date(t.timestamp).toLocaleString(),
        t.type,
        t.amount,
        t.token,
        t.status,
        t.txHash,
      ].join(',')),
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transactions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.txHash.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || t.type === filterType;
    const matchesStatus = filterStatus === 'all' || t.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const stats = {
    total: transactions.length,
    send: transactions.filter(t => t.type === 'send').length,
    receive: transactions.filter(t => t.type === 'receive').length,
    pending: transactions.filter(t => t.status === 'pending').length,
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'send': return <ArrowUpRight className="h-4 w-4 text-red-600" />;
      case 'receive': return <ArrowDownRight className="h-4 w-4 text-green-600" />;
      default: return <RefreshCw className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">交易记录</h1>
          <p className="text-gray-500 mt-1">查看所有交易历史和详情</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isLoading}
            className="border-gray-200 text-gray-600 hover:bg-gray-100"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            刷新
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            className="border-gray-200 text-gray-600 hover:bg-gray-100"
          >
            <Download className="h-4 w-4 mr-2" />
            导出
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              <History className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">总交易</p>
              <p className="text-xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">转出</p>
              <p className="text-xl font-bold text-gray-900">{stats.send}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <ArrowDownRight className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">转入</p>
              <p className="text-xl font-bold text-gray-900">{stats.receive}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">处理中</p>
              <p className="text-xl font-bold text-gray-900">{stats.pending}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索交易哈希或描述..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as any)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 text-sm"
          >
            <option value="all">全部类型</option>
            <option value="send">转出</option>
            <option value="receive">转入</option>
            <option value="swap">兑换</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 text-sm"
          >
            <option value="all">全部状态</option>
            <option value="success">成功</option>
            <option value="pending">处理中</option>
            <option value="failed">失败</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        {paginatedTransactions.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <History className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">暂无交易记录</h3>
            <p className="text-gray-500">开始您的第一笔交易</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">类型</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">描述</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">金额</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">状态</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">时间</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedTransactions.map((tx, index) => (
                    <motion.tr
                      key={tx.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.03 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            tx.type === 'send' ? 'bg-red-100' :
                            tx.type === 'receive' ? 'bg-green-100' :
                            'bg-blue-100'
                          }`}>
                            {getTypeIcon(tx.type)}
                          </div>
                          <span className="text-gray-900">
                            {tx.type === 'send' ? '转出' : tx.type === 'receive' ? '转入' : '兑换'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-900">{tx.description || '-'}</p>
                        <p className="text-gray-500 text-sm">{tx.txHash.slice(0, 8)}...{tx.txHash.slice(-6)}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-medium ${
                          tx.type === 'send' ? 'text-red-600' :
                          tx.type === 'receive' ? 'text-green-600' :
                          'text-blue-600'
                        }`}>
                          {tx.type === 'send' ? '-' : tx.type === 'receive' ? '+' : ''}
                          {tx.amount} {tx.token}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className={
                          tx.status === 'success' ? 'bg-green-100 text-green-700' :
                          tx.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }>
                          {tx.status === 'success' ? (
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                          ) : tx.status === 'pending' ? (
                            <Clock className="h-3 w-3 mr-1" />
                          ) : (
                            <XCircle className="h-3 w-3 mr-1" />
                          )}
                          {tx.status === 'success' ? '成功' : tx.status === 'pending' ? '处理中' : '失败'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {new Date(tx.timestamp).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`https://etherscan.io/tx/${tx.txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 hover:text-orange-600 flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          查看
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  显示 {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredTransactions.length)} 共 {filteredTransactions.length} 条
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-sm text-gray-600">
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
