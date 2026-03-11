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
    role: "AI 开发者",
    roleEn: "AI Developer",
    company: "TechFlow",
    avatar: "👨‍💻",
    content: "ClawWallet 让我们的 AI Agent 瞬间拥有了加密支付能力，集成过程不到5分钟。TEE安全架构让我们非常放心。",
    contentEn: "ClawWallet gave our AI Agent instant crypto payment capabilities, integration took less than 5 minutes. The TEE security architecture gives us complete peace of mind.",
    rating: 5,
  },
  {
    name: "李雪",
    nameEn: "Li Xue",
    role: "产品经理",
    roleEn: "Product Manager",
    company: "DeFi Labs",
    avatar: "👩‍💼",
    content: "作为OpenClaw原生Skill，ClawWallet的无缝体验令人印象深刻。我们的用户现在可以通过自然语言完成加密交易。",
    contentEn: "As a native OpenClaw Skill, ClawWallet's seamless experience is impressive. Our users can now complete crypto transactions through natural language.",
    rating: 5,
  },
  {
    name: "王强",
    nameEn: "Wang Qiang",
    role: "CTO",
    roleEn: "CTO",
    company: "ChainMind",
    avatar: "👨‍🚀",
    content: "无私钥设计解决了我们最大的痛点。团队成员不再需要担心私钥管理，安全性反而更高了。",
    contentEn: "The keyless design solved our biggest pain point. Team members no longer worry about key management, and security is actually higher.",
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
  const [currentLang, setCurrentLang] = useState<Language>("zh");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

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
                  <span>OpenClaw 原生 Skill</span>
                </span>
              </motion.div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05]">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">ClawWallet</span>
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed">
                  为 AI Agent 打造的加密钱包，通过自然语言即可操控您的加密资产。
                  <span className="text-orange-500 font-medium">一键安装，即刻使用。</span>
                </p>
              </div>

              {/* Key Features */}
              <div className="flex flex-wrap gap-3">
                {["TEE 安全架构", "多链支持", "零配置"].map((feature, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Copy Interface */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {/* Command Line Option */}
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">命令行安装</span>
                  <button
                    onClick={() => {navigator.clipboard.writeText(installCommand); setCopied(true); setTimeout(() => setCopied(false), 2000);}}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <code className="text-sm text-gray-300 font-mono block">{installCommand}</code>
              </div>

              {/* Natural Language Option */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">或告诉 OpenClaw</span>
                  <button
                    onClick={() => {navigator.clipboard.writeText("@openclaw 安装 clawwallet"); setCopied(true); setTimeout(() => setCopied(false), 2000);}}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <code className="text-gray-700 font-medium">@openclaw 安装 clawwallet</code>
                </div>
              </div>

              <p className="text-gray-400 text-sm text-center">
                无需注册，复制后即可使用
              </p>
            </motion.div>
          </div>
        </div>

        {/* Partners Section - Inside Hero */}
        <div className="relative mt-auto pt-20 pb-8">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-gray-400 text-sm font-medium mb-8 tracking-wide uppercase">
              已支持的主流公链
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

      {/* Usage Example Section - Three Steps */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">三步上手</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">像聊天一样使用钱包</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">无需复杂配置，通过自然语言即可操控您的加密资产</p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200" />

            {[
              { 
                step: "01", 
                title: "创建钱包", 
                desc: "发送指令即可创建安全钱包", 
                cmd: "@openclaw 创建钱包",
                icon: "💬",
                color: "from-orange-400 to-orange-500"
              },
              { 
                step: "02", 
                title: "查看余额", 
                desc: "随时查询各链资产情况", 
                cmd: "@openclaw 查询余额",
                icon: "👛",
                color: "from-orange-500 to-orange-600"
              },
              { 
                step: "03", 
                title: "发送交易", 
                desc: "一句话完成转账操作", 
                cmd: "@openclaw 发送 0.1 ETH",
                icon: "🚀",
                color: "from-orange-600 to-orange-700"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-10">
                  {item.step}
                </div>
                
                {/* Card */}
                <div className="bg-gray-50 rounded-2xl p-6 pt-10 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                  <div className="bg-white rounded-lg p-3 border border-gray-200 group-hover:border-orange-200 transition-colors">
                    <code className="text-xs text-gray-600 font-mono">{item.cmd}</code>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Demo Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-gray-400 text-xs ml-2">OpenClaw Chat</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">👤</div>
                  <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-2 text-gray-300 text-sm">
                    @openclaw 创建钱包
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 text-gray-300 text-sm space-y-1">
                    <p>✅ 钱包创建成功！</p>
                    <p className="text-gray-500 text-xs font-mono">地址: 0x7a2f...9c4d</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Unified Design */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">核心能力</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">企业级安全，开箱即用</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">基于 TEE 可信执行环境，为 AI Agent 提供银行级安全保障</p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuresKeys.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(feature.titleKey)}</h3>
                <p className="text-gray-500 leading-relaxed">{t(feature.descKey)}</p>
              </motion.div>
            ))}
          </div>

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
                  <span className="text-orange-600 text-sm font-medium">TEE 硬件安全</span>
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
                    <p className="text-gray-700 font-semibold text-lg">TEE 可信执行环境</p>
                    <p className="text-gray-400 text-sm mt-2">Hardware-Level Security</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - 用户使用反馈 */}
      <section id="testimonials" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">用户评价</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">开发者们怎么说</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">来自 DeFi 开发者、量化工程师和协议创始人的真实反馈</p>
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
                    <p className="text-gray-400 text-sm">
                      {currentLang === 'zh' ? testimonial.role : testimonial.roleEn} · {testimonial.company}
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
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">常见问题</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">有疑问？我们来解答</h2>
            <p className="text-gray-500 text-lg">关于 ClawWallet 的常见问题</p>
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
            <p className="text-gray-500 mb-4">还有其他问题？</p>
            <a 
              href="mailto:support@clawwallet.io" 
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
            >
              联系我们
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
                准备好开始了吗？
              </h2>
              <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
                加入数千名开发者，为 AI Agent 添加加密能力
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
                      已复制
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      复制命令
                    </>
                  )}
                </button>
              </div>
              
              {/* Features */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  免费开源
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  无需注册
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  即刻使用
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
