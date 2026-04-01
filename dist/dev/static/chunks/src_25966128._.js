(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// i18n translations for ClawWallet
// Supported languages: zh, en
// Simplified for better user understanding - CoinFello style
__turbopack_context__.s([
    "languages",
    ()=>languages,
    "t",
    ()=>t,
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
            zh: '功能',
            en: 'Features'
        },
        howItWorks: {
            zh: '流程',
            en: 'How It Works'
        },
        security: {
            zh: '安全',
            en: 'Security'
        },
        login: {
            zh: '登录',
            en: 'Login'
        },
        createWallet: {
            zh: '免费创建',
            en: 'Create Free'
        }
    },
    // Hero Section - Simple & Clear
    hero: {
        title: {
            zh: '让AI Agent\n<span class="text-primary">拥有安全钱包</span>',
            en: 'Let AI Agent\n<span class="text-primary">Have a Secure Wallet</span>'
        },
        subtitle: {
            zh: 'Claw Wallet 是为 AI Agent 构建的 Web3 安全钱包，采用 TEE 硬件加密分片架构。通过自然语言对话，让 AI 安全地管理加密资产。',
            en: 'Claw Wallet is a Web3 secure wallet built for AI Agents, using TEE hardware-encrypted sharding architecture. Through natural language dialogue, let AI securely manage crypto assets.'
        },
        copyHint: {
            zh: '复制命令，发送给你的 OpenClaw Agent',
            en: 'Copy the command and send to your OpenClaw Agent'
        },
        command: {
            zh: 'Read https://clawwallet.cc/clawwallet.md &setup',
            en: 'Read https://clawwallet.cc/clawwallet.md &setup'
        },
        copyBtn: {
            zh: '复制',
            en: 'Copy'
        },
        copied: {
            zh: '已复制',
            en: 'Copied'
        }
    },
    // Trust Indicators
    trust: {
        selfCustody: {
            zh: '自托管',
            en: 'Self-custody'
        },
        teeEncryption: {
            zh: 'TEE 加密',
            en: 'TEE Encryption'
        },
        aiSecurity: {
            zh: 'AI 安全风控',
            en: 'AI Security Risk Control'
        },
        naturalLanguage: {
            zh: '自然语言交互',
            en: 'Natural Language Interaction'
        }
    },
    // Who is it for
    whoFor: {
        openClawUsers: {
            zh: 'OpenClaw用户',
            en: 'OpenClaw Users'
        },
        aiAgent: {
            zh: 'AI Agent',
            en: 'AI Agent'
        },
        web3NewUsers: {
            zh: 'Web3新用户',
            en: 'Web3 New Users'
        },
        cryptoInvestors: {
            zh: '加密投资者',
            en: 'Crypto Investors'
        },
        defiUsers: {
            zh: 'DeFi用户',
            en: 'DeFi Users'
        },
        traders: {
            zh: '交易员',
            en: 'Traders'
        },
        aiTeams: {
            zh: 'AI团队',
            en: 'AI Teams'
        },
        blockchainDevelopers: {
            zh: '区块链开发者',
            en: 'Blockchain Developers'
        },
        institutionalUsers: {
            zh: '机构用户',
            en: 'Institutional Users'
        },
        crossBorderSmes: {
            zh: '跨境中小企业',
            en: 'Cross-border SMEs'
        }
    },
    // Strategy Tabs
    strategies: {
        create: {
            zh: '创建钱包',
            en: 'Create Wallet'
        },
        market: {
            zh: '市场动态',
            en: 'Market Dynamics'
        },
        price: {
            zh: '跟踪币价',
            en: 'Track Prices'
        },
        arbitrage: {
            zh: '自动套利',
            en: 'Auto Arbitrage'
        },
        mining: {
            zh: '挖矿',
            en: 'Mining'
        },
        meme: {
            zh: 'Meme',
            en: 'Meme'
        },
        ipo: {
            zh: '币股打新',
            en: 'Token IPO'
        },
        perps: {
            zh: 'Perps',
            en: 'Perps'
        },
        audit: {
            zh: '安全审计',
            en: 'Security Audit'
        },
        transfer: {
            zh: '转账',
            en: 'Transfer'
        },
        defi: {
            zh: 'DeFi',
            en: 'DeFi'
        },
        dca: {
            zh: '定投',
            en: 'DCA'
        },
        copy: {
            zh: '跟单',
            en: 'Copy Trade'
        },
        staking: {
            zh: '质押',
            en: 'Staking'
        },
        lending: {
            zh: '借贷',
            en: 'Lending'
        }
    },
    // Recommended Skills
    skills: {
        walletManager: {
            name: {
                zh: 'Wallet Manager',
                en: 'Wallet Manager'
            },
            desc: {
                zh: 'AI Agent 加密钱包管理，支持多链',
                en: 'AI Agent crypto wallet management, multi-chain support'
            }
        },
        defiStrategist: {
            name: {
                zh: 'DeFi Strategist',
                en: 'DeFi Strategist'
            },
            desc: {
                zh: '智能 DeFi 收益优化策略',
                en: 'Intelligent DeFi yield optimization strategies'
            }
        },
        tradingAssistant: {
            name: {
                zh: 'Trading Assistant',
                en: 'Trading Assistant'
            },
            desc: {
                zh: '专业交易信号与执行助手',
                en: 'Professional trading signals and execution assistant'
            }
        },
        portfolioTracker: {
            name: {
                zh: 'Portfolio Tracker',
                en: 'Portfolio Tracker'
            },
            desc: {
                zh: '实时组合追踪与分析',
                en: 'Real-time portfolio tracking and analysis'
            }
        },
        securityMonitor: {
            name: {
                zh: 'Security Monitor',
                en: 'Security Monitor'
            },
            desc: {
                zh: '7x24 安全监控与预警',
                en: '24/7 security monitoring and alerting'
            }
        },
        nftAggregator: {
            name: {
                zh: 'NFT Aggregator',
                en: 'NFT Aggregator'
            },
            desc: {
                zh: '多平台 NFT 聚合交易',
                en: 'Multi-platform NFT aggregation trading'
            }
        }
    },
    // Security Layers
    security: {
        layers: [
            {
                title: {
                    zh: '私钥自托管',
                    en: 'Self-custody'
                },
                desc: {
                    zh: '你的私钥，你的控制',
                    en: 'Your private key, your control'
                },
                detail: {
                    zh: '私钥始终存储在你的本地环境，永远不会上传到任何服务器',
                    en: 'Private keys are always stored in your local environment and never uploaded to any server'
                }
            },
            {
                title: {
                    zh: 'TEE 硬件加密',
                    en: 'TEE Hardware Encryption'
                },
                desc: {
                    zh: 'AWS Nitro Enclaves',
                    en: 'AWS Nitro Enclaves'
                },
                detail: {
                    zh: '基于可信执行环境的硬件级加密保护',
                    en: 'Hardware-level encryption protection based on trusted execution environment'
                }
            },
            {
                title: {
                    zh: '智能风控引擎',
                    en: 'AI Risk Control Engine'
                },
                desc: {
                    zh: 'AI 实时防护',
                    en: 'AI Real-time Protection'
                },
                detail: {
                    zh: '机器学习模型实时分析交易行为，识别潜在风险',
                    en: 'Machine learning models analyze transaction behavior in real-time to identify potential risks'
                }
            },
            {
                title: {
                    zh: '策略引擎',
                    en: 'Policy Engine'
                },
                desc: {
                    zh: '自定义安全规则',
                    en: 'Custom Security Rules'
                },
                detail: {
                    zh: '灵活配置转账限额、白名单、多重签名等安全策略',
                    en: 'Flexible configuration of transfer limits, whitelists, multi-signature and other security policies'
                }
            }
        ]
    },
    // Chat Scenarios
    chatScenarios: {
        swap: {
            zh: 'Swap',
            en: 'Swap'
        },
        bridge: {
            zh: '跨链',
            en: 'Bridge'
        },
        dca: {
            zh: '定投',
            en: 'DCA'
        },
        risk: {
            zh: '风控',
            en: 'Risk Control'
        }
    },
    // Use Cases Section
    useCases: {
        title: {
            zh: '三个真实使用场景',
            en: 'Three Real-World Use Cases'
        },
        subtitle: {
            zh: '看看其他用户如何用 Claw Wallet 让 AI Agent 自动化管理资产',
            en: 'See how others use Claw Wallet to let AI Agents automate asset management'
        },
        case1: {
            title: {
                zh: '自动定投 ETH',
                en: 'Auto DCA into ETH'
            },
            desc: {
                zh: '设定每周自动买入计划，Agent 在价格低点执行，无需你盯盘',
                en: 'Set up weekly auto-buy plans. Agent executes at price dips without you watching'
            },
            command: {
                zh: '每周一帮我买 100 USDC 的 ETH',
                en: 'Buy $100 worth of ETH every Monday'
            },
            result: {
                zh: '已连续执行 12 周，平均成本降低 8%',
                en: 'Executed for 12 weeks, avg cost reduced by 8%'
            }
        },
        case2: {
            title: {
                zh: '跨链资产归集',
                en: 'Cross-Chain Asset Consolidation'
            },
            desc: {
                zh: '把分散在各链的资产一键归集到主钱包，Agent 自动处理桥接',
                en: 'Consolidate scattered assets across chains. Agent handles bridging automatically'
            },
            command: {
                zh: '把我所有链上的 USDC 归集到以太坊',
                en: 'Consolidate all my USDC to Ethereum'
            },
            result: {
                zh: '3 条链资产已归集，节省 70% 手续费',
                en: 'Assets from 3 chains consolidated, 70% gas saved'
            }
        },
        case3: {
            title: {
                zh: 'DeFi 收益优化',
                en: 'DeFi Yield Optimization'
            },
            desc: {
                zh: 'Agent 监控各协议收益率，自动切换至最高收益池',
                en: 'Agent monitors protocol yields and auto-switches to the highest APY pool'
            },
            command: {
                zh: '帮我把 USDC 放到收益最高的地方',
                en: 'Put my USDC where it earns the most'
            },
            result: {
                zh: '已自动切换至 Aave，APY 从 3.2% 提升至 5.8%',
                en: 'Auto-switched to Aave, APY increased from 3.2% to 5.8%'
            }
        }
    },
    // How It Works Section - 3 Simple Steps
    howItWorks: {
        title: {
            zh: '三步开始使用',
            en: 'Get Started in Three Steps'
        },
        subtitle: {
            zh: '无需复杂配置，像聊天一样简单',
            en: 'No complex setup, as simple as chatting'
        },
        step1: {
            title: {
                zh: '发送命令给 Agent',
                en: 'Send Command to Agent'
            },
            desc: {
                zh: '复制命令发送给你的 OpenClaw Agent',
                en: 'Copy the command and send to your OpenClaw Agent'
            }
        },
        step2: {
            title: {
                zh: '一键登录创建',
                en: 'One-Click Login & Create'
            },
            desc: {
                zh: '用 Google 或邮箱登录，钱包自动生成',
                en: 'Login with Google or email, wallet auto-generated'
            }
        },
        step3: {
            title: {
                zh: '开始对话管理资产',
                en: 'Start Chatting to Manage Assets'
            },
            desc: {
                zh: '像聊天一样告诉 Agent 你的需求',
                en: 'Tell your Agent what you need, just like chatting'
            }
        }
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
                title: {
                    zh: '私钥分片加密存储',
                    en: 'Sharded Key Encryption'
                },
                desc: {
                    zh: '密钥被分割成多份，单点无法破解',
                    en: 'Keys are split into shards, single point cannot be compromised'
                }
            },
            tee: {
                title: {
                    zh: 'TEE 硬件隔离执行',
                    en: 'TEE Hardware Isolation'
                },
                desc: {
                    zh: '运算在 AWS 安全飞地内完成，外部无法访问',
                    en: 'Operations happen inside AWS secure enclaves, inaccessible from outside'
                }
            },
            control: {
                title: {
                    zh: '用户完全控制',
                    en: 'Full User Control'
                },
                desc: {
                    zh: '随时导出私钥，随时撤销 Agent 权限',
                    en: 'Export keys anytime, revoke Agent permissions anytime'
                }
            }
        }
    },
    // Supported Chains
    chains: {
        title: {
            zh: '支持的主流区块链',
            en: 'Supported Blockchains'
        }
    },
    // Testimonials Section
    testimonials: {
        title: {
            zh: '用户怎么说',
            en: 'What Users Say'
        },
        items: {
            testimonial1: {
                quote: {
                    zh: '终于可以让 Agent 帮我自动定投了，不用每天盯盘。最重要的是私钥还是我自己掌控，很安心。',
                    en: 'Finally I can let my Agent auto-DCA for me without watching the market daily. Best of all, I still control the keys.'
                },
                handle: {
                    zh: '@0xchine · DeFi 用户',
                    en: '@0xchine · DeFi User'
                }
            },
            testimonial2: {
                quote: {
                    zh: '跨链资产归集太方便了，以前要手动桥接好几次，现在一句话就搞定。',
                    en: 'Cross-chain consolidation is so convenient. Used to manually bridge multiple times, now just one sentence.'
                },
                handle: {
                    zh: '@0xyilu · Web3 用户',
                    en: '@0xyilu · Web3 User'
                }
            },
            testimonial3: {
                quote: {
                    zh: 'Agent 自动帮我找最高收益的 DeFi 池子，APY 比以前自己手动操作高了 2 倍多。',
                    en: 'Agent automatically finds the highest yield DeFi pools for me. APY is 2x higher than my manual operations.'
                },
                handle: {
                    zh: '@seven_nad · 投资者',
                    en: '@seven_nad · Investor'
                }
            }
        }
    },
    // FAQ Section
    faq: {
        title: {
            zh: '常见问题',
            en: 'FAQ'
        },
        items: {
            q1: {
                question: {
                    zh: '我的私钥安全吗？',
                    en: 'Is my private key secure?'
                },
                answer: {
                    zh: '绝对安全。你的私钥通过 AWS Nitro Enclaves TEE 技术分片加密存储，只有你自己可以访问。我们永远无法触碰你的私钥，你可以随时导出自行保管。',
                    en: 'Absolutely secure. Your private key is encrypted using AWS Nitro Enclaves TEE technology. Only you can access it. We can never touch your keys, and you can export them anytime.'
                }
            },
            q2: {
                question: {
                    zh: 'Agent 能做什么？',
                    en: 'What can Agents do?'
                },
                answer: {
                    zh: 'Agent 可以在你授权的范围内执行各种链上操作：自动定投、跨链转账、DeFi 理财、收益优化等。你可以设置每日限额和合约白名单，完全掌控风险。',
                    en: 'Agents can execute various on-chain operations within your authorized scope: auto-DCA, cross-chain transfers, DeFi yield farming, and more. You set daily limits and contract whitelists.'
                }
            },
            q3: {
                question: {
                    zh: '如何停止 Agent 的操作？',
                    en: 'How do I stop Agent operations?'
                },
                answer: {
                    zh: '你可以随时在 Dashboard 中一键暂停或撤销 Agent 的授权，所有操作立即生效。你也可以设置每日限额，防止意外大额支出。',
                    en: 'You can pause or revoke Agent authorization with one click in the Dashboard anytime. You can also set daily limits to prevent unexpected large expenses.'
                }
            },
            q4: {
                question: {
                    zh: '支持哪些区块链？',
                    en: 'Which blockchains are supported?'
                },
                answer: {
                    zh: '目前支持 Ethereum、Solana、Base、BSC、SUI、Monad 等主流区块链，持续增加中。',
                    en: 'Currently supports Ethereum, Solana, Base, BSC, SUI, Monad, and other mainstream blockchains—with more being added.'
                }
            }
        }
    },
    // CTA Section
    cta: {
        title: {
            zh: '准备好让你的 Agent 开始工作了吗？',
            en: 'Ready to Put Your Agent to Work?'
        },
        subtitle: {
            zh: '30 秒部署，免费开始使用',
            en: 'Deploy in 30 seconds, start for free'
        },
        button: {
            zh: '复制命令开始',
            en: 'Copy Command to Start'
        }
    },
    // Footer
    footer: {
        copyright: {
            zh: '© 2025 Claw Wallet',
            en: '© 2025 Claw Wallet'
        }
    }
};
function t(key, lang) {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys){
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return key;
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
"[project]/src/components/icons/ClawIcons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClawActivity",
    ()=>ClawActivity,
    "ClawAlertTriangle",
    ()=>ClawAlertTriangle,
    "ClawArrowRight",
    ()=>ClawArrowRight,
    "ClawBarChart2",
    ()=>ClawBarChart2,
    "ClawBoltIcon",
    ()=>ClawBoltIcon,
    "ClawBot",
    ()=>ClawBot,
    "ClawChainIcon",
    ()=>ClawChainIcon,
    "ClawChartIcon",
    ()=>ClawChartIcon,
    "ClawCheck",
    ()=>ClawCheck,
    "ClawCheckCircle",
    ()=>ClawCheckCircle,
    "ClawChevronDown",
    ()=>ClawChevronDown,
    "ClawChevronLeft",
    ()=>ClawChevronLeft,
    "ClawChevronRight",
    ()=>ClawChevronRight,
    "ClawChevronUp",
    ()=>ClawChevronUp,
    "ClawCode",
    ()=>ClawCode,
    "ClawCopy",
    ()=>ClawCopy,
    "ClawEye",
    ()=>ClawEye,
    "ClawGithub",
    ()=>ClawGithub,
    "ClawGlobe",
    ()=>ClawGlobe,
    "ClawHandshakeIcon",
    ()=>ClawHandshakeIcon,
    "ClawKey",
    ()=>ClawKey,
    "ClawKeyIcon",
    ()=>ClawKeyIcon,
    "ClawLock",
    ()=>ClawLock,
    "ClawLockIcon",
    ()=>ClawLockIcon,
    "ClawLockKeyhole",
    ()=>ClawLockKeyhole,
    "ClawMenu",
    ()=>ClawMenu,
    "ClawMoneyIcon",
    ()=>ClawMoneyIcon,
    "ClawPackage",
    ()=>ClawPackage,
    "ClawRobotIcon",
    ()=>ClawRobotIcon,
    "ClawSearchIcon",
    ()=>ClawSearchIcon,
    "ClawShield",
    ()=>ClawShield,
    "ClawShieldAlert",
    ()=>ClawShieldAlert,
    "ClawShieldCheck",
    ()=>ClawShieldCheck,
    "ClawSparkles",
    ()=>ClawSparkles,
    "ClawStar",
    ()=>ClawStar,
    "ClawTerminal",
    ()=>ClawTerminal,
    "ClawTrendingIcon",
    ()=>ClawTrendingIcon,
    "ClawTwitter",
    ()=>ClawTwitter,
    "ClawUser",
    ()=>ClawUser,
    "ClawWallet",
    ()=>ClawWallet,
    "ClawX",
    ()=>ClawX,
    "ClawZap",
    ()=>ClawZap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
// Base icon wrapper with consistent styling
const IconWrapper = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] !== children || $[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = children;
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c = IconWrapper;
const ClawArrowRight = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12h14"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m12 5 7 7-7 7"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c1 = ClawArrowRight;
const ClawShield = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c2 = ClawShield;
const ClawZap = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c3 = ClawZap;
const ClawChevronDown = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 148,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 155,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c4 = ClawChevronDown;
const ClawStar = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 179,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 186,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c5 = ClawStar;
const ClawGlobe = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 212,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 213,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 214,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 225,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c6 = ClawGlobe;
const ClawWallet = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 12V7H5a2 2 0 0 1 0-4h14v4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 251,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 5v14a2 2 0 0 0 2 2h16v-5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 252,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18 12a2 2 0 0 0 0 4h4v-4h-4z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 253,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 264,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c7 = ClawWallet;
const ClawChevronLeft = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m15 18-6-6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 288,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 295,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c8 = ClawChevronLeft;
const ClawChevronRight = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m9 18 6-6-6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 319,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 326,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c9 = ClawChevronRight;
const ClawLock = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "3",
            y: "11",
            width: "18",
            height: "11",
            rx: "2",
            ry: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 351,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 352,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 361,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c10 = ClawLock;
const ClawKey = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "7.5",
            cy: "15.5",
            r: "5.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 387,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m21 2-9.6 9.6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 388,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m15 5 3 3"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 389,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 400,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c11 = ClawKey;
const ClawAlertTriangle = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 426,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "12",
            y1: "9",
            x2: "12",
            y2: "13"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 427,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "12",
            y1: "17",
            x2: "12.01",
            y2: "17"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 428,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 439,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c12 = ClawAlertTriangle;
const ClawCheckCircle = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 464,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "22 4 12 14.01 9 11.01"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 465,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 474,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c13 = ClawCheckCircle;
const ClawActivity = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "22 12 18 12 15 21 9 3 6 12 2 12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 498,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 505,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c14 = ClawActivity;
const ClawBarChart2 = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "18",
            y1: "20",
            x2: "18",
            y2: "10"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 531,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "12",
            y1: "20",
            x2: "12",
            y2: "4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 532,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "6",
            y1: "20",
            x2: "6",
            y2: "14"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 533,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 544,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c15 = ClawBarChart2;
const ClawShieldCheck = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 569,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "9 12 12 15 16 10"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 570,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 579,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c16 = ClawShieldCheck;
const ClawShieldAlert = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 605,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 606,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 607,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 618,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c17 = ClawShieldAlert;
const ClawCopy = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "9",
            y: "9",
            width: "13",
            height: "13",
            rx: "2",
            ry: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 643,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 644,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 653,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c18 = ClawCopy;
const ClawCheck = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 677,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 684,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c19 = ClawCheck;
const ClawTerminal = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "4 17 10 11 4 5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 709,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "12",
            y1: "19",
            x2: "20",
            y2: "19"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 710,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 719,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c20 = ClawTerminal;
const ClawLockKeyhole = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "3",
            y: "11",
            width: "18",
            height: "11",
            rx: "2",
            ry: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 745,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 746,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "16",
            r: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 747,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 758,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c21 = ClawLockKeyhole;
const ClawEye = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 783,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 784,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 793,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c22 = ClawEye;
const ClawUser = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 818,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "7",
            r: "4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 819,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 828,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c23 = ClawUser;
const ClawBot = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "3",
            y: "11",
            width: "18",
            height: "10",
            rx: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 856,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "8.5",
            cy: "15.5",
            r: "1.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 857,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "15.5",
            cy: "15.5",
            r: "1.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 858,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 11V7a4 4 0 0 1 4-4h0"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 859,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 11V7a4 4 0 0 0-4-4h0"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 860,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
        $[4] = t5;
        $[5] = t6;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
        t5 = $[4];
        t6 = $[5];
    }
    let t7;
    if ($[6] !== className) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 875,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = className;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    return t7;
};
_c24 = ClawBot;
const ClawPackage = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "16.5",
            y1: "9.4",
            x2: "7.5",
            y2: "4.21"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 902,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 903,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "3.27 6.96 12 12.01 20.73 6.96"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 904,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "12",
            y1: "22.08",
            x2: "12",
            y2: "12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 905,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
        $[4] = t5;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
        t5 = $[4];
    }
    let t6;
    if ($[5] !== className) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 918,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = className;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    return t6;
};
_c25 = ClawPackage;
const ClawSparkles = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 946,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 3v4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 947,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 17v4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 948,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 5h4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 949,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17 19h4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 950,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
        $[4] = t5;
        $[5] = t6;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
        t5 = $[4];
        t6 = $[5];
    }
    let t7;
    if ($[6] !== className) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 965,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = className;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    return t7;
};
_c26 = ClawSparkles;
const ClawChevronUp = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m18 15-6-6-6 6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 989,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 996,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c27 = ClawChevronUp;
const ClawMenu = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "3",
            y1: "12",
            x2: "21",
            y2: "12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1022,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1023,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "3",
            y1: "18",
            x2: "21",
            y2: "18"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1024,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1035,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c28 = ClawMenu;
