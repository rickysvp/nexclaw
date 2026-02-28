import { User, Wallet, Transaction } from "@/types";

export const mockUser: User = {
  firstName: "小龙虾用户",
  emailAddresses: [{ emailAddress: "user@nexclaw.com" }],
};

export const mockWallets: Wallet[] = [
  {
    id: "1",
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    balance: "1.5 ETH",
    createdAt: "2026-02-01T10:00:00Z",
    uid: "agent_wallet_001",
  },
  {
    id: "2",
    address: "0x8ba1f109551bD432803012645Hac136c82C3e8C",
    balance: "0.8 ETH",
    createdAt: "2026-02-15T14:30:00Z",
    uid: "agent_wallet_002",
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
    wallet: "agent_wallet_001",
  },
  {
    id: "tx2",
    type: "send",
    to: "0x1234...5678",
    amount: "0.05 ETH",
    status: "pending",
    timestamp: "2026-02-28T09:15:00Z",
    wallet: "agent_wallet_001",
  },
  {
    id: "tx3",
    type: "buy",
    token: "DOGE",
    amount: "0.2 ETH",
    status: "success",
    timestamp: "2026-02-27T16:45:00Z",
    wallet: "agent_wallet_002",
  },
];
