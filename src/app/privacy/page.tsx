'use client';

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            隐私 <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-purple-400">政策</span>
          </h1>
          
          <div className="space-y-8">
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold">信息保护承诺</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                NexClaw 致力于保护用户的隐私和个人信息安全。我们采用业界领先的安全技术和最佳实践，确保您的数据得到妥善保护。
              </p>
            </section>

            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold">信息收集</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                我们收集的信息包括：
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                  账户信息（邮箱、用户名）
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                  钱包地址和交易记录
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                  设备信息和日志数据
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold">数据安全</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                我们使用加密技术保护您的数据，包括传输层安全（TLS）加密和高级加密标准（AES）存储加密。您的私钥永远不会离开您的设备。
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
