import { User, Wallet, Transaction, SecurityRule } from "@/types";

export const mockUser: User = {
  id: "user_001",
  firstName: "小龙虾用户",
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
