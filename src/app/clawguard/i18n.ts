// i18n translations for ClawGuard Landing Page
// Supported languages: zh, en

export type Language = 'zh' | 'en';

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export const translations = {
  // Navigation
  nav: {
    features: {
      zh: '特性',
      en: 'Features',
    },
    security: {
      zh: '安全',
      en: 'Security',
    },
    useCases: {
      zh: '使用场景',
      en: 'Use Cases',
    },
    faq: {
      zh: '常见问题',
      en: 'FAQ',
    },
    getStarted: {
      zh: '开始使用',
      en: 'Get Started',
    },
  },

  // Hero Section
  hero: {
    badge: {
      zh: 'Powered by OpenClaw',
      en: 'Powered by OpenClaw',
    },
    title: {
      zh: 'OpenClaw的安全守卫',
      en: 'OpenClaw Security Guardian',
    },
    subtitle: {
      zh: '为 OpenClaw 提供全方位安全防护，智能抵御恶意插件、技能滥用和未授权访问等威胁，让您安心使用 AI Agent',
      en: 'Provide comprehensive security protection for OpenClaw, intelligently defending against malicious plugins, skill abuse, and unauthorized access threats, so you can use AI Agents with peace of mind',
    },
    feature1: {
      zh: '实时威胁监控',
      en: 'Real-time Threat Monitoring',
    },
    feature2: {
      zh: '智能威胁检测',
      en: 'Intelligent Threat Detection',
    },
    feature3: {
      zh: '自动威胁拦截',
      en: 'Automatic Threat Interception',
    },
    feature4: {
      zh: '安全隔离运行',
      en: 'Secure Isolated Execution',
    },
    feature5: {
      zh: '一键安装，零配置',
      en: 'One-click Installation, Zero Configuration',
    },
    cliTab: {
      zh: '手动安装',
      en: 'Manual Install',
    },
    openclawTab: {
      zh: 'OpenClaw 安装',
      en: 'OpenClaw Install',
    },
    installCommand: {
      zh: '安装 clawguard.cc/clawguard.md',
      en: 'Install clawguard.cc/clawguard.md',
    },
    runInTerminal: {
      zh: '在终端中运行安装命令',
      en: 'Run install command in terminal',
    },
    sendToOpenClaw: {
      zh: '发送给 OpenClaw 自动安装',
      en: 'Send to OpenClaw for auto-install',
    },
    noRegistration: {
      zh: '无需注册，复制后即可使用',
      en: 'No registration required, use immediately after copying',
    },
    copyBtn: {
      zh: '复制',
      en: 'Copy',
    },
    copied: {
      zh: '已复制',
      en: 'Copied',
    },
    copyHint: {
      zh: '复制后发送给 OpenClaw 即可自动安装',
      en: 'Copy and send to OpenClaw for automatic installation',
    },
  },

  // Threats Section
  threats: {
    title: {
      zh: 'OpenClaw 面临的安全挑战',
      en: 'Security Challenges for OpenClaw',
    },
    threat1: {
      title: {
        zh: '恶意插件',
        en: 'Malicious Plugins',
      },
      desc: {
        zh: '第三方插件可能包含恶意代码，窃取敏感信息和资产',
        en: 'Third-party plugins may contain malicious code that steals sensitive information and assets',
      },
    },
    threat2: {
      title: {
        zh: '技能滥用',
        en: 'Skill Abuse',
      },
      desc: {
        zh: '恶意技能可能被用于欺诈、数据窃取或未授权操作',
        en: 'Malicious skills may be used for fraud, data theft, or unauthorized operations',
      },
    },
    threat3: {
      title: {
        zh: '权限过度',
        en: 'Excessive Permissions',
      },
      desc: {
        zh: 'Agent 被授予超出必要的权限，可能导致资产损失和隐私泄露',
        en: 'Agents being granted excessive permissions, potentially leading to asset loss and privacy breaches',
      },
    },
    threat4: {
      title: {
        zh: '未授权访问',
        en: 'Unauthorized Access',
      },
      desc: {
        zh: '未经授权的实体可能访问和控制 Agent，执行恶意操作',
        en: 'Unauthorized entities may access and control Agents to perform malicious operations',
      },
    },
    threat5: {
      title: {
        zh: '行为异常',
        en: 'Abnormal Behavior',
      },
      desc: {
        zh: 'Agent 行为偏离正常模式，可能指示被攻击或感染恶意代码',
        en: 'Agent behavior deviating from normal patterns, possibly indicating an attack or malicious code infection',
      },
    },
  },

  // Features Section
  features: {
    title: {
      zh: 'OpenClaw 安全防护体系',
      en: 'OpenClaw Security Protection System',
    },
    feature1: {
      title: {
        zh: '实时威胁监控',
        en: 'Real-time Threat Monitoring',
      },
      desc: {
        zh: '24/7 监控 OpenClaw 运行状态和插件活动，实时检测异常行为和可疑操作，提供清晰的安全事件通知，随时了解系统安全状态',
        en: '24/7 monitoring of OpenClaw operation status and plugin activities, real-time detection of abnormal behaviors and suspicious operations, providing clear security event notifications to stay informed about system security status',
      },
    },
    feature2: {
      title: {
        zh: '智能威胁检测',
        en: 'Intelligent Threat Detection',
      },
      desc: {
        zh: '采用先进的 AI 算法自动识别可疑行为和异常模式，持续学习和适应新的威胁，实现高精度的威胁检测，减少误报，提供更可靠的安全保障',
        en: 'Uses advanced AI algorithms to automatically identify suspicious behaviors and abnormal patterns, continuously learning and adapting to new threats, achieving high-precision threat detection with reduced false positives for more reliable security protection',
      },
    },
    feature3: {
      title: {
        zh: '自动威胁拦截',
        en: 'Automatic Threat Interception',
      },
      desc: {
        zh: '在威胁执行前自动拦截恶意操作，实时阻止未授权访问和可疑行为，提供详细的威胁处理报告，了解每一次安全防护的详情',
        en: 'Automatically intercepts malicious operations before execution, real-time blocking of unauthorized access and suspicious behaviors, providing detailed threat handling reports to understand the details of every security protection event',
      },
    },
    feature4: {
      title: {
        zh: '安全隔离运行',
        en: 'Secure Isolated Execution',
      },
      desc: {
        zh: '将可疑插件隔离在安全环境中运行，防止恶意代码影响系统和资产，提供安全的测试环境，可以放心尝试新插件',
        en: 'Runs suspicious plugins in isolated secure environments, preventing malicious code from affecting the system and assets, providing a safe testing environment to try new plugins with confidence',
      },
    },
    feature5: {
      title: {
        zh: '简单易用',
        en: 'Easy to Use',
      },
      desc: {
        zh: '一键安装，零配置，直观的用户界面，适合所有用户使用，无需专业知识即可获得强大的安全防护',
        en: 'One-click installation, zero configuration, intuitive user interface, suitable for all users, allowing you to get powerful security protection without professional knowledge',
      },
    },
  },

  // Use Cases Section
  useCases: {
    title: {
      zh: 'OpenClaw 使用场景',
      en: 'OpenClaw Use Cases',
    },
    case1: {
      title: {
        zh: '日常使用保护',
        en: 'Daily Use Protection',
      },
      challenge: {
        zh: '日常使用 OpenClaw 时，担心恶意插件和技能的威胁，影响数据和资产安全',
        en: 'Worrying about threats from malicious plugins and skills affecting data and asset security when using OpenClaw daily',
      },
      solution: {
        zh: '安装 ClawGuard，获得实时安全保护，智能识别和拦截潜在威胁',
        en: 'Install ClawGuard to get real-time security protection that intelligently identifies and intercepts potential threats',
      },
      result: {
        zh: '安心使用 OpenClaw，无需担心安全威胁，专注于发挥 AI Agent 的强大能力',
        en: 'Use OpenClaw with peace of mind, no need to worry about security threats, and focus on leveraging the powerful capabilities of AI Agents',
      },
    },
    case2: {
      title: {
        zh: '插件测试',
        en: 'Plugin Testing',
      },
      challenge: {
        zh: '尝试新插件时，担心可能存在的安全风险，不敢轻易安装',
        en: 'Worrying about potential security risks when trying new plugins, hesitant to install them',
      },
      solution: {
        zh: '使用 ClawGuard 的安全隔离功能测试新插件，在安全环境中评估其行为',
        en: 'Use ClawGuard\'s secure isolation feature to test new plugins and evaluate their behavior in a safe environment',
      },
      result: {
        zh: '安全测试新插件，避免潜在风险，放心探索新功能和工具',
        en: 'Safely test new plugins, avoid potential risks, and confidently explore new features and tools',
      },
    },
    case3: {
      title: {
        zh: '远程访问保护',
        en: 'Remote Access Protection',
      },
      challenge: {
        zh: '远程使用 OpenClaw 时，担心未授权访问，导致数据泄露和资产损失',
        en: 'Worrying about unauthorized access leading to data breaches and asset loss when using OpenClaw remotely',
      },
      solution: {
        zh: 'ClawGuard 实时监控并拦截未授权访问，保护 Agent 和数据安全',
        en: 'ClawGuard monitors and intercepts unauthorized access in real-time, protecting Agents and data security',
      },
      result: {
        zh: '安全远程使用 OpenClaw，保护数据和资产，随时随地安心使用',
        en: 'Safely use OpenClaw remotely, protect data and assets, and use it with confidence anywhere, anytime',
      },
    },
  },

  // FAQ Section
  faq: {
    title: {
      zh: '常见问题',
      en: 'Frequently Asked Questions',
    },
    subtitle: {
      zh: '关于 ClawGuard 的常见问题',
      en: 'Everything you need to know about ClawGuard',
    },
    moreQuestions: {
      zh: '还有其他问题？',
      en: 'Have more questions?',
    },
    contactUs: {
      zh: '联系我们',
      en: 'Contact Us',
    },
    q1: {
      question: {
        zh: 'ClawGuard 如何保护 OpenClaw？',
        en: 'How does ClawGuard protect OpenClaw?',
      },
      answer: {
        zh: 'ClawGuard 通过实时监控、智能威胁检测、自动威胁拦截和安全隔离运行等技术，为 OpenClaw 提供全方位安全防护，抵御恶意插件、技能滥用和未授权访问等威胁。',
        en: 'ClawGuard provides comprehensive security protection for OpenClaw through real-time monitoring, intelligent threat detection, automatic threat interception, and secure isolated execution, defending against malicious plugins, skill abuse, and unauthorized access threats.',
      },
    },
    q2: {
      question: {
        zh: 'ClawGuard 与 OpenClaw 的兼容性如何？',
        en: 'How compatible is ClawGuard with OpenClaw?',
      },
      answer: {
        zh: 'ClawGuard 设计为与所有版本的 OpenClaw 兼容，无需修改现有配置，可无缝集成到您的 OpenClaw 环境中。',
        en: 'ClawGuard is designed to be compatible with all versions of OpenClaw, requiring no modification to existing configurations and seamlessly integrating into your OpenClaw environment.',
      },
    },
    q3: {
      question: {
        zh: 'ClawGuard 是否会影响 OpenClaw 的性能？',
        en: 'Will ClawGuard affect OpenClaw\'s performance?',
      },
      answer: {
        zh: 'ClawGuard 采用高效的设计，对 OpenClaw 的性能影响微乎其微，同时提供强大的安全防护能力。',
        en: 'ClawGuard adopts an efficient design that has minimal impact on OpenClaw\'s performance while providing powerful security protection capabilities.',
      },
    },
    q4: {
      question: {
        zh: '如何安装 ClawGuard？',
        en: 'How to install ClawGuard?',
      },
      answer: {
        zh: 'ClawGuard 提供简单的一键安装命令，安装后自动配置为最佳安全设置，无需复杂的手动配置。',
        en: 'ClawGuard provides a simple one-click installation command, and after installation, it is automatically configured for optimal security settings without complex manual configuration.',
      },
    },
    q5: {
      question: {
        zh: 'ClawGuard 是否免费？',
        en: 'Is ClawGuard free?',
      },
      answer: {
        zh: '是的，ClawGuard 是完全免费的安全工具，专为个人 OpenClaw 用户设计。',
        en: 'Yes, ClawGuard is a completely free security tool designed specifically for individual OpenClaw users.',
      },
    },
  },

  // CTA Section
  cta: {
    title: {
      zh: '为 OpenClaw 部署安全防护',
      en: 'Deploy Security Protection for OpenClaw',
    },
    subtitle: {
      zh: '复制下方命令，发送给 OpenClaw，一键完成安装',
      en: 'Copy the command below, send it to OpenClaw, and complete the installation with one click',
    },
    readyTitle: {
      zh: '准备好开始了吗？',
      en: 'Ready to Get Started?',
    },
    readySubtitle: {
      zh: '立即安装 ClawGuard，为 OpenClaw 提供全方位安全保护',
      en: 'Install ClawGuard now to provide comprehensive security protection for OpenClaw',
    },
    copyCommand: {
      zh: '复制命令',
      en: 'Copy Command',
    },
    copied: {
      zh: '已复制',
      en: 'Copied',
    },
    feature1: {
      zh: '免费使用',
      en: 'Free to Use',
    },
    feature2: {
      zh: '简单安装',
      en: 'Easy Installation',
    },
    feature3: {
      zh: '零配置',
      en: 'Zero Configuration',
    },
    footer: {
      zh: '免费开始使用 · 一键安装 · 立即生效',
      en: 'Free to start · One-click installation · Instant protection',
    },
  },

  // Footer
  footer: {
    copyright: {
      zh: '© 2026 ClawGuard. OpenClaw 安全守护者',
      en: '© 2026 ClawGuard. Security Guardian for OpenClaw',
    },
  },
} as const;

// Helper function to get translation
export function getTranslation(
  key: string,
  lang: Language
): string {
  const keys = key.split('.');
  let value: unknown = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  if (value && typeof value === 'object' && lang in value) {
    return (value as Record<Language, string>)[lang];
  }
  
  return key;
}
