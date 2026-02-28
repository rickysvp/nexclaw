// 用户类型
export interface User {
  id: string;
  firstName: string;
  emailAddresses: {
    emailAddress: string;
  }[];
  createdAt: string;
}

// 钱包类型
export interface Wallet {
  id: string;
  name?: string;
  description?: string;
  address: string;
  balance: string;
  createdAt: string;
  uid: string;
  userId: string;
  status?: 'active' | 'expired' | 'frozen';
  lastActivity?: string;
}

// 钱包详情类型
export interface WalletDetails extends Wallet {
  transactions: Transaction[];
  stats: {
    totalTransactions: number;
    totalVolume: string;
    lastActivity: string;
  };
}

// 交易类型
export interface Transaction {
  id: string;
  type: 'buy' | 'send' | 'receive';
  token?: string;
  to?: string;
  from?: string;
  amount: string;
  status: 'success' | 'pending' | 'failed';
  timestamp: string;
  walletId: string;
  walletName?: string;
  gasFee?: string;
  txHash?: string;
  description?: string;
}

// 白名单地址类型
export interface WhitelistAddress {
  id: string;
  address: string;
  name: string;
  addedAt: string;
}

// 黑名单合约类型
export interface BlacklistContract {
  id: string;
  address: string;
  name: string;
  reason?: string;
  addedAt: string;
}

// 安全规则类型
export interface SecurityRule {
  id: string;
  walletId: string;
  pinCode?: string;
  maxAmountPerTx?: string;
  maxAmountPerDay?: string;
  whitelistAddresses: WhitelistAddress[];
  blacklistContracts: BlacklistContract[];
  securityScore: number;
  createdAt: string;
  updatedAt: string;
}

// 转账请求类型
export interface TransferRequest {
  fromWalletId: string;
  toAddress: string;
  amount: string;
  token: string;
  gasPrice?: string;
}

// 转账结果类型
export interface TransferResult {
  success: boolean;
  transactionId?: string;
  error?: string;
  status: 'pending' | 'success' | 'failed';
}

// 套餐类型
export interface Plan {
  name: string;
  price: string;
  walletLimit: number;
  features: string[];
}

// 活动记录类型
export interface Activity {
  id: string;
  type: 'transaction' | 'approval' | 'risk' | 'wallet' | 'system';
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'pending' | 'failed' | 'blocked' | 'warning';
  metadata?: Record<string, any>;
}

// 仪表盘统计类型
export interface DashboardStats {
  totalBalanceUSDC: number;
  balanceChange24h: number;
  balanceChangePercent: number;
  walletCount: number;
  walletLimit: number;
  todayTransactions: number;
  todaySuccessRate: number;
  pendingApprovals: number;
  riskBlockedToday: number;
  recentActivities: Activity[];
}

// 待审批交易类型
export interface PendingTransaction {
  id: string;
  txHash?: string;
  agentName: string;
  agentId: string;
  from: string;
  to: string;
  amount: string;
  amountUSDC: string;
  token: string;
  gasEstimate: string;
  type: 'transfer' | 'swap' | 'contract' | 'approve';
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  triggeredRules: string[];
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  description?: string;
}

// 风控规则类型
export interface RiskRule {
  id: string;
  name: string;
  type: 'amount_limit' | 'frequency_limit' | 'address_check' | 'behavior_check' | 'data_monitor' | 'contract_scan' | 'cross_chain';
  enabled: boolean;
  config: Record<string, any>;
  severity: 'low' | 'medium' | 'high';
  createdAt?: string;
  description?: string;
}

// 风控日志类型
export interface RiskLog {
  id: string;
  transactionId?: string;
  ruleId?: string;
  ruleName: string;
  severity: 'low' | 'medium' | 'high';
  reason: string;
  timestamp: string;
  status: 'blocked' | 'warning' | 'passed';
  details?: Record<string, any>;
}

// 通知设置类型
export interface NotificationSettings {
  email: boolean;
  push: boolean;
  transactionAlerts: boolean;
  riskAlerts: boolean;
  approvalAlerts: boolean;
  dailyReport: boolean;
}

// 用户认证类型
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user' | 'viewer';
  permissions: string[];
  lastLoginAt: string;
  createdAt: string;
  twoFactorEnabled: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface AuthSession {
  user: AuthUser;
  token: string;
  expiresAt: string;
}

// 图表数据类型
export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface TransactionTypeData {
  type: string;
  count: number;
  amount: number;
  percentage?: number;
}

export interface AssetDistribution {
  token: string;
  amount: number;
  valueUSDC: number;
  percentage: number;
}

export interface AnalyticsSummary {
  totalVolume7d: number;
  totalVolumeChange: number;
  transactionCount7d: number;
  transactionCountChange: number;
  avgTransactionValue: number;
  avgGasFee: number;
  topToken: string;
  topTokenVolume: number;
}

// 权限类型
export interface Permission {
  id: string;
  name: string;
  description: string;
  module: 'wallet' | 'transaction' | 'risk' | 'analytics' | 'settings';
  actions: string[];
}

// 角色类型
export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  isSystem: boolean;
  createdAt: string;
}
