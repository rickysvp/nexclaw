'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Settings, User, Bell, Shield, Globe, Moon, Sun,
  Key, Eye, EyeOff, LogOut, CheckCircle, XCircle,
  ChevronRight, Smartphone, Mail, FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';

export default function SettingsSection() {
  const [activeTab, setActiveTab] = useState<'general' | 'security' | 'notifications' | 'preferences'>('general');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  
  const [settings, setSettings] = useState({
    language: 'zh',
    timezone: 'Asia/Shanghai',
    currency: 'USDC',
    twoFactor: false,
    biometric: false,
    autoLock: true,
    autoLockTime: '5',
    showBalance: true,
    emailNotifications: true,
    pushNotifications: true,
    transactionAlerts: true,
    securityAlerts: true,
    marketingEmails: false,
    darkMode: true,
    compactMode: false,
    animations: true,
  });

  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('nexclaw_settings_v2');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const updateSetting = (key: string, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('nexclaw_settings_v2', JSON.stringify(newSettings));
    showNotification('设置已保存');
  };

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleChangePassword = () => {
    if (passwordData.new !== passwordData.confirm) {
      showNotification('两次输入的密码不一致', 'error');
      return;
    }
    if (passwordData.new.length < 8) {
      showNotification('密码长度至少 8 位', 'error');
      return;
    }
    setShowChangePassword(false);
    setPasswordData({ current: '', new: '', confirm: '' });
    showNotification('密码修改成功');
  };

  const handleLogout = () => {
    localStorage.removeItem('nexclaw_settings_v2');
    window.location.href = '/';
  };

  const tabs = [
    { id: 'general', label: '通用设置', icon: Globe },
    { id: 'security', label: '安全设置', icon: Shield },
    { id: 'notifications', label: '通知设置', icon: Bell },
    { id: 'preferences', label: '偏好设置', icon: Settings },
  ];

  return (
    <div className="space-y-6">
      {/* Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
            notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {notification.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
          {notification.message}
        </motion.div>
      )}

      <div>
        <h1 className="text-2xl font-bold text-white">系统设置</h1>
        <p className="text-gray-400">管理您的账户和偏好设置</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800/50">
        {tabs.map((tab) => (
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
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
        {/* General Settings */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white mb-4">通用设置</h2>
            
            {[
              { key: 'language', label: '语言', options: [
                { value: 'zh', label: '简体中文' },
                { value: 'en', label: 'English' },
              ]},
              { key: 'timezone', label: '时区', options: [
                { value: 'Asia/Shanghai', label: '北京时间 (UTC+8)' },
                { value: 'Asia/Tokyo', label: '东京时间 (UTC+9)' },
                { value: 'America/New_York', label: '纽约时间 (UTC-5)' },
              ]},
              { key: 'currency', label: '默认货币', options: [
                { value: 'USDC', label: 'USDC' },
                { value: 'USD', label: 'USD' },
                { value: 'CNY', label: 'CNY' },
              ]},
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-4 border-b border-gray-700/30">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                  </div>
                </div>
                <select
                  value={settings[item.key as keyof typeof settings] as string}
                  onChange={(e) => updateSetting(item.key, e.target.value)}
                  className="bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-2 text-white"
                >
                  {item.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}

        {/* Security Settings */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white mb-4">安全设置</h2>
            
            <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium text-white">修改密码</p>
                  <p className="text-sm text-gray-400">定期更换密码提高安全性</p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setShowChangePassword(true)}
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                修改
              </Button>
            </div>

            {[
              { key: 'twoFactor', label: '双重验证 (2FA)', desc: '启用 Google Authenticator', icon: Shield },
              { key: 'biometric', label: '生物识别', desc: '使用指纹或面容识别', icon: Smartphone },
              { key: 'autoLock', label: '自动锁定', desc: '离开页面后自动锁定', icon: Key },
              { key: 'showBalance', label: '显示余额', desc: '在钱包列表中显示余额', icon: Eye },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-4 border-b border-gray-700/30">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <Switch
                  checked={settings[item.key as keyof typeof settings] as boolean}
                  onCheckedChange={(checked) => updateSetting(item.key, checked)}
                />
              </div>
            ))}

            {settings.autoLock && (
              <div className="flex items-center justify-between py-4 border-b border-gray-700/30 pl-8">
                <div>
                  <p className="font-medium text-white">自动锁定时间</p>
                  <p className="text-sm text-gray-400">无操作后自动锁定</p>
                </div>
                <select
                  value={settings.autoLockTime}
                  onChange={(e) => updateSetting('autoLockTime', e.target.value)}
                  className="bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-2 text-white"
                >
                  <option value="1">1 分钟</option>
                  <option value="5">5 分钟</option>
                  <option value="10">10 分钟</option>
                  <option value="30">30 分钟</option>
                </select>
              </div>
            )}

            <div className="pt-4">
              <motion.button
                onClick={() => setShowLogoutConfirm(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="h-5 w-5" />
                退出登录
              </motion.button>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white mb-4">通知设置</h2>
            
            {[
              { key: 'emailNotifications', label: '邮件通知', desc: '接收重要事件邮件', icon: Mail },
              { key: 'pushNotifications', label: '推送通知', desc: '浏览器推送实时通知', icon: Bell },
              { key: 'transactionAlerts', label: '交易提醒', desc: '交易状态变更时通知', icon: FileText },
              { key: 'securityAlerts', label: '安全提醒', desc: '账户安全事件通知', icon: Shield },
              { key: 'marketingEmails', label: '营销邮件', desc: '接收产品更新和优惠信息', icon: Mail },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-4 border-b border-gray-700/30">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <Switch
                  checked={settings[item.key as keyof typeof settings] as boolean}
                  onCheckedChange={(checked) => updateSetting(item.key, checked)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Preferences */}
        {activeTab === 'preferences' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white mb-4">偏好设置</h2>
            
            {[
              { key: 'darkMode', label: '深色模式', desc: '使用深色主题', icon: settings.darkMode ? Moon : Sun },
              { key: 'compactMode', label: '紧凑模式', desc: '减小间距显示更多内容', icon: Settings },
              { key: 'animations', label: '动画效果', desc: '启用界面动画', icon: Settings },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-4 border-b border-gray-700/30">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <Switch
                  checked={settings[item.key as keyof typeof settings] as boolean}
                  onCheckedChange={(checked) => updateSetting(item.key, checked)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Change Password Dialog */}
      {showChangePassword && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-md"
          >
            <h3 className="text-xl font-bold text-white mb-4">修改密码</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">当前密码</label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordData.current}
                    onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
                    placeholder="输入当前密码"
                    className="bg-gray-900/80 border-gray-700 text-white pr-10"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">新密码</label>
                <Input
                  type="password"
                  value={passwordData.new}
                  onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
                  placeholder="至少 8 位字符"
                  className="bg-gray-900/80 border-gray-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">确认新密码</label>
                <Input
                  type="password"
                  value={passwordData.confirm}
                  onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                  placeholder="再次输入新密码"
                  className="bg-gray-900/80 border-gray-700 text-white"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowChangePassword(false)}
                  className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  取消
                </Button>
                <motion.button
                  onClick={handleChangePassword}
                  disabled={!passwordData.current || !passwordData.new || !passwordData.confirm}
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  确认修改
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Logout Confirm Dialog */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-sm"
          >
            <h3 className="text-xl font-bold text-white text-center mb-2">确认退出</h3>
            <p className="text-gray-400 text-center mb-6">您确定要退出登录吗？</p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                取消
              </Button>
              <motion.button
                onClick={handleLogout}
                className="flex-1 px-4 py-2 rounded-lg bg-red-500 text-white font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                确认退出
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
