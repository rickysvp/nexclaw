'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle, XCircle, Clock, AlertTriangle, Wallet, Check, X,
  Loader2, ExternalLink, Shield, FileText, ChevronDown, ChevronUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useWallet } from '@/lib/wallet-store';

export default function ApprovalsSection() {
  const { pendingTransactions, approveTransaction, rejectTransaction, isLoading } = useWallet();
  const [selectedTx, setSelectedTx] = useState(pendingTransactions[0]);
  const [rejectReason, setRejectReason] = useState('');
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [expandedRules, setExpandedRules] = useState<string[]>([]);

  const handleApprove = async (id: string) => {
    setProcessingId(id);
    try {
      await approveTransaction(id);
      setActionSuccess('交易已批准');
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (error) {
      console.error('Approval failed:', error);
    }
    setProcessingId(null);
  };

  const handleReject = async () => {
    if (!selectedTx) return;
    setProcessingId(selectedTx.id);
    try {
      await rejectTransaction(selectedTx.id, rejectReason);
      setShowRejectDialog(false);
      setRejectReason('');
      setActionSuccess('交易已拒绝');
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (error) {
      console.error('Rejection failed:', error);
    }
    setProcessingId(null);
  };

  const toggleRules = (txId: string) => {
    setExpandedRules(prev => 
      prev.includes(txId) ? prev.filter(id => id !== txId) : [...prev, txId]
    );
  };

  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'low':
        return <Badge className="bg-green-500/20 text-green-400">低风险</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-500/20 text-yellow-400">中风险</Badge>;
      case 'high':
        return <Badge className="bg-red-500/20 text-red-400">高风险</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-400">未知</Badge>;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'transfer': return '转账';
      case 'swap': return '兑换';
      case 'contract': return '合约交互';
      case 'approve': return '授权';
      default: return type;
    }
  };

  return (
    <div className="space-y-6">
      {/* Success Notification */}
      <AnimatePresence>
        {actionSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 z-50 px-6 py-3 rounded-lg bg-green-500 text-white shadow-lg flex items-center gap-2"
          >
            <CheckCircle className="h-5 w-5" />
            {actionSuccess}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">交易审批</h1>
          <p className="text-gray-400">审核来自 Agents 的交易请求</p>
        </div>
        <Badge className="bg-yellow-500/20 text-yellow-400 px-3 py-1 text-base">
          <Clock className="h-4 w-4 mr-1 inline" />
          {pendingTransactions.length} 笔待审批
        </Badge>
      </div>

      {pendingTransactions.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 rounded-2xl"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">暂无待审批交易</h2>
          <p className="text-gray-400">所有交易请求已处理完毕</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending List */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white mb-4">待审批列表</h2>
            {pendingTransactions.map((tx) => (
              <motion.div
                key={tx.id}
                onClick={() => setSelectedTx(tx)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedTx?.id === tx.id
                    ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/50'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-gray-600/50'
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                      <Wallet className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{tx.agentName}</p>
                      <p className="text-xs text-gray-500">{tx.agentId}</p>
                    </div>
                  </div>
                  {getRiskBadge(tx.riskLevel)}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">类型</span>
                    <span className="font-medium text-white">{getTypeLabel(tx.type)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">金额</span>
                    <span className="font-medium text-white">{tx.amount} {tx.token}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">≈ USDC</span>
                    <span className="font-medium text-white">${tx.amountUSDC}</span>
                  </div>
                </div>

                {/* Triggered Rules */}
                {tx.triggeredRules.length > 0 && (
                  <div className="mb-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleRules(tx.id); }}
                      className="flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300"
                    >
                      <AlertTriangle className="h-4 w-4" />
                      触发 {tx.triggeredRules.length} 条风控规则
                      {expandedRules.includes(tx.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                    <AnimatePresence>
                      {expandedRules.includes(tx.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-2 space-y-1 pl-6">
                            {tx.triggeredRules.map((rule, idx) => (
                              <li key={idx} className="text-sm text-gray-400">• {rule}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                <div className="flex gap-2">
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); handleApprove(tx.id); }}
                    disabled={processingId === tx.id}
                    className="flex-1 px-4 py-2 rounded-lg bg-green-500/20 text-green-400 font-medium hover:bg-green-500/30 flex items-center justify-center gap-2 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {processingId === tx.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                    批准
                  </motion.button>
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); setSelectedTx(tx); setShowRejectDialog(true); }}
                    disabled={processingId === tx.id}
                    className="flex-1 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 font-medium hover:bg-red-500/30 flex items-center justify-center gap-2 disabled:opacity-50"
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
                key={selectedTx.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 space-y-6"
              >
                {/* Risk Alert */}
                {selectedTx.riskLevel === 'high' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-400">高风险交易</p>
                        <p className="text-sm text-gray-400">该交易触发多条风控规则，请谨慎处理</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Transaction Info */}
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-700/30">
                    <span className="text-gray-400">交易类型</span>
                    <span className="text-white font-medium">{getTypeLabel(selectedTx.type)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-700/30">
                    <span className="text-gray-400">金额</span>
                    <span className="text-white font-medium">{selectedTx.amount} {selectedTx.token}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-700/30">
                    <span className="text-gray-400">USDC 估值</span>
                    <span className="text-white font-medium">${selectedTx.amountUSDC}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-700/30">
                    <span className="text-gray-400">预估 Gas</span>
                    <span className="text-white font-medium">{selectedTx.gasEstimate} ETH</span>
                  </div>
                  <div className="py-3 border-b border-gray-700/30">
                    <span className="text-gray-400 block mb-2">发送方</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm text-white">{selectedTx.from}</span>
                      <button className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white">
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="py-3 border-b border-gray-700/30">
                    <span className="text-gray-400 block mb-2">接收方</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm text-white">{selectedTx.to}</span>
                      <button className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white">
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  {selectedTx.description && (
                    <div className="py-3 border-b border-gray-700/30">
                      <span className="text-gray-400 block mb-2">描述</span>
                      <p className="text-white text-sm">{selectedTx.description}</p>
                    </div>
                  )}
                </div>

                {/* Risk Score */}
                <div className="bg-gray-900/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">风险评分</span>
                    <span className={`font-bold ${
                      selectedTx.riskScore > 70 ? 'text-red-400' :
                      selectedTx.riskScore > 40 ? 'text-yellow-400' : 'text-green-400'
                    }`}>{selectedTx.riskScore}/100</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        selectedTx.riskScore > 70 ? 'bg-red-500' :
                        selectedTx.riskScore > 40 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${selectedTx.riskScore}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <motion.button
                    onClick={() => handleApprove(selectedTx.id)}
                    disabled={processingId === selectedTx.id}
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {processingId === selectedTx.id ? <Loader2 className="h-5 w-5 animate-spin" /> : <Check className="h-5 w-5" />}
                    批准交易
                  </motion.button>
                  <motion.button
                    onClick={() => setShowRejectDialog(true)}
                    disabled={processingId === selectedTx.id}
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <X className="h-5 w-5" />
                    拒绝交易
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* Reject Dialog */}
      {showRejectDialog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-md"
          >
            <h3 className="text-xl font-bold text-white mb-4">拒绝交易</h3>
            <p className="text-gray-400 mb-4">请输入拒绝原因（可选）</p>
            <textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="输入拒绝原因..."
              className="w-full h-24 bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-2 text-white resize-none mb-4"
            />
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => { setShowRejectDialog(false); setRejectReason(''); }}
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                取消
              </Button>
              <motion.button
                onClick={handleReject}
                disabled={processingId === selectedTx?.id}
                className="flex-1 px-4 py-2 rounded-lg bg-red-500 text-white font-medium disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {processingId === selectedTx?.id ? <Loader2 className="h-4 w-4 animate-spin mx-auto" /> : '确认拒绝'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
