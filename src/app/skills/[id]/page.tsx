'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  Github,
  Star
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

// Color Palette
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

// Mock skill data
const skillsData = [
  { id: '1', title: 'DeFi 助手', author: 'Claw Team', description: '帮助你的 AI Agent 管理 DeFi 资产，包括流动性挖矿、借贷、收益优化等功能。', command: 'claw install defi-assistant', stars: 5, installs: 12500, github: 'https://github.com/clawwallet/defi-assistant', features: ['流动性挖矿', '智能借贷', '收益优化', '风险监控'], tags: ['DeFi', '收益', '自动化'] },
  { id: '2', title: 'NFT 管理', author: 'CryptoDev', description: '让你的 AI Agent 能够管理和交易 NFT，包括 NFT 发现、估值和交易执行。', command: 'claw install nft-manager', stars: 4, installs: 8750, github: 'https://github.com/cryptodev/nft-manager', features: ['NFT 发现', '自动估值', '交易执行', '收藏管理'], tags: ['NFT', '交易', '管理'] },
  { id: '3', title: '链上分析', author: 'BlockchainPro', description: '提供实时链上数据分析，帮助你的 AI Agent 做出更明智的投资决策。', command: 'claw install chain-analyzer', stars: 5, installs: 15200, github: 'https://github.com/blockchainpro/chain-analyzer', features: ['实时数据分析', '趋势预测', '智能警报', '多链支持'], tags: ['分析', '数据', '预测'] },
  { id: '4', title: '智能交易', author: 'TradingBot', description: '为你的 AI Agent 提供智能交易策略，包括趋势跟踪、套利和风险管理。', command: 'claw install smart-trader', stars: 4, installs: 9800, github: 'https://github.com/tradingbot/smart-trader', features: ['趋势跟踪', '自动套利', '风险管理', '策略优化'], tags: ['交易', '策略', '自动化'] },
  { id: '5', title: '钱包监控', author: 'SecurityGuru', description: '实时监控你的钱包活动，提供安全警报和异常检测。', command: 'claw install wallet-monitor', stars: 5, installs: 18300, github: 'https://github.com/securityguru/wallet-monitor', features: ['实时监控', '异常检测', '安全警报', '风险评估'], tags: ['安全', '监控', '警报'] },
  { id: '6', title: '跨链桥接', author: 'BridgeMaster', description: '简化跨链资产转移，为你的 AI Agent 提供安全高效的跨链解决方案。', command: 'claw install cross-bridge', stars: 4, installs: 7650, github: 'https://github.com/bridgemaster/cross-bridge', features: ['多链支持', '安全桥接', '费用优化', '状态跟踪'], tags: ['跨链', '桥接', '资产转移'] },
  { id: '7', title: '质押管理', author: 'StakingExpert', description: '优化你的质押策略，最大化收益并管理质押风险。', command: 'claw install staking-manager', stars: 5, installs: 11200, github: 'https://github.com/stakingexpert/staking-manager', features: ['收益优化', '风险管理', '自动复投', '多协议支持'], tags: ['质押', '收益', '管理'] },
  { id: '8', title: '套利机器人', author: 'ArbitragePro', description: '自动发现和执行套利机会，为你的 AI Agent 创造额外收益。', command: 'claw install arbitrage-bot', stars: 4, installs: 6800, github: 'https://github.com/arbitragepro/arbitrage-bot', features: ['机会发现', '自动执行', '风险控制', '收益分析'], tags: ['套利', '自动化', '收益'] },
  { id: '9', title: '市场预测', author: 'AI Analyst', description: '基于 AI 的市场预测工具，帮助你的 AI Agent 预测价格趋势。', command: 'claw install market-prediction', stars: 5, installs: 13400, github: 'https://github.com/aianalyst/market-prediction', features: ['价格预测', '趋势分析', '情绪分析', '多因子模型'], tags: ['预测', 'AI', '分析'] },
  { id: '10', title: '安全审计', author: 'AuditMaster', description: '为你的智能合约和交易提供安全审计，降低安全风险。', command: 'claw install security-audit', stars: 4, installs: 10500, github: 'https://github.com/auditmaster/security-audit', features: ['合约审计', '风险评估', '漏洞检测', '安全建议'], tags: ['安全', '审计', '风险'] }
];

