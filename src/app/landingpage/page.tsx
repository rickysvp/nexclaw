"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Copy,
  Check,
  ArrowRight,
  Terminal,
  Zap,
  Layers,
  Shield,
  Lock,
  Globe,
  ChevronDown,
  ChevronUp,
  Bot,
  Package,
  Sparkles,
  Quote,
  Star,
  Users,
  Menu,
  X,
  Github,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { languages, getTranslation, type Language } from "./i18n";

const installCommand = "npx ClawWallet@latest install clawwallet";

const navLinks = [
  { key: "nav.features", href: "#features" },
  { key: "nav.security", href: "#security" },
  { key: "nav.reviews", href: "#testimonials" },
  { key: "nav.faq", href: "#faq" },
];

const statsKeys = [
  { value: "10K+", key: "stats.wallets" },
  { value: "99.9%", key: "stats.uptime" },
  { value: "50+", key: "stats.clients" },
  { value: "4", key: "stats.chains" },
];

const featuresKeys = [
  { icon: Shield, titleKey: "features.tee.title", descKey: "features.tee.desc" },
  { icon: Zap, titleKey: "features.fast.title", descKey: "features.fast.desc" },
  { icon: Layers, titleKey: "features.multichain.title", descKey: "features.multichain.desc" },
];

const detailedFeaturesKeys = [
  { icon: Lock, titleKey: "security.teeSharding.title", descKey: "security.teeSharding.desc" },
  { icon: Shield, titleKey: "security.txEngine.title", descKey: "security.txEngine.desc" },
  { icon: Check, titleKey: "security.confirm.title", descKey: "security.confirm.desc" },
  { icon: Globe, titleKey: "security.scan.title", descKey: "security.scan.desc" },
  { icon: Lock, titleKey: "security.encryption.title", descKey: "security.encryption.desc" },
];

const faqKeys = [
  { qKey: "faq.q1.question", aKey: "faq.q1.answer" },
  { qKey: "faq.q2.question", aKey: "faq.q2.answer" },
  { qKey: "faq.q3.question", aKey: "faq.q3.answer" },
  { qKey: "faq.q4.question", aKey: "faq.q4.answer" },
  { qKey: "faq.q5.question", aKey: "faq.q5.answer" },
];

const partners = [
  { name: "Ethereum", logoPath: "/logos/ethereum.png" },
  { name: "Monad", logoPath: "/logos/monad.png" },
  { name: "SUI", logoPath: "/logos/sui.png" },
  { name: "Polygon", logoPath: "/logos/polygon.png" },
  { name: "BSC", logoPath: "/logos/bsc.png" },
];

