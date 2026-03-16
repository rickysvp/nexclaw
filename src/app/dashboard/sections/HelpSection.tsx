'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  Search,
  Book,
  MessageCircle,
  Video,
  FileText,
  ChevronRight,
  ExternalLink,
  Mail,
  Phone,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HelpSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: '如何创建新钱包？',
      answer: '点击"钱包管理"页面的"创建钱包"按钮，填写钱包名称和描述，选择钱包类型，然后点击确认即可创建新钱包。',
    },
    {
      id: '2',
      question: '如何转账？',
      answer: '在钱包列表中选择要转出的钱包，点击"转账"按钮，输入收款地址和金额，确认交易详情后提交即可。',
    },
    {
      id: '3',
      question: '什么是交易审批？',
      answer: '交易审批是一种安全机制，当交易金额超过设定阈值或触发风控规则时，需要管理员审批才能执行。',
    },
    {
      id: '4',
      question: '如何设置安全规则？',
      answer: '进入"风控安全"页面，您可以配置支出限额、白名单、地理限制等安全规则来保护您的资产。',
    },
    {
      id: '5',
      question: '忘记密码怎么办？',
      answer: '请联系管理员重置密码。为了安全起见，请确保您的账户已绑定邮箱或手机。',
    },
  ];

  const resources = [
    {
      title: '使用文档',
      description: '详细的用户指南和操作说明',
      icon: Book,
      href: '#',
    },
    {
      title: '视频教程',
      description: '观看操作视频快速上手',
      icon: Video,
      href: '#',
    },
    {
      title: 'API 文档',
      description: '用户接口文档',
      icon: FileText,
      href: '#',
    },
    {
      title: '社区论坛',
      description: '与其他用户交流讨论',
      icon: MessageCircle,
      href: '#',
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">帮助中心</h1>
        <p className="text-gray-500 mt-1">查找答案或联系我们获取帮助</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="搜索问题..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
        />
      </div>

      {/* Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {resources.map((resource, index) => (
          <motion.a
            key={resource.title}
            href={resource.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
              <resource.icon className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{resource.title}</h3>
            <p className="text-sm text-gray-500">{resource.description}</p>
          </motion.a>
        ))}
      </div>

      {/* FAQ */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">常见问题</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="p-6">
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${
                  expandedFaq === faq.id ? 'rotate-90' : ''
                }`} />
              </button>
              {expandedFaq === faq.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-gray-500 mt-3"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
        <h2 className="text-lg font-bold mb-4">联系支持</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="mailto:support@nexclaw.com" className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
            <Mail className="h-5 w-5" />
            <div>
              <p className="font-medium">邮件支持</p>
              <p className="text-sm text-orange-100">support@nexclaw.com</p>
            </div>
          </a>
          <a href="tel:+8610-12345678" className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
            <Phone className="h-5 w-5" />
            <div>
              <p className="font-medium">电话支持</p>
              <p className="text-sm text-orange-100">+86 10-12345678</p>
            </div>
          </a>
          <div className="flex items-center gap-3 p-4 bg-white/10 rounded-xl">
            <Clock className="h-5 w-5" />
            <div>
              <p className="font-medium">服务时间</p>
              <p className="text-sm text-orange-100">周一至周五 9:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
