// 用户类型
export interface User {
  firstName: string;
  emailAddresses: {
    emailAddress: string;
  }[];
}

// 钱包类型
export interface Wallet {
  id: string;
  address: string;
  balance: string;
  createdAt: string;
  uid: string;
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
  wallet?: string;
}

// 安全规则类型
export interface SecurityRule {
  id: string;
  name: string;
  description: string;
  value?: string;
  enabled: boolean;
}

// 套餐类型
export interface Plan {
  name: string;
  price: string;
  walletLimit: number;
  features: string[];
}
