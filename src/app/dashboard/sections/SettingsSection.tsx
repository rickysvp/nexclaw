'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings, User, Bell, Shield, Globe, Moon, Sun, X,
  Key, Eye, EyeOff, LogOut, CheckCircle, XCircle, Save,
  ChevronRight, Smartphone, Mail, FileText, Trash2, AlertTriangle,
  RefreshCw, Download, Upload, Database, Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/lib/auth-context';

// Settings types
interface UserSettings {
  language: string;
  timezone: string;
  currency: string;
  twoFactor: boolean;
  biometric: boolean;
  autoLock: boolean;
  autoLockTime: string;
  showBalance: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
  transactionAlerts: boolean;
  securityAlerts: boolean;
  marketingEmails: boolean;
  darkMode: boolean;
  compactMode: boolean;
  animations: boolean;
}

const defaultSettings: UserSettings = {
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
};

const STORAGE_KEY = 'agentswallet_settings_v1';

export default function SettingsSection() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'general' | 'security' | 'notifications' | 'preferences' | 'data'>('general');
  const [isLoading, setIsLoading] = useState(false);
  
  // Dialog states
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showClearDataConfirm, setShowClearDataConfirm] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  
  // Settings state
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [hasChanges, setHasChanges] = useState(false);
  
  // Password state
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings({ ...defaultSettings, ...parsed });
      } catch (e) {
        console.error('Failed to parse settings:', e);
      }
    }
  }, []);

  // Track changes
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setHasChanges(JSON.stringify(settings) !== JSON.stringify({ ...defaultSettings, ...parsed }));
    } else {
      setHasChanges(JSON.stringify(settings) !== JSON.stringify(defaultSettings));
    }
  }, [settings]);

  const showNotification = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  }, []);

  const updateSetting = useCallback(<K extends keyof UserSettings>(key: K, value: UserSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const saveSettings = useCallback(() => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
      setIsLoading(false);
      setHasChanges(false);
      showNotification('设置已保存');
    }, 500);
  }, [settings, showNotification]);

  const resetSettings = useCallback(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setSettings({ ...defaultSettings, ...JSON.parse(saved) });
    } else {
      setSettings(defaultSettings);
    }
    showNotification('设置已重置');
  }, [showNotification]);

  const exportSettings = useCallback(() => {
    const dataStr = JSON.stringify(settings, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `agentswallet-settings-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showNotification('设置已导出');
  }, [settings, showNotification]);

  const importSettings = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        setSettings({ ...defaultSettings, ...imported });
        showNotification('设置已导入，请保存');
      } catch (err) {
        showNotification('导入失败，文件格式错误', 'error');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  }, [showNotification]);

  const clearAllData = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('agentswallet_activities');
    setSettings(defaultSettings);
    setShowClearDataConfirm(false);
    showNotification('所有数据已清除');
  }, [showNotification]);

  const handleChangePassword = useCallback(() => {
    if (passwordData.new !== passwordData.confirm) {
      showNotification('两次输入的密码不一致', 'error');
      return;
    }
    if (passwordData.new.length < 8) {
      showNotification('密码长度至少 8 位', 'error');
      return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(passwordData.new)) {
      showNotification('密码需包含大小写字母和数字', 'error');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowChangePassword(false);
      setPasswordData({ current: '', new: '', confirm: '' });
      showNotification('密码修改成功');
    }, 1000);
  }, [passwordData, showNotification]);

  const handleLogout = useCallback(() => {
    logout();
    window.location.href = '/login';
  }, [logout]);

  const tabs = [
    { id: 'general', label: '通用设置', icon: Globe },
    { id: 'security', label: '安全设置', icon: Shield },
    { id: 'notifications', label: '通知设置', icon: Bell },
    { id: 'preferences', label: '偏好设置', icon: Settings },
    { id: 'data', label: '数据管理', icon: Database },
  ];

  return (
    <div className="space-y-6">
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '50%' }}
            animate={{ opacity: 1, y: 0, x: '50%' }}
            exit={{ opacity: 0, y: -20, x: '50%' }}
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
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">系统设置</h1>
          <p className="text-gray-400">管理您的账户和偏好设置</p>
        </div>
        {hasChanges && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-2"
          >
            <Button
              variant="outline"
              onClick={resetSettings}
              className="border-gray-700 text-gray-400"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              重置
            </Button>
            <Button
              onClick={saveSettings}
              disabled={isLoading}
              className="bg-gradient-to-r from-orange-500 to-purple-600"
            >
              {isLoading ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              保存更改
            </Button>
          </motion.div>
        )}
      </div>

      {/* User Info Card */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
            <User className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">{user?.name || '用户'}</h3>
            <p className="text-gray-400">{user?.email || 'user@example.com'}</p>
            <div className="flex gap-2 mt-2">
              <Badge className="bg-green-500/20 text-green-400">已验证</Badge>
              <Badge className="bg-purple-500/20 text-purple-400">NexClaw 会员</Badge>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowLogoutConfirm(true)}
            className="border-red-500/30 text-red-400 hover:bg-red-500/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            退出
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800/50 overflow-x-auto">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-all border-b-2 whitespace-nowrap ${
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
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
        >
          {/* General Settings */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-white mb-4">通用设置</h2>
              
              {[
                { key: 'language', label: '语言', options: [
                  { value: 'zh', label: '简体中文' },
                  { value: 'en', label: 'English' },
                  { value: 'ja', label: '日本語' },
                ]},
                { key: 'timezone', label: '时区', options: [
                  { value: 'Asia/Shanghai', label: '北京时间 (UTC+8)' },
                  { value: 'Asia/Tokyo', label: '东京时间 (UTC+9)' },
                  { value: 'America/New_York', label: '纽约时间 (UTC-5)' },
                  { value: 'Europe/London', label: '伦敦时间 (UTC+0)' },
                ]},
                { key: 'currency', label: '默认货币', options: [
                  { value: 'USDC', label: 'USDC' },
                  { value: 'USDT', label: 'USDT' },
                  { value: 'USD', label: 'USD' },
                  { value: 'CNY', label: 'CNY' },
                  { value: 'ETH', label: 'ETH' },
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
                    value={settings[item.key as keyof UserSettings] as string}
                    onChange={(e) => updateSetting(item.key as keyof UserSettings, e.target.value)}
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
                { key: 'autoLock', label: '自动锁定', desc: '离开页面后自动锁定', icon: Lock },
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
                    checked={settings[item.key as keyof UserSettings] as boolean}
                    onCheckedChange={(checked) => updateSetting(item.key as keyof UserSettings, checked)}
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
                    <option value="60">1 小时</option>
                  </select>
                </div>
              )}
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
                    checked={settings[item.key as keyof UserSettings] as boolean}
                    onCheckedChange={(checked) => updateSetting(item.key as keyof UserSettings, checked)}
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
                    checked={settings[item.key as keyof UserSettings] as boolean}
                    onCheckedChange={(checked) => updateSetting(item.key as keyof UserSettings, checked)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Data Management */}
          {activeTab === 'data' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-white mb-4">数据管理</h2>
              
              <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                <div className="flex items-center gap-3">
                  <Download className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-white">导出设置</p>
                    <p className="text-sm text-gray-400">将设置导出为 JSON 文件</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={exportSettings}
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  <Download className="h-4 w-4 mr-2" />
                  导出
                </Button>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                <div className="flex items-center gap-3">
                  <Upload className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-white">导入设置</p>
                    <p className="text-sm text-gray-400">从 JSON 文件导入设置</p>
                  </div>
                </div>
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept=".json"
                    onChange={importSettings}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <span>
                      <Upload className="h-4 w-4 mr-2" />
                      导入
                    </span>
                  </Button>
                </label>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                <div className="flex items-center gap-3">
                  <Trash2 className="h-5 w-5 text-red-400" />
                  <div>
                    <p className="font-medium text-white">清除所有数据</p>
                    <p className="text-sm text-gray-400">删除所有本地存储的数据</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowClearDataConfirm(true)}
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  清除
                </Button>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-4 mt-6">
                <h3 className="text-sm font-medium text-white mb-2">存储信息</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>设置存储位置: LocalStorage</p>
                  <p>最后保存: {localStorage.getItem(STORAGE_KEY) ? '已保存' : '未保存'}</p>
                  <p>数据大小: ~{Math.round(JSON.stringify(settings).length / 1024)} KB</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Change Password Dialog */}
      <AnimatePresence>
        {showChangePassword && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowChangePassword(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-md"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">修改密码</h3>
                  <button
                    onClick={() => setShowChangePassword(false)}
                    className="p-2 rounded-lg hover:bg-gray-800 text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">当前密码</label>
                  <div className="relative">
                    <Input
                      type={showPassword.current ? 'text' : 'password'}
                      value={passwordData.current}
                      onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
                      placeholder="输入当前密码"
                      className="bg-gray-800/50 border-gray-700 text-white pr-10"
                    />
                    <button
                      onClick={() => setShowPassword({ ...showPassword, current: !showPassword.current })}
                      className="absolute right-3 top-1/2 -trangray-y-1/2 text-gray-500 hover:text-white"
                    >
                      {showPassword.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">新密码</label>
                  <div className="relative">
                    <Input
                      type={showPassword.new ? 'text' : 'password'}
                      value={passwordData.new}
                      onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
                      placeholder="至少 8 位，包含大小写字母和数字"
                      className="bg-gray-800/50 border-gray-700 text-white pr-10"
                    />
                    <button
                      onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}
                      className="absolute right-3 top-1/2 -trangray-y-1/2 text-gray-500 hover:text-white"
                    >
                      {showPassword.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">确认新密码</label>
                  <div className="relative">
                    <Input
                      type={showPassword.confirm ? 'text' : 'password'}
                      value={passwordData.confirm}
                      onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                      placeholder="再次输入新密码"
                      className="bg-gray-800/50 border-gray-700 text-white pr-10"
                    />
                    <button
                      onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                      className="absolute right-3 top-1/2 -trangray-y-1/2 text-gray-500 hover:text-white"
                    >
                      {showPassword.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-800 flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowChangePassword(false)}
                  className="flex-1 border-gray-700"
                >
                  取消
                </Button>
                <Button
                  onClick={handleChangePassword}
                  disabled={!passwordData.current || !passwordData.new || !passwordData.confirm || isLoading}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 disabled:opacity-50"
                >
                  {isLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : '确认修改'}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logout Confirm Dialog */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowLogoutConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-sm p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <LogOut className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">确认退出</h3>
                  <p className="text-sm text-gray-400">您确定要退出登录吗？</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowLogoutConfirm(false)}
                  className="flex-1 border-gray-700"
                >
                  取消
                </Button>
                <Button
                  onClick={handleLogout}
                  className="flex-1 bg-red-500 hover:bg-red-600"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  确认退出
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clear Data Confirm Dialog */}
      <AnimatePresence>
        {showClearDataConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowClearDataConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-md p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">清除所有数据</h3>
                  <p className="text-sm text-gray-400">此操作无法撤销</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                这将删除所有本地存储的设置和数据，包括钱包信息、交易记录等。此操作无法恢复。
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowClearDataConfirm(false)}
                  className="flex-1 border-gray-700"
                >
                  取消
                </Button>
                <Button
                  onClick={clearAllData}
                  className="flex-1 bg-red-500 hover:bg-red-600"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  确认清除
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
