'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/layout/Sidebar';
import DashboardOverview from './sections/DashboardOverview';
import WalletsSection from './sections/WalletsSection';
import ApprovalsSection from './sections/ApprovalsSection';
import TransactionsSection from './sections/TransactionsSection';
import RiskSection from './sections/RiskSection';
import AnalyticsSection from './sections/AnalyticsSection';
import ContactsSection from './sections/ContactsSection';
import HelpSection from './sections/HelpSection';
import SettingsSection from './sections/SettingsSection';

export default function DashboardLayout() {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const handleNavigate = (path: string) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Sidebar */}
      <Sidebar 
        onNavigate={handleNavigate} 
        currentPath={`/dashboard/${currentSection === 'dashboard' ? '' : currentSection}`} 
      />

      {/* Main Content */}
      <motion.main
        initial={false}
        animate={{ marginLeft: 260 }}
        className="min-h-screen p-6 relative z-10"
      >
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderSection()}
        </motion.div>
      </motion.main>
    </div>
  );
}
