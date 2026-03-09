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
import Link from "next/link";

// Logo Component
const ClawLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none">
    <rect width="120" height="120" rx="28" fill="#FF4D2E"/>
    <path d="M35 45C35 45 25 55 25 70C25 85 35 95 45 90C50 87 52 80 50 75C48 70 42 68 40 72C38 76 42 78 45 76" 
          stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M85 45C85 45 95 55 95 70C95 85 85 95 75 90C70 87 68 80 70 75C72 70 78 68 80 72C82 76 78 78 75 76" 
          stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <ellipse cx="60" cy="70" rx="12" ry="18" fill="white"/>
    <path d="M55 55C55 50 58 45 60 42C62 45 65 50 65 55" 
          stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <circle cx="48" cy="65" r="3" fill="#FF4D2E"/>
    <circle cx="72" cy="65" r="3" fill="#FF4D2E"/>
    <circle cx="60" cy="75" r="4" fill="#FF4D2E"/>
  </svg>
);

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
    className={`w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 ${color}`}
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
    { icon: Shield, text: "TEE 企业级安全防护" },
    { icon: Layers, text: "20+ 多链资产管理" },
    { icon: Zap, text: "自动化交易策略" },
  ];

  const highlights = [
    "智能合约自动执行",
    "TEE 分片安全保护",
    "实时风险监控",
    "跨链资产桥接",
  ];

  return (
    <div className="min-h-screen flex bg-black">
      {/* 左侧 - 品牌展示 */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FF4D2E]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF4D2E]/3 rounded-full blur-[100px]"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline">
              <ClawLogo className="w-10 h-10" />
              <div>
                <span className="text-2xl font-bold text-white">Claw Wallet</span>
                <p className="text-sm text-[#A09890]">OpenClaw 原生加密钱包</p>
              </div>
            </Link>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4D2E]/10 border border-[#FF4D2E]/20 mb-6">
                <Cpu className="w-4 h-4 text-[#FF4D2E]" />
                <span className="text-sm text-[#FF4D2E]">专为 AI Agent 打造</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl xl:text-6xl font-extrabold text-white leading-tight tracking-[-0.03em]"
            >
              Agent 时代的
              <br />
              <span className="text-[#FF4D2E]">
                Web3 加密钱包
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-[#A09890] max-w-lg leading-relaxed"
            >
              用户一键登录即可创建钱包，通过精细权限管控授权给 OpenClaw Agent 自主执行链上操作。TEE 分片加密，安全、可控、多链支持。
            </motion.p>

            {/* 功能亮点 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="grid grid-cols-2 gap-4 max-w-md"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-[#E8E4DF]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D2E] flex-shrink-0" />
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
                <div key={index} className="flex items-center gap-2 text-[#A09890]">
                  <feature.icon className="w-5 h-5 text-[#FF4D2E]" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="text-sm text-[#A09890]/60">
            © 2026 Claw Wallet. Built for the OpenClaw ecosystem.
          </div>
        </div>
      </motion.div>

      {/* 右侧 - 登录表单 */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative">
        {/* Mobile Background */}
        <div className="absolute inset-0 lg:hidden">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#FF4D2E]/5 rounded-full blur-[100px]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8 relative z-10"
        >
          {/* 移动端 Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <ClawLogo className="w-10 h-10" />
            <div>
              <span className="text-2xl font-bold text-white">Claw Wallet</span>
              <p className="text-xs text-[#A09890]">OpenClaw 原生加密钱包</p>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">欢迎回来</h2>
            <p className="text-[#A09890]">选择登录方式以继续</p>
          </div>

          {/* 登录方式切换 */}
          <div className="flex p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl">
            <button
              onClick={() => setLoginMethod('social')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                loginMethod === 'social'
                  ? 'bg-[#FF4D2E] text-white'
                  : 'text-[#A09890] hover:text-white'
              }`}
            >
              社交登录
            </button>
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                loginMethod === 'email'
                  ? 'bg-[#FF4D2E] text-white'
                  : 'text-[#A09890] hover:text-white'
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
                color="bg-white text-black hover:bg-gray-100 border-white/20"
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
                color="bg-white/[0.04] text-white border-white/[0.08] hover:bg-white/[0.08]"
              />

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/[0.08]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-black text-[#A09890]">或者</span>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => setLoginMethod('email')}
                className="w-full h-12 border-white/[0.08] text-[#E8E4DF] hover:bg-white/[0.04] hover:text-white hover:border-white/[0.12]"
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
                  <Label htmlFor="email" className="text-[#E8E4DF]">邮箱地址</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A09890]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-[#A09890]/60 focus:border-[#FF4D2E] focus:ring-[#FF4D2E]/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#E8E4DF]">密码</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A09890]" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-[#A09890]/60 focus:border-[#FF4D2E] focus:ring-[#FF4D2E]/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A09890] hover:text-[#E8E4DF] transition-colors"
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
                  <Label htmlFor="remember" className="text-sm text-[#A09890] cursor-pointer">
                    记住我
                  </Label>
                </div>
                <button type="button" className="text-sm text-[#FF4D2E] hover:text-[#FF6B47] transition-colors">
                  忘记密码？
                </button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#FF4D2E] hover:bg-[#FF6B47] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#FF4D2E]/25 disabled:opacity-50"
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
                className="w-full text-center text-sm text-[#A09890] hover:text-[#E8E4DF] transition-colors"
              >
                ← 返回社交登录
              </button>
            </motion.form>
          )}

          <div className="text-center">
            <p className="text-[#A09890] text-sm">
              还没有账户？{" "}
              <button 
                onClick={() => router.push("/login")}
                className="text-[#FF4D2E] hover:text-[#FF6B47] font-medium transition-colors"
              >
                立即注册
              </button>
            </p>
          </div>

          {/* 演示账户提示 */}
          <div className="p-4 rounded-lg bg-white/[0.04] border border-white/[0.08]">
            <p className="text-xs text-[#A09890] text-center">
              演示账户: demo@clawwallet.com / demo123
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
