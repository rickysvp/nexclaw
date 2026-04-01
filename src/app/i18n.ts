// i18n translations for ClawWallet
// Supported languages: zh, en
// Simplified for better user understanding - CoinFello style

export type Language = 'zh' | 'en';

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export const translations = {
  // Navigation
  nav: {
    features: { zh: '功能', en: 'Features' },
    howItWorks: { zh: '流程', en: 'How It Works' },
    security: { zh: '安全', en: 'Security' },
    login: { zh: '登录', en: 'Login' },
    createWallet: { zh: '免费创建', en: 'Create Free' },
  },

  // Hero Section - Simple & Clear
  hero: {
    title: {
      zh: '让AI Agent\n<span class="text-primary">拥有安全钱包</span>',
      en: 'Let AI Agent\n<span class="text-primary">Have a Secure Wallet</span>',
    },
    subtitle: {
      zh: 'Claw Wallet 是为 AI Agent 构建的 Web3 安全钱包，采用 TEE 硬件加密分片架构。通过自然语言对话，让 AI 安全地管理加密资产。',
      en: 'Claw Wallet is a Web3 secure wallet built for AI Agents, using TEE hardware-encrypted sharding architecture. Through natural language dialogue, let AI securely manage crypto assets.',
    },
    copyHint: {
      zh: '复制命令，发送给你的 OpenClaw Agent',
      en: 'Copy the command and send to your OpenClaw Agent',
    },
    command: {
      zh: 'Read https://clawwallet.cc/clawwallet.md &setup',
      en: 'Read https://clawwallet.cc/clawwallet.md &setup',
    },
    copyBtn: { zh: '复制', en: 'Copy' },
    copied: { zh: '已复制', en: 'Copied' },
  },
  
  // Trust Indicators
  trust: {
    selfCustody: { zh: '自托管', en: 'Self-custody' },
    teeEncryption: { zh: 'TEE 加密', en: 'TEE Encryption' },
    aiSecurity: { zh: 'AI 安全风控', en: 'AI Security Risk Control' },
    naturalLanguage: { zh: '自然语言交互', en: 'Natural Language Interaction' },
  },
  
  // Who is it for
  whoFor: {
    openClawUsers: { zh: 'OpenClaw用户', en: 'OpenClaw Users' },
    aiAgent: { zh: 'AI Agent', en: 'AI Agent' },
    web3NewUsers: { zh: 'Web3新用户', en: 'Web3 New Users' },
    cryptoInvestors: { zh: '加密投资者', en: 'Crypto Investors' },
    defiUsers: { zh: 'DeFi用户', en: 'DeFi Users' },
    traders: { zh: '交易员', en: 'Traders' },
    aiTeams: { zh: 'AI团队', en: 'AI Teams' },
    blockchainDevelopers: { zh: '区块链开发者', en: 'Blockchain Developers' },
    institutionalUsers: { zh: '机构用户', en: 'Institutional Users' },
    crossBorderSmes: { zh: '跨境中小企业', en: 'Cross-border SMEs' },
  },
  
  // Strategy Tabs
  strategies: {
    create: { zh: '创建钱包', en: 'Create Wallet' },
    market: { zh: '市场动态', en: 'Market Dynamics' },
    price: { zh: '跟踪币价', en: 'Track Prices' },
    arbitrage: { zh: '自动套利', en: 'Auto Arbitrage' },
    mining: { zh: '挖矿', en: 'Mining' },
    meme: { zh: 'Meme', en: 'Meme' },
    ipo: { zh: '币股打新', en: 'Token IPO' },
    perps: { zh: 'Perps', en: 'Perps' },
    audit: { zh: '安全审计', en: 'Security Audit' },
    transfer: { zh: '转账', en: 'Transfer' },
    defi: { zh: 'DeFi', en: 'DeFi' },
    dca: { zh: '定投', en: 'DCA' },
    copy: { zh: '跟单', en: 'Copy Trade' },
    staking: { zh: '质押', en: 'Staking' },
    lending: { zh: '借贷', en: 'Lending' },
  },
  
  // Recommended Skills
  skills: {
    walletManager: {
      name: { zh: 'Wallet Manager', en: 'Wallet Manager' },
      desc: { zh: 'AI Agent 加密钱包管理，支持多链', en: 'AI Agent crypto wallet management, multi-chain support' },
    },
    defiStrategist: {
      name: { zh: 'DeFi Strategist', en: 'DeFi Strategist' },
      desc: { zh: '智能 DeFi 收益优化策略', en: 'Intelligent DeFi yield optimization strategies' },
    },
    tradingAssistant: {
      name: { zh: 'Trading Assistant', en: 'Trading Assistant' },
      desc: { zh: '专业交易信号与执行助手', en: 'Professional trading signals and execution assistant' },
    },
    portfolioTracker: {
      name: { zh: 'Portfolio Tracker', en: 'Portfolio Tracker' },
      desc: { zh: '实时组合追踪与分析', en: 'Real-time portfolio tracking and analysis' },
    },
    securityMonitor: {
      name: { zh: 'Security Monitor', en: 'Security Monitor' },
      desc: { zh: '7x24 安全监控与预警', en: '24/7 security monitoring and alerting' },
    },
    nftAggregator: {
      name: { zh: 'NFT Aggregator', en: 'NFT Aggregator' },
      desc: { zh: '多平台 NFT 聚合交易', en: 'Multi-platform NFT aggregation trading' },
    },
  },
  
  // Security Layers
  security: {
    layers: [
      {
        title: { zh: '私钥自托管', en: 'Self-custody' },
        desc: { zh: '你的私钥，你的控制', en: 'Your private key, your control' },
        detail: { zh: '私钥始终存储在你的本地环境，永远不会上传到任何服务器', en: 'Private keys are always stored in your local environment and never uploaded to any server' },
      },
      {
        title: { zh: 'TEE 硬件加密', en: 'TEE Hardware Encryption' },
        desc: { zh: 'AWS Nitro Enclaves', en: 'AWS Nitro Enclaves' },
        detail: { zh: '基于可信执行环境的硬件级加密保护', en: 'Hardware-level encryption protection based on trusted execution environment' },
      },
      {
        title: { zh: '智能风控引擎', en: 'AI Risk Control Engine' },
        desc: { zh: 'AI 实时防护', en: 'AI Real-time Protection' },
        detail: { zh: '机器学习模型实时分析交易行为，识别潜在风险', en: 'Machine learning models analyze transaction behavior in real-time to identify potential risks' },
      },
      {
        title: { zh: '策略引擎', en: 'Policy Engine' },
        desc: { zh: '自定义安全规则', en: 'Custom Security Rules' },
        detail: { zh: '灵活配置转账限额、白名单、多重签名等安全策略', en: 'Flexible configuration of transfer limits, whitelists, multi-signature and other security policies' },
      },
    ],
  },
  
  // Chat Scenarios
  chatScenarios: {
    swap: { zh: 'Swap', en: 'Swap' },
    bridge: { zh: '跨链', en: 'Bridge' },
    dca: { zh: '定投', en: 'DCA' },
    risk: { zh: '风控', en: 'Risk Control' },
  },

  // Use Cases Section
  useCases: {
    title: { zh: '三个真实使用场景', en: 'Three Real-World Use Cases' },
    subtitle: { 
      zh: '看看其他用户如何用 Claw Wallet 让 AI Agent 自动化管理资产',
      en: 'See how others use Claw Wallet to let AI Agents automate asset management'
    },
    case1: {
      title: { zh: '自动定投 ETH', en: 'Auto DCA into ETH' },
      desc: { 
        zh: '设定每周自动买入计划，Agent 在价格低点执行，无需你盯盘',
        en: 'Set up weekly auto-buy plans. Agent executes at price dips without you watching'
      },
      command: { zh: '每周一帮我买 100 USDC 的 ETH', en: 'Buy $100 worth of ETH every Monday' },
      result: { zh: '已连续执行 12 周，平均成本降低 8%', en: 'Executed for 12 weeks, avg cost reduced by 8%' }
    },
    case2: {
      title: { zh: '跨链资产归集', en: 'Cross-Chain Asset Consolidation' },
      desc: { 
        zh: '把分散在各链的资产一键归集到主钱包，Agent 自动处理桥接',
        en: 'Consolidate scattered assets across chains. Agent handles bridging automatically'
      },
      command: { zh: '把我所有链上的 USDC 归集到以太坊', en: 'Consolidate all my USDC to Ethereum' },
      result: { zh: '3 条链资产已归集，节省 70% 手续费', en: 'Assets from 3 chains consolidated, 70% gas saved' }
    },
    case3: {
      title: { zh: 'DeFi 收益优化', en: 'DeFi Yield Optimization' },
      desc: { 
        zh: 'Agent 监控各协议收益率，自动切换至最高收益池',
        en: 'Agent monitors protocol yields and auto-switches to the highest APY pool'
      },
      command: { zh: '帮我把 USDC 放到收益最高的地方', en: 'Put my USDC where it earns the most' },
      result: { zh: '已自动切换至 Aave，APY 从 3.2% 提升至 5.8%', en: 'Auto-switched to Aave, APY increased from 3.2% to 5.8%' }
    },
  },

  // How It Works Section - 3 Simple Steps
  howItWorks: {
    title: { zh: '三步开始使用', en: 'Get Started in Three Steps' },
    subtitle: { zh: '无需复杂配置，像聊天一样简单', en: 'No complex setup, as simple as chatting' },
    step1: {
      title: { zh: '发送命令给 Agent', en: 'Send Command to Agent' },
      desc: { zh: '复制命令发送给你的 OpenClaw Agent', en: 'Copy the command and send to your OpenClaw Agent' }
    },
    step2: {
      title: { zh: '一键登录创建', en: 'One-Click Login & Create' },
      desc: { zh: '用 Google 或邮箱登录，钱包自动生成', en: 'Login with Google or email, wallet auto-generated' }
    },
    step3: {
      title: { zh: '开始对话管理资产', en: 'Start Chatting to Manage Assets' },
      desc: { zh: '像聊天一样告诉 Agent 你的需求', en: 'Tell your Agent what you need, just like chatting' }
    },
  },

  // Security Section
  security: {
    title: { 
      zh: '银行级安全，但你始终掌控', 
      en: 'Bank-Grade Security, But You Stay in Control' 
    },
    subtitle: { 
      zh: '我们使用 AWS Nitro Enclaves 硬件级加密，但私钥始终属于你。随时可以导出，随时可以撤销授权。',
      en: 'We use AWS Nitro Enclaves hardware-level encryption, but the keys are always yours. Export anytime, revoke anytime.'
    },
    features: {
      sharding: {
        title: { zh: '私钥分片加密存储', en: 'Sharded Key Encryption' },
        desc: { zh: '密钥被分割成多份，单点无法破解', en: 'Keys are split into shards, single point cannot be compromised' }
      },
      tee: {
        title: { zh: 'TEE 硬件隔离执行', en: 'TEE Hardware Isolation' },
        desc: { zh: '运算在 AWS 安全飞地内完成，外部无法访问', en: 'Operations happen inside AWS secure enclaves, inaccessible from outside' }
      },
      control: {
        title: { zh: '用户完全控制', en: 'Full User Control' },
        desc: { zh: '随时导出私钥，随时撤销 Agent 权限', en: 'Export keys anytime, revoke Agent permissions anytime' }
      }
    }
  },

  // Supported Chains
  chains: {
    title: { zh: '支持的主流区块链', en: 'Supported Blockchains' }
  },

  // Testimonials Section
  testimonials: {
    title: { zh: '用户怎么说', en: 'What Users Say' },
    items: {
      testimonial1: {
        quote: {
          zh: '终于可以让 Agent 帮我自动定投了，不用每天盯盘。最重要的是私钥还是我自己掌控，很安心。',
          en: 'Finally I can let my Agent auto-DCA for me without watching the market daily. Best of all, I still control the keys.',
        },
        handle: { zh: '@0xchine · DeFi 用户', en: '@0xchine · DeFi User' },
      },
      testimonial2: {
        quote: {
          zh: '跨链资产归集太方便了，以前要手动桥接好几次，现在一句话就搞定。',
          en: 'Cross-chain consolidation is so convenient. Used to manually bridge multiple times, now just one sentence.',
        },
        handle: { zh: '@0xyilu · Web3 用户', en: '@0xyilu · Web3 User' },
      },
      testimonial3: {
        quote: {
          zh: 'Agent 自动帮我找最高收益的 DeFi 池子，APY 比以前自己手动操作高了 2 倍多。',
          en: 'Agent automatically finds the highest yield DeFi pools for me. APY is 2x higher than my manual operations.',
        },
        handle: { zh: '@seven_nad · 投资者', en: '@seven_nad · Investor' },
      },
    },
  },

  // FAQ Section
  faq: {
    title: { zh: '常见问题', en: 'FAQ' },
    items: {
      q1: {
        question: { zh: '我的私钥安全吗？', en: 'Is my private key secure?' },
        answer: {
          zh: '绝对安全。你的私钥通过 AWS Nitro Enclaves TEE 技术分片加密存储，只有你自己可以访问。我们永远无法触碰你的私钥，你可以随时导出自行保管。',
          en: 'Absolutely secure. Your private key is encrypted using AWS Nitro Enclaves TEE technology. Only you can access it. We can never touch your keys, and you can export them anytime.',
        },
      },
      q2: {
        question: { zh: 'Agent 能做什么？', en: 'What can Agents do?' },
        answer: {
          zh: 'Agent 可以在你授权的范围内执行各种链上操作：自动定投、跨链转账、DeFi 理财、收益优化等。你可以设置每日限额和合约白名单，完全掌控风险。',
          en: 'Agents can execute various on-chain operations within your authorized scope: auto-DCA, cross-chain transfers, DeFi yield farming, and more. You set daily limits and contract whitelists.',
        },
      },
      q3: {
        question: { zh: '如何停止 Agent 的操作？', en: 'How do I stop Agent operations?' },
        answer: {
          zh: '你可以随时在 Dashboard 中一键暂停或撤销 Agent 的授权，所有操作立即生效。你也可以设置每日限额，防止意外大额支出。',
          en: 'You can pause or revoke Agent authorization with one click in the Dashboard anytime. You can also set daily limits to prevent unexpected large expenses.',
        },
      },
      q4: {
        question: { zh: '支持哪些区块链？', en: 'Which blockchains are supported?' },
        answer: {
          zh: '目前支持 Ethereum、Solana、Base、BSC、SUI、Monad 等主流区块链，持续增加中。',
          en: 'Currently supports Ethereum, Solana, Base, BSC, SUI, Monad, and other mainstream blockchains—with more being added.',
        },
      },
    },
  },

  // CTA Section
  cta: {
    title: { zh: '准备好让你的 Agent 开始工作了吗？', en: 'Ready to Put Your Agent to Work?' },
    subtitle: { zh: '30 秒部署，免费开始使用', en: 'Deploy in 30 seconds, start for free' },
    button: { zh: '复制命令开始', en: 'Copy Command to Start' },
  },

  // Footer
  footer: {
    copyright: { zh: '© 2025 Claw Wallet', en: '© 2025 Claw Wallet' },
  },
} as const;

// Helper function to get translation
export function t(key: string, lang: Language): string {
  const keys = key.split('.');
  let value: unknown = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  if (value && typeof value === 'object' && lang in value) {
    return (value as Record<Language, string>)[lang];
  }

  return key;
}
