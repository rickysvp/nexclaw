'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Copy, Wallet, Plus, Shield, Clock, History, Send, Info, ChevronDown, ChevronUp, Activity, Sparkles, Lock, Eye, EyeOff, BarChart3, Home, Settings, User as UserIcon, LogOut, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wallet as WalletType, Transaction } from "@/types";
import { mockUser, mockWallets, mockTransactions } from "@/lib/mockData";
import { TransferDialog } from "@/components/wallet/TransferDialog";
import { DepositDialog } from "@/components/wallet/DepositDialog";

export default function DashboardPage() {
  const router = useRouter();
  const user = mockUser;
  const [wallets, setWallets] = useState<WalletType[]>(mockWallets);
  const [copied, setCopied] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [activeWallet, setActiveWallet] = useState<string | null>(null);
  const [showTermsModal, setShowTermsModal] = useState(true);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('wallets');
  const [transferWallet, setTransferWallet] = useState<WalletType | null>(null);
  const [depositWallet, setDepositWallet] = useState<WalletType | null>(null);

  const handleCreateWallet = () => {
    const newWallet: WalletType = {
      id: String(wallets.length + 1),
      address: `0x${Math.random().toString(16).substring(2, 42)}`,
      balance: "0 ETH",
      createdAt: new Date().toISOString(),
      uid: `agent_wallet_${String(wallets.length + 1).padStart(3, '0')}`,
      userId: user.id,
    };
    setWallets([...wallets, newWallet]);
    console.log("创建新钱包:", newWallet);
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

  return (
    <div className="min-h-screen relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Terms and Privacy Policy Modal */}
      <AnimatePresence>
        {showTermsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="w-full max-w-md bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 rounded-2xl p-6 shadow-2xl backdrop-blur-md"
            >
              <h3 className="text-xl font-bold mb-4 text-white">安全管理您的 Agent 钱包</h3>
              <p className="text-gray-400 mb-6">
                登录即表示您同意我们的
                <a href="/terms" className="text-orange-400 hover:underline mx-1" target="_blank">服务条款</a>
                和
                <a href="/privacy" className="text-orange-400 hover:underline mx-1" target="_blank">隐私政策</a>
              </p>
              <motion.button
                onClick={() => setShowTermsModal(false)}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-medium shadow-lg shadow-orange-500/20"
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255, 165, 0, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                我同意
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Copy Success Message */}
      <AnimatePresence>
        {copyMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            {copyMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div 
            className="lg:w-1/4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 shadow-xl shadow-orange-500/5 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <UserIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{user.firstName || user.emailAddresses?.[0]?.emailAddress}</h3>
                  <p className="text-gray-400 text-sm">{user.emailAddresses?.[0]?.emailAddress}</p>
                </div>
              </div>
              <div className="space-y-2">
                <motion.button 
                  onClick={() => setActiveTab('wallets')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'wallets' ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}
                  whileHover={{ scale: 1.02, backgroundColor: activeTab === 'wallets' ? 'rgba(255, 165, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)' }}
                >
                  <BarChart3 className="h-5 w-5" />
                  仪表盘
                </motion.button>
                <motion.button 
                  onClick={() => setActiveTab('wallets')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'wallets' ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}
                  whileHover={{ scale: 1.02, backgroundColor: activeTab === 'wallets' ? 'rgba(255, 165, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)' }}
                >
                  <Wallet className="h-5 w-5" />
                  钱包管理
                </motion.button>
                <motion.button 
                  onClick={() => router.push('/dashboard/security')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 font-medium hover:bg-gray-800/50 hover:text-white transition-colors"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <Shield className="h-5 w-5" />
                  安全规则
                </motion.button>
                <motion.button 
                  onClick={() => setActiveTab('transactions')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'transactions' ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}
                  whileHover={{ scale: 1.02, backgroundColor: activeTab === 'transactions' ? 'rgba(255, 165, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)' }}
                >
                  <History className="h-5 w-5" />
                  交易历史
                </motion.button>
                <motion.button 
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 font-medium hover:bg-gray-800/50 hover:text-white transition-colors"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <Settings className="h-5 w-5" />
                  设置
                </motion.button>
                <div className="border-t border-gray-700/50 my-4"></div>
                <motion.button 
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 font-medium hover:bg-red-500/10 transition-colors"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                >
                  <LogOut className="h-5 w-5" />
                  退出登录
                </motion.button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 shadow-xl shadow-orange-500/5">
              <h3 className="text-lg font-bold mb-4 text-white">使用统计</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">已创建钱包</span>
                    <span className="text-white font-medium">{wallets.length}/15</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-orange-500 to-purple-600 h-2.5 rounded-full" style={{ width: `${(wallets.length / 15) * 100}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">本月交易</span>
                    <span className="text-white font-medium">{mockTransactions.length}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-orange-500 to-purple-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">安全评分</span>
                    <span className="text-white font-medium">95/100</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="lg:w-3/4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Tabs */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
              <motion.button 
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'wallets' ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
                onClick={() => setActiveTab('wallets')}
                whileHover={{ scale: 1.02 }}
              >
                钱包管理
              </motion.button>
              <motion.button 
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'transactions' ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
                onClick={() => setActiveTab('transactions')}
                whileHover={{ scale: 1.02 }}
              >
                交易历史
              </motion.button>
              <motion.button 
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'test' ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
                onClick={() => setActiveTab('test')}
                whileHover={{ scale: 1.02 }}
              >
                小龙虾测试
              </motion.button>
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
                  {/* Wallet Creation */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                      <h1 className="text-3xl font-bold mb-2 text-white">我的 Agent Wallets</h1>
                      <p className="text-gray-400">管理和监控你的 Agent 钱包</p>
                    </div>
                    <motion.button 
                      onClick={handleCreateWallet}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-orange-500/20"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 165, 0, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Plus className="h-4 w-4" />
                      新建钱包
                    </motion.button>
                  </div>

                  {/* Wallet List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence>
                      {wallets.map((wallet) => (
                        <motion.div
                          key={wallet.id}
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -50, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div 
                            className={`backdrop-blur-md rounded-2xl overflow-hidden border shadow-lg transition-all duration-300 ${activeWallet === wallet.id ? 'border-orange-500/50 shadow-orange-500/20' : 'border-gray-700/50 shadow-gray-900/50'}`}
                            style={{ 
                              background: activeWallet === wallet.id ? 'linear-gradient(135deg, rgba(30, 30, 40, 0.8), rgba(20, 20, 30, 0.9))' : 'rgba(30, 30, 40, 0.6)'
                            }}
                            onClick={() => setActiveWallet(activeWallet === wallet.id ? null : wallet.id)}
                          >
                            <div className="p-6">
                              <div className="flex justify-between items-start mb-4">
                                <div>
                                  <h3 className="text-xl font-bold mb-1 text-white">Agent Wallet #{wallet.id}</h3>
                                  <p className="text-gray-400 text-sm">创建于 {new Date(wallet.createdAt).toLocaleDateString()}</p>
                                </div>
                                <Badge className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 border border-orange-500/30 px-3 py-1">Active</Badge>
                              </div>
                              
                              <div className="space-y-4 mb-6">
                                <div>
                                  <div className="text-sm text-gray-400 mb-1">钱包地址</div>
                                  <div className="flex items-center justify-between bg-gray-900/80 p-3 rounded-lg border border-gray-700/50">
                                    <span className="font-mono text-sm truncate text-white">{wallet.address}</span>
                                    <motion.button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopyAddress(wallet.address);
                                      }}
                                      className="p-2 rounded-lg hover:bg-gray-800/80 transition-colors"
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                      <Copy className="h-4 w-4 text-orange-400" />
                                    </motion.button>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm text-gray-400 mb-1">余额</div>
                                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">{wallet.balance}</div>
                                </div>
                                <div>
                                  <div className="text-sm text-gray-400 mb-1">Agent UID</div>
                                  <div className="flex items-center justify-between bg-gray-900/80 p-3 rounded-lg border border-gray-700/50">
                                    <span className="font-mono text-sm truncate text-white">{wallet.uid}</span>
                                    <motion.button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopyUID(wallet.uid);
                                      }}
                                      className="p-2 rounded-lg hover:bg-gray-800/80 transition-colors"
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                      <Copy className="h-4 w-4 text-orange-400" />
                                    </motion.button>
                                  </div>
                                </div>
                              </div>

                              <AnimatePresence>
                                {activeWallet === wallet.id && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-t border-gray-700/50 pt-4"
                                  >
                                    <div className="flex gap-3 mb-3">
                                      <motion.button 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setTransferWallet(wallet);
                                        }}
                                        className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium flex items-center justify-center gap-2 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                      >
                                        <Send className="h-4 w-4" />
                                        转账
                                      </motion.button>
                                      <motion.button 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setDepositWallet(wallet);
                                        }}
                                        className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                                        whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)' }}
                                        whileTap={{ scale: 0.98 }}
                                      >
                                        充值
                                        <ArrowUpRight className="h-4 w-4" />
                                      </motion.button>
                                    </div>
                                    <motion.button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        router.push(`/dashboard/wallet/${wallet.id}`);
                                      }}
                                      className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-white font-medium flex items-center justify-center gap-2 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300"
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      查看详情
                                      <ExternalLink className="h-4 w-4" />
                                    </motion.button>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
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
                  {/* Transaction History */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl shadow-lg shadow-orange-500/5 overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h3 className="text-xl font-bold mb-1 text-white">交易历史</h3>
                          <p className="text-gray-400 text-sm">最近的交易记录</p>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700/50 hover:border-gray-600/50">
                          查看全部
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {mockTransactions.map((tx) => (
                          <motion.div 
                            key={tx.id} 
                            className="flex justify-between items-center p-4 bg-gray-900/60 rounded-lg border border-gray-700/50"
                            whileHover={{ scale: 1.01, borderColor: 'rgba(255, 165, 0, 0.3)' }}
                          >
                            <div>
                              <div className="font-medium text-white">
                                {tx.type === "buy" ? (
                                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">购买 {tx.token}</span>
                                ) : (
                                  <span>转账到 {tx.to?.substring(0, 6) || '未知地址'}...</span>
                                )}
                              </div>
                              <div className="text-sm text-gray-400">
                                {new Date(tx.timestamp).toLocaleString()}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">{tx.amount}</div>
                              <Badge className={`${tx.status === "success" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"} mt-1`}>
                                {tx.status === "success" ? "成功" : "处理中"}
                              </Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'test' && (
                <motion.div
                  key="test"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* iframe Test Area */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl shadow-lg shadow-orange-500/5 overflow-hidden">
                    <div className="p-6">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-1 text-white">小龙虾调用测试</h3>
                        <p className="text-gray-400 text-sm">模拟小龙虾 Agent 调用钱包功能</p>
                      </div>
                      
                      <Dialog open={showIframe} onOpenChange={setShowIframe}>
                        <DialogTrigger asChild>
                          <motion.button 
                            className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-medium flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20"
                            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255, 165, 0, 0.4)' }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="text-xl">🦞</span>
                            模拟小龙虾调用
                          </motion.button>
                        </DialogTrigger>
                        <DialogContent className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-700/50 text-white max-w-2xl backdrop-blur-md rounded-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                              <span>🦞</span>
                              小龙虾 Agent 交易请求
                            </DialogTitle>
                            <DialogDescription className="text-gray-400">
                              小龙虾想要执行以下交易，请确认
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 py-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center border border-orange-500/30 shadow-lg shadow-orange-500/20">
                                <span className="text-2xl">🦞</span>
                              </div>
                              <div>
                                <div className="font-medium text-lg text-white">小龙虾 Agent</div>
                                <div className="text-sm text-gray-400">请求执行交易</div>
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-5 border border-gray-700/50">
                              <div className="text-sm text-gray-400 mb-3">交易详情</div>
                              <div className="font-mono text-sm space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-gray-400">类型:</span>
                                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400 font-medium">购买 PEPE</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">金额:</span>
                                  <span className="text-white font-medium">0.1 ETH</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">钱包:</span>
                                  <span className="truncate text-white font-medium">{wallets[0]?.address.substring(0, 10)}...</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">预计费用:</span>
                                  <span className="text-white font-medium">0.001 ETH</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 flex items-start gap-3">
                              <Info className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="font-medium text-orange-400">安全提示</div>
                                <div className="text-sm text-gray-400">
                                  单笔交易超过 $50，需要输入 PIN 码确认
                                </div>
                              </div>
                            </div>
                            <div>
                              <Label className="text-gray-400 text-sm block mb-2">PIN 码</Label>
                              <Input 
                                type="password" 
                                placeholder="请输入 6 位 PIN 码" 
                                className="bg-gray-800/80 border-gray-700/50 text-white placeholder-gray-500"
                              />
                            </div>
                          </div>
                          <div className="flex gap-3 justify-end">
                            <Button 
                              variant="secondary" 
                              onClick={() => setShowIframe(false)}
                              className="bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700/50 hover:border-gray-600/50"
                            >
                              取消
                            </Button>
                            <motion.button 
                              onClick={() => setShowIframe(false)}
                              className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium shadow-lg shadow-green-500/20"
                              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)' }}
                              whileTap={{ scale: 0.95 }}
                            >
                              确认执行
                            </motion.button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <div className="mt-6 p-5 bg-gray-900/60 rounded-xl border border-gray-700/50">
                        <h4 className="font-medium mb-3 flex items-center gap-2 text-white">
                          <Info className="h-4 w-4 text-orange-400" />
                          如何集成小龙虾 Agent
                        </h4>
                        <div className="text-sm text-gray-400 space-y-2">
                          <p>1. 复制上面的 Agent UID 给小龙虾</p>
                          <p>2. 小龙虾使用 NexAuth SDK 调用钱包功能</p>
                          <p>3. 所有高风险操作会弹出确认窗口</p>
                        </div>
                        <div className="mt-4 p-4 bg-gray-800/80 rounded-lg border border-gray-700/50 font-mono text-xs text-gray-300 overflow-x-auto">
                          <pre>{`// 小龙虾集成代码示例
import { NexAuthSDK } from '@nexauth/agent-sdk';

const sdk = new NexAuthSDK('YOUR_AGENT_UID');

// 创建钱包会话
const session = await sdk.createWalletSession();

// 执行交易
const result = await sdk.sendTransaction({
  to: '0x...',
  amount: '0.1 ETH'
});`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Transfer Dialog */}
      <TransferDialog
        wallet={transferWallet || { id: '', address: '', balance: '0 ETH', createdAt: '', uid: '', userId: '' }}
        isOpen={!!transferWallet}
        onClose={() => setTransferWallet(null)}
        onSuccess={(result) => {
          console.log('Transfer success:', result);
          setTransferWallet(null);
        }}
      />

      {/* Deposit Dialog */}
      <DepositDialog
        wallet={depositWallet || { id: '', address: '', balance: '0 ETH', createdAt: '', uid: '', userId: '' }}
        isOpen={!!depositWallet}
        onClose={() => setDepositWallet(null)}
      />
    </div>
  );
}
