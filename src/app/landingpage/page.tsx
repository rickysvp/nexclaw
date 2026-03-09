"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Terminal, ArrowRight } from "lucide-react";

const installCommand = "npx clawhub@latest install clawwallet";

export default function LandingPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
              为 OpenClaw 添加
              <br />
              原生加密钱包
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              一行命令，为您的 AI Agent 部署安全的多链钱包。
              基于 TEE 架构，无需助记词。
            </p>
          </div>

          {/* Install Command */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Terminal className="w-4 h-4" />
              <span>在终端运行</span>
            </div>

            <div className="relative group">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 pr-14 transition-all group-hover:border-gray-300">
                <code className="text-sm font-mono text-gray-800 block">
                  {installCommand}
                </code>
              </div>

              <button
                onClick={handleCopy}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 pt-4"
          >
            <div className="h-px bg-gray-100" />

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-gray-600">1</span>
                </div>
                <div>
                  <h3 className="text-gray-900 font-medium">复制命令</h3>
                  <p className="text-gray-500 text-sm mt-1">点击上方复制按钮</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-gray-600">2</span>
                </div>
                <div>
                  <h3 className="text-gray-900 font-medium">发送给 OpenClaw</h3>
                  <p className="text-gray-500 text-sm mt-1">粘贴到 OpenClaw 对话框</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-gray-600">3</span>
                </div>
                <div>
                  <h3 className="text-gray-900 font-medium">完成部署</h3>
                  <p className="text-gray-500 text-sm mt-1">自动安装，立即使用</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <a
              href="https://openclaw.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm transition-colors group"
            >
              还没有 OpenClaw？
              <span className="text-gray-900 font-medium inline-flex items-center gap-1">
                立即创建
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-6 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-400">Claw Wallet</span>
          <span className="text-xs text-gray-300">OpenClaw 原生加密钱包</span>
        </div>
      </footer>
    </div>
  );
}
