import { create } from 'zustand';

interface Strategy {
  id: string;
  name: string;
  type: 'transfer' | 'defi' | 'dca' | 'copy' | 'staking' | 'lending';
  status: 'active' | 'inactive' | 'pending';
  description: string;
  lastExecuted?: string;
  nextExecution?: string;
  profit?: string;
  risk: 'low' | 'medium' | 'high';
  config: any;
}

interface AgentStrategyStore {
  strategies: Strategy[];
  selectedStrategy: Strategy | null;
  addStrategy: (strategy: Omit<Strategy, 'id'>) => void;
  updateStrategy: (id: string, updates: Partial<Strategy>) => void;
  deleteStrategy: (id: string) => void;
  toggleStrategyStatus: (id: string) => void;
  selectStrategy: (strategy: Strategy | null) => void;
  executeStrategy: (id: string) => Promise<void>;
}

const mockStrategies: Strategy[] = [
  {
    id: '1',
    name: 'BTC 定投',
    type: 'dca',
    status: 'active',
    description: '每周一自动购买 0.001 BTC',
    lastExecuted: '2024-01-15 09:00',
    nextExecution: '2024-01-22 09:00',
    profit: '+12.5%',
    risk: 'low',
    config: {
      frequency: 'weekly',
      asset: 'BTC',
      amount: '0.001',
      day: 'Monday',
      time: '09:00',
    },
  },
  {
    id: '2',
    name: 'ETH 质押',
    type: 'staking',
    status: 'active',
    description: '将 ETH 质押到 Lido',
    lastExecuted: '2024-01-10 14:30',
    profit: '+3.2%',
    risk: 'medium',
    config: {
      platform: 'Lido',
      amount: '1',
      autoCompound: true,
    },
  },
  {
    id: '3',
    name: 'USDC 借贷',
    type: 'lending',
    status: 'inactive',
    description: '在 Aave 上借出 USDC',
    lastExecuted: '2024-01-05 10:00',
    profit: '+1.8%',
    risk: 'low',
    config: {
      platform: 'Aave',
      amount: '1000',
      asset: 'USDC',
      duration: '30 days',
    },
  },
  {
    id: '4',
    name: 'Defi 套利',
    type: 'defi',
    status: 'pending',
    description: '自动在 Uniswap 和 SushiSwap 之间套利',
    profit: '-0.5%',
    risk: 'high',
    config: {
      platforms: ['Uniswap', 'SushiSwap'],
      assets: ['ETH', 'USDC'],
      minProfit: '0.1%',
      maxGas: '50 gwei',
    },
  },
  {
    id: '5',
    name: '跟随交易员',
    type: 'copy',
    status: 'active',
    description: '跟随 top 交易员的交易策略',
    lastExecuted: '2024-01-14 16:45',
    nextExecution: '2024-01-15 16:45',
    profit: '+8.7%',
    risk: 'medium',
    config: {
      traderId: 'trader123',
      maxAmount: '0.5 ETH',
      copyRatio: '100%',
      stopLoss: '5%',
    },
  },
];

export const useAgentStrategyStore = create<AgentStrategyStore>((set, get) => ({
  strategies: mockStrategies,
  selectedStrategy: null,

  addStrategy: (strategy) => {
    const newStrategy = {
      ...strategy,
      id: Date.now().toString(),
    };
    set((state) => ({
      strategies: [...state.strategies, newStrategy],
    }));
  },

  updateStrategy: (id, updates) => {
    set((state) => ({
      strategies: state.strategies.map((strategy) =>
        strategy.id === id ? { ...strategy, ...updates } : strategy
      ),
      selectedStrategy: state.selectedStrategy?.id === id
        ? { ...state.selectedStrategy, ...updates }
        : state.selectedStrategy,
    }));
  },

  deleteStrategy: (id) => {
    set((state) => ({
      strategies: state.strategies.filter((strategy) => strategy.id !== id),
      selectedStrategy: state.selectedStrategy?.id === id ? null : state.selectedStrategy,
    }));
  },

  toggleStrategyStatus: (id) => {
    set((state) => ({
      strategies: state.strategies.map((strategy) =>
        strategy.id === id
          ? {
              ...strategy,
              status: strategy.status === 'active' ? 'inactive' : 'active',
            }
          : strategy
      ),
      selectedStrategy: state.selectedStrategy?.id === id
        ? {
            ...state.selectedStrategy,
            status: state.selectedStrategy.status === 'active' ? 'inactive' : 'active',
          }
        : state.selectedStrategy,
    }));
  },

  selectStrategy: (strategy) => {
    set({ selectedStrategy: strategy });
  },

  executeStrategy: async (id) => {
    const strategy = get().strategies.find((s) => s.id === id);
    if (!strategy) return;

    // 更新策略状态为执行中
    set((state) => ({
      strategies: state.strategies.map((s) =>
        s.id === id ? { ...s, status: 'pending' } : s
      ),
      selectedStrategy: state.selectedStrategy?.id === id
        ? { ...state.selectedStrategy, status: 'pending' }
        : state.selectedStrategy,
    }));

    // 模拟执行过程
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 更新策略状态为执行完成
    const now = new Date().toLocaleString();
    set((state) => ({
      strategies: state.strategies.map((s) =>
        s.id === id
          ? {
              ...s,
              status: 'active',
              lastExecuted: now,
              // 简单模拟收益变化
              profit: s.profit
                ? `${(parseFloat(s.profit.replace('%', '')) + (Math.random() * 2 - 0.5)).toFixed(1)}%`
                : '+0.0%',
            }
          : s
      ),
      selectedStrategy: state.selectedStrategy?.id === id
        ? {
            ...state.selectedStrategy,
            status: 'active',
            lastExecuted: now,
            profit: state.selectedStrategy.profit
              ? `${(parseFloat(state.selectedStrategy.profit.replace('%', '')) + (Math.random() * 2 - 0.5)).toFixed(1)}%`
              : '+0.0%',
          }
        : state.selectedStrategy,
    }));
  },
}));
