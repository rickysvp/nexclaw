import {
  User, Wallet, Transaction, SecurityRule,
  Activity, DashboardStats, PendingTransaction,
  RiskRule, RiskLog, NotificationSettings
} from "@/types";

export const mockUser: User = {
  id: "user_001",
  firstName: "NexClaw用户",
  emailAddresses: [{ emailAddress: "user@nexclaw.com" }],
  createdAt: "2026-02-01T10:00:00Z",
};

export const mockWallets: Wallet[] = [
  {
    id: "1",
    name: "主钱包",
    description: "日常交易使用",
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    balance: "1.5 ETH",
    createdAt: "2026-02-01T10:00:00Z",
    uid: "agent_wallet_001",
    userId: "user_001",
  },
  {
    id: "2",
    name: "投资钱包",
    description: "用于投资交易",
    address: "0x8ba1f109551bD432803012645Hac136c82C3e8C",
    balance: "0.8 ETH",
    createdAt: "2026-02-15T14:30:00Z",
    uid: "agent_wallet_002",
    userId: "user_001",
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "tx1",
    type: "buy",
    token: "PEPE",
    amount: "0.1 ETH",
    status: "success",
    timestamp: "2026-02-28T10:30:00Z",
    walletId: "1",
    gasFee: "0.001 ETH",
    txHash: "0xabc123...",
  },
  {
    id: "tx2",
    type: "send",
    to: "0x1234...5678",
    amount: "0.05 ETH",
    status: "pending",
    timestamp: "2026-02-28T09:15:00Z",
    walletId: "1",
    gasFee: "0.001 ETH",
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
    txHash: "0xdef456...",
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
    txHash: "0xghi789...",
  },
];

export const mockSecurityRules: SecurityRule[] = [
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
        addedAt: "2026-02-01T10:00:00Z",
      },
    ],
    blacklistContracts: [],
    securityScore: 85,
    createdAt: "2026-02-01T10:00:00Z",
    updatedAt: "2026-02-28T10:00:00Z",
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
        addedAt: "2026-02-15T14:30:00Z",
      },
    ],
    securityScore: 75,
    createdAt: "2026-02-15T14:30:00Z",
    updatedAt: "2026-02-28T10:00:00Z",
  },
];

// 辅助函数：获取钱包的交易记录
export function getWalletTransactions(walletId: string): Transaction[] {
  return mockTransactions.filter((tx) => tx.walletId === walletId);
}

// 辅助函数：获取钱包的安全规则
export function getWalletSecurityRule(walletId: string): SecurityRule | undefined {
  return mockSecurityRules.find((rule) => rule.walletId === walletId);
}

// 辅助函数：计算钱包统计信息
export function getWalletStats(walletId: string) {
  const transactions = getWalletTransactions(walletId);
  const totalTransactions = transactions.length;
  const totalVolume = transactions
    .filter((tx) => tx.status === "success")
    .reduce((sum, tx) => sum + parseFloat(tx.amount), 0)
    .toFixed(3);
  const lastActivity =
    transactions.length > 0
      ? transactions[0].timestamp
      : mockWallets.find((w) => w.id === walletId)?.createdAt || "";

  return {
    totalTransactions,
    totalVolume: `${totalVolume} ETH`,
    lastActivity,
  };
}

// ============ Dashboard Mock Data ============

export const mockActivities: Activity[] = [
  {
    id: "act1",
    type: "transaction",
    title: "转账成功",
    description: "向 0x742d...0bEb 转账 0.5 ETH",
    timestamp: "2026-02-28T10:30:00Z",
    status: "success",
  },
  {
    id: "act2",
    type: "approval",
    title: "交易审批",
    description: "批准NexClaw Agent 的交易请求",
    timestamp: "2026-02-28T09:15:00Z",
    status: "success",
  },
  {
    id: "act3",
    type: "risk",
    title: "风控拦截",
    description: "拦截向可疑地址的转账 2.0 ETH",
    timestamp: "2026-02-28T08:45:00Z",
    status: "blocked",
  },
  {
    id: "act4",
    type: "wallet",
    title: "创建钱包",
    description: "成功创建新钱包 Agent Wallet #3",
    timestamp: "2026-02-27T16:30:00Z",
    status: "success",
  },
  {
    id: "act5",
    type: "transaction",
    title: "接收资金",
    description: "从 0x9876...5432 接收 0.5 ETH",
    timestamp: "2026-02-26T14:20:00Z",
    status: "success",
  },
  {
    id: "act6",
    type: "system",
    title: "安全提醒",
    description: "检测到异常登录活动，请检查账户安全",
    timestamp: "2026-02-26T10:00:00Z",
    status: "warning",
  },
];

