'use client';

import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            服务 <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-purple-400">条款</span>
          </h1>

          <div className="space-y-8">
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold">接受条款</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                使用 NexClaw 服务即表示您同意本服务条款。如果您不同意这些条款，请不要使用我们的服务。我们保留随时修改这些条款的权利。
              </p>
            </section>

            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold">用户责任</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                您同意：
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  提供真实、准确的个人信息
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  妥善保管您的账户凭证和私钥
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  遵守所有适用的法律法规
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold">风险声明</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                加密货币交易涉及高风险。您应该了解这些风险并谨慎投资。NexClaw 不对任何投资损失负责。请只投资您能承受损失的金额。
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
