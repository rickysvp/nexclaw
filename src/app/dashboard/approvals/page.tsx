'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  CheckCircle, XCircle, Clock, AlertTriangle, Shield,
  ChevronLeft, Settings, User, Wallet, ArrowRight,
  Check, X, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { mockPendingTransactions, mockSecurityRules } from '@/lib/mockData';
import { PendingTransaction } from '@/types';

export default function ApprovalsPage() {
  const router = useRouter();
  const [pendingTxs, setPendingTxs] = useState<PendingTransaction[]>(mockPendingTransactions);
  const [selectedTx, setSelectedTx] = useState<PendingTransaction | null>(null);
  const [pinCode, setPinCode] = useState('');
  const [rejectReason, setRejectReason] = useState('');
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-500/20 text-green-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'high': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getRiskLabel = (level: string) => {
    switch (level) {
      case 'low': return '低风险';
      case 'medium': return '中风险';
      case 'high': return '高风险';
      default: return '未知';
    }
  };

  const handleApprove = () => {
    // Verify PIN
    const rule = mockSecurityRules[0];
    if (rule?.pinCode && pinCode !== rule.pinCode) {
      showNotification('PIN 码错误', 'error');
      return;
    }

    if (selectedTx) {
      setPendingTxs(pendingTxs.filter(tx => tx.id !== selectedTx.id));
      setShowApproveDialog(false);
      setPinCode('');
      showNotification('交易已批准');
    }
  };

  const handleReject = () => {
    if (selectedTx) {
      setPendingTxs(pendingTxs.filter(tx => tx.id !== selectedTx.id));
      setShowRejectDialog(false);
      setRejectReason('');
      showNotification('交易已拒绝');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 left-1/2 -trangray-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
              notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {notification.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

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
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">交易审批</h1>
                  <p className="text-xs text-gray-400">{pendingTxs.length} 笔待审批</p>
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                    selectedTx?.id === tx.id
                      ? 'bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-orange-500/50'
                      : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-gray-600/50'
                  }`}
                  onClick={() => setSelectedTx(tx)}
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
                    <Badge className={getRiskColor(tx.riskLevel)}>
                      {getRiskLabel(tx.riskLevel)}
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
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">类型</span>
                      <span className="text-gray-300">{tx.type === 'transfer' ? '转账' : tx.type === 'swap' ? '兑换' : '合约交互'}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTx(tx);
                        setShowApproveDialog(true);
                      }}
                      className="flex-1 px-4 py-2 rounded-lg bg-green-500/20 text-green-400 font-medium hover:bg-green-500/30 transition-colors flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Check className="h-4 w-4" />
                      批准
                    </motion.button>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTx(tx);
                        setShowRejectDialog(true);
                      }}
                      className="flex-1 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 font-medium hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2"
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
              {selectedTx ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
                >
                  <div className="space-y-6">
                    {/* Risk Warning */}
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
                        <span className="text-white font-medium">
                          {selectedTx.type === 'transfer' ? '转账' : selectedTx.type === 'swap' ? '代币兑换' : '合约交互'}
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
                      <div className="flex justify-between py-3 border-b border-gray-700/30">
                        <span className="text-gray-400">Gas 预估</span>
                        <span className="text-white font-medium">{selectedTx.gasEstimate} ETH</span>
                      </div>
                      <div className="py-3 border-b border-gray-700/30">
                        <span className="text-gray-400 block mb-2">发送方</span>
                        <span className="font-mono text-sm text-white">{selectedTx.from}</span>
                      </div>
                      <div className="py-3 border-b border-gray-700/30">
                        <span className="text-gray-400 block mb-2">接收方</span>
                        <span className="font-mono text-sm text-white">{selectedTx.to}</span>
                      </div>
                      {selectedTx.description && (
                        <div className="py-3 border-b border-gray-700/30">
                          <span className="text-gray-400 block mb-2">描述</span>
                          <span className="text-white">{selectedTx.description}</span>
                        </div>
                      )}
                    </div>

                    {/* Triggered Rules */}
                    {selectedTx.triggeredRules.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-3">触发的风控规则</h4>
                        <div className="space-y-2">
                          {selectedTx.triggeredRules.map((rule, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-yellow-400">
                              <AlertTriangle className="h-4 w-4" />
                              {rule}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-12 text-center">
                  <Clock className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">选择左侧交易查看详情</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Approve Dialog */}
      <Dialog open={showApproveDialog} onOpenChange={setShowApproveDialog}>
        <DialogContent className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-green-400">批准交易</DialogTitle>
            <DialogDescription className="text-gray-400">
              确认批准此交易请求
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">金额</span>
                <span className="text-white font-medium">{selectedTx?.amount} {selectedTx?.token}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">接收方</span>
                <span className="font-mono text-sm text-white">{selectedTx?.to.slice(0, 10)}...</span>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">输入 PIN 码确认</label>
              <Input
                type="password"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="6 位数字"
                maxLength={6}
                className="bg-gray-900/80 border-gray-700 text-white font-mono tracking-widest"
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowApproveDialog(false);
                  setPinCode('');
                }}
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                取消
              </Button>
              <motion.button
                onClick={handleApprove}
                disabled={pinCode.length !== 6}
                className="flex-1 px-4 py-2 rounded-lg bg-green-500 text-white font-medium disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                确认批准
              </motion.button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Reject Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-red-400">拒绝交易</DialogTitle>
            <DialogDescription className="text-gray-400">
              请填写拒绝原因
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">拒绝原因（可选）</label>
              <Input
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="例如：金额过大，需要进一步确认"
                className="bg-gray-900/80 border-gray-700 text-white"
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowRejectDialog(false);
                  setRejectReason('');
                }}
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                取消
              </Button>
              <motion.button
                onClick={handleReject}
                className="flex-1 px-4 py-2 rounded-lg bg-red-500 text-white font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                确认拒绝
              </motion.button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
