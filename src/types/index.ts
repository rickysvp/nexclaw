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
  gasFee?: string;
  txHash?: string;
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
  totalBalanceUSDC: string;
  balanceChange24h: string;
  balanceChangePercent: string;
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
  type: 'amount_limit' | 'frequency_limit' | 'address_check' | 'behavior_check';
  enabled: boolean;
  config: Record<string, any>;
  severity: 'low' | 'medium' | 'high';
  createdAt: string;
}

// 风控日志类型
export interface RiskLog {
  id: string;
  transactionId: string;
  ruleId: string;
  ruleName: string;
  severity: 'low' | 'medium' | 'high';
  reason: string;
  timestamp: string;
  status: 'blocked' | 'warning' | 'passed';
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
