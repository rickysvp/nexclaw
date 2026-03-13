(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/landingpage/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// i18n translations for ClawWallet Landing Page
// Supported languages: zh, en
__turbopack_context__.s([
    "getTranslation",
    ()=>getTranslation,
    "languages",
    ()=>languages,
    "translations",
    ()=>translations
]);
const languages = [
    {
        code: 'zh',
        label: '中文',
        flag: '🇨🇳'
    },
    {
        code: 'en',
        label: 'English',
        flag: '🇺🇸'
    }
];
const translations = {
    // Navigation
    nav: {
        features: {
            zh: '特性',
            en: 'Features'
        },
        security: {
            zh: '安全',
            en: 'Security'
        },
        reviews: {
            zh: '用户反馈',
            en: 'Reviews'
        },
        faq: {
            zh: 'FAQ',
            en: 'FAQ'
        },
        getStarted: {
            zh: '开始使用',
            en: 'Get Started'
        }
    },
    // Hero Section
    hero: {
        badge: {
            zh: 'Powered by OpenClaw',
            en: 'Powered by OpenClaw'
        },
        title: {
            zh: '专属Agent的安全加密钱包',
            en: 'A Secure Crypto Wallet Purpose-Built for AI Agents'
        },
        subtitle: {
            zh: '一句话，为你的OpenClaw部署安全的无私钥多链钱包，确保你的加密资产被安全使用。',
            en: 'Deploy a secure, keyless, multi-chain wallet for your OpenClaw with a single command. Ensure your crypto assets are used safely.'
        },
        feature1: {
            zh: 'TEE 安全架构',
            en: 'TEE Security Architecture'
        },
        feature2: {
            zh: '多链支持',
            en: 'Multi-Chain Support'
        },
        feature3: {
            zh: '零配置',
            en: 'Zero Configuration'
        },
        cliTab: {
            zh: '我是人类',
            en: 'I am Human'
        },
        openclawTab: {
            zh: '我是 Agent',
            en: 'I am Agent'
        },
        installCommand: {
            zh: '安装 clawwallet.cc/clawwallet.md',
            en: 'Install clawwallet.cc/clawwallet.md'
        },
        runInTerminal: {
            zh: '在终端中运行安装命令',
            en: 'Run install command in terminal'
        },
        sendToOpenClaw: {
            zh: '发送给 OpenClaw 自动安装',
            en: 'Send to OpenClaw for auto-install'
        },
        noRegistration: {
            zh: '无需注册，复制后即可使用',
            en: 'No registration required, use immediately after copying'
        },
        copyBtn: {
            zh: '复制',
            en: 'Copy'
        },
        copied: {
            zh: '已复制',
            en: 'Copied'
        },
        copyHint: {
            zh: '复制后发送给 OpenClaw 即可自动安装',
            en: 'Copy and send to OpenClaw for automatic installation'
        }
    },
    // Partners Section
    partners: {
        title: {
            zh: '已支持的主流公链',
            en: 'Supported Mainstream Chains'
        }
    },
    // Stats Section
    stats: {
        wallets: {
            zh: '已部署钱包',
            en: 'Wallets Deployed'
        },
        uptime: {
            zh: '安全运行时间',
            en: 'Secure Uptime'
        },
        clients: {
            zh: '企业客户',
            en: 'Enterprise Clients'
        },
        chains: {
            zh: '支持公链',
            en: 'Supported Chains'
        }
    },
    // Features Section
    features: {
        title: {
            zh: '核心特性',
            en: 'Core Features'
        },
        subtitle: {
            zh: '为 AI Agent 打造的专业级钱包解决方案',
            en: 'Professional wallet solution built for AI Agents'
        },
        tee: {
            title: {
                zh: 'TEE 安全架构',
                en: 'TEE Security Architecture'
            },
            desc: {
                zh: '基于 AWS Nitro Enclaves 的硬件级安全隔离，私钥永不离开安全环境',
                en: 'Hardware-level security isolation based on AWS Nitro Enclaves, private keys never leave the secure environment'
            }
        },
        fast: {
            title: {
                zh: '3 秒极速创建',
                en: '3-Second Fast Creation'
            },
            desc: {
                zh: '无私钥，无需复杂配置，一行命令即刻生成可用钱包',
                en: 'No private keys, no complex configuration, generate a usable wallet with one command'
            }
        },
        multichain: {
            title: {
                zh: '多链原生支持',
                en: 'Multi-Chain Native Support'
            },
            desc: {
                zh: 'Ethereum、Polygon、BSC、Arbitrum 等主流公链一键切换',
                en: 'One-click switching between mainstream public chains like Ethereum, Polygon, BSC, Arbitrum'
            }
        }
    },
    // Security Section
    security: {
        badge: {
            zh: 'TEE 硬件安全',
            en: 'TEE Hardware Security'
        },
        teeEnv: {
            zh: 'TEE 可信执行环境',
            en: 'TEE Trusted Execution Environment'
        },
        hardwareLevel: {
            zh: 'Hardware-Level Security',
            en: 'Hardware-Level Security'
        },
        title: {
            zh: '企业级安全，Agent 操作零风险',
            en: 'Enterprise-Grade Security, Zero Risk for Agent Operations'
        },
        subtitle: {
            zh: 'Claw Wallet 采用多层防护体系，确保 Agent 每一次链上操作都在用户完全掌控之内。',
            en: 'Claw Wallet employs a multi-layered protection system, ensuring every on-chain operation by Agents remains fully under user control.'
        },
        teeSharding: {
            title: {
                zh: 'TEE 可信执行环境分片',
                en: 'TEE Trusted Execution Environment with Key Sharding'
            },
            desc: {
                zh: '基于 AWS Nitro Enclaves 可信执行环境，私钥在 AWS 硬件级隔离飞地内分片加密，充分利用 Amazon 云服务器的安全合规能力。',
                en: 'Built on AWS Nitro Enclaves, private keys are sharded and encrypted within hardware-isolated enclaves, leveraging Amazon\'s cloud security and compliance infrastructure.'
            }
        },
        txEngine: {
            title: {
                zh: '交易策略引擎拦截',
                en: 'Transaction Policy Engine with Real-Time Filtering'
            },
            desc: {
                zh: '每笔 Agent 发起的交易在广播前经过五重安全过滤：金额上限校验、目标合约白名单、操作频率限制、交易审批流程、实时安全风控。',
                en: 'Every transaction initiated by Agents undergoes five layers of security checks before broadcast: amount limits, contract whitelisting, frequency controls, approval workflows, and real-time risk monitoring.'
            }
        },
        confirm: {
            title: {
                zh: '大额交易二次确认',
                en: 'Multi-Factor Confirmation for High-Value Transactions'
            },
            desc: {
                zh: '超过用户设定阈值的交易将触发推送通知，要求用户在 App 或邮件中二次授权方可广播。',
                en: 'Transactions exceeding user-defined thresholds trigger push notifications, requiring secondary authorization via the App or email before broadcasting.'
            }
        },
        scan: {
            title: {
                zh: '链上合约实时扫描',
                en: 'Real-Time On-Chain Contract Scanning'
            },
            desc: {
                zh: '集成 Bitslab Safe 安全 API，Agent 发起交互前自动扫描目标合约风险评分与漏洞特征，高风险合约自动拦截告警。',
                en: 'Integrated with Bitslab Safe\'s security API, automatically scans target contracts for risk scores and vulnerabilities before Agent interaction, intercepting and alerting on high-risk contracts.'
            }
        },
        encryption: {
            title: {
                zh: '端到端加密通信',
                en: 'End-to-End Encrypted Communication'
            },
            desc: {
                zh: 'OpenClaw Agent 与 Claw Wallet 之间所有通信均经过 TLS 1.3 + 消息级签名双重加密，防中间人攻击。',
                en: 'All communication between OpenClaw Agent and Claw Wallet is encrypted with TLS 1.3 and message-level signatures, protecting against man-in-the-middle attacks.'
            }
        }
    },
    // Usage Section
    usage: {
        title: {
            zh: '原生集成，开箱即用',
            en: 'Native Integration, Ready Out of the Box'
        },
        subtitle: {
            zh: '作为 OpenClaw 原生 Skill，安装后即刻拥有钱包能力。无需额外配置，通过自然语言即可操控您的加密资产。',
            en: 'As a native OpenClaw Skill, you instantly gain wallet capabilities after installation. No additional configuration needed—control your crypto assets using natural language.'
        },
        create: {
            zh: '创建钱包',
            en: 'Create Wallet'
        },
        balance: {
            zh: '查询余额',
            en: 'Check Balance'
        },
        send: {
            zh: '发送交易',
            en: 'Send Transaction'
        },
        autonomyBadge: {
            zh: '自主交互',
            en: 'Autonomous Interaction'
        },
        autonomyTitle: {
            zh: 'OpenClaw 主动管理您的资产',
            en: 'OpenClaw Proactively Manages Your Assets'
        },
        autonomySubtitle: {
            zh: '不是被动响应，而是具备自主行动能力的 AI Agent。通过安全策略限定资金管理边界，让 OpenClaw 主动为您优化投资组合',
            en: 'Not just passive responses, but an AI Agent with autonomous capabilities. Define fund management boundaries through security policies, letting OpenClaw proactively optimize your portfolio.'
        },
        agentName: {
            zh: 'OpenClaw Agent',
            en: 'OpenClaw Agent'
        },
        agentStatus: {
            zh: '自主运行中',
            en: 'Running Autonomously'
        },
        monitoring: {
            zh: '监控市场',
            en: 'Monitoring Market'
        },
        activity1Title: {
            zh: '检测到 ETH 价格回调 5%',
            en: 'Detected ETH price pullback of 5%'
        },
        activity1Time: {
            zh: '09:15 · 市场分析',
            en: '09:15 · Market Analysis'
        },
        activity2Title: {
            zh: '触发定投策略：买入 0.05 ETH',
            en: 'DCA strategy triggered: Buy 0.05 ETH'
        },
        activity2Time: {
            zh: '09:16 · 策略执行',
            en: '09:16 · Strategy Execution'
        },
        withinLimit: {
            zh: '✓ 在限额内',
            en: '✓ Within Limit'
        },
        dailyLimit: {
            zh: '日限额: $1000 / 已用: $150',
            en: 'Daily: $1000 / Used: $150'
        },
        activity3Title: {
            zh: '大额交易待确认',
            en: 'Large transaction pending confirmation'
        },
        activity3Time: {
            zh: '14:30 · 需要人工审批',
            en: '14:30 · Manual approval required'
        },
        txDetail: {
            zh: '发送 2 ETH 到 0x789...abc',
            en: 'Send 2 ETH to 0x789...abc'
        },
        txWarning: {
            zh: '⚠️ 超出单笔限额 ($500)，需确认',
            en: '⚠️ Exceeds single limit ($500), confirmation needed'
        },
        activity4Title: {
            zh: '自动质押 100 USDC 到 Aave',
            en: 'Auto-stake 100 USDC to Aave'
        },
        activity4Time: {
            zh: '16:00 · 收益优化',
            en: '16:00 · Yield Optimization'
        },
        whitelistContract: {
            zh: '✓ 白名单合约',
            en: '✓ Whitelist Contract'
        },
        apy: {
            zh: 'APY: 4.2%',
            en: 'APY: 4.2%'
        },
        activity5Title: {
            zh: '阻止可疑交易',
            en: 'Blocked suspicious transaction'
        },
        activity5Time: {
            zh: '18:45 · 安全拦截',
            en: '18:45 · Security Intercept'
        },
        unauthorizedRequest: {
            zh: '检测到未授权合约交互请求',
            en: 'Detected unauthorized contract interaction request'
        },
        blockedReason: {
            zh: '✗ 合约不在白名单中，已自动拒绝',
            en: '✗ Contract not in whitelist, auto-rejected'
        },
        securityConfig: {
            zh: '安全策略配置',
            en: 'Security Policy Configuration'
        },
        dailyLimitTitle: {
            zh: '日交易限额',
            en: 'Daily Transaction Limit'
        },
        dailyLimitDesc: {
            zh: '24小时内最大支出',
            en: 'Maximum spending within 24 hours'
        },
        singleLimitTitle: {
            zh: '单笔限额',
            en: 'Single Transaction Limit'
        },
        singleLimitDesc: {
            zh: '每次交易最大金额',
            en: 'Maximum amount per transaction'
        },
        whitelistTitle: {
            zh: '合约白名单',
            en: 'Contract Whitelist'
        },
        whitelistDesc: {
            zh: '仅允许交互的合约',
            en: 'Only contracts allowed to interact'
        },
        largeTxConfirm: {
            zh: '大额确认',
            en: 'Large Transaction Confirmation'
        },
        largeTxConfirmDesc: {
            zh: '超出限额需人工审批',
            en: 'Manual approval required when exceeding limit'
        },
        enabled: {
            zh: '✓ 已启用',
            en: '✓ Enabled'
        },
        on: {
            zh: '开启',
            en: 'On'
        },
        securityTip: {
            zh: '安全提示：',
            en: 'Security Tip:'
        },
        securityTipContent: {
            zh: 'OpenClaw 的所有操作都在您设定的策略边界内执行。超出限额或遇到可疑交易时，系统会自动拦截并通知您。',
            en: 'All OpenClaw operations are executed within your defined policy boundaries. The system will automatically intercept and notify you when limits are exceeded or suspicious transactions are detected.'
        },
        autoExecuted: {
            zh: '自动执行',
            en: 'Auto Executed'
        },
        pendingApproval: {
            zh: '待审批',
            en: 'Pending Approval'
        },
        securityBlocked: {
            zh: '安全拦截',
            en: 'Security Blocked'
        }
    },
    // Testimonials Section
    testimonials: {
        badge: {
            zh: '用户评价',
            en: 'User Reviews'
        },
        title: {
            zh: '开发者们怎么说',
            en: 'What Developers Say'
        },
        subtitle: {
            zh: '来自 DeFi 开发者、量化工程师和协议创始人的真实反馈',
            en: 'Real feedback from DeFi developers, quantitative engineers, and protocol founders'
        }
    },
    // FAQ Section
    faq: {
        title: {
            zh: '常见问题',
            en: 'Frequently Asked Questions'
        },
        subtitle: {
            zh: '关于 ClawWallet 的常见问题',
            en: 'Everything you need to know about ClawWallet'
        },
        moreQuestions: {
            zh: '还有其他问题？',
            en: 'Have more questions?'
        },
        contactUs: {
            zh: '联系我们',
            en: 'Contact Us'
        },
        q1: {
            question: {
                zh: 'ClawWallet 是什么？',
                en: 'What is ClawWallet?'
            },
            answer: {
                zh: 'ClawWallet 是专为 OpenClaw AI Agent 设计的原生安全加密钱包 Skill。通过简单的命令安装，即可为您的 AI Agent 添加安全的多链钱包能力。',
                en: 'ClawWallet is a native secure crypto wallet Skill designed specifically for OpenClaw AI Agents. Install with a simple command to add secure multi-chain wallet capabilities to your AI Agent.'
            }
        },
        q2: {
            question: {
                zh: '如何安装 ClawWallet？',
                en: 'How to install ClawWallet?'
            },
            answer: {
                zh: '只需在终端运行命令 npx ClawWallet@latest install clawwallet，或直接向 OpenClaw 发送「安装 clawwallet」即可自动完成部署。',
                en: 'Simply run the command npx ClawWallet@latest install clawwallet in your terminal, or send "install clawwallet" directly to OpenClaw for automatic deployment.'
            }
        },
        q3: {
            question: {
                zh: '我的资产安全吗？',
                en: 'Are my assets secure?'
            },
            answer: {
                zh: '绝对安全。ClawWallet 采用 AWS Nitro Enclaves TEE 技术，私钥在硬件安全环境中生成和存储，连我们自己也无法访问。',
                en: 'Absolutely. ClawWallet uses AWS Nitro Enclaves TEE technology. Private keys are generated and stored in a hardware-secure environment that even we cannot access.'
            }
        },
        q4: {
            question: {
                zh: '支持哪些区块链？',
                en: 'Which blockchains are supported?'
            },
            answer: {
                zh: '目前支持 Ethereum、Polygon、BSC、Arbitrum 等主流公链，未来将持续添加更多网络支持。',
                en: 'Currently supports mainstream public chains including Ethereum, Polygon, BSC, Arbitrum, with more networks to be added continuously in the future.'
            }
        },
        q5: {
            question: {
                zh: '需要私钥吗？',
                en: 'Do I need a private key?'
            },
            answer: {
                zh: '不需要。ClawWallet 通过 OpenClaw 账户体系安全管理，无需管理复杂的私钥，也不会有私钥丢失的风险。',
                en: 'No. ClawWallet securely manages through the OpenClaw account system, no need to manage complex private keys, and no risk of losing private keys.'
            }
        }
    },
    // CTA Section
    cta: {
        title: {
            zh: '为您的 OpenClaw 部署原生钱包',
            en: 'Deploy a Native Wallet for Your OpenClaw Agent'
        },
        subtitle: {
            zh: '复制下方命令，发送给 OpenClaw，3 秒完成部署',
            en: 'Copy the command below, send it to OpenClaw, and deploy in 3 seconds'
        },
        readyTitle: {
            zh: '准备好开始了吗？',
            en: 'Ready to Get Started?'
        },
        readySubtitle: {
            zh: '加入数千名开发者，为 AI Agent 添加加密能力',
            en: 'Join thousands of developers adding crypto capabilities to AI Agents'
        },
        copyCommand: {
            zh: '复制命令',
            en: 'Copy Command'
        },
        copied: {
            zh: '已复制',
            en: 'Copied'
        },
        feature1: {
            zh: '免费开源',
            en: 'Open Source'
        },
        feature2: {
            zh: '无需注册',
            en: 'No Registration'
        },
        feature3: {
            zh: '即刻使用',
            en: 'Instant Access'
        },
        footer: {
            zh: '免费开始使用 · 无需信用卡 · 3 秒完成部署',
            en: 'Free to start · No credit card required · Deploy in 3 seconds'
        }
    },
    // Agent Roles Section
    agentRoles: {
        badge: {
            zh: 'Agent 能力',
            en: 'Agent Capabilities'
        },
        title: {
            zh: '一个钱包，胜任所有场景',
            en: 'One Wallet for All Scenarios'
        },
        subtitle: {
            zh: '您的完整 Web3 AI 团队。从 DeFi 交易到资产管理，Claw Wallet 让 Agent 安全处理一切链上操作。',
            en: 'Your complete Web3 AI team. From DeFi trading to asset management, Claw Wallet enables Agents to safely handle all on-chain operations.'
        },
        role1Title: {
            zh: 'DeFi 交易员',
            en: 'DeFi Trader'
        },
        role1Desc: {
            zh: '自动执行 Swap、流动性挖矿、收益聚合，24/7 监控市场机会',
            en: 'Automatically execute swaps, liquidity mining, and yield aggregation, monitoring market opportunities 24/7'
        },
        role1Tag1: {
            zh: 'DEX 交易',
            en: 'DEX Trading'
        },
        role1Tag2: {
            zh: '收益 farming',
            en: 'Yield Farming'
        },
        role1Tag3: {
            zh: '自动复利',
            en: 'Auto-Compounding'
        },
        role2Title: {
            zh: '资产管理员',
            en: 'Asset Manager'
        },
        role2Desc: {
            zh: '跨链资产配置、再平衡、风险监控，保持投资组合最优状态',
            en: 'Cross-chain asset allocation, rebalancing, and risk monitoring to maintain optimal portfolio status'
        },
        role2Tag1: {
            zh: '跨链桥接',
            en: 'Cross-Chain Bridging'
        },
        role2Tag2: {
            zh: '资产再平衡',
            en: 'Asset Rebalancing'
        },
        role2Tag3: {
            zh: '风险评估',
            en: 'Risk Assessment'
        },
        role3Title: {
            zh: '安全审计员',
            en: 'Security Auditor'
        },
        role3Desc: {
            zh: '每笔交易前自动扫描合约风险，拦截可疑操作，保护资产安全',
            en: 'Automatically scan contract risks before each transaction, intercept suspicious operations, and protect asset security'
        },
        role3Tag1: {
            zh: '合约扫描',
            en: 'Contract Scanning'
        },
        role3Tag2: {
            zh: '风险评分',
            en: 'Risk Scoring'
        },
        role3Tag3: {
            zh: '异常拦截',
            en: 'Anomaly Interception'
        },
        role4Title: {
            zh: '数据分析师',
            en: 'Data Analyst'
        },
        role4Desc: {
            zh: '追踪链上数据、生成收益报告、监控 Gas 费用，提供数据洞察',
            en: 'Track on-chain data, generate yield reports, monitor Gas fees, and provide data insights'
        },
        role4Tag1: {
            zh: '链上分析',
            en: 'On-Chain Analysis'
        },
        role4Tag2: {
            zh: '收益报告',
            en: 'Yield Reports'
        },
        role4Tag3: {
            zh: 'Gas 优化',
            en: 'Gas Optimization'
        },
        role5Title: {
            zh: '支付助理',
            en: 'Payment Assistant'
        },
        role5Desc: {
            zh: '处理定期付款、薪资发放、订阅管理，支持多币种批量转账',
            en: 'Handle recurring payments, salary distribution, subscription management, and support multi-currency batch transfers'
        },
        role5Tag1: {
            zh: '定期支付',
            en: 'Recurring Payments'
        },
        role5Tag2: {
            zh: '批量转账',
            en: 'Batch Transfers'
        },
        role5Tag3: {
            zh: '多币种',
            en: 'Multi-Currency'
        },
        role6Title: {
            zh: '链上研究员',
            en: 'On-Chain Researcher'
        },
        role6Desc: {
            zh: '追踪新项目、监控空投机会、分析代币经济，主动呈现研究结果',
            en: 'Track new projects, monitor airdrop opportunities, analyze token economics, and proactively present research findings'
        },
        role6Tag1: {
            zh: '空投追踪',
            en: 'Airdrop Tracking'
        },
        role6Tag2: {
            zh: '项目调研',
            en: 'Project Research'
        },
        role6Tag3: {
            zh: '代币分析',
            en: 'Token Analysis'
        }
    },
    // Footer
    footer: {
        copyright: {
            zh: '© 2026 Claw Wallet. OpenClaw 原生安全加密钱包',
            en: '© 2026 Claw Wallet. OpenClaw Native Secure Crypto Wallet'
        }
    }
};
function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys){
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }
    if (value && typeof value === 'object' && lang in value) {
        return value[lang];
    }
    return key;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landingpage/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landingpage/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const installCommand = "npx ClawWallet@latest install clawwallet";
