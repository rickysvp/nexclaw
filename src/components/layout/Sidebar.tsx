'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

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

  const handleCollapse = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    onCollapseChange?.(newCollapsed);
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 260 }}
      className="fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black border-r border-gray-800/50 z-50 flex flex-col"
    >
      {/* Logo */}
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

      {/* Menu Items */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
          const Icon = item.icon;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.path)}
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

      {/* Bottom Actions */}
      <div className="p-3 border-t border-gray-800/50 space-y-1">
        <motion.button
          onClick={() => onNavigate('/dashboard/settings')}
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
            currentPath === '/dashboard/settings'
              ? 'bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-white'
              : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          title={collapsed ? '设置' : undefined}
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span className="font-medium whitespace-nowrap">设置</span>}
        </motion.button>
        
        <motion.button
          onClick={() => onNavigate('/')}
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
