(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWalletSecurityRule",
    ()=>getWalletSecurityRule,
    "getWalletStats",
    ()=>getWalletStats,
    "getWalletTransactions",
    ()=>getWalletTransactions,
    "mockActivities",
    ()=>mockActivities,
    "mockAlerts",
    ()=>mockAlerts,
    "mockAnalyticsSummary",
    ()=>mockAnalyticsSummary,
    "mockApprovalRules",
    ()=>mockApprovalRules,
    "mockAssetDistribution",
    ()=>mockAssetDistribution,
    "mockAuthSession",
    ()=>mockAuthSession,
    "mockAuthUser",
    ()=>mockAuthUser,
    "mockContacts",
    ()=>mockContacts,
    "mockDailyTransactions",
    ()=>mockDailyTransactions,
    "mockDashboardStats",
    ()=>mockDashboardStats,
    "mockGasFeeHistory",
    ()=>mockGasFeeHistory,
    "mockNotificationSettings",
    ()=>mockNotificationSettings,
    "mockPendingApprovals",
    ()=>mockPendingApprovals,
    "mockPendingTransactions",
    ()=>mockPendingTransactions,
    "mockRiskLogs",
    ()=>mockRiskLogs,
    "mockRiskRules",
    ()=>mockRiskRules,
    "mockSecurityRules",
    ()=>mockSecurityRules,
    "mockTotalAssetsHistory",
    ()=>mockTotalAssetsHistory,
    "mockTransactionTypeData",
    ()=>mockTransactionTypeData,
    "mockTransactionVolumeHistory",
    ()=>mockTransactionVolumeHistory,
    "mockTransactions",
    ()=>mockTransactions,
    "mockUser",
    ()=>mockUser,
    "mockWallets",
    ()=>mockWallets
]);
const mockUser = {
    id: "user_001",
    firstName: "NexClaw用户",
    emailAddresses: [
        {
            emailAddress: "user@nexclaw.com"
        }
    ],
    createdAt: "2026-02-01T10:00:00Z"
};
const mockWallets = [
    {
        id: "1",
        name: "主钱包",
        description: "日常交易使用",
        address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
        balance: "1.5 ETH",
        createdAt: "2026-02-01T10:00:00Z",
        uid: "agent_wallet_001",
        userId: "user_001"
    },
    {
        id: "2",
        name: "投资钱包",
        description: "用于投资交易",
        address: "0x8ba1f109551bD432803012645Hac136c82C3e8C",
        balance: "0.8 ETH",
        createdAt: "2026-02-15T14:30:00Z",
        uid: "agent_wallet_002",
        userId: "user_001"
    }
];
const mockTransactions = [
    {
        id: "tx1",
        type: "buy",
        token: "PEPE",
        amount: "0.1 ETH",
        status: "success",
        timestamp: "2026-02-28T10:30:00Z",
        walletId: "1",
        gasFee: "0.001 ETH",
        txHash: "0xabc123..."
    },
    {
        id: "tx2",
        type: "send",
        to: "0x1234...5678",
        amount: "0.05 ETH",
        status: "pending",
        timestamp: "2026-02-28T09:15:00Z",
        walletId: "1",
        gasFee: "0.001 ETH"
    },
    {
        id: "tx3",
        type: "buy",
        token: "DOGE",
        amount: "0.2 ETH",
        status: "success",
        timestamp: "2026-02-27T16:45:00Z",
        walletId: "2",
        gasFee: "0.001 ETH",
        txHash: "0xdef456..."
    },
    {
        id: "tx4",
        type: "receive",
        from: "0x9876...5432",
        amount: "0.5 ETH",
        status: "success",
        timestamp: "2026-02-26T14:20:00Z",
        walletId: "1",
        gasFee: "0",
        txHash: "0xghi789..."
    }
];
const mockSecurityRules = [
    {
        id: "sr1",
        walletId: "1",
        pinCode: "123456",
        maxAmountPerTx: "1.0",
        maxAmountPerDay: "5.0",
        whitelistAddresses: [
            {
                id: "wl1",
                address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
                name: "我的主钱包",
                addedAt: "2026-02-01T10:00:00Z"
            }
        ],
        blacklistContracts: [],
        securityScore: 85,
        createdAt: "2026-02-01T10:00:00Z",
        updatedAt: "2026-02-28T10:00:00Z"
    },
    {
        id: "sr2",
        walletId: "2",
        pinCode: "654321",
        maxAmountPerTx: "2.0",
        maxAmountPerDay: "10.0",
        whitelistAddresses: [],
        blacklistContracts: [
            {
                id: "bl1",
                address: "0x1234567890abcdef1234567890abcdef12345678",
                name: "可疑合约",
                reason: "已知钓鱼合约",
                addedAt: "2026-02-15T14:30:00Z"
            }
        ],
        securityScore: 75,
        createdAt: "2026-02-15T14:30:00Z",
        updatedAt: "2026-02-28T10:00:00Z"
    }
];
function getWalletTransactions(walletId) {
    return mockTransactions.filter((tx)=>tx.walletId === walletId);
}
function getWalletSecurityRule(walletId) {
    return mockSecurityRules.find((rule)=>rule.walletId === walletId);
}
function getWalletStats(walletId) {
    const transactions = getWalletTransactions(walletId);
    const totalTransactions = transactions.length;
    const totalVolume = transactions.filter((tx)=>tx.status === "success").reduce((sum, tx)=>sum + parseFloat(tx.amount), 0).toFixed(3);
    const lastActivity = transactions.length > 0 ? transactions[0].timestamp : mockWallets.find((w)=>w.id === walletId)?.createdAt || "";
    return {
        totalTransactions,
        totalVolume: `${totalVolume} ETH`,
        lastActivity
    };
}
const mockActivities = [
    {
        id: "act1",
        type: "transaction",
        title: "转账成功",
        description: "向 0x742d...0bEb 转账 0.5 ETH",
        timestamp: "2026-02-28T10:30:00Z",
        status: "success"
    },
    {
        id: "act2",
        type: "approval",
        title: "交易审批",
        description: "批准NexClaw Agent 的交易请求",
        timestamp: "2026-02-28T09:15:00Z",
        status: "success"
    },
    {
        id: "act3",
        type: "risk",
        title: "风控拦截",
        description: "拦截向可疑地址的转账 2.0 ETH",
        timestamp: "2026-02-28T08:45:00Z",
        status: "blocked"
    },
    {
        id: "act4",
        type: "wallet",
        title: "创建钱包",
        description: "成功创建新钱包 Agent Wallet #3",
        timestamp: "2026-02-27T16:30:00Z",
        status: "success"
    },
    {
        id: "act5",
        type: "transaction",
        title: "接收资金",
        description: "从 0x9876...5432 接收 0.5 ETH",
        timestamp: "2026-02-26T14:20:00Z",
        status: "success"
    },
    {
        id: "act6",
        type: "system",
        title: "安全提醒",
        description: "检测到异常登录活动，请检查账户安全",
        timestamp: "2026-02-26T10:00:00Z",
        status: "warning"
    }
];
const mockDashboardStats = {
    totalBalanceUSDC: 8450.00,
    balanceChange24h: 320.50,
    balanceChangePercent: 3.93,
    walletCount: 2,
    walletLimit: 15,
    todayTransactions: 12,
    todaySuccessRate: 91.7,
    pendingApprovals: 3,
    riskBlockedToday: 2,
    recentActivities: mockActivities
};
const mockPendingTransactions = [
    {
        id: "pt1",
        agentName: "NexClaw Trader",
        agentId: "agent_001",
        from: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
        to: "0x1234567890abcdef1234567890abcdef12345678",
        amount: "1.5",
        amountUSDC: "5,250.00",
        token: "ETH",
        gasEstimate: "0.002",
        type: "transfer",
        riskScore: 25,
        riskLevel: "low",
        triggeredRules: [],
        status: "pending",
        createdAt: "2026-02-28T11:00:00Z",
        description: "向交易所转账"
    },
    {
        id: "pt2",
        agentName: "NexClaw DeFi",
        agentId: "agent_002",
        from: "0x8ba1f109551bD432803012645Hac136c82C3e8C",
        to: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        amount: "3.0",
        amountUSDC: "10,500.00",
        token: "ETH",
        gasEstimate: "0.005",
        type: "swap",
        riskScore: 45,
        riskLevel: "medium",
        triggeredRules: [
            "单笔金额超过 2 ETH"
        ],
        status: "pending",
        createdAt: "2026-02-28T10:45:00Z",
        description: "Uniswap 代币兑换"
    },
    {
        id: "pt3",
        agentName: "NexClaw NFT",
        agentId: "agent_003",
        from: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
        to: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
        amount: "5.0",
        amountUSDC: "17,500.00",
        token: "ETH",
        gasEstimate: "0.008",
        type: "contract",
        riskScore: 75,
        riskLevel: "high",
        triggeredRules: [
            "单笔金额超过 2 ETH",
            "合约交互风险",
            "新合约地址"
        ],
        status: "pending",
        createdAt: "2026-02-28T10:30:00Z",
        description: "购买 BAYC NFT"
    }
];
const mockRiskRules = [
    {
        id: "rr1",
        name: "单笔交易限额",
        type: "amount_limit",
        enabled: true,
        config: {
            maxAmount: 2.0,
            unit: "ETH"
        },
        severity: "medium",
        description: "限制单笔交易的最大金额"
    },
    {
        id: "rr2",
        name: "日累计限额",
        type: "amount_limit",
        enabled: true,
        config: {
            maxAmount: 10.0,
            unit: "ETH"
        },
        severity: "high",
        description: "限制每日累计交易金额上限"
    },
    {
        id: "rr3",
        name: "小时频率限制",
        type: "frequency_limit",
        enabled: true,
        config: {
            maxCount: 5,
            window: "hour"
        },
        severity: "low",
        description: "限制每小时交易次数"
    },
    {
        id: "rr4",
        name: "可疑地址检测",
        type: "address_check",
        enabled: true,
        config: {
            checkBlacklist: true
        },
        severity: "high",
        description: "检测交易对手是否在黑名单中"
    },
    {
        id: "rr5",
        name: "异常行为检测",
        type: "behavior_check",
        enabled: true,
        config: {
            sensitivity: "medium"
        },
        severity: "medium",
        description: "基于AI检测异常交易行为模式"
    },
    {
        id: "rr6",
        name: "大额数据监控",
        type: "data_monitor",
        enabled: true,
        config: {
            threshold: 5000,
            unit: "USDC"
        },
        severity: "high",
        description: "监控链上大额资金流动数据"
    },
    {
        id: "rr7",
        name: "合约风险扫描",
        type: "contract_scan",
        enabled: true,
        config: {
            scanLevel: "deep"
        },
        severity: "high",
        description: "扫描交互合约的安全风险"
    },
    {
        id: "rr8",
        name: "跨链交易监控",
        type: "cross_chain",
        enabled: false,
        config: {
            bridges: [
                "all"
            ]
        },
        severity: "medium",
        description: "监控跨链桥交易风险"
    }
];
const mockRiskLogs = [
    {
        id: "rl1",
        transactionId: "tx_blocked_1",
        ruleId: "rr2",
        ruleName: "日累计限额",
        severity: "high",
        reason: "超过日累计限额 10 ETH",
        timestamp: "2026-02-28T08:45:00Z",
        status: "blocked"
    },
    {
        id: "rl2",
        transactionId: "tx_warning_1",
        ruleId: "rr4",
        ruleName: "可疑地址检测",
        severity: "medium",
        reason: "目标地址在黑名单中",
        timestamp: "2026-02-28T07:30:00Z",
        status: "warning"
    },
    {
        id: "rl3",
        transactionId: "pt3",
        ruleId: "rr1",
        ruleName: "单笔交易限额",
        severity: "medium",
        reason: "单笔金额 5 ETH 超过限额 2 ETH",
        timestamp: "2026-02-28T10:30:00Z",
        status: "blocked"
    }
];
const mockNotificationSettings = {
    email: true,
    push: true,
    transactionAlerts: true,
    riskAlerts: true,
    approvalAlerts: true,
    dailyReport: false
};
const mockAuthUser = {
    id: "auth_user_001",
    email: "user@nexclaw.com",
    name: "NexClaw 用户",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nexclaw",
    role: "user",
    permissions: [
        "wallet:read",
        "wallet:write",
        "transaction:read",
        "transaction:write"
    ],
    lastLoginAt: "2026-02-28T10:00:00Z",
    createdAt: "2026-01-15T08:00:00Z",
    twoFactorEnabled: false
};
const mockAuthSession = {
    user: mockAuthUser,
    token: "mock_jwt_token_12345",
    expiresAt: "2026-03-01T10:00:00Z"
};
const mockAssetDistribution = [
    {
        token: "ETH",
        amount: 2.35,
        valueUSDC: 8225,
        percentage: 45.2
    },
    {
        token: "USDC",
        amount: 4500,
        valueUSDC: 4500,
        percentage: 24.7
    },
    {
        token: "USDT",
        amount: 3200,
        valueUSDC: 3200,
        percentage: 17.6
    },
    {
        token: "WBTC",
        amount: 0.15,
        valueUSDC: 1800,
        percentage: 9.9
    },
    {
        token: "LINK",
        amount: 45,
        valueUSDC: 475,
        percentage: 2.6
    }
];
const mockTotalAssetsHistory = [
    {
        date: "02-22",
        value: 7200
    },
    {
        date: "02-23",
        value: 7450
    },
    {
        date: "02-24",
        value: 7380
    },
    {
        date: "02-25",
        value: 7820
    },
    {
        date: "02-26",
        value: 8100
    },
    {
        date: "02-27",
        value: 8250
    },
    {
        date: "02-28",
        value: 8450
    }
];
const mockTransactionVolumeHistory = [
    {
        date: "02-22",
        value: 12500
    },
    {
        date: "02-23",
        value: 8900
    },
    {
        date: "02-24",
        value: 15200
    },
    {
        date: "02-25",
        value: 11800
    },
    {
        date: "02-26",
        value: 21300
    },
    {
        date: "02-27",
        value: 16800
    },
    {
        date: "02-28",
        value: 19500
    }
];
const mockTransactionTypeData = [
    {
        type: "转账",
        count: 45,
        amount: 12500,
        percentage: 52.3
    },
    {
        type: "兑换",
        count: 12,
        amount: 5600,
        percentage: 23.4
    },
    {
        type: "合约交互",
        count: 8,
        amount: 3200,
        percentage: 13.4
    },
    {
        type: "NFT交易",
        count: 5,
        amount: 2100,
        percentage: 8.8
    },
    {
        type: "其他",
        count: 3,
        amount: 500,
        percentage: 2.1
    }
];
const mockDailyTransactions = [
    {
        date: "02-22",
        value: 8
    },
    {
        date: "02-23",
        value: 12
    },
    {
        date: "02-24",
        value: 6
    },
    {
        date: "02-25",
        value: 15
    },
    {
        date: "02-26",
        value: 22
    },
    {
        date: "02-27",
        value: 18
    },
    {
        date: "02-28",
        value: 25
    }
];
const mockGasFeeHistory = [
    {
        date: "02-22",
        value: 0.0012
    },
    {
        date: "02-23",
        value: 0.0018
    },
    {
        date: "02-24",
        value: 0.0015
    },
    {
        date: "02-25",
        value: 0.0022
    },
    {
        date: "02-26",
        value: 0.0028
    },
    {
        date: "02-27",
        value: 0.0025
    },
    {
        date: "02-28",
        value: 0.0031
    }
];
const mockAnalyticsSummary = {
    totalVolume7d: 106000,
    totalVolumeChange: 15.3,
    transactionCount7d: 86,
    transactionCountChange: 8.7,
    avgTransactionValue: 1232.56,
    avgGasFee: 0.0023,
    topToken: "ETH",
    topTokenVolume: 48500
};
const mockPendingApprovals = [
    {
        id: "pa1",
        agentName: "NexClaw Trader",
        agentId: "agent_001",
        from: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
        to: "0x1234567890abcdef1234567890abcdef12345678",
        amount: "1.5",
        amountUSDC: "5,250.00",
        token: "ETH",
        gasEstimate: "0.002",
        type: "transfer",
        riskScore: 25,
        riskLevel: "low",
        triggeredRules: [],
        status: "pending",
        createdAt: "2026-02-28T11:00:00Z",
        description: "向交易所转账"
    },
    {
        id: "pa2",
        agentName: "NexClaw DeFi",
        agentId: "agent_002",
        from: "0x8ba1f109551bD432803012645Hac136c82C3e8C",
        to: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        amount: "3.0",
        amountUSDC: "10,500.00",
        token: "ETH",
        gasEstimate: "0.005",
        type: "swap",
        riskScore: 45,
        riskLevel: "medium",
        triggeredRules: [
            "单笔金额超过 2 ETH"
        ],
        status: "pending",
        createdAt: "2026-02-28T10:45:00Z",
        description: "Uniswap 代币兑换"
    },
    {
        id: "pa3",
        agentName: "NexClaw NFT",
        agentId: "agent_003",
        from: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
        to: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
        amount: "5.0",
        amountUSDC: "17,500.00",
        token: "ETH",
        gasEstimate: "0.008",
        type: "contract",
        riskScore: 75,
        riskLevel: "high",
        triggeredRules: [
            "单笔金额超过 2 ETH",
            "合约交互风险",
            "新合约地址"
        ],
        status: "pending",
        createdAt: "2026-02-28T10:30:00Z",
        description: "购买 BAYC NFT"
    }
];
const mockApprovalRules = [
    {
        id: "ar1",
        name: "单笔交易限额",
        description: "限制单笔交易的最大金额",
        enabled: true,
        maxAmount: 2.0,
        maxFrequency: 5,
        requireApproval: true,
        approvalTimeout: 30,
        createdAt: "2026-02-01T10:00:00Z",
        updatedAt: "2026-02-28T10:00:00Z"
    },
    {
        id: "ar2",
        name: "日累计限额",
        description: "限制每日累计交易金额上限",
        enabled: true,
        maxAmount: 10.0,
        maxFrequency: 50,
        requireApproval: false,
        approvalTimeout: null,
        createdAt: "2026-02-01T10:00:00Z",
        updatedAt: "2026-02-28T10:00:00Z"
    },
    {
        id: "ar3",
        name: "大额交易审批",
        description: "超过3 ETH的交易需要二次审批",
        enabled: true,
        maxAmount: 3.0,
        requireApproval: true,
        approvalTimeout: 60,
        createdAt: "2026-02-01T10:00:00Z",
        updatedAt: "2026-02-28T10:00:00Z"
    },
    {
        id: "ar4",
        name: "可疑地址检测",
        description: "检测交易对手是否在黑名单中",
        enabled: true,
        requireApproval: true,
        createdAt: "2026-02-01T10:00:00Z",
        updatedAt: "2026-02-28T10:00:00Z"
    },
    {
        id: "ar5",
        name: "新合约提醒",
        description: "交互新合约地址时发送提醒",
        enabled: true,
        requireApproval: false,
        createdAt: "2026-02-01T10:00:00Z",
        updatedAt: "2026-02-28T10:00:00Z"
    }
];
const mockAlerts = [
    {
        id: "alert1",
        type: "warning",
        title: "大额交易提醒",
        message: "检测到一笔 5 ETH 的交易正在等待审批",
        timestamp: "2026-02-28T10:30:00Z",
        isRead: false
    },
    {
        id: "alert2",
        type: "info",
        title: "钱包创建成功",
        message: "新钱包 \"投资钱包\" 已成功创建",
        timestamp: "2026-02-28T09:15:00Z",
        isRead: true
    },
    {
        id: "alert3",
        type: "error",
        title: "交易失败",
        message: "向 0xabc...def 的转账因 Gas 不足而失败",
        timestamp: "2026-02-27T16:45:00Z",
        isRead: true
    },
    {
        id: "alert4",
        type: "success",
        title: "审批通过",
        message: "NexClaw Trader 的交易请求已获批准",
        timestamp: "2026-02-27T14:20:00Z",
        isRead: true
    }
];
const mockContacts = [
    {
        id: "contact1",
        name: "我的冷钱包",
        address: "0x1234567890abcdef1234567890abcdef12345678",
        label: "personal",
        isFavorite: true,
        addedAt: "2026-02-01T10:00:00Z",
        lastUsedAt: "2026-02-28T10:00:00Z"
    },
    {
        id: "contact2",
        name: "交易所地址",
        address: "0x9876543210fedcba9876543210fedcba98765432",
        label: "exchange",
        isFavorite: true,
        addedAt: "2026-02-15T14:30:00Z",
        lastUsedAt: "2026-02-28T09:00:00Z"
    },
    {
        id: "contact3",
        name: "DeFi 协议",
        address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        label: "defi",
        isFavorite: false,
        addedAt: "2026-02-20T16:00:00Z",
        lastUsedAt: "2026-02-27T18:00:00Z"
    },
    {
        id: "contact4",
        name: "NFT 市场",
        address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
        label: "nft",
        isFavorite: false,
        addedAt: "2026-02-25T12:00:00Z",
        lastUsedAt: "2026-02-26T15:00:00Z"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AUTH_STORAGE_KEY = "agentswallet_auth";
function AuthProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "e941e2074140aa7724687330b392eb784c4955ce0ccd944310a5b4a03cd903e6") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e941e2074140aa7724687330b392eb784c4955ce0ccd944310a5b4a03cd903e6";
    }
    const { children } = t0;
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AuthProvider[useEffect()]": ()=>{
                const stored = localStorage.getItem(AUTH_STORAGE_KEY);
                if (stored) {
                    try {
                        const session = JSON.parse(stored);
                        if (new Date(session.expiresAt) > new Date()) {
                            setUser(session.user);
                        } else {
                            localStorage.removeItem(AUTH_STORAGE_KEY);
                        }
                    } catch  {
                        localStorage.removeItem(AUTH_STORAGE_KEY);
                    }
                }
                setIsLoading(false);
            }
        })["AuthProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "AuthProvider[login]": async (credentials)=>{
                setIsLoading(true);
                if (credentials.email === "admin@nexclaw.com" && credentials.password === "admin123") {
                    const session_0 = {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAuthSession"],
                        user: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAuthUser"],
                            lastLoginAt: new Date().toISOString()
                        }
                    };
                    if (credentials.rememberMe) {
                        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session_0));
                    } else {
                        sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session_0));
                    }
                    setUser(session_0.user);
                    setIsLoading(false);
                    return true;
                }
                setIsLoading(false);
                return false;
            }
        })["AuthProvider[login]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const login = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "AuthProvider[register]": async (data)=>{
                setIsLoading(true);
                const newUser = {
                    id: `user_${Date.now()}`,
                    email: data.email,
                    name: data.name,
                    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.email}`,
                    role: "user",
                    permissions: [
                        "read",
                        "write"
                    ],
                    lastLoginAt: new Date().toISOString(),
                    createdAt: new Date().toISOString(),
                    twoFactorEnabled: false
                };
                const session_1 = {
                    user: newUser,
                    token: `mock_token_${Date.now()}`,
                    expiresAt: new Date(Date.now() + 86400000).toISOString()
                };
                localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session_1));
                setUser(newUser);
                setIsLoading(false);
                return true;
            }
        })["AuthProvider[register]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const register = t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "AuthProvider[logout]": ()=>{
                localStorage.removeItem(AUTH_STORAGE_KEY);
                sessionStorage.removeItem(AUTH_STORAGE_KEY);
                setUser(null);
            }
        })["AuthProvider[logout]"];
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const logout = t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "AuthProvider[updateUser]": (updates)=>{
                setUser({
                    "AuthProvider[updateUser > setUser()]": (prev)=>{
                        if (!prev) {
                            return null;
                        }
                        const updated = {
                            ...prev,
                            ...updates
                        };
                        const stored_0 = localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY);
                        if (stored_0) {
                            const session_2 = JSON.parse(stored_0);
                            session_2.user = updated;
                            if (localStorage.getItem(AUTH_STORAGE_KEY)) {
                                localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session_2));
                            } else {
                                sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session_2));
                            }
                        }
                        return updated;
                    }
                }["AuthProvider[updateUser > setUser()]"]);
            }
        })["AuthProvider[updateUser]"];
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const updateUser = t6;
    let t7;
    if ($[7] !== user) {
        t7 = ({
            "AuthProvider[hasPermission]": (permission)=>{
                if (!user) {
                    return false;
                }
                if (user.role === "admin" || user.permissions.includes("all")) {
                    return true;
                }
                return user.permissions.includes(permission);
            }
        })["AuthProvider[hasPermission]"];
        $[7] = user;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const hasPermission = t7;
    const t8 = !!user;
    let t9;
    if ($[9] !== hasPermission || $[10] !== isLoading || $[11] !== t8 || $[12] !== user) {
        t9 = {
            user,
            isAuthenticated: t8,
            isLoading,
            login,
            register,
            logout,
            updateUser,
            hasPermission
        };
        $[9] = hasPermission;
        $[10] = isLoading;
        $[11] = t8;
        $[12] = user;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== children || $[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
            value: t9,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/lib/auth-context.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[14] = children;
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    return t10;
}
_s(AuthProvider, "YajQB7LURzRD+QP5gw0+K2TZIWA=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "e941e2074140aa7724687330b392eb784c4955ce0ccd944310a5b4a03cd903e6") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e941e2074140aa7724687330b392eb784c4955ce0ccd944310a5b4a03cd903e6";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/wallet-store.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletProvider",
    ()=>WalletProvider,
    "useWallet",
    ()=>useWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// Initial State
const initialState = {
    wallets: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockWallets"],
    transactions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockTransactions"],
    pendingTransactions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPendingTransactions"],
    riskRules: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRiskRules"],
    riskLogs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRiskLogs"],
    activities: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockActivities"],
    stats: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockDashboardStats"],
    isLoading: false,
    error: null
};
// Reducer
function walletReducer(state, action) {
    switch(action.type){
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'CREATE_WALLET':
            return {
                ...state,
                wallets: [
                    ...state.wallets,
                    action.payload
                ],
                stats: {
                    ...state.stats,
                    walletCount: state.stats.walletCount + 1
                }
            };
        case 'UPDATE_WALLET':
            return {
                ...state,
                wallets: state.wallets.map((w)=>w.id === action.payload.id ? action.payload : w)
            };
        case 'DELETE_WALLET':
            return {
                ...state,
                wallets: state.wallets.filter((w)=>w.id !== action.payload),
                stats: {
                    ...state.stats,
                    walletCount: state.stats.walletCount - 1
                }
            };
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [
                    action.payload,
                    ...state.transactions
                ]
            };
        case 'UPDATE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.map((t)=>t.id === action.payload.id ? action.payload : t)
            };
        case 'APPROVE_TRANSACTION':
            {
                const tx = state.pendingTransactions.find((t)=>t.id === action.payload);
                if (!tx) return state;
                const newTransaction = {
                    id: `tx_${Date.now()}`,
                    type: tx.type === 'transfer' ? 'send' : 'buy',
                    from: tx.from,
                    to: tx.to,
                    amount: tx.amount,
                    token: tx.token,
                    status: 'success',
                    timestamp: new Date().toISOString(),
                    walletId: tx.agentId,
                    gasFee: tx.gasEstimate,
                    txHash: `0x${Math.random().toString(16).slice(2, 34)}`
                };
                return {
                    ...state,
                    pendingTransactions: state.pendingTransactions.filter((t)=>t.id !== action.payload),
                    transactions: [
                        newTransaction,
                        ...state.transactions
                    ],
                    stats: {
                        ...state.stats,
                        pendingApprovals: state.stats.pendingApprovals - 1,
                        todayTransactions: state.stats.todayTransactions + 1
                    }
                };
            }
        case 'REJECT_TRANSACTION':
            return {
                ...state,
                pendingTransactions: state.pendingTransactions.filter((t)=>t.id !== action.payload),
                stats: {
                    ...state.stats,
                    pendingApprovals: state.stats.pendingApprovals - 1
                }
            };
        case 'UPDATE_RISK_RULE':
            return {
                ...state,
                riskRules: state.riskRules.map((r)=>r.id === action.payload.id ? action.payload : r)
            };
        case 'DELETE_RISK_RULE':
            return {
                ...state,
                riskRules: state.riskRules.filter((r)=>r.id !== action.payload)
            };
        case 'ADD_RISK_RULE':
            return {
                ...state,
                riskRules: [
                    ...state.riskRules,
                    action.payload
                ]
            };
        case 'ADD_RISK_LOG':
            return {
                ...state,
                riskLogs: [
                    action.payload,
                    ...state.riskLogs
                ]
            };
        case 'ADD_ACTIVITY':
            return {
                ...state,
                activities: [
                    action.payload,
                    ...state.activities
                ]
            };
        case 'UPDATE_STATS':
            return {
                ...state,
                stats: {
                    ...state.stats,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}
const WalletContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WalletProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "7a77b0247ed00efc35b6e07eb2a1e3809349137458f5815d5db5c44bb8b0090a") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7a77b0247ed00efc35b6e07eb2a1e3809349137458f5815d5db5c44bb8b0090a";
    }
    const { children } = t0;
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(walletReducer, initialState);
    let t1;
    if ($[1] !== state.stats.walletLimit || $[2] !== state.wallets.length) {
        t1 = ({
            "WalletProvider[createWallet]": async (name, description)=>{
                dispatch({
                    type: "SET_LOADING",
                    payload: true
                });
                await new Promise(_temp);
                if (state.wallets.length >= state.stats.walletLimit) {
                    dispatch({
                        type: "SET_ERROR",
                        payload: "\u5DF2\u8FBE\u5230\u94B1\u5305\u6570\u91CF\u4E0A\u9650"
                    });
                    dispatch({
                        type: "SET_LOADING",
                        payload: false
                    });
                    throw new Error("\u5DF2\u8FBE\u5230\u94B1\u5305\u6570\u91CF\u4E0A\u9650");
                }
                const newWallet = {
                    id: `wallet_${Date.now()}`,
                    name: name || `钱包 ${state.wallets.length + 1}`,
                    description,
                    address: `0x${Math.random().toString(16).slice(2, 42)}`,
                    balance: "0 ETH",
                    createdAt: new Date().toISOString(),
                    uid: `agent_wallet_${String(state.wallets.length + 1).padStart(3, "0")}`,
                    userId: "user_001",
                    status: "active"
                };
                dispatch({
                    type: "CREATE_WALLET",
                    payload: newWallet
                });
                dispatch({
                    type: "ADD_ACTIVITY",
                    payload: {
                        id: `act_${Date.now()}`,
                        type: "wallet",
                        title: "\u521B\u5EFA\u94B1\u5305",
                        description: `成功创建新钱包 ${newWallet.name}`,
                        timestamp: new Date().toISOString(),
                        status: "success"
                    }
                });
                dispatch({
                    type: "SET_LOADING",
                    payload: false
                });
                return newWallet;
            }
        })["WalletProvider[createWallet]"];
        $[1] = state.stats.walletLimit;
        $[2] = state.wallets.length;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const createWallet = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "WalletProvider[updateWallet]": (wallet)=>{
                dispatch({
                    type: "UPDATE_WALLET",
                    payload: wallet
                });
            }
        })["WalletProvider[updateWallet]"];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const updateWallet = t2;
    let t3;
    if ($[5] !== state.wallets) {
        t3 = ({
            "WalletProvider[deleteWallet]": async (id)=>{
                dispatch({
                    type: "SET_LOADING",
                    payload: true
                });
                await new Promise(_temp2);
                const wallet_0 = state.wallets.find({
                    "WalletProvider[deleteWallet > state.wallets.find()]": (w)=>w.id === id
                }["WalletProvider[deleteWallet > state.wallets.find()]"]);
                if (!wallet_0) {
                    dispatch({
                        type: "SET_ERROR",
                        payload: "\u94B1\u5305\u4E0D\u5B58\u5728"
                    });
                    dispatch({
                        type: "SET_LOADING",
                        payload: false
                    });
                    throw new Error("\u94B1\u5305\u4E0D\u5B58\u5728");
                }
                dispatch({
                    type: "DELETE_WALLET",
                    payload: id
                });
                dispatch({
                    type: "ADD_ACTIVITY",
                    payload: {
                        id: `act_${Date.now()}`,
                        type: "wallet",
                        title: "\u5220\u9664\u94B1\u5305",
                        description: `已删除钱包 ${wallet_0.name}`,
                        timestamp: new Date().toISOString(),
                        status: "success"
                    }
                });
                dispatch({
                    type: "SET_LOADING",
                    payload: false
                });
            }
        })["WalletProvider[deleteWallet]"];
        $[5] = state.wallets;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const deleteWallet = t3;
    let t4;
    if ($[7] !== state.wallets) {
        t4 = ({
            "WalletProvider[depositToWallet]": async (walletId, amount, token)=>{
                dispatch({
                    type: "SET_LOADING",
                    payload: true
                });
                await new Promise(_temp3);
                const wallet_1 = state.wallets.find({
                    "WalletProvider[depositToWallet > state.wallets.find()]": (w_0)=>w_0.id === walletId
                }["WalletProvider[depositToWallet > state.wallets.find()]"]);
                if (!wallet_1) {
                    dispatch({
                        type: "SET_ERROR",
                        payload: "\u94B1\u5305\u4E0D\u5B58\u5728"
                    });
                    dispatch({
                        type: "SET_LOADING",
                        payload: false
                    });
                    throw new Error("\u94B1\u5305\u4E0D\u5B58\u5728");
                }
                const currentBalance = parseFloat(wallet_1.balance.split(" ")[0]);
                const newBalance = currentBalance + parseFloat(amount);
                const updatedWallet = {
                    ...wallet_1,
                    balance: `${newBalance.toFixed(4)} ${token}`
                };
                dispatch({
                    type: "UPDATE_WALLET",
                    payload: updatedWallet
                });
                const transaction = {
                    id: `tx_${Date.now()}`,
                    type: "receive",
                    to: wallet_1.address,
                    amount: `${amount} ${token}`,
                    token,
                    status: "success",
                    timestamp: new Date().toISOString(),
                    walletId,
                    gasFee: "0",
                    txHash: `0x${Math.random().toString(16).slice(2, 34)}`
                };
                dispatch({
                    type: "ADD_TRANSACTION",
                    payload: transaction
                });
                dispatch({
                    type: "ADD_ACTIVITY",
                    payload: {
                        id: `act_${Date.now()}`,
                        type: "transaction",
                        title: "\u5145\u503C\u6210\u529F",
                        description: `向 ${wallet_1.name} 充值 ${amount} ${token}`,
                        timestamp: new Date().toISOString(),
                        status: "success"
                    }
                });
                dispatch({
                    type: "SET_LOADING",
                    payload: false
                });
            }
        })["WalletProvider[depositToWallet]"];
        $[7] = state.wallets;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const depositToWallet = t4;
    let t5;
    if ($[9] !== state.wallets) {
        t5 = ({
            "WalletProvider[transferFromWallet]": async (walletId_0, toAddress, amount_0, token_0)=>{
                dispatch({
                    type: "SET_LOADING",
                    payload: true
                });
                await new Promise(_temp4);
                const wallet_2 = state.wallets.find({
                    "WalletProvider[transferFromWallet > state.wallets.find()]": (w_1)=>w_1.id === walletId_0
                }["WalletProvider[transferFromWallet > state.wallets.find()]"]);
                if (!wallet_2) {
                    dispatch({
                        type: "SET_ERROR",
                        payload: "\u94B1\u5305\u4E0D\u5B58\u5728"
                    });
                    dispatch({
                        type: "SET_LOADING",
                        payload: false
                    });
                    throw new Error("\u94B1\u5305\u4E0D\u5B58\u5728");
                }
                const currentBalance_0 = parseFloat(wallet_2.balance.split(" ")[0]);
                const transferAmount = parseFloat(amount_0);
                if (currentBalance_0 < transferAmount) {
                    dispatch({
                        type: "SET_ERROR",
                        payload: "\u4F59\u989D\u4E0D\u8DB3"
                    });
                    dispatch({
                        type: "SET_LOADING",
                        payload: false
                    });
                    throw new Error("\u4F59\u989D\u4E0D\u8DB3");
                }
                const newBalance_0 = currentBalance_0 - transferAmount;
                const updatedWallet_0 = {
                    ...wallet_2,
                    balance: `${newBalance_0.toFixed(4)} ${token_0}`
                };
                dispatch({
                    type: "UPDATE_WALLET",
                    payload: updatedWallet_0
                });
                const transaction_0 = {
                    id: `tx_${Date.now()}`,
                    type: "send",
                    from: wallet_2.address,
                    to: toAddress,
                    amount: `${amount_0} ${token_0}`,
                    token: token_0,
                    status: "success",
                    timestamp: new Date().toISOString(),
                    walletId: walletId_0,
                    gasFee: "0.001 ETH",
                    txHash: `0x${Math.random().toString(16).slice(2, 34)}`
                };
                dispatch({
                    type: "ADD_TRANSACTION",
                    payload: transaction_0
                });
                dispatch({
                    type: "ADD_ACTIVITY",
                    payload: {
                        id: `act_${Date.now()}`,
                        type: "transaction",
                        title: "\u8F6C\u8D26\u6210\u529F",
                        description: `从 ${wallet_2.name} 转账 ${amount_0} ${token_0} 到 ${toAddress.slice(0, 6)}...${toAddress.slice(-4)}`,
                        timestamp: new Date().toISOString(),
                        status: "success"
                    }
                });
                dispatch({
                    type: "SET_LOADING",
                    payload: false
                });
            }
        })["WalletProvider[transferFromWallet]"];
        $[9] = state.wallets;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const transferFromWallet = t5;
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "WalletProvider[exportWalletKey]": async (walletId_1, password)=>{
                dispatch({
                    type: "SET_LOADING",
                    payload: true
                });
                await new Promise(_temp5);
                const mockPrivateKey = `0x${Math.random().toString(16).slice(2, 66)}`;
                dispatch({
                    type: "SET_LOADING",
                    payload: false
                });
                return mockPrivateKey;
            }
        })["WalletProvider[exportWalletKey]"];
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const exportWalletKey = t6;
    let t7;
    if ($[12] !== state.pendingTransactions) {
        t7 = ({
            "WalletProvider[approveTransaction]": async (id_0)=>{
                dispatch({
                    type: "SET_LOADING",
                    payload: true
                });
                await new Promise(_temp6);
                const tx = state.pendingTransactions.find({
                    "WalletProvider[approveTransaction > state.pendingTransactions.find()]": (t)=>t.id === id_0
                }["WalletProvider[approveTransaction > state.pendingTransactions.find()]"]);
                if (!tx) {
                    dispatch({
                        type: "SET_ERROR",
                        payload: "\u4EA4\u6613\u4E0D\u5B58\u5728"
                    });
                    dispatch({
                        type: "SET_LOADING",
                        payload: false
                    });
                    throw new Error("\u4EA4\u6613\u4E0D\u5B58\u5728");
                }
                dispatch({
                    type: "APPROVE_TRANSACTION",
                    payload: id_0
                });
                dispatch({
                    type: "ADD_ACTIVITY",
                    payload: {
                        id: `act_${Date.now()}`,
                        type: "approval",
                        title: "\u4EA4\u6613\u5BA1\u6279",
                        description: `批准了 ${tx.agentName} 的交易请求`,
                        timestamp: new Date().toISOString(),
                        status: "success"
                    }
                });
                dispatch({
                    type: "SET_LOADING",
                    payload: false
                });
            }
        })["WalletProvider[approveTransaction]"];
        $[12] = state.pendingTransactions;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const approveTransaction = t7;
    let t8;
    if ($[14] !== state.pendingTransactions) {
        t8 = ({
            "WalletProvider[rejectTransaction]": async (id_1, reason)=>{
                dispatch({
                    type: "SET_LOADING",
                    payload: true
                });
                await new Promise(_temp7);
                const tx_0 = state.pendingTransactions.find({
                    "WalletProvider[rejectTransaction > state.pendingTransactions.find()]": (t_0)=>t_0.id === id_1
                }["WalletProvider[rejectTransaction > state.pendingTransactions.find()]"]);
                if (!tx_0) {
                    dispatch({
                        type: "SET_ERROR",
                        payload: "\u4EA4\u6613\u4E0D\u5B58\u5728"
                    });
                    dispatch({
                        type: "SET_LOADING",
                        payload: false
                    });
                    throw new Error("\u4EA4\u6613\u4E0D\u5B58\u5728");
                }
                dispatch({
                    type: "REJECT_TRANSACTION",
                    payload: id_1
                });
                dispatch({
                    type: "ADD_ACTIVITY",
                    payload: {
                        id: `act_${Date.now()}`,
                        type: "approval",
                        title: "\u4EA4\u6613\u62D2\u7EDD",
                        description: `拒绝了 ${tx_0.agentName} 的交易请求${reason ? `: ${reason}` : ""}`,
                        timestamp: new Date().toISOString(),
                        status: "failed"
                    }
                });
                dispatch({
                    type: "SET_LOADING",
                    payload: false
                });
            }
        })["WalletProvider[rejectTransaction]"];
        $[14] = state.pendingTransactions;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const rejectTransaction = t8;
    let t9;
    if ($[16] !== state.riskRules) {
        t9 = ({
            "WalletProvider[updateRiskRule]": (ruleId, updates)=>{
                const rule = state.riskRules.find({
                    "WalletProvider[updateRiskRule > state.riskRules.find()]": (r)=>r.id === ruleId
                }["WalletProvider[updateRiskRule > state.riskRules.find()]"]);
                if (rule) {
                    dispatch({
                        type: "UPDATE_RISK_RULE",
                        payload: {
                            ...rule,
                            ...updates
                        }
                    });
                }
            }
        })["WalletProvider[updateRiskRule]"];
        $[16] = state.riskRules;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const updateRiskRule = t9;
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "WalletProvider[deleteRiskRule]": (ruleId_0)=>{
                dispatch({
                    type: "DELETE_RISK_RULE",
                    payload: ruleId_0
                });
            }
        })["WalletProvider[deleteRiskRule]"];
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    const deleteRiskRule = t10;
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "WalletProvider[addRiskRule]": (rule_0)=>{
                const newRule = {
                    ...rule_0,
                    id: `rule_${Date.now()}`
                };
                dispatch({
                    type: "ADD_RISK_RULE",
                    payload: newRule
                });
            }
        })["WalletProvider[addRiskRule]"];
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    const addRiskRule = t11;
    let t12;
    if ($[20] !== state.riskRules) {
        t12 = ({
            "WalletProvider[toggleRiskRule]": (ruleId_1)=>{
                const rule_1 = state.riskRules.find({
                    "WalletProvider[toggleRiskRule > state.riskRules.find()]": (r_0)=>r_0.id === ruleId_1
                }["WalletProvider[toggleRiskRule > state.riskRules.find()]"]);
                if (rule_1) {
                    dispatch({
                        type: "UPDATE_RISK_RULE",
                        payload: {
                            ...rule_1,
                            enabled: !rule_1.enabled
                        }
                    });
                }
            }
        })["WalletProvider[toggleRiskRule]"];
        $[20] = state.riskRules;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    const toggleRiskRule = t12;
    let t13;
    if ($[22] !== state.riskRules) {
        t13 = ({
            "WalletProvider[updateRiskRuleConfig]": (ruleId_2, config)=>{
                const rule_2 = state.riskRules.find({
                    "WalletProvider[updateRiskRuleConfig > state.riskRules.find()]": (r_1)=>r_1.id === ruleId_2
                }["WalletProvider[updateRiskRuleConfig > state.riskRules.find()]"]);
                if (rule_2) {
                    dispatch({
                        type: "UPDATE_RISK_RULE",
                        payload: {
                            ...rule_2,
                            config: {
                                ...rule_2.config,
                                ...config
                            }
                        }
                    });
                }
            }
        })["WalletProvider[updateRiskRuleConfig]"];
        $[22] = state.riskRules;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    const updateRiskRuleConfig = t13;
    let t14;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "WalletProvider[addActivity]": (activity)=>{
                dispatch({
                    type: "ADD_ACTIVITY",
                    payload: {
                        ...activity,
                        id: `act_${Date.now()}`,
                        timestamp: new Date().toISOString()
                    }
                });
            }
        })["WalletProvider[addActivity]"];
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    const addActivity = t14;
    let t15;
    if ($[25] !== approveTransaction || $[26] !== createWallet || $[27] !== deleteWallet || $[28] !== depositToWallet || $[29] !== rejectTransaction || $[30] !== state || $[31] !== toggleRiskRule || $[32] !== transferFromWallet || $[33] !== updateRiskRule || $[34] !== updateRiskRuleConfig) {
        t15 = {
            ...state,
            createWallet,
            updateWallet,
            deleteWallet,
            depositToWallet,
            transferFromWallet,
            exportWalletKey,
            approveTransaction,
            rejectTransaction,
            updateRiskRule,
            deleteRiskRule,
            addRiskRule,
            toggleRiskRule,
            updateRiskRuleConfig,
            addActivity
        };
        $[25] = approveTransaction;
        $[26] = createWallet;
        $[27] = deleteWallet;
        $[28] = depositToWallet;
        $[29] = rejectTransaction;
        $[30] = state;
        $[31] = toggleRiskRule;
        $[32] = transferFromWallet;
        $[33] = updateRiskRule;
        $[34] = updateRiskRuleConfig;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    const value = t15;
    let t16;
    if ($[36] !== children || $[37] !== value) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletContext.Provider, {
            value: value,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/lib/wallet-store.tsx",
            lineNumber: 808,
            columnNumber: 11
        }, this);
        $[36] = children;
        $[37] = value;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    return t16;
}
_s(WalletProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");
_c = WalletProvider;
function _temp7(resolve_5) {
    return setTimeout(resolve_5, 800);
}
function _temp6(resolve_4) {
    return setTimeout(resolve_4, 800);
}
function _temp5(resolve_3) {
    return setTimeout(resolve_3, 1000);
}
function _temp4(resolve_2) {
    return setTimeout(resolve_2, 2000);
}
function _temp3(resolve_1) {
    return setTimeout(resolve_1, 1500);
}
function _temp2(resolve_0) {
    return setTimeout(resolve_0, 800);
}
function _temp(resolve) {
    return setTimeout(resolve, 1000);
}
function useWallet() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "7a77b0247ed00efc35b6e07eb2a1e3809349137458f5815d5db5c44bb8b0090a") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7a77b0247ed00efc35b6e07eb2a1e3809349137458f5815d5db5c44bb8b0090a";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WalletContext);
    if (context === undefined) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
}
_s1(useWallet, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "WalletProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_6e5b7978._.js.map