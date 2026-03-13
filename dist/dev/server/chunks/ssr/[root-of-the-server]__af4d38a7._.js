module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        approvalTimeout: undefined,
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
}),
"[project]/src/lib/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AUTH_STORAGE_KEY = "agentswallet_auth";
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // 初始化时检查本地存储
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem(AUTH_STORAGE_KEY);
        if (stored) {
            try {
                const session = JSON.parse(stored);
                // 检查token是否过期
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
    }, []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (credentials)=>{
        setIsLoading(true);
        // 模拟验证（实际项目中应该调用后端API）
        if (credentials.email === "admin@nexclaw.com" && credentials.password === "admin123") {
            const session = {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAuthSession"],
                user: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAuthUser"],
                    lastLoginAt: new Date().toISOString()
                }
            };
            if (credentials.rememberMe) {
                localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
            } else {
                // 不记住则使用sessionStorage
                sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
            }
            setUser(session.user);
            setIsLoading(false);
            return true;
        }
        setIsLoading(false);
        return false;
    }, []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setIsLoading(true);
        // 模拟注册成功
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
        const session = {
            user: newUser,
            token: `mock_token_${Date.now()}`,
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        };
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
        setUser(newUser);
        setIsLoading(false);
        return true;
    }, []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        localStorage.removeItem(AUTH_STORAGE_KEY);
        sessionStorage.removeItem(AUTH_STORAGE_KEY);
        setUser(null);
    }, []);
    const updateUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((updates)=>{
        setUser((prev)=>{
            if (!prev) return null;
            const updated = {
                ...prev,
                ...updates
            };
            // 同时更新存储
            const stored = localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY);
            if (stored) {
                const session = JSON.parse(stored);
                session.user = updated;
                if (localStorage.getItem(AUTH_STORAGE_KEY)) {
                    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
                } else {
                    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
                }
            }
            return updated;
        });
    }, []);
    const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((permission)=>{
        if (!user) return false;
        if (user.role === "admin" || user.permissions.includes("all")) return true;
        return user.permissions.includes(permission);
    }, [
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated: !!user,
            isLoading,
            login,
            register,
            logout,
            updateUser,
            hasPermission
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/auth-context.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
}),
"[project]/src/lib/wallet-store.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletProvider",
    ()=>WalletProvider,
    "useWallet",
    ()=>useWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
