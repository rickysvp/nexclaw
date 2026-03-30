'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Shield, 
  Lock, 
  FileText, 
  Server, 
  ArrowRight, 
  MessageSquare,
  TrendingUp,
  Zap,
  LayoutGrid,
  Copy,
  Check,
  Twitter
} from 'lucide-react';

const commandTags = [
  '创建新钱包并设置安全规则',
  '查询所有链上资产余额',
  '执行跨链转账到 Base',
  '设置每日转账限额 1000 USDC',
  '监控异常交易并告警',
  '批准这个 DeFi 合约交互',
  '查看钱包安全评分',
  '导出交易历史记录',
];

const features = [
  {
    icon: MessageSquare,
    label: '对话操作',
    title: '自然语言，一键执行',
    items: [
      '用对话创建和管理钱包',
      '查询余额、转账、查看历史',
      '设置安全规则和限额',
      'AI 自动执行链上操作',
    ],
  },
  {
    icon: Shield,
    label: '自托管安全',
    title: '你的钥匙，你的控制',
    items: [
      '私钥永不离开你的环境',
      '基于 TEE 的硬件级加密',
      '完全自主控制资产',
      '无需管理复杂助记词',
    ],
  },
  {
    icon: Lock,
    label: '智能风控',
    title: 'AI 驱动的安全防护',
    items: [
      '实时交易行为分析',
      '异常操作自动拦截',
      '自定义安全策略规则',
      '多维度风险评估',
    ],
  },
  {
    icon: LayoutGrid,
    label: '多链支持',
    title: '一个钱包，多条链',
    items: [
      '支持 20+ 主流区块链',
      '统一资产管理界面',
      '跨链操作无缝衔接',
      '自动识别代币类型',
    ],
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: '自托管架构',
    description: '私钥由你完全控制，Claw Wallet 永不持有你的私钥。你的资产，你的主权。',
  },
  {
    icon: Server,
    title: 'TEE 硬件加密',
    description: '基于 AWS Nitro Enclaves，私钥在隔离的安全飞地中处理，连我们都无法访问。',
  },
  {
    icon: Shield,
    title: '智能风控引擎',
    description: 'AI 实时分析交易模式，识别异常行为并自动拦截可疑操作，守护资产安全。',
  },
  {
    icon: FileText,
    title: '策略引擎',
    description: '自定义安全规则：交易限额、地址白名单、时间锁等，精准控制每一笔操作。',
  },
];

const investorLogos = [
  { name: 'OpenClaw', width: 100 },
  { name: 'Amber Group', width: 120 },
  { name: 'HashKey', width: 100 },
  { name: 'Dragonfly', width: 100 },
  { name: 'IOSG', width: 80 },
  { name: 'Folius', width: 80 },
];

const mediaLogos = [
  { name: 'BlockBeats', width: 100 },
  { name: 'Foresight', width: 100 },
  { name: 'PANews', width: 80 },
  { name: 'ChainCatcher', width: 100 },
];