export const mockDashboardStats: DashboardStats = {
  totalBalanceUSDC: 8450.00,
  balanceChange24h: 320.50,
  balanceChangePercent: 3.93,
  walletCount: 2,
  walletLimit: 15,
  todayTransactions: 12,
  todaySuccessRate: 91.7,
  pendingApprovals: 3,
  riskBlockedToday: 2,
  recentActivities: mockActivities,
};

// ============ Pending Transactions Mock Data ============

export const mockPendingTransactions: PendingTransaction[] = [
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
    description: "向交易所转账",
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
    triggeredRules: ["单笔金额超过 2 ETH"],
    status: "pending",
    createdAt: "2026-02-28T10:45:00Z",
    description: "Uniswap 代币兑换",
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
    triggeredRules: ["单笔金额超过 2 ETH", "合约交互风险", "新合约地址"],
    status: "pending",
    createdAt: "2026-02-28T10:30:00Z",
    description: "购买 BAYC NFT",
  },
];

// ============ Risk Control Mock Data ============

export const mockRiskRules: RiskRule[] = [
  {
    id: "rr1",
    name: "单笔交易限额",
    type: "amount_limit",
    enabled: true,
    config: { maxAmount: 2.0, unit: "ETH" },
    severity: "medium",
    description: "限制单笔交易的最大金额",
  },
  {
    id: "rr2",
    name: "日累计限额",
    type: "amount_limit",
    enabled: true,
    config: { maxAmount: 10.0, unit: "ETH" },
    severity: "high",
    description: "限制每日累计交易金额上限",
  },
  {
    id: "rr3",
    name: "小时频率限制",
    type: "frequency_limit",
    enabled: true,
    config: { maxCount: 5, window: "hour" },
    severity: "low",
    description: "限制每小时交易次数",
  },
  {
    id: "rr4",
    name: "可疑地址检测",
    type: "address_check",
    enabled: true,
    config: { checkBlacklist: true },
    severity: "high",
    description: "检测交易对手是否在黑名单中",
  },
  {
    id: "rr5",
    name: "异常行为检测",
    type: "behavior_check",
    enabled: true,
    config: { sensitivity: "medium" },
    severity: "medium",
    description: "基于AI检测异常交易行为模式",
  },
  {
    id: "rr6",
    name: "大额数据监控",
    type: "data_monitor",
    enabled: true,
    config: { threshold: 5000, unit: "USDC" },
    severity: "high",
    description: "监控链上大额资金流动数据",
  },
  {
    id: "rr7",
    name: "合约风险扫描",
    type: "contract_scan",
    enabled: true,
    config: { scanLevel: "deep" },
    severity: "high",
    description: "扫描交互合约的安全风险",
  },
  {
    id: "rr8",
    name: "跨链交易监控",
    type: "cross_chain",
    enabled: false,
    config: { bridges: ["all"] },
    severity: "medium",
    description: "监控跨链桥交易风险",
  },
];

export const mockRiskLogs: RiskLog[] = [
  {
    id: "rl1",
    transactionId: "tx_blocked_1",
    ruleId: "rr2",
    ruleName: "日累计限额",
    severity: "high",
    reason: "超过日累计限额 10 ETH",
    timestamp: "2026-02-28T08:45:00Z",
    status: "blocked",
  },
  {
    id: "rl2",
    transactionId: "tx_warning_1",
    ruleId: "rr4",
    ruleName: "可疑地址检测",
    severity: "medium",
    reason: "目标地址在黑名单中",
    timestamp: "2026-02-28T07:30:00Z",
    status: "warning",
  },
  {
    id: "rl3",
    transactionId: "pt3",
    ruleId: "rr1",
    ruleName: "单笔交易限额",
    severity: "medium",
    reason: "单笔金额 5 ETH 超过限额 2 ETH",
    timestamp: "2026-02-28T10:30:00Z",
    status: "blocked",
  },
];

