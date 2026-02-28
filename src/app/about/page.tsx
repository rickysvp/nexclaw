'use client';

import { motion } from "framer-motion";
import { Award, Users, Globe, Shield, Zap, ChevronRight } from "lucide-react";

export default function AboutPage() {
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
            关于 <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-purple-400">NexClaw</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            下一代 AI Agent 安全钱包平台，让小龙虾安全帮你管钱
          </p>
        </motion.div>

        {/* Our Story */}
        <section className="mb-24">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">我们的故事</h2>
              <p className="text-gray-400 mb-6 text-lg">
                NexClaw 诞生于 2026 年，由一群热爱区块链和 AI 技术的工程师创立。我们发现 AI Agent 在执行 Web3 交易时面临安全风险，因此开发了 NexClaw 平台，让 Agent 能够安全地管理和执行交易。
              </p>
              <p className="text-gray-400 mb-8 text-lg">
                我们的使命是通过技术创新，让 AI Agent 与 Web3 世界的交互更加安全、高效、便捷，为用户创造全新的数字资产管理体验。
              </p>
              <motion.button 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-orange-500/20"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 165, 0, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                了解更多 <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                <div className="bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 p-12 text-center">
                  <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🦞</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">小龙虾 Agent</h3>
                  <p className="text-white/80">你的智能 Web3 助手</p>
                </div>
                <div className="bg-gray-900/80 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">安全保障</h4>
                        <p className="text-gray-400 text-sm">多层安全机制，保护资产安全</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">高效执行</h4>
                        <p className="text-gray-400 text-sm">快速响应，即时执行交易</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <Globe className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">全球覆盖</h4>
                        <p className="text-gray-400 text-sm">支持多链，全球用户均可使用</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-600/20 rounded-3xl blur-3xl z-0"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Values */}
        <section className="mb-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">我们的价值观</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              指导我们行动的核心原则
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-orange-400" />,
                title: "安全第一",
                description: "用户资产安全是我们的首要任务，我们采用多层安全机制保障用户资产安全。"
              },
              {
                icon: <Users className="h-8 w-8 text-orange-400" />,
                title: "用户至上",
                description: "我们始终以用户需求为中心，不断优化产品体验，提供最好的服务。"
              },
              {
                icon: <Zap className="h-8 w-8 text-orange-400" />,
                title: "创新驱动",
                description: "我们持续创新，探索 AI 与 Web3 结合的新可能，引领行业发展。"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 shadow-xl shadow-orange-500/5 h-full"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/10">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">我们的团队</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              由行业专家组成的团队，致力于打造最好的 AI Agent 钱包平台
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "张三",
                role: "创始人 & CEO",
                avatar: "👨‍💼",
                bio: "前 Google 工程师，区块链专家"
              },
              {
                name: "李四",
                role: "CTO",
                avatar: "👩‍💻",
                bio: "AI 研究员，Web3 技术专家"
              },
              {
                name: "王五",
                role: "产品总监",
                avatar: "👨‍🚀",
                bio: "前 Apple 产品经理"
              },
              {
                name: "赵六",
                role: "设计总监",
                avatar: "👩‍🎨",
                bio: "UI/UX 设计专家"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 shadow-xl shadow-orange-500/5 text-center"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/30">
                    <span className="text-4xl">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-orange-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-12 text-center shadow-xl shadow-orange-500/5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">加入我们的社区</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            成为 NexClaw 社区的一员，与我们一起构建下一代 AI Agent 钱包平台
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-medium shadow-lg shadow-orange-500/20"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 165, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              立即开始
            </motion.button>
            <motion.button 
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 165, 0, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              了解更多
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
