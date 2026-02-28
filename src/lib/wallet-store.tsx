'use client';

import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';
import { Wallet, Transaction, PendingTransaction, RiskRule, RiskLog, Activity } from '@/types';
import { 
  mockWallets, 
  mockTransactions, 
  mockPendingTransactions,
  mockRiskRules,
  mockRiskLogs,
  mockActivities,
  mockDashboardStats
} from './mockData';

// State Interface
interface WalletState {
  wallets: Wallet[];
  transactions: Transaction[];
  pendingTransactions: PendingTransaction[];
  riskRules: RiskRule[];
  riskLogs: RiskLog[];
  activities: Activity[];
  stats: typeof mockDashboardStats;
  isLoading: boolean;
  error: string | null;
}

// Initial State
const initialState: WalletState = {
  wallets: mockWallets,
  transactions: mockTransactions,
  pendingTransactions: mockPendingTransactions,
  riskRules: mockRiskRules,
  riskLogs: mockRiskLogs,
  activities: mockActivities,
  stats: mockDashboardStats,
  isLoading: false,
  error: null,
};

// Action Types
type Action =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CREATE_WALLET'; payload: Wallet }
  | { type: 'UPDATE_WALLET'; payload: Wallet }
  | { type: 'DELETE_WALLET'; payload: string }
  | { type: 'ADD_TRANSACTION'; payload: Transaction }
  | { type: 'UPDATE_TRANSACTION'; payload: Transaction }
  | { type: 'APPROVE_TRANSACTION'; payload: string }
  | { type: 'REJECT_TRANSACTION'; payload: string }
  | { type: 'UPDATE_RISK_RULE'; payload: RiskRule }
  | { type: 'DELETE_RISK_RULE'; payload: string }
  | { type: 'ADD_RISK_RULE'; payload: RiskRule }
  | { type: 'ADD_RISK_LOG'; payload: RiskLog }
  | { type: 'ADD_ACTIVITY'; payload: Activity }
  | { type: 'UPDATE_STATS'; payload: Partial<typeof mockDashboardStats> };

// Reducer
function walletReducer(state: WalletState, action: Action): WalletState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'CREATE_WALLET':
      return {
        ...state,
        wallets: [...state.wallets, action.payload],
        stats: {
          ...state.stats,
          walletCount: state.stats.walletCount + 1,
        },
      };
    case 'UPDATE_WALLET':
      return {
        ...state,
        wallets: state.wallets.map(w => w.id === action.payload.id ? action.payload : w),
      };
    case 'DELETE_WALLET':
      return {
        ...state,
        wallets: state.wallets.filter(w => w.id !== action.payload),
        stats: {
          ...state.stats,
          walletCount: state.stats.walletCount - 1,
        },
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'UPDATE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.map(t => t.id === action.payload.id ? action.payload : t),
      };
    case 'APPROVE_TRANSACTION': {
      const tx = state.pendingTransactions.find(t => t.id === action.payload);
      if (!tx) return state;
      
      const newTransaction: Transaction = {
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
        txHash: `0x${Math.random().toString(16).slice(2, 34)}`,
      };
      
      return {
        ...state,
        pendingTransactions: state.pendingTransactions.filter(t => t.id !== action.payload),
        transactions: [newTransaction, ...state.transactions],
        stats: {
          ...state.stats,
          pendingApprovals: state.stats.pendingApprovals - 1,
          todayTransactions: state.stats.todayTransactions + 1,
        },
      };
    }
    case 'REJECT_TRANSACTION':
      return {
        ...state,
        pendingTransactions: state.pendingTransactions.filter(t => t.id !== action.payload),
        stats: {
          ...state.stats,
          pendingApprovals: state.stats.pendingApprovals - 1,
        },
      };
    case 'UPDATE_RISK_RULE':
      return {
        ...state,
        riskRules: state.riskRules.map(r => r.id === action.payload.id ? action.payload : r),
      };
    case 'DELETE_RISK_RULE':
      return {
        ...state,
        riskRules: state.riskRules.filter(r => r.id !== action.payload),
      };
    case 'ADD_RISK_RULE':
      return {
        ...state,
        riskRules: [...state.riskRules, action.payload],
      };
    case 'ADD_RISK_LOG':
      return {
        ...state,
        riskLogs: [action.payload, ...state.riskLogs],
      };
    case 'ADD_ACTIVITY':
      return {
        ...state,
        activities: [action.payload, ...state.activities],
      };
    case 'UPDATE_STATS':
      return {
        ...state,
        stats: { ...state.stats, ...action.payload },
      };
    default:
      return state;
  }
}

// Context
interface WalletContextType extends WalletState {
  // Wallet Actions
  createWallet: (name: string, description?: string) => Promise<Wallet>;
  updateWallet: (wallet: Wallet) => void;
  deleteWallet: (id: string) => Promise<void>;
  depositToWallet: (walletId: string, amount: string, token: string) => Promise<void>;
  transferFromWallet: (walletId: string, toAddress: string, amount: string, token: string) => Promise<void>;
  exportWalletKey: (walletId: string, password: string) => Promise<string>;
  
