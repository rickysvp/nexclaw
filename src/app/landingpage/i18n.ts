// i18n translations for ClawWallet Landing Page
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
    reviews: {
      zh: '用户反馈',
      en: 'Reviews',
    },
    faq: {
      zh: 'FAQ',
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
      zh: '专属Agent的安全加密钱包',
      en: 'A Secure Crypto Wallet Purpose-Built for AI Agents',
    },
    subtitle: {
      zh: '一句话，为你的OpenClaw部署安全的无私钥多链钱包，确保你的加密资产被安全使用。',
      en: 'Deploy a secure, keyless, multi-chain wallet for your OpenClaw with a single command. Ensure your crypto assets are used safely.',
    },
    feature1: {
      zh: 'TEE 安全架构',
      en: 'TEE Security Architecture',
    },
    feature2: {
      zh: '多链支持',
      en: 'Multi-Chain Support',
    },
    feature3: {
      zh: '零配置',
      en: 'Zero Configuration',
    },
    cliTab: {
      zh: '我是人类',
      en: 'I am Human',
    },
    openclawTab: {
      zh: '我是 Agent',
      en: 'I am Agent',
    },
    installCommand: {
      zh: '安装 clawwallet.cc/clawwallet.md',
      en: 'Install clawwallet.cc/clawwallet.md',
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

  // Partners Section
  partners: {
    title: {
      zh: '已支持的主流公链',
      en: 'Supported Mainstream Chains',
    },
  },

  // Stats Section
  stats: {
    wallets: {
      zh: '已部署钱包',
      en: 'Wallets Deployed',
    },
    uptime: {
      zh: '安全运行时间',
      en: 'Secure Uptime',
    },
    clients: {
      zh: '企业客户',
      en: 'Enterprise Clients',
    },
    chains: {
      zh: '支持公链',
      en: 'Supported Chains',
    },
  },

  // Features Section
  features: {
    title: {
      zh: '核心特性',
      en: 'Core Features',
    },
    subtitle: {
      zh: '为 AI Agent 打造的专业级钱包解决方案',
      en: 'Professional wallet solution built for AI Agents',
    },
    tee: {
      title: {
        zh: 'TEE 安全架构',
        en: 'TEE Security Architecture',
      },
      desc: {
        zh: '基于 AWS Nitro Enclaves 的硬件级安全隔离，私钥永不离开安全环境',
        en: 'Hardware-level security isolation based on AWS Nitro Enclaves, private keys never leave the secure environment',
      },
    },
    fast: {
      title: {
        zh: '3 秒极速创建',
        en: '3-Second Fast Creation',
      },
      desc: {
        zh: '无私钥，无需复杂配置，一行命令即刻生成可用钱包',
        en: 'No private keys, no complex configuration, generate a usable wallet with one command',
      },
    },
    multichain: {
      title: {
        zh: '多链原生支持',
        en: 'Multi-Chain Native Support',
      },
      desc: {
        zh: 'Ethereum、Polygon、BSC、Arbitrum 等主流公链一键切换',
        en: 'One-click switching between mainstream public chains like Ethereum, Polygon, BSC, Arbitrum',
      },
    },
  },

  // Security Section
  security: {
    badge: {
      zh: 'TEE 硬件安全',
      en: 'TEE Hardware Security',
    },
    teeEnv: {
      zh: 'TEE 可信执行环境',
      en: 'TEE Trusted Execution Environment',
    },
    hardwareLevel: {
      zh: 'Hardware-Level Security',
      en: 'Hardware-Level Security',
    },
    title: {
      zh: '企业级安全，Agent 操作零风险',
      en: 'Enterprise-Grade Security, Zero Risk for Agent Operations',
    },
    subtitle: {
      zh: 'Claw Wallet 采用多层防护体系，确保 Agent 每一次链上操作都在用户完全掌控之内。',
      en: 'Claw Wallet employs a multi-layered protection system, ensuring every on-chain operation by Agents remains fully under user control.',
    },
    teeSharding: {
      title: {
        zh: 'TEE 可信执行环境分片',
        en: 'TEE Trusted Execution Environment with Key Sharding',
      },
      desc: {
        zh: '基于 AWS Nitro Enclaves 可信执行环境，私钥在 AWS 硬件级隔离飞地内分片加密，充分利用 Amazon 云服务器的安全合规能力。',
        en: 'Built on AWS Nitro Enclaves, private keys are sharded and encrypted within hardware-isolated enclaves, leveraging Amazon\'s cloud security and compliance infrastructure.',
      },
    },
    txEngine: {
      title: {
        zh: '交易策略引擎拦截',
        en: 'Transaction Policy Engine with Real-Time Filtering',
      },
      desc: {
        zh: '每笔 Agent 发起的交易在广播前经过五重安全过滤：金额上限校验、目标合约白名单、操作频率限制、交易审批流程、实时安全风控。',
        en: 'Every transaction initiated by Agents undergoes five layers of security checks before broadcast: amount limits, contract whitelisting, frequency controls, approval workflows, and real-time risk monitoring.',
      },
    },
    confirm: {
      title: {
        zh: '大额交易二次确认',
        en: 'Multi-Factor Confirmation for High-Value Transactions',
      },
      desc: {
        zh: '超过用户设定阈值的交易将触发推送通知，要求用户在 App 或邮件中二次授权方可广播。',
        en: 'Transactions exceeding user-defined thresholds trigger push notifications, requiring secondary authorization via the App or email before broadcasting.',
      },
    },
    scan: {
      title: {
        zh: '链上合约实时扫描',
        en: 'Real-Time On-Chain Contract Scanning',
      },
      desc: {
        zh: '集成 Bitslab Safe 安全 API，Agent 发起交互前自动扫描目标合约风险评分与漏洞特征，高风险合约自动拦截告警。',
        en: 'Integrated with Bitslab Safe\'s security API, automatically scans target contracts for risk scores and vulnerabilities before Agent interaction, intercepting and alerting on high-risk contracts.',
      },
    },
    encryption: {
      title: {
        zh: '端到端加密通信',
        en: 'End-to-End Encrypted Communication',
      },
      desc: {
        zh: 'OpenClaw Agent 与 Claw Wallet 之间所有通信均经过 TLS 1.3 + 消息级签名双重加密，防中间人攻击。',
        en: 'All communication between OpenClaw Agent and Claw Wallet is encrypted with TLS 1.3 and message-level signatures, protecting against man-in-the-middle attacks.',
      },
    },
  },

  // Usage Section
  usage: {
    title: {
      zh: '原生集成，开箱即用',
      en: 'Native Integration, Ready Out of the Box',
    },
    subtitle: {
      zh: '作为 OpenClaw 原生 Skill，安装后即刻拥有钱包能力。无需额外配置，通过自然语言即可操控您的加密资产。',
      en: 'As a native OpenClaw Skill, you instantly gain wallet capabilities after installation. No additional configuration needed—control your crypto assets using natural language.',
    },
    create: {
      zh: '创建钱包',
      en: 'Create Wallet',
    },
    balance: {
      zh: '查询余额',
      en: 'Check Balance',
    },
    send: {
      zh: '发送交易',
      en: 'Send Transaction',
    },
    autonomyBadge: {
      zh: '自主交互',
      en: 'Autonomous Interaction',
    },
    autonomyTitle: {
      zh: 'OpenClaw 主动管理您的资产',
      en: 'OpenClaw Proactively Manages Your Assets',
    },
    autonomySubtitle: {
      zh: '不是被动响应，而是具备自主行动能力的 AI Agent。通过安全策略限定资金管理边界，让 OpenClaw 主动为您优化投资组合',
      en: 'Not just passive responses, but an AI Agent with autonomous capabilities. Define fund management boundaries through security policies, letting OpenClaw proactively optimize your portfolio.',
    },
    agentName: {
      zh: 'OpenClaw Agent',
      en: 'OpenClaw Agent',
    },
    agentStatus: {
      zh: '自主运行中',
      en: 'Running Autonomously',
    },
    monitoring: {
      zh: '监控市场',
      en: 'Monitoring Market',
    },
    activity1Title: {
      zh: '检测到 ETH 价格回调 5%',
      en: 'Detected ETH price pullback of 5%',
    },
    activity1Time: {
      zh: '09:15 · 市场分析',
      en: '09:15 · Market Analysis',
    },
    activity2Title: {
      zh: '触发定投策略：买入 0.05 ETH',
      en: 'DCA strategy triggered: Buy 0.05 ETH',
    },
    activity2Time: {
      zh: '09:16 · 策略执行',
      en: '09:16 · Strategy Execution',
    },
    withinLimit: {
      zh: '✓ 在限额内',
      en: '✓ Within Limit',
    },
    dailyLimit: {
      zh: '日限额: $1000 / 已用: $150',
      en: 'Daily: $1000 / Used: $150',
    },
    activity3Title: {
      zh: '大额交易待确认',
      en: 'Large transaction pending confirmation',
    },
    activity3Time: {
      zh: '14:30 · 需要人工审批',
      en: '14:30 · Manual approval required',
    },
    txDetail: {
      zh: '发送 2 ETH 到 0x789...abc',
      en: 'Send 2 ETH to 0x789...abc',
    },
    txWarning: {
      zh: '⚠️ 超出单笔限额 ($500)，需确认',
      en: '⚠️ Exceeds single limit ($500), confirmation needed',
    },
    activity4Title: {
      zh: '自动质押 100 USDC 到 Aave',
      en: 'Auto-stake 100 USDC to Aave',
    },
    activity4Time: {
      zh: '16:00 · 收益优化',
      en: '16:00 · Yield Optimization',
    },
    whitelistContract: {
      zh: '✓ 白名单合约',
      en: '✓ Whitelist Contract',
    },
    apy: {
      zh: 'APY: 4.2%',
      en: 'APY: 4.2%',
    },
    activity5Title: {
      zh: '阻止可疑交易',
      en: 'Blocked suspicious transaction',
    },
    activity5Time: {
      zh: '18:45 · 安全拦截',
      en: '18:45 · Security Intercept',
    },
    unauthorizedRequest: {
      zh: '检测到未授权合约交互请求',
      en: 'Detected unauthorized contract interaction request',
    },
    blockedReason: {
      zh: '✗ 合约不在白名单中，已自动拒绝',
      en: '✗ Contract not in whitelist, auto-rejected',
    },
    securityConfig: {
      zh: '安全策略配置',
      en: 'Security Policy Configuration',
    },
    dailyLimitTitle: {
      zh: '日交易限额',
      en: 'Daily Transaction Limit',
    },
    dailyLimitDesc: {
      zh: '24小时内最大支出',
      en: 'Maximum spending within 24 hours',
    },
    singleLimitTitle: {
      zh: '单笔限额',
      en: 'Single Transaction Limit',
    },
    singleLimitDesc: {
      zh: '每次交易最大金额',
      en: 'Maximum amount per transaction',
    },
    whitelistTitle: {
      zh: '合约白名单',
      en: 'Contract Whitelist',
    },
    whitelistDesc: {
      zh: '仅允许交互的合约',
      en: 'Only contracts allowed to interact',
    },
    largeTxConfirm: {
      zh: '大额确认',
      en: 'Large Transaction Confirmation',
    },
    largeTxConfirmDesc: {
      zh: '超出限额需人工审批',
      en: 'Manual approval required when exceeding limit',
    },
    enabled: {
      zh: '✓ 已启用',
      en: '✓ Enabled',
    },
    on: {
      zh: '开启',
      en: 'On',
    },
    securityTip: {
      zh: '安全提示：',
      en: 'Security Tip:',
    },
    securityTipContent: {
      zh: 'OpenClaw 的所有操作都在您设定的策略边界内执行。超出限额或遇到可疑交易时，系统会自动拦截并通知您。',
      en: 'All OpenClaw operations are executed within your defined policy boundaries. The system will automatically intercept and notify you when limits are exceeded or suspicious transactions are detected.',
    },
    autoExecuted: {
      zh: '自动执行',
      en: 'Auto Executed',
    },
    pendingApproval: {
      zh: '待审批',
      en: 'Pending Approval',
    },
    securityBlocked: {
      zh: '安全拦截',
      en: 'Security Blocked',
    },
  },

  // Testimonials Section
  testimonials: {
    badge: {
      zh: '用户评价',
      en: 'User Reviews',
    },
    title: {
      zh: '用户评价',
      en: 'What Users Say',
    },
    subtitle: {
      zh: '来自 DeFi 用户、量化策略师和 Web3 创始人的真实反馈',
      en: 'Real feedback from DeFi users, quantitative strategists, and Web3 founders',
    },
  },

  // FAQ Section
  faq: {
    title: {
      zh: '常见问题',
      en: 'Frequently Asked Questions',
    },
    subtitle: {
      zh: '关于 ClawWallet 的常见问题',
      en: 'Everything you need to know about ClawWallet',
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
        zh: 'Claw Wallet 是什么？',
        en: 'What is Claw Wallet?',
      },
      answer: {
        zh: 'Claw Wallet是面向AI Agent的自托管加密钱包，用户拥有完全控制权，支持AI Agent在风控策略下自主执行链上操作，同时您可随时导出私钥自行管理。',
        en: 'Claw Wallet is a self-custodial crypto wallet designed for AI Agents. Users have full control, supporting AI Agents to autonomously execute on-chain operations under risk control strategies, while you can export your private key anytime for self-management.',
      },
    },
    q2: {
      question: {
        zh: '我的资产安全吗？',
        en: 'Are my assets secure?',
      },
      answer: {
        zh: '绝对安全。Claw Wallet 采用自托管架构，私钥通过 AWS Nitro Enclaves TEE 技术分片加密存储，只有您本人可以访问。同时配备多重风控策略：交易限额、合约白名单、大额二次确认等，全方位保护您的资产。',
        en: 'Absolutely secure. Claw Wallet uses a self-custodial architecture where private keys are sharded and encrypted using AWS Nitro Enclaves TEE technology, accessible only by you. Multiple risk control strategies are in place: transaction limits, contract whitelists, large transaction confirmations, and more.',
      },
    },
    q3: {
      question: {
        zh: '我可以导出私钥吗？',
        en: 'Can I export my private key?',
      },
      answer: {
        zh: '可以。作为自托管钱包，您拥有私钥的完全控制权，可随时在设置中导出私钥或助记词。建议导出后安全离线存储，切勿通过网络传输或告知他人。',
        en: 'Yes. As a self-custodial wallet, you have full control over your private key. You can export your private key or mnemonic phrase anytime in settings. Store them securely offline and never share them online or with others.',
      },
    },
    q4: {
      question: {
        zh: '支持哪些区块链？',
        en: 'Which blockchains are supported?',
      },
      answer: {
        zh: '目前支持 Ethereum、Polygon、BSC、Arbitrum、Optimism、Base 等 20+ 主流公链，未来将持续添加更多网络支持。',
        en: 'Currently supports 20+ mainstream chains including Ethereum, Polygon, BSC, Arbitrum, Optimism, Base, with more networks to be added continuously.',
      },
    },
    q5: {
      question: {
        zh: 'AI Agent 如何操作我的钱包？',
        en: 'How does AI Agent operate my wallet?',
      },
      answer: {
        zh: '您可以设置精细的权限策略，包括每日交易限额、允许交互的合约白名单、单笔交易上限等。Agent 只能在您授权的范围内操作，超出限制会触发二次确认通知。',
        en: 'You can set granular permission policies, including daily transaction limits, contract whitelists, and single transaction caps. Agents can only operate within your authorized scope, and actions beyond limits will trigger confirmation notifications.',
      },
    },
  },

  // CTA Section
  cta: {
    title: {
      zh: '为您的 OpenClaw 部署原生钱包',
      en: 'Deploy a Native Wallet for Your OpenClaw Agent',
    },
    subtitle: {
      zh: '复制下方命令，发送给 OpenClaw，3 秒完成部署',
      en: 'Copy the command below, send it to OpenClaw, and deploy in 3 seconds',
    },
    readyTitle: {
      zh: '准备好开始了吗？',
      en: 'Ready to Get Started?',
    },
    readySubtitle: {
      zh: '加入数千名用户，让 AI Agent 为你安全管理链上资产',
      en: 'Join thousands of users, let AI Agent manage your on-chain assets securely',
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
      zh: '免费开源',
      en: 'Open Source',
    },
    feature2: {
      zh: '无需注册',
      en: 'No Registration',
    },
    feature3: {
      zh: '即刻使用',
      en: 'Instant Access',
    },
    footer: {
      zh: '免费开始使用 · 无需信用卡 · 3 秒完成部署',
      en: 'Free to start · No credit card required · Deploy in 3 seconds',
    },
  },

  // Agent Roles Section
  agentRoles: {
    badge: {
      zh: 'Agent 能力',
      en: 'Agent Capabilities',
    },
    title: {
      zh: '一个钱包，胜任所有场景',
      en: 'One Wallet for All Scenarios',
    },
    subtitle: {
      zh: '您的完整 Web3 AI 团队。从 DeFi 交易到资产管理，Claw Wallet 让 Agent 安全处理一切链上操作。',
      en: 'Your complete Web3 AI team. From DeFi trading to asset management, Claw Wallet enables Agents to safely handle all on-chain operations.',
    },
    role1Title: {
      zh: 'DeFi 交易员',
      en: 'DeFi Trader',
    },
    role1Desc: {
      zh: '自动执行 Swap、流动性挖矿、收益聚合，24/7 监控市场机会',
      en: 'Automatically execute swaps, liquidity mining, and yield aggregation, monitoring market opportunities 24/7',
    },
    role1Tag1: {
      zh: 'DEX 交易',
      en: 'DEX Trading',
    },
    role1Tag2: {
      zh: '收益 farming',
      en: 'Yield Farming',
    },
    role1Tag3: {
      zh: '自动复利',
      en: 'Auto-Compounding',
    },
    role2Title: {
      zh: '资产管理员',
      en: 'Asset Manager',
    },
    role2Desc: {
      zh: '跨链资产配置、再平衡、风险监控，保持投资组合最优状态',
      en: 'Cross-chain asset allocation, rebalancing, and risk monitoring to maintain optimal portfolio status',
    },
    role2Tag1: {
      zh: '跨链桥接',
      en: 'Cross-Chain Bridging',
    },
    role2Tag2: {
      zh: '资产再平衡',
      en: 'Asset Rebalancing',
    },
    role2Tag3: {
      zh: '风险评估',
      en: 'Risk Assessment',
    },
    role3Title: {
      zh: '安全审计员',
      en: 'Security Auditor',
    },
    role3Desc: {
      zh: '每笔交易前自动扫描合约风险，拦截可疑操作，保护资产安全',
      en: 'Automatically scan contract risks before each transaction, intercept suspicious operations, and protect asset security',
    },
    role3Tag1: {
      zh: '合约扫描',
      en: 'Contract Scanning',
    },
    role3Tag2: {
      zh: '风险评分',
      en: 'Risk Scoring',
    },
    role3Tag3: {
      zh: '异常拦截',
      en: 'Anomaly Interception',
    },
    role4Title: {
      zh: '数据分析师',
      en: 'Data Analyst',
    },
    role4Desc: {
      zh: '追踪链上数据、生成收益报告、监控 Gas 费用，提供数据洞察',
      en: 'Track on-chain data, generate yield reports, monitor Gas fees, and provide data insights',
    },
    role4Tag1: {
      zh: '链上分析',
      en: 'On-Chain Analysis',
    },
    role4Tag2: {
      zh: '收益报告',
      en: 'Yield Reports',
    },
    role4Tag3: {
      zh: 'Gas 优化',
      en: 'Gas Optimization',
    },
    role5Title: {
      zh: '支付助理',
      en: 'Payment Assistant',
    },
    role5Desc: {
      zh: '处理定期付款、薪资发放、订阅管理，支持多币种批量转账',
      en: 'Handle recurring payments, salary distribution, subscription management, and support multi-currency batch transfers',
    },
    role5Tag1: {
      zh: '定期支付',
      en: 'Recurring Payments',
    },
    role5Tag2: {
      zh: '批量转账',
      en: 'Batch Transfers',
    },
    role5Tag3: {
      zh: '多币种',
      en: 'Multi-Currency',
    },
    role6Title: {
      zh: '链上研究员',
      en: 'On-Chain Researcher',
    },
    role6Desc: {
      zh: '追踪新项目、监控空投机会、分析代币经济，主动呈现研究结果',
      en: 'Track new projects, monitor airdrop opportunities, analyze token economics, and proactively present research findings',
    },
    role6Tag1: {
      zh: '空投追踪',
      en: 'Airdrop Tracking',
    },
    role6Tag2: {
      zh: '项目调研',
      en: 'Project Research',
    },
    role6Tag3: {
      zh: '代币分析',
      en: 'Token Analysis',
    },
  },

  // Footer
  footer: {
    copyright: {
      zh: '© 2026 Claw Wallet. OpenClaw 原生安全加密钱包',
      en: '© 2026 Claw Wallet. OpenClaw Native Secure Crypto Wallet',
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
