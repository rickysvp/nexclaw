'use client';

import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
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
            联系 <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-purple-400">我们</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            如有任何问题或建议，欢迎随时联系我们
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-white">联系方式</h2>
            <div className="space-y-8">
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/10">
                  <Mail className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">邮箱</h3>
                  <p className="text-gray-400">support@nexclaw.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/10">
                  <Phone className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">电话</h3>
                  <p className="text-gray-400">+86 123 4567 8910</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/10">
                  <MapPin className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">地址</h3>
                  <p className="text-gray-400">北京市朝阳区科技园区 88 号</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-6 text-white">社交媒体</h3>
              <div className="flex gap-4">
                {[
                  { name: "Twitter", icon: "🐦" },
                  { name: "Telegram", icon: "✈️" },
                  { name: "Discord", icon: "💬" },
                  { name: "GitHub", icon: "💻" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    className="w-12 h-12 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, borderColor: 'rgba(255, 165, 0, 0.5)', y: -3 }}
                  >
                    <span className="text-white text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 shadow-xl shadow-orange-500/5">
              <h2 className="text-3xl font-bold mb-8 text-white">发送消息</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm mb-2">姓名</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                      placeholder="请输入你的姓名"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2">邮箱</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                      placeholder="请输入你的邮箱"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">主题</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="请输入消息主题"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-2">消息</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="请输入你的消息"
                    required
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-medium shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255, 165, 0, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  发送消息 <Send className="h-4 w-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
