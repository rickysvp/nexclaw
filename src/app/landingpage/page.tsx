"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Terminal,
  Package,
  Zap,
  ChevronRight,
  Box,
  Download,
} from "lucide-react";
import Link from "next/link";

const skillCode = `// OpenClaw Skill - 钱包创建
const { ClawWallet } = require('@openclaw/sdk');

async function createWallet() {
  const wallet = await ClawWallet.create({
    agentId: "your-agent-id",
    network: "ethereum"
  });

  console.log("钱包地址:", wallet.address);
  console.log("钱包UID:", wallet.uid);

  return wallet;
}

module.exports = { createWallet };`;

const deploySteps = [
  {
    number: "01",
    title: "复制 Skill",
    description: "复制代码片段",
    icon: Copy,
  },
  {
    number: "02",
    title: "交给 OpenClaw",
    description: "发送给 OpenClaw",
    icon: Package,
  },
  {
    number: "03",
    title: "完成部署",
    description: "Agent 拥有钱包",
    icon: Zap,
  },
];

const features = [
  {
    icon: Zap,
    title: "3秒创建",
    description: "一行代码，Agent 立即拥有钱包",
  },
  {
    icon: Box,
    title: "TEE 安全",
    description: "AWS Nitro Enclaves 硬件级保护",
  },
  {
    icon: Terminal,
    title: "多链支持",
    description: "Ethereum、Polygon、BSC、Arbitrum",
  },
];

export default function LandingPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(skillCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">Claw Wallet</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/landingpage" className="text-cyan-400 text-sm font-medium">
                Skill
              </Link>
              <Link href="/docs" className="text-white/60 hover:text-white text-sm transition-colors">
                文档
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg text-sm font-medium transition-colors"
              >
                登录
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-24 min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">OpenClaw Skill</span>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  复制 Skill
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                    交给 OpenClaw
                  </span>
                </h1>
                <p className="text-lg text-white/60 max-w-md">
                  一行代码，让 AI Agent 拥有安全的钱包能力。无需助记词，TEE 硬件级安全保护。
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleCopy}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    copied
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-cyan-500 hover:bg-cyan-400 text-white"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      已复制 Skill
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      复制 Skill
                    </>
                  )}
                </button>
                <Link
                  href="/login"
                  className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  开始使用
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Steps */}
              <div className="flex items-center gap-6 pt-4">
                {deploySteps.map((step, index) => (
                  <div key={step.number} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-cyan-400 text-xs font-medium">{step.number}</div>
                      <div className="text-white/80 text-sm">{step.title}</div>
                    </div>
                    {index < deploySteps.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-white/20 ml-2" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Code Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-3xl blur-2xl opacity-50" />

              {/* Code Window */}
              <div className="relative bg-[#0f0f14] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-white/40 text-sm ml-2">wallet-skill.js</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                      copied
                        ? "bg-green-500/20 text-green-400"
                        : "bg-white/10 hover:bg-white/20 text-white/70"
                    }`}
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

                {/* Code Content */}
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm font-mono leading-relaxed">
                    <code className="text-white/80">
                      <span className="text-cyan-400">const</span>{" "}
                      <span className="text-white">{"{ ClawWallet }"}</span>{" "}
                      <span className="text-cyan-400">=</span>{" "}
                      <span className="text-white/60">require</span>
                      <span className="text-white">(</span>
                      <span className="text-green-400">&apos;@openclaw/sdk&apos;</span>
                      <span className="text-white">);</span>
                      {"\n\n"}
                      <span className="text-cyan-400">async function</span>{" "}
                      <span className="text-yellow-400">createWallet</span>
                      <span className="text-white">() {"{"}</span>
                      {"\n"}
                      <span className="text-white">{"  "}</span>
                      <span className="text-cyan-400">const</span>{" "}
                      <span className="text-white">wallet</span>{" "}
                      <span className="text-cyan-400">=</span>{" "}
                      <span className="text-cyan-400">await</span>{" "}
                      <span className="text-white">ClawWallet.</span>
                      <span className="text-yellow-400">create</span>
                      <span className="text-white">({"{"}</span>
                      {"\n"}
                      <span className="text-white">{"    "}</span>
                      <span className="text-cyan-300">agentId</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-green-400">&quot;your-agent-id&quot;</span>
                      <span className="text-white">,</span>
                      {"\n"}
                      <span className="text-white">{"    "}</span>
                      <span className="text-cyan-300">network</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-green-400">&quot;ethereum&quot;</span>
                      {"\n"}
                      <span className="text-white">{"  "}</span>
                      <span className="text-white">{"}"});</span>
                      {"\n\n"}
                      <span className="text-white">{"  "}</span>
                      <span className="text-white/60">console</span>
                      <span className="text-white">.</span>
                      <span className="text-yellow-400">log</span>
                      <span className="text-white">(</span>
                      <span className="text-green-400">&quot;钱包地址:&quot;</span>
                      <span className="text-white">,</span>{" "}
                      <span className="text-white">wallet.</span>
                      <span className="text-cyan-300">address</span>
                      <span className="text-white">);</span>
                      {"\n"}
                      <span className="text-white">{"  "}</span>
                      <span className="text-white/60">console</span>
                      <span className="text-white">.</span>
                      <span className="text-yellow-400">log</span>
                      <span className="text-white">(</span>
                      <span className="text-green-400">&quot;钱包UID:&quot;</span>
                      <span className="text-white">,</span>{" "}
                      <span className="text-white">wallet.</span>
                      <span className="text-cyan-300">uid</span>
                      <span className="text-white">);</span>
                      {"\n\n"}
                      <span className="text-white">{"  "}</span>
                      <span className="text-cyan-400">return</span>{" "}
                      <span className="text-white">wallet;</span>
                      {"\n"}
                      <span className="text-white">{"}"}</span>
                      {"\n\n"}
                      <span className="text-white/60">module</span>
                      <span className="text-white">.</span>
                      <span className="text-cyan-300">exports</span>{" "}
                      <span className="text-cyan-400">=</span>{" "}
                      <span className="text-white">{"{ "}</span>
                      <span className="text-yellow-400">createWallet</span>
                      <span className="text-white">{" };"}</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-cyan-500/30"
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

      {/* Features Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl p-8 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 flex items-center justify-center mb-6 transition-colors">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <Wallet className="w-3 h-3 text-white" />
              </div>
              <span className="text-white/70 text-sm">Claw Wallet</span>
            </div>
            <p className="text-white/30 text-xs">
              © 2026 Claw Wallet. OpenClaw 原生安全加密钱包
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
