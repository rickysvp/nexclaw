'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  Shield, 
  Lock, 
  FileText, 
  Server, 
  ArrowRight, 
  MessageSquare,
  Copy,
  Check,
  Sparkles,
  Zap,
  ChevronRight,
  Wallet,
  Terminal,
  Activity,
  Globe,
  ChevronDown,
  ExternalLink,
  Play,
  Layers,
  Cpu,
  Fingerprint,
  Key,
  Eye,
  Code2,
  Github
} from 'lucide-react';

// ============================================
// Design System - Premium UI Kit
// ============================================

// Color Palette - Refined Deep Lobster Red + Pearl White
const colors = {
  lobster: {
    50: '#FEF2F0',
    100: '#FEE2E2', 
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
  pearl: {
    50: '#FFFFFF',
    100: '#FEFBFA',
    200: '#FDF7F5',
    300: '#FAF0ED',
    400: '#F5E6E1',
    500: '#EDD5CE',
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  }
};

// ============================================
// Data
// ============================================

const features = [
  {
    id: 'chat',
    icon: MessageSquare,
    label: '对话操作',
    title: '自然语言，一键执行',
    description: '用对话创建和管理钱包，查询余额、转账、查看历史，AI 自动执行链上操作。',
  },
  {
    id: 'security',
    icon: Shield,
    label: '自托管安全',
    title: '你的钥匙，你的控制',
    description: '私钥永不离开你的环境，基于 TEE 的硬件级加密，完全自主控制资产。',
  },
  {
    id: 'risk',
    icon: Activity,
    label: '智能风控',
    title: 'AI 驱动的安全防护',
    description: '实时交易行为分析，异常操作自动拦截，自定义安全策略规则。',
  },
  {
    id: 'multichain',
    icon: Globe,
    label: '多链支持',
    title: '一个钱包，多条链',
    description: '支持 20+ 主流区块链，统一资产管理界面，跨链操作无缝衔接。',
  },
];

const securityLayers = [
  { icon: Key, title: '私钥自托管', desc: '你的私钥，你的控制', detail: '私钥始终存储在你的本地环境，永远不会上传到任何服务器' },
  { icon: Cpu, title: 'TEE 硬件加密', desc: 'AWS Nitro Enclaves', detail: '基于可信执行环境的硬件级加密保护' },
  { icon: Eye, title: '智能风控引擎', desc: 'AI 实时防护', detail: '机器学习模型实时分析交易行为，识别潜在风险' },
  { icon: Layers, title: '策略引擎', desc: '自定义安全规则', detail: '灵活配置转账限额、白名单、多重签名等安全策略' },
];

const supportedPlatforms = [
  { name: 'OpenClaw', status: '官方支持', color: colors.lobster[500], description: '原生集成，开箱即用' },
  { name: 'Claude Code', status: '已集成', color: colors.neutral[600], description: 'MCP Server 支持' },
  { name: 'AutoGPT', status: '已集成', color: colors.neutral[600], description: 'Plugin 系统兼容' },
  { name: 'LangChain', status: '开发中', color: colors.neutral[400], description: 'Tool 集成进行中' },
];

const stats = [
  { value: '$2.5B+', label: '资产管理规模' },
  { value: '50K+', label: '活跃用户' },
  { value: '20+', label: '支持链' },
  { value: '99.9%', label: '安全运行' },
];

// ============================================
// Components
// ============================================

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode; variant?: 'default' | 'outline' | 'ghost'; className?: string }) => (
  <span 
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
      variant === 'default' 
        ? 'bg-red-50 text-red-600 border border-red-100' 
        : variant === 'ghost'
        ? 'bg-transparent text-neutral-500'
        : 'bg-white/80 backdrop-blur-sm border border-neutral-200 text-neutral-600'
    } ${className}`}
  >
    {children}
  </span>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  icon: Icon
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-xl';
  const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:shadow-neutral-900/20 hover:-translate-y-0.5',
    secondary: 'bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 hover:-translate-y-0.5',
    outline: 'bg-transparent text-neutral-700 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50',
    ghost: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
};

const Card = ({ children, className = '', hover = false }: { children: React.ReactNode; className?: string; hover?: boolean }) => (
  <div className={`bg-white rounded-2xl border border-neutral-100/80 shadow-sm ${hover ? 'hover:shadow-xl hover:shadow-neutral-900/5 hover:border-neutral-200 transition-all duration-300 hover:-translate-y-1' : ''} ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ label, title, description, light = false }: { label: string; title: string; description?: string; light?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center max-w-2xl mx-auto mb-16"
  >
    <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${light ? 'text-neutral-500' : 'text-red-500'}`}>
      {label}
    </span>
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${light ? 'text-white' : 'text-neutral-900'}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-6 text-lg leading-relaxed ${light ? 'text-neutral-400' : 'text-neutral-600'}`}>
        {description}
      </p>
    )}
  </motion.div>
);

