"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Copy,
  Check,
  ArrowRight,
  Terminal,
  Shield,
  Zap,
  ChevronRight,
  Code2,
  Layers,
  Lock,
  Cpu,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const skillCode = `const { ClawWallet } = require('@openclaw/sdk');

async function createAgentWallet() {
  const wallet = await ClawWallet.create({
    agentId: process.env.AGENT_ID,
    network: 'ethereum',
    security: {
      teeEnabled: true,
      pinProtection: true
    }
  });

  return {
    address: wallet.address,
    uid: wallet.uid,
    ready: true
  };
}

module.exports = { createAgentWallet };`;

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
                <Code2 className="w-3.5 h-3.5 text-[#22d3ee]" />
                <span className="text-[#22d3ee] text-xs font-medium tracking-wide uppercase">OpenClaw Skill</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                  为 AI Agent
                  <br />
                  <span className="text-[#22d3ee]">创建安全钱包</span>
                </h1>
                <p className="text-lg text-white/50 max-w-md leading-relaxed">
                  通过 OpenClaw Skill，一行代码即可为 AI Agent 部署安全的多链钱包。
                  基于 TEE 架构，无需助记词。
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleCopy}
                  className="group flex items-center gap-2.5 px-6 py-3 bg-[#22d3ee] hover:bg-[#06b6d4] text-[#0a0a0f] rounded-xl font-semibold text-sm transition-all duration-200"
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

              {/* Install command */}
              <div className="pt-4">
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                  <Terminal className="w-4 h-4 text-white/30" />
                  <code className="text-sm text-white/70 font-mono">npm install @openclaw/sdk</code>
                  <button
                    onClick={() => navigator.clipboard.writeText("npm install @openclaw/sdk")}
                    className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-white/40" />
                  </button>
                </div>
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
                    <span className="text-white/40 text-xs">wallet-skill.js</span>
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
                      <span className="text-[#d2a8ff]">{" "}createAgentWallet</span>
                      <span className="text-white">(){"{"}</span>
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
                      <span className="text-white">: process.env.</span>
                      <span className="text-[#79c0ff]">AGENT_ID</span>
                      <span className="text-white">,</span>
                      {"\n"}
                      <span className="text-white">{"    "}</span>
                      <span className="text-[#79c0ff]">network</span>
                      <span className="text-white">:</span>
                      <span className="text-[#a5d6ff]">&apos;ethereum&apos;</span>
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
                      <span className="text-[#79c0ff]">ready</span>
                      <span className="text-white">:</span>
                      <span className="text-[#79c0ff]"> true</span>
                      {"\n"}
                      <span className="text-white">{"  "}</span>
                      <span className="text-white">{"}"};{"\n"}</span>
                      <span className="text-white">{"}"}</span>
                      {"\n\n"}
                      <span className="text-white">module.exports = {"{"}{" "}</span>
                      <span className="text-[#d2a8ff]">createAgentWallet</span>
                      <span className="text-white">{" "}{"}"};{"\n"}</span>
                    </code>
                  </pre>
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

      {/* How it works */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-white mb-3">三步完成部署</h2>
            <p className="text-white/40">复制代码，交给 OpenClaw，即刻启用</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "复制 Skill", desc: "复制右侧代码片段" },
              { step: "02", title: "交给 OpenClaw", desc: "发送至 OpenClaw 部署" },
              { step: "03", title: "启用钱包", desc: "Agent 立即获得钱包能力" },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-white/[0.08]">{item.step}</span>
                  <div className="pt-2">
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-24 right-0 h-px bg-gradient-to-r from-white/[0.1] to-transparent" />
                )}
              </div>
            ))}
          </div>
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
