'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Wallet,
  CheckCircle,
  History,
  Shield,
  BarChart3,
  Users,
  HelpCircle,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Wallet as WalletIcon,
  Menu,
  X,
  User,
} from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

interface SidebarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
  onCollapseChange?: (collapsed: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', label: '仪表盘', icon: LayoutDashboard, path: '/dashboard' },
  { id: 'wallets', label: '钱包管理', icon: Wallet, path: '/dashboard/wallets' },
  { id: 'approvals', label: '交易审批', icon: CheckCircle, path: '/dashboard/approvals' },
  { id: 'transactions', label: '交易记录', icon: History, path: '/dashboard/transactions' },
  { id: 'risk', label: '风控安全', icon: Shield, path: '/dashboard/risk' },
  { id: 'analytics', label: '数据分析', icon: BarChart3, path: '/dashboard/analytics' },
  { id: 'contacts', label: '地址簿', icon: Users, path: '/dashboard/contacts' },
  { id: 'help', label: '帮助中心', icon: HelpCircle, path: '/dashboard/help' },
  { id: 'settings', label: '系统设置', icon: Settings, path: '/dashboard/settings' },
];

export default function Sidebar({ onNavigate, currentPath, onCollapseChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { user, logout } = useAuth();

  // 检测是否为移动端
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setCollapsed(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCollapse = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    onCollapseChange?.(newCollapsed);
  };

  const handleNavigate = (path: string) => {
    onNavigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    onNavigate('/login');
  };

  // 移动端底部导航栏
  if (isMobile) {
    return (
      <>
        {/* 移动端顶部栏 */}
        <div className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700/50 z-50 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <WalletIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white">小龙虾 Wallet</h1>
              <p className="text-xs text-slate-400">Agent Wallet</p>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* 移动端侧边栏抽屉 */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />
              <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-slate-900 via-slate-900 to-black border-r border-slate-800/50 z-50 flex flex-col"
              >
                {/* 头部 */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                      <WalletIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h1 className="text-base font-bold text-white">小龙虾</h1>
                      <p className="text-xs text-slate-400">Agent Wallet</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* 用户信息 */}
                {user && (
                  <div className="p-4 border-b border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full" />
                        ) : (
                          <User className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{user.name}</p>
                        <p className="text-slate-400 text-sm truncate">{user.email}</p>
                        <Badge className="mt-1 bg-indigo-500/20 text-indigo-400 text-xs">
                          {user.role === 'admin' ? '管理员' : user.role === 'user' ? '用户' : '访客'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}

                {/* 菜单 */}
                <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
                  {menuItems.map((item) => {
                    const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
                    const Icon = item.icon;
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.path)}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30'
                            : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                        }`}
                      >
                        <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-indigo-400' : ''}`} />
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* 底部操作 */}
                <div className="p-3 border-t border-slate-800/50 space-y-1">
                  <button
                    onClick={() => handleNavigate('/dashboard/settings')}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition-colors"
                  >
                    <Settings className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">设置</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    <LogOut className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">退出登录</span>
                  </button>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* 移动端底部导航 */}
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800/50 z-40 flex items-center justify-around px-2">
          {menuItems.slice(0, 5).map((item) => {
            const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.path)}
                className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                  isActive ? 'text-indigo-400' : 'text-slate-400'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label.slice(0, 2)}</span>
              </button>
            );
          })}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-slate-400"
          >
            <Menu className="h-5 w-5" />
            <span className="text-xs">更多</span>
          </button>
        </div>
      </>
    );
  }

  // 桌面端侧边栏
  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 260 }}
      className="fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black border-r border-slate-800/50 z-50 flex flex-col"
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800/50">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <WalletIcon className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-lg font-bold text-white whitespace-nowrap">小龙虾</h1>
              <p className="text-xs text-slate-500 whitespace-nowrap">Agent Wallet</p>
            </motion.div>
          )}
        </div>
        <motion.button
          onClick={handleCollapse}
          className="p-1.5 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </motion.button>
      </div>

      {/* User Info (when not collapsed) */}
      {!collapsed && user && (
        <div className="p-4 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full" />
              ) : (
                <User className="h-5 w-5 text-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm truncate">{user.name}</p>
              <p className="text-slate-400 text-xs truncate">{user.email}</p>
            </div>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
          const Icon = item.icon;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => handleNavigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
              title={collapsed ? item.label : undefined}
            >
              <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-indigo-400' : ''}`} />
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-medium whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
              {isActive && !collapsed && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500"
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 border-t border-slate-800/50 space-y-1">
        <motion.button
          onClick={() => handleNavigate('/dashboard/settings')}
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
            currentPath === '/dashboard/settings'
              ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white'
              : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          title={collapsed ? '设置' : undefined}
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span className="font-medium whitespace-nowrap">设置</span>}
        </motion.button>
        
        <motion.button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          title={collapsed ? '退出' : undefined}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span className="font-medium whitespace-nowrap">退出</span>}
        </motion.button>
      </div>
    </motion.aside>
  );
}

// 需要导入Badge组件
import { Badge } from '@/components/ui/badge';
