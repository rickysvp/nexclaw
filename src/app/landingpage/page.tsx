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
  Layers,
  Shield,
  Lock,
  Globe,
  ChevronDown,
  ChevronUp,
  Bot,
  Package,
  Sparkles,
  Quote,
  Star,
  Users,
  Menu,
  X,
  Github,
  Twitter,
} from "lucide-react";
import Link from "next/link";
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

const featuresKeys = [
  { icon: Shield, titleKey: "features.tee.title", descKey: "features.tee.desc" },
  { icon: Zap, titleKey: "features.fast.title", descKey: "features.fast.desc" },
  { icon: Layers, titleKey: "features.multichain.title", descKey: "features.multichain.desc" },
];

const detailedFeaturesKeys = [
  { icon: Lock, titleKey: "security.teeSharding.title", descKey: "security.teeSharding.desc" },
  { icon: Shield, titleKey: "security.txEngine.title", descKey: "security.txEngine.desc" },
  { icon: Check, titleKey: "security.confirm.title", descKey: "security.confirm.desc" },
  { icon: Globe, titleKey: "security.scan.title", descKey: "security.scan.desc" },
  { icon: Lock, titleKey: "security.encryption.title", descKey: "security.encryption.desc" },
];

const faqKeys = [
  { qKey: "faq.q1.question", aKey: "faq.q1.answer" },
  { qKey: "faq.q2.question", aKey: "faq.q2.answer" },
  { qKey: "faq.q3.question", aKey: "faq.q3.answer" },
  { qKey: "faq.q4.question", aKey: "faq.q4.answer" },
  { qKey: "faq.q5.question", aKey: "faq.q5.answer" },
];