export const mockNotificationSettings: NotificationSettings = {
  email: true,
  push: true,
  transactionAlerts: true,
  riskAlerts: true,
  approvalAlerts: true,
  dailyReport: false,
};

// ============ Auth Mock Data ============

import { AuthUser, AuthSession, ChartDataPoint, TransactionTypeData, AssetDistribution, AnalyticsSummary } from "@/types";

export const mockAuthUser: AuthUser = {
  id: "auth_user_001",
  email: "user@nexclaw.com",
  name: "NexClaw 用户",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nexclaw",
  role: "user",
  permissions: ["wallet:read", "wallet:write", "transaction:read", "transaction:write"],
  lastLoginAt: "2026-02-28T10:00:00Z",
  createdAt: "2026-01-15T08:00:00Z",
  twoFactorEnabled: false,
};

export const mockAuthSession: AuthSession = {
  user: mockAuthUser,
  token: "mock_jwt_token_12345",
  expiresAt: "2026-03-01T10:00:00Z",
};

// ============ Analytics Mock Data ============

export const mockAssetDistribution: AssetDistribution[] = [
  { token: "ETH", amount: 2.35, valueUSDC: 8225, percentage: 45.2 },
  { token: "USDC", amount: 4500, valueUSDC: 4500, percentage: 24.7 },
  { token: "USDT", amount: 3200, valueUSDC: 3200, percentage: 17.6 },
  { token: "WBTC", amount: 0.15, valueUSDC: 1800, percentage: 9.9 },
  { token: "LINK", amount: 45, valueUSDC: 475, percentage: 2.6 },
];

export const mockTotalAssetsHistory: ChartDataPoint[] = [
  { date: "02-22", value: 7200 },
  { date: "02-23", value: 7450 },
  { date: "02-24", value: 7380 },
  { date: "02-25", value: 7820 },
  { date: "02-26", value: 8100 },
  { date: "02-27", value: 8250 },
  { date: "02-28", value: 8450 },
];

export const mockTransactionVolumeHistory: ChartDataPoint[] = [
  { date: "02-22", value: 12500 },
  { date: "02-23", value: 8900 },
  { date: "02-24", value: 15200 },
  { date: "02-25", value: 11800 },
  { date: "02-26", value: 21300 },
  { date: "02-27", value: 16800 },
  { date: "02-28", value: 19500 },
];

export const mockTransactionTypeData: TransactionTypeData[] = [
  { type: "转账", count: 45, amount: 12500, percentage: 52.3 },
  { type: "兑换", count: 12, amount: 5600, percentage: 23.4 },
  { type: "合约交互", count: 8, amount: 3200, percentage: 13.4 },
  { type: "NFT交易", count: 5, amount: 2100, percentage: 8.8 },
  { type: "其他", count: 3, amount: 500, percentage: 2.1 },
];

export const mockDailyTransactions: ChartDataPoint[] = [
  { date: "02-22", value: 8 },
  { date: "02-23", value: 12 },
  { date: "02-24", value: 6 },
  { date: "02-25", value: 15 },
  { date: "02-26", value: 22 },
  { date: "02-27", value: 18 },
  { date: "02-28", value: 25 },
];

export const mockGasFeeHistory: ChartDataPoint[] = [
  { date: "02-22", value: 0.0012 },
  { date: "02-23", value: 0.0018 },
  { date: "02-24", value: 0.0015 },
  { date: "02-25", value: 0.0022 },
  { date: "02-26", value: 0.0028 },
  { date: "02-27", value: 0.0025 },
  { date: "02-28", value: 0.0031 },
];

export const mockAnalyticsSummary: AnalyticsSummary = {
  totalVolume7d: 106000,
  totalVolumeChange: 15.3,
  transactionCount7d: 86,
  transactionCountChange: 8.7,
  avgTransactionValue: 1232.56,
  avgGasFee: 0.0023,
  topToken: "ETH",
  topTokenVolume: 48500,
};
