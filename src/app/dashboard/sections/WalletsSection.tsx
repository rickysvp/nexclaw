'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Wallet, Search, Plus, MoreVertical, Send, ArrowDownLeft,
  Trash2, Download, Copy, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockWallets } from '@/lib/mockData';

export default function WalletsSection() {
  const [wallets] = useState(mockWallets);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWallets = useMemo(() => {
    return wallets.filter(wallet => 
      wallet.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wallet.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wallet.uid.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [wallets, searchQuery]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">钱包管理</h1>
          <p className="text-gray-400">管理您的所有 Agent 钱包</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          创建钱包
        </motion.button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          placeholder="搜索钱包名称、地址或 UID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-gray-800/50 border-gray-700 text-white"
        />
      </div>

      {/* Wallets Table */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-900/50 border-b border-gray-700/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">钱包</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">地址</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">余额</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">状态</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-400">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/30">
            {filteredWallets.map((wallet) => (
              <motion.tr
                key={wallet.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-gray-800/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                      <Wallet className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{wallet.name}</p>
                      <p className="text-xs text-gray-500">{wallet.uid}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-sm text-gray-300">
                    {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-white">{wallet.balance}</p>
                </td>
                <td className="px-6 py-4">
                  <Badge className="bg-green-500/20 text-green-400">活跃</Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <motion.button
                      className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowDownLeft className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Send className="h-4 w-4" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
