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
  ChevronRight,
  Layers,
  ExternalLink,
  Sparkles,
  Bot,
  Shield,
  Package,
} from "lucide-react";
import Link from "next/link";

const installCommand = "npx clawhub@latest install clawwallet";

const agentPrompt = "安装 clawwallet skill，为我的 AI Agent 添加安全的多链钱包能力";

const deploySteps = [
  {
    number: "01",
    title: "复制命令",
    description: "复制下方命令",
    icon: Copy,
  },
  {
    number: "02",
    title: "发送给 OpenClaw",
    description: "粘贴到 OpenClaw 对话框",
    icon: Terminal,
  },
  {
    number: "03",
    title: "完成部署",
    description: "自动安装，立即使用",
    icon: Zap,
  },
];

const features = [
  {
    icon: Shield,
    title: "TEE 安全架构",
    description: "AWS Nitro Enclaves 硬件级隔离保护",
  },
  {
    icon: Zap,
    title: "3 秒创建",
    description: "无需助记词，即时生成可用钱包",
  },
  {
    icon: Layers,
    title: "多链支持",
    description: "Ethereum、Polygon、BSC、Arbitrum",
  },
];

export default function LandingPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"openclaw" | "manual">("openclaw");

  const handleCopy = async () => {
    const textToCopy = activeTab === "openclaw" ? agentPrompt : installCommand;
    await navigator.clipboard.writeText(textToCopy);
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
              <span className="text-gray-900 font-semibold text-sm">Claw Wallet</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200">
              <Package className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-orange-600 text-xs font-medium">OpenClaw 原生加密钱包</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
                复制命令
                <br />
                <span className="text-orange-500">发送给 OpenClaw</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                专为 OpenClaw 打造的原生加密钱包
                <br className="hidden sm:block" />
                一行命令，3 秒完成部署
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setActiveTab("openclaw")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "openclaw"
                    ? "bg-orange-500 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                自然语言
              </button>
              <button
                onClick={() => setActiveTab("manual")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "manual"
                    ? "bg-orange-500 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                命令行
              </button>
            </div>

            {/* Command Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-gray-500 text-xs ml-2">
                      {activeTab === "openclaw" ? "agent prompt" : "terminal"}
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-lg text-gray-300 text-xs font-medium transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        已复制
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        复制
                      </>
                    )}
                  </button>
                </div>

                {/* Command Content */}
                <div className="p-5 text-left">
                  <code className="text-emerald-400 text-sm font-mono">
                    {activeTab === "openclaw" ? agentPrompt : installCommand}
                  </code>
                </div>
              </div>
            </motion.div>

            {/* Footer Link */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <Bot className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500">还没有 OpenClaw?</span>
              <Link
                href="https://openclaw.ai"
                target="_blank"
                className="flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                立即创建
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deploy Steps Section */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {deploySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-2xl font-bold text-gray-100">{step.number}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </div>
                {index < deploySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-gray-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              为您的 OpenClaw 部署原生钱包
            </h2>
            <p className="text-gray-500 mb-8">
              复制上方命令，粘贴到 OpenClaw，3 秒完成部署
            </p>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold mx-auto transition-all ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  已复制命令
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  复制安装命令
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-orange-500 flex items-center justify-center">
                <Wallet className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-600 text-sm">Claw Wallet</span>
            </div>
            <p className="text-gray-400 text-xs">
              OpenClaw 原生安全加密钱包
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