const partners = [
  { name: "Ethereum", logoPath: "/logos/ethereum.png" },
  { name: "Monad", logoPath: "/logos/monad.png" },
  { name: "SUI", logoPath: "/logos/sui.png" },
  { name: "Polygon", logoPath: "/logos/polygon.png" },
  { name: "BSC", logoPath: "/logos/bsc.png" },
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-5">
              <p className="text-gray-500 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LandingPage() {
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>("zh");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [installTab, setInstallTab] = useState<'cli' | 'openclaw'>('cli');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const t = (key: string) => getTranslation(key, currentLang);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation - Futuristic Design */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative border-b border-gray-200/50 bg-white/70 backdrop-blur-2xl">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow">
                  <img 
                    src="/claw.png" 
                    alt="ClawWallet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-900 font-bold text-sm tracking-tight">ClawWallet</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    {t(link.key)}
                  </button>
                ))}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-4">
                {/* Language Switcher */}
                <div className="relative">
                  <button
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
                  >
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">
                      {languages.find((l) => l.code === currentLang)?.flag}
                    </span>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </button>
                  
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl border border-gray-100 shadow-xl py-1 max-h-64 overflow-y-auto"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLang(lang.code);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                            currentLang === lang.code ? "text-orange-600" : "text-gray-700"
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Social Links - Desktop */}
                <div className="hidden md:flex items-center gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
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
                  className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  {t(link.key)}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-100 flex items-center gap-4">
                <a href="https://github.com" className="flex items-center gap-2 text-gray-600">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a href="https://twitter.com" className="flex items-center gap-2 text-gray-600">
                  <Twitter className="w-4 h-4" />
                  <span className="text-sm">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 min-h-screen flex flex-col">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-white to-white pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-6 flex-1 flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                  <Package className="w-4 h-4" />
                  <span>{t("hero.badge")}</span>
                </span>
              </motion.div>

              {/* Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">Claw Wallet</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{t("hero.mainTitle")}</span>
                </h1>
                <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>

              {/* Key Features */}
              <div className="flex flex-wrap gap-3">
                {[t("hero.features.tee"), t("hero.features.multichain"), t("hero.features.zeroconf")].map((feature, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Copy Interface with Tabs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {/* Tab Container - Reference Design Style */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                {/* Tabs - Pill Style */}
                <div className="flex p-2 gap-2 bg-gray-50">
                  <button
                    onClick={() => setInstallTab('cli')}
                    className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 ${
                      installTab === 'cli'
                        ? 'text-gray-900 bg-white shadow-sm border border-gray-200'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Terminal className="w-4 h-4" />
                    {t("installTabs.cli")}
                  </button>
                  <button
                    onClick={() => setInstallTab('openclaw')}
                    className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 ${
                      installTab === 'openclaw'
                        ? 'text-gray-900 bg-white shadow-sm border border-gray-200'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Bot className="w-4 h-4" />
                    {t("installTabs.openclaw")}
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {installTab === 'cli' ? (
                    <div className="space-y-4">
                      {/* Description */}
                      <p className="text-gray-600 text-sm text-center">
                        {t("installTabs.cliDesc")}
                      </p>
                      {/* Command Box with Copy Button */}
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <code className="flex-1 text-sm text-gray-700 font-mono truncate">{installCommand}</code>
                        <button
                          onClick={() => {navigator.clipboard.writeText(installCommand); setCopied(true); setTimeout(() => setCopied(false), 2000);}}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-600 text-sm font-medium transition-colors"
                        >
                          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          {t("installTabs.copy")}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Description */}
                      <p className="text-gray-600 text-sm text-center">
                        {t("installTabs.openclawDesc")}
                      </p>
                      {/* Command Box with Copy Button */}
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <code className="flex-1 text-sm text-gray-700 font-mono truncate">{t("installTabs.openClawCommand")}</code>
                        <button
                          onClick={() => {navigator.clipboard.writeText(t("installTabs.openClawCommand")); setCopied(true); setTimeout(() => setCopied(false), 2000);}}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-600 text-sm font-medium transition-colors"
                        >
                          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          {t("installTabs.copy")}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-sm text-center">
                {t("installTabs.noRegistration")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Partners Section - Inside Hero */}
        <div className="relative mt-auto pt-20 pb-8">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-gray-400 text-sm font-medium mb-8 tracking-wide uppercase">
              {t("partners.title")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    <img 
                      src={partner.logoPath} 
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Example Section - Agent Autonomy */}
      <section id="autonomy" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{t("agentAutonomy.badge")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">{t("agentAutonomy.title")}</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{t("agentAutonomy.subtitle")}</p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Agent Activity Log */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden shadow-xl"
            >
              {/* Header */}
              <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t("agentAutonomy.agentName")}</h3>
                  <p className="text-xs text-gray-400">{t("agentAutonomy.agentStatus")}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-gray-400">{t("agentAutonomy.monitoringMarket")}</span>
                </div>
              </div>

              {/* Activity Log */}
              <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
                {/* Activity 1: Market Analysis */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">📊</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium">{t("agentAutonomy.activities.marketAnalysis.title")}</p>
                      <p className="text-xs text-gray-500 mt-1">{t("agentAutonomy.activities.marketAnalysis.time")}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Activity 2: Strategy Decision */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">🧠</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium">{t("agentAutonomy.activities.strategyDecision.title")}</p>
                      <p className="text-xs text-gray-500 mt-1">{t("agentAutonomy.activities.strategyDecision.time")}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded">{t("agentAutonomy.activities.strategyDecision.withinLimit")}</span>
                        <span className="text-xs text-gray-400">{t("agentAutonomy.activities.strategyDecision.dailyLimit")}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Activity 3: Transaction Pending Approval */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-orange-50 rounded-xl p-4 border border-orange-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">⏳</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium">{t("agentAutonomy.activities.pendingTx.title")}</p>
                      <p className="text-xs text-gray-500 mt-1">{t("agentAutonomy.activities.pendingTx.time")}</p>
                      <div className="mt-2 bg-white rounded-lg p-3 border border-orange-100">
                        <p className="text-xs text-gray-600">{t("agentAutonomy.activities.pendingTx.txDetail")}</p>
                        <p className="text-xs text-orange-600 mt-1">{t("agentAutonomy.activities.pendingTx.warning")}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Activity 4: Yield Optimization */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">🌾</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium">{t("agentAutonomy.activities.yieldOptimization.title")}</p>
                      <p className="text-xs text-gray-500 mt-1">{t("agentAutonomy.activities.yieldOptimization.time")}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded">{t("agentAutonomy.activities.yieldOptimization.whitelist")}</span>
                        <span className="text-xs text-gray-400">{t("agentAutonomy.activities.yieldOptimization.apy")}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Activity 5: Risk Alert */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="bg-red-50 rounded-xl p-4 border border-red-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">🛡️</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium">{t("agentAutonomy.activities.riskAlert.title")}</p>
                      <p className="text-xs text-gray-500 mt-1">{t("agentAutonomy.activities.riskAlert.time")}</p>
                      <div className="mt-2 bg-white rounded-lg p-3 border border-red-100">
                        <p className="text-xs text-gray-600">{t("agentAutonomy.activities.riskAlert.unauthorized")}</p>
                        <p className="text-xs text-red-600 mt-1">{t("agentAutonomy.activities.riskAlert.blocked")}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Security Policy Settings */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-orange-500" />
                  {t("agentAutonomy.securityConfig")}
                </h3>

                {/* Policy Items */}
                <div className="space-y-4">
                  {/* Daily Limit */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t("agentAutonomy.dailyLimit.title")}</p>
                        <p className="text-sm text-gray-500">{t("agentAutonomy.dailyLimit.desc")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">$1,000</p>
                      <p className="text-xs text-green-600">{t("agentAutonomy.enabled")}</p>
                    </div>
                  </div>

                  {/* Single Transaction Limit */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t("agentAutonomy.singleLimit.title")}</p>
                        <p className="text-sm text-gray-500">{t("agentAutonomy.singleLimit.desc")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">$500</p>
                      <p className="text-xs text-green-600">{t("agentAutonomy.enabled")}</p>
                    </div>
                  </div>

                  {/* Whitelist */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t("agentAutonomy.whitelist.title")}</p>
                        <p className="text-sm text-gray-500">{t("agentAutonomy.whitelist.desc")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">12 个</p>
                      <p className="text-xs text-green-600">{t("agentAutonomy.enabled")}</p>
                    </div>
                  </div>

                  {/* Approval Required */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t("agentAutonomy.largeTxConfirm.title")}</p>
                        <p className="text-sm text-gray-500">{t("agentAutonomy.largeTxConfirm.desc")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{t("agentAutonomy.largeTxConfirm.status")}</p>
                      <p className="text-xs text-green-600">{t("agentAutonomy.enabled")}</p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-orange-600">{t("agentAutonomy.securityTip.label")}</span>
                    {t("agentAutonomy.securityTip.content")}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-xs text-gray-500">{t("agentAutonomy.stats.autoExecuted")}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                  <p className="text-2xl font-bold text-orange-500">3</p>
                  <p className="text-xs text-gray-500">{t("agentAutonomy.stats.pendingApproval")}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                  <p className="text-2xl font-bold text-green-500">0</p>
                  <p className="text-xs text-gray-500">{t("agentAutonomy.stats.blocked")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Unified Design */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Security Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
                  <Shield className="w-4 h-4 text-orange-500" />
                  <span className="text-orange-600 text-sm font-medium">{t("features.tee.title")}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t("security.title")}
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {t("security.subtitle")}
                </p>
                <div className="space-y-4">
                  {detailedFeaturesKeys.map((feature, index) => (
                    <motion.div
                      key={feature.titleKey}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{t(feature.titleKey)}</h4>
                        <p className="text-gray-500 text-sm">{t(feature.descKey)}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 rounded-3xl flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-16 h-16 text-orange-500" />
                    </div>
                    <p className="text-gray-700 font-semibold text-lg">{t("security.teeTitle")}</p>
                    <p className="text-gray-400 text-sm mt-2">{t("security.teeSubtitle")}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agent Roles Section */}
      <section id="roles" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-orange-500 mb-5">
              <span className="w-4 h-px bg-orange-500"></span>
              {t("agentRoles.badge")}
              <span className="w-4 h-px bg-orange-500"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("agentRoles.title")}
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              {t("agentRoles.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                icon: "📈", 
                titleKey: "agentRoles.defiTrader.title", 
                descKey: "agentRoles.defiTrader.desc",
                tagKeys: ["agentRoles.defiTrader.tag0", "agentRoles.defiTrader.tag1", "agentRoles.defiTrader.tag2"]
              },
              { 
                icon: "💼", 
                titleKey: "agentRoles.assetManager.title", 
                descKey: "agentRoles.assetManager.desc",
                tagKeys: ["agentRoles.assetManager.tag0", "agentRoles.assetManager.tag1", "agentRoles.assetManager.tag2"]
              },
              { 
                icon: "🛡️", 
                titleKey: "agentRoles.securityAuditor.title", 
                descKey: "agentRoles.securityAuditor.desc",
                tagKeys: ["agentRoles.securityAuditor.tag0", "agentRoles.securityAuditor.tag1", "agentRoles.securityAuditor.tag2"]
              },
              { 
                icon: "📊", 
                titleKey: "agentRoles.dataAnalyst.title", 
                descKey: "agentRoles.dataAnalyst.desc",
                tagKeys: ["agentRoles.dataAnalyst.tag0", "agentRoles.dataAnalyst.tag1", "agentRoles.dataAnalyst.tag2"]
              },
              { 
                icon: "🤝", 
                titleKey: "agentRoles.paymentAssistant.title", 
                descKey: "agentRoles.paymentAssistant.desc",
                tagKeys: ["agentRoles.paymentAssistant.tag0", "agentRoles.paymentAssistant.tag1", "agentRoles.paymentAssistant.tag2"]
              },
              { 
                icon: "🔍", 
                titleKey: "agentRoles.onChainResearcher.title", 
                descKey: "agentRoles.onChainResearcher.desc",
                tagKeys: ["agentRoles.onChainResearcher.tag0", "agentRoles.onChainResearcher.tag1", "agentRoles.onChainResearcher.tag2"]
              },
            ].map((role, idx) => (
              <motion.div
                key={idx}
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-orange-200 transition-all duration-300 hover:bg-white hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="text-3xl mb-4">{role.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{t(role.titleKey)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{t(role.descKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {role.tagKeys.map((tagKey, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-gray-100 text-[10px] text-gray-500 border border-gray-200">
                      {t(tagKey)}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{t("testimonialsContent.badge")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t("testimonialsContent.title")}</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("testimonialsContent.subtitle")}</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                key: "testimonialsContent.user1",
                rating: 5,
                avatar: "👨‍💼",
              },
              {
                key: "testimonialsContent.user2",
                rating: 5,
                avatar: "👩‍💻",
              },
              {
                key: "testimonialsContent.user3",
                rating: 5,
                avatar: "🧑‍🚀",
              },
            ].map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Star Rating */}
                <div className="flex gap-0.5 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 leading-relaxed mb-8 min-h-[80px]">
                  "{t(`${item.key}.content`)}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-xl">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {t(`${item.key}.name`)}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {t(`${item.key}.role`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{t("faq.title")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t("faq.title")}</h2>
            <p className="text-gray-500 text-lg">{t("faq.subtitle")}</p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqKeys.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FAQItem question={t(faq.qKey)} answer={t(faq.aKey)} />
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 mb-4">{t("faq.moreQuestions")}</p>
            <a
              href="mailto:support@clawwallet.io"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
            >
              {t("faq.contactUs")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="install" className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-3xl p-10 md:p-16 border border-gray-100 shadow-2xl overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-50" />
            
            <div className="relative">
              {/* Logo */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/30 overflow-hidden bg-white"
              >
                <img 
                  src="/claw.png" 
                  alt="ClawWallet"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
                {t("cta.subtitle")}
              </p>

              {/* Install Command */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl mb-8">
                <code className="text-sm text-gray-300 font-mono px-4 py-2">{installCommand}</code>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      {t("cta.copied")}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {t("cta.copyCommand")}
                    </>
                  )}
                </button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md overflow-hidden">
                <img 
                  src="/claw.png" 
                  alt="ClawWallet"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-600 text-sm">Claw Wallet</span>
            </div>
            <p className="text-gray-400 text-xs">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
