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
  Shield,
  Zap,
  Globe,
  Chrome,
  Twitter,
  Github,
  Cpu,
  Bot,
  Layers,
  CheckCircle2
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

// 社交登录按钮
const SocialButton = ({ 
  icon: Icon, 
  label, 
  onClick, 
  color 
}: { 
  icon: React.ElementType; 
  label: string; 
  onClick: () => void;
  color: string;
}) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${color}`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </motion.button>
);

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loginMethod, setLoginMethod] = useState<'social' | 'email'>('social');
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // 如果已登录，重定向到仪表盘
  if (isAuthenticated) {
    router.push("/dashboard");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const success = await login({
      email: formData.email,
      password: formData.password,
      rememberMe: formData.rememberMe,
    });

    if (success) {
      router.push("/dashboard");
    } else {
      setError("邮箱或密码错误");
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    // 模拟社交登录
    setTimeout(() => {
      login({
        email: `user@${provider}.com`,
        password: "social_auth_token",
        rememberMe: true,
      });
      router.push("/dashboard");
    }, 1000);
  };

  const features = [
    { icon: Bot, text: "AI Agent 智能托管" },
    { icon: Shield, text: "企业级安全防护" },
    { icon: Layers, text: "多链资产管理" },
    { icon: Zap, text: "自动化交易策略" },
  ];

  const highlights = [
    "智能合约自动执行",
    "多签安全保护",
    "实时风险监控",
    "跨链资产桥接",
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-purple-600/10 to-blue-600/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80')] bg-cover bg-center opacity-10" />
        
        {/* 动态背景网格 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 via-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold text-white">NexClaw</span>
                <p className="text-sm text-gray-400">Agent Wallet</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <Cpu className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-300">专为 AI Agent 打造</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl xl:text-6xl font-bold text-white leading-tight"
            >
              智能安全
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
                Agent 钱包
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-gray-400 max-w-lg"
            >
              为 AI Agent 打造的智能安全钱包，支持多链资产管理、
              自动化交易执行、实时风控监控
            </motion.p>

            {/* 功能亮点 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="grid grid-cols-2 gap-4 max-w-md"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <feature.icon className="w-5 h-5 text-orange-400" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="text-sm text-gray-500">
            © 2026 NexClaw. All rights reserved.
          </div>
        </div>
      </motion.div>

      {/* 右侧 - 登录表单 */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          {/* 移动端 Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">NexClaw</span>
              <p className="text-xs text-gray-400">Agent Wallet</p>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">欢迎回来</h2>
            <p className="text-gray-400">选择登录方式以继续</p>
          </div>

          {/* 登录方式切换 */}
          <div className="flex p-1 bg-gray-800/50 rounded-xl">
            <button
              onClick={() => setLoginMethod('social')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                loginMethod === 'social'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              社交登录
            </button>
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                loginMethod === 'email'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              邮箱登录
            </button>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* 社交登录 */}
          {loginMethod === 'social' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <SocialButton
                icon={Chrome}
                label="使用 Google 登录"
                onClick={() => handleSocialLogin('google')}
                color="bg-white text-gray-900 hover:bg-gray-100 border-gray-200"
              />
              <SocialButton
                icon={Twitter}
                label="使用 Twitter 登录"
                onClick={() => handleSocialLogin('twitter')}
                color="bg-[#1DA1F2]/10 text-[#1DA1F2] border-[#1DA1F2]/30 hover:bg-[#1DA1F2]/20"
              />
              <SocialButton
                icon={Github}
                label="使用 GitHub 登录"
                onClick={() => handleSocialLogin('github')}
                color="bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
              />

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-950 text-gray-500">或者</span>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => setLoginMethod('email')}
                className="w-full h-12 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                使用邮箱登录
              </Button>
            </motion.div>
          )}

          {/* 邮箱登录 */}
          {loginMethod === 'email' && (
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">邮箱地址</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">密码</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked })}
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer">
                    记住我
                  </Label>
                </div>
                <button type="button" className="text-sm text-orange-400 hover:text-orange-300 transition-colors">
                  忘记密码？
                </button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    登录
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <button
                type="button"
                onClick={() => setLoginMethod('social')}
                className="w-full text-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                ← 返回社交登录
              </button>
            </motion.form>
          )}

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              还没有账户？{" "}
              <button 
                onClick={() => router.push("/register")}
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
              >
                立即注册
              </button>
            </p>
          </div>

          {/* 演示账户提示 */}
          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
            <p className="text-xs text-gray-500 text-center">
              演示账户: demo@nexclaw.com / demo123
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