// ============================================
// Main Page
// ============================================

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const copyCommand = () => {
    navigator.clipboard.writeText('claw install wallet');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-neutral-900 overflow-x-hidden selection:bg-red-100 selection:text-red-900">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-red-100/40 via-transparent to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-neutral-100/60 via-transparent to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* ============================================
          Navigation
      ============================================ */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-4 mt-4">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between bg-white/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg shadow-neutral-900/5">
            {/* Logo */}
            <motion.a href="/" className="flex items-center gap-3 group" whileHover={{ scale: 1.02 }}>
              <div className="relative">
                <img src="/claw.png" alt="Claw" className="w-10 h-10 object-contain" />
                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-xl group-hover:bg-red-500/20 transition-all" />
              </div>
              <span className="text-xl font-semibold tracking-tight">Claw</span>
            </motion.a>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: '功能', href: '#features' },
                { label: '安全', href: '#security' },
                { label: '开发者', href: '#developer' },
                { label: 'Dashboard', href: '/dashboard' },
              ].map((item, i) => (
                <motion.a 
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 rounded-xl hover:bg-neutral-100/80 transition-all"
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.a 
              href="/dashboard" 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="px-5 py-2.5 text-sm font-medium bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:shadow-neutral-900/20"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              开始使用
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* ============================================
          Hero Section
      ============================================ */}
      <motion.section style={{ opacity: heroOpacity }} className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto w-full relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div className="max-w-xl">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge>
                  <Sparkles className="w-3.5 h-3.5" />
                  专为 AI Agent 设计
                </Badge>
              </motion.div>
              
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
              >
                让 AI Agent
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  拥有安全钱包
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-md"
              >
                ClawWallet 是为 AI Agent 构建的 Web3 安全钱包，采用 TEE 硬件加密分片架构。通过自然语言对话，让 AI 安全地管理加密资产。
              </motion.p>
              
              {/* Install Command */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8"
                id="install"
              >
                <p className="text-sm text-neutral-500 mb-3 font-medium">发送给 OpenClaw 安装：</p>
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="flex-1 flex items-center gap-3 px-5 py-4 bg-neutral-900 rounded-xl shadow-xl shadow-neutral-900/20"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Terminal className="w-4 h-4 text-red-400" />
                    <code className="text-white font-mono text-sm tracking-wide">claw install wallet</code>
                  </motion.div>
                  <motion.button
                    onClick={copyCommand}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check className="w-5 h-5 text-green-600" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy className="w-5 h-5 text-neutral-600" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-10 flex items-center gap-8"
              >
                {[
                  { icon: Shield, label: '自托管' },
                  { icon: Lock, label: 'TEE 加密' },
                  { icon: Fingerprint, label: 'AI 风控' },
                ].map((item, i) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-neutral-500"
                  >
                    <item.icon className="w-4 h-4 text-green-500" />
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Demo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-2xl shadow-neutral-900/10 border-neutral-200/50">
                {/* Window Header */}
                <div className="px-5 py-4 bg-neutral-50/80 border-b border-neutral-100 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="ml-4 text-xs text-neutral-400 font-medium">Claw Wallet</span>
                </div>
                
                {/* Chat */}
                <div className="p-6 bg-gradient-to-b from-neutral-50/50 to-white space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                      <img src="/claw.png" alt="Claw" className="w-5 h-5 object-contain brightness-0 invert" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-neutral-100 max-w-[85%]">
                      <p className="text-sm text-neutral-700">你好！我是 Claw Wallet。今天需要我帮你做什么？</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex gap-3 justify-end"
                  >
                    <div className="bg-neutral-900 rounded-2xl rounded-tr-sm px-4 py-3 shadow-lg">
                      <p className="text-sm text-white/90">查询我的 ETH 和 USDC 余额</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                      <img src="/claw.png" alt="Claw" className="w-5 h-5 object-contain brightness-0 invert" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-4 shadow-sm border border-neutral-100 max-w-[90%]">
                      <p className="text-sm text-neutral-700 mb-4">已为您查询到以下资产：</p>
                      <div className="space-y-2">
                        {[
                          { token: 'ETH', name: 'Ethereum', balance: '2.45', value: '$4,890', color: '#627EEA' },
                          { token: 'USDC', name: 'USD Coin', balance: '1,250', value: '$1,250', color: '#2775CA' },
                        ].map((asset, i) => (
                          <motion.div 
                            key={asset.token}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + i * 0.1 }}
                            className="flex items-center justify-between p-3 bg-neutral-50/80 rounded-xl border border-neutral-100"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: `${asset.color}15`, color: asset.color }}>
                                {asset.token[0]}
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-neutral-900">{asset.name}</p>
                                <p className="text-xs text-neutral-500">{asset.token}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-neutral-900">{asset.balance}</p>
                              <p className="text-xs text-red-500 font-medium">{asset.value}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Card>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border border-neutral-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">安全连接</p>
                    <p className="text-xs text-neutral-500">已验证</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-xl border border-neutral-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-neutral-700">实时同步</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-neutral-300"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-neutral-100 bg-neutral-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-neutral-900">{stat.value}</p>
                <p className="mt-2 text-sm text-neutral-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Features Section
      ============================================ */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            label="功能特性" 
            title="一个 Agent，多种超能力"
            description="通过自然语言对话，让 AI Agent 安全地管理加密资产"
          />

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Feature List */}
            <div className="space-y-3">
              {features.map((feature, idx) => (
                <motion.button
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeTab === idx 
                      ? 'bg-white border-red-200 shadow-xl shadow-red-500/5' 
                      : 'bg-white/50 border-transparent hover:border-neutral-200 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeTab === idx ? 'bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/20' : 'bg-neutral-100'
                    }`}>
                      <feature.icon className={`w-6 h-6 transition-colors ${activeTab === idx ? 'text-white' : 'text-neutral-500'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg text-neutral-900">{feature.title}</h3>
                        <ChevronRight className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${activeTab === idx ? 'rotate-90 text-red-500' : ''}`} />
                      </div>
                      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Demo Panel */}
            <div className="lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Card className="overflow-hidden shadow-2xl shadow-neutral-900/10 border-neutral-200/50">
                    <div className="px-5 py-4 bg-neutral-50/80 border-b border-neutral-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          activeTab === 0 ? 'bg-blue-50' : 
                          activeTab === 1 ? 'bg-green-50' : 
                          activeTab === 2 ? 'bg-red-50' : 'bg-purple-50'
                        }`}>
                          {(() => {
                            const Icon = features[activeTab].icon;
                            return <Icon className={`w-4 h-4 ${
                              activeTab === 0 ? 'text-blue-500' : 
                              activeTab === 1 ? 'text-green-500' : 
                              activeTab === 2 ? 'text-red-500' : 'text-purple-500'
                            }`} />;
                          })()}
                        </div>
                        <span className="text-sm font-medium text-neutral-700">{features[activeTab].label}</span>
                      </div>
                      <div className="flex gap-1.5">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-neutral-400' : 'bg-neutral-200'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-neutral-50/30 to-white min-h-[400px]">
                      {activeTab === 0 && (
                        <div className="space-y-3">
                          {[
                            { token: 'ETH', name: 'Ethereum', balance: '2.45', value: '$4,890', change: '+5.2%', color: '#627EEA' },
                            { token: 'USDC', name: 'USD Coin', balance: '1,250', value: '$1,250', change: '0%', color: '#2775CA' },
                            { token: 'WBTC', name: 'Wrapped BTC', balance: '0.05', value: '$2,100', change: '-2.1%', color: '#F7931A' },
                          ].map((asset, i) => (
                            <motion.div 
                              key={asset.token}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center justify-between p-4 bg-white rounded-xl border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all cursor-pointer group"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: `${asset.color}15`, color: asset.color }}>
                                  {asset.token[0]}
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-neutral-900">{asset.name}</p>
                                  <p className="text-xs text-neutral-500">{asset.token}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-semibold text-neutral-900">{asset.balance}</p>
                                <p className={`text-xs font-medium ${asset.change.startsWith('+') ? 'text-green-600' : asset.change === '0%' ? 'text-neutral-500' : 'text-red-500'}`}>
                                  {asset.value} · {asset.change}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {activeTab === 1 && (
                        <div className="space-y-5">
                          <div className="text-center py-8">
                            <div className="relative w-32 h-32 mx-auto">
                              <svg className="w-full h-full -rotate-90">
                                <circle cx="64" cy="64" r="56" stroke="#f5f5f5" strokeWidth="10" fill="none" />
                                <motion.circle
                                  cx="64" cy="64" r="56"
                                  stroke="url(#gradient)"
                                  strokeWidth="10"
                                  fill="none"
                                  strokeLinecap="round"
                                  initial={{ strokeDasharray: "0 351" }}
                                  animate={{ strokeDasharray: "316 351" }}
                                  transition={{ duration: 1.5, delay: 0.3 }}
                                />
                                <defs>
                                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#EF4444" />
                                    <stop offset="100%" stopColor="#DC2626" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">98</span>
                              </div>
                            </div>
                            <p className="mt-4 text-sm font-semibold text-neutral-900">安全评分</p>
                            <p className="text-xs text-neutral-500">您的钱包非常安全</p>
                          </div>
                          <div className="space-y-3">
                            {[
                              { label: '私钥自托管', status: '已启用', color: 'green' },
                              { label: 'TEE 硬件加密', status: '运行中', color: 'green' },
                              { label: '多重签名', status: '已配置', color: 'green' },
                            ].map((item, i) => (
                              <motion.div 
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-center justify-between p-4 bg-white rounded-xl border border-neutral-100"
                              >
                                <span className="text-sm font-medium text-neutral-700">{item.label}</span>
                                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                                  item.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-neutral-100 text-neutral-600'
                                }`}>
                                  {item.status}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === 2 && (
                        <div className="space-y-4">
                          {[
                            { title: '可疑交易已拦截', time: '2分钟前', type: 'blocked', desc: '检测到异常转账行为' },
                            { title: '大额转账确认', time: '1小时前', type: 'warning', desc: '超过设定限额，需人工确认' },
                          ].map((alert, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.15 }}
                              className={`p-5 rounded-xl border ${alert.type === 'blocked' ? 'bg-gradient-to-r from-red-50 to-transparent border-red-100' : 'bg-gradient-to-r from-amber-50 to-transparent border-amber-100'}`}
                            >
                              <div className="flex items-start gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${alert.type === 'blocked' ? 'bg-red-100' : 'bg-amber-100'}`}>
                                  <Activity className={`w-5 h-5 ${alert.type === 'blocked' ? 'text-red-600' : 'text-amber-600'}`} />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <p className={`text-sm font-semibold ${alert.type === 'blocked' ? 'text-red-900' : 'text-amber-900'}`}>{alert.title}</p>
                                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${alert.type === 'blocked' ? 'bg-red-200 text-red-800' : 'bg-amber-200 text-amber-800'}`}>
                                      {alert.type === 'blocked' ? '已阻止' : '待确认'}
                                    </span>
                                  </div>
                                  <p className={`text-xs mt-1 ${alert.type === 'blocked' ? 'text-red-600' : 'text-amber-600'}`}>{alert.desc}</p>
                                  <p className="text-xs text-neutral-400 mt-1">{alert.time}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="p-5 bg-white rounded-xl border border-neutral-100"
                          >
                            <p className="text-sm font-semibold text-neutral-900 mb-4">风控策略</p>
                            <div className="space-y-3 text-sm">
                              {[
                                { label: '每日转账限额', value: '1,000 USDC' },
                                { label: '单笔最大金额', value: '500 USDC' },
                                { label: '新地址验证', value: '已启用', highlight: true },
                              ].map((item, i) => (
                                <div key={item.label} className="flex justify-between items-center">
                                  <span className="text-neutral-500">{item.label}</span>
                                  <span className={`font-medium ${item.highlight ? 'text-green-600' : 'text-neutral-900'}`}>{item.value}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      )}

                      {activeTab === 3 && (
                        <div className="space-y-3">
                          {[
                            { name: 'Ethereum', symbol: 'ETH', balance: '2.45', color: '#627EEA', tag: '主网' },
                            { name: 'Base', symbol: 'ETH', balance: '1.20', color: '#0052FF', tag: 'L2' },
                            { name: 'Arbitrum', symbol: 'ETH', balance: '0.80', color: '#28A0F0', tag: 'L2' },
                            { name: 'Optimism', symbol: 'ETH', balance: '0.50', color: '#FF0420', tag: 'L2' },
                          ].map((chain, i) => (
                            <motion.div 
                              key={chain.name}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.08 }}
                              className="flex items-center justify-between p-4 bg-white rounded-xl border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all cursor-pointer group"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: `${chain.color}15`, color: chain.color }}>
                                  {chain.name[0]}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <p className="text-sm font-semibold text-neutral-900 group-hover:text-red-500 transition-colors">{chain.name}</p>
                                    <span className="text-[10px] px-1.5 py-0.5 bg-neutral-100 text-neutral-500 rounded-full">{chain.tag}</span>
                                  </div>
                                  <p className="text-xs text-neutral-500">{chain.symbol}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-sm font-semibold text-neutral-900">{chain.balance} {chain.symbol}</span>
                                <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          How It Works
      ============================================ */}
      <section className="py-32 px-6 bg-neutral-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <SectionHeader 
            label="快速开始" 
            title="三步即刻开始"
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '创建钱包', desc: '通过自然语言指令快速创建，无需管理复杂助记词', icon: Wallet, command: '帮我创建一个安全钱包' },
              { step: '02', title: '设置规则', desc: '自定义安全策略，包括转账限额、白名单等', icon: Shield, command: '设置每日限额 1000 USDC' },
              { step: '03', title: '开始使用', desc: '用对话方式执行所有链上操作，安全又便捷', icon: Zap, command: '查询余额并转账' },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -top-4 -left-2 text-8xl font-bold text-white/[0.03] select-none">{item.step}</div>
                <div className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/30 group-hover:scale-105 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <div className="p-4 rounded-xl bg-black/30 border border-white/10 font-mono text-sm text-neutral-300">
                    "{item.command}"
                  </div>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Security Section
      ============================================ */}
      <section id="security" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-red-500 mb-4">安全架构</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                安全至上，
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  层层防护
                </span>
              </h2>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                AI Agent 和加密资产是高价值目标。Claw Wallet 从设计之初就将安全作为核心，采用企业级安全架构保护你的资产。
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                不同于其他方案将私钥交给 Agent，Claw Wallet 采用<span className="font-semibold text-red-500">自托管架构</span>，私钥永远在你的控制之下。
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {securityLayers.map((layer, idx) => (
                  <motion.div 
                    key={layer.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-5 rounded-2xl bg-white border border-neutral-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center mb-4 group-hover:from-red-50 group-hover:to-red-100 transition-all duration-300">
                      <layer.icon className="w-6 h-6 text-neutral-600 group-hover:text-red-500 transition-colors" />
                    </div>
                    <h4 className="font-semibold text-neutral-900">{layer.title}</h4>
                    <p className="text-xs text-neutral-500 mt-1">{layer.desc}</p>
                    <p className="text-xs text-neutral-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{layer.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-neutral-100 via-neutral-50 to-white border border-neutral-100 flex items-center justify-center overflow-hidden">
                {/* Animated Rings */}
                <div className="relative w-64 h-64">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-red-200/60" 
                  />
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border-2 border-dashed border-red-300/60" 
                  />
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-16 rounded-full border-2 border-red-400/60" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-2xl shadow-red-500/30"
                  >
                    <Shield className="w-12 h-12 text-white" />
                  </motion.div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  animate={{ y: [0, -8, 0] }}
                  className="absolute bottom-8 right-8 bg-white rounded-2xl p-5 shadow-2xl border border-neutral-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-neutral-900">100%</p>
                      <p className="text-sm text-neutral-500">自托管</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  animate={{ y: [0, 8, 0] }}
                  className="absolute top-8 left-8 bg-white rounded-xl p-4 shadow-xl border border-neutral-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-neutral-700">实时监控中</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          Developer Section
      ============================================ */}
      <section className="py-32 px-6 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-red-500 mb-4">Agent 集成</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                给你的 Agent
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  一个安全的钱包
                </span>
              </h2>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                通过简单的 Skill 安装，你的 AI Agent 就能拥有完整的钱包能力。查询余额、执行转账、管理资产，一切都在安全可控的环境中完成。
              </p>

              <div className="mt-8 rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl shadow-neutral-900/20">
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-neutral-900/50">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs text-neutral-500 font-mono">terminal</span>
                </div>
                <div className="p-6">
                  <pre className="text-sm font-mono leading-relaxed text-neutral-300">
                    <code>{`$ claw install wallet
`}<span className="text-green-400">✓</span>{` Successfully installed Claw Wallet

$ claw wallet create
`}<span className="text-green-400">✓</span>{` Wallet created securely
  Address: 0x7a8b...3c4d

$ claw balance
ETH:  2.45  ($4,890)
USDC: 1,250 ($1,250)`}</code>
                  </pre>
                </div>
              </div>

              <motion.button
                onClick={copyCommand}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex items-center gap-2 text-sm text-neutral-500 hover:text-red-500 transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? '已复制!' : '复制安装命令'}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 shadow-2xl shadow-neutral-900/5" hover>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8 text-center">
                  支持主流 AI Agent 平台
                </p>
                
                <div className="space-y-4">
                  {supportedPlatforms.map((platform, idx) => (
                    <motion.div
                      key={platform.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 4, scale: 1.01 }}
                      className="flex items-center justify-between p-5 rounded-xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-200 hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-base font-semibold shadow-sm group-hover:border-neutral-300 transition-colors">
                          {platform.name[0]}
                        </div>
                        <div>
                          <span className="font-semibold text-neutral-900 block">{platform.name}</span>
                          <span className="text-xs text-neutral-500">{platform.description}</span>
                        </div>
                      </div>
                      <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                        platform.status === '官方支持' 
                          ? 'bg-red-50 text-red-600' 
                          : platform.status === '已集成'
                          ? 'bg-green-50 text-green-600'
                          : 'bg-neutral-100 text-neutral-500'
                      }`}>
                        {platform.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <a href="#" className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 transition-colors group">
                  查看集成文档 
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA Section
      ============================================ */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-100/40 to-neutral-100/40 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <Badge className="mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            开始构建
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            准备好让你的 Agent
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              拥有安全钱包了吗？
            </span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            加入数千名开发者的行列，使用 Claw Wallet 为 AI Agent 提供安全可靠的加密资产管理能力。
          </p>
          
          <div className="mt-10">
            <p className="text-sm text-neutral-500 mb-4 font-medium">发送给 OpenClaw 立即安装：</p>
            <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
              <motion.div 
                className="flex-1 flex items-center gap-3 px-5 py-4 bg-neutral-900 rounded-xl shadow-xl shadow-neutral-900/20"
                whileHover={{ scale: 1.01 }}
              >
                <Terminal className="w-4 h-4 text-red-400" />
                <code className="text-white font-mono text-sm tracking-wide">claw install wallet</code>
              </motion.div>
              <motion.button
                onClick={copyCommand}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm"
              >
                {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-neutral-600" />}
              </motion.button>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" icon={Code2}>查看文档</Button>
            <Button variant="secondary" size="lg" icon={Github}>GitHub</Button>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          Footer
      ============================================ */}
      <footer className="py-16 px-6 border-t border-neutral-100 bg-neutral-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-2.5 mb-5 group">
                <div className="relative">
                  <img src="/claw.png" alt="Claw" className="w-9 h-9 object-contain" />
                  <div className="absolute inset-0 bg-red-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xl font-bold tracking-tight">Claw Wallet</span>
              </a>
              <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
                专为 AI Agent 构建的安全加密钱包。自托管、无私钥管理、智能风控。让 AI 安全地管理加密资产。
              </p>
              <div className="mt-6 flex items-center gap-4">
                {['GitHub', 'Twitter', 'Discord'].map((social) => (
                  <a key={social} href="#" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-5 text-neutral-900">产品</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                {['功能特性', '安全架构', '定价', '更新日志'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-neutral-900 transition-colors hover:translate-x-0.5 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-5 text-neutral-900">开发者</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                {['文档', 'API 参考', 'GitHub', 'SDK'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-neutral-900 transition-colors hover:translate-x-0.5 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">© 2026 Claw Wallet. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors">隐私政策</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors">服务条款</a>
              <span className="text-sm font-medium text-neutral-900 bg-neutral-100 px-3 py-1 rounded-full">v1.2.0</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
