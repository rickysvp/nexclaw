'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Clock, Lock, Check, ChevronDown, Star, Award, Rocket, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 z-0">
          {/* Animated Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <motion.div 
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 hover:bg-gradient-to-r from-orange-500/30 to-purple-500/30 border border-orange-500/30 px-4 py-2">
                  NexAuth × OpenClaw
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                让<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-purple-400">NexClaw</span>安全帮你管钱
              </motion.h1>
              
              <motion.p 
                className="text-gray-400 text-lg md:text-xl max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                下一代 AI Agent 安全钱包平台，实现「用户一句话 → Agent 自动执行交易」的闭环体验
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.a
                  href="/login"
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 text-white font-medium flex items-center justify-center gap-2 shadow-2xl shadow-indigo-500/20"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(99, 102, 241, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  立即体验 <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#features" 
                  className="px-8 py-4 rounded-lg border border-gray-700 text-white font-medium flex items-center justify-center gap-2 hover:border-orange-500/50 hover:bg-gradient-to-r from-orange-500/5 to-purple-500/5 transition-all duration-300"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255, 165, 0, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  了解更多
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center border-2 border-black"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <span className="text-white font-bold text-sm">{i}</span>
                    </motion.div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">来自 10,000+ 用户的信赖</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Content */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 backdrop-blur-md bg-gradient-to-br from-gray-900/80 to-gray-950/80">
                <div className="bg-gray-800/50 p-4 flex items-center gap-3 border-b border-gray-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm">NexClaw Wallet</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm text-gray-400">在线</span>
                  </div>
                </div>
                <div className="bg-gray-900/50 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <span className="text-white font-bold text-2xl">🦞</span>
                    </div>
                    <div>
                      <div className="font-medium text-lg">NexClaw Agent</div>
                      <div className="text-sm text-gray-400">正在执行交易...</div>
                    </div>
                  </div>
                  <motion.div 
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-5 mb-6 border border-gray-700/50"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-sm text-gray-400 mb-3">交易详情</div>
                    <div className="font-mono text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">类型:</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 font-medium">购买 PEPE</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">金额:</span>
                        <span className="text-white font-medium">0.1 ETH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">地址:</span>
                        <span className="text-white font-medium truncate">0x1234...5678</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">状态:</span>
                        <span className="text-green-400 font-medium">等待确认</span>
                      </div>
                    </div>
                  </motion.div>
                  <div className="flex gap-3">
                    <motion.button 
                      className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium shadow-lg shadow-green-500/20"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      确认
                    </motion.button>
                    <motion.button 
                      className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                      whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      取消
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-600/20 rounded-3xl blur-3xl z-0"></div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -trangray-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-gray-400 text-sm mb-2">向下滚动了解更多</p>
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 hover:bg-gradient-to-r from-orange-500/30 to-purple-500/30 border border-orange-500/30 px-4 py-2">
              核心特性
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">安全、高效、Agent 友好</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              零助记词设计，3 秒创建钱包，一键设置安全规则，让你的 Agent 安全执行交易
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-orange-400" />,
                title: "零助记词",
                description: "告别复杂助记词，采用嵌入式 AA 钱包技术，安全又便捷"
              },
              {
                icon: <Zap className="h-8 w-8 text-orange-400" />,
                title: "Agent 友好",
                description: "通过 UID 轻松集成，让NexClaw等 Agent 安全调用钱包功能"
              },
              {
                icon: <Clock className="h-8 w-8 text-orange-400" />,
                title: "3 秒创建",
                description: "简单几步，快速创建 Agent Wallet，立即开始使用"
              },
              {
                icon: <Lock className="h-8 w-8 text-orange-400" />,
                title: "安全规则",
                description: "一键设置安全规则，控制交易风险，保护资产安全"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 h-full"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/10">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 hover:bg-gradient-to-r from-orange-500/30 to-purple-500/30 border border-orange-500/30 px-4 py-2">
              定价方案
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">选择适合你的方案</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              从个人尝鲜到企业级部署，总有一款适合你
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Free",
                description: "个人尝鲜",
                price: "免费",
                features: [
                  { text: "每月可创建 5 个 Agent Wallet", available: true },
                  { text: "基础安全规则", available: true },
                  { text: "交易历史记录", available: true },
                  { text: "SLA 保障", available: false },
                  { text: "私有部署", available: false }
                ],
                buttonText: "开始使用",
                isRecommended: false,
                buttonClass: "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-700/50"
              },
              {
                title: "Plus",
                description: "重度 Agent 用户",
                price: "$9.9",
                priceUnit: "/ 月",
                features: [
                  { text: "每月可创建 15 个 Agent Wallet", available: true },
                  { text: "高级安全规则", available: true },
                  { text: "详细交易历史", available: true },
                  { text: "优先支持", available: true },
                  { text: "私有部署", available: false }
                ],
                buttonText: "升级到 Plus",
                isRecommended: true,
                buttonClass: "bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 hover:from-orange-600 hover:via-red-600 hover:to-purple-700 text-white shadow-xl shadow-orange-500/20"
              },
              {
                title: "Enterprise",
                description: "项目方 / 团队",
                price: "联系销售",
                features: [
                  { text: "无限 Agent Wallet", available: true },
                  { text: "企业级安全规则", available: true },
                  { text: "完整交易审计", available: true },
                  { text: "SLA 保障", available: true },
                  { text: "私有部署", available: true }
                ],
                buttonText: "联系我们",
                isRecommended: false,
                buttonClass: "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-700/50"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.isRecommended ? 'border-orange-500/50 shadow-xl shadow-orange-500/10' : 'border-gray-700/50 hover:border-orange-500/30'}`}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  {plan.isRecommended && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-2 text-sm font-medium">
                      推荐
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                    <div className="mt-6 mb-8">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      {plan.priceUnit && <span className="text-gray-400 text-xl">{plan.priceUnit}</span>}
                    </div>
                    <ul className="space-y-4 mt-8 mb-10">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${feature.available ? 'bg-green-500/20 text-green-400' : 'bg-gray-700/50 text-gray-500'}`}>
                            <Check className={`h-4 w-4 ${feature.available ? 'text-green-400' : 'text-gray-500'}`} />
                          </div>
                          <span className={feature.available ? 'text-white' : 'text-gray-500'}>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.button 
                      className={`w-full px-6 py-4 rounded-lg font-medium ${plan.buttonClass} ${plan.isRecommended ? 'shadow-xl shadow-orange-500/20' : ''}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.buttonText}
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 hover:bg-gradient-to-r from-orange-500/30 to-purple-500/30 border border-orange-500/30 px-4 py-2">
              用户评价
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">用户怎么说</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              来自真实用户的反馈和体验
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "张三",
                role: "AI 开发者",
                avatar: "👨‍💻",
                content: "NexClaw 让我的 Agent 能够安全地执行交易，零助记词设计非常方便，安全规则也很实用。"
              },
              {
                name: "李四",
                role: "区块链爱好者",
                avatar: "👩‍🚀",
                content: "界面美观，操作简单，3 秒就能创建钱包，非常适合快速体验和开发测试。"
              },
              {
                name: "王五",
                role: "企业CTO",
                avatar: "👨‍💼",
                content: "企业版的功能非常强大，安全审计和私有部署满足了我们的需求，客服响应也很及时。"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 h-full"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                      <span className="text-2xl">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              开始使用 <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-purple-400">NexClaw</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              让NexClaw安全帮你管钱，实现 AI Agent 与 Web3 钱包的完美结合
            </p>
            <motion.a
              href="/login"
              className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 text-white font-medium shadow-2xl shadow-indigo-500/20 text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              立即开始
            </motion.a>
            <p className="text-gray-500 mt-6 text-sm">
              无需信用卡，3 秒创建钱包，立即体验
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
