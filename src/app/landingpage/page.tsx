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
  Download,
  Package,
} from "lucide-react";
import Link from "next/link";

const installCommand = "npx clawhub@latest install clawwallet";

const deploySteps = [
  {
    number: "01",
    title: "安装 Skill",
    description: "运行命令一键安装",
    icon: Terminal,
  },
  {
    number: "02",
    title: "自动部署",
    description: "OpenClaw 自动完成配置",
    icon: Zap,
  },
  {
    number: "03",
    title: "立即使用",
    description: "开始创建安全钱包",
    icon: Wallet,
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
              <span className="text-gray-900 font-semibold text-sm">Claw Wallet</span>
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
              <span className="text-orange-600 text-xs font-medium">OpenClaw 原生加密钱包</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
                专为 OpenClaw
                <br />
                <span className="text-orange-500">打造的原生钱包</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                一行命令，为您的 AI Agent 部署安全的多链钱包。
                <br className="hidden sm:block" />
                原生集成，TEE 硬件级安全，无需助记词。
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

      {/* Usage Example Section - Second Screen */}
       <section className="py-16 border-t border-gray-100 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">原生集成，开箱即用</h2>
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

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              为您的 OpenClaw 部署原生钱包
            </h2>
            <p className="text-gray-500 mb-8">
              专为 OpenClaw 打造，一行命令，3 秒完成安装
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-orange-500 hover:bg-orange-600 text-white"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    已复制命令
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    复制安装命令
                  </>
                )}
              </button>
            </div>
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
