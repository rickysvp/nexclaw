'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Settings, ChevronLeft, User, Bell, Shield, Globe,
  Moon, Sun, Smartphone, Mail, LogOut, CheckCircle,
  XCircle, AlertCircle, ChevronRight, Key, Eye, EyeOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function SettingsPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<'general' | 'security' | 'notifications' | 'preferences'>('general');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  
  // Settings state
  const [settings, setSettings] = useState({
    // General
    language: 'zh',
    timezone: 'Asia/Shanghai',
    currency: 'USDC',
    
    // Security
    twoFactor: false,
    biometric: false,
    autoLock: true,
    autoLockTime: '5',
    showBalance: true,
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    transactionAlerts: true,
    securityAlerts: true,
    marketingEmails: false,
    
    // Preferences
    darkMode: true,
    compactMode: false,
    animations: true,
  });

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('nexclaw_settings_v2');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  // Save settings
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
    if (newPassword !== confirmPassword) {
      showNotification('两次输入的密码不一致', 'error');
      return;
    }
    if (newPassword.length < 8) {
      showNotification('密码长度至少 8 位', 'error');
      return;
    }
    setShowChangePassword(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    showNotification('密码修改成功');
  };

  const handleLogout = () => {
    localStorage.removeItem('nexclaw_settings_v2');
    router.push('/');
  };

  const sections = [
    { id: 'general', label: '通用设置', icon: Settings },
    { id: 'security', label: '安全设置', icon: Shield },
    { id: 'notifications', label: '通知设置', icon: Bell },
    { id: 'preferences', label: '偏好设置', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
            notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {notification.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
          {notification.message}
        </motion.div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4 py-4">
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
                <Settings className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">设置</h1>
                <p className="text-xs text-gray-400">管理您的账户设置</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-4">
              <div className="space-y-2">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id as any)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <section.icon className="h-5 w-5" />
                    <span className="font-medium">{section.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </motion.button>
                ))}
              </div>

              <div className="border-t border-gray-700/50 mt-4 pt-4">
                <motion.button
                  onClick={() => setShowLogoutConfirm(true)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">退出登录</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
            >
              {/* General Settings */}
              {activeSection === 'general' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">通用设置</h2>
                    <p className="text-gray-400">管理您的基本账户信息</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">语言</p>
                          <p className="text-sm text-gray-400">选择界面显示语言</p>
                        </div>
                      </div>
                      <select
                        value={settings.language}
                        onChange={(e) => updateSetting('language', e.target.value)}
                        className="bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-2 text-white"
                      >
                        <option value="zh">简体中文</option>
                        <option value="en">English</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">时区</p>
                          <p className="text-sm text-gray-400">设置您的本地时区</p>
                        </div>
                      </div>
                      <select
                        value={settings.timezone}
                        onChange={(e) => updateSetting('timezone', e.target.value)}
                        className="bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-2 text-white"
                      >
                        <option value="Asia/Shanghai">北京时间 (UTC+8)</option>
                        <option value="Asia/Tokyo">东京时间 (UTC+9)</option>
                        <option value="America/New_York">纽约时间 (UTC-5)</option>
                        <option value="Europe/London">伦敦时间 (UTC+0)</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 font-bold">$</span>
                        <div>
                          <p className="font-medium text-white">默认货币</p>
                          <p className="text-sm text-gray-400">选择显示货币单位</p>
                        </div>
                      </div>
                      <select
                        value={settings.currency}
                        onChange={(e) => updateSetting('currency', e.target.value)}
                        className="bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-2 text-white"
                      >
                        <option value="USDC">USDC</option>
                        <option value="USD">USD</option>
                        <option value="CNY">CNY</option>
                        <option value="ETH">ETH</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeSection === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">安全设置</h2>
                    <p className="text-gray-400">保护您的账户安全</p>
                  </div>

                  <div className="space-y-4">
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

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">双重验证 (2FA)</p>
                          <p className="text-sm text-gray-400">启用 Google Authenticator</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.twoFactor}
                        onCheckedChange={(checked) => updateSetting('twoFactor', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">生物识别</p>
                          <p className="text-sm text-gray-400">使用指纹或面容识别</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.biometric}
                        onCheckedChange={(checked) => updateSetting('biometric', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Key className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">自动锁定</p>
                          <p className="text-sm text-gray-400">离开页面后自动锁定</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.autoLock}
                        onCheckedChange={(checked) => updateSetting('autoLock', checked)}
                      />
                    </div>

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

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Eye className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">显示余额</p>
                          <p className="text-sm text-gray-400">在钱包列表中显示余额</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.showBalance}
                        onCheckedChange={(checked) => updateSetting('showBalance', checked)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeSection === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">通知设置</h2>
                    <p className="text-gray-400">管理您的通知偏好</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">邮件通知</p>
                          <p className="text-sm text-gray-400">接收重要事件邮件</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => updateSetting('emailNotifications', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">推送通知</p>
                          <p className="text-sm text-gray-400">浏览器推送实时通知</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => updateSetting('pushNotifications', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">交易提醒</p>
                          <p className="text-sm text-gray-400">交易状态变更时通知</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.transactionAlerts}
                        onCheckedChange={(checked) => updateSetting('transactionAlerts', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">安全提醒</p>
                          <p className="text-sm text-gray-400">账户安全事件通知</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.securityAlerts}
                        onCheckedChange={(checked) => updateSetting('securityAlerts', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">营销邮件</p>
                          <p className="text-sm text-gray-400">接收产品更新和优惠信息</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.marketingEmails}
                        onCheckedChange={(checked) => updateSetting('marketingEmails', checked)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Preferences */}
              {activeSection === 'preferences' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">偏好设置</h2>
                    <p className="text-gray-400">自定义您的使用体验</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        {settings.darkMode ? (
                          <Moon className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Sun className="h-5 w-5 text-gray-400" />
                        )}
                        <div>
                          <p className="font-medium text-white">深色模式</p>
                          <p className="text-sm text-gray-400">使用深色主题</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.darkMode}
                        onCheckedChange={(checked) => updateSetting('darkMode', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <Settings className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">紧凑模式</p>
                          <p className="text-sm text-gray-400">减小间距显示更多内容</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.compactMode}
                        onCheckedChange={(checked) => updateSetting('compactMode', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ rotate: settings.animations ? 360 : 0 }}
                          transition={{ duration: 1 }}
                        >
                          <Settings className="h-5 w-5 text-gray-400" />
                        </motion.div>
                        <div>
                          <p className="font-medium text-white">动画效果</p>
                          <p className="text-sm text-gray-400">启用界面动画</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.animations}
                        onCheckedChange={(checked) => updateSetting('animations', checked)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Change Password Dialog */}
      <Dialog open={showChangePassword} onOpenChange={setShowChangePassword}>
        <DialogContent className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">修改密码</DialogTitle>
            <DialogDescription className="text-gray-400">
              请输入当前密码和新密码
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">当前密码</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
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
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="至少 8 位字符"
                className="bg-gray-900/80 border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">确认新密码</label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="再次输入新密码"
                className="bg-gray-900/80 border-gray-700 text-white"
              />
              {newPassword && confirmPassword && newPassword !== confirmPassword && (
                <p className="text-red-400 text-sm mt-2">密码不匹配</p>
              )}
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowChangePassword(false);
                  setCurrentPassword('');
                  setNewPassword('');
                  setConfirmPassword('');
                }}
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                取消
              </Button>
              <motion.button
                onClick={handleChangePassword}
                disabled={!currentPassword || !newPassword || !confirmPassword || newPassword !== confirmPassword}
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                确认修改
              </motion.button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Logout Confirm Dialog */}
      <Dialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <DialogContent className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">确认退出</DialogTitle>
            <DialogDescription className="text-gray-400 text-center">
              您确定要退出登录吗？
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