const aiTools = [
  { name: 'OpenClaw', icon: '🦞' },
  { name: 'Claude', icon: '🟣' },
  { name: 'AutoGPT', icon: '⚡' },
  { name: 'LangChain', icon: '🔗' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText('claw install wallet');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F5F5DC] text-[#1A1A1A] overflow-x-hidden">
      {/* Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');
        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5DC]/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">🦞</span>
              <span className="text-xl font-semibold tracking-tight">Claw Wallet</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="text-black/70 hover:text-black transition-colors">Developers</a>
              <a href="#" className="text-black/70 hover:text-black transition-colors">Blog</a>
              <a href="#" className="text-black/70 hover:text-black transition-colors">FAQ</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium border border-black/20 rounded-full hover:bg-black/5 transition-colors"
            >
              <Twitter className="w-4 h-4" />
              Follow us on X
            </a>
            <a 
              href="#" 
              className="px-5 py-2.5 text-sm font-semibold bg-[#6B46C1] text-white rounded-full hover:bg-[#5A3AA8] transition-colors shadow-sm"
            >
              开始使用
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-6">
              <span className="block">让 AI Agent</span>
              <span className="block">拥有</span>
              <span className="block text-[#6B46C1] italic">安全的钱包</span>
            </h1>
            <p className="text-lg md:text-xl text-black/60 mb-8 max-w-xl leading-relaxed">
              专为 AI Agent 生态构建的安全加密钱包。自托管架构，你的私钥永远在你的控制之下。智能风控策略，让每一次链上操作都安全可控。
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B46C1] text-white font-semibold rounded-full hover:bg-[#5A3AA8] transition-colors border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                开始使用
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-black/20 text-black font-medium rounded-full hover:bg-black/5 transition-colors shadow-sm"
              >
                了解安全架构
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.15em] text-black/40 uppercase">
              <span>自托管架构</span>
              <span className="w-1 h-1 rounded-full bg-black/30" />
              <span>无私钥管理</span>
              <span className="w-1 h-1 rounded-full bg-black/30" />
              <span>智能风控</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Command Tags */}
      <section className="py-6 overflow-hidden border-y border-black/5 bg-[#F5F5DC]">
        <motion.div 
          className="flex gap-4"
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...commandTags, ...commandTags, ...commandTags, ...commandTags].map((tag, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 px-5 py-2.5 bg-[#F0EEE5] rounded-full text-sm text-black/70 whitespace-nowrap border border-black/10"
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Investors Section */}
      <section className="py-16 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium tracking-wider text-black/40 uppercase mb-10">
            合作伙伴
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {investorLogos.map((logo) => (
              <div 
                key={logo.name}
                className="h-8 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity"
                style={{ width: logo.width }}
              >
                <span className="text-sm font-semibold text-black/70 tracking-wide">{logo.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-black/20 rounded-full hover:bg-black/5 transition-colors"
            >
              成为合作伙伴
              <span className="text-[#6B46C1]">联系我们</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section - 专为 Agent 设计的安全钱包 */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] mb-12">
            <span className="block">专为 Agent 设计的</span>
            <span className="block text-[#6B46C1] italic">安全钱包</span>
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {features.map((feature, idx) => (
              <button
                key={feature.label}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === idx 
                    ? 'bg-[#1A1A1A] text-white' 
                    : 'bg-black/5 text-black/70 hover:bg-black/10'
                }`}
              >
                <feature.icon className="w-4 h-4" />
                {feature.label}
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{features[activeTab].title}</h3>
              <ul className="space-y-4">
                {features[activeTab].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-black/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A89F4B] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Demo Chat Interface */}
            <div className="bg-white rounded-2xl shadow-lg border border-black/5 overflow-hidden">
              <div className="px-4 py-3 border-b border-black/5 flex items-center gap-2 bg-white">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
              <div className="p-6 space-y-4 bg-[#FAFAF8]">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6B46C1] flex items-center justify-center text-sm flex-shrink-0">🦞</div>
                  <div className="bg-[#F5F5DC] rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-black/80">创建新钱包并设置安全规则</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#1A1A1A] rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-white/90">查询我的 ETH 和 USDC 余额</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6B46C1] flex items-center justify-center text-sm flex-shrink-0">🦞</div>
                  <div className="bg-[#F5F5DC] rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-black/80">已为您查询到以下资产余额：</p>
                    <div className="mt-3 p-3 bg-white rounded-xl border border-black/5">
                      <div className="flex justify-between text-xs text-black/50 mb-1">
                        <span>代币</span>
                        <span>余额</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">ETH</span>
                        <span className="font-semibold">2.45 ETH</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">USDC</span>
                        <span className="font-semibold">1,250 USDC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-medium tracking-wider text-white/40 uppercase mb-4 block">三步开始使用</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-6">
              简单三步，让 Agent 拥有安全钱包
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              无需复杂配置，无需管理助记词，通过自然语言对话即可完成所有操作。
            </p>
          </div>

          {/* Steps Demo */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#6B46C1]/20 flex items-center justify-center mb-4">
                  <span className="text-xl">1️⃣</span>
                </div>
                <h4 className="font-semibold mb-2">创建钱包</h4>
                <p className="text-sm text-white/50">"帮我创建一个安全钱包" → 自动生成，无需助记词</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#6B46C1]/20 flex items-center justify-center mb-4">
                  <span className="text-xl">2️⃣</span>
                </div>
                <h4 className="font-semibold mb-2">设置安全规则</h4>
                <p className="text-sm text-white/50">"设置每日转账限额 1000 USDC" → 自定义风控策略</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#6B46C1]/20 flex items-center justify-center mb-4">
                  <span className="text-xl">3️⃣</span>
                </div>
                <h4 className="font-semibold mb-2">开始使用</h4>
                <p className="text-sm text-white/50">"查询余额" / "转账" / "查看交易历史" → 自然语言操作</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-medium tracking-wider text-black/40 uppercase mb-4 block">安全架构</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-6">
                安全至上，层层防护
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-6">
                AI Agent 和加密资产是高价值目标。Claw Wallet 从设计之初就将安全作为核心，采用企业级安全架构保护你的资产。
              </p>
              <p className="text-black/60 leading-relaxed">
                不同于其他方案将私钥交给 Agent 并希望一切安好，Claw Wallet 采用<span className="font-semibold text-black">自托管架构</span>，私钥永远在你的控制之下。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F5DC] flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-[#6B46C1]" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-black/60 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent Integration Section */}
      <section className="py-24 px-6 bg-[#F0EEE5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium tracking-wider text-black/40 uppercase mb-4 block">Agent 集成</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-6">
                给你的 Agent 一个安全的钱包
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-8">
                通过简单的 Skill 安装，你的 AI Agent 就能拥有完整的钱包能力：查询余额、执行转账、管理资产，一切都在安全可控的环境中完成。
              </p>

              {/* Install Command Block */}
              <div className="bg-[#1A1A1A] rounded-xl overflow-hidden font-mono text-sm">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#252525]">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                </div>
                <div className="p-5 overflow-x-auto">
                  <pre className="text-white/90 leading-relaxed">
                    <code>{`# 在 OpenClaw 中安装 Claw Wallet
claw install wallet

# 创建钱包
"帮我创建一个安全钱包"

# 开始使用
"查询我的 ETH 余额"
"转账 100 USDC 到 0x..."
"设置每日限额 1000 USDC"`}</code>
                  </pre>
                </div>
              </div>

              <button
                onClick={copyCommand}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? '已复制!' : '复制安装命令'}
              </button>
            </div>

            <div>
              <p className="text-sm font-medium tracking-wider text-black/40 uppercase mb-6 text-center">
                支持主流 AI Agent 平台
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {aiTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-black/5 shadow-sm"
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 px-5 py-3 bg-white/50 rounded-full border border-black/5">
                  <span className="text-black/40 font-medium">+ 更多</span>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#6B46C1] font-medium hover:underline"
                >
                  查看集成文档
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen In Section */}
      <section className="py-16 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium tracking-wider text-black/40 uppercase mb-10">
            媒体报道
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {mediaLogos.map((logo) => (
              <div 
                key={logo.name}
                className="h-6 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity"
                style={{ width: logo.width }}
              >
                <span className="text-sm font-semibold text-black/70">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8">
            让 AI Agent 拥有<span className="italic text-[#6B46C1]">安全钱包</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B46C1] text-white font-semibold rounded-full hover:bg-[#5A3AA8] transition-colors shadow-sm text-lg"
          >
            开始使用 Claw Wallet
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-[#F0EEE5]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-3">订阅产品更新</h3>
            <p className="text-black/60 mb-6">获取 Claw Wallet 最新功能和安全更新，直达你的邮箱。</p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 rounded-full border border-black/10 bg-white focus:outline-none focus:border-black/30 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#6B46C1] text-white font-medium rounded-full hover:bg-[#5A3AA8] transition-colors text-sm whitespace-nowrap"
              >
                订阅
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🦞</span>
                <span className="text-xl font-semibold">Claw Wallet</span>
              </a>
              <p className="text-sm text-black/50 max-w-xs">
                专为 AI Agent 构建的安全加密钱包。自托管、无私钥管理、智能风控。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">资源</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">关注我们</a></li>
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">开发文档</a></li>
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">博客</a></li>
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">常见问题</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">法律</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">使用条款</a></li>
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">隐私政策</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black/40">© 2026 Claw Wallet. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-black/40 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
