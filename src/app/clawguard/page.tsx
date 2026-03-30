"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClawShield,
  ClawCopy,
  ClawCheck,
  ClawArrowRight,
  ClawTerminal,
  ClawZap,
  ClawAlertTriangle,
  ClawLock,
  ClawEye,
  ClawUser,
  ClawBot,
  ClawPackage,
  ClawSparkles,
  ClawChevronDown,
  ClawChevronUp,
  ClawMenu,
  ClawX,
  ClawGithub,
  ClawTwitter,
  ClawGlobe,
  ClawShieldAlert,
  ClawCode,
  ClawActivity,
  ClawLockKeyhole,
} from "@/components/icons/ClawIcons";
import Link from "next/link";
import { languages, getTranslation, type Language } from "./i18n";

const installCommand = "npx clawguard@latest install";

const navLinks = [
  { key: "nav.features", href: "#features" },
  { key: "nav.security", href: "#security" },
  { key: "nav.useCases", href: "#use-cases" },
  { key: "nav.faq", href: "#faq" },
];

const threats = [
  { icon: ClawShieldAlert, titleKey: "threats.threat1.title", descKey: "threats.threat1.desc" },
  { icon: ClawLockKeyhole, titleKey: "threats.threat2.title", descKey: "threats.threat2.desc" },
  { icon: ClawEye, titleKey: "threats.threat3.title", descKey: "threats.threat3.desc" },
  { icon: ClawUser, titleKey: "threats.threat4.title", descKey: "threats.threat4.desc" },
  { icon: ClawActivity, titleKey: "threats.threat5.title", descKey: "threats.threat5.desc" },
];

const features = [
  { icon: ClawEye, titleKey: "features.feature1.title", descKey: "features.feature1.desc" },
  { icon: ClawZap, titleKey: "features.feature2.title", descKey: "features.feature2.desc" },
  { icon: ClawShield, titleKey: "features.feature3.title", descKey: "features.feature3.desc" },
  { icon: ClawLock, titleKey: "features.feature4.title", descKey: "features.feature4.desc" },
  { icon: ClawCode, titleKey: "features.feature5.title", descKey: "features.feature5.desc" },
];

const useCases = [
  { 
    icon: "🛡️", 
    titleKey: "useCases.case1.title", 
    challengeKey: "useCases.case1.challenge",
    solutionKey: "useCases.case1.solution",
    resultKey: "useCases.case1.result"
  },
  { 
    icon: "🔍", 
    titleKey: "useCases.case2.title", 
    challengeKey: "useCases.case2.challenge",
    solutionKey: "useCases.case2.solution",
    resultKey: "useCases.case2.result"
  },
  { 
    icon: "🌐", 
    titleKey: "useCases.case3.title", 
    challengeKey: "useCases.case3.challenge",
    solutionKey: "useCases.case3.solution",
    resultKey: "useCases.case3.result"
  },
];

