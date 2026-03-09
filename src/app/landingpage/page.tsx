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
  Code2,
  Layers,
  ExternalLink,
  Download,
  Sparkles,
  Bot,
  Shield,
} from "lucide-react";
import Link from "next/link";

const skillCode = `// OpenClaw Skill - ClawWallet
const { ClawWallet } = require('@openclaw/sdk');

async function createWallet(agentId, network = 'ethereum') {
  const wallet = await ClawWallet.create({
    agentId,
    network,
    security: {
      teeEnabled: true,
      pinProtection: true
    }
  });

  return {
    address: wallet.address,
    uid: wallet.uid,
    sign: (tx) => wallet.sign(tx)
  };
}

module.exports = { createWallet };`;

const installCommand = "npx clawhub@latest install clawwallet";

const deploySteps = [
  {
    number: "01",
    title: "复制 Skill 代码",
    description: "复制右侧代码",
    icon: Copy,
  },
  {
    number: "02",
    title: "粘贴到 OpenClaw",
    description: "在 OpenClaw 中粘贴",
    icon: Terminal,
  },
  {
    number: "03",
    title: "自动部署完成",
    description: "立即使用钱包",
    icon: Zap,
  },
];

const features = [
  {
    icon: Shield,
    title: "TEE 安全架构",
    description: "AWS Nitro Enclaves 硬件级隔离",
  },
  {
    icon: Zap,
    title: "3 秒创建",
    description: "无需助记词，即时可用",
  },
  {
    icon: Layers,
    title: "多链支持",
    description: "Ethereum、Polygon、BSC",
  },
];

