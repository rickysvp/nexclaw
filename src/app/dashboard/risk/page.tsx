'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Shield, AlertTriangle, CheckCircle, XCircle, ChevronLeft,
  Settings, User, Bell, Mail, FileText, Lock, Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { mockRiskRules, mockRiskLogs, mockNotificationSettings } from '@/lib/mockData';
import { RiskRule, RiskLog } from '@/types';

export default function RiskPage() {
  const router = useRouter();
  const [rules, setRules] = useState<RiskRule[]>(mockRiskRules);
  const [logs] = useState<RiskLog[]>(mockRiskLogs);
  const [activeTab, setActiveTab] = useState<'rules' | 'logs' | 'notifications'>('rules');
  const [settings, setSettings] = useState(mockNotificationSettings);

  const toggleRule = (ruleId: string) => {
    setRules(rules.map(rule => 
      rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
    ));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 text-red-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'blocked': return <XCircle className="h-4 w-4 text-red-400" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'passed': return <CheckCircle className="h-4 w-4 text-green-400" />;
      default: return null;
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
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">风控安全</h1>
                  <p className="text-xs text-gray-400">安全规则与风险监控</p>
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
        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-800/50">
          {[
            { id: 'rules', label: '风控规则', icon: Shield },
            { id: 'logs', label: '风控日志', icon: FileText },
            { id: 'notifications', label: '通知设置', icon: Bell },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab.id
                  ? 'text-white border-orange-500'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
              whileHover={{ y: -2 }}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'rules' && (
            <motion.div
              key="rules"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {rules.map((rule) => (
                <motion.div
                  key={rule.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${getSeverityColor(rule.severity)}`}>
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{rule.name}</h3>
                        <Badge className={getSeverityColor(rule.severity)}>
                          {rule.severity === 'high' ? '高' : rule.severity === 'medium' ? '中' : '低'}优先级
                        </Badge>
                      </div>
                    </div>
                    <Switch
                      checked={rule.enabled}
                      onCheckedChange={() => toggleRule(rule.id)}
                    />
                  </div>
                  <p className="text-sm text-gray-400">
                    {rule.type === 'amount_limit' && `限额: ${rule.config.maxAmount} ${rule.config.unit}`}
                    {rule.type === 'frequency_limit' && `频率: ${rule.config.maxCount} 次/${rule.config.window}`}
                    {rule.type === 'address_check' && '检查目标地址是否在黑名单中'}
                    {rule.type === 'behavior_check' && `敏感度: ${rule.config.sensitivity}`}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'logs' && (
            <motion.div
              key="logs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900/50 border-b border-gray-700/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">时间</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">规则</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">严重程度</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">原因</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">状态</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    {logs.map((log) => (
                      <tr key={log.id} className="hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-400">
                          {new Date(log.timestamp).toLocaleString('zh-CN')}
                        </td>
                        <td className="px-6 py-4 text-white">{log.ruleName}</td>
                        <td className="px-6 py-4">
                          <Badge className={getSeverityColor(log.severity)}>
                            {log.severity === 'high' ? '高' : log.severity === 'medium' ? '中' : '低'}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-gray-400">{log.reason}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(log.status)}
                            <span className={
                              log.status === 'blocked' ? 'text-red-400' :
                              log.status === 'warning' ? 'text-yellow-400' : 'text-green-400'
                            }>
                              {log.status === 'blocked' ? '已拦截' : log.status === 'warning' ? '警告' : '已通过'}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div
              key="notifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-white">邮件通知</p>
                      <p className="text-sm text-gray-400">接收重要安全事件的邮件提醒</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.email}
                    onCheckedChange={(checked) => setSettings({ ...settings, email: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-white">推送通知</p>
                      <p className="text-sm text-gray-400">浏览器推送实时通知</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.push}
                    onCheckedChange={(checked) => setSettings({ ...settings, push: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-white">交易提醒</p>
                      <p className="text-sm text-gray-400">交易状态变更时通知</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.transactionAlerts}
                    onCheckedChange={(checked) => setSettings({ ...settings, transactionAlerts: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-white">风控提醒</p>
                      <p className="text-sm text-gray-400">风控拦截时通知</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.riskAlerts}
                    onCheckedChange={(checked) => setSettings({ ...settings, riskAlerts: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-white">审批提醒</p>
                      <p className="text-sm text-gray-400">有待审批交易时通知</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.approvalAlerts}
                    onCheckedChange={(checked) => setSettings({ ...settings, approvalAlerts: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-white">日报</p>
                      <p className="text-sm text-gray-400">每日发送交易汇总报告</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.dailyReport}
                    onCheckedChange={(checked) => setSettings({ ...settings, dailyReport: checked })}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