const navLinks = [
    {
        key: "nav.features",
        href: "#features"
    },
    {
        key: "nav.security",
        href: "#security"
    },
    {
        key: "nav.reviews",
        href: "#testimonials"
    },
    {
        key: "nav.faq",
        href: "#faq"
    }
];
const statsKeys = [
    {
        value: "10K+",
        key: "stats.wallets"
    },
    {
        value: "99.9%",
        key: "stats.uptime"
    },
    {
        value: "50+",
        key: "stats.clients"
    },
    {
        value: "4",
        key: "stats.chains"
    }
];
const featuresKeys = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        titleKey: "features.tee.title",
        descKey: "features.tee.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        titleKey: "features.fast.title",
        descKey: "features.fast.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        titleKey: "features.multichain.title",
        descKey: "features.multichain.desc"
    }
];
const detailedFeaturesKeys = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        titleKey: "security.teeSharding.title",
        descKey: "security.teeSharding.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        titleKey: "security.txEngine.title",
        descKey: "security.txEngine.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
        titleKey: "security.confirm.title",
        descKey: "security.confirm.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        titleKey: "security.scan.title",
        descKey: "security.scan.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        titleKey: "security.encryption.title",
        descKey: "security.encryption.desc"
    }
];
const faqKeys = [
    {
        qKey: "faq.q1.question",
        aKey: "faq.q1.answer"
    },
    {
        qKey: "faq.q2.question",
        aKey: "faq.q2.answer"
    },
    {
        qKey: "faq.q3.question",
        aKey: "faq.q3.answer"
    },
    {
        qKey: "faq.q4.question",
        aKey: "faq.q4.answer"
    },
    {
        qKey: "faq.q5.question",
        aKey: "faq.q5.answer"
    }
];
const partners = [
    {
        name: "Ethereum",
        logoPath: "/logos/ethereum.png"
    },
    {
        name: "Monad",
        logoPath: "/logos/monad.png"
    },
    {
        name: "SUI",
        logoPath: "/logos/sui.png"
    },
    {
        name: "Polygon",
        logoPath: "/logos/polygon.png"
    },
    {
        name: "BSC",
        logoPath: "/logos/bsc.png"
    }
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
        rating: 5
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
        rating: 5
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
        rating: 5
    }
];
function FAQItem(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "891766261dd4178f584155f871324467ae0154cd80c5559327fee898c965e1c7") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "891766261dd4178f584155f871324467ae0154cd80c5559327fee898c965e1c7";
    }
    const { question, answer } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== isOpen) {
        t1 = ({
            "FAQItem[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["FAQItem[<button>.onClick]"];
        $[1] = isOpen;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== question) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-gray-900 text-base group-hover:text-orange-600 transition-colors pr-4",
            children: question
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[3] = question;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const t3 = `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? "bg-orange-100" : "bg-gray-100 group-hover:bg-orange-50"}`;
    let t4;
    if ($[5] !== isOpen) {
        t4 = isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "w-5 h-5 text-orange-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 167,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "w-5 h-5 text-gray-400 group-hover:text-orange-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 167,
            columnNumber: 71
        }, this);
        $[5] = isOpen;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t1 || $[11] !== t2 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t1,
            className: "w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group",
            children: [
                t2,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 184,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== answer || $[15] !== isOpen) {
        t7 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: "auto"
            },
            exit: {
                opacity: 0,
                height: 0
            },
            transition: {
                duration: 0.2
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 leading-relaxed",
                    children: answer
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 205,
                    columnNumber: 35
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 205,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 194,
            columnNumber: 20
        }, this);
        $[14] = answer;
        $[15] = isOpen;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 214,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t6 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl border border-gray-100 overflow-hidden",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 222,
            columnNumber: 10
        }, this);
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    return t9;
}
_s(FAQItem, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = FAQItem;
function LandingPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(642);
    if ($[0] !== "891766261dd4178f584155f871324467ae0154cd80c5559327fee898c965e1c7") {
        for(let $i = 0; $i < 642; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "891766261dd4178f584155f871324467ae0154cd80c5559327fee898c965e1c7";
    }
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentLang, setCurrentLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    const [isLangMenuOpen, setIsLangMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [installTab, setInstallTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cli");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "LandingPage[handleCopy]": async ()=>{
                await navigator.clipboard.writeText(installCommand);
                setCopied(true);
                setTimeout({
                    "LandingPage[handleCopy > setTimeout()]": ()=>setCopied(false)
                }["LandingPage[handleCopy > setTimeout()]"], 2000);
            }
        })["LandingPage[handleCopy]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleCopy = t0;
    let t1;
    if ($[2] !== currentLang) {
        t1 = ({
            "LandingPage[t]": (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslation"])(key, currentLang)
        })["LandingPage[t]"];
        $[2] = currentLang;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const t = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 273,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-3 group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/claw.png",
                        alt: "ClawWallet",
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 280,
                        columnNumber: 201
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 280,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-900 font-bold text-sm tracking-tight",
                    children: "ClawWallet"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 280,
                    columnNumber: 286
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 280,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t) {
        t4 = navLinks.map({
            "LandingPage[navLinks.map()]": (link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: link.href,
                    className: "px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors",
                    children: t(link.key)
                }, link.href, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 288,
                    columnNumber: 46
                }, this)
        }["LandingPage[navLinks.map()]"]);
        $[6] = t;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-1",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 297,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== isLangMenuOpen) {
        t6 = ({
            "LandingPage[<button>.onClick]": ()=>setIsLangMenuOpen(!isLangMenuOpen)
        })["LandingPage[<button>.onClick]"];
        $[10] = isLangMenuOpen;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            className: "w-4 h-4 text-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 315,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== currentLang) {
        t8 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].find({
            "LandingPage[languages.find()]": (l)=>l.code === currentLang
        }["LandingPage[languages.find()]"])?.flag;
        $[13] = currentLang;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-700",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 332,
            columnNumber: 10
        }, this);
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "w-3 h-3 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t6 || $[19] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t6,
            className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm",
            children: [
                t7,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[18] = t6;
        $[19] = t9;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== currentLang || $[22] !== isLangMenuOpen) {
        t12 = isLangMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 8
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "absolute top-full right-0 mt-2 w-40 bg-white rounded-xl border border-gray-100 shadow-xl py-1 max-h-64 overflow-y-auto",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landingpage$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].map({
                "LandingPage[languages.map()]": (lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "LandingPage[languages.map() > <button>.onClick]": ()=>{
                                setCurrentLang(lang.code);
                                setIsLangMenuOpen(false);
                            }
                        }["LandingPage[languages.map() > <button>.onClick]"],
                        className: `w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${currentLang === lang.code ? "text-orange-600" : "text-gray-700"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: lang.flag
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 368,
                                columnNumber: 238
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: lang.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 368,
                                columnNumber: 262
                            }, this)
                        ]
                    }, lang.code, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 363,
                        columnNumber: 49
                    }, this)
            }["LandingPage[languages.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 356,
            columnNumber: 29
        }, this);
        $[21] = currentLang;
        $[22] = isLangMenuOpen;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t11 || $[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://github.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                className: "w-4 h-4 text-gray-600"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 387,
                columnNumber: 193
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-2",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://twitter.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                        className: "w-4 h-4 text-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 394,
                        columnNumber: 250
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 394,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== isMobileMenuOpen) {
        t16 = ({
            "LandingPage[<button>.onClick]": ()=>setIsMobileMenuOpen(!isMobileMenuOpen)
        })["LandingPage[<button>.onClick]"];
        $[29] = isMobileMenuOpen;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== isMobileMenuOpen) {
        t17 = isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-5 h-5 text-gray-600"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 411,
            columnNumber: 30
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            className: "w-5 h-5 text-gray-600"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 411,
            columnNumber: 72
        }, this);
        $[31] = isMobileMenuOpen;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== t16 || $[34] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t16,
            className: "md:hidden w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[33] = t16;
        $[34] = t17;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== t13 || $[37] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t13,
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[36] = t13;
        $[37] = t18;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t19 || $[40] !== t5) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative border-b border-gray-200/50 bg-white/70 backdrop-blur-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        t3,
                        t5,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 437,
                    columnNumber: 135
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 437,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[39] = t19;
        $[40] = t5;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== isMobileMenuOpen || $[43] !== t) {
        t21 = isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: "auto"
            },
            exit: {
                opacity: 0,
                height: 0
            },
            className: "md:hidden bg-white border-b border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 py-4 space-y-3",
                children: [
                    navLinks.map({
                        "LandingPage[navLinks.map()]": (link_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link_0.href,
                                onClick: {
                                    "LandingPage[navLinks.map() > <Link>.onClick]": ()=>setIsMobileMenuOpen(false)
                                }["LandingPage[navLinks.map() > <Link>.onClick]"],
                                className: "block py-2 text-gray-600 hover:text-gray-900",
                                children: t(link_0.key)
                            }, link_0.href, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 456,
                                columnNumber: 52
                            }, this)
                    }["LandingPage[navLinks.map()]"]),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-3 border-t border-gray-100 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com",
                                className: "flex items-center gap-2 text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 193
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 223
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 459,
                                columnNumber: 114
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://twitter.com",
                                className: "flex items-center gap-2 text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 346
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Twitter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 377
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 459,
                                columnNumber: 266
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 459,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 455,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 446,
            columnNumber: 31
        }, this);
        $[42] = isMobileMenuOpen;
        $[43] = t;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== t20 || $[46] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "fixed top-0 left-0 right-0 z-50",
            children: [
                t2,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[45] = t20;
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-b from-orange-50/50 via-white to-white pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    let t25;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            opacity: 0,
            x: -30
        };
        t25 = {
            opacity: 1,
            x: 0
        };
        $[49] = t24;
        $[50] = t25;
    } else {
        t24 = $[49];
        t25 = $[50];
    }
    let t26;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            duration: 0.6,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        };
        $[51] = t26;
    } else {
        t26 = $[51];
    }
    let t27;
    let t28;
    let t29;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            opacity: 0,
            scale: 0.9
        };
        t28 = {
            opacity: 1,
            scale: 1
        };
        t29 = {
            delay: 0.1
        };
        $[52] = t27;
        $[53] = t28;
        $[54] = t29;
    } else {
        t27 = $[52];
        t28 = $[53];
        t29 = $[54];
    }
    let t30;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 534,
            columnNumber: 11
        }, this);
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    let t31;
    if ($[56] !== t) {
        t31 = t("hero.badge");
        $[56] = t;
        $[57] = t31;
    } else {
        t31 = $[57];
    }
    let t32;
    if ($[58] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t27,
            animate: t28,
            transition: t29,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium",
                children: [
                    t30,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t31
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 549,
                        columnNumber: 195
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 549,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 549,
            columnNumber: 11
        }, this);
        $[58] = t31;
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text",
                children: "Claw Wallet"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 557,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[60] = t33;
    } else {
        t33 = $[60];
    }
    let t34;
    if ($[61] !== t) {
        t34 = t("hero.title");
        $[61] = t;
        $[62] = t34;
    } else {
        t34 = $[62];
    }
    let t35;
    if ($[63] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed",
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 572,
            columnNumber: 11
        }, this);
        $[63] = t34;
        $[64] = t35;
    } else {
        t35 = $[64];
    }
    let t36;
    if ($[65] !== t) {
        t36 = t("hero.subtitle");
        $[65] = t;
        $[66] = t36;
    } else {
        t36 = $[66];
    }
    let t37;
    if ($[67] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-gray-500 max-w-2xl leading-relaxed",
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 588,
            columnNumber: 11
        }, this);
        $[67] = t36;
        $[68] = t37;
    } else {
        t37 = $[68];
    }
    let t38;
    if ($[69] !== t35 || $[70] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t33,
                t35,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 596,
            columnNumber: 11
        }, this);
        $[69] = t35;
        $[70] = t37;
        $[71] = t38;
    } else {
        t38 = $[71];
    }
    let t39;
    if ($[72] !== t) {
        t39 = t("hero.feature1");
        $[72] = t;
        $[73] = t39;
    } else {
        t39 = $[73];
    }
    let t40;
    if ($[74] !== t) {
        t40 = t("hero.feature2");
        $[74] = t;
        $[75] = t40;
    } else {
        t40 = $[75];
    }
    let t41;
    if ($[76] !== t) {
        t41 = t("hero.feature3");
        $[76] = t;
        $[77] = t41;
    } else {
        t41 = $[77];
    }
    let t42;
    if ($[78] !== t39 || $[79] !== t40 || $[80] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-3",
            children: [
                t39,
                t40,
                t41
            ].map(_LandingPageAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 629,
            columnNumber: 11
        }, this);
        $[78] = t39;
        $[79] = t40;
        $[80] = t41;
        $[81] = t42;
    } else {
        t42 = $[81];
    }
    let t43;
    if ($[82] !== t32 || $[83] !== t38 || $[84] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t24,
            animate: t25,
            transition: t26,
            className: "space-y-8",
            children: [
                t32,
                t38,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 639,
            columnNumber: 11
        }, this);
        $[82] = t32;
        $[83] = t38;
        $[84] = t42;
        $[85] = t43;
    } else {
        t43 = $[85];
    }
    let t44;
    let t45;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = {
            opacity: 0,
            x: 30
        };
        t45 = {
            opacity: 1,
            x: 0
        };
        $[86] = t44;
        $[87] = t45;
    } else {
        t44 = $[86];
        t45 = $[87];
    }
    let t46;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = {
            duration: 0.6,
            delay: 0.2,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        };
        $[88] = t46;
    } else {
        t46 = $[88];
    }
    let t47;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = ({
            "LandingPage[<button>.onClick]": ()=>setInstallTab("cli")
        })["LandingPage[<button>.onClick]"];
        $[89] = t47;
    } else {
        t47 = $[89];
    }
    const t48 = `flex-1 py-3 px-4 text-sm font-medium transition-colors ${installTab === "cli" ? "text-orange-600 border-b-2 border-orange-500 bg-orange-50/50" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}`;
    let t49;
    if ($[90] !== t) {
        t49 = t("hero.cliTab");
        $[90] = t;
        $[91] = t49;
    } else {
        t49 = $[91];
    }
    let t50;
    if ($[92] !== t48 || $[93] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t47,
            className: t48,
            children: t49
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 695,
            columnNumber: 11
        }, this);
        $[92] = t48;
        $[93] = t49;
        $[94] = t50;
    } else {
        t50 = $[94];
    }
    let t51;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = ({
            "LandingPage[<button>.onClick]": ()=>setInstallTab("openclaw")
        })["LandingPage[<button>.onClick]"];
        $[95] = t51;
    } else {
        t51 = $[95];
    }
    const t52 = `flex-1 py-3 px-4 text-sm font-medium transition-colors ${installTab === "openclaw" ? "text-orange-600 border-b-2 border-orange-500 bg-orange-50/50" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}`;
    let t53;
    if ($[96] !== t) {
        t53 = t("hero.openclawTab");
        $[96] = t;
        $[97] = t53;
    } else {
        t53 = $[97];
    }
    let t54;
    if ($[98] !== t52 || $[99] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t51,
            className: t52,
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 722,
            columnNumber: 11
        }, this);
        $[98] = t52;
        $[99] = t53;
        $[100] = t54;
    } else {
        t54 = $[100];
    }
    let t55;
    if ($[101] !== t50 || $[102] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex border-b border-gray-100",
            children: [
                t50,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 731,
            columnNumber: 11
        }, this);
        $[101] = t50;
        $[102] = t54;
        $[103] = t55;
    } else {
        t55 = $[103];
    }
    let t56;
    if ($[104] !== copied || $[105] !== installTab || $[106] !== t) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: installTab === "cli" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 text-sm",
                            children: t("hero.runInTerminal")
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 740,
                            columnNumber: 118
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 740,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900 rounded-xl p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "text-sm text-gray-300 font-mono",
                                children: installCommand
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 740,
                                columnNumber: 274
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "LandingPage[<button>.onClick]": ()=>{
                                        navigator.clipboard.writeText(installCommand);
                                        setCopied(true);
                                        setTimeout({
                                            "LandingPage[<button>.onClick > setTimeout()]": ()=>setCopied(false)
                                        }["LandingPage[<button>.onClick > setTimeout()]"], 2000);
                                    }
                                }["LandingPage[<button>.onClick]"],
                                className: "text-gray-400 hover:text-orange-500 transition-colors ml-4",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-4 h-4 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 748,
                                    columnNumber: 128
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 748,
                                    columnNumber: 175
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 740,
                                columnNumber: 347
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 740,
                        columnNumber: 196
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 740,
                columnNumber: 56
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 text-sm",
                            children: t("hero.sendToOpenClaw")
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 748,
                            columnNumber: 290
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 748,
                        columnNumber: 255
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 p-4 bg-gray-50 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "w-4 h-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 748,
                                    columnNumber: 535
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 748,
                                columnNumber: 436
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "text-gray-700 font-medium flex-1",
                                children: t("hero.installCommand")
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 748,
                                columnNumber: 579
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "LandingPage[<button>.onClick]": ()=>{
                                        navigator.clipboard.writeText(t("hero.installCommand"));
                                        setCopied(true);
                                        setTimeout({
                                            "LandingPage[<button>.onClick > setTimeout()]": ()=>setCopied(false)
                                        }["LandingPage[<button>.onClick > setTimeout()]"], 2000);
                                    }
                                }["LandingPage[<button>.onClick]"],
                                className: "text-gray-400 hover:text-orange-500 transition-colors",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-4 h-4 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 756,
                                    columnNumber: 123
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 756,
                                    columnNumber: 170
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 748,
                                columnNumber: 663
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 748,
                        columnNumber: 369
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 748,
                columnNumber: 228
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 740,
            columnNumber: 11
        }, this);
        $[104] = copied;
        $[105] = installTab;
        $[106] = t;
        $[107] = t56;
    } else {
        t56 = $[107];
    }
    let t57;
    if ($[108] !== t55 || $[109] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden",
            children: [
                t55,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 766,
            columnNumber: 11
        }, this);
        $[108] = t55;
        $[109] = t56;
        $[110] = t57;
    } else {
        t57 = $[110];
    }
    let t58;
    if ($[111] !== t) {
        t58 = t("hero.noRegistration");
        $[111] = t;
        $[112] = t58;
    } else {
        t58 = $[112];
    }
    let t59;
    if ($[113] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm text-center",
            children: t58
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 783,
            columnNumber: 11
        }, this);
        $[113] = t58;
        $[114] = t59;
    } else {
        t59 = $[114];
    }
    let t60;
    if ($[115] !== t57 || $[116] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t44,
            animate: t45,
            transition: t46,
            className: "space-y-4",
            children: [
                t57,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 791,
            columnNumber: 11
        }, this);
        $[115] = t57;
        $[116] = t59;
        $[117] = t60;
    } else {
        t60 = $[117];
    }
    let t61;
    if ($[118] !== t43 || $[119] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-6xl mx-auto px-6 flex-1 flex flex-col justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                children: [
                    t43,
                    t60
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 800,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 800,
            columnNumber: 11
        }, this);
        $[118] = t43;
        $[119] = t60;
        $[120] = t61;
    } else {
        t61 = $[120];
    }
    let t62;
    if ($[121] !== t) {
        t62 = t("partners.title");
        $[121] = t;
        $[122] = t62;
    } else {
        t62 = $[122];
    }
    let t63;
    if ($[123] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-gray-400 text-sm font-medium mb-8 tracking-wide uppercase",
            children: t62
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 817,
            columnNumber: 11
        }, this);
        $[123] = t62;
        $[124] = t63;
    } else {
        t63 = $[124];
    }
    let t64;
    if ($[125] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center items-center gap-12 md:gap-16",
            children: partners.map(_LandingPagePartnersMap)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 825,
            columnNumber: 11
        }, this);
        $[125] = t64;
    } else {
        t64 = $[125];
    }
    let t65;
    if ($[126] !== t63) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-auto pt-20 pb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6",
                children: [
                    t63,
                    t64
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 832,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 832,
            columnNumber: 11
        }, this);
        $[126] = t63;
        $[127] = t65;
    } else {
        t65 = $[127];
    }
    let t66;
    if ($[128] !== t61 || $[129] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative pt-32 pb-20 lg:pt-40 min-h-screen flex flex-col",
            children: [
                t23,
                t61,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 840,
            columnNumber: 11
        }, this);
        $[128] = t61;
        $[129] = t65;
        $[130] = t66;
    } else {
        t66 = $[130];
    }
    let t67;
    if ($[131] !== t) {
        t67 = t("usage.autonomyBadge");
        $[131] = t;
        $[132] = t67;
    } else {
        t67 = $[132];
    }
    let t68;
    if ($[133] !== t) {
        t68 = t("usage.autonomyTitle");
        $[133] = t;
        $[134] = t68;
    } else {
        t68 = $[134];
    }
    let t69;
    if ($[135] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-bold text-gray-900 mt-3",
            children: t68
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 865,
            columnNumber: 11
        }, this);
        $[135] = t68;
        $[136] = t69;
    } else {
        t69 = $[136];
    }
    let t70;
    if ($[137] !== t) {
        t70 = t("usage.autonomySubtitle");
        $[137] = t;
        $[138] = t70;
    } else {
        t70 = $[138];
    }
    let t71;
    if ($[139] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 mt-4 max-w-2xl mx-auto",
            children: t70
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 881,
            columnNumber: 11
        }, this);
        $[139] = t70;
        $[140] = t71;
    } else {
        t71 = $[140];
    }
    let t72;
    if ($[141] !== t67 || $[142] !== t69 || $[143] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                t67,
                t69,
                t71
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 889,
            columnNumber: 11
        }, this);
        $[141] = t67;
        $[142] = t69;
        $[143] = t71;
        $[144] = t72;
    } else {
        t72 = $[144];
    }
    let t73;
    let t74;
    let t75;
    let t76;
    if ($[145] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = {
            opacity: 0,
            x: -30
        };
        t74 = {
            opacity: 1,
            x: 0
        };
        t75 = {
            once: true
        };
        t76 = {
            duration: 0.6
        };
        $[145] = t73;
        $[146] = t74;
        $[147] = t75;
        $[148] = t76;
    } else {
        t73 = $[145];
        t74 = $[146];
        t75 = $[147];
        t76 = $[148];
    }
    let t77;
    if ($[149] === Symbol.for("react.memo_cache_sentinel")) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                className: "w-5 h-5 text-white"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 928,
                columnNumber: 132
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 928,
            columnNumber: 11
        }, this);
        $[149] = t77;
    } else {
        t77 = $[149];
    }
    let t78;
    if ($[150] !== t) {
        t78 = t("usage.agentName");
        $[150] = t;
        $[151] = t78;
    } else {
        t78 = $[151];
    }
    let t79;
    if ($[152] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold text-gray-900",
            children: t78
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 943,
            columnNumber: 11
        }, this);
        $[152] = t78;
        $[153] = t79;
    } else {
        t79 = $[153];
    }
    let t80;
    if ($[154] !== t) {
        t80 = t("usage.agentStatus");
        $[154] = t;
        $[155] = t80;
    } else {
        t80 = $[155];
    }
    let t81;
    if ($[156] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400",
            children: t80
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 959,
            columnNumber: 11
        }, this);
        $[156] = t80;
        $[157] = t81;
    } else {
        t81 = $[157];
    }
    let t82;
    if ($[158] !== t79 || $[159] !== t81) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t79,
                t81
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 967,
            columnNumber: 11
        }, this);
        $[158] = t79;
        $[159] = t81;
        $[160] = t82;
    } else {
        t82 = $[160];
    }
    let t83;
    if ($[161] === Symbol.for("react.memo_cache_sentinel")) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 976,
            columnNumber: 11
        }, this);
        $[161] = t83;
    } else {
        t83 = $[161];
    }
    let t84;
    if ($[162] !== t) {
        t84 = t("usage.monitoring");
        $[162] = t;
        $[163] = t84;
    } else {
        t84 = $[163];
    }
    let t85;
    if ($[164] !== t84) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-auto flex items-center gap-2",
            children: [
                t83,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-400",
                    children: t84
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 991,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 991,
            columnNumber: 11
        }, this);
        $[164] = t84;
        $[165] = t85;
    } else {
        t85 = $[165];
    }
    let t86;
    if ($[166] !== t82 || $[167] !== t85) {
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-3",
            children: [
                t77,
                t82,
                t85
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 999,
            columnNumber: 11
        }, this);
        $[166] = t82;
        $[167] = t85;
        $[168] = t86;
    } else {
        t86 = $[168];
    }
    let t87;
    let t88;
    let t89;
    let t90;
    if ($[169] === Symbol.for("react.memo_cache_sentinel")) {
        t87 = {
            opacity: 0,
            y: 10
        };
        t88 = {
            opacity: 1,
            y: 0
        };
        t89 = {
            once: true
        };
        t90 = {
            delay: 0.2
        };
        $[169] = t87;
        $[170] = t88;
        $[171] = t89;
        $[172] = t90;
    } else {
        t87 = $[169];
        t88 = $[170];
        t89 = $[171];
        t90 = $[172];
    }
    let t91;
    if ($[173] === Symbol.for("react.memo_cache_sentinel")) {
        t91 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: "📊"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1037,
                columnNumber: 107
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1037,
            columnNumber: 11
        }, this);
        $[173] = t91;
    } else {
        t91 = $[173];
    }
    let t92;
    if ($[174] !== t) {
        t92 = t("usage.activity1Title");
        $[174] = t;
        $[175] = t92;
    } else {
        t92 = $[175];
    }
    let t93;
    if ($[176] !== t92) {
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-800 font-medium",
            children: t92
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1052,
            columnNumber: 11
        }, this);
        $[176] = t92;
        $[177] = t93;
    } else {
        t93 = $[177];
    }
    let t94;
    if ($[178] !== t) {
        t94 = t("usage.activity1Time");
        $[178] = t;
        $[179] = t94;
    } else {
        t94 = $[179];
    }
    let t95;
    if ($[180] !== t94) {
        t95 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-1",
            children: t94
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1068,
            columnNumber: 11
        }, this);
        $[180] = t94;
        $[181] = t95;
    } else {
        t95 = $[181];
    }
    let t96;
    if ($[182] !== t93 || $[183] !== t95) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t87,
            whileInView: t88,
            viewport: t89,
            transition: t90,
            className: "bg-white rounded-xl p-4 border border-gray-100 shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    t91,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            t93,
                            t95
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 1076,
                        columnNumber: 201
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1076,
                columnNumber: 156
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1076,
            columnNumber: 11
        }, this);
        $[182] = t93;
        $[183] = t95;
        $[184] = t96;
    } else {
        t96 = $[184];
    }
    let t100;
    let t97;
    let t98;
    let t99;
    if ($[185] === Symbol.for("react.memo_cache_sentinel")) {
        t97 = {
            opacity: 0,
            y: 10
        };
        t98 = {
            opacity: 1,
            y: 0
        };
        t99 = {
            once: true
        };
        t100 = {
            delay: 0.3
        };
        $[185] = t100;
        $[186] = t97;
        $[187] = t98;
        $[188] = t99;
    } else {
        t100 = $[185];
        t97 = $[186];
        t98 = $[187];
        t99 = $[188];
    }
    let t101;
    if ($[189] === Symbol.for("react.memo_cache_sentinel")) {
        t101 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: "🧠"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1114,
                columnNumber: 110
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1114,
            columnNumber: 12
        }, this);
        $[189] = t101;
    } else {
        t101 = $[189];
    }
    let t102;
    if ($[190] !== t) {
        t102 = t("usage.activity2Title");
        $[190] = t;
        $[191] = t102;
    } else {
        t102 = $[191];
    }
    let t103;
    if ($[192] !== t102) {
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-800 font-medium",
            children: t102
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1129,
            columnNumber: 12
        }, this);
        $[192] = t102;
        $[193] = t103;
    } else {
        t103 = $[193];
    }
    let t104;
    if ($[194] !== t) {
        t104 = t("usage.activity2Time");
        $[194] = t;
        $[195] = t104;
    } else {
        t104 = $[195];
    }
    let t105;
    if ($[196] !== t104) {
        t105 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-1",
            children: t104
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1145,
            columnNumber: 12
        }, this);
        $[196] = t104;
        $[197] = t105;
    } else {
        t105 = $[197];
    }
    let t106;
    if ($[198] !== t) {
        t106 = t("usage.withinLimit");
        $[198] = t;
        $[199] = t106;
    } else {
        t106 = $[199];
    }
    let t107;
    if ($[200] !== t106) {
        t107 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-2 py-1 bg-green-50 text-green-600 rounded",
            children: t106
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1161,
            columnNumber: 12
        }, this);
        $[200] = t106;
        $[201] = t107;
    } else {
        t107 = $[201];
    }
    let t108;
    if ($[202] !== t) {
        t108 = t("usage.dailyLimit");
        $[202] = t;
        $[203] = t108;
    } else {
        t108 = $[203];
    }
    let t109;
    if ($[204] !== t108) {
        t109 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-400",
            children: t108
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1177,
            columnNumber: 12
        }, this);
        $[204] = t108;
        $[205] = t109;
    } else {
        t109 = $[205];
    }
    let t110;
    if ($[206] !== t107 || $[207] !== t109) {
        t110 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex items-center gap-2",
            children: [
                t107,
                t109
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1185,
            columnNumber: 12
        }, this);
        $[206] = t107;
        $[207] = t109;
        $[208] = t110;
    } else {
        t110 = $[208];
    }
    let t111;
    if ($[209] !== t103 || $[210] !== t105 || $[211] !== t110) {
        t111 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t97,
            whileInView: t98,
            viewport: t99,
            transition: t100,
            className: "bg-white rounded-xl p-4 border border-gray-100 shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    t101,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            t103,
                            t105,
                            t110
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 1194,
                        columnNumber: 204
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1194,
                columnNumber: 158
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1194,
            columnNumber: 12
        }, this);
        $[209] = t103;
        $[210] = t105;
        $[211] = t110;
        $[212] = t111;
    } else {
        t111 = $[212];
    }
    let t112;
    let t113;
    let t114;
    let t115;
    if ($[213] === Symbol.for("react.memo_cache_sentinel")) {
        t112 = {
            opacity: 0,
            y: 10
        };
        t113 = {
            opacity: 1,
            y: 0
        };
        t114 = {
            once: true
        };
        t115 = {
            delay: 0.4
        };
        $[213] = t112;
        $[214] = t113;
        $[215] = t114;
        $[216] = t115;
    } else {
        t112 = $[213];
        t113 = $[214];
        t114 = $[215];
        t115 = $[216];
    }
    let t116;
    if ($[217] === Symbol.for("react.memo_cache_sentinel")) {
        t116 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: "⏳"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1233,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1233,
            columnNumber: 12
        }, this);
        $[217] = t116;
    } else {
        t116 = $[217];
    }
    let t117;
    if ($[218] !== t) {
        t117 = t("usage.activity3Title");
        $[218] = t;
        $[219] = t117;
    } else {
        t117 = $[219];
    }
    let t118;
    if ($[220] !== t117) {
        t118 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-800 font-medium",
            children: t117
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1248,
            columnNumber: 12
        }, this);
        $[220] = t117;
        $[221] = t118;
    } else {
        t118 = $[221];
    }
    let t119;
    if ($[222] !== t) {
        t119 = t("usage.activity3Time");
        $[222] = t;
        $[223] = t119;
    } else {
        t119 = $[223];
    }
    let t120;
    if ($[224] !== t119) {
        t120 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-1",
            children: t119
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1264,
            columnNumber: 12
        }, this);
        $[224] = t119;
        $[225] = t120;
    } else {
        t120 = $[225];
    }
    let t121;
    if ($[226] !== t) {
        t121 = t("usage.txDetail");
        $[226] = t;
        $[227] = t121;
    } else {
        t121 = $[227];
    }
    let t122;
    if ($[228] !== t121) {
        t122 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600",
            children: t121
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1280,
            columnNumber: 12
        }, this);
        $[228] = t121;
        $[229] = t122;
    } else {
        t122 = $[229];
    }
    let t123;
    if ($[230] !== t) {
        t123 = t("usage.txWarning");
        $[230] = t;
        $[231] = t123;
    } else {
        t123 = $[231];
    }
    let t124;
    if ($[232] !== t123) {
        t124 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-orange-600 mt-1",
            children: t123
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1296,
            columnNumber: 12
        }, this);
        $[232] = t123;
        $[233] = t124;
    } else {
        t124 = $[233];
    }
    let t125;
    if ($[234] !== t122 || $[235] !== t124) {
        t125 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 bg-white rounded-lg p-3 border border-orange-100",
            children: [
                t122,
                t124
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1304,
            columnNumber: 12
        }, this);
        $[234] = t122;
        $[235] = t124;
        $[236] = t125;
    } else {
        t125 = $[236];
    }
    let t126;
    if ($[237] !== t118 || $[238] !== t120 || $[239] !== t125) {
        t126 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t112,
            whileInView: t113,
            viewport: t114,
            transition: t115,
            className: "bg-orange-50 rounded-xl p-4 border border-orange-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    t116,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            t118,
                            t120,
                            t125
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 1313,
                        columnNumber: 203
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1313,
                columnNumber: 157
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1313,
            columnNumber: 12
        }, this);
        $[237] = t118;
        $[238] = t120;
        $[239] = t125;
        $[240] = t126;
    } else {
        t126 = $[240];
    }
    let t127;
    let t128;
    let t129;
    let t130;
    if ($[241] === Symbol.for("react.memo_cache_sentinel")) {
        t127 = {
            opacity: 0,
            y: 10
        };
        t128 = {
            opacity: 1,
            y: 0
        };
        t129 = {
            once: true
        };
        t130 = {
            delay: 0.5
        };
        $[241] = t127;
        $[242] = t128;
        $[243] = t129;
        $[244] = t130;
    } else {
        t127 = $[241];
        t128 = $[242];
        t129 = $[243];
        t130 = $[244];
    }
    let t131;
    if ($[245] === Symbol.for("react.memo_cache_sentinel")) {
        t131 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: "🌾"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1352,
                columnNumber: 109
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1352,
            columnNumber: 12
        }, this);
        $[245] = t131;
    } else {
        t131 = $[245];
    }
    let t132;
    if ($[246] !== t) {
        t132 = t("usage.activity4Title");
        $[246] = t;
        $[247] = t132;
    } else {
        t132 = $[247];
    }
    let t133;
    if ($[248] !== t132) {
        t133 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-800 font-medium",
            children: t132
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1367,
            columnNumber: 12
        }, this);
        $[248] = t132;
        $[249] = t133;
    } else {
        t133 = $[249];
    }
    let t134;
    if ($[250] !== t) {
        t134 = t("usage.activity4Time");
        $[250] = t;
        $[251] = t134;
    } else {
        t134 = $[251];
    }
    let t135;
    if ($[252] !== t134) {
        t135 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-1",
            children: t134
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1383,
            columnNumber: 12
        }, this);
        $[252] = t134;
        $[253] = t135;
    } else {
        t135 = $[253];
    }
    let t136;
    if ($[254] !== t) {
        t136 = t("usage.whitelistContract");
        $[254] = t;
        $[255] = t136;
    } else {
        t136 = $[255];
    }
    let t137;
    if ($[256] !== t136) {
        t137 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-2 py-1 bg-green-50 text-green-600 rounded",
            children: t136
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1399,
            columnNumber: 12
        }, this);
        $[256] = t136;
        $[257] = t137;
    } else {
        t137 = $[257];
    }
    let t138;
    if ($[258] === Symbol.for("react.memo_cache_sentinel")) {
        t138 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-400",
            children: "APY: 4.2%"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1407,
            columnNumber: 12
        }, this);
        $[258] = t138;
    } else {
        t138 = $[258];
    }
    let t139;
    if ($[259] !== t137) {
        t139 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex items-center gap-2",
            children: [
                t137,
                t138
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1414,
            columnNumber: 12
        }, this);
        $[259] = t137;
        $[260] = t139;
    } else {
        t139 = $[260];
    }
    let t140;
    if ($[261] !== t133 || $[262] !== t135 || $[263] !== t139) {
        t140 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t127,
            whileInView: t128,
            viewport: t129,
            transition: t130,
            className: "bg-white rounded-xl p-4 border border-gray-100 shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    t131,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            t133,
                            t135,
                            t139
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 1422,
                        columnNumber: 207
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1422,
                columnNumber: 161
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1422,
            columnNumber: 12
        }, this);
        $[261] = t133;
        $[262] = t135;
        $[263] = t139;
        $[264] = t140;
    } else {
        t140 = $[264];
    }
    let t141;
    let t142;
    let t143;
    let t144;
    if ($[265] === Symbol.for("react.memo_cache_sentinel")) {
        t141 = {
            opacity: 0,
            y: 10
        };
        t142 = {
            opacity: 1,
            y: 0
        };
        t143 = {
            once: true
        };
        t144 = {
            delay: 0.6
        };
        $[265] = t141;
        $[266] = t142;
        $[267] = t143;
        $[268] = t144;
    } else {
        t141 = $[265];
        t142 = $[266];
        t143 = $[267];
        t144 = $[268];
    }
    let t145;
    if ($[269] === Symbol.for("react.memo_cache_sentinel")) {
        t145 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: "🛡️"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1461,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1461,
            columnNumber: 12
        }, this);
        $[269] = t145;
    } else {
        t145 = $[269];
    }
    let t146;
    if ($[270] !== t) {
        t146 = t("usage.activity5Title");
        $[270] = t;
        $[271] = t146;
    } else {
        t146 = $[271];
    }
    let t147;
    if ($[272] !== t146) {
        t147 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-800 font-medium",
            children: t146
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1476,
            columnNumber: 12
        }, this);
        $[272] = t146;
        $[273] = t147;
    } else {
        t147 = $[273];
    }
    let t148;
    if ($[274] !== t) {
        t148 = t("usage.activity5Time");
        $[274] = t;
        $[275] = t148;
    } else {
        t148 = $[275];
    }
    let t149;
    if ($[276] !== t148) {
        t149 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-1",
            children: t148
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1492,
            columnNumber: 12
        }, this);
        $[276] = t148;
        $[277] = t149;
    } else {
        t149 = $[277];
    }
    let t150;
    if ($[278] !== t) {
        t150 = t("usage.unauthorizedRequest");
        $[278] = t;
        $[279] = t150;
    } else {
        t150 = $[279];
    }
    let t151;
    if ($[280] !== t150) {
        t151 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600",
            children: t150
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1508,
            columnNumber: 12
        }, this);
        $[280] = t150;
        $[281] = t151;
    } else {
        t151 = $[281];
    }
    let t152;
    if ($[282] !== t) {
        t152 = t("usage.blockedReason");
        $[282] = t;
        $[283] = t152;
    } else {
        t152 = $[283];
    }
    let t153;
    if ($[284] !== t152) {
        t153 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-600 mt-1",
            children: t152
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1524,
            columnNumber: 12
        }, this);
        $[284] = t152;
        $[285] = t153;
    } else {
        t153 = $[285];
    }
    let t154;
    if ($[286] !== t151 || $[287] !== t153) {
        t154 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 bg-white rounded-lg p-3 border border-red-100",
            children: [
                t151,
                t153
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1532,
            columnNumber: 12
        }, this);
        $[286] = t151;
        $[287] = t153;
        $[288] = t154;
    } else {
        t154 = $[288];
    }
    let t155;
    if ($[289] !== t147 || $[290] !== t149 || $[291] !== t154) {
        t155 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t141,
            whileInView: t142,
            viewport: t143,
            transition: t144,
            className: "bg-red-50 rounded-xl p-4 border border-red-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    t145,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            t147,
                            t149,
                            t154
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 1541,
                        columnNumber: 197
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1541,
                columnNumber: 151
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1541,
            columnNumber: 12
        }, this);
        $[289] = t147;
        $[290] = t149;
        $[291] = t154;
        $[292] = t155;
    } else {
        t155 = $[292];
    }
    let t156;
    if ($[293] !== t111 || $[294] !== t126 || $[295] !== t140 || $[296] !== t155 || $[297] !== t96) {
        t156 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-4 max-h-[500px] overflow-y-auto",
            children: [
                t96,
                t111,
                t126,
                t140,
                t155
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1551,
            columnNumber: 12
        }, this);
        $[293] = t111;
        $[294] = t126;
        $[295] = t140;
        $[296] = t155;
        $[297] = t96;
        $[298] = t156;
    } else {
        t156 = $[298];
    }
    let t157;
    if ($[299] !== t156 || $[300] !== t86) {
        t157 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t73,
            whileInView: t74,
            viewport: t75,
            transition: t76,
            className: "bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden shadow-xl",
            children: [
                t86,
                t156
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1563,
            columnNumber: 12
        }, this);
        $[299] = t156;
        $[300] = t86;
        $[301] = t157;
    } else {
        t157 = $[301];
    }
    let t158;
    let t159;
    let t160;
    let t161;
    if ($[302] === Symbol.for("react.memo_cache_sentinel")) {
        t158 = {
            opacity: 0,
            x: 30
        };
        t159 = {
            opacity: 1,
            x: 0
        };
        t160 = {
            once: true
        };
        t161 = {
            duration: 0.6,
            delay: 0.2
        };
        $[302] = t158;
        $[303] = t159;
        $[304] = t160;
        $[305] = t161;
    } else {
        t158 = $[302];
        t159 = $[303];
        t160 = $[304];
        t161 = $[305];
    }
    let t162;
    if ($[306] === Symbol.for("react.memo_cache_sentinel")) {
        t162 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
            className: "w-6 h-6 text-orange-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1602,
            columnNumber: 12
        }, this);
        $[306] = t162;
    } else {
        t162 = $[306];
    }
    let t163;
    if ($[307] !== t) {
        t163 = t("usage.securityConfig");
        $[307] = t;
        $[308] = t163;
    } else {
        t163 = $[308];
    }
    let t164;
    if ($[309] !== t163) {
        t164 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2",
            children: [
                t162,
                t163
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1617,
            columnNumber: 12
        }, this);
        $[309] = t163;
        $[310] = t164;
    } else {
        t164 = $[310];
    }
    let t165;
    if ($[311] === Symbol.for("react.memo_cache_sentinel")) {
        t165 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                className: "w-5 h-5 text-orange-500"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1625,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1625,
            columnNumber: 12
        }, this);
        $[311] = t165;
    } else {
        t165 = $[311];
    }
    let t166;
    if ($[312] !== t) {
        t166 = t("usage.dailyLimitTitle");
        $[312] = t;
        $[313] = t166;
    } else {
        t166 = $[313];
    }
    let t167;
    if ($[314] !== t166) {
        t167 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t166
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1640,
            columnNumber: 12
        }, this);
        $[314] = t166;
        $[315] = t167;
    } else {
        t167 = $[315];
    }
    let t168;
    if ($[316] !== t) {
        t168 = t("usage.dailyLimitDesc");
        $[316] = t;
        $[317] = t168;
    } else {
        t168 = $[317];
    }
    let t169;
    if ($[318] !== t168) {
        t169 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: t168
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1656,
            columnNumber: 12
        }, this);
        $[318] = t168;
        $[319] = t169;
    } else {
        t169 = $[319];
    }
    let t170;
    if ($[320] !== t167 || $[321] !== t169) {
        t170 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t165,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t167,
                        t169
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1664,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1664,
            columnNumber: 12
        }, this);
        $[320] = t167;
        $[321] = t169;
        $[322] = t170;
    } else {
        t170 = $[322];
    }
    let t171;
    if ($[323] === Symbol.for("react.memo_cache_sentinel")) {
        t171 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-semibold text-gray-900",
            children: "$1,000"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1673,
            columnNumber: 12
        }, this);
        $[323] = t171;
    } else {
        t171 = $[323];
    }
    let t172;
    if ($[324] !== t) {
        t172 = t("usage.enabled");
        $[324] = t;
        $[325] = t172;
    } else {
        t172 = $[325];
    }
    let t173;
    if ($[326] !== t172) {
        t173 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t171,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-green-600",
                    children: t172
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1688,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1688,
            columnNumber: 12
        }, this);
        $[326] = t172;
        $[327] = t173;
    } else {
        t173 = $[327];
    }
    let t174;
    if ($[328] !== t170 || $[329] !== t173) {
        t174 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-4 bg-gray-50 rounded-xl",
            children: [
                t170,
                t173
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1696,
            columnNumber: 12
        }, this);
        $[328] = t170;
        $[329] = t173;
        $[330] = t174;
    } else {
        t174 = $[330];
    }
    let t175;
    if ($[331] === Symbol.for("react.memo_cache_sentinel")) {
        t175 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                className: "w-5 h-5 text-blue-500"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1705,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1705,
            columnNumber: 12
        }, this);
        $[331] = t175;
    } else {
        t175 = $[331];
    }
    let t176;
    if ($[332] !== t) {
        t176 = t("usage.singleLimitTitle");
        $[332] = t;
        $[333] = t176;
    } else {
        t176 = $[333];
    }
    let t177;
    if ($[334] !== t176) {
        t177 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t176
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1720,
            columnNumber: 12
        }, this);
        $[334] = t176;
        $[335] = t177;
    } else {
        t177 = $[335];
    }
    let t178;
    if ($[336] !== t) {
        t178 = t("usage.singleLimitDesc");
        $[336] = t;
        $[337] = t178;
    } else {
        t178 = $[337];
    }
    let t179;
    if ($[338] !== t178) {
        t179 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: t178
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1736,
            columnNumber: 12
        }, this);
        $[338] = t178;
        $[339] = t179;
    } else {
        t179 = $[339];
    }
    let t180;
    if ($[340] !== t177 || $[341] !== t179) {
        t180 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t175,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t177,
                        t179
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1744,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1744,
            columnNumber: 12
        }, this);
        $[340] = t177;
        $[341] = t179;
        $[342] = t180;
    } else {
        t180 = $[342];
    }
    let t181;
    if ($[343] === Symbol.for("react.memo_cache_sentinel")) {
        t181 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-semibold text-gray-900",
            children: "$500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1753,
            columnNumber: 12
        }, this);
        $[343] = t181;
    } else {
        t181 = $[343];
    }
    let t182;
    if ($[344] !== t) {
        t182 = t("usage.enabled");
        $[344] = t;
        $[345] = t182;
    } else {
        t182 = $[345];
    }
    let t183;
    if ($[346] !== t182) {
        t183 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t181,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-green-600",
                    children: t182
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1768,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1768,
            columnNumber: 12
        }, this);
        $[346] = t182;
        $[347] = t183;
    } else {
        t183 = $[347];
    }
    let t184;
    if ($[348] !== t180 || $[349] !== t183) {
        t184 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-4 bg-gray-50 rounded-xl",
            children: [
                t180,
                t183
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1776,
            columnNumber: 12
        }, this);
        $[348] = t180;
        $[349] = t183;
        $[350] = t184;
    } else {
        t184 = $[350];
    }
    let t185;
    if ($[351] === Symbol.for("react.memo_cache_sentinel")) {
        t185 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "w-5 h-5 text-green-500"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1785,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1785,
            columnNumber: 12
        }, this);
        $[351] = t185;
    } else {
        t185 = $[351];
    }
    let t186;
    if ($[352] !== t) {
        t186 = t("usage.whitelistTitle");
        $[352] = t;
        $[353] = t186;
    } else {
        t186 = $[353];
    }
    let t187;
    if ($[354] !== t186) {
        t187 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t186
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1800,
            columnNumber: 12
        }, this);
        $[354] = t186;
        $[355] = t187;
    } else {
        t187 = $[355];
    }
    let t188;
    if ($[356] !== t) {
        t188 = t("usage.whitelistDesc");
        $[356] = t;
        $[357] = t188;
    } else {
        t188 = $[357];
    }
    let t189;
    if ($[358] !== t188) {
        t189 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: t188
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1816,
            columnNumber: 12
        }, this);
        $[358] = t188;
        $[359] = t189;
    } else {
        t189 = $[359];
    }
    let t190;
    if ($[360] !== t187 || $[361] !== t189) {
        t190 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t185,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t187,
                        t189
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1824,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1824,
            columnNumber: 12
        }, this);
        $[360] = t187;
        $[361] = t189;
        $[362] = t190;
    } else {
        t190 = $[362];
    }
    let t191;
    if ($[363] === Symbol.for("react.memo_cache_sentinel")) {
        t191 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-semibold text-gray-900",
            children: "12"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1833,
            columnNumber: 12
        }, this);
        $[363] = t191;
    } else {
        t191 = $[363];
    }
    let t192;
    if ($[364] !== t) {
        t192 = t("usage.enabled");
        $[364] = t;
        $[365] = t192;
    } else {
        t192 = $[365];
    }
    let t193;
    if ($[366] !== t192) {
        t193 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t191,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-green-600",
                    children: t192
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1848,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1848,
            columnNumber: 12
        }, this);
        $[366] = t192;
        $[367] = t193;
    } else {
        t193 = $[367];
    }
    let t194;
    if ($[368] !== t190 || $[369] !== t193) {
        t194 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-4 bg-gray-50 rounded-xl",
            children: [
                t190,
                t193
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1856,
            columnNumber: 12
        }, this);
        $[368] = t190;
        $[369] = t193;
        $[370] = t194;
    } else {
        t194 = $[370];
    }
    let t195;
    if ($[371] === Symbol.for("react.memo_cache_sentinel")) {
        t195 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                className: "w-5 h-5 text-purple-500"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1865,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1865,
            columnNumber: 12
        }, this);
        $[371] = t195;
    } else {
        t195 = $[371];
    }
    let t196;
    if ($[372] !== t) {
        t196 = t("usage.largeTxConfirm");
        $[372] = t;
        $[373] = t196;
    } else {
        t196 = $[373];
    }
    let t197;
    if ($[374] !== t196) {
        t197 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t196
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1880,
            columnNumber: 12
        }, this);
        $[374] = t196;
        $[375] = t197;
    } else {
        t197 = $[375];
    }
    let t198;
    if ($[376] !== t) {
        t198 = t("usage.largeTxConfirmDesc");
        $[376] = t;
        $[377] = t198;
    } else {
        t198 = $[377];
    }
    let t199;
    if ($[378] !== t198) {
        t199 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: t198
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1896,
            columnNumber: 12
        }, this);
        $[378] = t198;
        $[379] = t199;
    } else {
        t199 = $[379];
    }
    let t200;
    if ($[380] !== t197 || $[381] !== t199) {
        t200 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t195,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t197,
                        t199
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 1904,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1904,
            columnNumber: 12
        }, this);
        $[380] = t197;
        $[381] = t199;
        $[382] = t200;
    } else {
        t200 = $[382];
    }
    let t201;
    if ($[383] !== t) {
        t201 = t("usage.on");
        $[383] = t;
        $[384] = t201;
    } else {
        t201 = $[384];
    }
    let t202;
    if ($[385] !== t201) {
        t202 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-semibold text-gray-900",
            children: t201
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1921,
            columnNumber: 12
        }, this);
        $[385] = t201;
        $[386] = t202;
    } else {
        t202 = $[386];
    }
    let t203;
    if ($[387] !== t) {
        t203 = t("usage.enabled");
        $[387] = t;
        $[388] = t203;
    } else {
        t203 = $[388];
    }
    let t204;
    if ($[389] !== t203) {
        t204 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-green-600",
            children: t203
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1937,
            columnNumber: 12
        }, this);
        $[389] = t203;
        $[390] = t204;
    } else {
        t204 = $[390];
    }
    let t205;
    if ($[391] !== t202 || $[392] !== t204) {
        t205 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t202,
                t204
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1945,
            columnNumber: 12
        }, this);
        $[391] = t202;
        $[392] = t204;
        $[393] = t205;
    } else {
        t205 = $[393];
    }
    let t206;
    if ($[394] !== t200 || $[395] !== t205) {
        t206 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-4 bg-gray-50 rounded-xl",
            children: [
                t200,
                t205
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1954,
            columnNumber: 12
        }, this);
        $[394] = t200;
        $[395] = t205;
        $[396] = t206;
    } else {
        t206 = $[396];
    }
    let t207;
    if ($[397] !== t174 || $[398] !== t184 || $[399] !== t194 || $[400] !== t206) {
        t207 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t174,
                t184,
                t194,
                t206
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1963,
            columnNumber: 12
        }, this);
        $[397] = t174;
        $[398] = t184;
        $[399] = t194;
        $[400] = t206;
        $[401] = t207;
    } else {
        t207 = $[401];
    }
    let t208;
    if ($[402] !== t) {
        t208 = t("usage.securityTip");
        $[402] = t;
        $[403] = t208;
    } else {
        t208 = $[403];
    }
    let t209;
    if ($[404] !== t208) {
        t209 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold text-orange-600",
            children: t208
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1982,
            columnNumber: 12
        }, this);
        $[404] = t208;
        $[405] = t209;
    } else {
        t209 = $[405];
    }
    let t210;
    if ($[406] !== t) {
        t210 = t("usage.securityTipContent");
        $[406] = t;
        $[407] = t210;
    } else {
        t210 = $[407];
    }
    let t211;
    if ($[408] !== t209 || $[409] !== t210) {
        t211 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-700",
                children: [
                    t209,
                    t210
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 1998,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 1998,
            columnNumber: 12
        }, this);
        $[408] = t209;
        $[409] = t210;
        $[410] = t211;
    } else {
        t211 = $[410];
    }
    let t212;
    if ($[411] !== t164 || $[412] !== t207 || $[413] !== t211) {
        t212 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl border border-gray-200 p-6 shadow-lg",
            children: [
                t164,
                t207,
                t211
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2007,
            columnNumber: 12
        }, this);
        $[411] = t164;
        $[412] = t207;
        $[413] = t211;
        $[414] = t212;
    } else {
        t212 = $[414];
    }
    let t213;
    if ($[415] === Symbol.for("react.memo_cache_sentinel")) {
        t213 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-gray-900",
            children: "156"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2017,
            columnNumber: 12
        }, this);
        $[415] = t213;
    } else {
        t213 = $[415];
    }
    let t214;
    if ($[416] !== t) {
        t214 = t("usage.autoExecuted");
        $[416] = t;
        $[417] = t214;
    } else {
        t214 = $[417];
    }
    let t215;
    if ($[418] !== t214) {
        t215 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-4 border border-gray-100 text-center",
            children: [
                t213,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-500",
                    children: t214
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2032,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2032,
            columnNumber: 12
        }, this);
        $[418] = t214;
        $[419] = t215;
    } else {
        t215 = $[419];
    }
    let t216;
    if ($[420] === Symbol.for("react.memo_cache_sentinel")) {
        t216 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-orange-500",
            children: "3"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2040,
            columnNumber: 12
        }, this);
        $[420] = t216;
    } else {
        t216 = $[420];
    }
    let t217;
    if ($[421] !== t) {
        t217 = t("usage.pendingApproval");
        $[421] = t;
        $[422] = t217;
    } else {
        t217 = $[422];
    }
    let t218;
    if ($[423] !== t217) {
        t218 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-4 border border-gray-100 text-center",
            children: [
                t216,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-500",
                    children: t217
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2055,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2055,
            columnNumber: 12
        }, this);
        $[423] = t217;
        $[424] = t218;
    } else {
        t218 = $[424];
    }
    let t219;
    if ($[425] === Symbol.for("react.memo_cache_sentinel")) {
        t219 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-green-500",
            children: "0"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2063,
            columnNumber: 12
        }, this);
        $[425] = t219;
    } else {
        t219 = $[425];
    }
    let t220;
    if ($[426] !== t) {
        t220 = t("usage.securityBlocked");
        $[426] = t;
        $[427] = t220;
    } else {
        t220 = $[427];
    }
    let t221;
    if ($[428] !== t220) {
        t221 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-4 border border-gray-100 text-center",
            children: [
                t219,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-500",
                    children: t220
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2078,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2078,
            columnNumber: 12
        }, this);
        $[428] = t220;
        $[429] = t221;
    } else {
        t221 = $[429];
    }
    let t222;
    if ($[430] !== t215 || $[431] !== t218 || $[432] !== t221) {
        t222 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-4",
            children: [
                t215,
                t218,
                t221
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2086,
            columnNumber: 12
        }, this);
        $[430] = t215;
        $[431] = t218;
        $[432] = t221;
        $[433] = t222;
    } else {
        t222 = $[433];
    }
    let t223;
    if ($[434] !== t212 || $[435] !== t222) {
        t223 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t158,
            whileInView: t159,
            viewport: t160,
            transition: t161,
            className: "space-y-6",
            children: [
                t212,
                t222
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2096,
            columnNumber: 12
        }, this);
        $[434] = t212;
        $[435] = t222;
        $[436] = t223;
    } else {
        t223 = $[436];
    }
    let t224;
    if ($[437] !== t157 || $[438] !== t223) {
        t224 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid lg:grid-cols-2 gap-8",
            children: [
                t157,
                t223
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2105,
            columnNumber: 12
        }, this);
        $[437] = t157;
        $[438] = t223;
        $[439] = t224;
    } else {
        t224 = $[439];
    }
    let t225;
    if ($[440] !== t224 || $[441] !== t72) {
        t225 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-24 bg-white border-t border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [
                    t72,
                    t224
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 2114,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2114,
            columnNumber: 12
        }, this);
        $[440] = t224;
        $[441] = t72;
        $[442] = t225;
    } else {
        t225 = $[442];
    }
    let t226;
    let t227;
    let t228;
    if ($[443] === Symbol.for("react.memo_cache_sentinel")) {
        t226 = {
            opacity: 0,
            y: 30
        };
        t227 = {
            opacity: 1,
            y: 0
        };
        t228 = {
            once: true
        };
        $[443] = t226;
        $[444] = t227;
        $[445] = t228;
    } else {
        t226 = $[443];
        t227 = $[444];
        t228 = $[445];
    }
    let t229;
    if ($[446] === Symbol.for("react.memo_cache_sentinel")) {
        t229 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
            className: "w-4 h-4 text-orange-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2146,
            columnNumber: 12
        }, this);
        $[446] = t229;
    } else {
        t229 = $[446];
    }
    let t230;
    if ($[447] !== t) {
        t230 = t("security.badge");
        $[447] = t;
        $[448] = t230;
    } else {
        t230 = $[448];
    }
    let t231;
    if ($[449] !== t230) {
        t231 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6",
            children: [
                t229,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-orange-600 text-sm font-medium",
                    children: t230
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2161,
                    columnNumber: 134
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2161,
            columnNumber: 12
        }, this);
        $[449] = t230;
        $[450] = t231;
    } else {
        t231 = $[450];
    }
    let t232;
    if ($[451] !== t) {
        t232 = t("security.title");
        $[451] = t;
        $[452] = t232;
    } else {
        t232 = $[452];
    }
    let t233;
    if ($[453] !== t232) {
        t233 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4",
            children: t232
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2177,
            columnNumber: 12
        }, this);
        $[453] = t232;
        $[454] = t233;
    } else {
        t233 = $[454];
    }
    let t234;
    if ($[455] !== t) {
        t234 = t("security.subtitle");
        $[455] = t;
        $[456] = t234;
    } else {
        t234 = $[456];
    }
    let t235;
    if ($[457] !== t234) {
        t235 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 mb-8 leading-relaxed",
            children: t234
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2193,
            columnNumber: 12
        }, this);
        $[457] = t234;
        $[458] = t235;
    } else {
        t235 = $[458];
    }
    let t236;
    if ($[459] !== t) {
        t236 = detailedFeaturesKeys.map({
            "LandingPage[detailedFeaturesKeys.map()]": (feature_0, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        delay: 0.3 + index_0 * 0.1
                    },
                    className: "flex items-start gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature_0.icon, {
                                className: "w-5 h-5 text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/page.tsx",
                                lineNumber: 2212,
                                columnNumber: 177
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 2212,
                            columnNumber: 45
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gray-900 mb-1",
                                    children: t(feature_0.titleKey)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 2212,
                                    columnNumber: 242
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-sm",
                                    children: t(feature_0.descKey)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 2212,
                                    columnNumber: 319
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 2212,
                            columnNumber: 237
                        }, this)
                    ]
                }, feature_0.titleKey, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2202,
                    columnNumber: 74
                }, this)
        }["LandingPage[detailedFeaturesKeys.map()]"]);
        $[459] = t;
        $[460] = t236;
    } else {
        t236 = $[460];
    }
    let t237;
    if ($[461] !== t236) {
        t237 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: t236
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2221,
            columnNumber: 12
        }, this);
        $[461] = t236;
        $[462] = t237;
    } else {
        t237 = $[462];
    }
    let t238;
    if ($[463] !== t231 || $[464] !== t233 || $[465] !== t235 || $[466] !== t237) {
        t238 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t231,
                t233,
                t235,
                t237
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2229,
            columnNumber: 12
        }, this);
        $[463] = t231;
        $[464] = t233;
        $[465] = t235;
        $[466] = t237;
        $[467] = t238;
    } else {
        t238 = $[467];
    }
    let t239;
    let t240;
    let t241;
    let t242;
    if ($[468] === Symbol.for("react.memo_cache_sentinel")) {
        t239 = {
            scale: 0.8,
            opacity: 0
        };
        t240 = {
            scale: 1,
            opacity: 1
        };
        t241 = {
            once: true
        };
        t242 = {
            delay: 0.3
        };
        $[468] = t239;
        $[469] = t240;
        $[470] = t241;
        $[471] = t242;
    } else {
        t239 = $[468];
        t240 = $[469];
        t241 = $[470];
        t242 = $[471];
    }
    let t243;
    if ($[472] === Symbol.for("react.memo_cache_sentinel")) {
        t243 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                className: "w-16 h-16 text-orange-500"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 2269,
                columnNumber: 117
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2269,
            columnNumber: 12
        }, this);
        $[472] = t243;
    } else {
        t243 = $[472];
    }
    let t244;
    if ($[473] !== t) {
        t244 = t("security.teeEnv");
        $[473] = t;
        $[474] = t244;
    } else {
        t244 = $[474];
    }
    let t245;
    if ($[475] !== t244) {
        t245 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 font-semibold text-lg",
            children: t244
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2284,
            columnNumber: 12
        }, this);
        $[475] = t244;
        $[476] = t245;
    } else {
        t245 = $[476];
    }
    let t246;
    if ($[477] !== t) {
        t246 = t("security.hardwareLevel");
        $[477] = t;
        $[478] = t246;
    } else {
        t246 = $[478];
    }
    let t247;
    if ($[479] !== t246) {
        t247 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm mt-2",
            children: t246
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2300,
            columnNumber: 12
        }, this);
        $[479] = t246;
        $[480] = t247;
    } else {
        t247 = $[480];
    }
    let t248;
    if ($[481] !== t245 || $[482] !== t247) {
        t248 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-square bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 rounded-3xl flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t239,
                    whileInView: t240,
                    viewport: t241,
                    transition: t242,
                    className: "text-center",
                    children: [
                        t243,
                        t245,
                        t247
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2308,
                    columnNumber: 175
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 2308,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2308,
            columnNumber: 12
        }, this);
        $[481] = t245;
        $[482] = t247;
        $[483] = t248;
    } else {
        t248 = $[483];
    }
    let t249;
    if ($[484] !== t238 || $[485] !== t248) {
        t249 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "features",
            className: "py-24 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t226,
                    whileInView: t227,
                    viewport: t228,
                    className: "bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-12 items-center",
                        children: [
                            t238,
                            t248
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 2317,
                        columnNumber: 244
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2317,
                    columnNumber: 104
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 2317,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2317,
            columnNumber: 12
        }, this);
        $[484] = t238;
        $[485] = t248;
        $[486] = t249;
    } else {
        t249 = $[486];
    }
    let t250;
    let t251;
    let t252;
    let t253;
    if ($[487] === Symbol.for("react.memo_cache_sentinel")) {
        t250 = {
            opacity: 0,
            y: 20
        };
        t251 = {
            opacity: 1,
            y: 0
        };
        t252 = {
            once: true
        };
        t253 = {
            duration: 0.6
        };
        $[487] = t250;
        $[488] = t251;
        $[489] = t252;
        $[490] = t253;
    } else {
        t250 = $[487];
        t251 = $[488];
        t252 = $[489];
        t253 = $[490];
    }
    let t254;
    if ($[491] === Symbol.for("react.memo_cache_sentinel")) {
        t254 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-4 h-px bg-orange-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2355,
            columnNumber: 12
        }, this);
        $[491] = t254;
    } else {
        t254 = $[491];
    }
    let t255;
    if ($[492] !== t) {
        t255 = t("agentRoles.badge");
        $[492] = t;
        $[493] = t255;
    } else {
        t255 = $[493];
    }
    let t256;
    if ($[494] === Symbol.for("react.memo_cache_sentinel")) {
        t256 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-4 h-px bg-orange-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2370,
            columnNumber: 12
        }, this);
        $[494] = t256;
    } else {
        t256 = $[494];
    }
    let t257;
    if ($[495] !== t255) {
        t257 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-orange-500 mb-5",
            children: [
                t254,
                t255,
                t256
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2377,
            columnNumber: 12
        }, this);
        $[495] = t255;
        $[496] = t257;
    } else {
        t257 = $[496];
    }
    let t258;
    if ($[497] !== t) {
        t258 = t("agentRoles.title");
        $[497] = t;
        $[498] = t258;
    } else {
        t258 = $[498];
    }
    let t259;
    if ($[499] !== t258) {
        t259 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
            children: t258
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2393,
            columnNumber: 12
        }, this);
        $[499] = t258;
        $[500] = t259;
    } else {
        t259 = $[500];
    }
    let t260;
    if ($[501] !== t) {
        t260 = t("agentRoles.subtitle");
        $[501] = t;
        $[502] = t260;
    } else {
        t260 = $[502];
    }
    let t261;
    if ($[503] !== t260) {
        t261 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-base text-gray-500 leading-relaxed max-w-2xl mx-auto",
            children: t260
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2409,
            columnNumber: 12
        }, this);
        $[503] = t260;
        $[504] = t261;
    } else {
        t261 = $[504];
    }
    let t262;
    if ($[505] !== t257 || $[506] !== t259 || $[507] !== t261) {
        t262 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center mb-16",
            initial: t250,
            whileInView: t251,
            viewport: t252,
            transition: t253,
            children: [
                t257,
                t259,
                t261
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2417,
            columnNumber: 12
        }, this);
        $[505] = t257;
        $[506] = t259;
        $[507] = t261;
        $[508] = t262;
    } else {
        t262 = $[508];
    }
    let t263;
    if ($[509] !== t) {
        t263 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: [
                {
                    icon: "\uD83D\uDCC8",
                    title: t("agentRoles.role1Title"),
                    desc: t("agentRoles.role1Desc"),
                    tags: [
                        t("agentRoles.role1Tag1"),
                        t("agentRoles.role1Tag2"),
                        t("agentRoles.role1Tag3")
                    ]
                },
                {
                    icon: "\uD83D\uDCBC",
                    title: t("agentRoles.role2Title"),
                    desc: t("agentRoles.role2Desc"),
                    tags: [
                        t("agentRoles.role2Tag1"),
                        t("agentRoles.role2Tag2"),
                        t("agentRoles.role2Tag3")
                    ]
                },
                {
                    icon: "\uD83D\uDEE1\uFE0F",
                    title: t("agentRoles.role3Title"),
                    desc: t("agentRoles.role3Desc"),
                    tags: [
                        t("agentRoles.role3Tag1"),
                        t("agentRoles.role3Tag2"),
                        t("agentRoles.role3Tag3")
                    ]
                },
                {
                    icon: "\uD83D\uDCCA",
                    title: t("agentRoles.role4Title"),
                    desc: t("agentRoles.role4Desc"),
                    tags: [
                        t("agentRoles.role4Tag1"),
                        t("agentRoles.role4Tag2"),
                        t("agentRoles.role4Tag3")
                    ]
                },
                {
                    icon: "\uD83E\uDD1D",
                    title: t("agentRoles.role5Title"),
                    desc: t("agentRoles.role5Desc"),
                    tags: [
                        t("agentRoles.role5Tag1"),
                        t("agentRoles.role5Tag2"),
                        t("agentRoles.role5Tag3")
                    ]
                },
                {
                    icon: "\uD83D\uDD0D",
                    title: t("agentRoles.role6Title"),
                    desc: t("agentRoles.role6Desc"),
                    tags: [
                        t("agentRoles.role6Tag1"),
                        t("agentRoles.role6Tag2"),
                        t("agentRoles.role6Tag3")
                    ]
                }
            ].map(_LandingPageAnonymous2)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2427,
            columnNumber: 12
        }, this);
        $[509] = t;
        $[510] = t263;
    } else {
        t263 = $[510];
    }
    let t264;
    if ($[511] !== t262 || $[512] !== t263) {
        t264 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-24 bg-white border-t border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [
                    t262,
                    t263
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 2465,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2465,
            columnNumber: 12
        }, this);
        $[511] = t262;
        $[512] = t263;
        $[513] = t264;
    } else {
        t264 = $[513];
    }
    let t265;
    if ($[514] !== t) {
        t265 = t("testimonials.badge");
        $[514] = t;
        $[515] = t265;
    } else {
        t265 = $[515];
    }
    let t266;
    if ($[516] !== t265) {
        t266 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-orange-500 text-sm font-semibold uppercase tracking-wider",
            children: t265
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2482,
            columnNumber: 12
        }, this);
        $[516] = t265;
        $[517] = t266;
    } else {
        t266 = $[517];
    }
    let t267;
    if ($[518] !== t) {
        t267 = t("testimonials.title");
        $[518] = t;
        $[519] = t267;
    } else {
        t267 = $[519];
    }
    let t268;
    if ($[520] !== t267) {
        t268 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4",
            children: t267
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2498,
            columnNumber: 12
        }, this);
        $[520] = t267;
        $[521] = t268;
    } else {
        t268 = $[521];
    }
    let t269;
    if ($[522] !== t) {
        t269 = t("testimonials.subtitle");
        $[522] = t;
        $[523] = t269;
    } else {
        t269 = $[523];
    }
    let t270;
    if ($[524] !== t269) {
        t270 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-lg max-w-xl mx-auto",
            children: t269
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2514,
            columnNumber: 12
        }, this);
        $[524] = t269;
        $[525] = t270;
    } else {
        t270 = $[525];
    }
    let t271;
    if ($[526] !== t266 || $[527] !== t268 || $[528] !== t270) {
        t271 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                t266,
                t268,
                t270
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2522,
            columnNumber: 12
        }, this);
        $[526] = t266;
        $[527] = t268;
        $[528] = t270;
        $[529] = t271;
    } else {
        t271 = $[529];
    }
    let t272;
    if ($[530] !== currentLang) {
        t272 = testimonials.map({
            "LandingPage[testimonials.map()]": (testimonial, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        delay: index_1 * 0.15,
                        duration: 0.5
                    },
                    className: "group bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-0.5 mb-6",
                            children: [
                                ...Array(testimonial.rating)
                            ].map(_LandingPageTestimonialsMapAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 2544,
                            columnNumber: 144
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 leading-relaxed mb-8 min-h-[80px]",
                            children: [
                                '"',
                                currentLang === "zh" ? testimonial.content : testimonial.contentEn,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 2544,
                            columnNumber: 259
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 pt-6 border-t border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-xl",
                                    children: testimonial.avatar
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 2544,
                                    columnNumber: 467
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-gray-900",
                                            children: currentLang === "zh" ? testimonial.name : testimonial.nameEn
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 2544,
                                            columnNumber: 627
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: [
                                                currentLang === "zh" ? testimonial.role : testimonial.roleEn,
                                                " · ",
                                                testimonial.company
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/page.tsx",
                                            lineNumber: 2544,
                                            columnNumber: 736
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/page.tsx",
                                    lineNumber: 2544,
                                    columnNumber: 622
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 2544,
                            columnNumber: 396
                        }, this)
                    ]
                }, testimonial.name, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2533,
                    columnNumber: 68
                }, this)
        }["LandingPage[testimonials.map()]"]);
        $[530] = currentLang;
        $[531] = t272;
    } else {
        t272 = $[531];
    }
    let t273;
    if ($[532] !== t272) {
        t273 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-3 gap-8",
            children: t272
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2553,
            columnNumber: 12
        }, this);
        $[532] = t272;
        $[533] = t273;
    } else {
        t273 = $[533];
    }
    let t274;
    if ($[534] !== t271 || $[535] !== t273) {
        t274 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "testimonials",
            className: "py-24 bg-white border-t border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [
                    t271,
                    t273
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 2561,
                columnNumber: 91
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2561,
            columnNumber: 12
        }, this);
        $[534] = t271;
        $[535] = t273;
        $[536] = t274;
    } else {
        t274 = $[536];
    }
    let t275;
    if ($[537] !== t) {
        t275 = t("faq.title");
        $[537] = t;
        $[538] = t275;
    } else {
        t275 = $[538];
    }
    let t276;
    if ($[539] !== t275) {
        t276 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-orange-500 text-sm font-semibold uppercase tracking-wider",
            children: t275
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2578,
            columnNumber: 12
        }, this);
        $[539] = t275;
        $[540] = t276;
    } else {
        t276 = $[540];
    }
    let t277;
    if ($[541] !== t) {
        t277 = t("faq.title");
        $[541] = t;
        $[542] = t277;
    } else {
        t277 = $[542];
    }
    let t278;
    if ($[543] !== t277) {
        t278 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4",
            children: t277
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2594,
            columnNumber: 12
        }, this);
        $[543] = t277;
        $[544] = t278;
    } else {
        t278 = $[544];
    }
    let t279;
    if ($[545] !== t) {
        t279 = t("faq.subtitle");
        $[545] = t;
        $[546] = t279;
    } else {
        t279 = $[546];
    }
    let t280;
    if ($[547] !== t279) {
        t280 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-lg",
            children: t279
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2610,
            columnNumber: 12
        }, this);
        $[547] = t279;
        $[548] = t280;
    } else {
        t280 = $[548];
    }
    let t281;
    if ($[549] !== t276 || $[550] !== t278 || $[551] !== t280) {
        t281 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                t276,
                t278,
                t280
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2618,
            columnNumber: 12
        }, this);
        $[549] = t276;
        $[550] = t278;
        $[551] = t280;
        $[552] = t281;
    } else {
        t281 = $[552];
    }
    let t282;
    if ($[553] !== t) {
        t282 = faqKeys.map({
            "LandingPage[faqKeys.map()]": (faq, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        delay: index_2 * 0.1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQItem, {
                        question: t(faq.qKey),
                        answer: t(faq.aKey)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 2639,
                        columnNumber: 10
                    }, this)
                }, index_2, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2629,
                    columnNumber: 55
                }, this)
        }["LandingPage[faqKeys.map()]"]);
        $[553] = t;
        $[554] = t282;
    } else {
        t282 = $[554];
    }
    let t283;
    if ($[555] !== t282) {
        t283 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: t282
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2648,
            columnNumber: 12
        }, this);
        $[555] = t282;
        $[556] = t283;
    } else {
        t283 = $[556];
    }
    let t284;
    let t285;
    let t286;
    if ($[557] === Symbol.for("react.memo_cache_sentinel")) {
        t284 = {
            opacity: 0,
            y: 20
        };
        t285 = {
            opacity: 1,
            y: 0
        };
        t286 = {
            once: true
        };
        $[557] = t284;
        $[558] = t285;
        $[559] = t286;
    } else {
        t284 = $[557];
        t285 = $[558];
        t286 = $[559];
    }
    let t287;
    if ($[560] !== t) {
        t287 = t("faq.moreQuestions");
        $[560] = t;
        $[561] = t287;
    } else {
        t287 = $[561];
    }
    let t288;
    if ($[562] !== t287) {
        t288 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 mb-4",
            children: t287
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2687,
            columnNumber: 12
        }, this);
        $[562] = t287;
        $[563] = t288;
    } else {
        t288 = $[563];
    }
    let t289;
    if ($[564] !== t) {
        t289 = t("faq.contactUs");
        $[564] = t;
        $[565] = t289;
    } else {
        t289 = $[565];
    }
    let t290;
    if ($[566] === Symbol.for("react.memo_cache_sentinel")) {
        t290 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2703,
            columnNumber: 12
        }, this);
        $[566] = t290;
    } else {
        t290 = $[566];
    }
    let t291;
    if ($[567] !== t289) {
        t291 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "mailto:support@clawwallet.io",
            className: "inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium",
            children: [
                t289,
                t290
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2710,
            columnNumber: 12
        }, this);
        $[567] = t289;
        $[568] = t291;
    } else {
        t291 = $[568];
    }
    let t292;
    if ($[569] !== t288 || $[570] !== t291) {
        t292 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t284,
            whileInView: t285,
            viewport: t286,
            className: "mt-12 text-center",
            children: [
                t288,
                t291
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2718,
            columnNumber: 12
        }, this);
        $[569] = t288;
        $[570] = t291;
        $[571] = t292;
    } else {
        t292 = $[571];
    }
    let t293;
    if ($[572] !== t281 || $[573] !== t283 || $[574] !== t292) {
        t293 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faq",
            className: "py-24 bg-gray-50 border-t border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto px-6",
                children: [
                    t281,
                    t283,
                    t292
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 2727,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2727,
            columnNumber: 12
        }, this);
        $[572] = t281;
        $[573] = t283;
        $[574] = t292;
        $[575] = t293;
    } else {
        t293 = $[575];
    }
    let t294;
    let t295;
    let t296;
    let t297;
    if ($[576] === Symbol.for("react.memo_cache_sentinel")) {
        t294 = {
            opacity: 0,
            y: 30
        };
        t295 = {
            opacity: 1,
            y: 0
        };
        t296 = {
            once: true
        };
        t297 = {
            duration: 0.5
        };
        $[576] = t294;
        $[577] = t295;
        $[578] = t296;
        $[579] = t297;
    } else {
        t294 = $[576];
        t295 = $[577];
        t296 = $[578];
        t297 = $[579];
    }
    let t298;
    let t299;
    let t300;
    if ($[580] === Symbol.for("react.memo_cache_sentinel")) {
        t298 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2768,
            columnNumber: 12
        }, this);
        t299 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-24 -right-24 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-50"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2769,
            columnNumber: 12
        }, this);
        t300 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-24 -left-24 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-50"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2770,
            columnNumber: 12
        }, this);
        $[580] = t298;
        $[581] = t299;
        $[582] = t300;
    } else {
        t298 = $[580];
        t299 = $[581];
        t300 = $[582];
    }
    let t301;
    let t302;
    let t303;
    let t304;
    if ($[583] === Symbol.for("react.memo_cache_sentinel")) {
        t301 = {
            scale: 0
        };
        t302 = {
            scale: 1
        };
        t303 = {
            once: true
        };
        t304 = {
            delay: 0.2,
            type: "spring"
        };
        $[583] = t301;
        $[584] = t302;
        $[585] = t303;
        $[586] = t304;
    } else {
        t301 = $[583];
        t302 = $[584];
        t303 = $[585];
        t304 = $[586];
    }
    let t305;
    if ($[587] === Symbol.for("react.memo_cache_sentinel")) {
        t305 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t301,
            whileInView: t302,
            viewport: t303,
            transition: t304,
            className: "w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: "w-10 h-10 text-white"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 2809,
                columnNumber: 251
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2809,
            columnNumber: 12
        }, this);
        $[587] = t305;
    } else {
        t305 = $[587];
    }
    let t306;
    if ($[588] !== t) {
        t306 = t("cta.readyTitle");
        $[588] = t;
        $[589] = t306;
    } else {
        t306 = $[589];
    }
    let t307;
    if ($[590] !== t306) {
        t307 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
            children: t306
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2824,
            columnNumber: 12
        }, this);
        $[590] = t306;
        $[591] = t307;
    } else {
        t307 = $[591];
    }
    let t308;
    if ($[592] !== t) {
        t308 = t("cta.readySubtitle");
        $[592] = t;
        $[593] = t308;
    } else {
        t308 = $[593];
    }
    let t309;
    if ($[594] !== t308) {
        t309 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-lg mb-10 max-w-lg mx-auto",
            children: t308
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2840,
            columnNumber: 12
        }, this);
        $[594] = t308;
        $[595] = t309;
    } else {
        t309 = $[595];
    }
    let t310;
    if ($[596] === Symbol.for("react.memo_cache_sentinel")) {
        t310 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "text-sm text-gray-300 font-mono px-4 py-2",
            children: installCommand
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2848,
            columnNumber: 12
        }, this);
        $[596] = t310;
    } else {
        t310 = $[596];
    }
    const t311 = `flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${copied ? "bg-green-500 text-white" : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"}`;
    let t312;
    if ($[597] !== copied || $[598] !== t) {
        t312 = copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2856,
                    columnNumber: 23
                }, this),
                t("cta.copied")
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2856,
                    columnNumber: 77
                }, this),
                t("cta.copyCommand")
            ]
        }, void 0, true);
        $[597] = copied;
        $[598] = t;
        $[599] = t312;
    } else {
        t312 = $[599];
    }
    let t313;
    if ($[600] !== t311 || $[601] !== t312) {
        t313 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex flex-col sm:flex-row items-center gap-3 p-2 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl mb-8",
            children: [
                t310,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCopy,
                    className: t311,
                    children: t312
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2865,
                    columnNumber: 154
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2865,
            columnNumber: 12
        }, this);
        $[600] = t311;
        $[601] = t312;
        $[602] = t313;
    } else {
        t313 = $[602];
    }
    let t314;
    if ($[603] === Symbol.for("react.memo_cache_sentinel")) {
        t314 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "w-4 h-4 text-green-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2874,
            columnNumber: 12
        }, this);
        $[603] = t314;
    } else {
        t314 = $[603];
    }
    let t315;
    if ($[604] !== t) {
        t315 = t("cta.feature1");
        $[604] = t;
        $[605] = t315;
    } else {
        t315 = $[605];
    }
    let t316;
    if ($[606] !== t315) {
        t316 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2",
            children: [
                t314,
                t315
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2889,
            columnNumber: 12
        }, this);
        $[606] = t315;
        $[607] = t316;
    } else {
        t316 = $[607];
    }
    let t317;
    if ($[608] === Symbol.for("react.memo_cache_sentinel")) {
        t317 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "w-4 h-4 text-green-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2897,
            columnNumber: 12
        }, this);
        $[608] = t317;
    } else {
        t317 = $[608];
    }
    let t318;
    if ($[609] !== t) {
        t318 = t("cta.feature2");
        $[609] = t;
        $[610] = t318;
    } else {
        t318 = $[610];
    }
    let t319;
    if ($[611] !== t318) {
        t319 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2",
            children: [
                t317,
                t318
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2912,
            columnNumber: 12
        }, this);
        $[611] = t318;
        $[612] = t319;
    } else {
        t319 = $[612];
    }
    let t320;
    if ($[613] === Symbol.for("react.memo_cache_sentinel")) {
        t320 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "w-4 h-4 text-green-500"
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2920,
            columnNumber: 12
        }, this);
        $[613] = t320;
    } else {
        t320 = $[613];
    }
    let t321;
    if ($[614] !== t) {
        t321 = t("cta.feature3");
        $[614] = t;
        $[615] = t321;
    } else {
        t321 = $[615];
    }
    let t322;
    if ($[616] !== t321) {
        t322 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-2",
            children: [
                t320,
                t321
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2935,
            columnNumber: 12
        }, this);
        $[616] = t321;
        $[617] = t322;
    } else {
        t322 = $[617];
    }
    let t323;
    if ($[618] !== t316 || $[619] !== t319 || $[620] !== t322) {
        t323 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-6 text-sm text-gray-400",
            children: [
                t316,
                t319,
                t322
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2943,
            columnNumber: 12
        }, this);
        $[618] = t316;
        $[619] = t319;
        $[620] = t322;
        $[621] = t323;
    } else {
        t323 = $[621];
    }
    let t324;
    if ($[622] !== t307 || $[623] !== t309 || $[624] !== t313 || $[625] !== t323) {
        t324 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "install",
            className: "py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t294,
                    whileInView: t295,
                    viewport: t296,
                    transition: t297,
                    className: "relative bg-white rounded-3xl p-10 md:p-16 border border-gray-100 shadow-2xl overflow-hidden",
                    children: [
                        t298,
                        t299,
                        t300,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                t305,
                                t307,
                                t309,
                                t313,
                                t323
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 2953,
                            columnNumber: 371
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2953,
                    columnNumber: 168
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 2953,
                columnNumber: 116
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2953,
            columnNumber: 12
        }, this);
        $[622] = t307;
        $[623] = t309;
        $[624] = t313;
        $[625] = t323;
        $[626] = t324;
    } else {
        t324 = $[626];
    }
    let t325;
    if ($[627] === Symbol.for("react.memo_cache_sentinel")) {
        t325 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 rounded-md overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/claw.png",
                        alt: "ClawWallet",
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/page.tsx",
                        lineNumber: 2964,
                        columnNumber: 105
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2964,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-600 text-sm",
                    children: "Claw Wallet"
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2964,
                    columnNumber: 190
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2964,
            columnNumber: 12
        }, this);
        $[627] = t325;
    } else {
        t325 = $[627];
    }
    let t326;
    if ($[628] !== t) {
        t326 = t("footer.copyright");
        $[628] = t;
        $[629] = t326;
    } else {
        t326 = $[629];
    }
    let t327;
    if ($[630] !== t326) {
        t327 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "py-8 border-t border-gray-100 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-4",
                    children: [
                        t325,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-xs",
                            children: t326
                        }, void 0, false, {
                            fileName: "[project]/src/app/landingpage/page.tsx",
                            lineNumber: 2979,
                            columnNumber: 195
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landingpage/page.tsx",
                    lineNumber: 2979,
                    columnNumber: 111
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 2979,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2979,
            columnNumber: 12
        }, this);
        $[630] = t326;
        $[631] = t327;
    } else {
        t327 = $[631];
    }
    let t328;
    if ($[632] !== t22 || $[633] !== t225 || $[634] !== t249 || $[635] !== t264 || $[636] !== t274 || $[637] !== t293 || $[638] !== t324 || $[639] !== t327 || $[640] !== t66) {
        t328 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#fafafa]",
            children: [
                t22,
                t66,
                t225,
                t249,
                t264,
                t274,
                t293,
                t324,
                t327
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 2987,
            columnNumber: 12
        }, this);
        $[632] = t22;
        $[633] = t225;
        $[634] = t249;
        $[635] = t264;
        $[636] = t274;
        $[637] = t293;
        $[638] = t324;
        $[639] = t327;
        $[640] = t66;
        $[641] = t328;
    } else {
        t328 = $[641];
    }
    return t328;
}
_s1(LandingPage, "kb1KB3aUBj2xWItJ97LUBTlj0SY=");
_c1 = LandingPage;
function _LandingPageTestimonialsMapAnonymous(_, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
        className: "w-4 h-4 fill-orange-400 text-orange-400"
    }, i_1, false, {
        fileName: "[project]/src/app/landingpage/page.tsx",
        lineNumber: 3004,
        columnNumber: 10
    }, this);
}
function _LandingPageAnonymous2(role, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "group bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-orange-200 transition-all duration-300 hover:bg-white hover:shadow-lg",
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.4,
            delay: idx * 0.1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl mb-4",
                children: role.icon
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 3018,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold mb-2 text-gray-900",
                children: role.title
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 3018,
                columnNumber: 54
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 leading-relaxed mb-4",
                children: role.desc
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 3018,
                columnNumber: 124
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: role.tags.map(_LandingPageAnonymousRoleTagsMap)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 3018,
                columnNumber: 197
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/landingpage/page.tsx",
        lineNumber: 3007,
        columnNumber: 10
    }, this);
}
function _LandingPageAnonymousRoleTagsMap(tag, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-2 py-1 rounded bg-gray-100 text-[10px] text-gray-500 border border-gray-200",
        children: tag
    }, i_0, false, {
        fileName: "[project]/src/app/landingpage/page.tsx",
        lineNumber: 3021,
        columnNumber: 10
    }, this);
}
function _LandingPagePartnersMap(partner, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: 0.5 + index * 0.1
        },
        className: "group flex flex-col items-center gap-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: partner.logoPath,
                alt: partner.name,
                className: "w-full h-full object-contain"
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/page.tsx",
                lineNumber: 3032,
                columnNumber: 181
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landingpage/page.tsx",
            lineNumber: 3032,
            columnNumber: 57
        }, this)
    }, partner.name, false, {
        fileName: "[project]/src/app/landingpage/page.tsx",
        lineNumber: 3024,
        columnNumber: 10
    }, this);
}
function _LandingPageAnonymous(feature, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg",
        children: feature
    }, i, false, {
        fileName: "[project]/src/app/landingpage/page.tsx",
        lineNumber: 3035,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "FAQItem");
__turbopack_context__.k.register(_c1, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_landingpage_1152b1bf._.js.map