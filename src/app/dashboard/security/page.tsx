'use client';

import { Shield, Lock, Key, AlertTriangle, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SecurityPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: false,
    biometric: false,
    autoLock: true,
    loginAlerts: true,
    transactionConfirm: true,
  });

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">安全管理</h1>
            <p className="text-gray-500 mt-1">配置账户安全设置</p>
          </div>
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
        </div>

        {/* Security Score */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium mb-1">安全评分</h2>
              <p className="text-orange-100 text-sm">您的账户安全状况良好</p>
            </div>
            <div className="text-right">
              <p className="text-5xl font-bold">85</p>
              <p className="text-orange-100">/ 100</p>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">安全设置</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { key: 'twoFactor', label: '双重验证 (2FA)', desc: '启用 Google Authenticator', icon: Shield },
              { key: 'biometric', label: '生物识别', desc: '使用指纹或面容识别', icon: Lock },
              { key: 'autoLock', label: '自动锁定', desc: '离开页面后自动锁定', icon: Key },
              { key: 'loginAlerts', label: '登录提醒', desc: '新设备登录时通知', icon: AlertTriangle },
              { key: 'transactionConfirm', label: '交易确认', desc: '每笔交易需要确认', icon: CheckCircle },
            ].map((item) => (
              <div key={item.key} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
                <Switch
                  checked={securitySettings[item.key as keyof typeof securitySettings]}
                  onCheckedChange={(checked) => 
                    setSecuritySettings(prev => ({ ...prev, [item.key]: checked }))
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
