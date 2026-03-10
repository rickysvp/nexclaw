'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Shield,
  Wallet,
  ArrowRight,
  RefreshCw,
  Filter,
  Search,
  ChevronDown,
  User,
  Building2,
  Bot,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { mockPendingApprovals, mockApprovalRules } from '@/lib/mockData';
import { Approval, ApprovalRule } from '@/types';

export default function ApprovalsSection() {
  const [approvals, setApprovals] = useState<Approval[]>([]);
  const [rules, setRules] = useState<ApprovalRule[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedApproval, setSelectedApproval] = useState<Approval | null>(null);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setApprovals(mockPendingApprovals);
    setRules(mockApprovalRules);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      loadData();
      setIsLoading(false);
    }, 1000);
  };

  const handleApprove = (id: string) => {
    setApprovals(prev => prev.map(a => 
      a.id === id ? { ...a, status: 'approved', approvedAt: new Date().toISOString() } : a
    ));
  };

  const handleReject = (id: string) => {
    setApprovals(prev => prev.map(a => 
      a.id === id ? { ...a, status: 'rejected', rejectedAt: new Date().toISOString() } : a
    ));
  };

  const toggleRule = (ruleId: string) => {
    setRules(prev => prev.map(r => 
      r.id === ruleId ? { ...r, isActive: !r.isActive } : r
    ));
  };

  const filteredApprovals = approvals.filter(a => {
    const matchesFilter = filter === 'all' || a.status === filter;
    const matchesSearch = (a.description?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                         (a.agentName?.toLowerCase() || '').includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    pending: approvals.filter(a => a.status === 'pending').length,
    approved: approvals.filter(a => a.status === 'approved').length,
    rejected: approvals.filter(a => a.status === 'rejected').length,
    totalAmount: approvals
      .filter(a => a.status === 'pending')
      .reduce((sum, a) => sum + parseFloat(a.amount), 0),
  };

  const getRequesterIcon = (type: string) => {
    switch (type) {
      case 'agent': return Bot;
      case 'organization': return Building2;
      default: return User;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">交易审批</h1>
          <p className="text-gray-500 mt-1">管理待审批的交易和审批规则</p>
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
            onClick={() => setShowRules(!showRules)}
            className="border-gray-200 text-gray-600 hover:bg-gray-100"
          >
            <Shield className="h-4 w-4 mr-2" />
            审批规则
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">待审批</p>
              <p className="text-xl font-bold text-gray-900">{stats.pending}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">已批准</p>
              <p className="text-xl font-bold text-gray-900">{stats.approved}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <XCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">已拒绝</p>
              <p className="text-xl font-bold text-gray-900">{stats.rejected}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
              <Wallet className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">待审批金额</p>
              <p className="text-xl font-bold text-gray-900">{stats.totalAmount.toFixed(2)} ETH</p>
            </div>
          </div>
        </div>
      </div>

      {/* Approval Rules */}
      <AnimatePresence>
        {showRules && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">审批规则</h2>
              <p className="text-gray-500 text-sm mt-1">配置自动审批和风控规则</p>
            </div>
            <div className="divide-y divide-gray-100">
              {rules.map((rule) => (
                <div key={rule.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      rule.isActive ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <Shield className={`h-4 w-4 ${rule.isActive ? 'text-green-600' : 'text-gray-500'}`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{rule.name}</p>
                      <p className="text-sm text-gray-500">{rule.description}</p>
                    </div>
                  </div>
                  <Switch
                    checked={rule.isActive}
                    onCheckedChange={() => toggleRule(rule.id)}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索交易或请求者..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex items-center gap-2">
          {(['all', 'pending', 'approved', 'rejected'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-orange-500 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {f === 'all' ? '全部' : f === 'pending' ? '待审批' : f === 'approved' ? '已批准' : '已拒绝'}
            </button>
          ))}
        </div>
      </div>

      {/* Approvals List */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        {filteredApprovals.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">暂无审批请求</h3>
            <p className="text-gray-500">当前没有需要审批的交易</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredApprovals.map((approval, index) => {
              const requesterType = approval.agentId ? 'agent' : 'user';
              const RequesterIcon = getRequesterIcon(requesterType);
              return (
                <motion.div
                  key={approval.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        requesterType === 'agent' ? 'bg-purple-100' : 'bg-green-100'
                      }`}>
                        <RequesterIcon className={`h-6 w-6 ${
                          requesterType === 'agent' ? 'text-purple-600' : 'text-green-600'
                        }`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-900">{approval.description}</h3>
                          <Badge className={
                            approval.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            approval.status === 'approved' ? 'bg-green-100 text-green-700' :
                            'bg-red-100 text-red-700'
                          }>
                            {approval.status === 'pending' ? '待审批' :
                             approval.status === 'approved' ? '已批准' : '已拒绝'}
                          </Badge>
                          {approval.riskLevel === 'high' && (
                            <Badge className="bg-red-100 text-red-700">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              高风险
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          请求者: {approval.agentName} · {requesterType === 'agent' ? 'AI Agent' : '用户'}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span>金额: <span className="font-medium text-gray-900">{approval.amount} {approval.token}</span></span>
                          <span>时间: {new Date(approval.createdAt).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{approval.amount} {approval.token}</p>
                      {approval.status === 'pending' && (
                        <div className="flex items-center gap-2 mt-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleReject(approval.id)}
                            className="border-red-200 text-red-600 hover:bg-red-50"
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            拒绝
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleApprove(approval.id)}
                            className="bg-green-500 hover:bg-green-600"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            批准
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