const ClawX = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1060,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1061,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1070,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c29 = ClawX;
const ClawGithub = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1094,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1101,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c30 = ClawGithub;
const ClawTwitter = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1125,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1132,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c31 = ClawTwitter;
const ClawCode = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "16 18 22 12 16 6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1157,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "8 6 2 12 8 18"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1158,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1167,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c32 = ClawCode;
const ClawLockIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "3",
            y: "11",
            width: "18",
            height: "11",
            rx: "2",
            ry: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1194,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1195,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1204,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c33 = ClawLockIcon;
const ClawRobotIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            x: "3",
            y: "11",
            width: "18",
            height: "10",
            rx: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1232,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "8.5",
            cy: "15.5",
            r: "1.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1233,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "15.5",
            cy: "15.5",
            r: "1.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1234,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 11V7a4 4 0 0 1 4-4h0"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1235,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 11V7a4 4 0 0 0-4-4h0"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1236,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
        $[4] = t5;
        $[5] = t6;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
        t5 = $[4];
        t6 = $[5];
    }
    let t7;
    if ($[6] !== className) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1251,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = className;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    return t7;
};
_c34 = ClawRobotIcon;
const ClawChainIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1276,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1277,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1286,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c35 = ClawChainIcon;
const ClawKeyIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "7.5",
            cy: "15.5",
            r: "5.5"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1312,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m21 2-9.6 9.6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1313,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m15 5 3 3"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1314,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1325,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c36 = ClawKeyIcon;
const ClawChartIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "18",
            y1: "20",
            x2: "18",
            y2: "10"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1351,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "12",
            y1: "20",
            x2: "12",
            y2: "4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1352,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "6",
            y1: "20",
            x2: "6",
            y2: "14"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1353,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1364,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c37 = ClawChartIcon;
const ClawBoltIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1388,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1395,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c38 = ClawBoltIcon;
const ClawSearchIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1420,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1421,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1430,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c39 = ClawSearchIcon;
const ClawHandshakeIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2 12h4l2-2h4l2 2h4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1458,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1459,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1460,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "9",
            cy: "16",
            r: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1461,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "15",
            cy: "16",
            r: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1462,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
        $[4] = t5;
        $[5] = t6;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
        t5 = $[4];
        t6 = $[5];
    }
    let t7;
    if ($[6] !== className) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1477,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = className;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    return t7;
};
_c40 = ClawHandshakeIcon;
const ClawMoneyIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1503,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1504,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17 12a5 5 0 0 1-10 0"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1505,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1516,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
_c41 = ClawMoneyIcon;
const ClawTrendingIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51095c91ee880c98ef55fc083c4a350ae415a4b2aafcfee3a307830a676b9a76";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "w-5 h-5" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "23 6 13.5 15.5 8.5 10.5 1 18"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1541,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "17 6 23 6 23 12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1542,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
            className: className,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/ClawIcons.tsx",
            lineNumber: 1551,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
};
_c42 = ClawTrendingIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42;
__turbopack_context__.k.register(_c, "IconWrapper");
__turbopack_context__.k.register(_c1, "ClawArrowRight");
__turbopack_context__.k.register(_c2, "ClawShield");
__turbopack_context__.k.register(_c3, "ClawZap");
__turbopack_context__.k.register(_c4, "ClawChevronDown");
__turbopack_context__.k.register(_c5, "ClawStar");
__turbopack_context__.k.register(_c6, "ClawGlobe");
__turbopack_context__.k.register(_c7, "ClawWallet");
__turbopack_context__.k.register(_c8, "ClawChevronLeft");
__turbopack_context__.k.register(_c9, "ClawChevronRight");
__turbopack_context__.k.register(_c10, "ClawLock");
__turbopack_context__.k.register(_c11, "ClawKey");
__turbopack_context__.k.register(_c12, "ClawAlertTriangle");
__turbopack_context__.k.register(_c13, "ClawCheckCircle");
__turbopack_context__.k.register(_c14, "ClawActivity");
__turbopack_context__.k.register(_c15, "ClawBarChart2");
__turbopack_context__.k.register(_c16, "ClawShieldCheck");
__turbopack_context__.k.register(_c17, "ClawShieldAlert");
__turbopack_context__.k.register(_c18, "ClawCopy");
__turbopack_context__.k.register(_c19, "ClawCheck");
__turbopack_context__.k.register(_c20, "ClawTerminal");
__turbopack_context__.k.register(_c21, "ClawLockKeyhole");
__turbopack_context__.k.register(_c22, "ClawEye");
__turbopack_context__.k.register(_c23, "ClawUser");
__turbopack_context__.k.register(_c24, "ClawBot");
__turbopack_context__.k.register(_c25, "ClawPackage");
__turbopack_context__.k.register(_c26, "ClawSparkles");
__turbopack_context__.k.register(_c27, "ClawChevronUp");
__turbopack_context__.k.register(_c28, "ClawMenu");
__turbopack_context__.k.register(_c29, "ClawX");
__turbopack_context__.k.register(_c30, "ClawGithub");
__turbopack_context__.k.register(_c31, "ClawTwitter");
__turbopack_context__.k.register(_c32, "ClawCode");
__turbopack_context__.k.register(_c33, "ClawLockIcon");
__turbopack_context__.k.register(_c34, "ClawRobotIcon");
__turbopack_context__.k.register(_c35, "ClawChainIcon");
__turbopack_context__.k.register(_c36, "ClawKeyIcon");
__turbopack_context__.k.register(_c37, "ClawChartIcon");
__turbopack_context__.k.register(_c38, "ClawBoltIcon");
__turbopack_context__.k.register(_c39, "ClawSearchIcon");
__turbopack_context__.k.register(_c40, "ClawHandshakeIcon");
__turbopack_context__.k.register(_c41, "ClawMoneyIcon");
__turbopack_context__.k.register(_c42, "ClawTrendingIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ClawIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/ClawIcons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LanguageSwitcher(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "fd6eff48ca935a70e229df08fe034ec0ea2b17d7e10e17909e234e62af48a821") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fd6eff48ca935a70e229df08fe034ec0ea2b17d7e10e17909e234e62af48a821";
    }
    const { currentLang, onLanguageChange } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== isOpen) {
        t1 = ({
            "LanguageSwitcher[useEffect()]": ()=>{
                const handleClickOutside = {
                    "LanguageSwitcher[useEffect() > handleClickOutside]": ()=>setIsOpen(false)
                }["LanguageSwitcher[useEffect() > handleClickOutside]"];
                if (isOpen) {
                    document.addEventListener("click", handleClickOutside);
                    return ()=>document.removeEventListener("click", handleClickOutside);
                }
            }
        })["LanguageSwitcher[useEffect()]"];
        t2 = [
            isOpen
        ];
        $[1] = isOpen;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== currentLang) {
        t3 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].find({
            "LanguageSwitcher[languages.find()]": (l)=>l.code === currentLang
        }["LanguageSwitcher[languages.find()]"]);
        $[4] = currentLang;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const currentLanguage = t3;
    let t4;
    if ($[6] !== isOpen) {
        t4 = ({
            "LanguageSwitcher[<button>.onClick]": (e)=>{
                e.stopPropagation();
                setIsOpen(!isOpen);
            }
        })["LanguageSwitcher[<button>.onClick]"];
        $[6] = isOpen;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ClawIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClawGlobe"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/LanguageSwitcher.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const t6 = currentLanguage?.label;
    let t7;
    if ($[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden sm:inline",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/LanguageSwitcher.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t4 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t4,
            className: "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border-2 border-slate-800 transition-all hover:bg-orange-500 hover:border-orange-500 hover:text-white",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/LanguageSwitcher.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== currentLang || $[15] !== isOpen || $[16] !== onLanguageChange) {
        t9 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full right-0 mt-2 bg-white border-2 border-slate-800 rounded-2xl shadow-hard py-2 min-w-[140px] z-50",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].map({
                "LanguageSwitcher[languages.map()]": (lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "LanguageSwitcher[languages.map() > <button>.onClick]": ()=>{
                                onLanguageChange(lang.code);
                                setIsOpen(false);
                            }
                        }["LanguageSwitcher[languages.map() > <button>.onClick]"],
                        className: `w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${currentLang === lang.code ? "bg-orange-500 text-white border-orange-500" : "text-slate-800 hover:bg-slate-100"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: lang.label
                        }, void 0, false, {
                            fileName: "[project]/src/app/LanguageSwitcher.tsx",
                            lineNumber: 104,
                            columnNumber: 272
                        }, this)
                    }, lang.code, false, {
                        fileName: "[project]/src/app/LanguageSwitcher.tsx",
                        lineNumber: 99,
                        columnNumber: 54
                    }, this)
            }["LanguageSwitcher[languages.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/LanguageSwitcher.tsx",
            lineNumber: 98,
            columnNumber: 20
        }, this);
        $[14] = currentLang;
        $[15] = isOpen;
        $[16] = onLanguageChange;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t8 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/LanguageSwitcher.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[18] = t8;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    return t10;
}
_s(LanguageSwitcher, "vl0Rt3/A8evyRPW1OQ1AhRk4UhU=");
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fingerprint-pattern.js [app-client] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/LanguageSwitcher.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const DiscordIcon = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "1a5ca0b77bef6e5401ea2ec51f9fd8f8f13d4f735baee21b5470961ea8155487") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a5ca0b77bef6e5401ea2ec51f9fd8f8f13d4f735baee21b5470961ea8155487";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c = DiscordIcon;
// ============================================
// Design System - Premium UI Kit
// ============================================
// Color Palette - Refined Deep Lobster Red + Pearl White
const colors = {
    lobster: {
        50: '#FEF2F0',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D'
    },
    pearl: {
        50: '#FFFFFF',
        100: '#FEFBFA',
        200: '#FDF7F5',
        300: '#FAF0ED',
        400: '#F5E6E1',
        500: '#EDD5CE'
    },
    neutral: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
    }
};
// ============================================
// Data
// ============================================
const features = [
    {
        id: 'chat',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
        label: '对话操作',
        title: '自然语言，一键执行',
        description: '用对话创建和管理钱包，查询余额、转账、查看历史，AI 自动执行链上操作。'
    },
    {
        id: 'security',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        label: '自托管安全',
        title: '你的钥匙，你的控制',
        description: '私钥永不离开你的环境，基于 TEE 的硬件级加密，完全自主控制资产。'
    },
    {
        id: 'risk',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        label: '智能风控',
        title: 'AI 驱动的安全防护',
        description: '实时交易行为分析，异常操作自动拦截，自定义安全策略规则。'
    },
    {
        id: 'multichain',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        label: '多链支持',
        title: '一个钱包，多条链',
        description: '支持 20+ 主流区块链，统一资产管理界面，跨链操作无缝衔接。'
    }
];
const securityLayers = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"],
        title: '私钥自托管',
        desc: '你的私钥，你的控制',
        detail: '私钥始终存储在你的本地环境，永远不会上传到任何服务器'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        title: 'TEE 硬件加密',
        desc: 'AWS Nitro Enclaves',
        detail: '基于可信执行环境的硬件级加密保护'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
        title: '智能风控引擎',
        desc: 'AI 实时防护',
        detail: '机器学习模型实时分析交易行为，识别潜在风险'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        title: '策略引擎',
        desc: '自定义安全规则',
        detail: '灵活配置转账限额、白名单、多重签名等安全策略'
    }
];
const chatScenarios = [
    {
        id: 'swap',
        label: 'Swap',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        color: 'bg-yellow-50 text-yellow-600',
        messages: [
            {
                role: 'user',
                content: '把 1000 USDC 换成 ETH'
            },
            {
                role: 'agent',
                content: '正在查询最优兑换路径...\n\nUniswap V3: 0.3842 ETH\nCurve: 0.3839 ETH\n1inch: 0.3841 ETH\n\n推荐 Uniswap V3，滑点 0.05%'
            },
            {
                role: 'user',
                content: '确认兑换'
            },
            {
                role: 'agent',
                content: '✓ 兑换成功！\n获得: 0.3842 ETH\nGas: 0.002 ETH\n交易哈希: 0x8b2d...7a1f'
            }
        ]
    },
    {
        id: 'bridge',
        label: '跨链',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        color: 'bg-purple-50 text-purple-600',
        messages: [
            {
                role: 'user',
                content: '跨链 500 USDC 到 Arbitrum'
            },
            {
                role: 'agent',
                content: '正在查询跨链方案...\n\nLayerZero: 手续费 0.5 USDC，10-15分钟\nStargate: 手续费 0.8 USDC，5-10分钟\n\n推荐 LayerZero，成本最低'
            },
            {
                role: 'user',
                content: '确认跨链'
            },
            {
                role: 'agent',
                content: '✓ 跨链交易已发起！\n预计到账: 499.5 USDC\n交易 ID: 0x9c4f...2e8b\n可在历史记录中追踪进度'
            }
        ]
    },
    {
        id: 'dca',
        label: '定投',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        color: 'bg-blue-50 text-blue-600',
        messages: [
            {
                role: 'user',
                content: '设置每周定投 100 USDC 买 ETH'
            },
            {
                role: 'agent',
                content: '正在创建定投策略...\n\n频率: 每周一 09:00\n金额: 100 USDC\n目标: ETH\n策略: 市价单\n\n预计年化收益: 根据市场波动'
            },
            {
                role: 'user',
                content: '确认创建'
            },
            {
                role: 'agent',
                content: '✓ 定投策略已创建！\n策略 ID: DCA-8842\n首次执行: 2024-01-15\n可随时暂停或修改'
            }
        ]
    },
    {
        id: 'risk',
        label: '风控',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        color: 'bg-orange-50 text-orange-600',
        messages: [
            {
                role: 'user',
                content: '检查我的钱包安全状态'
            },
            {
                role: 'agent',
                content: '正在扫描安全状态...\n\n✓ 私钥存储: TEE 环境安全\n✓ 交易权限: 正常\n⚠ 发现: 1笔待确认的高风险交易\n\n建议: 开启双因素认证'
            },
            {
                role: 'user',
                content: '查看风险交易'
            },
            {
                role: 'agent',
                content: '✓ 已拦截可疑交易！\n目标: 0x9f3a...2b1c\n金额: 5 ETH\n风险: 合约未审计\n已自动阻止执行'
            }
        ]
    },
    {
        id: 'defi',
        label: 'DeFi',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        color: 'bg-green-50 text-green-600',
        messages: [
            {
                role: 'user',
                content: '在 Aave 存入 5000 USDC'
            },
            {
                role: 'agent',
                content: '正在计算收益...\n\n存入: 5000 USDC\nAPY: 4.2%\n预估月收益: 17.5 USDC\n健康因子: N/A (无借款)\n\nGas 费预估: 0.003 ETH'
            },
            {
                role: 'user',
                content: '确认存入'
            },
            {
                role: 'agent',
                content: '✓ 存入成功！\n获得 aUSDC: 5000\n开始计息\n交易哈希: 0x3a7c...9f2e'
            }
        ]
    },
    {
        id: 'transfer',
        label: '转账',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        color: 'bg-orange-50 text-orange-600',
        messages: [
            {
                role: 'user',
                content: '转 2 ETH 给 0x742d...f0bEb'
            },
            {
                role: 'agent',
                content: '正在准备交易...\n\n发送方: 0x7a8b...3c4d\n接收方: 0x742d...f0bEb\n金额: 2 ETH\nGas 费: 0.001 ETH\n总计: 2.001 ETH'
            },
            {
                role: 'user',
                content: '确认转账'
            },
            {
                role: 'agent',
                content: '✓ 交易已提交！\n预计确认: 12 秒\n交易哈希: 0x3f8a...9c2e\n可在历史记录查看'
            }
        ]
    }
];
const strategyDescriptions = {
    create: {
        features: [
            '快速创建安全钱包',
            '助记词备份',
            '多链支持',
            '硬件级加密保护'
        ],
        chatContent: {
            title: '创建一个新的加密钱包',
            messages: [
                '我想创建一个新的加密钱包',
                '正在准备创建钱包...\n\n安全级别: 高\n支持链: Ethereum, Base, Arbitrum, Optimism\n加密方式: TEE 硬件加密',
                '确认创建',
                '✓ 钱包创建成功！\n地址: 0x7a8b...3c4d\n请保存好你的助记词\n可在设置中查看详情'
            ],
            options: [
                '标准',
                '高级',
                '企业级'
            ],
            selectedOption: '标准',
            transaction: {
                title: '创建新钱包',
                details: '安全级别: 高 · 多链支持',
                button: '确认创建'
            }
        }
    },
    market: {
        features: [
            '实时市场新闻',
            'KOL 观点跟踪',
            '市场情绪分析',
            '热点事件提醒'
        ],
        chatContent: {
            title: '查看最新市场动态',
            messages: [
                '查看最新的加密市场动态',
                '正在获取市场信息...\n\n• 比特币突破 70,000 美元\n• 以太坊上海升级成功\n• KOL @CryptoExpert 看好 Solana\n• DeFi 总锁仓量增长 15%',
                '订阅市场动态',
                '✓ 已成功订阅市场动态！\n将定期为你推送重要市场信息\n可在设置中调整订阅偏好'
            ],
            options: [
                '每日',
                '每周',
                '实时'
            ],
            selectedOption: '每日',
            transaction: {
                title: '订阅市场动态',
                details: '包含新闻、KOL 观点和市场情绪',
                button: '确认订阅'
            }
        }
    },
    price: {
        features: [
            '实时币价跟踪',
            '价格预警设置',
            '历史价格分析',
            '多交易所对比'
        ],
        chatContent: {
            title: '跟踪比特币和以太坊价格',
            messages: [
                '帮我跟踪比特币和以太坊的价格',
                '正在获取实时价格...\n\n比特币 (BTC): $69,500.00 (+2.5%)\n以太坊 (ETH): $3,850.00 (+1.8%)\n24小时交易量: $45B\n市场总市值: $2.3T',
                '设置价格预警',
                '✓ 价格预警设置成功！\n比特币: 突破 $70,000 时提醒\n以太坊: 跌破 $3,700 时提醒\n可在设置中查看和修改预警'
            ],
            options: [
                'BTC',
                'ETH',
                'SOL',
                'BNB'
            ],
            selectedOption: 'BTC',
            transaction: {
                title: '设置价格预警',
                details: '比特币: $70,000 · 以太坊: $3,700',
                button: '确认设置'
            }
        }
    },
    arbitrage: {
        features: [
            '跨交易所套利',
            '自动执行交易',
            '风险控制',
            '收益分析'
        ],
        chatContent: {
            title: '设置自动套利策略',
            messages: [
                '帮我设置自动套利策略',
                '正在分析套利机会...\n\n交易所: Binance vs OKX\n代币: ETH\n套利空间: 0.5%\n预计收益: $50/天\n风险等级: 低',
                '确认设置',
                '✓ 自动套利策略设置成功！\n策略 ID: ARB-7789\n已开始监控套利机会\n可在策略中心查看详情'
            ],
            options: [
                '低风险',
                '中风险',
                '高风险'
            ],
            selectedOption: '低风险',
            transaction: {
                title: '设置自动套利策略',
                details: 'ETH 跨交易所套利 · 预期收益: $50/天',
                button: '确认设置'
            }
        }
    },
    mining: {
        features: [
            '多协议挖矿集成',
            '流动性挖矿',
            '收益优化',
            '风险评估'
        ],
        chatContent: {
            title: '在 DeFi 协议中挖矿',
            messages: [
                '我想在 DeFi 协议中挖矿',
                '正在分析挖矿机会...\n\n年化收益: 12.5%\n锁定期: 30 天\n风险等级: 中\n最低投资: 100 USDC',
                '确认参与',
                '✓ 已成功参与挖矿！\n投资金额: 100 USDC\n预计年化: 12.5%\n可在 DeFi 中心查看详情'
            ],
            options: [
                '100 USDC',
                '500 USDC',
                '1000 USDC',
                '5000 USDC'
            ],
            selectedOption: '100 USDC',
            transaction: {
                title: '参与 DeFi 挖矿',
                details: '年化收益: 12.5% · 锁定期: 30 天',
                button: '确认参与'
            }
        }
    },
    meme: {
        features: [
            '自动 meme 打狗',
            '市场情绪分析',
            '趋势跟踪',
            '收益策略'
        ],
        chatContent: {
            title: '自动 meme 打狗策略',
            messages: [
                '我想设置自动 meme 打狗策略',
                '正在分析 meme 市场...\n\n当前热点: PEPE, DOGE\n市场情绪: 极度看涨\n风险等级: 高\n潜在收益: 50-100%',
                '确认设置',
                '✓ 自动 meme 打狗策略已设置！\n已开始监控 meme 币市场\n将在合适时机自动执行交易\n可在策略中心查看详情'
            ],
            options: [
                '低风险',
                '中风险',
                '高风险',
                '激进'
            ],
            selectedOption: '高风险',
            transaction: {
                title: '设置自动 meme 打狗策略',
                details: '监控: PEPE, DOGE · 风险: 高',
                button: '确认设置'
            }
        }
    },
    ipo: {
        features: [
            '币股打新',
            '项目分析',
            '申购策略',
            '收益跟踪'
        ],
        chatContent: {
            title: '参与币股打新',
            messages: [
                '我想参与币股打新',
                '正在查询最新打新项目...\n\n项目: Coinbase IPO\n发行价: $250\n申购时间: 2024-06-15\n预期收益: 20-30%',
                '确认申购',
                '✓ 已成功申购 Coinbase IPO！\n申购金额: $1,000\n申购数量: 4 股\n可在投资中心查看详情'
            ],
            options: [
                '$500',
                '$1000',
                '$5000',
                '$10000'
            ],
            selectedOption: '$1000',
            transaction: {
                title: '申购 Coinbase IPO',
                details: '发行价: $250 · 预期收益: 20-30%',
                button: '确认申购'
            }
        }
    },
    perps: {
        features: [
            '永续合约交易',
            '杠杆管理',
            '自动止盈止损',
            '策略优化'
        ],
        chatContent: {
            title: '交易 ETH 永续合约',
            messages: [
                '我想交易 ETH 永续合约',
                '正在分析市场...\n\n当前价格: $3,850\n杠杆倍数: 5x\n止盈价格: $4,200\n止损价格: $3,700',
                '确认交易',
                '✓ 已成功开仓 ETH 永续合约！\n方向: 多头\n杠杆: 5x\n开仓价格: $3,850\n可在衍生品中心查看详情'
            ],
            options: [
                '1x',
                '5x',
                '10x',
                '20x'
            ],
            selectedOption: '5x',
            transaction: {
                title: '开仓 ETH 永续合约',
                details: '多头 · 5x 杠杆 · 止盈: $4,200',
                button: '确认开仓'
            }
        }
    },
    audit: {
        features: [
            '智能合约安全审计',
            '风险评估',
            '漏洞检测',
            '安全建议'
        ],
        chatContent: {
            title: '安全审计智能合约',
            messages: [
                '帮我审计一个智能合约',
                '正在进行安全审计...\n\n合约地址: 0x1234...5678\n链: Ethereum\n风险等级: 低\n发现问题: 1 个小漏洞\n安全评分: 95/100',
                '查看详细报告',
                '✓ 安全审计完成！\n已生成详细报告\n包含漏洞修复建议\n可在安全中心查看完整报告'
            ],
            options: [
                '基础审计',
                '全面审计',
                '深度审计'
            ],
            selectedOption: '全面审计',
            transaction: {
                title: '智能合约安全审计',
                details: '合约地址: 0x1234...5678 · 链: Ethereum',
                button: '确认审计'
            }
        }
    },
    transfer: {
        features: [
            '快速安全的加密货币转账',
            '支持多链地址',
            '智能地址验证',
            '实时转账状态跟踪'
        ],
        chatContent: {
            title: '转账到 0x742d...f0bEb',
            messages: [
                '我想转 2 ETH 给 0x742d...f0bEb',
                '正在准备交易...\n\n发送方: 0x7a8b...3c4d\n接收方: 0x742d...f0bEb\n金额: 2 ETH\nGas 费: 0.001 ETH\n总计: 2.001 ETH',
                '确认转账',
                '✓ 交易已提交！\n预计确认: 12 秒\n交易哈希: 0x3f8a...9c2e\n可在历史记录查看'
            ],
            options: [
                '25%',
                '50%',
                '75%',
                'Max'
            ],
            selectedOption: 'Max',
            transaction: {
                title: '转账 2 ETH → 0x742d...f0bEb',
                details: 'Ethereum · 预估 gas ~0.001 ETH',
                button: '确认转账'
            }
        }
    },
    defi: {
        features: [
            '去中心化金融协议集成',
            '流动性挖矿',
            '收益优化策略',
            '智能合约安全检查'
        ],
        chatContent: {
            title: '在 Uniswap 兑换 USDC 为 ETH',
            messages: [
                '把 1000 USDC 换成 ETH',
                '正在查询最优兑换路径...\n\nUniswap V3: 0.3842 ETH\nCurve: 0.3839 ETH\n1inch: 0.3841 ETH\n\n推荐 Uniswap V3，滑点 0.05%',
                '确认兑换',
                '✓ 兑换成功！\n获得: 0.3842 ETH\nGas: 0.002 ETH\n交易哈希: 0x8b2d...7a1f'
            ],
            options: [
                'Option 1',
                'Option 2',
                'Option 3',
                'Option 4'
            ],
            selectedOption: 'Option 1',
            transaction: {
                title: '兑换 1000 USDC → 0.3842 ETH',
                details: 'Uniswap V3 · 滑点 0.05% · Gas ~0.002 ETH',
                button: '确认兑换'
            }
        }
    },
    dca: {
        features: [
            '定期定额投资',
            '自动执行交易',
            '成本平均策略',
            '投资组合跟踪'
        ],
        chatContent: {
            title: '设置每周定投 100 USDC 买 ETH',
            messages: [
                '设置每周定投 100 USDC 买 ETH',
                '正在创建定投策略...\n\n频率: 每周一 09:00\n金额: 100 USDC\n目标: ETH\n策略: 市价单\n\n预计年化收益: 根据市场波动',
                '确认创建',
                '✓ 定投策略已创建！\n策略 ID: DCA-8842\n首次执行: 2024-01-15\n可随时暂停或修改'
            ],
            options: [
                '每周',
                '每两周',
                '每月'
            ],
            selectedOption: '每周',
            transaction: {
                title: '创建定投策略: 每周 100 USDC 买 ETH',
                details: '每周一 09:00 · 市价单',
                button: '确认创建'
            }
        }
    },
    copy: {
        features: [
            '跟随专业交易员',
            '自动复制交易',
            '风险控制',
            '业绩分析'
        ],
        chatContent: {
            title: '跟随 top 交易员的交易策略',
            messages: [
                '我想跟随 top 交易员的交易',
                '正在查找优质交易员...\n\n交易员: TraderPro\n收益率: +120% (30天)\n最大回撤: 15%\n交易频率: 平均每天 2-3 笔',
                '确认跟随',
                '✓ 跟随成功！\n交易员: TraderPro\n跟随比例: 100%\n最大单笔: 0.5 ETH\n可随时调整设置'
            ],
            options: [
                '50%',
                '75%',
                '100%',
                '150%'
            ],
            selectedOption: '100%',
            transaction: {
                title: '跟随 TraderPro 的交易策略',
                details: '跟随比例: 100% · 最大单笔: 0.5 ETH',
                button: '确认跟随'
            }
        }
    },
    staking: {
        features: [
            '质押加密资产获得收益',
            '支持多种质押协议',
            '自动复投收益',
            '质押状态监控'
        ],
        chatContent: {
            title: '在 Lido 质押 ETH 获得 5.2% APY',
            messages: [
                '我想质押 ETH 获得收益',
                '正在查询质押选项...\n\nLido: 5.2% APY · 流动性好\nRocket Pool: 5.5% APY · 去中心化\nCoinbase: 4.8% APY · 安全可靠',
                '选择 Lido',
                '✓ 质押成功！\n质押金额: 1 ETH\n预计年化: 5.2%\n已获得 stETH: 0.999\n可随时 unstake'
            ],
            options: [
                '1 ETH',
                '2 ETH',
                '5 ETH',
                'Max'
            ],
            selectedOption: '1 ETH',
            transaction: {
                title: '质押 1 ETH → Lido',
                details: '预计年化: 5.2% · 获得 stETH',
                button: '确认质押'
            }
        }
    },
    lending: {
        features: [
            '借出资产获得利息',
            '灵活的借贷期限',
            '实时利率跟踪',
            '安全的借贷协议'
        ],
        chatContent: {
            title: '在 Aave 存入 USDC 获得 4.2% APY',
            messages: [
                '我想在 Aave 存入 USDC',
                '正在计算收益...\n\n存入: 5000 USDC\nAPY: 4.2%\n预估月收益: 17.5 USDC\n健康因子: N/A (无借款)\n\nGas 费预估: 0.003 ETH',
                '确认存入',
                '✓ 存入成功！\n获得 aUSDC: 5000\n开始计息\n交易哈希: 0x3a7c...9f2e'
            ],
            options: [
                '1000 USDC',
                '2500 USDC',
                '5000 USDC',
                'Max'
            ],
            selectedOption: '5000 USDC',
            transaction: {
                title: '存入 5000 USDC → Aave',
                details: 'APY: 4.2% · 预估月收益: 17.5 USDC',
                button: '确认存入'
            }
        }
    }
};
// ============================================
// Components
// ============================================
const Button = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "1a5ca0b77bef6e5401ea2ec51f9fd8f8f13d4f735baee21b5470961ea8155487") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a5ca0b77bef6e5401ea2ec51f9fd8f8f13d4f735baee21b5470961ea8155487";
    }
    const { children, variant: t1, size: t2, className: t3, icon: Icon } = t0;
    const variant = t1 === undefined ? "primary" : t1;
    const size = t2 === undefined ? "md" : t2;
    const className = t3 === undefined ? "" : t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            primary: "bg-orange-500 text-white shadow-hard hover:shadow-hard-hover active:shadow-hard-active",
            secondary: "bg-white text-slate-800 shadow-hard-sm hover:shadow-hard hover:border-orange-500",
            outline: "bg-transparent text-slate-800 border-2 border-slate-800 hover:bg-slate-800 hover:text-white",
            ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-transparent"
        };
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    const variants = t4;
    let t5;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            sm: "px-4 py-2 text-sm min-h-[36px]",
            md: "px-5 py-2.5 text-sm min-h-[44px]",
            lg: "px-8 py-4 text-base min-h-[52px]"
        };
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    const sizes = t5;
    const t6 = `${"inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 rounded-full border-2 border-slate-800"} ${variants[variant]} ${sizes[size]} ${className}`;
    let t7;
    if ($[3] !== Icon) {
        t7 = Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 500,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = Icon;
        $[4] = t7;
    } else {
        t7 = $[4];
    }
    let t8;
    if ($[5] !== children || $[6] !== t6 || $[7] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t6,
            children: [
                children,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 508,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = children;
        $[6] = t6;
        $[7] = t7;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    return t8;
};
_c1 = Button;
const Card = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "1a5ca0b77bef6e5401ea2ec51f9fd8f8f13d4f735baee21b5470961ea8155487") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a5ca0b77bef6e5401ea2ec51f9fd8f8f13d4f735baee21b5470961ea8155487";
    }
    const { children, className: t1, hover: t2 } = t0;
    const className = t1 === undefined ? "" : t1;
    const hover = t2 === undefined ? false : t2;
    const t3 = `bg-white rounded-2xl border-2 border-slate-800 shadow-hard ${hover ? "hover:shadow-hard-hover animate-wiggle" : ""} ${className}`;
    let t4;
    if ($[1] !== children || $[2] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 536,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = children;
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    return t4;
};
_c2 = Card;
// Chat Demo Component with Auto-switching
const ChatDemoCard = ()=>{
    _s();
    const [activeScenario, setActiveScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visibleMessages, setVisibleMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-switch scenario every 15 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDemoCard.useEffect": ()=>{
            const scenarioTimer = setInterval({
                "ChatDemoCard.useEffect.scenarioTimer": ()=>{
                    setActiveScenario({
                        "ChatDemoCard.useEffect.scenarioTimer": (prev)=>(prev + 1) % chatScenarios.length
                    }["ChatDemoCard.useEffect.scenarioTimer"]);
                    setVisibleMessages([]);
                }
            }["ChatDemoCard.useEffect.scenarioTimer"], 15000);
            return ({
                "ChatDemoCard.useEffect": ()=>clearInterval(scenarioTimer)
            })["ChatDemoCard.useEffect"];
        }
    }["ChatDemoCard.useEffect"], []);
    // Animate messages one by one
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDemoCard.useEffect": ()=>{
            setVisibleMessages([]);
            let msgIndex = 0;
            const currentScenario = chatScenarios[activeScenario];
            const showNextMessage = {
                "ChatDemoCard.useEffect.showNextMessage": ()=>{
                    if (msgIndex < currentScenario.messages.length) {
                        setIsTyping(true);
                        setTimeout({
                            "ChatDemoCard.useEffect.showNextMessage": ()=>{
                                setVisibleMessages({
                                    "ChatDemoCard.useEffect.showNextMessage": (prev_0)=>[
                                            ...prev_0,
                                            msgIndex
                                        ]
                                }["ChatDemoCard.useEffect.showNextMessage"]);
                                setIsTyping(false);
                                msgIndex++;
                                setTimeout(showNextMessage, 1500);
                            }
                        }["ChatDemoCard.useEffect.showNextMessage"], 800);
                    }
                }
            }["ChatDemoCard.useEffect.showNextMessage"];
            const timer = setTimeout(showNextMessage, 500);
            return ({
                "ChatDemoCard.useEffect": ()=>clearTimeout(timer)
            })["ChatDemoCard.useEffect"];
        }
    }["ChatDemoCard.useEffect"], [
        activeScenario
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: 40
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6
        },
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            className: "p-0 shadow-2xl shadow-neutral-900/5 overflow-hidden h-full flex flex-col",
            hover: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-b border-neutral-100 bg-neutral-50/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 text-center",
                        children: "自然语言对话交互"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 594,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 593,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 p-6 pr-8 space-y-4 overflow-y-auto max-h-[400px] min-h-[300px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: visibleMessages.map((msgIdx)=>{
                                const currentScenario_0 = chatScenarios[activeScenario];
                                const msg = currentScenario_0.messages[msgIdx];
                                if (!msg) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    className: `flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-[85%] rounded-2xl px-5 py-3 text-sm whitespace-pre-line border-2 shadow-hard ${msg.role === 'user' ? 'bg-orange-500 text-white border-orange-500 shadow-hard-hover' : 'bg-white text-slate-800 border-slate-800 shadow-hard-sm'}`,
                                        children: msg.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, `${activeScenario}-${msgIdx}`, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 606,
                                    columnNumber: 20
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 601,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "flex justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl px-4 py-3 flex items-center gap-1 border-2 border-slate-800 shadow-hard-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce",
                                        style: {
                                            animationDelay: '0ms'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 634,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce",
                                        style: {
                                            animationDelay: '150ms'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 637,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce",
                                        style: {
                                            animationDelay: '300ms'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 640,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 633,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 628,
                            columnNumber: 24
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 600,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-t-2 border-slate-100 bg-slate-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 justify-center",
                        children: chatScenarios.map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveScenario(idx);
                                    setVisibleMessages([]);
                                },
                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border-2 transition-all ${idx === activeScenario ? `${s.color} border-orange-500` : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:text-white hover:border-orange-500'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 654,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(`chatScenarios.${s.id}`, currentLang)
                                ]
                            }, s.id, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 650,
                                columnNumber: 44
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 649,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 648,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 591,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 580,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChatDemoCard, "WdxurFU7BlR1Y3RjeUfAbFb7R1Q=");
_c3 = ChatDemoCard;
const SectionHeader = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "1a5ca0b77bef6e5401ea2ec51f9fd8f8f13d4f735baee21b5470961ea8155487") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a5ca0b77bef6e5401ea2ec51f9fd8f8f13d4f735baee21b5470961ea8155487";
    }
    const { label, title, description, light: t1 } = t0;
    const light = t1 === undefined ? false : t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 20
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        t4 = {
            once: true
        };
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
    } else {
        t2 = $[1];
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] !== label || $[5] !== light) {
        t5 = label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${light ? "text-neutral-500" : "text-orange-500"}`,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 702,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = label;
        $[5] = light;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = `text-3xl md:text-4xl font-bold ${light ? "text-white" : "text-neutral-900"}`;
    let t7;
    if ($[7] !== t6 || $[8] !== title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: t6,
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 712,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
        $[8] = title;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-8 -right-8 w-16 h-16 rounded-full bg-orange-500/10 -z-10"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 722,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-4 -left-4 w-8 h-8 bg-orange-500/20 rounded-full -z-10"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 723,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t8;
        $[11] = t9;
    } else {
        t8 = $[10];
        t9 = $[11];
    }
    let t10;
    if ($[12] !== description || $[13] !== light) {
        t10 = description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `mt-6 text-lg leading-relaxed ${light ? "text-neutral-400" : "text-neutral-600"}`,
            children: description
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 732,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = description;
        $[13] = light;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t10 || $[16] !== t5 || $[17] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            whileInView: t3,
            viewport: t4,
            className: "text-center max-w-2xl mx-auto mb-16 relative",
            children: [
                t5,
                t7,
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 741,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t10;
        $[16] = t5;
        $[17] = t7;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    return t11;
};
_c4 = SectionHeader;
function Home() {
    _s1();
    const [activeStrategy, setActiveStrategy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('transfer');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleMessages, setVisibleMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openFaqIndex, setOpenFaqIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentLang1, setCurrentLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('zh');
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    const backgroundY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "30%"
    ]);
    const heroOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3
    ], [
        1,
        0
    ]);
    const copyCommand = ()=>{
        navigator.clipboard.writeText('claw install wallet');
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    // 自动切换策略标签
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const strategyTypes = [
                'create',
                'market',
                'price',
                'arbitrage',
                'mining',
                'meme',
                'ipo',
                'perps',
                'audit',
                'transfer',
                'defi',
                'dca',
                'copy',
                'staking',
                'lending'
            ];
            let currentIndex = strategyTypes.indexOf(activeStrategy);
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    currentIndex = (currentIndex + 1) % strategyTypes.length;
                    setActiveStrategy(strategyTypes[currentIndex]);
                }
            }["Home.useEffect.interval"], 10000); // 每10秒切换一次
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        activeStrategy
    ]);
    // 当策略变化时，重新显示消息
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setVisibleMessages([]);
            setIsTyping(false); // 重置打字状态
            let msgIndex = 0;
            let timers = [];
            const currentChatContent = strategyDescriptions[activeStrategy].chatContent;
            const showNextMessage = {
                "Home.useEffect.showNextMessage": ()=>{
                    if (msgIndex < currentChatContent.messages.length) {
                        setIsTyping(true);
                        const timer1 = setTimeout({
                            "Home.useEffect.showNextMessage.timer1": ()=>{
                                setVisibleMessages({
                                    "Home.useEffect.showNextMessage.timer1": (prev)=>[
                                            ...prev,
                                            msgIndex
                                        ]
                                }["Home.useEffect.showNextMessage.timer1"]);
                                setIsTyping(false);
                                msgIndex++;
                                const timer2 = setTimeout(showNextMessage, 1500);
                                timers.push(timer2);
                            }
                        }["Home.useEffect.showNextMessage.timer1"], 800);
                        timers.push(timer1);
                    }
                }
            }["Home.useEffect.showNextMessage"];
            const timer = setTimeout(showNextMessage, 500);
            timers.push(timer);
            return ({
                "Home.useEffect": ()=>{
                    timers.forEach({
                        "Home.useEffect": (t)=>clearTimeout(t)
                    }["Home.useEffect"]);
                    setIsTyping(false); // 清理时也重置打字状态
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        activeStrategy
    ]);
    // 消息会自动向上推，不需要手动滚动
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
        // 移除自动滚动功能，因为我们使用了 overflow-y-hidden
        }
    }["Home.useEffect"], [
        visibleMessages,
        isTyping
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: containerRef,
        className: "min-h-screen bg-white text-neutral-900 overflow-x-hidden selection:bg-red-100 selection:text-red-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.015]",
                        style: {
                            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                            backgroundSize: '80px 80px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 825,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            y: backgroundY
                        },
                        className: "absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-red-100/40 via-transparent to-transparent rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 829,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            y: backgroundY
                        },
                        className: "absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-red-100/30 via-transparent to-transparent rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 832,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 824,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    y: -100,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.8,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                className: "fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "/",
                            className: "flex items-center gap-3 group",
                            whileHover: {
                                scale: 1.02
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-10 w-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/claw.png",
                                    alt: "Claw",
                                    className: "h-full w-auto object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 856,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 855,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 852,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-1",
                            children: [
                                {
                                    key: 'nav.features',
                                    href: '#features'
                                },
                                {
                                    key: 'nav.security',
                                    href: '#security'
                                },
                                {
                                    key: 'nav.howItWorks',
                                    href: '#how-it-works'
                                },
                                {
                                    key: 'nav.login',
                                    href: '/dashboard'
                                }
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: item.href,
                                    initial: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.1 + i * 0.05
                                    },
                                    className: "px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 rounded-xl hover:bg-neutral-100/80 transition-all",
                                    whileHover: {
                                        y: -1
                                    },
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(item.key, currentLang1)
                                }, item.key, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 874,
                                    columnNumber: 31
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 861,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mr-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {
                                currentLang: currentLang1,
                                onLanguageChange: setCurrentLang
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 891,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 890,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "/dashboard",
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "px-5 py-2.5 text-sm font-medium bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:shadow-neutral-900/20",
                            whileHover: {
                                scale: 1.02,
                                y: -1
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('nav.createWallet', currentLang1)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 895,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 850,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 840,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                style: {
                    opacity: heroOpacity
                },
                className: "relative min-h-screen flex items-center pt-16 pb-20 px-6 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-32 left-10 w-20 h-20 rounded-full bg-orange-500/10 animate-float"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 921,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-48 right-20 w-12 h-12 rounded-full bg-orange-500/20 animate-float",
                        style: {
                            animationDelay: '0.5s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 922,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-40 left-1/4 w-8 h-8 rounded-full bg-orange-500/15 animate-float",
                        style: {
                            animationDelay: '1s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 925,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 right-1/4 w-4 h-4 bg-slate-800 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 928,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/3 left-20 w-6 h-6 bg-slate-800 rotate-45"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 929,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto w-full relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.6
                                    },
                                    className: "relative flex justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/claw.png",
                                            alt: "Claw Wallet",
                                            className: "h-12 w-auto mx-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 944,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 945,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 934,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.3,
                                        duration: 0.6
                                    },
                                    className: "mt-4 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]",
                                    children: [
                                        currentLang1 === 'zh' ? '让AI Agent' : 'Let AI Agent',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 960,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-orange-500",
                                            children: currentLang1 === 'zh' ? '拥有安全钱包' : 'Have a Secure Wallet'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 961,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 949,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.4,
                                        duration: 0.6
                                    },
                                    className: "mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl font-medium",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('hero.subtitle', currentLang1)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 966,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.6
                                    },
                                    className: "mt-8",
                                    id: "install",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-neutral-500 mb-3 font-medium",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('hero.copyHint', currentLang1)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 990,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "flex-1 flex items-center gap-3 px-5 py-4 bg-slate-800 rounded-full border-2 border-slate-800 shadow-hard",
                                                    whileHover: {
                                                        scale: 1.01
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 400
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                            className: "w-4 h-4 text-orange-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 998,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-white font-mono text-sm tracking-wide",
                                                            children: "claw install wallet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 999,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 992,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    onClick: copyCommand,
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    className: "px-4 py-4 bg-white rounded-full border-2 border-slate-800 shadow-hard-sm hover:shadow-hard transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                        mode: "wait",
                                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                scale: 0
                                                            },
                                                            animate: {
                                                                scale: 1
                                                            },
                                                            exit: {
                                                                scale: 0
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-5 h-5 text-green-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1014,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, "check", false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1007,
                                                            columnNumber: 33
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                scale: 0
                                                            },
                                                            animate: {
                                                                scale: 1
                                                            },
                                                            exit: {
                                                                scale: 0
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "w-5 h-5 text-neutral-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1022,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, "copy", false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1015,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 991,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 980,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.7,
                                        duration: 0.6
                                    },
                                    className: "mt-10 flex items-center gap-8",
                                    children: [
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('trust.selfCustody', currentLang1)
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
                                            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('trust.teeEncryption', currentLang1)
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"],
                                            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('trust.aiSecurity', currentLang1)
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                                            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('trust.naturalLanguage', currentLang1)
                                        }
                                    ].map((item_0, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.8 + i_0 * 0.1
                                            },
                                            className: "flex items-center gap-2 text-sm text-neutral-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item_0.icon, {
                                                    className: "w-4 h-4 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item_0.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i_0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1050,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1030,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 932,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 931,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1.5
                        },
                        className: "absolute bottom-8 left-1/2 -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                y: [
                                    0,
                                    8,
                                    0
                                ]
                            },
                            transition: {
                                repeat: Infinity,
                                duration: 2
                            },
                            className: "flex flex-col items-center gap-2 text-neutral-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1080,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1074,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1067,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 917,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-6 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                            className: "text-3xl md:text-4xl font-bold",
                            children: currentLang1 === 'zh' ? 'Claw Wallet 适合哪些人' : 'Who is Claw Wallet for'
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1090,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-neutral-500",
                            children: currentLang1 === 'zh' ? '为不同类型的用户提供专业的加密资产安全管理方案' : 'Professional crypto asset security management solutions for different types of users'
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-wrap justify-center gap-3",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('whoFor.openClawUsers', currentLang1),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('whoFor.aiAgent', currentLang1),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('whoFor.web3NewUsers', currentLang1),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('whoFor.cryptoInvestors', currentLang1),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('whoFor.defiUsers', currentLang1),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('whoFor.traders', currentLang1),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('whoFor.aiTeams', currentLang1),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('whoFor.blockchainDevelopers', currentLang1),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('whoFor.institutionalUsers', currentLang1),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('whoFor.crossBorderSmes', currentLang1)
                            ].map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-5 py-2.5 bg-white border-2 border-slate-800 text-slate-800 rounded-full text-sm font-bold hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all shadow-sm hover:shadow-hard",
                                    children: tag
                                }, index, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1103,
                                    columnNumber: 428
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1089,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1088,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 px-6 bg-slate-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -40
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.6
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: currentLang1 === 'zh' ? '给你的 AI Agent' : 'Give your AI Agent'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-orange-500",
                                                    children: currentLang1 === 'zh' ? '安装 Claw Wallet' : 'Install Claw Wallet'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-800",
                                                    children: currentLang1 === 'zh' ? '它将会帮你' : 'It will help you'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1132,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-neutral-600 mt-6",
                                            children: currentLang1 === 'zh' ? '通过简单的 Skill 安装，你的 AI Agent 就能拥有完整的钱包能力，一切都在安全可控的环境中完成。' : 'With a simple Skill installation, your AI Agent can have full wallet capabilities, all in a secure and controlled environment.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                delay: 0.2,
                                                duration: 0.6
                                            },
                                            className: "mt-8 flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('create'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'create' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.create', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('market'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'market' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.market', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('price'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'price' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.price', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('arbitrage'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'arbitrage' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.arbitrage', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('mining'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'mining' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.mining', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1157,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('meme'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'meme' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.meme', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1158,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('ipo'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'ipo' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.ipo', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1159,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('perps'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'perps' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.perps', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('audit'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'audit' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.audit', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('transfer'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'transfer' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.transfer', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('defi'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'defi' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.defi', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1163,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('dca'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'dca' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.dca', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('copy'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'copy' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.copy', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1165,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('staking'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'staking' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.staking', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1166,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveStrategy('lending'),
                                                    className: `px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${activeStrategy === 'lending' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-800 border-slate-800 hover:bg-orange-500 hover:border-orange-500 hover:text-white'}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('strategies.lending', currentLang1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1167,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                delay: 0.3,
                                                duration: 0.6
                                            },
                                            className: "mt-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-neutral-500 mb-3 font-medium",
                                                    children: "发送给 OpenClaw 安装："
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1183,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: "flex-1 flex items-center gap-3 px-5 py-4 bg-neutral-900 rounded-xl shadow-xl shadow-neutral-900/20",
                                                            whileHover: {
                                                                scale: 1.01
                                                            },
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 400
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                                    className: "w-4 h-4 text-red-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1191,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-white font-mono text-sm tracking-wide",
                                                                    children: "claw install wallet"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1192,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1185,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                            onClick: copyCommand,
                                                            whileHover: {
                                                                scale: 1.05
                                                            },
                                                            whileTap: {
                                                                scale: 0.95
                                                            },
                                                            className: "px-4 py-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                                mode: "wait",
                                                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        scale: 0
                                                                    },
                                                                    animate: {
                                                                        scale: 1
                                                                    },
                                                                    exit: {
                                                                        scale: 0
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-5 h-5 text-green-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 1207,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, "check", false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1200,
                                                                    columnNumber: 35
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        scale: 0
                                                                    },
                                                                    animate: {
                                                                        scale: 1
                                                                    },
                                                                    exit: {
                                                                        scale: 0
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                        className: "w-5 h-5 text-neutral-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 1215,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, "copy", false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1208,
                                                                    columnNumber: 43
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1199,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1194,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1184,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                style: {
                                    height: '600px',
                                    width: '100%'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9,
                                        x: 50
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.6
                                    },
                                    style: {
                                        height: '100%',
                                        width: '100%'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6 flex flex-col",
                                        style: {
                                            height: '100%',
                                            width: '100%'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "wait",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -20
                                                },
                                                transition: {
                                                    duration: 0.4
                                                },
                                                className: "flex flex-col flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1,
                                                        overflowY: 'auto',
                                                        scrollbarWidth: 'none',
                                                        msOverflowStyle: 'none'
                                                    },
                                                    className: "jsx-4ee4e0b4a4aacc09" + " " + "messages-container space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            id: "4ee4e0b4a4aacc09",
                                                            children: ".messages-container.jsx-4ee4e0b4a4aacc09::-webkit-scrollbar{display:none}"
                                                        }, void 0, false, void 0, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0,
                                                                x: 20
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                x: 0
                                                            },
                                                            transition: {
                                                                duration: 0.3
                                                            },
                                                            className: "flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-4ee4e0b4a4aacc09" + " " + "max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line bg-orange-500 text-white border-2 border-orange-500 shadow-hard shadow-hard-hover",
                                                                children: strategyDescriptions[activeStrategy].chatContent.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1287,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, `title-${activeStrategy}`, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1278,
                                                            columnNumber: 27
                                                        }, this),
                                                        visibleMessages.map((msgIdx)=>{
                                                            const message = strategyDescriptions[activeStrategy].chatContent.messages[msgIdx];
                                                            if (!message) return null;
                                                            const isAI = msgIdx % 2 === 1; // AI messages are at odd indices (second, fourth, etc.)
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    x: isAI ? -20 : 20
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    x: 0
                                                                },
                                                                transition: {
                                                                    duration: 0.3
                                                                },
                                                                className: `flex ${isAI ? 'justify-start' : 'justify-end'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-4ee4e0b4a4aacc09" + " " + `max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line border-2 shadow-hard ${isAI ? 'bg-neutral-100 text-neutral-700 border-slate-800 shadow-hard-sm' : 'bg-orange-500 text-white border-orange-500 shadow-hard-hover'}`,
                                                                    children: message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 1306,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, msgIdx, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1297,
                                                                columnNumber: 32
                                                            }, this);
                                                        }),
                                                        isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                opacity: 1
                                                            },
                                                            className: "flex justify-start",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-4ee4e0b4a4aacc09" + " " + "bg-neutral-100 rounded-2xl px-4 py-3 flex items-center gap-1 border-2 border-slate-800 shadow-hard-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            animationDelay: '0ms'
                                                                        },
                                                                        className: "jsx-4ee4e0b4a4aacc09" + " " + "w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 1319,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            animationDelay: '150ms'
                                                                        },
                                                                        className: "jsx-4ee4e0b4a4aacc09" + " " + "w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 1322,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            animationDelay: '300ms'
                                                                        },
                                                                        className: "jsx-4ee4e0b4a4aacc09" + " " + "w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 1325,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1318,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1313,
                                                            columnNumber: 40
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1266,
                                                    columnNumber: 23
                                                }, this)
                                            }, activeStrategy, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1253,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1247,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1230,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1115,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 px-6 bg-slate-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: "推荐 Skills",
                            description: "选择适合你的技能，积累加密资产"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: [
                                {
                                    key: 'walletManager',
                                    installs: '12.5K'
                                },
                                {
                                    key: 'defiStrategist',
                                    installs: '8.2K'
                                },
                                {
                                    key: 'tradingAssistant',
                                    installs: '6.8K'
                                },
                                {
                                    key: 'portfolioTracker',
                                    installs: '15.3K'
                                },
                                {
                                    key: 'securityMonitor',
                                    installs: '9.1K'
                                },
                                {
                                    key: 'nftAggregator',
                                    installs: '5.4K'
                                }
                            ].map((skill, i_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        delay: i_1 * 0.1
                                    },
                                    className: "p-6 rounded-2xl bg-white border-2 border-slate-800 shadow-hard hover:shadow-hard-hover cursor-pointer group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-slate-800 group-hover:text-orange-500 transition-colors",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(`skills.${skill.key}.name`, currentLang1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1382,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1381,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-400 font-medium",
                                                            children: skill.installs
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1385,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                            className: "w-4 h-4 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1386,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1384,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1380,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-600 mt-3",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(`skills.${skill.key}.desc`, currentLang1)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1389,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, skill.key, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1369,
                                    columnNumber: 34
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1350,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1348,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "how-it-works",
                className: "py-32 px-6 bg-neutral-900 text-white relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1401,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1402,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                                className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-center mb-16",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('howItWorks.title', currentLang1)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1406,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-8",
                                children: [
                                    {
                                        step: '01',
                                        title: currentLang1 === 'zh' ? '安装 Skill' : 'Install Skill',
                                        desc: currentLang1 === 'zh' ? '复制命令并发送给 AI Agent 或 Openclaw' : 'Copy the command and send it to your AI Agent or Openclaw',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"],
                                        command: 'claw install wallet'
                                    },
                                    {
                                        step: '02',
                                        title: currentLang1 === 'zh' ? '创建钱包' : 'Create Wallet',
                                        desc: currentLang1 === 'zh' ? '通过自然语言让 AI Agent 创建钱包并在官网激活' : 'Use natural language to have your AI Agent create a wallet and activate it on the official website',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
                                        command: currentLang1 === 'zh' ? '帮我创建一个安全钱包' : 'Help me create a secure wallet'
                                    },
                                    {
                                        step: '03',
                                        title: currentLang1 === 'zh' ? '开始使用' : 'Start Using',
                                        desc: currentLang1 === 'zh' ? '使用自然语言指挥 AI Agent 执行各种操作' : 'Use natural language to direct your AI Agent to perform various operations',
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                        command: currentLang1 === 'zh' ? '查询余额并转账' : 'Check balance and transfer'
                                    }
                                ].map((item_1, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 40
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: idx * 0.15,
                                            duration: 0.6
                                        },
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-2 left-6 text-6xl font-black text-slate-800/10 select-none",
                                                children: item_1.step
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1449,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative p-8 rounded-2xl bg-white border-2 border-slate-800 shadow-hard hover:border-orange-500 hover:shadow-hard-hover transition-all h-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mb-6 shadow-hard-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item_1.icon, {
                                                            className: "w-7 h-7 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1452,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1451,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-slate-800 mb-3",
                                                        children: item_1.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1454,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-600 text-sm leading-relaxed mb-6",
                                                        children: item_1.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1455,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 rounded-full bg-slate-100 border-2 border-slate-800 font-mono text-sm text-slate-800",
                                                        children: [
                                                            '"',
                                                            item_1.command,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1456,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1450,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item_1.step, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1437,
                                        columnNumber: 35
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1418,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1405,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "security",
                className: "py-32 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-16 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -40
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
                                        children: [
                                            currentLang1 === 'zh' ? '安全至上，' : 'Security First, ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600",
                                                children: currentLang1 === 'zh' ? '层层防护' : 'Layered Protection'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1485,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1483,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 text-lg text-neutral-600 leading-relaxed",
                                        children: currentLang1 === 'zh' ? 'AI Agent 和加密资产是高价值目标。Claw Wallet 从设计之初就将安全作为核心，采用企业级安全架构保护你的资产。' : 'AI Agents and crypto assets are high-value targets. Claw Wallet was designed with security as the core, using enterprise-grade security architecture to protect your assets.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1489,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-neutral-600 leading-relaxed",
                                        children: [
                                            currentLang1 === 'zh' ? '不同于其他方案将私钥交给 Agent，Claw Wallet 采用' : 'Unlike other solutions that give private keys to Agents, Claw Wallet uses a ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-orange-500",
                                                children: currentLang1 === 'zh' ? '自托管架构' : 'self-custody architecture'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1493,
                                                columnNumber: 158
                                            }, this),
                                            currentLang1 === 'zh' ? '，私钥永远在你的控制之下。' : ', with private keys always under your control.'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1492,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10 grid grid-cols-2 gap-4",
                                        children: securityLayers.map((layer, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                    delay: idx_0 * 0.1
                                                },
                                                whileHover: {
                                                    scale: 1.02,
                                                    y: -2
                                                },
                                                className: "p-5 rounded-2xl bg-white border-2 border-slate-800 shadow-hard hover:border-orange-500 hover:shadow-hard-hover transition-all cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mb-4 shadow-hard-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(layer.icon, {
                                                            className: "w-6 h-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1512,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1511,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-slate-800",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(`security.layers.${idx_0}.title`, currentLang1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1514,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 mt-1 font-medium",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(`security.layers.${idx_0}.desc`, currentLang1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1515,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-400 mt-2",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(`security.layers.${idx_0}.detail`, currentLang1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1516,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx_0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1497,
                                                columnNumber: 55
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1496,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1471,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6
                                },
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-square rounded-3xl bg-gradient-to-br from-neutral-100 via-neutral-50 to-white border border-neutral-100 flex items-center justify-center overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-64 h-64",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        rotate: 360
                                                    },
                                                    transition: {
                                                        duration: 30,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    className: "absolute inset-0 rounded-full border-2 border-dashed border-red-200/60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1535,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        rotate: -360
                                                    },
                                                    transition: {
                                                        duration: 20,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    className: "absolute inset-8 rounded-full border-2 border-dashed border-red-300/60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1542,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        rotate: 360
                                                    },
                                                    transition: {
                                                        duration: 15,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    className: "absolute inset-16 rounded-full border-2 border-red-400/60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1549,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.1,
                                                            1
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    },
                                                    className: "absolute inset-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                        className: "w-12 h-12 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1563,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1556,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1534,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.8
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                delay: 0.5
                                            },
                                            animate: {
                                                y: [
                                                    0,
                                                    -8,
                                                    0
                                                ]
                                            },
                                            className: "absolute bottom-8 right-8 bg-white rounded-2xl p-5 shadow-hard border-2 border-slate-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            className: "w-6 h-6 text-green-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1583,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1582,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold text-neutral-900",
                                                                children: "100%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1586,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-neutral-500",
                                                                children: "自托管"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1587,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1585,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1581,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1568,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.8
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                delay: 0.7
                                            },
                                            animate: {
                                                y: [
                                                    0,
                                                    8,
                                                    0
                                                ]
                                            },
                                            className: "absolute top-8 left-8 bg-white rounded-2xl p-4 shadow-hard border-2 border-slate-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-full bg-green-500 animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1606,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-neutral-700",
                                                        children: "实时监控中"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1607,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1605,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1592,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1532,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1521,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1470,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1469,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1468,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 px-6 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-100/40 to-neutral-100/40 rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1622,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1621,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "max-w-3xl mx-auto text-center relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('cta.title', currentLang1)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1637,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-lg text-neutral-600 leading-relaxed",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('cta.subtitle', currentLang1)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1640,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-neutral-500 mb-4 font-medium",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('hero.copyHint', currentLang1)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1645,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-3 max-w-md mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "flex-1 flex items-center gap-3 px-5 py-4 bg-slate-800 rounded-full border-2 border-slate-800 shadow-hard",
                                                whileHover: {
                                                    scale: 1.01
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                        className: "w-4 h-4 text-orange-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1650,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-white font-mono text-sm tracking-wide",
                                                        children: "claw install wallet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1651,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1647,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                onClick: copyCommand,
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                className: "px-4 py-4 bg-white rounded-full border-2 border-slate-800 shadow-hard-sm hover:shadow-hard transition-all",
                                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-5 h-5 text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1658,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-5 h-5 text-neutral-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1658,
                                                    columnNumber: 74
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1653,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1646,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1644,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 flex flex-wrap justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        size: "lg",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
                                        children: currentLang1 === 'zh' ? '查看文档' : 'View Documentation'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1664,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        variant: "secondary",
                                        size: "lg",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
                                        children: "GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1665,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1663,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1625,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1619,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-6 bg-slate-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('faq.title', currentLang1)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1676,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1675,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                {
                                    q: currentLang1 === 'zh' ? '支持哪些区块链？' : 'Which blockchains are supported?',
                                    a: currentLang1 === 'zh' ? '支持 Bitcoin、Ethereum、BSC、SUI、Monad、Base、Solana 等 7 条主流区块链，覆盖主流 DeFi 与跨链场景' : 'Supports 7 mainstream blockchains including Bitcoin, Ethereum, BSC, SUI, Monad, Base, and Solana, covering mainstream DeFi and cross-chain scenarios'
                                },
                                {
                                    q: currentLang1 === 'zh' ? '需要注册吗？' : 'Do I need to register?',
                                    a: currentLang1 === 'zh' ? '安装 Skill 后需在官网激活钱包并绑定唯一 PIN 码，用于管理签名授权。整个过程不到 1 分钟' : 'After installing the Skill, you need to activate the wallet on the official website and bind a unique PIN for managing signature authorizations. The entire process takes less than 1 minute'
                                },
                                {
                                    q: currentLang1 === 'zh' ? '私钥如何保管？' : 'How are private keys stored?',
                                    a: currentLang1 === 'zh' ? '基于 AWS Nitro Enclaves 的 TEE 可信执行环境，私钥以分片加密形式存储于硬件隔离区域，AI Agent 无法触碰私钥。用户可选择导出私钥自行管理' : 'Based on AWS Nitro Enclaves TEE trusted execution environment, private keys are stored in hardware-isolated regions in sharded encrypted form. AI Agents cannot access private keys. Users can choose to export private keys for self-management'
                                },
                                {
                                    q: currentLang1 === 'zh' ? '交易安全如何保障？' : 'How is transaction security ensured?',
                                    a: currentLang1 === 'zh' ? '五层安全防护：额度限制、合约白名单、频率控制、审批流程、实时风控监测。高额交易需二次授权确认' : 'Five-layer security protection: limit restrictions, contract whitelist, frequency control, approval process, real-time risk control monitoring. High-value transactions require secondary authorization confirmation'
                                },
                                {
                                    q: currentLang1 === 'zh' ? '支持哪些 AI Agent？' : 'Which AI Agents are supported?',
                                    a: currentLang1 === 'zh' ? '支持 OpenClaw 等主流 AI Agent 平台，通过自然语言即可完成钱包创建、转账、DeFi 交易等全部链上操作' : 'Supports mainstream AI Agent platforms like OpenClaw, allowing you to complete all on-chain operations such as wallet creation, transfers, and DeFi transactions through natural language'
                                }
                            ].map((item_2, i_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl border-2 border-slate-800 shadow-hard overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setOpenFaqIndex(openFaqIndex === i_2 ? null : i_2),
                                            className: "w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-800",
                                                    children: item_2.q
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1696,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `w-5 h-5 text-orange-500 transition-transform ${openFaqIndex === i_2 ? 'rotate-180' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1697,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1695,
                                            columnNumber: 17
                                        }, this),
                                        openFaqIndex === i_2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-6 pb-4 border-t-2 border-slate-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm mt-3",
                                                children: item_2.a
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1700,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1699,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, i_2, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1694,
                                    columnNumber: 35
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1678,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1674,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1673,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-6 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                            title: currentLang1 === 'zh' ? '合作伙伴' : 'Partners'
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1712,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex animate-marquee",
                                children: [
                                    1,
                                    2
                                ].map((_, i_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-12 px-8 shrink-0",
                                        children: [
                                            {
                                                name: '0G',
                                                logo: '/Partners/0G.svg'
                                            },
                                            {
                                                name: 'AGOS',
                                                logo: '/Partners/AGOS.svg'
                                            },
                                            {
                                                name: 'CETUS',
                                                logo: '/Partners/CETUS.jpg'
                                            },
                                            {
                                                name: 'ClawRouter',
                                                logo: '/Partners/ClawRouter.png'
                                            },
                                            {
                                                name: 'Haedal',
                                                logo: '/Partners/Haedal.jpg'
                                            },
                                            {
                                                name: 'Clawdi',
                                                logo: '/Partners/clawdi.svg'
                                            },
                                            {
                                                name: 'Goo',
                                                logo: '/Partners/goo.svg'
                                            },
                                            {
                                                name: 'GoPlus',
                                                logo: '/Partners/goplus.svg'
                                            },
                                            {
                                                name: 'NoobClaw',
                                                logo: '/Partners/noobclaw.png'
                                            },
                                            {
                                                name: 'Pinai',
                                                logo: '/Partners/pinai.avif'
                                            },
                                            {
                                                name: 'Superpower',
                                                logo: '/Partners/superpower.jpg'
                                            },
                                            {
                                                name: 'TagClaw',
                                                logo: '/Partners/tagclaw.png'
                                            },
                                            {
                                                name: 'Ethereum',
                                                logo: '/logos/ethereum.png'
                                            },
                                            {
                                                name: 'Solana',
                                                logo: '/logos/solana.png'
                                            },
                                            {
                                                name: 'BSC',
                                                logo: '/logos/BSC.png'
                                            },
                                            {
                                                name: 'Polygon',
                                                logo: '/logos/polygon.png'
                                            },
                                            {
                                                name: 'Base',
                                                logo: '/logos/base.png'
                                            },
                                            {
                                                name: 'Sui',
                                                logo: '/logos/sui.png'
                                            },
                                            {
                                                name: 'Monad',
                                                logo: '/logos/monad.png'
                                            }
                                        ].map((partner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-12 w-32 transition-all duration-300 hover:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: partner.logo,
                                                    alt: partner.name,
                                                    className: "max-h-full max-w-full object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1774,
                                                    columnNumber: 23
                                                }, this)
                                            }, partner.name, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1773,
                                                columnNumber: 33
                                            }, this))
                                    }, i_3, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1715,
                                        columnNumber: 39
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1714,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1713,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1711,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1710,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-16 px-6 border-t border-neutral-100 bg-neutral-50/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-4 gap-12 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/",
                                            className: "flex items-center gap-2.5 mb-5 group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-10 w-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/claw.png",
                                                    alt: "Claw",
                                                    className: "h-full w-auto object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1789,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1788,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1787,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-neutral-500 max-w-sm leading-relaxed",
                                            children: currentLang1 === 'zh' ? '专为 AI Agent 构建的安全加密钱包。自托管、无私钥管理、智能风控。让 AI 安全地管理加密资产。' : 'A secure crypto wallet built for AI Agents. Self-custody, no private key management, intelligent risk control. Let AI securely manage crypto assets.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1792,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex items-center gap-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-neutral-400",
                                                        children: currentLang1 === 'zh' ? '安全审计由' : 'Security audit by'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1797,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/bitslab.png",
                                                        alt: "Bitslab",
                                                        className: "h-5 w-auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1798,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1796,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1795,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1786,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-sm mb-5 text-neutral-900",
                                            children: currentLang1 === 'zh' ? '产品' : 'Product'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1803,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-sm text-neutral-500",
                                            children: currentLang1 === 'zh' ? [
                                                '功能特性',
                                                '安全架构',
                                                '如何使用'
                                            ].map((item_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: item_3 === '如何使用' ? '#how-it-works' : '#',
                                                        className: "hover:text-neutral-900 transition-colors hover:translate-x-0.5 inline-block",
                                                        children: item_3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1806,
                                                        columnNumber: 23
                                                    }, this)
                                                }, item_3, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1805,
                                                    columnNumber: 80
                                                }, this)) : [
                                                'Features',
                                                'Security Architecture',
                                                'How It Works'
                                            ].map((item_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: item_4 === 'How It Works' ? '#how-it-works' : '#',
                                                        className: "hover:text-neutral-900 transition-colors hover:translate-x-0.5 inline-block",
                                                        children: item_4
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1810,
                                                        columnNumber: 23
                                                    }, this)
                                                }, item_4, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1809,
                                                    columnNumber: 98
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1804,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1802,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-sm mb-5 text-neutral-900",
                                            children: currentLang1 === 'zh' ? '开发者' : 'Developers'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1817,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-sm text-neutral-500",
                                            children: currentLang1 === 'zh' ? [
                                                '文档',
                                                'API 参考',
                                                'GitHub',
                                                'SDK'
                                            ].map((item_5)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-neutral-900 transition-colors hover:translate-x-0.5 inline-block",
                                                        children: item_5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1820,
                                                        columnNumber: 23
                                                    }, this)
                                                }, item_5, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1819,
                                                    columnNumber: 89
                                                }, this)) : [
                                                'Documentation',
                                                'API Reference',
                                                'GitHub',
                                                'SDK'
                                            ].map((item_6)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-neutral-900 transition-colors hover:translate-x-0.5 inline-block",
                                                        children: item_6
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1824,
                                                        columnNumber: 23
                                                    }, this)
                                                }, item_6, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1823,
                                                    columnNumber: 96
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1818,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1816,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1785,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-neutral-400",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('footer.copyright', currentLang1),
                                        ". All rights reserved."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1832,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-sm text-neutral-400 hover:text-neutral-600 transition-colors",
                                            children: currentLang1 === 'zh' ? '隐私政策' : 'Privacy Policy'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1834,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-sm text-neutral-400 hover:text-neutral-600 transition-colors",
                                            children: currentLang1 === 'zh' ? '服务条款' : 'Terms of Service'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1835,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-neutral-400 hover:text-neutral-900 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1838,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1837,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-neutral-400 hover:text-neutral-900 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1842,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1841,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1840,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-neutral-400 hover:text-neutral-900 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiscordIcon, {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1846,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1845,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1836,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1833,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1831,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1784,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1783,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 822,
        columnNumber: 10
    }, this);
}
_s1(Home, "Qs9qeHdxkqeQNQ2fydiNNwPXYZc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c5 = Home;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "DiscordIcon");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "Card");
__turbopack_context__.k.register(_c3, "ChatDemoCard");
__turbopack_context__.k.register(_c4, "SectionHeader");
__turbopack_context__.k.register(_c5, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_25966128._.js.map