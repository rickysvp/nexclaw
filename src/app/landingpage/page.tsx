"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  Copy,
  Check,
  ArrowRight,
  Terminal,
  Zap,
  Shield,
  Globe,
  ChevronDown,
  ChevronUp,
  Bot,
  Star,
  Menu,
  X,
  Github,
  Twitter,
  Cpu,
  Activity,
  TrendingUp,
  Clock,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { languages, getTranslation, type Language } from "./i18n";

const installCommand = "npx ClawWallet@latest install clawwallet";

const navLinks = [
  { key: "nav.autonomy", href: "#autonomy" },
  { key: "nav.roles", href: "#roles" },
  { key: "nav.features", href: "#features" },
  { key: "nav.faq", href: "#faq" },
];

const statsKeys = [
  { value: "10K+", key: "stats.wallets" },
  { value: "99.9%", key: "stats.uptime" },
  { value: "50+", key: "stats.clients" },
  { value: "4", key: "stats.chains" },
];

const faqKeys = [
  { qKey: "faq.q1.question", aKey: "faq.q1.answer" },
  { qKey: "faq.q2.question", aKey: "faq.q2.answer" },
  { qKey: "faq.q3.question", aKey: "faq.q3.answer" },
  { qKey: "faq.q4.question", aKey: "faq.q4.answer" },
  { qKey: "faq.q5.question", aKey: "faq.q5.answer" },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group"
      >
        <span className="font-medium text-gray-900 text-base group-hover:text-orange-600 transition-colors pr-4">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-orange-100' : 'bg-gray-100 group-hover:bg-orange-50'}`}>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-orange-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LandingPage() {
  const [lang, setLang] = useState<Language>("zh");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [installTab, setInstallTab] = useState<'cli' | 'openclaw'>('openclaw');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = (key: string) => getTranslation(key, lang);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900">Claw Wallet</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t(link.key)}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors text-sm text-gray-600"
              >
                <Globe className="w-4 h-4" />
                <span>{languages[lang].flag}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl border border-gray-100 shadow-xl py-1 z-50">
                  {Object.entries(languages).map(([code, { name, flag }]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLang(code as Language);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2 ${
                        lang === code ? 'text-orange-600 bg-orange-50/50' : 'text-gray-700'
                      }`}
                    >
                      <span>{flag}</span>
                      <span>{name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="block w-full text-left py-3 text-gray-600 border-b border-gray-50 last:border-0"
              >
                {t(link.key)}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section - New Design */}
      <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-blue-50/20" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex"
              >
                <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  {t("hero.badge")}
                </span>
              </motion.div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                  <span className="block">Claw Wallet</span>
                  <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                    {t("hero.mainTitle")}
                  </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>

              {/* Install Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-xl p-2 max-w-md"
              >
                <div className="flex p-1 bg-gray-100 rounded-xl mb-3">
                  <button
                    onClick={() => setInstallTab('openclaw')}
                    className={`flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                      installTab === 'openclaw'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Bot className="w-4 h-4" />
                    {t("installTabs.openclaw")}
                  </button>
                  <button
                    onClick={() => setInstallTab('cli')}
                    className={`flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                      installTab === 'cli'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Terminal className="w-4 h-4" />
                    {t("installTabs.cli")}
                  </button>
                </div>
                
                <div className="px-3 pb-3">
                  <p className="text-sm text-gray-500 mb-3">
                    {installTab === 'openclaw' ? t("installTabs.openclawDesc") : t("installTabs.cliDesc")}
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <code className="flex-1 text-sm text-gray-700 font-mono truncate">
                      {installTab === 'openclaw' ? t("installTabs.openClawCommand") : installCommand}
                    </code>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(installTab === 'openclaw' ? t("installTabs.openClawCommand") : installCommand);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-600 text-sm font-medium transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {t("installTabs.copy")}
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <div className="flex gap-8">
                {statsKeys.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{t(stat.key)}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Visual Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl border border-gray-200 shadow-2xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{t("agentAutonomy.agentName")}</p>
                      <p className="text-xs text-green-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        {t("agentAutonomy.agentStatus")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-lg font-medium">{t("agentAutonomy.stats.autoExecuted")}</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-gray-900">12</p>
                    <p className="text-xs text-gray-500">{t("agentAutonomy.stats.autoExecuted")}</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-orange-600">2</p>
                    <p className="text-xs text-orange-600/70">{t("agentAutonomy.stats.pendingApproval")}</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-red-600">1</p>
                    <p className="text-xs text-red-600/70">{t("agentAutonomy.stats.blocked")}</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{t("agentAutonomy.recentActivity")}</p>
                  
                  {/* Activity Items */}
                  {[
                    { icon: TrendingUp, color: "blue", title: t("agentAutonomy.activities.marketAnalysis.title"), time: t("agentAutonomy.activities.marketAnalysis.time") },
                    { icon: CheckCircle2, color: "purple", title: t("agentAutonomy.activities.strategyDecision.title"), time: t("agentAutonomy.activities.strategyDecision.time"), badge: t("agentAutonomy.activities.strategyDecision.withinLimit") },
                    { icon: Clock, color: "orange", title: t("agentAutonomy.activities.pendingTx.title"), time: t("agentAutonomy.activities.pendingTx.time"), warning: true },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className={`w-8 h-8 rounded-full bg-${activity.color}-100 flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className={`w-4 h-4 text-${activity.color}-500`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 font-medium truncate">{activity.title}</p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                        {activity.badge && (
                          <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-green-100 text-green-600 rounded">{activity.badge}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">TEE Protected</p>
                    <p className="text-sm font-semibold text-gray-900">Secure</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Auto Execution</p>
                    <p className="text-sm font-semibold text-gray-900">Active</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{t("features.badge")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t("features.title")}</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("features.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: t("features.tee.title"), desc: t("features.tee.desc"), color: "orange" },
              { icon: Zap, title: t("features.fast.title"), desc: t("features.fast.desc"), color: "blue" },
              { icon: Activity, title: t("features.multichain.title"), desc: t("features.multichain.desc"), color: "green" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Autonomy Section */}
      <section id="autonomy" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{t("agentAutonomy.badge")}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">{t("agentAutonomy.title")}</h2>
              <p className="text-gray-500 text-lg mb-8">{t("agentAutonomy.desc")}</p>
              
              <div className="space-y-4">
                {[
                  { icon: RefreshCw, title: t("agentAutonomy.points.autoExecution.title"), desc: t("agentAutonomy.points.autoExecution.desc") },
                  { icon: Shield, title: t("agentAutonomy.points.policyGuard.title"), desc: t("agentAutonomy.points.policyGuard.desc") },
                  { icon: Cpu, title: t("agentAutonomy.points.teeSecurity.title"), desc: t("agentAutonomy.points.teeSecurity.desc") },
                ].map((point, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{point.title}</h4>
                      <p className="text-sm text-gray-500">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Bot className="w-6 h-6 text-orange-400" />
                  <span className="font-semibold">OpenClaw Agent</span>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex gap-3">
                    <span className="text-gray-500">$</span>
                    <span className="text-green-400">analyzing market conditions...</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-500">$</span>
                    <span className="text-blue-400">ETH price dropped 5%, DCA triggered</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-500">$</span>
                    <span className="text-yellow-400">checking policy limits...</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-500">$</span>
                    <span className="text-green-400">✓ within daily limit ($1000)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-500">$</span>
                    <span className="text-orange-400">executing swap: 0.05 ETH → USDC</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-500">$</span>
                    <span className="text-green-400">✓ transaction confirmed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Roles Section */}
      <section id="roles" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{t("agentRoles.badge")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t("agentRoles.title")}</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("agentRoles.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📈", titleKey: "agentRoles.defiTrader.title", descKey: "agentRoles.defiTrader.desc", tags: [t("agentRoles.defiTrader.tag0"), t("agentRoles.defiTrader.tag1"), t("agentRoles.defiTrader.tag2")] },
              { icon: "💼", titleKey: "agentRoles.assetManager.title", descKey: "agentRoles.assetManager.desc", tags: [t("agentRoles.assetManager.tag0"), t("agentRoles.assetManager.tag1"), t("agentRoles.assetManager.tag2")] },
              { icon: "🛡️", titleKey: "agentRoles.securityAuditor.title", descKey: "agentRoles.securityAuditor.desc", tags: [t("agentRoles.securityAuditor.tag0"), t("agentRoles.securityAuditor.tag1"), t("agentRoles.securityAuditor.tag2")] },
              { icon: "📊", titleKey: "agentRoles.dataAnalyst.title", descKey: "agentRoles.dataAnalyst.desc", tags: [t("agentRoles.dataAnalyst.tag0"), t("agentRoles.dataAnalyst.tag1"), t("agentRoles.dataAnalyst.tag2")] },
              { icon: "🤝", titleKey: "agentRoles.paymentAssistant.title", descKey: "agentRoles.paymentAssistant.desc", tags: [t("agentRoles.paymentAssistant.tag0"), t("agentRoles.paymentAssistant.tag1"), t("agentRoles.paymentAssistant.tag2")] },
              { icon: "🔍", titleKey: "agentRoles.onChainResearcher.title", descKey: "agentRoles.onChainResearcher.desc", tags: [t("agentRoles.onChainResearcher.tag0"), t("agentRoles.onChainResearcher.tag1"), t("agentRoles.onChainResearcher.tag2")] },
            ].map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all group"
              >
                <div className="text-3xl mb-4">{role.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(role.titleKey)}</h3>
                <p className="text-gray-500 text-sm mb-4">{t(role.descKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{t("testimonialsContent.badge")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t("testimonialsContent.title")}</h2>
            <p className="text-gray-500 text-lg">{t("testimonialsContent.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: "testimonialsContent.user1", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", twitter: "@alex_crypto" },
              { key: "testimonialsContent.user2", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", twitter: "@sarah_web3" },
              { key: "testimonialsContent.user3", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus", twitter: "@marcus_defi" },
            ].map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all"
              >
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 min-h-[80px]">"{t(`${item.key}.content`)}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img src={item.avatar} alt={t(`${item.key}.name`)} className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-200" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{t(`${item.key}.name`)}</p>
                    <a href={`https://twitter.com/${item.twitter.slice(1)}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-orange-500 transition-colors flex items-center gap-1">
                      <Twitter className="w-3 h-3" />
                      {item.twitter}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{t("faq.badge")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t("faq.title")}</h2>
            <p className="text-gray-500 text-lg">{t("faq.subtitle")}</p>
          </div>

          <div className="space-y-4">
            {faqKeys.map((faq, index) => (
              <FAQItem key={index} question={t(faq.qKey)} answer={t(faq.aKey)} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">{t("faq.moreQuestions")}</p>
            <a href="mailto:support@clawwallet.xyz" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors">
              {t("faq.contactUs")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <img src="/claw.png" alt="ClawWallet" className="w-20 h-20 mx-auto rounded-2xl" />
            <h2 className="text-3xl md:text-4xl font-bold">{t("cta.title")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t("cta.subtitle")}</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                {t("cta.features.opensource")}
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                {t("cta.features.noreg")}
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                {t("cta.features.instant")}
              </span>
            </div>

            <p className="text-gray-500 text-sm">{t("cta.footer")}</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">{t("footer.copyright")}</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
