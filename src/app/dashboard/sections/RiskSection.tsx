'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield, AlertTriangle, CheckCircle, FileText, Bell
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { mockRiskRules, mockRiskLogs } from '@/lib/mockData';

export default function RiskSection() {
  const [activeTab, setActiveTab] = useState<'rules' | 'logs' | 'notifications'>('rules');
  const [rules, setRules] = useState(mockRiskRules);

  const toggleRule = (ruleId: string) => {
    setRules(rules.map(rule => 
      rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">风控安全</h1>
          <p className="text-gray-400">安全规则与风险监控</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800/50">
        {[
          { id: 'rules', label: '风控规则', icon: Shield },
          { id: 'logs', label: '风控日志', icon: FileText },
          { id: 'notifications', label: '通知设置', icon: Bell },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-all border-b-2 ${
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
      {activeTab === 'rules' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rules.map((rule) => (
            <motion.div
              key={rule.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    rule.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                    rule.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{rule.name}</h3>
                    <Badge className={
                      rule.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      rule.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }>
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
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
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
              {mockRiskLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {new Date(log.timestamp).toLocaleString('zh-CN')}
                  </td>
                  <td className="px-6 py-4 text-white">{log.ruleName}</td>
                  <td className="px-6 py-4">
                    <Badge className={
                      log.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      log.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }>
                      {log.severity === 'high' ? '高' : log.severity === 'medium' ? '中' : '低'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{log.reason}</td>
                  <td className="px-6 py-4">
                    <span className={
                      log.status === 'blocked' ? 'text-red-400' :
                      log.status === 'warning' ? 'text-yellow-400' : 'text-green-400'
                    }>
                      {log.status === 'blocked' ? '已拦截' : log.status === 'warning' ? '警告' : '已通过'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
          <div className="space-y-6">
            {[
              { key: 'emailNotifications', label: '邮件通知', desc: '接收重要安全事件的邮件提醒' },
              { key: 'pushNotifications', label: '推送通知', desc: '浏览器推送实时通知' },
              { key: 'transactionAlerts', label: '交易提醒', desc: '交易状态变更时通知' },
              { key: 'riskAlerts', label: '风控提醒', desc: '风控拦截时通知' },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-4 border-b border-gray-700/30">
                <div>
                  <p className="font-medium text-white">{item.label}</p>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
                <Switch defaultChecked />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