  // Transaction Actions
  approveTransaction: (id: string) => Promise<void>;
  rejectTransaction: (id: string, reason?: string) => Promise<void>;
  
  // Risk Actions
  updateRiskRule: (ruleId: string, updates: Partial<RiskRule>) => void;
  deleteRiskRule: (ruleId: string) => void;
  addRiskRule: (rule: Omit<RiskRule, 'id'>) => void;
  toggleRiskRule: (ruleId: string) => void;
  updateRiskRuleConfig: (ruleId: string, config: Record<string, any>) => void;
  
  // Activity Actions
  addActivity: (activity: Omit<Activity, 'id' | 'timestamp'>) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  // Wallet Actions
  const createWallet = useCallback(async (name: string, description?: string): Promise<Wallet> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (state.wallets.length >= state.stats.walletLimit) {
      dispatch({ type: 'SET_ERROR', payload: '已达到钱包数量上限' });
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('已达到钱包数量上限');
    }
    
    const newWallet: Wallet = {
      id: `wallet_${Date.now()}`,
      name: name || `钱包 ${state.wallets.length + 1}`,
      description,
      address: `0x${Math.random().toString(16).slice(2, 42)}`,
      balance: '0 ETH',
      createdAt: new Date().toISOString(),
      uid: `agent_wallet_${String(state.wallets.length + 1).padStart(3, '0')}`,
      userId: 'user_001',
      status: 'active',
    };
    
    dispatch({ type: 'CREATE_WALLET', payload: newWallet });
    dispatch({ 
      type: 'ADD_ACTIVITY', 
      payload: {
        id: `act_${Date.now()}`,
        type: 'wallet',
        title: '创建钱包',
        description: `成功创建新钱包 ${newWallet.name}`,
        timestamp: new Date().toISOString(),
        status: 'success',
      }
    });
    dispatch({ type: 'SET_LOADING', payload: false });
    
    return newWallet;
  }, [state.wallets.length, state.stats.walletLimit]);

  const updateWallet = useCallback((wallet: Wallet) => {
    dispatch({ type: 'UPDATE_WALLET', payload: wallet });
  }, []);

  const deleteWallet = useCallback(async (id: string): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const wallet = state.wallets.find(w => w.id === id);
    if (!wallet) {
      dispatch({ type: 'SET_ERROR', payload: '钱包不存在' });
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('钱包不存在');
    }
    
    dispatch({ type: 'DELETE_WALLET', payload: id });
    dispatch({ 
      type: 'ADD_ACTIVITY', 
      payload: {
        id: `act_${Date.now()}`,
        type: 'wallet',
        title: '删除钱包',
        description: `已删除钱包 ${wallet.name}`,
        timestamp: new Date().toISOString(),
        status: 'success',
      }
    });
    dispatch({ type: 'SET_LOADING', payload: false });
  }, [state.wallets]);

  const depositToWallet = useCallback(async (walletId: string, amount: string, token: string): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const wallet = state.wallets.find(w => w.id === walletId);
    if (!wallet) {
      dispatch({ type: 'SET_ERROR', payload: '钱包不存在' });
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('钱包不存在');
    }
    
    // Update wallet balance
    const currentBalance = parseFloat(wallet.balance.split(' ')[0]);
    const newBalance = currentBalance + parseFloat(amount);
    const updatedWallet = { ...wallet, balance: `${newBalance.toFixed(4)} ${token}` };
    
    dispatch({ type: 'UPDATE_WALLET', payload: updatedWallet });
    
    // Add transaction record
    const transaction: Transaction = {
      id: `tx_${Date.now()}`,
      type: 'receive',
      to: wallet.address,
      amount: `${amount} ${token}`,
      token,
      status: 'success',
      timestamp: new Date().toISOString(),
      walletId,
      gasFee: '0',
      txHash: `0x${Math.random().toString(16).slice(2, 34)}`,
    };
    
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    dispatch({ 
      type: 'ADD_ACTIVITY', 
      payload: {
        id: `act_${Date.now()}`,
        type: 'transaction',
        title: '充值成功',
        description: `向 ${wallet.name} 充值 ${amount} ${token}`,
        timestamp: new Date().toISOString(),
        status: 'success',
      }
    });
    dispatch({ type: 'SET_LOADING', payload: false });
  }, [state.wallets]);

  const transferFromWallet = useCallback(async (walletId: string, toAddress: string, amount: string, token: string): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const wallet = state.wallets.find(w => w.id === walletId);
    if (!wallet) {
      dispatch({ type: 'SET_ERROR', payload: '钱包不存在' });
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('钱包不存在');
    }
    
    const currentBalance = parseFloat(wallet.balance.split(' ')[0]);
    const transferAmount = parseFloat(amount);
    
    if (currentBalance < transferAmount) {
      dispatch({ type: 'SET_ERROR', payload: '余额不足' });
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('余额不足');
    }
    
    // Update wallet balance
    const newBalance = currentBalance - transferAmount;
    const updatedWallet = { ...wallet, balance: `${newBalance.toFixed(4)} ${token}` };
    
    dispatch({ type: 'UPDATE_WALLET', payload: updatedWallet });
    
    // Add transaction record
    const transaction: Transaction = {
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
      txHash: `0x${Math.random().toString(16).slice(2, 34)}`,
    };
    
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    dispatch({ 
      type: 'ADD_ACTIVITY', 
      payload: {
        id: `act_${Date.now()}`,
        type: 'transaction',
        title: '转账成功',
        description: `从 ${wallet.name} 转账 ${amount} ${token} 到 ${toAddress.slice(0, 6)}...${toAddress.slice(-4)}`,
        timestamp: new Date().toISOString(),
        status: 'success',
      }
    });
    dispatch({ type: 'SET_LOADING', payload: false });
  }, [state.wallets]);

  const exportWalletKey = useCallback(async (walletId: string, password: string): Promise<string> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate key export
    const mockPrivateKey = `0x${Math.random().toString(16).slice(2, 66)}`;
    
    dispatch({ type: 'SET_LOADING', payload: false });
    
    return mockPrivateKey;
  }, []);

  // Transaction Actions
  const approveTransaction = useCallback(async (id: string): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const tx = state.pendingTransactions.find(t => t.id === id);
    if (!tx) {
      dispatch({ type: 'SET_ERROR', payload: '交易不存在' });
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('交易不存在');
    }
    
    dispatch({ type: 'APPROVE_TRANSACTION', payload: id });
    dispatch({ 
      type: 'ADD_ACTIVITY', 
      payload: {
        id: `act_${Date.now()}`,
        type: 'approval',
        title: '交易审批',
        description: `批准了 ${tx.agentName} 的交易请求`,
        timestamp: new Date().toISOString(),
        status: 'success',
      }
    });
    dispatch({ type: 'SET_LOADING', payload: false });
  }, [state.pendingTransactions]);

  const rejectTransaction = useCallback(async (id: string, reason?: string): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const tx = state.pendingTransactions.find(t => t.id === id);
    if (!tx) {
      dispatch({ type: 'SET_ERROR', payload: '交易不存在' });
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('交易不存在');
    }
    
    dispatch({ type: 'REJECT_TRANSACTION', payload: id });
    dispatch({ 
      type: 'ADD_ACTIVITY', 
      payload: {
        id: `act_${Date.now()}`,
        type: 'approval',
        title: '交易拒绝',
        description: `拒绝了 ${tx.agentName} 的交易请求${reason ? `: ${reason}` : ''}`,
        timestamp: new Date().toISOString(),
        status: 'failed',
      }
    });
    dispatch({ type: 'SET_LOADING', payload: false });
  }, [state.pendingTransactions]);

  // Risk Actions
  const updateRiskRule = useCallback((ruleId: string, updates: Partial<RiskRule>) => {
    const rule = state.riskRules.find(r => r.id === ruleId);
    if (rule) {
      dispatch({ type: 'UPDATE_RISK_RULE', payload: { ...rule, ...updates } });
    }
  }, [state.riskRules]);

  const deleteRiskRule = useCallback((ruleId: string) => {
    dispatch({ type: 'DELETE_RISK_RULE', payload: ruleId });
  }, []);

  const addRiskRule = useCallback((rule: Omit<RiskRule, 'id'>) => {
    const newRule: RiskRule = {
      ...rule,
      id: `rule_${Date.now()}`,
    };
    dispatch({ type: 'ADD_RISK_RULE', payload: newRule });
  }, []);

  const toggleRiskRule = useCallback((ruleId: string) => {
    const rule = state.riskRules.find(r => r.id === ruleId);
    if (rule) {
      dispatch({ type: 'UPDATE_RISK_RULE', payload: { ...rule, enabled: !rule.enabled } });
    }
  }, [state.riskRules]);

  const updateRiskRuleConfig = useCallback((ruleId: string, config: Record<string, any>) => {
    const rule = state.riskRules.find(r => r.id === ruleId);
    if (rule) {
      dispatch({ type: 'UPDATE_RISK_RULE', payload: { ...rule, config: { ...rule.config, ...config } } });
    }
  }, [state.riskRules]);

  // Activity Actions
  const addActivity = useCallback((activity: Omit<Activity, 'id' | 'timestamp'>) => {
    dispatch({ 
      type: 'ADD_ACTIVITY', 
      payload: {
        ...activity,
        id: `act_${Date.now()}`,
        timestamp: new Date().toISOString(),
      }
    });
  }, []);

  const value: WalletContextType = {
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
    addActivity,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
