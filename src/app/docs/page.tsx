'use client';

import { motion } from "framer-motion";
import { Code, BookOpen, Terminal, FileText, Search, Copy } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopyMessage('代码已复制到剪贴板');
    setTimeout(() => setCopyMessage(null), 2000);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            文档 <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-purple-400">中心</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            欢迎使用 NexClaw 文档中心，这里提供了详细的使用指南和 API 参考
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <input 
              type="text" 
              placeholder="搜索文档..." 
              className="w-full px-6 py-4 pl-12 rounded-xl bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </motion.div>

        {/* Documentation Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <motion.div 
            className="lg:w-1/4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 shadow-xl shadow-orange-500/5 sticky top-8">
              <h3 className="text-xl font-bold mb-6 text-white">文档导航</h3>
              <nav className="space-y-2">
                {[
                  { id: 'getting-started', title: '快速开始', icon: <BookOpen className="h-5 w-5" /> },
                  { id: 'api-reference', title: 'API 参考', icon: <Code className="h-5 w-5" /> },
                  { id: 'examples', title: '示例代码', icon: <Terminal className="h-5 w-5" /> },
                  { id: 'faq', title: '常见问题', icon: <FileText className="h-5 w-5" /> }
                ].map((item) => (
                  <motion.button 
                    key={item.id}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === item.id ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}
                    onClick={() => setActiveTab(item.id)}
                    whileHover={{ scale: 1.02 }}
                  >
                    {item.icon}
                    {item.title}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="lg:w-3/4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Copy Success Message */}
            {copyMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mb-8 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                {copyMessage}
              </motion.div>
            )}

            {/* Tab Content */}
            <div className="space-y-12">
              {activeTab === 'getting-started' && (
                <div>
                  <motion.h2 
                    className="text-3xl font-bold mb-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    快速开始
                  </motion.h2>
                  <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 shadow-xl shadow-orange-500/5">
                      <h3 className="text-2xl font-bold mb-4 text-white">步骤 1: 访问 NexClaw</h3>
                      <p className="text-gray-400 mb-6">
                        打开浏览器，访问 <a href="/" className="text-orange-400 hover:underline">NexClaw</a> 官网。
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 shadow-xl shadow-orange-500/5">
                      <h3 className="text-2xl font-bold mb-4 text-white">步骤 2: 创建钱包</h3>
                      <p className="text-gray-400 mb-6">
                        点击「立即体验」按钮，按照指引创建你的第一个 Agent Wallet。
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 shadow-xl shadow-orange-500/5">
                      <h3 className="text-2xl font-bold mb-4 text-white">步骤 3: 设置安全规则</h3>
                      <p className="text-gray-400 mb-6">
                        在仪表盘页面，设置适合你的安全规则，保护资产安全。
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 shadow-xl shadow-orange-500/5">
                      <h3 className="text-2xl font-bold mb-4 text-white">步骤 4: 集成 Agent</h3>
                      <p className="text-gray-400 mb-6">
                        使用生成的 UID，将你的 Agent 与 NexClaw 集成。
                      </p>
                      <div className="relative p-4 bg-gray-900/60 rounded-lg border border-gray-700/50">
                        <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
                          <code>{`// 小龙虾集成代码示例
import { NexAuthSDK } from '@nexauth/agent-sdk';

const sdk = new NexAuthSDK('YOUR_AGENT_UID');

// 创建钱包会话
const session = await sdk.createWalletSession();

// 执行交易
const result = await sdk.sendTransaction({
  to: '0x...',
  amount: '0.1 ETH'
});`}</code>
                        </pre>
                        <motion.button 
                          className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 transition-colors"
                          onClick={() => handleCopyCode(`// 小龙虾集成代码示例
import { NexAuthSDK } from '@nexauth/agent-sdk';

const sdk = new NexAuthSDK('YOUR_AGENT_UID');

// 创建钱包会话
const session = await sdk.createWalletSession();

// 执行交易
const result = await sdk.sendTransaction({
  to: '0x...',
  amount: '0.1 ETH'
});`)} 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Copy className="h-4 w-4 text-orange-400" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === 'api-reference' && (
                <div>
                  <motion.h2 
                    className="text-3xl font-bold mb-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    API 参考
                  </motion.h2>
                  <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 shadow-xl shadow-orange-500/5">
                      <h3 className="text-2xl font-bold mb-4 text-white">创建钱包</h3>
                      <p className="text-gray-400 mb-6">
                        创建一个新的 Agent Wallet，并返回钱包信息和 UID。
                      </p>
                      <div className="relative p-4 bg-gray-900/60 rounded-lg border border-gray-700/50">
                        <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
                          <code>{`POST /api/wallet/create

{
  "name": "My Agent Wallet",
  "description": "Wallet for my AI Agent"
}`}</code>
                        </pre>
                        <motion.button 
                          className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 transition-colors"
                          onClick={() => handleCopyCode(`POST /api/wallet/create

{
  "name": "My Agent Wallet",
  "description": "Wallet for my AI Agent"
}`)} 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Copy className="h-4 w-4 text-orange-400" />
                        </motion.button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 shadow-xl shadow-orange-500/5">
                      <h3 className="text-2xl font-bold mb-4 text-white">执行交易</h3>
                      <p className="text-gray-400 mb-6">
                        通过 Agent 执行交易，需要验证安全规则。
                      </p>
                      <div className="relative p-4 bg-gray-900/60 rounded-lg border border-gray-700/50">
                        <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
                          <code>{`POST /api/wallet/{walletId}/execute

{
  "to": "0x...",
  "amount": "0.1",
  "token": "ETH",
  "description": "Buy PEPE"
}`}</code>
                        </pre>
                        <motion.button 
                          className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 transition-colors"
                          onClick={() => handleCopyCode(`POST /api/wallet/{walletId}/execute

{
  "to": "0x...",
  "amount": "0.1",
  "token": "ETH",
  "description": "Buy PEPE"
}`)} 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Copy className="h-4 w-4 text-orange-400" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div>
                  <motion.h2 
                    className="text-3xl font-bold mb-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    常见问题
                  </motion.h2>
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {[
                      {
                        question: "什么是 Agent Wallet？",
                        answer: "Agent Wallet 是专门为 AI Agent 设计的钱包，允许 Agent 安全地执行交易和管理资产。它通过 UID 进行身份验证，确保只有授权的 Agent 能够访问钱包功能。"
                      },
                      {
                        question: "如何保证资产安全？",
                        answer: "NexClaw 通过多层安全机制保障资产安全，包括安全规则设置、交易验证、地址白名单、黑名单合约等。用户可以设置 PIN 码、交易金额限制等安全规则，保护资产免受未授权访问和恶意交易。"
                      },
                      {
                        question: "支持哪些区块链？",
                        answer: "目前支持以太坊、Polygon、BSC 等主流区块链，未来将支持更多链。用户可以在创建钱包时选择支持的区块链网络。"
                      },
                      {
                        question: "如何集成到我的 Agent 中？",
                        answer: "使用生成的 UID 和 NexAuth SDK，你可以轻松将 NexClaw 集成到你的 Agent 中。SDK 提供了简单易用的 API，支持创建钱包、执行交易、查询历史等功能。"
                      }
                    ].map((faq, index) => (
                      <motion.div 
                        key={index}
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 shadow-xl shadow-orange-500/5"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                        <p className="text-gray-400">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
