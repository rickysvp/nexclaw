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
