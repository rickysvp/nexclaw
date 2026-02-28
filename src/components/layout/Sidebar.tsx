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
import { Badge } from '@/components/ui/badge';

interface SidebarProps {
  onNavigate: (path: string) => void;
  currentSection: string;
  onCollapseChange?: (collapsed: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', label: '仪表盘', icon: LayoutDashboard },
  { id: 'wallets', label: '钱包管理', icon: Wallet },
  { id: 'approvals', label: '交易审批', icon: CheckCircle },
  { id: 'transactions', label: '交易记录', icon: History },
  { id: 'risk', label: '风控安全', icon: Shield },
  { id: 'analytics', label: '数据分析', icon: BarChart3 },
  { id: 'contacts', label: '地址簿', icon: Users },
  { id: 'help', label: '帮助中心', icon: HelpCircle },
  { id: 'settings', label: '系统设置', icon: Settings },
];

export default function Sidebar({ onNavigate, currentSection, onCollapseChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { user, logout } = useAuth();

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

  const handleNavigate = (section: string) => {
    onNavigate(section);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  if (isMobile) {
    return (
      <>
        <div className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700/50 z-50 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
              <WalletIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white">NexClaw</h1>
              <p className="text-xs text-gray-400">Agent Wallet</p>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

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
                className="fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-gray-900 via-gray-900 to-black border-r border-gray-800/50 z-50 flex flex-col"
              >
                <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                      <WalletIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h1 className="text-base font-bold text-white">NexClaw</h1>
                      <p className="text-xs text-gray-400">Agent Wallet</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {user && (
                  <div className="p-4 border-b border-gray-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full" />
                        ) : (
                          <User className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{user.name}</p>
                        <p className="text-gray-400 text-sm truncate">{user.email}</p>
                      </div>
                    </div>
                  </div>
                )}

                <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
                  {menuItems.map((item) => {
                    const isActive = currentSection === item.id;
                    const Icon = item.icon;
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-white border border-orange-500/30'
                            : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                        }`}
                      >
                        <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-orange-400' : ''}`} />
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                <div className="p-3 border-t border-gray-800/50 space-y-1">
                  <button
                    onClick={() => handleNavigate('settings')}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                      currentSection === 'settings'
                        ? 'bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-white'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                    }`}
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

        <div className="fixed bottom-0 left-0 right-0 h-16 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50 z-40 flex items-center justify-around px-2">
          {menuItems.slice(0, 5).map((item) => {
            const isActive = currentSection === item.id;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                  isActive ? 'text-orange-400' : 'text-gray-400'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label.slice(0, 2)}</span>
              </button>
            );
          })}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-gray-400"
          >
            <Menu className="h-5 w-5" />
            <span className="text-xs">更多</span>
          </button>
        </div>
      </>
    );
  }

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 260 }}
      className="fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black border-r border-gray-800/50 z-50 flex flex-col"
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800/50">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <WalletIcon className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-lg font-bold text-white whitespace-nowrap">NexClaw</h1>
              <p className="text-xs text-gray-500 whitespace-nowrap">Agent Wallet</p>
            </motion.div>
          )}
        </div>
        <motion.button
          onClick={handleCollapse}
          className="p-1.5 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </motion.button>
      </div>

      {!collapsed && user && (
        <div className="p-4 border-b border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full" />
              ) : (
                <User className="h-5 w-5 text-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm truncate">{user.name}</p>
              <p className="text-gray-400 text-xs truncate">{user.email}</p>
            </div>
          </div>
        </div>
      )}

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = currentSection === item.id;
          const Icon = item.icon;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-white border border-orange-500/30'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
              title={collapsed ? item.label : undefined}
            >
              <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-orange-400' : ''}`} />
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
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500"
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      <div className="p-3 border-t border-gray-800/50 space-y-1">
        <motion.button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          title={collapsed ? '退出登录' : undefined}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span className="font-medium whitespace-nowrap">退出登录</span>}
        </motion.button>
      </div>
    </motion.aside>
  );
}
