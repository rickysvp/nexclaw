'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ArrowUpRight, Copy, Wallet, Plus, Shield, History, Send, Info, BarChart3, Settings, User as UserIcon, LogOut, ExternalLink, ChevronRight, Bell, Moon, Sun, Globe, Key, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet as WalletType, Transaction } from "@/types";
import { mockUser, mockWallets, mockTransactions } from "@/lib/mockData";
import { TransferDialog } from "@/components/wallet/TransferDialog";
import { DepositDialog } from "@/components/wallet/DepositDialog";

export default function DashboardPage() {
  const router = useRouter();
  const [wallets, setWallets] = useState<WalletType[]>(mockWallets);
  const [activeWallet, setActiveWallet] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('wallets');
  const [transferWallet, setTransferWallet] = useState<WalletType | null>(null);
  const [depositWallet, setDepositWallet] = useState<WalletType | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  
  // Settings state
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    language: 'zh',
    autoLock: true,
    showBalance: true,
  });

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('nexclaw_settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = (newSettings: typeof settings) => {
    setSettings(newSettings);
    localStorage.setItem('nexclaw_settings', JSON.stringify(newSettings));
  };

  const handleCreateWallet = () => {
    const newWallet: WalletType = {
      id: String(wallets.length + 1),
      address: `0x${Math.random().toString(16).substring(2, 42)}`,
      balance: "0 ETH",
      createdAt: new Date().toISOString(),
      uid: `agent_wallet_${String(wallets.length + 1).padStart(3, '0')}`,
      userId: mockUser.id,
    };
    setWallets([...wallets, newWallet]);
    setCopyMessage('钱包创建成功！');
    setTimeout(() => setCopyMessage(null), 2000);
  };

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopyMessage('地址已复制到剪贴板');
    setTimeout(() => setCopyMessage(null), 2000);
  };

  const handleCopyUID = (uid: string) => {
    navigator.clipboard.writeText(uid);
    setCopyMessage('UID已复制到剪贴板');
    setTimeout(() => setCopyMessage(null), 2000);
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('nexclaw_settings');
    // Redirect to home
    router.push('/');
  };

  const totalBalance = wallets.reduce((acc, w) => {
    const balance = parseFloat(w.balance.replace(' ETH', ''));
    return acc + balance;
  }, 0);

  const recentTransactions = mockTransactions.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Copy Success Message */}
      <AnimatePresence>
        {copyMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            {copyMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">NexClaw</h1>
                <p className="text-xs text-gray-400">Agent Wallet Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => setShowSettings(true)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Settings className="h-5 w-5" />
              </motion.button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                <UserIcon className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">总资产</span>
              <Wallet className="h-5 w-5 text-orange-400" />
            </div>
            <div className="text-2xl font-bold text-white">{totalBalance.toFixed(4)} ETH</div>
            <div className="text-sm text-green-400 mt-1">≈ ${(totalBalance * 3500).toFixed(2)}</div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">钱包数量</span>
              <BarChart3 className="h-5 w-5 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white">{wallets.length}</div>
            <div className="text-sm text-gray-400 mt-1">上限 15 个</div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">本月交易</span>
              <History className="h-5 w-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">{mockTransactions.length}</div>
            <div className="text-sm text-gray-400 mt-1">成功 100%</div>
          </motion.div>
        </div>

        {/* Main Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-800/50">
          {[
            { id: 'wallets', label: '钱包管理', icon: Wallet },
            { id: 'transactions', label: '交易历史', icon: History },
            { id: 'security', label: '安全规则', icon: Shield },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => tab.id === 'security' ? router.push('/dashboard/security') : setActiveTab(tab.id)}
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
          {activeTab === 'wallets' && (
            <motion.div
              key="wallets"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">我的钱包</h2>
                  <p className="text-gray-400 text-sm">管理和使用你的 Agent 钱包</p>
                </div>
                <motion.button 
                  onClick={handleCreateWallet}
                  disabled={wallets.length >= 15}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus className="h-4 w-4" />
                  新建钱包
                </motion.button>
              </div>

              {/* Wallet Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {wallets.map((wallet, index) => (
                  <motion.div
                    key={wallet.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/30 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">Agent Wallet #{wallet.id}</h3>
                        <p className="text-gray-400 text-sm">创建于 {new Date(wallet.createdAt).toLocaleDateString()}</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                        <span className="text-gray-400 text-sm">余额</span>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
                          {settings.showBalance ? wallet.balance : '****'}
                        </span>
                      </div>
                      
                      <div className="bg-gray-900/50 p-3 rounded-lg">
                        <div className="text-gray-400 text-sm mb-1">钱包地址</div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm text-white truncate max-w-[200px]">{wallet.address}</span>
                          <button 
                            onClick={() => handleCopyAddress(wallet.address)}
                            className="p-1.5 rounded hover:bg-gray-800 transition-colors"
                          >
                            <Copy className="h-4 w-4 text-orange-400" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900/50 p-3 rounded-lg">
                        <div className="text-gray-400 text-sm mb-1">Agent UID</div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm text-white">{wallet.uid}</span>
                          <button 
                            onClick={() => handleCopyUID(wallet.uid)}
                            className="p-1.5 rounded hover:bg-gray-800 transition-colors"
                          >
                            <Copy className="h-4 w-4 text-orange-400" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <motion.button 
                        onClick={() => setTransferWallet(wallet)}
                        className="flex-1 px-4 py-2.5 rounded-lg bg-gray-800 text-white font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Send className="h-4 w-4" />
                        转账
                      </motion.button>
                      <motion.button 
                        onClick={() => setDepositWallet(wallet)}
                        className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        充值
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.button>
                      <motion.button 
                        onClick={() => router.push(`/dashboard/wallet/${wallet.id}`)}
                        className="px-4 py-2.5 rounded-lg bg-orange-500/20 text-orange-400 font-medium flex items-center justify-center hover:bg-orange-500/30 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'transactions' && (
            <motion.div
              key="transactions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-white">交易历史</h2>
                      <p className="text-gray-400 text-sm">查看所有交易记录</p>
                    </div>
                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      导出记录
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {recentTransactions.map((tx) => (
                      <motion.div 
                        key={tx.id} 
                        className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-800/50 hover:border-orange-500/20 transition-colors"
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            tx.type === 'receive' ? 'bg-green-500/20' : 'bg-orange-500/20'
                          }`}>
                            {tx.type === 'receive' ? (
                              <ArrowUpRight className="h-5 w-5 text-green-400 rotate-180" />
                            ) : (
                              <Send className="h-5 w-5 text-orange-400" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-white">
                              {tx.type === 'receive' ? '接收' : '发送'} {tx.token}
                            </div>
                            <div className="text-sm text-gray-400">
                              {new Date(tx.timestamp).toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${tx.type === 'receive' ? 'text-green-400' : 'text-white'}`}>
                            {tx.type === 'receive' ? '+' : '-'}{tx.amount}
                          </div>
                          <Badge className={`mt-1 ${
                            tx.status === 'success' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {tx.status === 'success' ? '成功' : '处理中'}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Transfer Dialog */}
      <TransferDialog
        wallet={transferWallet || { id: '', address: '', balance: '0 ETH', createdAt: '', uid: '', userId: '' }}
        isOpen={!!transferWallet}
        onClose={() => setTransferWallet(null)}
        onSuccess={(result) => {
          console.log('Transfer success:', result);
          setTransferWallet(null);
          setCopyMessage('转账成功！');
          setTimeout(() => setCopyMessage(null), 2000);
        }}
      />

      {/* Deposit Dialog */}
      <DepositDialog
        wallet={depositWallet || { id: '', address: '', balance: '0 ETH', createdAt: '', uid: '', userId: '' }}
        isOpen={!!depositWallet}
        onClose={() => setDepositWallet(null)}
      />

      {/* Settings Modal */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              <Settings className="h-5 w-5" />
              设置
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              管理你的账户偏好设置
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-medium text-white">交易通知</div>
                  <div className="text-sm text-gray-400">接收交易状态更新</div>
                </div>
              </div>
              <Switch
                checked={settings.notifications}
                onCheckedChange={(checked) => saveSettings({ ...settings, notifications: checked })}
              />
            </div>
            
            {/* Show Balance */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {settings.showBalance ? <Sun className="h-5 w-5 text-gray-400" /> : <Moon className="h-5 w-5 text-gray-400" />}
                <div>
                  <div className="font-medium text-white">显示余额</div>
                  <div className="text-sm text-gray-400">在钱包列表中显示余额</div>
                </div>
              </div>
              <Switch
                checked={settings.showBalance}
                onCheckedChange={(checked) => saveSettings({ ...settings, showBalance: checked })}
              />
            </div>
            
            {/* Auto Lock */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-medium text-white">自动锁定</div>
                  <div className="text-sm text-gray-400">离开页面后自动锁定</div>
                </div>
              </div>
              <Switch
                checked={settings.autoLock}
                onCheckedChange={(checked) => saveSettings({ ...settings, autoLock: checked })}
              />
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <motion.button
                onClick={() => {
                  setShowSettings(false);
                  setShowLogoutConfirm(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="h-4 w-4" />
                退出登录
              </motion.button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Logout Confirmation */}
      <Dialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <DialogContent className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">确认退出</DialogTitle>
            <DialogDescription className="text-gray-400 text-center">
              你确定要退出登录吗？
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
