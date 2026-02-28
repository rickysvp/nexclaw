"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Wallet, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  CheckCircle,
  Shield
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const router = useRouter();
  const { register, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  if (isAuthenticated) {
    router.push("/dashboard");
    return null;
  }

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      setError("请输入姓名");
      return false;
    }
    if (!formData.email.trim()) {
      setError("请输入邮箱");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("请输入有效的邮箱地址");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (formData.password.length < 8) {
      setError("密码至少需要8个字符");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("两次输入的密码不一致");
      return false;
    }
    if (!formData.agreeTerms) {
      setError("请同意服务条款");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    setError("");
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateStep2()) return;

    setIsLoading(true);

    const success = await register({
      email: formData.email,
      password: formData.password,
      name: formData.name,
    });

    if (success) {
      router.push("/dashboard");
    } else {
      setError("注册失败，请重试");
      setIsLoading(false);
    }
  };

  const features = [
    "多链资产管理",
    "AI Agent 智能审批",
    "企业级安全防护",
    "实时风控监控",
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* 左侧 - 品牌展示 */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-cyan-600/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">NexClaw Wallet</span>
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
                开启您的
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Web3 之旅
                </span>
              </h1>
              <p className="text-lg text-gray-400 max-w-md">
                加入数千名用户，体验下一代 Agent 钱包管理平台
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>银行级安全加密</span>
            </div>
            <span>•</span>
            <span>© 2026 NexClaw Wallet</span>
          </div>
        </div>
      </motion.div>

      {/* 右侧 - 注册表单 */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          {/* 移动端 Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">NexClaw Wallet</span>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">创建账户</h2>
            <p className="text-gray-400">
              {step === 1 ? "填写基本信息" : "设置安全密码"}
            </p>
          </div>

          {/* 步骤指示器 */}
          <div className="flex items-center justify-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
              step >= 1 ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-500"
            }`}>
              1
            </div>
            <div className={`w-16 h-1 rounded-full transition-colors ${
              step >= 2 ? "bg-indigo-600" : "bg-gray-800"
            }`} />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
              step >= 2 ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-500"
            }`}>
              2
            </div>
          </div>

          <form onSubmit={step === 1 ? (e) => { e.preventDefault(); handleNext(); } : handleSubmit} className="space-y-6">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            {step === 1 ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">姓名</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -trangray-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="您的姓名"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">邮箱地址</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -trangray-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                      required
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">密码</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -trangray-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="至少8个字符"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -trangray-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-300">确认密码</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -trangray-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="再次输入密码"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-gray-700 bg-gray-800 text-indigo-600 focus:ring-indigo-500/20"
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer">
                    我同意{" "}
                    <button type="button" className="text-indigo-400 hover:text-indigo-300">服务条款</button>
                    {" "}和{" "}
                    <button type="button" className="text-indigo-400 hover:text-indigo-300">隐私政策</button>
                  </Label>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              {step === 2 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1 h-12 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  返回
                </Button>
              )}
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : step === 1 ? (
                  <>
                    下一步
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                ) : (
                  "创建账户"
                )}
              </Button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              已有账户？{" "}
              <button 
                onClick={() => router.push("/login")}
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                立即登录
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