const faqKeys = [
  { qKey: "faq.q1.question", aKey: "faq.q1.answer" },
  { qKey: "faq.q2.question", aKey: "faq.q2.answer" },
  { qKey: "faq.q3.question", aKey: "faq.q3.answer" },
  { qKey: "faq.q4.question", aKey: "faq.q4.answer" },
  { qKey: "faq.q5.question", aKey: "faq.q5.answer" },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl border border-gray-100 overflow-hidden"
      whileHover={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
      transition={{ duration: 0.2 }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group"
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-medium text-gray-900 text-base group-hover:text-blue-600 transition-colors pr-4">
          {question}
        </span>
        <motion.div 
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-blue-50'}`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ClawChevronDown className={`w-5 h-5 ${isOpen ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-500'}`} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ClawGuardPage() {
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>("zh");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [installTab, setInstallTab] = useState<'cli' | 'openclaw'>('cli');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const t = (key: string) => getTranslation(key, currentLang);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/clawguard" className="flex items-center gap-3 group">
              <motion.div 
                className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <img 
                  src="/claw.png" 
                  alt="ClawGuard"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">ClawGuard</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors relative group"
                >
                  {t(link.key)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors text-sm border border-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ClawGlobe className="w-4 h-4 text-red-500" />
                  <span className="text-gray-700">
                    {languages.find((l) => l.code === currentLang)?.flag}
                  </span>
                  <ClawChevronDown className="w-3 h-3 text-gray-400" />
                </motion.button>
                
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
                          currentLang === lang.code ? "text-blue-600 font-medium" : "text-gray-700"
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
              <div className="hidden md:flex items-center gap-3">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 flex items-center justify-center transition-colors border border-gray-100"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ClawGithub className="w-4 h-4 text-gray-600" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 flex items-center justify-center transition-colors border border-gray-100"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ClawTwitter className="w-4 h-4 text-gray-600" />
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-lg bg-white/50 backdrop-blur-sm flex items-center justify-center border border-gray-100"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <ClawX className="w-5 h-5 text-gray-600" />
                ) : (
                  <ClawMenu className="w-5 h-5 text-gray-600" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-600 hover:text-blue-600 font-medium"
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
                <a href="https://github.com" className="flex items-center gap-2 text-gray-600">
                  <ClawGithub className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a href="https://twitter.com" className="flex items-center gap-2 text-gray-600">
                  <ClawTwitter className="w-4 h-4" />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-screen flex flex-col overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-gray-100 pointer-events-none" />
        
        {/* Background Decorations */}
        <div className="absolute -top-64 -left-64 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px] opacity-10" />
        <div className="absolute -bottom-64 -right-64 w-[500px] h-[500px] bg-purple-400 rounded-full blur-[120px] opacity-10" />
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjQyLCAyNDYsIDI0OSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBzdHJva2U9InJnYmEoMjQyLCAyNDYsIDI0OSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlPSJyZ2JhKDI0MiwgMjQ2LCAyNDksIDAuMSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjQyLCAyNDYsIDI0OSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-50 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-100 to-red-50 text-red-700 text-sm font-medium shadow-sm border border-red-200/50">
                  <ClawPackage className="w-4 h-4" />
                  <span>{t("hero.badge")}</span>
                </span>
              </motion.div>

              {/* Headline */}
              <div className="space-y-6">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">ClawGuard</span>
                </motion.h1>
                <motion.h2 
                  className="text-2xl md:text-3xl font-semibold text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {t("hero.title")}
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {t("hero.subtitle")}
                </motion.p>
              </div>

              {/* Key Features */}
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {[t("hero.feature1"), t("hero.feature2"), t("hero.feature3"), t("hero.feature4"), t("hero.feature5")].map((feature, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm rounded-lg border border-gray-100 hover:bg-red-50 hover:border-red-200 transition-all duration-300 shadow-sm"
                  >
                    {feature}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Copy Interface with Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* Tab Container */}
              <motion.div 
                className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden"
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Tabs */}
                <div className="flex border-b border-gray-100">
                  <button
                    onClick={() => setInstallTab('cli')}
                    className={`flex-1 py-4 px-6 text-sm font-medium transition-all ${
                      installTab === 'cli'
                        ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50/30'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {t("hero.cliTab")}
                  </button>
                  <button
                    onClick={() => setInstallTab('openclaw')}
                    className={`flex-1 py-4 px-6 text-sm font-medium transition-all ${
                      installTab === 'openclaw'
                        ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50/30'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {t("hero.openclawTab")}
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-6 sm:p-8">
                  {installTab === 'cli' ? (
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="text-gray-500 text-sm font-medium">{t("hero.runInTerminal")}</span>
                      </div>
                      <motion.div 
                        className="bg-gray-900 rounded-xl p-5 flex items-center justify-between shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <code className="text-sm text-gray-300 font-mono flex-1">{installCommand}</code>
                        <motion.button
                          onClick={() => {navigator.clipboard.writeText(installCommand); setCopied(true); setTimeout(() => setCopied(false), 2000);}}
                          className="text-gray-400 hover:text-blue-500 transition-colors ml-4 p-2.5 rounded-lg hover:bg-gray-800"
                          whileTap={{ scale: 0.95 }}
                        >
                          {copied ? <ClawCheck className="w-5 h-5 text-green-500" /> : <ClawCopy className="w-5 h-5" />}
                        </motion.button>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="text-gray-500 text-sm font-medium">{t("hero.sendToOpenClaw")}</span>
                      </div>
                      <motion.div 
                        className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-md">
                          <ClawBot className="w-5 h-5 text-white" />
                        </div>
                        <code className="text-gray-700 font-medium flex-1">{t("hero.installCommand")}</code>
                        <motion.button
                          onClick={() => {navigator.clipboard.writeText(t("hero.installCommand")); setCopied(true); setTimeout(() => setCopied(false), 2000);}}
                          className="text-gray-400 hover:text-red-500 transition-colors p-2.5 rounded-lg hover:bg-gray-100"
                          whileTap={{ scale: 0.95 }}
                        >
                          {copied ? <ClawCheck className="w-5 h-5 text-green-500" /> : <ClawCopy className="w-5 h-5" />}
                        </motion.button>
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.p 
                className="text-gray-500 text-sm text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {t("hero.noRegistration")}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section id="security" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-100 via-red-200 to-red-100" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("threats.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -8 }}
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 border border-red-100 group-hover:bg-red-100 transition-all duration-300">
                  <threat.icon className="w-7 h-7 text-red-500" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">{t(threat.titleKey)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(threat.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("features.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -8 }}
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-red-100 to-red-50 flex items-center justify-center mb-6 border border-red-100 group-hover:bg-gradient-to-r from-red-200 to-red-100 transition-all duration-300 shadow-sm">
                  <feature.icon className="w-7 h-7 text-red-500" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">{t(feature.titleKey)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(feature.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-100 via-green-200 to-green-100" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("useCases.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -8 }}
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="text-5xl mb-6">{useCase.icon}</div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-300">{t(useCase.titleKey)}</h3>
                <div className="space-y-4">
                  <motion.div 
                    className="bg-gray-50 p-5 rounded-xl border border-gray-100"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">挑战</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{t(useCase.challengeKey)}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-blue-50 p-5 rounded-xl border border-blue-100"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-xs font-semibold text-blue-500 uppercase mb-2">解决方案</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{t(useCase.solutionKey)}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-green-50 p-5 rounded-xl border border-green-100"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-xs font-semibold text-green-500 uppercase mb-2">效果</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{t(useCase.resultKey)}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("faq.title")}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t("faq.subtitle")}</p>
          </motion.div>

          <div className="space-y-4">
            {faqKeys.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <FAQItem question={t(faq.qKey)} answer={t(faq.aKey)} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-6">{t("faq.moreQuestions")}</p>
            <motion.a 
              href="mailto:support@clawguard.io" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium px-6 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-300 border border-blue-200/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("faq.contactUs")}
              <ClawArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="install" className="py-24 bg-gradient-to-br from-blue-50 via-gray-50 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -top-64 -right-64 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px] opacity-10" />
        <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-purple-400 rounded-full blur-[120px] opacity-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-3xl p-10 sm:p-12 md:p-16 border border-gray-100 shadow-2xl overflow-hidden"
            whileHover={{ y: -10, boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.2), 0 15px 30px -10px rgba(0, 0, 0, 0.1)' }}
          >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />
            
            <div className="relative">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, y: 20 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 15 }}
                className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-red-500/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <ClawShield className="w-12 h-12 text-white" />
              </motion.div>
              
              {/* Title */}
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {t("cta.readyTitle")}
              </motion.h2>
              <motion.p 
                className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {t("cta.readySubtitle")}
              </motion.p>
              
              {/* Install Command */}
              <motion.div 
                className="inline-flex flex-col sm:flex-row items-center gap-4 p-3 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <code className="text-sm text-gray-300 font-mono px-6 py-3">{installCommand}</code>
                <motion.button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/25"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? (
                    <>
                      <ClawCheck className="w-5 h-5" />
                      {t("cta.copied")}
                    </>
                  ) : (
                    <>
                      <ClawCopy className="w-5 h-5" />
                      {t("cta.copyCommand")}
                    </>
                  )}
                </motion.button>
              </motion.div>
              
              {/* Features */}
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                <motion.span 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <ClawCheck className="w-5 h-5 text-green-500" />
                  {t("cta.feature1")}
                </motion.span>
                <motion.span 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <ClawCheck className="w-5 h-5 text-green-500" />
                  {t("cta.feature1")}
                </motion.span>
                <motion.span
                  className="flex items-center gap-2 text-sm text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <ClawCheck className="w-5 h-5 text-green-500" />
                  {t("cta.feature3")}
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-red-500/20">
                <img 
                  src="/claw.png" 
                  alt="ClawGuard"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">ClawGuard</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-red-50 flex items-center justify-center transition-colors border border-gray-100 hover:border-red-200"
              >
                <ClawGithub className="w-5 h-5 text-gray-600 hover:text-red-600 transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-red-50 flex items-center justify-center transition-colors border border-gray-100 hover:border-red-200"
              >
                <ClawTwitter className="w-5 h-5 text-gray-600 hover:text-red-600 transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
