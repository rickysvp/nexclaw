module.exports = [
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "copyToClipboard",
    ()=>copyToClipboard,
    "debounce",
    ()=>debounce,
    "formatAddress",
    ()=>formatAddress,
    "formatAmount",
    ()=>formatAmount,
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime,
    "formatRelativeTime",
    ()=>formatRelativeTime,
    "formatTime",
    ()=>formatTime,
    "generateId",
    ()=>generateId,
    "sleep",
    ()=>sleep,
    "throttle",
    ()=>throttle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatAddress(address, start = 6, end = 4) {
    if (!address || address.length < start + end + 3) return address || '';
    return `${address.slice(0, start)}...${address.slice(-end)}`;
}
function formatDateTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}
function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}
function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit'
    });
}
function formatRelativeTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    if (diffSec < 60) return '刚刚';
    if (diffMin < 60) return `${diffMin}分钟前`;
    if (diffHour < 24) return `${diffHour}小时前`;
    if (diffDay < 7) return `${diffDay}天前`;
    return formatDate(timestamp);
}
function formatAmount(amount, decimals = 4) {
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(num)) return '0';
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: decimals
    });
}
function formatCurrency(amount, currency = 'USD') {
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(num)) return `${currency} 0.00`;
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency
    }).format(num);
}
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            return true;
        } catch (e) {
            return false;
        } finally{
            document.body.removeChild(textarea);
        }
    }
}
function generateId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function debounce(func, wait) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
}
function throttle(func, limit) {
    let inThrottle;
    return (...args)=>{
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
}),
"[project]/src/lib/agent-strategy-store.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAgentStrategyStore",
    ()=>useAgentStrategyStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const mockStrategies = [
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
            time: '09:00'
        }
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
            autoCompound: true
        }
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
            duration: '30 days'
        }
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
            platforms: [
                'Uniswap',
                'SushiSwap'
            ],
            assets: [
                'ETH',
                'USDC'
            ],
            minProfit: '0.1%',
            maxGas: '50 gwei'
        }
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
            stopLoss: '5%'
        }
    }
];
const useAgentStrategyStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        strategies: mockStrategies,
        selectedStrategy: null,
        addStrategy: (strategy)=>{
            const newStrategy = {
                ...strategy,
                id: Date.now().toString()
            };
            set((state)=>({
                    strategies: [
                        ...state.strategies,
                        newStrategy
                    ]
                }));
        },
        updateStrategy: (id, updates)=>{
            set((state)=>({
                    strategies: state.strategies.map((strategy)=>strategy.id === id ? {
                            ...strategy,
                            ...updates
                        } : strategy),
                    selectedStrategy: state.selectedStrategy?.id === id ? {
                        ...state.selectedStrategy,
                        ...updates
                    } : state.selectedStrategy
                }));
        },
        deleteStrategy: (id)=>{
            set((state)=>({
                    strategies: state.strategies.filter((strategy)=>strategy.id !== id),
                    selectedStrategy: state.selectedStrategy?.id === id ? null : state.selectedStrategy
                }));
        },
        toggleStrategyStatus: (id)=>{
            set((state)=>({
                    strategies: state.strategies.map((strategy)=>strategy.id === id ? {
                            ...strategy,
                            status: strategy.status === 'active' ? 'inactive' : 'active'
                        } : strategy),
                    selectedStrategy: state.selectedStrategy?.id === id ? {
                        ...state.selectedStrategy,
                        status: state.selectedStrategy.status === 'active' ? 'inactive' : 'active'
                    } : state.selectedStrategy
                }));
        },
        selectStrategy: (strategy)=>{
            set({
                selectedStrategy: strategy
            });
        },
        executeStrategy: async (id)=>{
            const strategy = get().strategies.find((s)=>s.id === id);
            if (!strategy) return;
            // 更新策略状态为执行中
            set((state)=>({
                    strategies: state.strategies.map((s)=>s.id === id ? {
                            ...s,
                            status: 'pending'
                        } : s),
                    selectedStrategy: state.selectedStrategy?.id === id ? {
                        ...state.selectedStrategy,
                        status: 'pending'
                    } : state.selectedStrategy
                }));
            // 模拟执行过程
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            // 更新策略状态为执行完成
            const now = new Date().toLocaleString();
            set((state)=>({
                    strategies: state.strategies.map((s)=>s.id === id ? {
                            ...s,
                            status: 'active',
                            lastExecuted: now,
                            // 简单模拟收益变化
                            profit: s.profit ? `${(parseFloat(s.profit.replace('%', '')) + (Math.random() * 2 - 0.5)).toFixed(1)}%` : '+0.0%'
                        } : s),
                    selectedStrategy: state.selectedStrategy?.id === id ? {
                        ...state.selectedStrategy,
                        status: 'active',
                        lastExecuted: now,
                        profit: state.selectedStrategy.profit ? `${(parseFloat(state.selectedStrategy.profit.replace('%', '')) + (Math.random() * 2 - 0.5)).toFixed(1)}%` : '+0.0%'
                    } : state.selectedStrategy
                }));
        }
    }));
}),
];

//# sourceMappingURL=src_lib_6f4ee9e4._.js.map