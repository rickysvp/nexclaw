"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Wallet, 
  Zap, 
  Shield, 
  Copy, 
  Check, 
  ArrowRight,
  Sparkles,
  Bot,
  Code2,
  Terminal,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Skill Code Templates
const skillTemplates = {
  basic: `// OpenClaw Skill - 基础钱包创建
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

module.exports = { createWallet };`,

  advanced: `// OpenClaw Skill - 高级钱包配置
const { ClawWallet } = require('@openclaw/sdk');

async function createAdvancedWallet() {
  const wallet = await ClawWallet.create({
    agentId: "your-agent-id",
    network: "ethereum",
    security: {
      pinEnabled: true,
      dailyLimit: "1.0",
      whitelistOnly: false
    },
    metadata: {
      name: "AI Agent Wallet",
      description: "自动交易机器人钱包"
    }
  });
  
  // 设置安全规则
  await wallet.setSecurityRules({
    maxPerTx: "0.5",
    maxPerDay: "2.0",
    requirePin: true
  });
  
  return wallet;
}

module.exports = { createAdvancedWallet };`,

  multiChain: `// OpenClaw Skill - 多链钱包创建
const { ClawWallet } = require('@openclaw/sdk');

async function createMultiChainWallet() {
  const networks = ["ethereum", "polygon", "bsc", "arbitrum"];
  const wallets = {};
  
  for (const network of networks) {
    wallets[network] = await ClawWallet.create({
      agentId: "your-agent-id",
      network: network,
      syncWithMain: true  // 同步主钱包安全设置
    });
  }
  
  console.log("多链钱包创建完成:");
  Object.entries(wallets).forEach(([net, wallet]) => {
    console.log(\`  \${net}: \${wallet.address}\`);
  });
  
  return wallets;
}

module.exports = { createMultiChainWallet };`,
};

// Code Block Component
function CodeBlock({ code, title }: { code: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#FF4D2E]" />
          <span className="text-sm text-white/70">{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-xs"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">已复制</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>复制代码</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-sm text-white/80 overflow-x-auto font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Skill Card Component
function SkillCard({ 
  icon: Icon, 
  title, 
  description, 
  code,
  codeTitle,
  delay 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  code: string;
  codeTitle: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#FF4D2E]/50 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#FF4D2E]/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#FF4D2E]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-white/60 text-sm mt-1">{description}</p>
        </div>
      </div>
      <CodeBlock code={code} title={codeTitle} />
    </motion.div>
  );
}

// Feature Item Component
function FeatureItem({ icon: Icon, title, description }: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-[#FF4D2E]/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[#FF4D2E]" />
      </div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-white/60 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"basic" | "advanced" | "multiChain">("basic");

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FF4D2E]/20 rounded-full blur-[150px] opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4D2E]/10 border border-[#FF4D2E]/30 mb-8">
              <Sparkles className="w-4 h-4 text-[#FF4D2E]" />
              <span className="text-[#FF4D2E] text-sm font-medium">OpenClaw Skill 集成</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              为 AI Agent 打造
              <br />
              <span className="text-[#FF4D2E]">一键钱包创建</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/70 max-w-2xl mx-auto mb-10"
            >
              通过 OpenClaw Skill，让您的 AI Agent 在几秒钟内创建安全的多链钱包，
              无需助记词，开箱即用
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/login"
                className="group flex items-center gap-2 px-8 py-4 bg-[#FF4D2E] hover:bg-[#FF4D2E]/90 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <Wallet className="w-5 h-5" />
                免费创建钱包
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#skill-code"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20"
              >
                <Code2 className="w-5 h-5" />
                查看 Skill 代码
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              为什么选择 OpenClaw Skill
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              专为 AI Agent 设计的安全钱包解决方案
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureItem
              icon={Zap}
              title="3秒快速创建"
              description="无需助记词，一行代码即可创建安全钱包，Agent 可自主管理"
            />
            <FeatureItem
              icon={Shield}
              title="TEE 安全架构"
              description="基于 AWS Nitro Enclaves，私钥分片存储，硬件级安全保障"
            />
            <FeatureItem
              icon={Bot}
              title="Agent 原生支持"
              description="通过 UID 轻松集成，支持程序化交易和自动化操作"
            />
          </div>
        </div>
      </section>

      {/* Skill Code Section */}
      <section id="skill-code" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skill 代码示例
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              选择适合您的集成方式，复制代码即可使用
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-white/10 rounded-2xl">
              {[
                { key: "basic", label: "基础创建" },
                { key: "advanced", label: "高级配置" },
                { key: "multiChain", label: "多链钱包" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-[#FF4D2E] text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Code Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CodeBlock 
              code={skillTemplates[activeTab]} 
              title={`${activeTab === "basic" ? "basic-wallet.js" : activeTab === "advanced" ? "advanced-wallet.js" : "multichain-wallet.js"}`}
            />
          </motion.div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              三步完成集成
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              简单快捷的接入流程
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "安装 SDK",
                description: "npm install @openclaw/sdk",
                icon: Terminal,
              },
              {
                step: "02",
                title: "配置 Skill",
                description: "复制上方代码，配置您的 Agent ID",
                icon: Code2,
              },
              {
                step: "03",
                title: "创建钱包",
                description: "调用 createWallet() 即可生成钱包",
                icon: Wallet,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 h-full">
                  <div className="text-6xl font-bold text-[#FF4D2E]/20 mb-4">{item.step}</div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FF4D2E]/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#FF4D2E]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 font-mono text-sm">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-[#FF4D2E]/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-[#FF4D2E]/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              准备好开始了吗？
            </h2>
            <p className="text-xl text-white/70 mb-10">
              立即为您的 AI Agent 创建安全钱包，开启 Web3 之旅
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/login"
                className="group flex items-center gap-2 px-10 py-5 bg-[#FF4D2E] hover:bg-[#FF4D2E]/90 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                立即创建钱包
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://docs.openclaw.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20"
              >
                <ExternalLink className="w-5 h-5" />
                查看完整文档
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF4D2E] flex items-center justify-center">
                <Wallet className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">Claw Wallet</span>
            </div>
            <p className="text-white/50 text-sm">
              © 2026 Claw Wallet. OpenClaw 原生安全加密钱包
            </p>
            <div className="flex items-center gap-6">
              <Link href="/docs" className="text-white/50 hover:text-white text-sm transition-colors">
                文档
              </Link>
              <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
