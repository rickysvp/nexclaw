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
  Play,
  ChevronRight,
  Box
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
    description: "复制上方的代码片段",
    icon: Copy,
  },
  {
    number: "02", 
    title: "交给 OpenClaw",
    description: "将代码发送给 OpenClaw 部署",
    icon: Package,
  },
  {
    number: "03",
    title: "完成部署",
    description: "AI Agent 即可拥有钱包能力",
    icon: Zap,
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
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">Claw Wallet</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/landingpage" className="text-white/60 hover:text-white text-sm transition-colors">
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">OpenClaw Skill</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white text-center mb-6 tracking-tight"
          >
            复制 Skill
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              交给 OpenClaw 部署
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 text-center max-w-2xl mx-auto mb-12"
          >
            一行代码，让 AI Agent 拥有安全的钱包能力
            <br />
            <span className="text-white/40 text-sm">无需助记词，TEE 硬件级安全</span>
          </motion.p>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-[#0f0f14] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-white/50 text-sm ml-2">wallet-skill.js</span>
                </div>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    copied 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400"
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
                      复制 Skill
                    </>
                  )}
                </button>
              </div>
              <pre className="p-5 text-sm text-white/80 overflow-x-auto font-mono leading-relaxed">
                <code>{skillCode}</code>
              </pre>
            </div>
          </motion.div>

          {/* Quick Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {deploySteps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-cyan-400 text-xs font-medium">{step.number}</div>
                      <div className="text-white text-sm font-medium">{step.title}</div>
                    </div>
                  </div>
                  {index < deploySteps.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-white/20 mx-4 md:mx-8" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              准备好让 AI Agent 拥有钱包了吗？
            </h2>
            <p className="text-white/60 mb-8">
              复制上方代码，发送给 OpenClaw 即可完成部署
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/login"
                className="group flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5" />
                开始使用
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