// Components
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
    primary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5',
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

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode; variant?: 'default' | 'outline' | 'ghost'; className?: string }) => (
  <span 
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${ 
      variant === 'default' 
        ? 'bg-orange-50 text-orange-600 border border-orange-100' 
        : variant === 'ghost'
        ? 'bg-transparent text-neutral-500'
        : 'bg-white/80 backdrop-blur-sm border border-neutral-200 text-neutral-600'
    } ${className}`}
  >
    {children}
  </span>
);

export function generateStaticParams() {
  return skillsData.map((skill) => ({
    id: skill.id,
  }));
}

export default function SkillDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [skill, setSkill] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Find the skill by ID
    const foundSkill = skillsData.find(s => s.id === id);
    if (foundSkill) {
      setSkill(foundSkill);
    } else {
      // Redirect to 404 if skill not found
      router.push('/404');
    }
  }, [id, router]);

  const copyCommand = () => {
    if (skill) {
      navigator.clipboard.writeText(skill.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-neutral-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between bg-white/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg shadow-neutral-900/5">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-auto">
                <img src="/claw.png" alt="Claw" className="h-full w-auto object-contain" />
              </div>
            </a>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: '功能', href: '#features' },
                { label: '安全', href: '#security' },
                { label: '开发者', href: '#developer' },
                { label: 'Dashboard', href: '/dashboard' },
              ].map((item, i) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 rounded-xl hover:bg-neutral-100/80 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a 
              href="/dashboard" 
              className="px-5 py-2.5 text-sm font-medium bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:shadow-neutral-900/20"
            >
              开始使用
            </a>
          </div>
        </div>
      </nav>

      {/* Skill Detail Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.a 
            href="/" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 mb-8"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            返回技能列表
          </motion.a>

          {/* Skill Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{skill.title}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < skill.stars ? 'fill-current' : 'text-neutral-200'}`} />
                    ))}
                    <span className="text-sm text-neutral-500 ml-2">{skill.stars}.0</span>
                  </div>
                  <span className="text-sm text-neutral-500">作者: {skill.author}</span>
                  <span className="text-sm text-neutral-500">{skill.installs.toLocaleString()} 安装</span>
                </div>
                <p className="text-lg text-neutral-600 mb-6 max-w-3xl">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skill.tags.map((tag: string, index: number) => (
                    <Badge key={index}>{tag}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button size="lg" variant="primary" icon={Terminal}>
                  安装技能
                </Button>
                <Button size="lg" variant="outline" icon={Github}>
                  <a href={skill.github} target="_blank" rel="noopener noreferrer">
                    查看源码
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Installation Command */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 bg-neutral-50 rounded-2xl p-6 border border-neutral-100"
          >
            <h2 className="text-xl font-semibold mb-4">安装命令</h2>
            <div className="flex items-center gap-3">
              <div className="flex-1 flex items-center gap-3 px-5 py-4 bg-neutral-900 rounded-xl shadow-xl shadow-neutral-900/20">
                <Terminal className="w-4 h-4 text-orange-400" />
                <code className="text-white font-mono text-sm tracking-wide">{skill.command}</code>
              </div>
              <button
                onClick={copyCommand}
                className="px-4 py-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm"
              >
                {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-neutral-600" />}
              </button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6">核心功能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skill.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-100 hover:border-orange-100 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">{feature}</h3>
                    <p className="text-sm text-neutral-600">
                      为你的 AI Agent 提供{feature}功能，提升其在加密领域的能力。
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6">如何使用</h2>
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              <ol className="space-y-8">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">安装技能</h3>
                    <p className="text-sm text-neutral-600">
                      在 OpenClaw 中发送安装命令，让你的 AI Agent 获得该技能。
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">配置参数</h3>
                    <p className="text-sm text-neutral-600">
                      根据你的需求，配置技能的相关参数，如风险偏好、投资金额等。
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">开始使用</h3>
                    <p className="text-sm text-neutral-600">
                      通过自然语言指令，让你的 AI Agent 执行相关操作，如管理资产、执行交易等。
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Related Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">相关技能</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData
                .filter(s => s.id !== skill.id)
                .slice(0, 4)
                .map((relatedSkill) => (
                  <motion.div
                    key={relatedSkill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:border-neutral-200 transition-all p-6 cursor-pointer"
                    onClick={() => router.push(`/skills/${relatedSkill.id}`)}
                  >
                    <h3 className="font-semibold text-neutral-900 mb-2">{relatedSkill.title}</h3>
                    <p className="text-sm text-neutral-500 mb-3">作者: {relatedSkill.author}</p>
                    <p className="text-xs text-neutral-400 mb-4">安装数: {relatedSkill.installs.toLocaleString()}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Github className="w-4 h-4" />
                        <span>查看源码</span>
                      </div>
                      <div className="text-sm font-medium text-orange-500 flex items-center gap-1">
                        查看详情
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-neutral-100 bg-neutral-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-2.5 mb-5 group">
                <div className="relative h-10 w-auto">
                  <img src="/claw.png" alt="Claw" className="h-full w-auto object-contain" />
                </div>
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
              <span className="text-sm font-medium text-neutral-900 bg-neutral-100 px-3 py-1 rounded-full">v3.7.0</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