const testimonials = [
  {
    name: "张明",
    nameEn: "Zhang Ming",
    role: "AI 开发者",
    roleEn: "AI Developer",
    company: "TechFlow",
    avatar: "👨‍💻",
    content: "ClawWallet 让我们的 AI Agent 瞬间拥有了加密支付能力，集成过程不到5分钟。TEE安全架构让我们非常放心。",
    contentEn: "ClawWallet gave our AI Agent instant crypto payment capabilities, integration took less than 5 minutes. The TEE security architecture gives us complete peace of mind.",
    rating: 5,
  },
  {
    name: "李雪",
    nameEn: "Li Xue",
    role: "产品经理",
    roleEn: "Product Manager",
    company: "DeFi Labs",
    avatar: "👩‍💼",
    content: "作为OpenClaw原生Skill，ClawWallet的无缝体验令人印象深刻。我们的用户现在可以通过自然语言完成加密交易。",
    contentEn: "As a native OpenClaw Skill, ClawWallet's seamless experience is impressive. Our users can now complete crypto transactions through natural language.",
    rating: 5,
  },
  {
    name: "王强",
    nameEn: "Wang Qiang",
    role: "CTO",
    roleEn: "CTO",
    company: "ChainMind",
    avatar: "👨‍🚀",
    content: "无私钥设计解决了我们最大的痛点。团队成员不再需要担心私钥管理，安全性反而更高了。",
    contentEn: "The keyless design solved our biggest pain point. Team members no longer worry about key management, and security is actually higher.",
    rating: 5,
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-5"
        >
          <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function LandingPage() {
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>("zh");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const t = (key: string) => getTranslation(key, currentLang);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation - Futuristic Design */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative border-b border-gray-200/50 bg-white/70 backdrop-blur-2xl">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow">
                  <img 
                    src="/claw.png" 
                    alt="ClawWallet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-900 font-bold text-sm tracking-tight">ClawWallet</span>
              </Link>

              {/* Right Side Actions */}
              <div className="flex items-center gap-4">
                {/* Language Switcher */}
                <div className="relative">
                  <button
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
                  >
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">
                      {languages.find((l) => l.code === currentLang)?.flag}
                    </span>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </button>
                  
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl border border-gray-100 shadow-xl py-1 max-h-64 overflow-y-auto"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLang(lang.code);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                            currentLang === lang.code ? "text-orange-600" : "text-gray-700"
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Social Links - Desktop */}
                <div className="hidden md:flex items-center gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-600 hover:text-gray-900"
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 flex items-center gap-4">
                <a href="https://github.com" className="flex items-center gap-2 text-gray-600">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a href="https://twitter.com" className="flex items-center gap-2 text-gray-600">
                  <Twitter className="w-4 h-4" />
                  <span className="text-sm">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 min-h-screen flex flex-col">
        <div className="max-w-5xl mx-auto px-6 text-center flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
                <span className="relative inline-block">
                  ClawWallet
                  {/* Badge - Top Right Corner of ClawWallet */}
                  <span className="absolute -top-2 -right-2 translate-x-full -translate-y-1/2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold shadow-lg shadow-orange-500/30 whitespace-nowrap tracking-wide">
                      <Package className="w-3.5 h-3.5" />
                      <span>{t("hero.badge")}</span>
                    </span>
                  </span>
                </span>
                <br />
                <span className="text-orange-500">{t("hero.title")}</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Install Command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="pt-4"
            >
              <div className="inline-flex items-center gap-2 px-2 py-2 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl shadow-black/20">
                <code className="text-sm text-gray-300 font-mono px-4">{installCommand}</code>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      {t("hero.copied")}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {t("hero.copyBtn")}
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">
                {t("hero.copyHint")}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Partners Section - Inside Hero */}
        <div className="mt-auto pt-16">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-gray-400 text-xs mb-6">{t("partners.title")}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={partner.logoPath} 
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-medium text-xs tracking-wide">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Example Section - Second Screen */}
      <section className="py-20 bg-[#fafafa] border-t border-gray-100 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{t("usage.title")}</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {t("usage.subtitle")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Terminal className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium text-sm mb-0.5">{t("usage.create")}</h4>
                    <code className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">@openclaw {t("usage.create")}</code>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wallet className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium text-sm mb-0.5">{t("usage.balance")}</h4>
                    <code className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">@openclaw {t("usage.balance")}</code>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium text-sm mb-0.5">{t("usage.send")}</h4>
                    <code className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">@openclaw {t("usage.send")} 0.1 ETH...</code>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-white">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <span className="text-gray-400 text-xs ml-2">OpenClaw</span>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs">👤</div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 text-gray-700 text-sm shadow-sm border border-gray-100">
                      @openclaw {t("usage.create")}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 text-gray-700 text-sm shadow-sm border border-gray-100 space-y-1">
                      <p>✅ {t("usage.create")} {t("hero.copied")}!</p>
                      <p className="font-mono text-xs text-gray-400">
                        {t("usage.balance")}: 0x7a2f...9c4d<br/>
                        UID: claw_wallet_abc123
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Social Proof */}
      <section className="py-12 bg-[#fafafa] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsKeys.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{t(stat.key)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">{t("features.title")}</h2>
            <p className="text-gray-500">{t("features.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuresKeys.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(feature.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section id="security" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {t("security.title")}
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {t("security.subtitle")}
              </p>
              <div className="space-y-6">
                {detailedFeaturesKeys.map((feature, index) => (
                  <motion.div
                    key={feature.titleKey}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{t(feature.titleKey)}</h4>
                      <p className="text-gray-500 text-sm">{t(feature.descKey)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-12 h-12 text-orange-500" />
                  </div>
                  <p className="text-gray-600 font-medium">TEE {t("nav.security")}</p>
                  <p className="text-gray-400 text-sm mt-1">Hardware Security</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - 用户使用反馈 */}
      <section id="testimonials" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-4">
              <Users className="w-4 h-4 text-orange-500" />
              <span className="text-orange-600 text-sm font-medium">{t("testimonials.badge")}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">{t("testimonials.title")}</h2>
            <p className="text-gray-500">{t("testimonials.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <div className="flex gap-3 mb-4">
                  <Quote className="w-8 h-8 text-orange-200 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {currentLang === 'zh' ? testimonial.content : testimonial.contentEn}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <span className="text-2xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {currentLang === 'zh' ? testimonial.name : testimonial.nameEn}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {currentLang === 'zh' ? testimonial.role : testimonial.roleEn} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">{t("faq.title")}</h2>
            <p className="text-gray-500">{t("faq.subtitle")}</p>
          </div>
          <div className="space-y-0">
            {faqKeys.map((faq, index) => (
              <FAQItem key={index} question={t(faq.qKey)} answer={t(faq.aKey)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="install" className="py-20 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              {t("cta.title")}
            </h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {t("cta.subtitle")}
            </p>
            
            {/* Install Command in CTA */}
            <div className="inline-flex items-center gap-2 px-2 py-2 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl mb-6">
              <code className="text-sm text-gray-300 font-mono px-4">{installCommand}</code>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    {t("hero.copied")}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {t("hero.copyBtn")}
                  </>
                )}
              </button>
            </div>
            
            <p className="text-gray-400 text-sm">
              {t("cta.footer")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md overflow-hidden">
                <img 
                  src="/claw.png" 
                  alt="ClawWallet"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-600 text-sm">Claw Wallet</span>
            </div>
            <p className="text-gray-400 text-xs">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
