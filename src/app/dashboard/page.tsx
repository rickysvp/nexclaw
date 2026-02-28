'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import { useAuth } from '@/lib/auth-context';
import DashboardOverview from './sections/DashboardOverview';
import WalletsSection from './sections/WalletsSection';
import ApprovalsSection from './sections/ApprovalsSection';
import TransactionsSection from './sections/TransactionsSection';
import RiskSection from './sections/RiskSection';
import AnalyticsSection from './sections/AnalyticsSection';
import ContactsSection from './sections/ContactsSection';
import HelpSection from './sections/HelpSection';
import SettingsSection from './sections/SettingsSection';

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 检测是否为移动端
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarCollapsed(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 检查认证状态
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleNavigate = (path: string) => {
    if (path === '/login') {
      router.push('/login');
      return;
    }
    const section = path.replace('/dashboard/', '').replace('/dashboard', 'dashboard');
    setCurrentSection(section || 'dashboard');
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'wallets':
        return <WalletsSection />;
      case 'approvals':
        return <ApprovalsSection />;
      case 'transactions':
        return <TransactionsSection />;
      case 'risk':
        return <RiskSection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'contacts':
        return <ContactsSection />;
      case 'help':
        return <HelpSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <DashboardOverview />;
    }
  };

  // 加载中状态
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  // 未认证不渲染内容
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Sidebar */}
      <Sidebar 
        onNavigate={handleNavigate} 
        currentPath={`/dashboard/${currentSection === 'dashboard' ? '' : currentSection}`}
        onCollapseChange={setSidebarCollapsed}
      />

      {/* Main Content */}
      <motion.main
        initial={false}
        animate={{ 
          marginLeft: isMobile ? 0 : (sidebarCollapsed ? 80 : 260),
        }}
        transition={{ duration: 0.3 }}
        className={`min-h-screen relative z-10 ${
          isMobile ? 'pt-20 pb-20 px-4' : 'p-6'
        }`}
        style={{
          width: isMobile ? '100%' : `calc(100% - ${sidebarCollapsed ? 80 : 260}px)`,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </motion.main>
    </div>
  );
}
