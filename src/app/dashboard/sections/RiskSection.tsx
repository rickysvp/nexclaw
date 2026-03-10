'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingUp,
  Activity,
  Lock,
  Eye,
  RefreshCw,
  Settings,
  FileText,
  ChevronRight,
  Wallet,
  Users,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { mockSecurityRules, mockRiskEvents, mockWallets } from '@/lib/mockData';
import { SecurityRule, RiskEvent } from '@/types';

export default function RiskSection() {
  const [rules, setRules] = useState<SecurityRule[]>([]);
  const [events, setEvents] = useState<RiskEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [securityScore, setSecurityScore] = useState(85);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setRules(mockSecurityRules);
    setEvents(mockRiskEvents);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      loadData();
      setIsLoading(false);
    }, 1000);
  };

  const toggleRule = (ruleId: string) => {
    setRules(prev => prev.map(r => 
      r.id === ruleId ? { ...r, isActive: !r.isActive } : r
    ));
  };

  const stats = {
    totalRules: rules.length,
    activeRules: rules.filter(r => r.isActive).length,
    highRiskEvents: events.filter(e => e.severity === 'high').length,
    mediumRiskEvents: events.filter(e => e.severity === 'medium').length,
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'medium': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'low': return <Eye className="h-4 w-4 text-blue-600" />;
      default: return <CheckCircle className="h-4 w-4 text-green-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">风控安全</h1>
          <p className="text-gray-500 mt-1">监控安全风险和管理安全策略</p>
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
            className="border-gray-200 text-gray-600 hover:bg-gray-100"
          >
            <Settings className="h-4 w-4 mr-2" />
            安全设置
          </Button>
        </div>
      </div>

      {/* Security Score */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium mb-1">安全评分</h2>
            <p className="text-orange-100 text-sm">基于您的安全设置和最近活动</p>
          </div>
          <div className="text-right">
            <p className="text-5xl font-bold">{securityScore}</p>
            <p className="text-orange-100">/ 100</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${securityScore}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2 text-sm text-orange-100">
            <span>需要改进</span>
            <span>良好</span>
            <span>优秀</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">安全规则</p>
              <p className="text-xl font-bold text-gray-900">{stats.totalRules}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">已启用</p>
              <p className="text-xl font-bold text-gray-900">{stats.activeRules}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">高风险事件</p>
              <p className="text-xl font-bold text-gray-900">{stats.highRiskEvents}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
              <Activity className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">中风险事件</p>
              <p className="text-xl font-bold text-gray-900">{stats.mediumRiskEvents}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Rules */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">安全规则</h2>
            <p className="text-gray-500 text-sm mt-1">配置自动风控策略</p>
          </div>
          <div className="divide-y divide-gray-100">
            {rules.map((rule) => (
              <div key={rule.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    rule.isActive ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {rule.type === 'spend_limit' ? (
                      <Wallet className={`h-5 w-5 ${rule.isActive ? 'text-green-600' : 'text-gray-500'}`} />
                    ) : rule.type === 'whitelist' ? (
                      <Users className={`h-5 w-5 ${rule.isActive ? 'text-green-600' : 'text-gray-500'}`} />
                    ) : rule.type === 'geo_restrict' ? (
                      <Globe className={`h-5 w-5 ${rule.isActive ? 'text-green-600' : 'text-gray-500'}`} />
                    ) : (
                      <Lock className={`h-5 w-5 ${rule.isActive ? 'text-green-600' : 'text-gray-500'}`} />
                    )}
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
        </div>

        {/* Risk Events */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">风险事件</h2>
            <p className="text-gray-500 text-sm mt-1">最近的安全事件记录</p>
          </div>
          <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
            {events.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-gray-500">暂无风险事件</p>
              </div>
            ) : (
              events.map((event) => (
                <div key={event.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      event.severity === 'high' ? 'bg-red-100' :
                      event.severity === 'medium' ? 'bg-yellow-100' :
                      'bg-blue-100'
                    }`}>
                      {getSeverityIcon(event.severity)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-900">{event.title}</p>
                        <Badge className={getSeverityColor(event.severity)}>
                          {event.severity === 'high' ? '高风险' : event.severity === 'medium' ? '中风险' : '低风险'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(event.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
