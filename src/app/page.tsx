'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Clock, Lock, Check, ChevronDown, Star, Globe, Wallet, Cpu, Layers, MessageSquare, Code, Server, Fingerprint } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChainIcon, chainList } from "@/components/icons/ChainIcons";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Logo Component
const ClawLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <img 
    src="/claw.png" 
    alt="Claw Wallet"
    className={className}
  />
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 h-16 border-b border-gray-200 bg-white/85 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5 text-gray-900 font-bold text-base no-underline">
          <ClawLogo className="w-7 h-7" />
          <span>Claw Wallet</span>
        </Link>
        <ul className="hidden md:flex gap-0 list-none">
          <li><a href="#features" className="block px-4 h-16 leading-[64px] text-gray-500 text-sm no-underline hover:text-gray-900 transition-colors">功能</a></li>
          <li><a href="#howitworks" className="block px-4 h-16 leading-[64px] text-gray-500 text-sm no-underline hover:text-gray-900 transition-colors">流程</a></li>
          <li><a href="#security" className="block px-4 h-16 leading-[64px] text-gray-500 text-sm no-underline hover:text-gray-900 transition-colors">安全</a></li>
          <li><a href="#pricing" className="block px-4 h-16 leading-[64px] text-gray-500 text-sm no-underline hover:text-gray-900 transition-colors">定价</a></li>
          <li><a href="/docs" className="block px-4 h-16 leading-[64px] text-gray-500 text-sm no-underline hover:text-gray-900 transition-colors">文档</a></li>
        </ul>
        <div className="flex items-center gap-2.5">
          <Link href="/login" className="hidden sm:block px-4 py-1.5 rounded-md border border-gray-300 text-gray-900 text-sm font-medium no-underline hover:bg-gray-100 transition-colors">
            登录
          </Link>
          <Link href="/login" className="px-4 py-1.5 rounded-md bg-[#FF4D2E] text-white text-sm font-semibold no-underline hover:bg-[#FF6B47] transition-colors">
            免费创建钱包
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen border-b border-gray-200 pt-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FF4D2E]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF4D2E]/3 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E]">
                <span className="w-6 h-px bg-[#FF4D2E]"></span>
                专为 OpenClaw Agent 构建
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-gray-900">
                Agent 时代的<br />
                <span className="text-[#FF4D2E]">Web3 加密钱包</span>
              </h1>

              <p className="text-base lg:text-lg leading-relaxed text-gray-500 max-w-md">
                用户一键登录即可创建钱包，通过精细权限管控授权给 OpenClaw Agent 自主执行链上操作。TEE 分片加密，安全、可控、多链支持。
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {['20+ 区块链', 'TEE 硬件加密', '<2s 创建', 'AWS 云服务'].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-md bg-gray-100 border border-gray-200 text-xs text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="/login"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gray-900 text-white text-base font-bold no-underline hover:bg-gray-800 transition-colors border border-gray-900"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  免费创建钱包 <ArrowRight className="h-5 w-5" />
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-8 lg:gap-10 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl lg:text-[1.6rem] font-extrabold tracking-[-0.02em] text-gray-900">20<span className="text-[#FF4D2E]">+</span></div>
                  <div className="text-xs text-gray-500 mt-1 tracking-wide">支持区块链</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-[1.6rem] font-extrabold tracking-[-0.02em] text-gray-900">TEE</div>
                  <div className="text-xs text-gray-500 mt-1 tracking-wide">分片安全架构</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-[1.6rem] font-extrabold tracking-[-0.02em] text-gray-900">&lt;2<span className="text-[#FF4D2E]">s</span></div>
                  <div className="text-xs text-gray-500 mt-1 tracking-wide">钱包创建耗时</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-[1.6rem] font-extrabold tracking-[-0.02em] text-gray-900">AWS</div>
                  <div className="text-xs text-gray-500 mt-1 tracking-wide">TEE 云服务</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Wallet Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Glow Effect */}
              <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,77,46,0.08)_0%,transparent_70%)] pointer-events-none"></div>

              <div className="relative bg-gray-50 border border-gray-300 rounded-[20px] p-7 overflow-hidden">
                {/* Top gloss line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                    <span className="w-1.5 h-1.5 bg-[#FF4D2E] rounded-full"></span>
                    Claw Wallet · 主账户
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-100 border border-green-200 px-2.5 py-1 rounded-full">
                    <span className="w-1 h-1 bg-green-600 rounded-full animate-pulse"></span>
                    已连接
                  </div>
                </div>

                <div className="text-xs text-gray-500 tracking-wider uppercase mb-1">总资产估值</div>
                <div className="text-[2.2rem] font-extrabold tracking-[-0.03em] text-gray-900 mb-1">$12,450.80</div>
                <div className="text-xs text-green-600 mb-5">↑ +$384.20 今日 (+3.2%)</div>

                <div className="flex justify-between items-center bg-gray-100 border border-gray-200 rounded-lg px-3.5 py-2.5 font-mono text-xs text-gray-500 mb-5">
                  <span>0x3a4f · · · 8e2c</span>
                  <span className="text-[#FF4D2E] cursor-pointer text-[10px] font-sans">COPY</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-5">
                  <div className="py-2.5 rounded-lg text-center text-xs font-semibold bg-[#FF4D2E]/10 text-[#FF4D2E] border border-[#FF4D2E]/20 cursor-pointer hover:bg-[#FF4D2E]/20 transition-colors">↑ 发送</div>
                  <div className="py-2.5 rounded-lg text-center text-xs font-semibold bg-green-100 text-green-600 border border-green-200 cursor-pointer hover:bg-green-200 transition-colors">↓ 接收</div>
                  <div className="py-2.5 rounded-lg text-center text-xs font-semibold bg-gray-100 text-gray-900 border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors">⚙ Agent</div>
                </div>

                <div className="h-px bg-gray-200 my-5"></div>

                <div className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-3">已授权 Agent</div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 border border-gray-200 mb-2 hover:border-[#FF4D2E]/30 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-[#FF4D2E] flex items-center justify-center text-sm flex-shrink-0">🤖</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate text-gray-900">DeFi Strategy Agent</div>
                    <div className="text-[11px] text-gray-500 truncate">日限额 $500 · ETH + SOL</div>
                  </div>
                  <div className="w-9 h-5 rounded-full bg-[#FF4D2E] relative flex-shrink-0">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 border border-gray-200 opacity-50 hover:opacity-80 transition-opacity cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-sm flex-shrink-0">🔄</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate text-gray-900">Auto Rebalance Agent</div>
                    <div className="text-[11px] text-gray-500 truncate">日限额 $200 · Base + ARB</div>
                  </div>
                  <div className="w-9 h-5 rounded-full bg-gray-200 relative flex-shrink-0">
                    <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
              核心功能
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              为 AI Agent 原生设计的加密钱包
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              专为 OpenClaw 生态构建，支持人类用户与 AI Agent 的协同链上操作。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
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
                className="bg-white p-8 lg:p-9 hover:bg-gray-50 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="text-xs font-bold text-[#FF4D2E] tracking-wider mb-5 font-mono">{feat.num}</div>
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">{feat.icon}</div>
                <h3 className="text-base font-bold mb-2 tracking-tight text-gray-900">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="py-24 lg:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
              使用流程
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              三步完成 Agent 钱包部署
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              从用户登录到 Agent 自主链上操作，整个过程不超过 5 分钟。
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#FF4D2E]/50 to-transparent"></div>

            {[
              { num: "01", title: "用户登录创建", desc: "通过社交账号或邮箱登录，Claw Wallet 自动生成 TEE 钱包并绑定至用户身份，全程无私钥暴露", active: true },
              { num: "02", title: "配置 Agent 权限", desc: "在控制台选择要授权的 OpenClaw Agent，精细设置操作链范围、资金限额与合约白名单", active: false },
              { num: "03", title: "Agent 自主执行", desc: "OpenClaw Agent 通过 Skill 接口调用钱包，在授权范围内自主完成 DeFi、支付、跨链等链上操作", active: false },
              { num: "04", title: "实时监控管理", desc: "用户随时在 Dashboard 查看 Agent 操作历史，一键暂停授权，完全掌控资产安全", active: false },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="relative text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className={`w-16 h-16 rounded-full border flex items-center justify-center text-sm font-bold font-mono mb-6 relative z-10 mx-auto lg:mx-0 transition-all duration-300 ${step.active ? 'bg-[#FF4D2E] border-[#FF4D2E] text-white shadow-[0_0_30px_rgba(255,77,46,0.3)]' : 'bg-gray-50 border-gray-300 text-gray-500'}`}>
                  {step.num}
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed lg:pr-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section - Inspired by Clawdi */}
      <section className="py-24 lg:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
              生态集成
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              20+ 区块链，一键连接
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              即刻连接您喜爱的链。您的 Agent 可跨所有主流链工作 — 无需自定义配置。
            </p>
          </motion.div>

          {/* Chain Icons Grid */}
          <motion.div 
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
            <motion.div
              className="aspect-square flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#FF4D2E]/30 hover:bg-gray-100 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: chainList.length * 0.02 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl text-gray-500">+</span>
              <span className="text-[10px] text-gray-500 text-center truncate w-full">更多</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-b border-gray-200">
        <div className="grid md:grid-cols-3 gap-px bg-gray-200">
          {[
            { quote: "Claw Wallet 是目前唯一真正为 OpenClaw Agent 设计的钱包方案，TEE 分片架构让我对 Agent 自主操作资金完全放心。", handle: "@zhang_defi · DeFi 开发者", avatar: "Z" },
            { quote: "从创建钱包到给 Agent 授权只花了 3 分钟，权限粒度控制得很好，日限额 + 合约白名单设计非常专业。", handle: "@liwei_eth · 量化策略工程师", avatar: "L" },
            { quote: "我们的 OpenClaw Agent 每天自动执行几十笔链上操作，Claw Wallet 的审计日志让整个过程完全透明可追溯。", handle: "@alex_protocol · 协议创始人", avatar: "A" },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 hover:bg-gray-50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <p className="text-sm leading-relaxed text-gray-700 mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                  {t.avatar}
                </div>
                <span className="text-xs text-gray-500">{t.handle}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-24 lg:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
              安全架构
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              企业级安全，Agent 操作零风险
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Claw Wallet 采用多层防护体系，确保 Agent 每一次链上操作都在用户完全掌控之内。
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Security List */}
            <div className="space-y-0">
              {[
                { num: "01", title: "TEE 可信执行环境分片", desc: "基于 AWS Nitro Enclaves 可信执行环境，私钥在 AWS 硬件级隔离飞地内分片加密，充分利用 Amazon 云服务器的安全合规能力。" },
                { num: "02", title: "交易策略引擎拦截", desc: "每笔 Agent 发起的交易在广播前经过五重安全过滤：金额上限校验、目标合约白名单、操作频率限制、交易审批流程、实时安全风控。" },
                { num: "03", title: "大额交易二次确认", desc: "超过用户设定阈值的交易将触发推送通知，要求用户在 App 或邮件中二次授权方可广播。" },
                { num: "04", title: "链上合约实时扫描", desc: "集成 Bitslab Safe 安全 API，Agent 发起交互前自动扫描目标合约风险评分与漏洞特征，高风险合约自动拦截告警。" },
                { num: "05", title: "端到端加密通信", desc: "OpenClaw Agent 与 Claw Wallet 之间所有通信均经过 TLS 1.3 + 消息级签名双重加密，防中间人攻击。" },
              ].map((sec, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-5 py-6 border-b border-gray-200 first:border-t hover:bg-gray-50 transition-colors px-2 -mx-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="text-xs font-bold text-[#FF4D2E] font-mono pt-1 w-6 flex-shrink-0">{sec.num}</div>
                  <div>
                    <h4 className="text-base font-bold mb-1.5 text-gray-900">{sec.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{sec.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Security Visual */}
            <motion.div
              className="bg-gray-50 border border-gray-300 rounded-[20px] p-9 relative overflow-hidden lg:sticky lg:top-24 h-fit"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-6">安全认证与审计</div>

              <div className="text-center py-8 relative">
                <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[#FF4D2E]/20 animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-5 rounded-full border border-gray-200 animate-[spin_7s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-10 rounded-full border border-[#FF4D2E]/30 animate-[spin_5s_linear_infinite]"></div>
                  <div className="text-3xl relative z-10">🛡️</div>
                </div>
                <div className="text-sm text-gray-500 mb-1">硬件级安全保障</div>
                <div className="text-xs text-gray-400">AWS Nitro Enclaves · TEE · Hardware Isolated</div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded bg-gray-100 border border-[#FF4D2E]/30 text-[#FF4D2E]">AWS Nitro TEE</span>
                <span className="text-xs px-3 py-1.5 rounded bg-gray-100 border border-[#FF4D2E]/30 text-[#FF4D2E]">Bitslab Safe</span>
                <span className="text-xs px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-gray-500">Bitslab 审计</span>
                <span className="text-xs px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-gray-500">GDPR 合规</span>
                <span className="text-xs px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-gray-500">开源可验证</span>
                <span className="text-xs px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-gray-500">端对端加密</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agent Roles Section - Inspired by Clawdi */}
      <section className="py-24 lg:py-32 border-b border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4D2E]/5 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
              Agent 能力
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              一个钱包，胜任所有场景
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              您的完整 Web3 AI 团队。从 DeFi 交易到资产管理，Claw Wallet 让 Agent 安全处理一切链上操作。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                icon: "📈", 
                title: "DeFi 交易员", 
                desc: "自动执行 Swap、流动性挖矿、收益聚合，24/7 监控市场机会",
                tags: ["DEX 交易", "收益 farming", "自动复利"]
              },
              { 
                icon: "💼", 
                title: "资产管理员", 
                desc: "跨链资产配置、再平衡、风险监控，保持投资组合最优状态",
                tags: ["跨链桥接", "资产再平衡", "风险评估"]
              },
              { 
                icon: "🛡️", 
                title: "安全审计员", 
                desc: "每笔交易前自动扫描合约风险，拦截可疑操作，保护资产安全",
                tags: ["合约扫描", "风险评分", "异常拦截"]
              },
              { 
                icon: "📊", 
                title: "数据分析师", 
                desc: "追踪链上数据、生成收益报告、监控 Gas 费用，提供数据洞察",
                tags: ["链上分析", "收益报告", "Gas 优化"]
              },
              { 
                icon: "🤝", 
                title: "支付助理", 
                desc: "处理定期付款、薪资发放、订阅管理，支持多币种批量转账",
                tags: ["定期支付", "批量转账", "多币种"]
              },
              { 
                icon: "🔍", 
                title: "链上研究员", 
                desc: "追踪新项目、监控空投机会、分析代币经济，主动呈现研究结果",
                tags: ["空投追踪", "项目调研", "代币分析"]
              },
            ].map((role, idx) => (
              <motion.div
                key={idx}
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#FF4D2E]/30 transition-all duration-300 hover:bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
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

      {/* Pricing Section */}
      <section id="pricing" className="py-24 lg:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
              定价方案
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              按需选择，随时升级
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              从个人用户到企业级 Agent 部署，均有合适方案，免费版即可开始使用。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
            {[
              {
                label: "免费版",
                price: "$0",
                per: "/月",
                desc: "适合个人用户与初步探索 OpenClaw 生态",
                features: ["5 个 TEE 钱包", "支持 5 条链", "授权 2 个 Agent", "每日操作限额 $100", "基础审计日志（7天）"],
                btn: "免费开始",
                featured: false
              },
              {
                label: "Pro 版 · 最受欢迎",
                price: "$9.9",
                per: "/月",
                desc: "适合活跃 DeFi 用户与 OpenClaw Agent 开发者",
                features: ["15 个 TEE 钱包", "全部 20+ 链支持", "授权不限数量 Agent", "每日操作限额 $10,000", "完整审计日志（90天）", "大额交易二次确认", "优先技术支持"],
                btn: "升级 Pro",
                featured: true
              },
              {
                label: "企业版",
                price: "定制",
                per: " 报价",
                desc: "适合机构、协议方与大型 Agent 自动化系统",
                features: ["无限钱包 & Agent 授权", "自定义策略引擎规则", "私有化部署选项", "专属 OpenClaw Skill 集成", "SLA 保障 + 24/7 支持", "审计日志永久留存"],
                btn: "联系我们",
                featured: false
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                className={`p-8 lg:p-10 relative ${plan.featured ? 'bg-gray-50' : 'bg-white'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {plan.featured && <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#FF4D2E]"></div>}
                <div className={`text-xs font-bold tracking-wider uppercase mb-4 ${plan.featured ? 'text-[#FF4D2E]' : 'text-gray-500'}`}>{plan.label}</div>
                <div className="text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] mb-1 text-gray-900">{plan.price}<sub className="text-base font-normal text-gray-500 ml-1">{plan.per}</sub></div>
                <div className="text-sm text-gray-500 mb-6 leading-relaxed">{plan.desc}</div>
                <div className="h-px bg-gray-200 mb-6"></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="text-[#FF4D2E] text-xs">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 rounded-lg font-bold text-sm transition-colors ${plan.featured ? 'bg-[#FF4D2E] text-white hover:bg-[#FF6B47]' : 'border border-gray-300 text-gray-900 hover:bg-gray-100'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.btn}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#FF4D2E] mb-5">
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
              常见问题
              <span className="w-4 h-px bg-[#FF4D2E]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-[-0.03em] leading-tight text-gray-900 mb-4">
              还有问题？这里解答
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "Claw Wallet 如何保护我的私钥安全？", a: "您的私钥在 AWS Nitro Enclaves 可信执行环境内分片加密，密钥运算在硬件级隔离飞地内完成，原始密钥对外完全不可见。" },
              { q: "Agent 可以执行哪些操作？", a: "Agent 可以在您授权的范围内执行 DeFi 交易、跨链转账、收益聚合等操作。您可以设置每日限额、合约白名单等安全规则。" },
              { q: "如何撤销 Agent 的授权？", a: "您可以随时在 Dashboard 中一键暂停或撤销任何 Agent 的授权，所有操作立即生效。" },
              { q: "支持哪些区块链？", a: "目前支持 Ethereum、Solana、Base、Arbitrum、Optimism、Polygon 等 20+ 主流区块链，持续增加中。" },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <h3 className="text-base font-bold mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs text-gray-500 mb-6">
              ⚡ 3 分钟内部署完成
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] leading-tight mb-5 text-gray-900">
              立即为你的 Agent<br />部署专属钱包
            </h2>
            <p className="text-base text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
              加入正在使用 Claw Wallet 的 OpenClaw 开发者社区，让你的 AI Agent 安全执行每一笔链上操作。
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <motion.a
                href="/login"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gray-900 text-white text-base font-bold no-underline hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                免费创建钱包 <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
            <p className="text-xs text-gray-400 mt-6">
              无需信用卡，免费开始使用
            </p>
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
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                OpenClaw 原生安全加密钱包，基于 TEE 分片架构。
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-4">产品</h4>
              <ul className="space-y-2.5">
                <li><a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">功能介绍</a></li>
                <li><a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">定价方案</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">更新日志</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">产品路线图</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-4">开发者</h4>
              <ul className="space-y-2.5">
                <li><a href="/docs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">API 文档</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">Skill SDK</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">示例代码</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-4">社区</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">Discord</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">Twitter / X</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">Telegram</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">博客</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-500">
            <span>© 2026 Claw Wallet. Built for the OpenClaw ecosystem.</span>
            <span className="flex gap-2">
              <a href="/privacy" className="hover:text-gray-900 transition-colors no-underline">隐私政策</a>
              <span>·</span>
              <a href="/terms" className="hover:text-gray-900 transition-colors no-underline">服务条款</a>
              <span>·</span>
              <a href="#" className="hover:text-gray-900 transition-colors no-underline">安全漏洞报告</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
