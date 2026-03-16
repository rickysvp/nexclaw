'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, ChevronDown, Star, Globe, Wallet, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChainIcon, chainList } from "@/components/icons/ChainIcons";

// Logo Component
const ClawLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <img src="/claw.png" alt="Claw Wallet" className={className} />
);

// Floating Card Component with Framer Motion
function FloatingCard({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      animate={{
        y: [0, -15, 0],
      }}
      // @ts-ignore
      transition={{
        y: {
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay * 0.3
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// 3D Flip Card Component
function FlipCard({ front, back }: { front: React.ReactNode; back: React.ReactNode }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div 
      className="relative w-full h-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 backface-hidden">{front}</div>
        <div className="absolute inset-0 backface-hidden" style={{ transform: "rotateY(180deg)" }}>{back}</div>
      </motion.div>
    </div>
  );
}

// Accordion Item
function AccordionItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <h3 className="text-base font-bold text-gray-900 pr-4">{q}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = [
    { quote: "Claw Wallet 是目前唯一真正为 OpenClaw Agent 设计的钱包方案，TEE 分片架构让我对 Agent 自主操作资金完全放心。", handle: "@0xchine · DeFi 研究员", avatar: "/avatars/0xchine.jpg" },
    { quote: "从创建钱包到给 Agent 授权只花了 3 分钟，权限粒度控制得很好，日限额 + 合约白名单设计非常专业。", handle: "@0xyilu · Web3 开发者", avatar: "/avatars/0xyilu.jpg" },
    { quote: "我们的 OpenClaw Agent 每天自动执行几十笔链上操作，Claw Wallet 的审计日志让整个过程完全透明可追溯。", handle: "@seven_nad · 协议创始人", avatar: "/avatars/seven_nad.png" },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const faqs = [
    { q: "Claw Wallet 如何保护我的私钥安全？", a: "您的私钥在 AWS Nitro Enclaves 可信执行环境内分片加密，密钥运算在硬件级隔离飞地内完成，原始密钥对外完全不可见。" },
    { q: "Agent 可以执行哪些操作？", a: "Agent 可以在您授权的范围内执行 DeFi 交易、跨链转账、收益聚合等操作。您可以设置每日限额、合约白名单等安全规则。" },
    { q: "如何撤销 Agent 的授权？", a: "您可以随时在 Dashboard 中一键暂停或撤销任何 Agent 的授权，所有操作立即生效。" },
    { q: "支持哪些区块链？", a: "目前支持 Ethereum、Solana、Base、Arbitrum、Optimism、Polygon 等 20+ 主流区块链，持续增加中。" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 h-16 border-b border-gray-200 bg-white/85 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <ClawLogo className="w-9 h-9" />
          <span className="text-gray-900 font-black text-lg tracking-[-0.02em] uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.08em' }}>
            Claw<span className="text-[#FF4D2E]">Wallet</span>
          </span>
        </Link>
        <ul className="hidden md:flex gap-0 list-none">
          <li><a href="#features" className="block px-4 h-16 leading-[64px] text-gray-500 text-sm no-underline hover:text-gray-900 transition-colors">功能</a></li>
          <li><a href="#howitworks" className="block px-4 h-16 leading-[64px] text-gray-500 text-sm no-underline hover:text-gray-900 transition-colors">流程</a></li>
          <li><a href="#security" className="block px-4 h-16 leading-[64px] text-gray-500 text-sm no-underline hover:text-gray-900 transition-colors">安全</a></li>
          <li><a href="/docs" className="block px-4 h-16 leading-[64px] text-gray-500 text-sm no-underline hover:text-gray-900 transition-colors">文档</a></li>
        </ul>
        <div className="flex items-center gap-2.5">
          <Link href="/login" className="hidden sm:block px-4 py-1.5 rounded-md border border-gray-300 text-gray-900 text-sm font-medium no-underline hover:bg-gray-100 transition-colors">登录</Link>
          <Link href="/login" className="px-4 py-1.5 rounded-md bg-[#FF4D2E] text-white text-sm font-semibold no-underline hover:bg-[#FF6B47] transition-colors">免费创建钱包</Link>
        </div>
      </nav>

      {/* Hero Section - Centered Single Column */}
      <section className="relative min-h-screen flex items-center justify-center border-b border-gray-200 pt-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FF4D2E]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF4D2E]/3 rounded-full blur-[100px]"></div>
        </div>

        {/* Floating Wallet Cards in Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-[20%] right-[10%] w-64 opacity-20"
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#FF4D2E] rounded-lg flex items-center justify-center text-white text-xs">C</div>
                <span className="text-sm font-semibold text-gray-900">Claw Wallet</span>
              </div>
              <div className="text-xs text-gray-400 mb-1">Total Balance</div>
              <div className="text-2xl font-bold text-gray-900">$12,450.80</div>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-[25%] left-[8%] w-56 opacity-15"
            animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center text-white text-xs">🤖</div>
                <span className="text-xs font-semibold text-gray-900">DeFi Agent</span>
              </div>
              <div className="text-xs text-green-600">24 transactions executed</div>
            </div>
          </motion.div>
          {/* Security Policy Card */}
          <motion.div
            className="absolute top-[15%] left-[12%] w-60 opacity-12"
            animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-gray-900">Security Policy</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>Daily Limit: $5,000</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>Contract Whitelist: On</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>TEE Encryption: Active</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Multi-Chain Support Card */}
          <motion.div
            className="absolute bottom-[30%] right-[15%] w-52 opacity-10"
            animate={{ y: [0, 20, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-gray-900">Multi-Chain</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['ETH', 'SOL', 'BASE', 'ARB', 'OP'].map((chain) => (
                  <span key={chain} className="px-2 py-0.5 rounded bg-gray-100 text-[10px] text-gray-600 font-medium">
                    {chain}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-6">
              <span className="w-6 h-px bg-[#FF4D2E]"></span>
              专为 AI Agent 构建
              <span className="w-6 h-px bg-[#FF4D2E]"></span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.03em] text-gray-900 mb-6">
              Agent 时代的<br />
              <span className="text-[#FF4D2E]">Web3 加密钱包</span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-gray-500 max-w-2xl mx-auto mb-8">
              用户一键登录即可创建钱包，通过精细权限管控授权给 OpenClaw Agent 自主执行链上操作。TEE 分片加密，安全、可控、多链支持。
            </p>

            <motion.a
              href="/login"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gray-900 text-white text-lg font-bold no-underline hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              免费创建钱包 <ArrowRight className="h-5 w-5" />
            </motion.a>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-12 lg:gap-16 mt-16 pt-8 border-t border-gray-200">
              {[
                { num: "20+", label: "支持区块链" },
                { num: "TEE", label: "分片安全架构" },
                { num: "<2s", label: "钱包创建耗时" },
                { num: "AWS", label: "TEE 云服务" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] text-gray-900">{stat.num}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Horizontal Scroll */}
      <section id="features" className="py-24 lg:py-32 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>核心功能<span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              为 AI Agent 原生设计的加密钱包
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              专为 OpenClaw 生态构建，支持人类用户与 AI Agent 的协同链上操作。
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                { num: "01", icon: "🔐", title: "一键社交登录创建", desc: "支持 Google、GitHub、Telegram 等 OAuth 登录，无需记助记词，钱包秒级生成，完美适配 OpenClaw 用户体系。" },
                { num: "02", icon: "🤖", title: "Agent 权限精细管控", desc: "为每个 OpenClaw Agent 单独配置可操作链、每日限额、合约白名单，随时一键撤销授权，完全掌控。" },
                { num: "03", icon: "⛓️", title: "多链统一管理", desc: "一个钱包覆盖 Ethereum、Solana、Base、Arbitrum 等 20+ 主流链，Agent 可在授权范围内跨链自主执行。" },
                { num: "04", icon: "🔑", title: "TEE 分片安全架构", desc: "基于 AWS Nitro Enclaves 可信执行环境对私钥分片加密，密钥运算在 AWS 硬件级隔离飞地内完成。" },
                { num: "05", icon: "📊", title: "实时操作审计日志", desc: "所有 Agent 发起的链上操作均记录完整审计轨迹，支持按 Agent、链、时间范围多维度查询筛选。" },
                { num: "06", icon: "⚡", title: "OpenClaw Skills 原生集成", desc: "作为 OpenClaw Skill 直接发布，Agent 通过自然语言即可触发钱包操作，无需 API Key 或复杂配置。" },
              ].map((feat, idx) => (
                <motion.div
                  key={idx}
                  className="flex-shrink-0 w-80 snap-start"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full hover:border-[#FF4D2E]/30 hover:bg-white transition-all group">
                    <div className="text-xs font-bold text-[#FF4D2E] tracking-wider mb-4 font-mono">{feat.num}</div>
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feat.icon}</div>
                    <h3 className="text-lg font-bold mb-3 tracking-tight text-gray-900">{feat.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Vertical Timeline */}
      <section id="howitworks" className="py-24 lg:py-32 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>使用流程<span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              三步完成 Agent 钱包部署
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              从用户登录到 Agent 自主链上操作，整个过程不超过 5 分钟。
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#FF4D2E] via-[#FF4D2E]/50 to-gray-200"></div>

            {[
              { num: "01", title: "用户登录创建", desc: "通过社交账号或邮箱登录，Claw Wallet 自动生成 TEE 钱包并绑定至用户身份，全程无私钥暴露" },
              { num: "02", title: "配置 Agent 权限", desc: "在控制台选择要授权的 OpenClaw Agent，精细设置操作链范围、资金限额与合约白名单" },
              { num: "03", title: "Agent 自主执行", desc: "OpenClaw Agent 通过 Skill 接口调用钱包，在授权范围内自主完成 DeFi、支付、跨链等链上操作" },
              { num: "04", title: "实时监控管理", desc: "用户随时在 Dashboard 查看 Agent 操作历史，一键暂停授权，完全掌控资产安全" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="relative flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-sm font-bold font-mono flex-shrink-0 relative z-10 transition-all duration-300 ${idx === 0 ? 'bg-[#FF4D2E] border-[#FF4D2E] text-white shadow-lg shadow-[#FF4D2E]/30' : 'bg-white border-gray-200 text-gray-500'}`}>
                  {step.num}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 lg:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>生态集成<span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              20+ 区块链，一键连接
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              即刻连接您喜爱的链。您的 Agent 可跨所有主流链工作 — 无需自定义配置。
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {chainList.map((chain, idx) => (
              <motion.div
                key={idx}
                className="aspect-square flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#FF4D2E]/30 hover:bg-gray-100 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                whileHover={{ scale: 1.05 }}
              >
                <ChainIcon name={chain.icon} className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-gray-500 text-center truncate w-full">{chain.name}</span>
              </motion.div>
            ))}
            <motion.div className="aspect-square flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#FF4D2E]/30 hover:bg-gray-100 transition-all duration-300 cursor-pointer group" whileHover={{ scale: 1.05 }}>
              <span className="text-xl text-gray-500">+</span>
              <span className="text-[10px] text-gray-500 text-center truncate w-full">更多</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security Section - Pentagon Radar with Floating Cards */}
      <section id="security" className="py-24 lg:py-32 border-b border-gray-200 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4D2E]/5 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>安全架构<span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              企业级安全，Agent 操作零风险
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Claw Wallet 采用多层防护体系，确保 Agent 每一次链上操作都在用户完全掌控之内。
            </p>
          </motion.div>

          {/* Pentagon Radar with Floating Cards */}
          <div className="relative">
            {/* Top Card - 01 TEE 可信执行环境分片 */}
            <div className="flex justify-center mb-6">
              <FloatingCard delay={0} className="bg-white border border-gray-200 rounded-2xl p-6 max-w-md w-full shadow-lg hover:shadow-2xl hover:border-[#FF4D2E]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-bold text-[#FF4D2E] font-mono pt-1">01</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TEE 可信执行环境分片</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">基于 AWS Nitro Enclaves 可信执行环境，私钥在 AWS 硬件级隔离飞地内分片加密，充分利用 Amazon 云服务器的安全合规能力。</p>
                  </div>
                </div>
              </FloatingCard>
            </div>

            {/* Main Content - Radar + Side Cards */}
            <div className="grid lg:grid-cols-3 gap-6 items-start">
              {/* Left Card - 02 交易策略引擎拦截 */}
              <FloatingCard delay={1} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-[#FF4D2E]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-bold text-[#FF4D2E] font-mono pt-1">02</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">交易策略引擎拦截</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">每笔 Agent 发起的交易在广播前经过五重安全过滤：金额上限校验、目标合约白名单、操作频率限制、交易审批流程、实时安全风控。</p>
                  </div>
                </div>
              </FloatingCard>

              {/* Center Radar */}
              <div className="relative aspect-square max-w-[380px] mx-auto">
                {/* Ripple Effects */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`ripple-${i}`}
                    className="absolute rounded-full border-2 border-[#FF4D2E]/30"
                    initial={{ scale: 0.5, opacity: 0.6 }}
                    animate={{ 
                      scale: [0.5, 1.8],
                      opacity: [0.5, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeOut"
                    }}
                    style={{
                      top: '50%',
                      left: '50%',
                      width: '180px',
                      height: '180px',
                      marginLeft: '-90px',
                      marginTop: '-90px',
                    }}
                  />
                ))}
                <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                  {/* Background Grid - Pentagon Rings */}
                  {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => {
                    const radius = 130 * scale;
                    const points = [0, 72, 144, 216, 288].map(angle => {
                      const rad = (angle - 90) * Math.PI / 180;
                      const x = 200 + radius * Math.cos(rad);
                      const y = 200 + radius * Math.sin(rad);
                      return `${x},${y}`;
                    }).join(' ');
                    return (
                      <polygon
                        key={i}
                        points={points}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                    );
                  })}
                  {/* Axis Lines */}
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const rad = (angle - 90) * Math.PI / 180;
                    const x2 = 200 + 130 * Math.cos(rad);
                    const y2 = 200 + 130 * Math.sin(rad);
                    return (
                      <line
                        key={i}
                        x1="200"
                        y1="200"
                        x2={x2}
                        y2={y2}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                    );
                  })}
                  {/* Data Area - Pentagon */}
                  {(() => {
                    const dataPoints = [0, 72, 144, 216, 288].map((angle) => {
                      const rad = (angle - 90) * Math.PI / 180;
                      const radius = 110;
                      const x = 200 + radius * Math.cos(rad);
                      const y = 200 + radius * Math.sin(rad);
                      return `${x},${y}`;
                    }).join(' ');
                    return (
                      <motion.polygon
                        points={dataPoints}
                        fill="rgba(255, 77, 46, 0.12)"
                        stroke="#FF4D2E"
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    );
                  })()}
                  {/* Data Points */}
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const rad = (angle - 90) * Math.PI / 180;
                    const radius = 110;
                    const x = 200 + radius * Math.cos(rad);
                    const y = 200 + radius * Math.sin(rad);
                    return (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="#FF4D2E"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      />
                    );
                  })}
                  {/* Center Logo - Claw Image */}
                  <defs>
                    <clipPath id="circleClip">
                      <circle cx="200" cy="200" r="32" />
                    </clipPath>
                  </defs>
                  <image
                    href="/claw.png"
                    x="168"
                    y="168"
                    width="64"
                    height="64"
                    clipPath="url(#circleClip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <circle cx="200" cy="200" r="32" fill="none" stroke="#FF4D2E" strokeWidth="3" />
                </svg>
              </div>

              {/* Right Card - 05 端到端加密通信 */}
              <FloatingCard delay={2} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-[#FF4D2E]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-bold text-[#FF4D2E] font-mono pt-1">05</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">端到端加密通信</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">OpenClaw Agent 与 Claw Wallet 之间所有通信均经过 TLS 1.3 + 消息级签名双重加密，防中间人攻击。</p>
                  </div>
                </div>
              </FloatingCard>
            </div>

            {/* Bottom Row - 03 & 04 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
              <FloatingCard delay={3} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-[#FF4D2E]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-bold text-[#FF4D2E] font-mono pt-1">03</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">大额交易二次确认</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">超过用户设定阈值的交易将触发推送通知，要求用户在 App 或邮件中二次授权方可广播。</p>
                  </div>
                </div>
              </FloatingCard>
              <FloatingCard delay={4} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-[#FF4D2E]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-bold text-[#FF4D2E] font-mono pt-1">04</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">链上合约实时扫描</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">集成 Bitslab Safe 安全 API，Agent 发起交互前自动扫描目标合约风险评分与漏洞特征，高风险合约自动拦截告警。</p>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Roles Section - 3D Flip Cards */}
      <section className="py-24 lg:py-32 border-b border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4D2E]/5 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>Agent 能力<span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              一个钱包，胜任所有场景
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              您的完整 Web3 AI 团队。从 DeFi 交易到资产管理，Claw Wallet 让 Agent 安全处理一切链上操作。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
            {[
              { icon: "📈", title: "DeFi 交易员", desc: "自动执行 Swap、流动性挖矿、收益聚合，24/7 监控市场机会", tags: ["DEX 交易", "收益 farming", "自动复利"] },
              { icon: "💼", title: "资产管理员", desc: "跨链资产配置、再平衡、风险监控，保持投资组合最优状态", tags: ["跨链桥接", "资产再平衡", "风险评估"] },
              { icon: "🛡️", title: "安全审计员", desc: "每笔交易前自动扫描合约风险，拦截可疑操作，保护资产安全", tags: ["合约扫描", "风险评分", "异常拦截"] },
              { icon: "📊", title: "数据分析师", desc: "追踪链上数据、生成收益报告、监控 Gas 费用，提供数据洞察", tags: ["链上分析", "收益报告", "Gas 优化"] },
              { icon: "🤝", title: "支付助理", desc: "处理定期付款、薪资发放、订阅管理，支持多币种批量转账", tags: ["定期支付", "批量转账", "多币种"] },
              { icon: "🔍", title: "链上研究员", desc: "追踪新项目、监控空投机会、分析代币经济，主动呈现研究结果", tags: ["空投追踪", "项目调研", "代币分析"] },
            ].map((role, idx) => (
              <motion.div
                key={idx}
                className="h-64"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <FlipCard
                  front={
                    <div className="w-full h-full bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#FF4D2E]/30 transition-all">
                      <div className="text-5xl mb-4">{role.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                      <p className="text-sm text-gray-400 mt-2">悬停查看详情</p>
                    </div>
                  }
                  back={
                    <div className="w-full h-full bg-[#FF4D2E] text-white rounded-2xl p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-bold mb-3">{role.title}</h3>
                      <p className="text-sm text-white/90 mb-4">{role.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {role.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 rounded bg-white/20 text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel */}
      <section className="py-24 lg:py-32 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>用户评价<span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-12 text-center"
              >
                <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8">&ldquo;{testimonials[currentTestimonial].quote}&rdquo;</p>
                <div className="flex items-center justify-center gap-3">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].handle}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#FF4D2E]/20"
                    onError={(e) => {
                      // Fallback to default avatar if image fails to load
                      (e.target as HTMLImageElement).src = '/claw.png';
                    }}
                  />
                  <span className="text-sm text-gray-500">{testimonials[currentTestimonial].handle}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#FF4D2E] hover:text-[#FF4D2E] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentTestimonial ? 'bg-[#FF4D2E]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#FF4D2E] hover:text-[#FF4D2E] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-24 lg:py-32 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>常见问题<span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900">
              还有问题？这里解答
            </h2>
          </motion.div>

          <div className="border-t border-gray-200">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF4D2E]/8 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs text-gray-500 mb-6">
              ⚡ 3 分钟内部署完成
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] leading-tight mb-5 text-gray-900">
              立即为你的 Agent<br />部署专属钱包
            </h2>
            <p className="text-base text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
              加入正在使用 Claw Wallet 的 OpenClaw 开发者社区，让你的 AI Agent 安全执行每一笔链上操作。
            </p>
            <motion.a href="/login" className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gray-900 text-white text-base font-bold no-underline hover:bg-gray-800 transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              免费创建钱包 <ArrowRight className="h-5 w-5" />
            </motion.a>
            <p className="text-xs text-gray-400 mt-6">无需信用卡，免费开始使用</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-gray-200">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <ClawLogo className="w-6 h-6" />
                <span className="font-bold text-gray-900">Claw Wallet</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">OpenClaw 原生安全加密钱包，基于 TEE 分片架构。</p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-4">产品</h4>
              <ul className="space-y-2.5">
                <li><a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">功能介绍</a></li>
                <li><a href="/login" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">创建钱包</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-4">开发者</h4>
              <ul className="space-y-2.5">
                <li><a href="/docs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">API 文档</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-4">社区</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">Discord</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-500">
            <span>© 2026 Claw Wallet. Built for the OpenClaw ecosystem.</span>
            <span className="flex gap-2">
              <a href="/privacy" className="hover:text-gray-900 transition-colors no-underline">隐私政策</a>
              <span>·</span>
              <a href="/terms" className="hover:text-gray-900 transition-colors no-underline">服务条款</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
