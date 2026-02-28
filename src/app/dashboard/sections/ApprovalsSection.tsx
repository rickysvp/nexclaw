'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle, XCircle, Clock, AlertTriangle, Wallet, Check, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockPendingTransactions } from '@/lib/mockData';

export default function ApprovalsSection() {
  const [pendingTxs, setPendingTxs] = useState(mockPendingTransactions);
  const [selectedTx, setSelectedTx] = useState(mockPendingTransactions[0]);

  const handleApprove = (id: string) => {
    setPendingTxs(pendingTxs.filter(tx => tx.id !== id));
  };

  const handleReject = (id: string) => {
    setPendingTxs(pendingTxs.filter(tx => tx.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">交易审批</h1>
          <p className="text-gray-400">审核来自 Agents 的交易请求</p>
        </div>
        <Badge className="bg-yellow-500/20 text-yellow-400 px-3 py-1">
          {pendingTxs.length} 笔待审批
        </Badge>
      </div>

      {pendingTxs.length === 0 ? (
        <div className="text-center py-20">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">暂无待审批交易</h2>
          <p className="text-gray-400">所有交易请求已处理完毕</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending List */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white mb-4">待审批列表</h2>
            {pendingTxs.map((tx) => (
              <motion.div
                key={tx.id}
                onClick={() => setSelectedTx(tx)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                  selectedTx?.id === tx.id
                    ? 'bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-orange-500/50'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                      <Wallet className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{tx.agentName}</p>
                      <p className="text-xs text-gray-500">{tx.agentId}</p>
                    </div>
                  </div>
                  <Badge className={
                    tx.riskLevel === 'low' ? 'bg-green-500/20 text-green-400' :
                    tx.riskLevel === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }>
                    {tx.riskLevel === 'low' ? '低风险' : tx.riskLevel === 'medium' ? '中风险' : '高风险'}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">金额</span>
                    <span className="font-medium text-white">{tx.amount} {tx.token}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">≈ USDC</span>
                    <span className="font-medium text-white">${tx.amountUSDC}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); handleApprove(tx.id); }}
                    className="flex-1 px-4 py-2 rounded-lg bg-green-500/20 text-green-400 font-medium hover:bg-green-500/30 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Check className="h-4 w-4" />
                    批准
                  </motion.button>
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); handleReject(tx.id); }}
                    className="flex-1 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 font-medium hover:bg-red-500/30 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <X className="h-4 w-4" />
                    拒绝
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Transaction Detail */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">交易详情</h2>
            {selectedTx && (
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
              >
                {selectedTx.riskLevel === 'high' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-400">高风险交易</p>
                        <p className="text-sm text-gray-400">该交易触发多条风控规则，请谨慎处理</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-700/30">
                    <span className="text-gray-400">交易类型</span>
                    <span className="text-white font-medium">
                      {selectedTx.type === 'transfer' ? '转账' : selectedTx.type === 'swap' ? '兑换' : '合约交互'}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-700/30">
                    <span className="text-gray-400">金额</span>
                    <span className="text-white font-medium">{selectedTx.amount} {selectedTx.token}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-700/30">
                    <span className="text-gray-400">USDC 估值</span>
                    <span className="text-white font-medium">${selectedTx.amountUSDC}</span>
                  </div>
                  <div className="py-3 border-b border-gray-700/30">
                    <span className="text-gray-400 block mb-2">发送方</span>
                    <span className="font-mono text-sm text-white">{selectedTx.from}</span>
                  </div>
                  <div className="py-3 border-b border-gray-700/30">
                    <span className="text-gray-400 block mb-2">接收方</span>
                    <span className="font-mono text-sm text-white">{selectedTx.to}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