// Initial State
const initialState = {
    wallets: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockWallets"],
    transactions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockTransactions"],
    pendingTransactions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPendingTransactions"],
    riskRules: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockRiskRules"],
    riskLogs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockRiskLogs"],
    activities: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockActivities"],
    stats: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockDashboardStats"],
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
const WalletContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WalletProvider({ children }) {
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(walletReducer, initialState);
    // Wallet Actions
    const createWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (name, description)=>{
        dispatch({
            type: 'SET_LOADING',
            payload: true
        });
        // Simulate API delay
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        if (state.wallets.length >= state.stats.walletLimit) {
            dispatch({
                type: 'SET_ERROR',
                payload: '已达到钱包数量上限'
            });
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
            throw new Error('已达到钱包数量上限');
        }
        const newWallet = {
            id: `wallet_${Date.now()}`,
            name: name || `钱包 ${state.wallets.length + 1}`,
            description,
            address: `0x${Math.random().toString(16).slice(2, 42)}`,
            balance: '0 ETH',
            createdAt: new Date().toISOString(),
            uid: `agent_wallet_${String(state.wallets.length + 1).padStart(3, '0')}`,
            userId: 'user_001',
            status: 'active'
        };
        dispatch({
            type: 'CREATE_WALLET',
            payload: newWallet
        });
        dispatch({
            type: 'ADD_ACTIVITY',
            payload: {
                id: `act_${Date.now()}`,
                type: 'wallet',
                title: '创建钱包',
                description: `成功创建新钱包 ${newWallet.name}`,
                timestamp: new Date().toISOString(),
                status: 'success'
            }
        });
        dispatch({
            type: 'SET_LOADING',
            payload: false
        });
        return newWallet;
    }, [
        state.wallets.length,
        state.stats.walletLimit
    ]);
    const updateWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((wallet)=>{
        dispatch({
            type: 'UPDATE_WALLET',
            payload: wallet
        });
    }, []);
    const deleteWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        dispatch({
            type: 'SET_LOADING',
            payload: true
        });
        // Simulate API delay
        await new Promise((resolve)=>setTimeout(resolve, 800));
        const wallet = state.wallets.find((w)=>w.id === id);
        if (!wallet) {
            dispatch({
                type: 'SET_ERROR',
                payload: '钱包不存在'
            });
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
            throw new Error('钱包不存在');
        }
        dispatch({
            type: 'DELETE_WALLET',
            payload: id
        });
        dispatch({
            type: 'ADD_ACTIVITY',
            payload: {
                id: `act_${Date.now()}`,
                type: 'wallet',
                title: '删除钱包',
                description: `已删除钱包 ${wallet.name}`,
                timestamp: new Date().toISOString(),
                status: 'success'
            }
        });
        dispatch({
            type: 'SET_LOADING',
            payload: false
        });
    }, [
        state.wallets
    ]);
    const depositToWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (walletId, amount, token)=>{
        dispatch({
            type: 'SET_LOADING',
            payload: true
        });
        await new Promise((resolve)=>setTimeout(resolve, 1500));
        const wallet = state.wallets.find((w)=>w.id === walletId);
        if (!wallet) {
            dispatch({
                type: 'SET_ERROR',
                payload: '钱包不存在'
            });
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
            throw new Error('钱包不存在');
        }
        // Update wallet balance
        const currentBalance = parseFloat(wallet.balance.split(' ')[0]);
        const newBalance = currentBalance + parseFloat(amount);
        const updatedWallet = {
            ...wallet,
            balance: `${newBalance.toFixed(4)} ${token}`
        };
        dispatch({
            type: 'UPDATE_WALLET',
            payload: updatedWallet
        });
        // Add transaction record
        const transaction = {
            id: `tx_${Date.now()}`,
            type: 'receive',
            to: wallet.address,
            amount: `${amount} ${token}`,
            token,
            status: 'success',
            timestamp: new Date().toISOString(),
            walletId,
            gasFee: '0',
            txHash: `0x${Math.random().toString(16).slice(2, 34)}`
        };
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
        dispatch({
            type: 'ADD_ACTIVITY',
            payload: {
                id: `act_${Date.now()}`,
                type: 'transaction',
                title: '充值成功',
                description: `向 ${wallet.name} 充值 ${amount} ${token}`,
                timestamp: new Date().toISOString(),
                status: 'success'
            }
        });
        dispatch({
            type: 'SET_LOADING',
            payload: false
        });
    }, [
        state.wallets
    ]);
    const transferFromWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (walletId, toAddress, amount, token)=>{
        dispatch({
            type: 'SET_LOADING',
            payload: true
        });
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        const wallet = state.wallets.find((w)=>w.id === walletId);
        if (!wallet) {
            dispatch({
                type: 'SET_ERROR',
                payload: '钱包不存在'
            });
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
            throw new Error('钱包不存在');
        }
        const currentBalance = parseFloat(wallet.balance.split(' ')[0]);
        const transferAmount = parseFloat(amount);
        if (currentBalance < transferAmount) {
            dispatch({
                type: 'SET_ERROR',
                payload: '余额不足'
            });
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
            throw new Error('余额不足');
        }
        // Update wallet balance
        const newBalance = currentBalance - transferAmount;
        const updatedWallet = {
            ...wallet,
            balance: `${newBalance.toFixed(4)} ${token}`
        };
        dispatch({
            type: 'UPDATE_WALLET',
            payload: updatedWallet
        });
        // Add transaction record
        const transaction = {
            id: `tx_${Date.now()}`,
            type: 'send',
            from: wallet.address,
            to: toAddress,
            amount: `${amount} ${token}`,
            token,
            status: 'success',
            timestamp: new Date().toISOString(),
            walletId,
            gasFee: '0.001 ETH',
            txHash: `0x${Math.random().toString(16).slice(2, 34)}`
        };
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
        dispatch({
            type: 'ADD_ACTIVITY',
            payload: {
                id: `act_${Date.now()}`,
                type: 'transaction',
                title: '转账成功',
                description: `从 ${wallet.name} 转账 ${amount} ${token} 到 ${toAddress.slice(0, 6)}...${toAddress.slice(-4)}`,
                timestamp: new Date().toISOString(),
                status: 'success'
            }
        });
        dispatch({
            type: 'SET_LOADING',
            payload: false
        });
    }, [
        state.wallets
    ]);
    const exportWalletKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (walletId, password)=>{
        dispatch({
            type: 'SET_LOADING',
            payload: true
        });
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        // Simulate key export
        const mockPrivateKey = `0x${Math.random().toString(16).slice(2, 66)}`;
        dispatch({
            type: 'SET_LOADING',
            payload: false
        });
        return mockPrivateKey;
    }, []);
    // Transaction Actions
    const approveTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        dispatch({
            type: 'SET_LOADING',
            payload: true
        });
        await new Promise((resolve)=>setTimeout(resolve, 800));
        const tx = state.pendingTransactions.find((t)=>t.id === id);
        if (!tx) {
            dispatch({
                type: 'SET_ERROR',
                payload: '交易不存在'
            });
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
            throw new Error('交易不存在');
        }
        dispatch({
            type: 'APPROVE_TRANSACTION',
            payload: id
        });
        dispatch({
            type: 'ADD_ACTIVITY',
            payload: {
                id: `act_${Date.now()}`,
                type: 'approval',
                title: '交易审批',
                description: `批准了 ${tx.agentName} 的交易请求`,
                timestamp: new Date().toISOString(),
                status: 'success'
            }
        });
        dispatch({
            type: 'SET_LOADING',
            payload: false
        });
    }, [
        state.pendingTransactions
    ]);
    const rejectTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, reason)=>{
        dispatch({
            type: 'SET_LOADING',
            payload: true
        });
        await new Promise((resolve)=>setTimeout(resolve, 800));
        const tx = state.pendingTransactions.find((t)=>t.id === id);
        if (!tx) {
            dispatch({
                type: 'SET_ERROR',
                payload: '交易不存在'
            });
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
            throw new Error('交易不存在');
        }
        dispatch({
            type: 'REJECT_TRANSACTION',
            payload: id
        });
        dispatch({
            type: 'ADD_ACTIVITY',
            payload: {
                id: `act_${Date.now()}`,
                type: 'approval',
                title: '交易拒绝',
                description: `拒绝了 ${tx.agentName} 的交易请求${reason ? `: ${reason}` : ''}`,
                timestamp: new Date().toISOString(),
                status: 'failed'
            }
        });
        dispatch({
            type: 'SET_LOADING',
            payload: false
        });
    }, [
        state.pendingTransactions
    ]);
    // Risk Actions
    const updateRiskRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ruleId, updates)=>{
        const rule = state.riskRules.find((r)=>r.id === ruleId);
        if (rule) {
            dispatch({
                type: 'UPDATE_RISK_RULE',
                payload: {
                    ...rule,
                    ...updates
                }
            });
        }
    }, [
        state.riskRules
    ]);
    const deleteRiskRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ruleId)=>{
        dispatch({
            type: 'DELETE_RISK_RULE',
            payload: ruleId
        });
    }, []);
    const addRiskRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((rule)=>{
        const newRule = {
            ...rule,
            id: `rule_${Date.now()}`
        };
        dispatch({
            type: 'ADD_RISK_RULE',
            payload: newRule
        });
    }, []);
    const toggleRiskRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ruleId)=>{
        const rule = state.riskRules.find((r)=>r.id === ruleId);
        if (rule) {
            dispatch({
                type: 'UPDATE_RISK_RULE',
                payload: {
                    ...rule,
                    enabled: !rule.enabled
                }
            });
        }
    }, [
        state.riskRules
    ]);
    const updateRiskRuleConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ruleId, config)=>{
        const rule = state.riskRules.find((r)=>r.id === ruleId);
        if (rule) {
            dispatch({
                type: 'UPDATE_RISK_RULE',
                payload: {
                    ...rule,
                    config: {
                        ...rule.config,
                        ...config
                    }
                }
            });
        }
    }, [
        state.riskRules
    ]);
    // Activity Actions
    const addActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((activity)=>{
        dispatch({
            type: 'ADD_ACTIVITY',
            payload: {
                ...activity,
                id: `act_${Date.now()}`,
                timestamp: new Date().toISOString()
            }
        });
    }, []);
    const value = {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/wallet-store.tsx",
        lineNumber: 514,
        columnNumber: 5
    }, this);
}
function useWallet() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__af4d38a7._.js.map