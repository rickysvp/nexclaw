'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle, Search, Book, MessageCircle, Video, FileText,
  ChevronDown, ChevronUp, ExternalLink, Mail
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// FAQ data
const faqs = [
  {
    id: '1',
    question: '什么是 Agent Wallet？',
    answer: 'Agent Wallet 是 NexClaw 提供的智能钱包服务，允许 AI Agent 在您的授权下执行交易操作。每个钱包都有独立的地址和私钥，您可以设置交易限额和风控规则来确保安全。',
    category: '基础',
  },
  {
    id: '2',
    question: '如何创建新的钱包？',
    answer: '在"钱包管理"页面点击"创建钱包"按钮，输入钱包名称后即可创建。每个账户最多可以创建 15 个钱包。',
    category: '钱包',
  },
  {
    id: '3',
    question: '交易审批流程是怎样的？',
    answer: '当 Agent 发起交易请求时，系统会根据您设置的风控规则进行判断。如果交易触发规则或超过限额，将进入待审批状态。您需要在"交易审批"页面手动批准或拒绝该交易。',
    category: '交易',
  },
  {
    id: '4',
    question: '如何设置风控规则？',
    answer: '进入"风控安全"页面，您可以设置单笔交易限额、日累计限额、交易频率限制等。系统会根据这些规则自动拦截可疑交易。',
    category: '安全',
  },
  {
    id: '5',
    question: '忘记 PIN 码怎么办？',
    answer: 'PIN 码用于交易确认和安全操作。如果忘记 PIN 码，您需要使用钱包的助记词重新导入钱包来重置 PIN 码。请务必妥善保管助记词。',
    category: '安全',
  },
  {
    id: '6',
    question: '如何导出私钥？',
    answer: '在"钱包管理"页面，点击钱包右侧的更多按钮，选择"导出私钥"。需要输入正确的 PIN 码才能导出。请注意：私钥是访问资产的唯一凭证，请勿泄露给任何人！',
    category: '钱包',
  },
];

// Guide categories
const guides = [
  { id: 'quickstart', title: '快速入门', icon: Book, description: '了解 NexClaw 的基本功能' },
  { id: 'wallet', title: '钱包管理', icon: FileText, description: '学习如何管理您的钱包' },
  { id: 'security', title: '安全指南', icon: HelpCircle, description: '保护您的资产安全' },
  { id: 'api', title: 'API 文档', icon: FileText, description: '开发者集成指南' },
];

export default function HelpSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(faqs.map(f => f.category)))];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">帮助中心</h1>
        <p className="text-gray-400">查找答案和学习如何使用 NexClaw</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -trangray-y-1/2 h-5 w-5 text-gray-500" />
        <Input
          placeholder="搜索问题或关键词..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 py-6 bg-gray-800/50 border-gray-700 text-white text-lg"
        />
      </div>

      {/* Quick Guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {guides.map((guide) => (
          <motion.div
            key={guide.id}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 cursor-pointer hover:border-orange-500/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center mb-4">
              <guide.icon className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="font-bold text-white mb-2">{guide.title}</h3>
            <p className="text-sm text-gray-400">{guide.description}</p>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">常见问题</h2>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {cat === 'all' ? '全部' : cat}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border border-gray-700/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-800/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Badge className="bg-gray-700 text-gray-300">{faq.category}</Badge>
                  <span className="font-medium text-white text-left">{faq.question}</span>
                </div>
                {expandedFaq === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <AnimatePresence>
                {expandedFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-gray-700/50"
                  >
                    <p className="p-4 text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <HelpCircle className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">没有找到匹配的问题</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-orange-500/20 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">需要更多帮助？</h3>
              <p className="text-gray-400">我们的支持团队随时为您服务</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              <Mail className="h-4 w-4 mr-2" />
              发送邮件
            </Button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              在线客服
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
