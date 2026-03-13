"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Wallet,
  Copy,
  Check,
  ArrowRight,
  Terminal,
  Zap,
  Shield,
  Lock,
  Globe,
  ChevronDown,
  Bot,
  Package,
  Star,
  Users,
  Menu,
  X,
  Github,
  Twitter,
  Cpu,
  Fingerprint,
  Eye,
  Activity,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import Link from "next/link";
import { languages, getTranslation, type Language } from "./i18n";

// Typewriter effect hook
function useTypewriter(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isTyping };
}

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
}

// 3D Card component
function FloatingCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    setRotateY((mouseX / (rect.width / 2)) * 10);
    setRotateX(-(mouseY / (rect.height / 2)) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const [currentLang, setCurrentLang] = useState<Language>("zh");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const t = (key: string) => getTranslation(key, currentLang);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Typewriter effect for install command
  const { displayText: typedCommand, isTyping } = useTypewriter(
    "npx clawwallet@latest install",
    80,
    1000
  );

  // Counter animations for stats
  const { count: walletsCount, ref: walletsRef } = useCounter(10000, 2000);
  const { count: uptimeCount, ref: uptimeRef } = useCounter(999, 2000);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx clawwallet@latest install");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Chain icons for floating animation
  const chains = [
    { name: "Ethereum", color: "#627EEA" },
    { name: "Solana", color: "#14F195" },
    { name: "Base", color: "#0052FF" },
    { name: "Arbitrum", color: "#28A0F0" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">ClawWallet</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["features", "security", "testimonials", "faq"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
              >
                {t(`nav.${section}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg">
                  {languages.find((l) => l.code === currentLang)?.flag}
                </span>
                <span className="text-sm text-gray-700">
                  {languages.find((l) => l.code === currentLang)?.label}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                          currentLang === lang.code ? "text-orange-500" : "text-gray-700"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
              {t("nav.getStarted")}
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {["features", "security", "testimonials", "faq"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-gray-700 py-2 border-b border-gray-100"
                >
                  {t(`nav.${section}`)}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #f97316 1px, transparent 1px),
                linear-gradient(to bottom, #f97316 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-100/50 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm text-orange-700 font-medium">{t("hero.badge")}</span>
              </motion.div>

              {/* Title */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">
                    Claw
                  </span>
                  <span className="text-orange-500">Wallet</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-600 font-light"
                >
                  {t("hero.title")}
                </motion.p>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-500 max-w-lg leading-relaxed"
              >
                {t("hero.subtitle")}
              </motion.p>

              {/* Feature Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {[t("hero.feature1"), t("hero.feature2"), t("hero.feature3")].map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Install Command */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Terminal className="w-4 h-4" />
                  <span>{t("hero.runInTerminal")}</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl">
                  <code className="flex-1 font-mono text-sm text-green-400">
                    <span className="text-gray-500">$</span> {typedCommand}
                    {isTyping && <span className="animate-pulse">▊</span>}
                  </code>
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: 3D Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <FloatingCard className="relative">
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 overflow-hidden">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                        <Wallet className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">ClawWallet</p>
                        <p className="text-xs text-gray-400">Multi-Chain Agent Wallet</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-green-600">Active</span>
                    </div>
                  </div>

                  {/* Balance Display */}
                  <div className="mb-6 p-4 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100">
                    <p className="text-sm text-gray-500 mb-1">Total Balance</p>
                    <p className="text-3xl font-bold text-gray-900">$12,458.32</p>
                    <p className="text-sm text-green-600 mt-1">+8.4% this week</p>
                  </div>

                  {/* Chain Icons */}
                  <div className="flex items-center justify-between">
                    {chains.map((chain, i) => (
                      <motion.div
                        key={chain.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: chain.color }}
                        >
                          {chain.name[0]}
                        </div>
                        <span className="text-xs text-gray-400">{chain.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl" />
                </div>

                {/* Floating Chain Icons */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 w-14 h-14 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center"
                >
                  <div className="w-8 h-8 bg-[#627EEA] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    E
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center"
                >
                  <div className="w-6 h-6 bg-[#14F195] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                    S
                  </div>
                </motion.div>
              </FloatingCard>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-xs">{t("hero.scrollDown")}</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", key: "stats.wallets", count: walletsCount, ref: walletsRef },
              { value: "99.9%", key: "stats.uptime", count: uptimeCount, ref: uptimeRef },
              { value: "50+", key: "stats.clients" },
              { value: "4", key: "stats.chains" },
            ].map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div ref={(stat as any).ref} className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {(stat as any).count !== undefined
                    ? (stat as any).count.toLocaleString() + (stat.value.includes("%") ? "%" : "+")
                    : stat.value}
                </div>
                <p className="text-gray-500">{t(stat.key)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Asymmetric Grid */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full text-sm text-orange-600 mb-4">
              <Zap className="w-4 h-4" />
              {t("features.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("features.title")}</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t("features.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Feature Card - TEE Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2"
            >
              <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.3),_transparent_50%)]" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t("features.tee.title")}</h3>
                  <p className="text-gray-300 mb-6 flex-1">{t("features.tee.desc")}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-3 py-1 bg-white/10 rounded-full">AWS Nitro</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full">Hardware Enclave</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small Feature Cards */}
            {[
              { icon: Zap, titleKey: "features.fast.title", descKey: "features.fast.desc" },
              { icon: Globe, titleKey: "features.chains.title", descKey: "features.chains.desc" },
              { icon: Bot, titleKey: "features.native.title", descKey: "features.native.desc" },
            ].map((feature, i) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (i + 1) }}
              >
                <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-orange-100 transition-all group">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <feature.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(feature.titleKey)}</h3>
                  <p className="text-gray-500 text-sm">{t(feature.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-sm text-green-600 mb-4">
              <Lock className="w-4 h-4" />
              {t("security.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("security.title")}</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t("security.subtitle")}</p>
          </motion.div>

          {/* Security Flow */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 -translate-y-1/2" />

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: Fingerprint, title: t("security.teeSharding.title"), step: "01" },
                { icon: Activity, title: t("security.txEngine.title"), step: "02" },
                { icon: Eye, title: t("security.confirm.title"), step: "03" },
                { icon: ShieldCheck, title: t("security.scan.title"), step: "04" },
                { icon: Lock, title: t("security.encryption.title"), step: "05" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-orange-500 font-mono mb-2 block">{item.step}</span>
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("cta.readyTitle")}</h2>
            <p className="text-xl text-orange-100 mb-10">{t("cta.readySubtitle")}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                <code className="font-mono text-white">$ npx clawwallet@latest install</code>
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-white/70" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-orange-100">
              <span className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                {t("cta.feature1")}
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                {t("cta.feature2")}
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                {t("cta.feature3")}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">ClawWallet</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
