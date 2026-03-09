"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  Cpu,
  Globe,
  ChevronDown,
  ChevronUp,
  Bot,
  Package,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const installCommand = "npx clawhub@latest install clawwallet";

const features = [
  {
    icon: Shield,
    title: "TEE 安全架构",
    description: "基于 AWS Nitro Enclaves 的硬件级安全隔离，私钥永不离开安全环境",
  },
  {
    icon: Zap,
    title: "3 秒极速创建",
    description: "无私钥，无需复杂配置，一行命令即刻生成可用钱包",
  },
  {
    icon: Layers,
    title: "多链原生支持",
    description: "Ethereum、Polygon、BSC、Arbitrum 等主流公链一键切换",
  },
];

const stats = [
  { value: "10K+", label: "已部署钱包" },
  { value: "99.9%", label: "安全运行时间" },
  { value: "50+", label: "企业客户" },
  { value: "4", label: "支持公链" },
];

const detailedFeatures = [
  {
    icon: Lock,
    title: "无私钥恢复",
    description: "通过 OpenClaw 账户安全恢复，告别私钥丢失风险",
  },
  {
    icon: Cpu,
    title: "硬件级安全",
    description: "AWS Nitro Enclaves 提供银行级安全保障",
  },
  {
    icon: Globe,
    title: "全球节点",
    description: "分布式节点网络，确保交易快速确认",
  },
  {
    icon: Bot,
    title: "AI 原生集成",
    description: "专为 AI Agent 设计，自然语言即可操控",
  },
];

const faqs = [
  {
    question: "ClawWallet 是什么？",
    answer: "ClawWallet 是专为 OpenClaw AI Agent 设计的原生加密钱包 Skill。通过简单的命令安装，即可为您的 AI Agent 添加安全的多链钱包能力。",
  },
  {
    question: "如何安装 ClawWallet？",
    answer: "只需在终端运行命令 npx clawhub@latest install clawwallet，或直接向 OpenClaw 发送'安装 clawwallet'即可自动完成部署。",
  },
  {
    question: "我的资产安全吗？",
    answer: "绝对安全。ClawWallet 采用 AWS Nitro Enclaves TEE 技术，私钥在硬件安全环境中生成和存储，连我们自己也无法访问。",
  },
  {
    question: "支持哪些区块链？",
    answer: "目前支持 Ethereum、Polygon、BSC、Arbitrum 等主流公链，未来将持续添加更多网络支持。",
  },
  {
    question: "需要私钥吗？",
    answer: "不需要。ClawWallet 通过 OpenClaw 账户体系安全管理，无需管理复杂的私钥，也不会有私钥丢失的风险。",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-5"
        >
          <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function LandingPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
                <Wallet className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-sm">ClawWallet</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200">
              <Package className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-orange-600 text-xs font-medium">Powered By OpenClaw</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
                ClawWallet
                <br />
                <span className="text-orange-500">专为 AI Agent 打造的原生加密钱包</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                一行命令，为您的 AI Agent 部署安全的多链钱包。
                <br className="hidden sm:block" />
                原生集成，TEE 硬件级安全，无私钥。
              </p>
            </div>

            {/* Install Command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="pt-4"
            >
              <div className="inline-flex items-center gap-2 px-2 py-2 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl shadow-black/20">
                <code className="text-sm text-gray-300 font-mono px-4">{installCommand}</code>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-900 hover:bg-gray-100"
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
                      复制
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">
                复制后发送给 OpenClaw 即可自动安装
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Social Proof */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">核心特性</h2>
            <p className="text-gray-500">为 AI Agent 打造的专业级钱包解决方案</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                企业级安全保障
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                采用与银行、金融机构同级别的安全技术，
                确保您的数字资产始终处于最高级别的保护之下。
              </p>
              <div className="space-y-6">
                {detailedFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-12 h-12 text-orange-500" />
                  </div>
                  <p className="text-gray-600 font-medium">TEE 安全隔离</p>
                  <p className="text-gray-400 text-sm mt-1">Hardware Security</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usage Example Section - Second Screen */}
      <section className="py-20 bg-[#fafafa] border-t border-gray-100 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">原生集成，开箱即用</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                作为 OpenClaw 原生 Skill，安装后即刻拥有钱包能力。
                无需额外配置，通过自然语言即可操控您的加密资产。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Terminal className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium text-sm mb-0.5">创建钱包</h4>
                    <code className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">@openclaw 创建以太坊钱包</code>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wallet className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium text-sm mb-0.5">查询余额</h4>
                    <code className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">@openclaw 查询我的钱包余额</code>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium text-sm mb-0.5">发送交易</h4>
                    <code className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">@openclaw 发送 0.1 ETH 到 0x...</code>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-white">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <span className="text-gray-400 text-xs ml-2">OpenClaw</span>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs">👤</div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 text-gray-700 text-sm shadow-sm border border-gray-100">
                      @openclaw 创建一个以太坊钱包
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 text-gray-700 text-sm shadow-sm border border-gray-100 space-y-1">
                      <p>✅ 钱包创建成功！</p>
                      <p className="font-mono text-xs text-gray-400">
                        地址: 0x7a2f...9c4d<br/>
                        UID: claw_wallet_abc123
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">常见问题</h2>
            <p className="text-gray-500">关于 ClawWallet 的常见问题解答</p>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              为您的 OpenClaw 部署原生钱包
            </h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              复制下方命令，发送给 OpenClaw，3 秒完成部署
            </p>
            
            {/* Install Command in CTA */}
            <div className="inline-flex items-center gap-2 px-2 py-2 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl mb-6">
              <code className="text-sm text-gray-300 font-mono px-4">{installCommand}</code>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-900 hover:bg-gray-100"
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
                    复制
                  </>
                )}
              </button>
            </div>
            
            <p className="text-gray-400 text-sm">
              免费开始使用 · 无需信用卡 · 3 秒完成部署
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-orange-500 flex items-center justify-center">
                <Wallet className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-600 text-sm">Claw Wallet</span>
            </div>
            <p className="text-gray-400 text-xs">
              © 2026 Claw Wallet. OpenClaw 原生安全加密钱包
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
