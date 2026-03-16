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
  { key: "nav.features", href: "#features" },
  { key: "nav.security", href: "#security" },
  { key: "nav.reviews", href: "#testimonials" },
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

const testimonials = [
  {
    name: "张明",
    nameEn: "Zhang Ming",
    role: "加密货币爱好者",
    roleEn: "Crypto Enthusiast",
    company: "个人用户",
    avatar: "👨‍💻",
    content: "作为一名普通用户，我一直觉得加密钱包操作复杂又不安全。直到发现 ClawWallet - 不到 5 分钟就完成了设置，我的 AI Agent 现在可以帮我管理加密资产，而我完全不用担心安全问题。TEE 架构真的很让人放心！",
    contentEn: "As an average user, I always found crypto wallets complicated and insecure. Until I discovered ClawWallet - setup took less than 5 minutes, and now my AI Agent manages my crypto assets while I have complete peace of mind thanks to the TEE architecture!",
    rating: 5,
  },
  {
    name: "李雪",
    nameEn: "Li Xue",
    role: "加密新手",
    roleEn: "Crypto Newbie",
    company: "个人用户",
    avatar: "👩‍💼",
    content: "我是第一次接触加密货币，ClawWallet 让整个过程变得超级简单。我只需要通过自然语言告诉我的 OpenClaw Agent 我想做什么，它就会自动处理所有交易。完全不需要了解复杂的区块链知识，太适合我这样的新手了！",
    contentEn: "I'm new to crypto, and ClawWallet made the entire process super easy. I just tell my OpenClaw Agent what I want to do in natural language, and it handles all transactions automatically. No need to understand complex blockchain knowledge - perfect for beginners like me!",
    rating: 5,
  },
  {
    name: "王强",
    nameEn: "Wang Qiang",
    role: "AI 技术爱好者",
    roleEn: "AI Tech Enthusiast",
    company: "个人用户",
    avatar: "👨‍🚀",
    content: "以前最担心的就是私钥丢失或被盗，现在有了 ClawWallet 的无私钥设计，我再也不用记那些复杂的助记词了。我的 AI Agent 可以在我的授权范围内自主操作，同时我还能随时查看所有交易记录，感觉对资产的控制更到位了。",
    contentEn: "I used to worry about losing or having my private keys stolen. Now with ClawWallet's keyless design, I don't have to remember complex mnemonics. My AI Agent can operate autonomously within my authorized scope, and I can check all transaction records anytime - I feel more in control of my assets than ever.",
    rating: 5,
  },
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
  const [currentLang, setCurrentLang] = useState<Language>("en");
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
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t(link.key)}
                  </Link>
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-600 hover:text-gray-900"
                >
                  {t(link.key)}
                </Link>
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05]">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">Claw Wallet</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                  {t("hero.title")}
                </p>
                <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>

              {/* Key Features */}
              <div className="flex flex-wrap gap-3">
                {[t("hero.feature1"), t("hero.feature2"), t("hero.feature3")].map((feature, i) => (
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
              {/* Tab Container */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-gray-100">
                  <button
                    onClick={() => setInstallTab('cli')}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                      installTab === 'cli'
                        ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50/50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {t("hero.cliTab")}
                  </button>
                  <button
                    onClick={() => setInstallTab('openclaw')}
                    className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                      installTab === 'openclaw'
                        ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50/50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {t("hero.openclawTab")}
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {installTab === 'cli' ? (
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="text-gray-500 text-sm">{t("hero.runInTerminal")}</span>
                      </div>
                      <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between">
                        <code className="text-sm text-gray-300 font-mono">{installCommand}</code>
                        <button
                          onClick={() => {navigator.clipboard.writeText(installCommand); setCopied(true); setTimeout(() => setCopied(false), 2000);}}
                          className="text-gray-400 hover:text-orange-500 transition-colors ml-4"
                        >
                          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="text-gray-500 text-sm">{t("hero.sendToOpenClaw")}</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <code className="text-gray-700 font-medium flex-1">{t("hero.installCommand")}</code>
                        <button
                          onClick={() => {navigator.clipboard.writeText(t("hero.installCommand")); setCopied(true); setTimeout(() => setCopied(false), 2000);}}
                          className="text-gray-400 hover:text-orange-500 transition-colors"
                        >
                          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-sm text-center">
                {t("hero.noRegistration")}
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
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            {t("usage.autonomyBadge")}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">{t("usage.autonomyTitle")}</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{t("usage.autonomySubtitle")}</p>
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
                  <h3 className="font-semibold text-gray-900">{t("usage.agentName")}</h3>
                  <p className="text-xs text-gray-400">{t("usage.agentStatus")}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-gray-400">{t("usage.monitoring")}</span>
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
                      <p className="text-sm text-gray-800 font-medium">{t("usage.activity1Title")}</p>
                      <p className="text-xs text-gray-500 mt-1">{t("usage.activity1Time")}</p>
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
                      <p className="text-sm text-gray-800 font-medium">{t("usage.activity2Title")}</p>
                      <p className="text-xs text-gray-500 mt-1">{t("usage.activity2Time")}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded">{t("usage.withinLimit")}</span>
                        <span className="text-xs text-gray-400">{t("usage.dailyLimit")}</span>
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
                      <p className="text-sm text-gray-800 font-medium">{t("usage.activity3Title")}</p>
                      <p className="text-xs text-gray-500 mt-1">{t("usage.activity3Time")}</p>
                      <div className="mt-2 bg-white rounded-lg p-3 border border-orange-100">
                        <p className="text-xs text-gray-600">{t("usage.txDetail")}</p>
                        <p className="text-xs text-orange-600 mt-1">{t("usage.txWarning")}</p>
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
                      <p className="text-sm text-gray-800 font-medium">{t("usage.activity4Title")}</p>
                      <p className="text-xs text-gray-500 mt-1">{t("usage.activity4Time")}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded">{t("usage.whitelistContract")}</span>
                        <span className="text-xs text-gray-400">APY: 4.2%</span>
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
                      <p className="text-sm text-gray-800 font-medium">{t("usage.activity5Title")}</p>
                      <p className="text-xs text-gray-500 mt-1">{t("usage.activity5Time")}</p>
                      <div className="mt-2 bg-white rounded-lg p-3 border border-red-100">
                        <p className="text-xs text-gray-600">{t("usage.unauthorizedRequest")}</p>
                        <p className="text-xs text-red-600 mt-1">{t("usage.blockedReason")}</p>
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
                  {t("usage.securityConfig")}
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
                        <p className="font-medium text-gray-900">{t("usage.dailyLimitTitle")}</p>
                        <p className="text-sm text-gray-500">{t("usage.dailyLimitDesc")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">$1,000</p>
                      <p className="text-xs text-green-600">{t("usage.enabled")}</p>
                    </div>
                  </div>

                  {/* Single Transaction Limit */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t("usage.singleLimitTitle")}</p>
                        <p className="text-sm text-gray-500">{t("usage.singleLimitDesc")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">$500</p>
                      <p className="text-xs text-green-600">{t("usage.enabled")}</p>
                    </div>
                  </div>

                  {/* Whitelist */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t("usage.whitelistTitle")}</p>
                        <p className="text-sm text-gray-500">{t("usage.whitelistDesc")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">12</p>
                      <p className="text-xs text-green-600">{t("usage.enabled")}</p>
                    </div>
                  </div>

                  {/* Approval Required */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t("usage.largeTxConfirm")}</p>
                        <p className="text-sm text-gray-500">{t("usage.largeTxConfirmDesc")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{t("usage.on")}</p>
                      <p className="text-xs text-green-600">{t("usage.enabled")}</p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-orange-600">{t("usage.securityTip")}</span>
                    {t("usage.securityTipContent")}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-xs text-gray-500">{t("usage.autoExecuted")}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                  <p className="text-2xl font-bold text-orange-500">3</p>
                  <p className="text-xs text-gray-500">{t("usage.pendingApproval")}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                  <p className="text-2xl font-bold text-green-500">0</p>
                  <p className="text-xs text-gray-500">{t("usage.securityBlocked")}</p>
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
                  <span className="text-orange-600 text-sm font-medium">{t("security.badge")}</span>
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
                    <p className="text-gray-700 font-semibold text-lg">{t("security.teeEnv")}</p>
                    <p className="text-gray-400 text-sm mt-2">{t("security.hardwareLevel")}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agent Roles Section */}
      <section className="py-24 bg-white border-t border-gray-100">
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
                title: t("agentRoles.role1Title"), 
                desc: t("agentRoles.role1Desc"),
                tags: [t("agentRoles.role1Tag1"), t("agentRoles.role1Tag2"), t("agentRoles.role1Tag3")]
              },
              { 
                icon: "💼", 
                title: t("agentRoles.role2Title"), 
                desc: t("agentRoles.role2Desc"),
                tags: [t("agentRoles.role2Tag1"), t("agentRoles.role2Tag2"), t("agentRoles.role2Tag3")]
              },
              { 
                icon: "🛡️", 
                title: t("agentRoles.role3Title"), 
                desc: t("agentRoles.role3Desc"),
                tags: [t("agentRoles.role3Tag1"), t("agentRoles.role3Tag2"), t("agentRoles.role3Tag3")]
              },
              { 
                icon: "📊", 
                title: t("agentRoles.role4Title"), 
                desc: t("agentRoles.role4Desc"),
                tags: [t("agentRoles.role4Tag1"), t("agentRoles.role4Tag2"), t("agentRoles.role4Tag3")]
              },
              { 
                icon: "🤝", 
                title: t("agentRoles.role5Title"), 
                desc: t("agentRoles.role5Desc"),
                tags: [t("agentRoles.role5Tag1"), t("agentRoles.role5Tag2"), t("agentRoles.role5Tag3")]
              },
              { 
                icon: "🔍", 
                title: t("agentRoles.role6Title"), 
                desc: t("agentRoles.role6Desc"),
                tags: [t("agentRoles.role6Tag1"), t("agentRoles.role6Tag2"), t("agentRoles.role6Tag3")]
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
                <h3 className="text-lg font-bold mb-2 text-gray-900">{role.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{role.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-gray-100 text-[10px] text-gray-500 border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - 用户使用反馈 */}
      <section id="testimonials" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{t("testimonials.badge")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{t("testimonials.title")}</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("testimonials.subtitle")}</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Star Rating */}
                <div className="flex gap-0.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 leading-relaxed mb-8 min-h-[80px]">
                  "{currentLang === 'zh' ? testimonial.content : testimonial.contentEn}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {currentLang === 'zh' ? testimonial.name : testimonial.nameEn}
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
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/30"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("cta.readyTitle")}
              </h2>
              <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
                {t("cta.readySubtitle")}
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
                  {t("cta.feature1")}
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  {t("cta.feature2")}
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  {t("cta.feature3")}
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
