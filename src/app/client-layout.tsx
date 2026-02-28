'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, User, Bell, ChevronDown, BarChart3, Code, Info, MessageSquare, Shield } from "lucide-react";
import { mockUser } from "@/lib/mockData";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const user = mockUser;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-black/80 border-b border-gray-800/70 shadow-lg' : 'backdrop-blur-xl bg-transparent'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <motion.div 
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-orange-500/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-white font-bold text-2xl">🦞</span>
              </motion.div>
              <motion.span 
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                NexClaw
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <motion.a 
                href="/dashboard" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium hover:bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-transparent hover:border-orange-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 165, 0, 0.5)' }}
              >
                <BarChart3 className="h-5 w-5" />
                仪表盘
              </motion.a>
              <motion.a 
                href="/dashboard/security" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium hover:bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-transparent hover:border-orange-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 165, 0, 0.5)' }}
              >
                <Shield className="h-5 w-5" />
                安全规则
              </motion.a>
              <motion.a 
                href="/docs" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium hover:bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-transparent hover:border-orange-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 165, 0, 0.5)' }}
              >
                <Code className="h-5 w-5" />
                文档
              </motion.a>
              <motion.a 
                href="/about" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium hover:bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-transparent hover:border-orange-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 165, 0, 0.5)' }}
              >
                <Info className="h-5 w-5" />
                关于我们
              </motion.a>
              <motion.a 
                href="/contact" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium hover:bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-transparent hover:border-orange-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 165, 0, 0.5)' }}
              >
                <MessageSquare className="h-5 w-5" />
                联系我们
              </motion.a>
              <motion.button 
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-medium shadow-xl shadow-orange-500/20 flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 165, 0, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                立即开始
                <ChevronDown className="h-4 w-4" />
              </motion.button>
              <div className="relative">
                <motion.button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255, 165, 0, 0.5)' }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium hidden lg:inline">{user.firstName || user.emailAddresses?.[0]?.emailAddress}</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </motion.button>
                {userMenuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-900 border border-gray-800 shadow-xl z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 border-b border-gray-800">
                      <p className="font-medium">{user.firstName || user.emailAddresses?.[0]?.emailAddress}</p>
                      <p className="text-sm text-gray-400">{user.emailAddresses?.[0]?.emailAddress}</p>
                    </div>
                    <div className="p-2">
                      <Link href="/dashboard" className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">个人资料</Link>
                      <Link href="/dashboard" className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">设置</Link>
                      <Link href="/dashboard" className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">账单</Link>
                      <div className="border-t border-gray-800 my-2"></div>
                      <Link href="/" className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-red-400">退出登录</Link>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="h-6 w-6 text-orange-400" />
              </motion.button>
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? <X className="h-6 w-6 text-orange-400" /> : <Menu className="h-6 w-6 text-orange-400" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`md:hidden mt-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-3 py-4 border-t border-gray-800/50">
              <motion.a 
                href="/dashboard" 
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-white font-medium hover:bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-transparent hover:border-orange-500/30 transition-colors"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 165, 0, 0.15)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <BarChart3 className="h-5 w-5" />
                仪表盘
              </motion.a>
              <motion.a 
                href="/docs" 
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-white font-medium hover:bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-transparent hover:border-orange-500/30 transition-colors"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 165, 0, 0.15)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Code className="h-5 w-5" />
                文档
              </motion.a>
              <motion.a 
                href="/about" 
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-white font-medium hover:bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-transparent hover:border-orange-500/30 transition-colors"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 165, 0, 0.15)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Info className="h-5 w-5" />
                关于我们
              </motion.a>
              <motion.a 
                href="/contact" 
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-white font-medium hover:bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-transparent hover:border-orange-500/30 transition-colors"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 165, 0, 0.15)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare className="h-5 w-5" />
                联系我们
              </motion.a>
              <motion.button 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-medium shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(255, 165, 0, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                立即开始
                <ChevronDown className="h-4 w-4" />
              </motion.button>
              <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700/50">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">{user.firstName || user.emailAddresses?.[0]?.emailAddress}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800/50 backdrop-blur-md bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 flex items-center justify-center shadow-lg shadow-orange-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-white font-bold text-xl">🦞</span>
                </motion.div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-purple-400">NexClaw</span>
              </div>
              <p className="text-gray-400">
                下一代 AI Agent 安全钱包平台，实现「用户一句话 → Agent 自动执行交易」的闭环体验
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Telegram', 'Discord', 'GitHub'].map((social, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, borderColor: 'rgba(255, 165, 0, 0.5)', y: -3 }}
                  >
                    <span className="text-white">{social.charAt(0)}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-white">产品</h3>
              <ul className="space-y-2">
                {['Agent Wallet', '安全规则', '交易历史', 'API 集成', '定价方案'].map((item, index) => (
                  <motion.li key={index}>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-white">资源</h3>
              <ul className="space-y-2">
                {['文档中心', 'API 参考', '常见问题', '教程', '博客'].map((item, index) => (
                  <motion.li key={index}>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white">公司</h3>
              <ul className="space-y-2">
                {['关于我们', '联系我们', '隐私政策', '服务条款', '加入我们'].map((item, index) => (
                  <motion.li key={index}>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div 
            className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-500 text-sm">© 2026 NexClaw. 保留所有权利 | 让小龙虾安全帮你管钱</p>
            <div className="flex gap-4">
              <a href="/privacy" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">隐私政策</a>
              <a href="/terms" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">服务条款</a>
              <a href="/privacy" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">Cookie 政策</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