export default function LandingPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(skillCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22d3ee] to-[#0891b2] flex items-center justify-center">
                <Wallet className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm tracking-tight">Claw Wallet</span>
            </Link>
            <div className="flex items-center gap-1">
              <Link
                href="/docs"
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                文档
              </Link>
              <Link
                href="/login"
                className="ml-2 px-4 py-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white rounded-lg text-sm font-medium transition-all"
              >
                登录
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#22d3ee]/10 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#0891b2]/10 rounded-full blur-[150px] opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20">
                <Bot className="w-3.5 h-3.5 text-[#22d3ee]" />
                <span className="text-[#22d3ee] text-xs font-medium tracking-wide uppercase">OpenClaw Skill</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                  一行代码
                  <br />
                  <span className="text-[#22d3ee]">为 OpenClaw</span>
                  <br />
                  添加钱包能力
                </h1>
                <p className="text-lg text-white/50 max-w-md leading-relaxed">
                  复制下方代码，粘贴到 OpenClaw 即可使用。无需配置，自动部署，3 秒完成。
                </p>
              </div>

              {/* Install Command */}
              <div className="space-y-3">
                <p className="text-white/40 text-sm">或使用命令一键安装：</p>
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                  <Terminal className="w-4 h-4 text-white/30" />
                  <code className="text-sm text-white/70 font-mono">{installCommand}</code>
                  <button
                    onClick={() => navigator.clipboard.writeText(installCommand)}
                    className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-white/40" />
                  </button>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleCopy}
                  className={`group flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    copied
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-[#22d3ee] hover:bg-[#06b6d4] text-[#0a0a0f]"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      已复制代码
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      复制 Skill 代码
                    </>
                  )}
                </button>
                <Link
                  href="https://docs.openclaw.io"
                  target="_blank"
                  className="group flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors"
                >
                  查看文档
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Code Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#22d3ee]/20 to-[#0891b2]/20 rounded-3xl blur-2xl opacity-50" />

              {/* Code window */}
              <div className="relative bg-[#0d0d12] rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl">
                {/* Window header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
                    </div>
                    <div className="h-4 w-px bg-white/10 mx-2" />
                    <span className="text-white/40 text-xs">clawwallet-skill.js</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/60 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] rounded-lg transition-colors"
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

                {/* Code content */}
                <div className="p-6 overflow-x-auto">
                  <pre className="text-[13px] font-mono leading-6">
                    <code>
                      <span className="text-[#ff7b72]">const</span>
                      <span className="text-white">{" "}{"{"}</span>
                      <span className="text-[#79c0ff]">{" "}ClawWallet{" "}</span>
                      <span className="text-white">{"}"}{" "}</span>
                      <span className="text-[#ff7b72]">=</span>
                      <span className="text-white">{" "}require</span>
                      <span className="text-white">(</span>
                      <span className="text-[#a5d6ff]">&apos;@openclaw/sdk&apos;</span>
                      <span className="text-white">);</span>
                      {"\n\n"}
                      <span className="text-[#ff7b72]">async function</span>
                      <span className="text-[#d2a8ff]">{" "}createWallet</span>
                      <span className="text-white">(agentId, network = </span>
                      <span className="text-[#a5d6ff]">&apos;ethereum&apos;</span>
                      <span className="text-white">) {"{"}</span>
                      {"\n"}
                      <span className="text-white">{"  "}</span>
                      <span className="text-[#ff7b72]">const</span>
                      <span className="text-white">{" "}wallet{" "}</span>
                      <span className="text-[#ff7b72]">=</span>
                      <span className="text-[#ff7b72]"> await </span>
                      <span className="text-white">ClawWallet.</span>
                      <span className="text-[#d2a8ff]">create</span>
                      <span className="text-white">({"{"}</span>
                      {"\n"}
                      <span className="text-white">{"    "}</span>
                      <span className="text-[#79c0ff]">agentId</span>
                      <span className="text-white">,</span>
                      {"\n"}
                      <span className="text-white">{"    "}</span>
                      <span className="text-[#79c0ff]">network</span>
                      <span className="text-white">,</span>
                      {"\n"}
                      <span className="text-white">{"    "}</span>
                      <span className="text-[#79c0ff]">security</span>
                      <span className="text-white">: {"{"}</span>
                      {"\n"}
                      <span className="text-white">{"      "}</span>
                      <span className="text-[#79c0ff]">teeEnabled</span>
                      <span className="text-white">:</span>
                      <span className="text-[#79c0ff]"> true</span>
                      <span className="text-white">,</span>
                      {"\n"}
                      <span className="text-white">{"      "}</span>
                      <span className="text-[#79c0ff]">pinProtection</span>
                      <span className="text-white">:</span>
                      <span className="text-[#79c0ff]"> true</span>
                      {"\n"}
                      <span className="text-white">{"    "}</span>
                      <span className="text-white">{"}"}</span>
                      {"\n"}
                      <span className="text-white">{"  "}</span>
                      <span className="text-white">{"}"});</span>
                      {"\n\n"}
                      <span className="text-white">{"  "}</span>
                      <span className="text-[#ff7b72]">return</span>
                      <span className="text-white">{" "}{"{"}</span>
                      {"\n"}
                      <span className="text-white">{"    "}</span>
                      <span className="text-[#79c0ff]">address</span>
                      <span className="text-white">: wallet.</span>
                      <span className="text-[#79c0ff]">address</span>
                      <span className="text-white">,</span>
                      {"\n"}
                      <span className="text-white">{"    "}</span>
                      <span className="text-[#79c0ff]">uid</span>
                      <span className="text-white">: wallet.</span>
                      <span className="text-[#79c0ff]">uid</span>
                      <span className="text-white">,</span>
                      {"\n"}
                      <span className="text-white">{"    "}</span>
                      <span className="text-[#79c0ff]">sign</span>
                      <span className="text-white">: (tx) {"=>"} wallet.</span>
                      <span className="text-[#d2a8ff]">sign</span>
                      <span className="text-white">(tx)</span>
                      {"\n"}
                      <span className="text-white">{"  "}</span>
                      <span className="text-white">{"}"};{"\n"}</span>
                      <span className="text-white">{"}"}</span>
                      {"\n\n"}
                      <span className="text-white">module.exports = {"{"}{" "}</span>
                      <span className="text-[#d2a8ff]">createWallet</span>
                      <span className="text-white">{" "}{"}"};{"\n"}</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-[#22d3ee] text-[#0a0a0f] px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-[#22d3ee]/30"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  3秒完成部署
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deploy Steps Section */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold text-white mb-4">三步完成部署</h2>
            <p className="text-white/50">复制代码，粘贴到 OpenClaw，自动部署</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {deploySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-[#22d3ee]/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#22d3ee]/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#22d3ee]" />
                    </div>
                    <span className="text-4xl font-bold text-white/[0.08]">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/50">{step.description}</p>
                </div>
                {index < deploySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-white/10" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Example Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-white mb-6">部署后如何使用</h2>
              <p className="text-white/50 mb-8">
                Skill 部署完成后，您的 OpenClaw Agent 立即获得钱包能力。可以通过简单的命令创建钱包、查询余额、发送交易。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-4 h-4 text-[#22d3ee]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">创建钱包</h4>
                    <code className="text-sm text-white/50 font-mono">@openclaw 创建以太坊钱包</code>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-4 h-4 text-[#22d3ee]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">查询余额</h4>
                    <code className="text-sm text-white/50 font-mono">@openclaw 查询我的钱包余额</code>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-[#22d3ee]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">发送交易</h4>
                    <code className="text-sm text-white/50 font-mono">@openclaw 发送 0.1 ETH 到 0x...</code>
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
              <div className="bg-[#0d0d12] rounded-2xl border border-white/[0.08] overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
                  <span className="text-white/40 text-xs ml-2">OpenClaw Chat</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">👤</div>
                    <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-2.5 text-white/80 text-sm">
                      @openclaw 创建一个以太坊钱包
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#22d3ee] flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-[#22d3ee]/10 border border-[#22d3ee]/20 rounded-2xl rounded-tl-sm px-4 py-2.5 text-white/80 text-sm space-y-2">
                      <p>✅ 钱包创建成功！</p>
                      <p className="font-mono text-xs text-white/60">
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

      {/* Features Section */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#22d3ee]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#22d3ee]/10 flex items-center justify-center mb-4 group-hover:bg-[#22d3ee]/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-[#22d3ee]" />
                </div>
                <h3 className="text-white font-medium mb-1.5">{feature.title}</h3>
                <p className="text-white/40 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              准备好为 OpenClaw 添加钱包能力了吗？
            </h2>
            <p className="text-white/50 mb-8">
              复制上方代码，粘贴到 OpenClaw，3 秒完成部署
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleCopy}
                className={`group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  copied
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-[#22d3ee] hover:bg-[#06b6d4] text-[#0a0a0f]"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    已复制 Skill 代码
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    复制 Skill 代码
                  </>
                )}
              </button>
              <Link
                href="/login"
                className="flex items-center gap-2 px-8 py-4 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white rounded-xl font-semibold transition-all"
              >
                <Sparkles className="w-5 h-5" />
                开始使用
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#22d3ee] to-[#0891b2] flex items-center justify-center">
                <Wallet className="w-3 h-3 text-white" />
              </div>
              <span className="text-white/60 text-sm">Claw Wallet</span>
            </div>
            <p className="text-white/30 text-xs">
              OpenClaw 原生安全加密钱包
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
