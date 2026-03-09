"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Copy,
  Check,
  Terminal,
  Bot,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const installCommand = "npx clawhub@latest install clawwallet";

const agentPrompt = "安装 clawwallet skill，为我的 AI Agent 添加安全的多链钱包能力";

const steps = [
  {
    number: "1",
    title: "复制命令发送给 OpenClaw",
    description: "将命令粘贴到 OpenClaw 对话框",
  },
  {
    number: "2",
    title: "OpenClaw 自动安装部署",
    description: "Skill 自动下载并完成配置",
  },
  {
    number: "3",
    title: "立即使用钱包功能",
    description: "通过对话即可创建和管理钱包",
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
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Wallet className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white font-semibold text-sm">ClawWallet</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xl">
                🦞
              </div>
              <h1 className="text-2xl font-bold text-white">
                Send Your AI Agent to ClawWallet
              </h1>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("openclaw")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "openclaw"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                }`}
              >
                openclaw
              </button>
              <button
                onClick={() => setActiveTab("manual")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "manual"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                }`}
              >
                manual
              </button>
            </div>

            {/* Command Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="bg-[#111118] rounded-xl border border-white/10 overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-gray-500 text-xs ml-2">
                    {activeTab === "openclaw" ? "agent prompt" : "terminal"}
                  </span>
                </div>

                {/* Command Content */}
                <div className="p-4 relative">
                  <code className="text-emerald-400 text-sm font-mono block pr-20">
                    {activeTab === "openclaw" ? agentPrompt : installCommand}
                  </code>
                  
                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-lg text-gray-300 text-xs font-medium transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Steps */}
            <div className="space-y-4 pt-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400 text-xs font-medium">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">{step.title}</h3>
                    <p className="text-gray-500 text-xs mt-0.5">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer Link */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Bot className="w-4 h-4" />
                <span>Don&apos;t have an AI agent?</span>
              </div>
              <Link
                href="https://openclaw.ai"
                target="_blank"
                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
              >
                Create one at openclaw.ai
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
