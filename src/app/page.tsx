'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  FileText, 
  Server, 
  ArrowRight, 
  MessageSquare,
  Copy,
  Check,
  Sparkles,
  Zap,
  ChevronRight,
  Wallet,
  Terminal,
  Activity,
  Globe,
  ChevronDown,
  ExternalLink,
  Play,
  Layers,
  Cpu,
  Fingerprint,
  Key,
  Eye,
  Code2,
  Github
} from 'lucide-react';

// ============================================
// Design System - Premium UI Kit
// ============================================

// Color Palette - Refined Deep Lobster Red + Pearl White
const colors = {
  lobster: {
    50: '#FEF2F0',
    100: '#FEE2E2', 
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
  pearl: {
    50: '#FFFFFF',
    100: '#FEFBFA',
    200: '#FDF7F5',
    300: '#FAF0ED',
    400: '#F5E6E1',
    500: '#EDD5CE',
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  }
};

// ============================================
// Data
// ============================================

const features = [
  {
    id: 'chat',
    icon: MessageSquare,
    label: '对话操作',
    title: '自然语言，一键执行',
    description: '用对话创建和管理钱包，查询余额、转账、查看历史，AI 自动执行链上操作。',
  },
  {
    id: 'security',
    icon: Shield,
    label: '自托管安全',
    title: '你的钥匙，你的控制',
    description: '私钥永不离开你的环境，基于 TEE 的硬件级加密，完全自主控制资产。',
  },
  {
    id: 'risk',
    icon: Activity,
    label: '智能风控',
    title: 'AI 驱动的安全防护',
    description: '实时交易行为分析，异常操作自动拦截，自定义安全策略规则。',
  },
  {
    id: 'multichain',
    icon: Globe,
    label: '多链支持',
    title: '一个钱包，多条链',
    description: '支持 20+ 主流区块链，统一资产管理界面，跨链操作无缝衔接。',
  },
];

const securityLayers = [
  { icon: Key, title: '私钥自托管', desc: '你的私钥，你的控制', detail: '私钥始终存储在你的本地环境，永远不会上传到任何服务器' },
  { icon: Cpu, title: 'TEE 硬件加密', desc: 'AWS Nitro Enclaves', detail: '基于可信执行环境的硬件级加密保护' },
  { icon: Eye, title: '智能风控引擎', desc: 'AI 实时防护', detail: '机器学习模型实时分析交易行为，识别潜在风险' },
  { icon: Layers, title: '策略引擎', desc: '自定义安全规则', detail: '灵活配置转账限额、白名单、多重签名等安全策略' },
];

const chatScenarios = [
  {
    id: 'swap',
    label: 'Swap',
    icon: Zap,
    color: 'bg-yellow-50 text-yellow-600',
    messages: [
      { role: 'user', content: '把 1000 USDC 换成 ETH' },
      { role: 'agent', content: '正在查询最优兑换路径...\n\nUniswap V3: 0.3842 ETH\nCurve: 0.3839 ETH\n1inch: 0.3841 ETH\n\n推荐 Uniswap V3，滑点 0.05%' },
      { role: 'user', content: '确认兑换' },
      { role: 'agent', content: '✓ 兑换成功！\n获得: 0.3842 ETH\nGas: 0.002 ETH\n交易哈希: 0x8b2d...7a1f' }
    ]
  },
  {
    id: 'bridge',
    label: '跨链',
    icon: Globe,
    color: 'bg-purple-50 text-purple-600',
    messages: [
      { role: 'user', content: '跨链 500 USDC 到 Arbitrum' },
      { role: 'agent', content: '正在查询跨链方案...\n\nLayerZero: 手续费 0.5 USDC，10-15分钟\nStargate: 手续费 0.8 USDC，5-10分钟\n\n推荐 LayerZero，成本最低' },
      { role: 'user', content: '确认跨链' },
      { role: 'agent', content: '✓ 跨链交易已发起！\n预计到账: 499.5 USDC\n交易 ID: 0x9c4f...2e8b\n可在历史记录中追踪进度' }
    ]
  },
  {
    id: 'dca',
    label: '定投',
    icon: Activity,
    color: 'bg-blue-50 text-blue-600',
    messages: [
      { role: 'user', content: '设置每周定投 100 USDC 买 ETH' },
      { role: 'agent', content: '正在创建定投策略...\n\n频率: 每周一 09:00\n金额: 100 USDC\n目标: ETH\n策略: 市价单\n\n预计年化收益: 根据市场波动' },
      { role: 'user', content: '确认创建' },
      { role: 'agent', content: '✓ 定投策略已创建！\n策略 ID: DCA-8842\n首次执行: 2024-01-15\n可随时暂停或修改' }
    ]
  },
  {
    id: 'risk',
    label: '风控',
    icon: Shield,
    color: 'bg-red-50 text-red-600',
    messages: [
      { role: 'user', content: '检查我的钱包安全状态' },
      { role: 'agent', content: '正在扫描安全状态...\n\n✓ 私钥存储: TEE 环境安全\n✓ 交易权限: 正常\n⚠ 发现: 1笔待确认的高风险交易\n\n建议: 开启双因素认证' },
      { role: 'user', content: '查看风险交易' },
      { role: 'agent', content: '✓ 已拦截可疑交易！\n目标: 0x9f3a...2b1c\n金额: 5 ETH\n风险: 合约未审计\n已自动阻止执行' }
    ]
  },
  {
    id: 'defi',
    label: 'DeFi',
    icon: Layers,
    color: 'bg-green-50 text-green-600',
    messages: [
      { role: 'user', content: '在 Aave 存入 5000 USDC' },
      { role: 'agent', content: '正在计算收益...\n\n存入: 5000 USDC\nAPY: 4.2%\n预估月收益: 17.5 USDC\n健康因子: N/A (无借款)\n\nGas 费预估: 0.003 ETH' },
      { role: 'user', content: '确认存入' },
      { role: 'agent', content: '✓ 存入成功！\n获得 aUSDC: 5000\n开始计息\n交易哈希: 0x3a7c...9f2e' }
    ]
  },
  {
    id: 'transfer',
    label: '转账',
    icon: Wallet,
    color: 'bg-orange-50 text-orange-600',
    messages: [
      { role: 'user', content: '转 2 ETH 给 0x742d...f0bEb' },
      { role: 'agent', content: '正在准备交易...\n\n发送方: 0x7a8b...3c4d\n接收方: 0x742d...f0bEb\n金额: 2 ETH\nGas 费: 0.001 ETH\n总计: 2.001 ETH' },
      { role: 'user', content: '确认转账' },
      { role: 'agent', content: '✓ 交易已提交！\n预计确认: 12 秒\n交易哈希: 0x3f8a...9c2e\n可在历史记录查看' }
    ]
  }
];

const stats = [
  { value: '$2.5B+', label: '资产管理规模' },
  { value: '50K+', label: '活跃用户' },
  { value: '20+', label: '支持链' },
  { value: '99.9%', label: '安全运行' },
];

const strategyDescriptions = {
  create: {
    features: [
      '快速创建安全钱包',
      '助记词备份',
      '多链支持',
      '硬件级加密保护'
    ],
    chatContent: {
      title: '创建一个新的加密钱包',
      messages: [
        '我想创建一个新的加密钱包',
        '正在准备创建钱包...\n\n安全级别: 高\n支持链: Ethereum, Base, Arbitrum, Optimism\n加密方式: TEE 硬件加密',
        '确认创建',
        '✓ 钱包创建成功！\n地址: 0x7a8b...3c4d\n请保存好你的助记词\n可在设置中查看详情'
      ],
      options: ['标准', '高级', '企业级'],
      selectedOption: '标准',
      transaction: {
        title: '创建新钱包',
        details: '安全级别: 高 · 多链支持',
        button: '确认创建'
      }
    }
  },
  market: {
    features: [
      '实时市场新闻',
      'KOL 观点跟踪',
      '市场情绪分析',
      '热点事件提醒'
    ],
    chatContent: {
      title: '查看最新市场动态',
      messages: [
        '查看最新的加密市场动态',
        '正在获取市场信息...\n\n• 比特币突破 70,000 美元\n• 以太坊上海升级成功\n• KOL @CryptoExpert 看好 Solana\n• DeFi 总锁仓量增长 15%',
        '订阅市场动态',
        '✓ 已成功订阅市场动态！\n将定期为你推送重要市场信息\n可在设置中调整订阅偏好'
      ],
      options: ['每日', '每周', '实时'],
      selectedOption: '每日',
      transaction: {
        title: '订阅市场动态',
        details: '包含新闻、KOL 观点和市场情绪',
        button: '确认订阅'
      }
    }
  },
  price: {
    features: [
      '实时币价跟踪',
      '价格预警设置',
      '历史价格分析',
      '多交易所对比'
    ],
    chatContent: {
      title: '跟踪比特币和以太坊价格',
      messages: [
        '帮我跟踪比特币和以太坊的价格',
        '正在获取实时价格...\n\n比特币 (BTC): $69,500.00 (+2.5%)\n以太坊 (ETH): $3,850.00 (+1.8%)\n24小时交易量: $45B\n市场总市值: $2.3T',
        '设置价格预警',
        '✓ 价格预警设置成功！\n比特币: 突破 $70,000 时提醒\n以太坊: 跌破 $3,700 时提醒\n可在设置中查看和修改预警'
      ],
      options: ['BTC', 'ETH', 'SOL', 'BNB'],
      selectedOption: 'BTC',
      transaction: {
        title: '设置价格预警',
        details: '比特币: $70,000 · 以太坊: $3,700',
        button: '确认设置'
      }
    }
  },
  arbitrage: {
    features: [
      '跨交易所套利',
      '自动执行交易',
      '风险控制',
      '收益分析'
    ],
    chatContent: {
      title: '设置自动套利策略',
      messages: [
        '帮我设置自动套利策略',
        '正在分析套利机会...\n\n交易所: Binance vs OKX\n代币: ETH\n套利空间: 0.5%\n预计收益: $50/天\n风险等级: 低',
        '确认设置',
        '✓ 自动套利策略设置成功！\n策略 ID: ARB-7789\n已开始监控套利机会\n可在策略中心查看详情'
      ],
      options: ['低风险', '中风险', '高风险'],
      selectedOption: '低风险',
      transaction: {
        title: '设置自动套利策略',
        details: 'ETH 跨交易所套利 · 预期收益: $50/天',
        button: '确认设置'
      }
    }
  },
  mining: {
    features: [
      '多协议挖矿集成',
      '流动性挖矿',
      '收益优化',
      '风险评估'
    ],
    chatContent: {
      title: '在 DeFi 协议中挖矿',
      messages: [
        '我想在 DeFi 协议中挖矿',
        '正在分析挖矿机会...\n\n年化收益: 12.5%\n锁定期: 30 天\n风险等级: 中\n最低投资: 100 USDC',
        '确认参与',
        '✓ 已成功参与挖矿！\n投资金额: 100 USDC\n预计年化: 12.5%\n可在 DeFi 中心查看详情'
      ],
      options: ['100 USDC', '500 USDC', '1000 USDC', '5000 USDC'],
      selectedOption: '100 USDC',
      transaction: {
        title: '参与 DeFi 挖矿',
        details: '年化收益: 12.5% · 锁定期: 30 天',
        button: '确认参与'
      }
    }
  },
  meme: {
    features: [
      '自动 meme 打狗',
      '市场情绪分析',
      '趋势跟踪',
      '收益策略'
    ],
    chatContent: {
      title: '自动 meme 打狗策略',
      messages: [
        '我想设置自动 meme 打狗策略',
        '正在分析 meme 市场...\n\n当前热点: PEPE, DOGE\n市场情绪: 极度看涨\n风险等级: 高\n潜在收益: 50-100%',
        '确认设置',
        '✓ 自动 meme 打狗策略已设置！\n已开始监控 meme 币市场\n将在合适时机自动执行交易\n可在策略中心查看详情'
      ],
      options: ['低风险', '中风险', '高风险', '激进'],
      selectedOption: '高风险',
      transaction: {
        title: '设置自动 meme 打狗策略',
        details: '监控: PEPE, DOGE · 风险: 高',
        button: '确认设置'
      }
    }
  },
  ipo: {
    features: [
      '币股打新',
      '项目分析',
      '申购策略',
      '收益跟踪'
    ],
    chatContent: {
      title: '参与币股打新',
      messages: [
        '我想参与币股打新',
        '正在查询最新打新项目...\n\n项目: Coinbase IPO\n发行价: $250\n申购时间: 2024-06-15\n预期收益: 20-30%',
        '确认申购',
        '✓ 已成功申购 Coinbase IPO！\n申购金额: $1,000\n申购数量: 4 股\n可在投资中心查看详情'
      ],
      options: ['$500', '$1000', '$5000', '$10000'],
      selectedOption: '$1000',
      transaction: {
        title: '申购 Coinbase IPO',
        details: '发行价: $250 · 预期收益: 20-30%',
        button: '确认申购'
      }
    }
  },
  perps: {
    features: [
      '永续合约交易',
      '杠杆管理',
      '自动止盈止损',
      '策略优化'
    ],
    chatContent: {
      title: '交易 ETH 永续合约',
      messages: [
        '我想交易 ETH 永续合约',
        '正在分析市场...\n\n当前价格: $3,850\n杠杆倍数: 5x\n止盈价格: $4,200\n止损价格: $3,700',
        '确认交易',
        '✓ 已成功开仓 ETH 永续合约！\n方向: 多头\n杠杆: 5x\n开仓价格: $3,850\n可在衍生品中心查看详情'
      ],
      options: ['1x', '5x', '10x', '20x'],
      selectedOption: '5x',
      transaction: {
        title: '开仓 ETH 永续合约',
        details: '多头 · 5x 杠杆 · 止盈: $4,200',
        button: '确认开仓'
      }
    }
  },
  audit: {
    features: [
      '智能合约安全审计',
      '风险评估',
      '漏洞检测',
      '安全建议'
    ],
    chatContent: {
      title: '安全审计智能合约',
      messages: [
        '帮我审计一个智能合约',
        '正在进行安全审计...\n\n合约地址: 0x1234...5678\n链: Ethereum\n风险等级: 低\n发现问题: 1 个小漏洞\n安全评分: 95/100',
        '查看详细报告',
        '✓ 安全审计完成！\n已生成详细报告\n包含漏洞修复建议\n可在安全中心查看完整报告'
      ],
      options: ['基础审计', '全面审计', '深度审计'],
      selectedOption: '全面审计',
      transaction: {
        title: '智能合约安全审计',
        details: '合约地址: 0x1234...5678 · 链: Ethereum',
        button: '确认审计'
      }
    }
  },
  transfer: {
    features: [
      '快速安全的加密货币转账',
      '支持多链地址',
      '智能地址验证',
      '实时转账状态跟踪'
    ],
    chatContent: {
      title: '转账到 0x742d...f0bEb',
      messages: [
        '我想转 2 ETH 给 0x742d...f0bEb',
        '正在准备交易...\n\n发送方: 0x7a8b...3c4d\n接收方: 0x742d...f0bEb\n金额: 2 ETH\nGas 费: 0.001 ETH\n总计: 2.001 ETH',
        '确认转账',
        '✓ 交易已提交！\n预计确认: 12 秒\n交易哈希: 0x3f8a...9c2e\n可在历史记录查看'
      ],
      options: ['25%', '50%', '75%', 'Max'],
      selectedOption: 'Max',
      transaction: {
        title: '转账 2 ETH → 0x742d...f0bEb',
        details: 'Ethereum · 预估 gas ~0.001 ETH',
        button: '确认转账'
      }
    }
  },
  defi: {
    features: [
      '去中心化金融协议集成',
      '流动性挖矿',
      '收益优化策略',
      '智能合约安全检查'
    ],
    chatContent: {
      title: '在 Uniswap 兑换 USDC 为 ETH',
      messages: [
        '把 1000 USDC 换成 ETH',
        '正在查询最优兑换路径...\n\nUniswap V3: 0.3842 ETH\nCurve: 0.3839 ETH\n1inch: 0.3841 ETH\n\n推荐 Uniswap V3，滑点 0.05%',
        '确认兑换',
        '✓ 兑换成功！\n获得: 0.3842 ETH\nGas: 0.002 ETH\n交易哈希: 0x8b2d...7a1f'
      ],
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      selectedOption: 'Option 1',
      transaction: {
        title: '兑换 1000 USDC → 0.3842 ETH',
        details: 'Uniswap V3 · 滑点 0.05% · Gas ~0.002 ETH',
        button: '确认兑换'
      }
    }
  },
  dca: {
    features: [
      '定期定额投资',
      '自动执行交易',
      '成本平均策略',
      '投资组合跟踪'
    ],
    chatContent: {
      title: '设置每周定投 100 USDC 买 ETH',
      messages: [
        '设置每周定投 100 USDC 买 ETH',
        '正在创建定投策略...\n\n频率: 每周一 09:00\n金额: 100 USDC\n目标: ETH\n策略: 市价单\n\n预计年化收益: 根据市场波动',
        '确认创建',
        '✓ 定投策略已创建！\n策略 ID: DCA-8842\n首次执行: 2024-01-15\n可随时暂停或修改'
      ],
      options: ['每周', '每两周', '每月'],
      selectedOption: '每周',
      transaction: {
        title: '创建定投策略: 每周 100 USDC 买 ETH',
        details: '每周一 09:00 · 市价单',
        button: '确认创建'
      }
    }
  },
  copy: {
    features: [
      '跟随专业交易员',
      '自动复制交易',
      '风险控制',
      '业绩分析'
    ],
    chatContent: {
      title: '跟随 top 交易员的交易策略',
      messages: [
        '我想跟随 top 交易员的交易',
        '正在查找优质交易员...\n\n交易员: TraderPro\n收益率: +120% (30天)\n最大回撤: 15%\n交易频率: 平均每天 2-3 笔',
        '确认跟随',
        '✓ 跟随成功！\n交易员: TraderPro\n跟随比例: 100%\n最大单笔: 0.5 ETH\n可随时调整设置'
      ],
      options: ['50%', '75%', '100%', '150%'],
      selectedOption: '100%',
      transaction: {
        title: '跟随 TraderPro 的交易策略',
        details: '跟随比例: 100% · 最大单笔: 0.5 ETH',
        button: '确认跟随'
      }
    }
  },
  staking: {
    features: [
      '质押加密资产获得收益',
      '支持多种质押协议',
      '自动复投收益',
      '质押状态监控'
    ],
    chatContent: {
      title: '在 Lido 质押 ETH 获得 5.2% APY',
      messages: [
        '我想质押 ETH 获得收益',
        '正在查询质押选项...\n\nLido: 5.2% APY · 流动性好\nRocket Pool: 5.5% APY · 去中心化\nCoinbase: 4.8% APY · 安全可靠',
        '选择 Lido',
        '✓ 质押成功！\n质押金额: 1 ETH\n预计年化: 5.2%\n已获得 stETH: 0.999\n可随时 unstake'
      ],
      options: ['1 ETH', '2 ETH', '5 ETH', 'Max'],
      selectedOption: '1 ETH',
      transaction: {
        title: '质押 1 ETH → Lido',
        details: '预计年化: 5.2% · 获得 stETH',
        button: '确认质押'
      }
    }
  },
  lending: {
    features: [
      '借出资产获得利息',
      '灵活的借贷期限',
      '实时利率跟踪',
      '安全的借贷协议'
    ],
    chatContent: {
      title: '在 Aave 存入 USDC 获得 4.2% APY',
      messages: [
        '我想在 Aave 存入 USDC',
        '正在计算收益...\n\n存入: 5000 USDC\nAPY: 4.2%\n预估月收益: 17.5 USDC\n健康因子: N/A (无借款)\n\nGas 费预估: 0.003 ETH',
        '确认存入',
        '✓ 存入成功！\n获得 aUSDC: 5000\n开始计息\n交易哈希: 0x3a7c...9f2e'
      ],
      options: ['1000 USDC', '2500 USDC', '5000 USDC', 'Max'],
      selectedOption: '5000 USDC',
      transaction: {
        title: '存入 5000 USDC → Aave',
        details: 'APY: 4.2% · 预估月收益: 17.5 USDC',
        button: '确认存入'
      }
    }
  }
};

// ============================================
// Components
// ============================================

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode; variant?: 'default' | 'outline' | 'ghost'; className?: string }) => (
  <span 
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
      variant === 'default' 
        ? 'bg-red-50 text-red-600 border border-red-100' 
        : variant === 'ghost'
        ? 'bg-transparent text-neutral-500'
        : 'bg-white/80 backdrop-blur-sm border border-neutral-200 text-neutral-600'
    } ${className}`}
  >
    {children}
  </span>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  icon: Icon
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-xl';
  const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:shadow-neutral-900/20 hover:-translate-y-0.5',
    secondary: 'bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 hover:-translate-y-0.5',
    outline: 'bg-transparent text-neutral-700 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50',
    ghost: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
};

const Card = ({ children, className = '', hover = false }: { children: React.ReactNode; className?: string; hover?: boolean }) => (
  <div className={`bg-white rounded-2xl border border-neutral-100/80 shadow-sm ${hover ? 'hover:shadow-xl hover:shadow-neutral-900/5 hover:border-neutral-200 transition-all duration-300 hover:-translate-y-1' : ''} ${className}`}>
    {children}
  </div>
);

// Chat Demo Component with Auto-switching
const ChatDemoCard = () => {
  const [activeScenario, setActiveScenario] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Auto-switch scenario every 15 seconds
  useEffect(() => {
    const scenarioTimer = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % chatScenarios.length);
      setVisibleMessages([]);
    }, 15000);

    return () => clearInterval(scenarioTimer);
  }, []);

  // Animate messages one by one
  useEffect(() => {
    setVisibleMessages([]);
    let msgIndex = 0;
    const currentScenario = chatScenarios[activeScenario];
    
    const showNextMessage = () => {
      if (msgIndex < currentScenario.messages.length) {
        setIsTyping(true);
        setTimeout(() => {
          setVisibleMessages((prev) => [...prev, msgIndex]);
          setIsTyping(false);
          msgIndex++;
          setTimeout(showNextMessage, 1500);
        }, 800);
      }
    };

    const timer = setTimeout(showNextMessage, 500);
    return () => clearTimeout(timer);
  }, [activeScenario]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <Card className="p-0 shadow-2xl shadow-neutral-900/5 overflow-hidden h-full flex flex-col" hover>
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-neutral-100 bg-neutral-50/50">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 text-center">
            自然语言对话交互
          </p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto max-h-[400px] min-h-[300px]">
          <AnimatePresence mode="wait">
            {visibleMessages.map((msgIdx) => {
              const currentScenario = chatScenarios[activeScenario];
              const msg = currentScenario.messages[msgIdx];
              if (!msg) return null;
              return (
                <motion.div
                  key={`${activeScenario}-${msgIdx}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-red-500 text-white rounded-br-md'
                      : 'bg-neutral-100 text-neutral-700 rounded-bl-md'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-neutral-100 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
        </div>

        {/* Scenario Tags */}
        <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50/30">
          <div className="flex flex-wrap gap-2 justify-center">
            {chatScenarios.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveScenario(idx);
                  setVisibleMessages([]);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  idx === activeScenario 
                    ? `${s.color} ring-2 ring-offset-1 ring-neutral-200` 
                    : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
                }`}
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const SectionHeader = ({ label, title, description, light = false }: { label?: string; title: string; description?: string; light?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center max-w-2xl mx-auto mb-16"
  >
    {label && (
      <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${light ? 'text-neutral-500' : 'text-red-500'}`}>
        {label}
      </span>
    )}
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${light ? 'text-white' : 'text-neutral-900'}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-6 text-lg leading-relaxed ${light ? 'text-neutral-400' : 'text-neutral-600'}`}>
        {description}
      </p>
    )}
  </motion.div>
);

// ============================================
// Main Page
// ============================================

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStrategy, setActiveStrategy] = useState('transfer');
  const [copied, setCopied] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const copyCommand = () => {
    navigator.clipboard.writeText('claw install wallet');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 自动切换策略标签
  useEffect(() => {
    const strategyTypes = ['create', 'market', 'price', 'arbitrage', 'mining', 'meme', 'ipo', 'perps', 'audit', 'transfer', 'defi', 'dca', 'copy', 'staking', 'lending'];
    let currentIndex = strategyTypes.indexOf(activeStrategy);
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % strategyTypes.length;
      setActiveStrategy(strategyTypes[currentIndex]);
    }, 10000); // 每10秒切换一次

    return () => clearInterval(interval);
  }, [activeStrategy]);

  // 当策略变化时，重新显示消息
  useEffect(() => {
    setVisibleMessages([]);
    setIsTyping(false); // 重置打字状态
    let msgIndex = 0;
    let timers: NodeJS.Timeout[] = [];
    const currentChatContent = strategyDescriptions[activeStrategy].chatContent;
    
    const showNextMessage = () => {
      if (msgIndex < currentChatContent.messages.length) {
        setIsTyping(true);
        const timer1 = setTimeout(() => {
          setVisibleMessages((prev) => [...prev, msgIndex]);
          setIsTyping(false);
          msgIndex++;
          const timer2 = setTimeout(showNextMessage, 1500);
          timers.push(timer2);
        }, 800);
        timers.push(timer1);
      }
    };

    const timer = setTimeout(showNextMessage, 500);
    timers.push(timer);
    
    return () => {
      timers.forEach(t => clearTimeout(t));
      setIsTyping(false); // 清理时也重置打字状态
    };
  }, [activeStrategy]);

  // 消息会自动向上推，不需要手动滚动
  useEffect(() => {
    // 移除自动滚动功能，因为我们使用了 overflow-y-hidden
  }, [visibleMessages, isTyping]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-neutral-900 overflow-x-hidden selection:bg-red-100 selection:text-red-900">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-red-100/40 via-transparent to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-red-100/30 via-transparent to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* ============================================
          Navigation
      ============================================ */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-4 mt-4">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between bg-white/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg shadow-neutral-900/5">
            {/* Logo */}
            <motion.a href="/" className="flex items-center gap-3 group" whileHover={{ scale: 1.02 }}>
              <div className="relative h-10 w-auto">
                <img src="/claw.png" alt="Claw" className="h-full w-auto object-contain" />
              </div>
            </motion.a>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: '功能', href: '#features' },
                { label: '安全', href: '#security' },
                { label: '开发者', href: '#developer' },
                { label: 'Dashboard', href: '/dashboard' },
              ].map((item, i) => (
                <motion.a 
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 rounded-xl hover:bg-neutral-100/80 transition-all"
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.a 
              href="/dashboard" 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="px-5 py-2.5 text-sm font-medium bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:shadow-neutral-900/20"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              开始使用
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* ============================================
          Hero Section
      ============================================ */}
      <motion.section style={{ opacity: heroOpacity }} className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto w-full relative">
          <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <img src="/claw.png" alt="Claw Wallet" className="h-12 w-auto" />
              </motion.div>
              
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              >
                让 AI Agent
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  拥有安全钱包
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl font-medium"
              >
                Claw Wallet 是为 AI Agent 构建的 Web3 安全钱包，采用 TEE 硬件加密分片架构。通过自然语言对话，让 AI 安全地管理加密资产。
              </motion.p>
              
              {/* Install Command */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8"
                id="install"
              >
                <p className="text-sm text-neutral-500 mb-3 font-medium">发送给 OpenClaw 安装：</p>
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="flex-1 flex items-center gap-3 px-5 py-4 bg-neutral-900 rounded-xl shadow-xl shadow-neutral-900/20"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Terminal className="w-4 h-4 text-red-400" />
                    <code className="text-white font-mono text-sm tracking-wide">claw install wallet</code>
                  </motion.div>
                  <motion.button
                    onClick={copyCommand}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check className="w-5 h-5 text-green-600" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy className="w-5 h-5 text-neutral-600" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-10 flex items-center gap-8"
              >
                {[
                  { icon: Shield, label: '自托管' },
                  { icon: Lock, label: 'TEE 加密' },
                  { icon: Fingerprint, label: 'AI 安全风控' },
                  { icon: MessageSquare, label: '自然语言交互' },
                ].map((item, i) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-neutral-500"
                  >
                    <item.icon className="w-4 h-4 text-green-500" />
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

        {/* Supported Chains */}
        <div className="absolute bottom-24 left-0 right-0">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { name: 'Bitcoin', logo: '/logos/BTC.png' },
                { name: 'Ethereum', logo: '/logos/ethereum.png' },
                { name: 'BSC', logo: '/logos/BSC.png' },
                { name: 'SUI', logo: '/logos/sui.png' },
                { name: 'MONAD', logo: '/logos/monad.png' },
                { name: 'BASE', logo: '/logos/base.png', hasBg: true, hasBorder: true },
                { name: 'Solana', logo: '/logos/solana.png' }
              ].map((chain, index) => (
                <motion.div
                  key={chain.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <div className={`w-12 h-12 flex items-center justify-center cursor-pointer group ${chain.hasBg ? 'bg-neutral-100 rounded-full' : ''} ${chain.hasBorder ? 'border border-neutral-200' : ''}`}>
                    <img src={chain.logo} alt={chain.name} className="w-full h-full object-contain rounded-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-neutral-300"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ============================================          Agent Integration Section      ============================================ */}
      <section className="py-32 px-6 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  <span className="block">给你的 AI Agent</span>
                  <span className="block">安装 Claw Wallet</span>
                  <span className="text-red-500">
                    它将会帮你
                  </span>
                </h2>
                <p className="text-lg text-neutral-600 mt-6">
                  通过简单的 Skill 安装，你的 AI Agent 就能拥有完整的钱包能力，一切都在安全可控的环境中完成。
                </p>
                
                {/* Strategy Tabs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mt-8 flex flex-wrap gap-2"
                >
                  <button onClick={() => setActiveStrategy('create')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'create' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>创建钱包</button>
                  <button onClick={() => setActiveStrategy('market')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'market' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>市场动态</button>
                  <button onClick={() => setActiveStrategy('price')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'price' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>跟踪币价</button>
                  <button onClick={() => setActiveStrategy('arbitrage')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'arbitrage' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>自动套利</button>
                  <button onClick={() => setActiveStrategy('mining')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'mining' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>挖矿</button>
                  <button onClick={() => setActiveStrategy('meme')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'meme' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>Meme</button>
                  <button onClick={() => setActiveStrategy('ipo')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'ipo' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>币股打新</button>
                  <button onClick={() => setActiveStrategy('perps')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'perps' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>Perps</button>
                  <button onClick={() => setActiveStrategy('audit')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'audit' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>安全审计</button>
                  <button onClick={() => setActiveStrategy('transfer')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'transfer' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>转账</button>
                  <button onClick={() => setActiveStrategy('defi')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'defi' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>DeFi</button>
                  <button onClick={() => setActiveStrategy('dca')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'dca' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>定投</button>
                  <button onClick={() => setActiveStrategy('copy')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'copy' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>跟单</button>
                  <button onClick={() => setActiveStrategy('staking')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'staking' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>质押</button>
                  <button onClick={() => setActiveStrategy('lending')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStrategy === 'lending' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>借贷</button>
                </motion.div>
                
                {/* Install Command */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-12"
                >
                  <p className="text-sm text-neutral-500 mb-3 font-medium">发送给 OpenClaw 安装：</p>
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="flex-1 flex items-center gap-3 px-5 py-4 bg-neutral-900 rounded-xl shadow-xl shadow-neutral-900/20"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Terminal className="w-4 h-4 text-red-400" />
                      <code className="text-white font-mono text-sm tracking-wide">claw install wallet</code>
                    </motion.div>
                    <motion.button
                      onClick={copyCommand}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-5 h-5 text-green-600" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Copy className="w-5 h-5 text-neutral-600" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </motion.div>

              </motion.div>
            </div>

            {/* Chat Interface */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden shadow-2xl shadow-neutral-900/10 border-neutral-200/50 h-full flex flex-col"
                >
                  {/* Chat Content */}
                  <div className="p-6 bg-white space-y-6 flex flex-col flex-1">
                    {/* Option Selection */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStrategy}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-neutral-50 rounded-xl p-5 flex flex-col flex-1"
                      >
                        {/* Messages Container */}
                        <div className="messages-container space-y-4 mb-4 flex-1 overflow-y-auto">
                          {/* User's initial request (title) */}
                          <motion.div
                            key={`title-${activeStrategy}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex justify-end"
                          >
                            <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line bg-red-500 text-white rounded-br-md">
                              {strategyDescriptions[activeStrategy].chatContent.title}
                            </div>
                          </motion.div>
                          
                          {/* Other messages */}
                          {visibleMessages.map((msgIdx) => {
                            const message = strategyDescriptions[activeStrategy].chatContent.messages[msgIdx];
                            if (!message) return null;
                            const isAI = msgIdx % 2 === 1; // AI messages are at odd indices (second, fourth, etc.)
                            return (
                              <motion.div
                                key={msgIdx}
                                initial={{ opacity: 0, x: isAI ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}
                              >
                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${isAI ? 'bg-neutral-100 text-neutral-700 rounded-bl-md' : 'bg-red-500 text-white rounded-br-md'}`}>
                                  {message}
                                </div>
                              </motion.div>
                            );
                          })}
                          
                          {/* Typing indicator */}
                          {isTyping && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex justify-start"
                            >
                              <div className="bg-neutral-100 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                              </div>
                            </motion.div>
                          )}
                        </div>
                        

                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Message Input */}
                    <div className="flex gap-3 mt-auto">
                      <input 
                        type="text" 
                        placeholder="输入你的指令... 例如：查询余额、转账、创建钱包" 
                        className="flex-1 px-4 py-3 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-sm"
                      />
                      <button className="px-6 py-3 bg-red-500 text-white rounded-full font-medium shadow-lg shadow-red-500/20 hover:bg-red-600 transition-all">
                        Ask Claw
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* ============================================
          How It Works
      ============================================ */}
      <section className="py-32 px-6 bg-neutral-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <SectionHeader 
            title="三步即刻开始"
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '创建钱包', desc: '通过自然语言指令快速创建，无需管理复杂助记词', icon: Wallet, command: '帮我创建一个安全钱包' },
              { step: '02', title: '设置规则', desc: '自定义安全策略，包括转账限额、白名单等', icon: Shield, command: '设置每日限额 1000 USDC' },
              { step: '03', title: '开始使用', desc: '用对话方式执行所有链上操作，安全又便捷', icon: Zap, command: '查询余额并转账' },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -top-4 -left-2 text-8xl font-bold text-white/[0.03] select-none">{item.step}</div>
                <div className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/30 group-hover:scale-105 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <div className="p-4 rounded-xl bg-black/30 border border-white/10 font-mono text-sm text-neutral-300">
                    "{item.command}"
                  </div>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ============================================          Security Section      ============================================ */}
      <section id="security" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                安全至上，
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  层层防护
                </span>
              </h2>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                AI Agent 和加密资产是高价值目标。Claw Wallet 从设计之初就将安全作为核心，采用企业级安全架构保护你的资产。
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                不同于其他方案将私钥交给 Agent，Claw Wallet 采用<span className="font-semibold text-red-500">自托管架构</span>，私钥永远在你的控制之下。
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {securityLayers.map((layer, idx) => (
                  <motion.div 
                    key={layer.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-5 rounded-2xl bg-white border border-neutral-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center mb-4 group-hover:from-red-50 group-hover:to-red-100 transition-all duration-300">
                      <layer.icon className="w-6 h-6 text-neutral-600 group-hover:text-red-500 transition-colors" />
                    </div>
                    <h4 className="font-semibold text-neutral-900">{layer.title}</h4>
                    <p className="text-xs text-neutral-500 mt-1">{layer.desc}</p>
                    <p className="text-xs text-neutral-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{layer.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-neutral-100 via-neutral-50 to-white border border-neutral-100 flex items-center justify-center overflow-hidden">
                {/* Animated Rings */}
                <div className="relative w-64 h-64">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-red-200/60" 
                  />
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border-2 border-dashed border-red-300/60" 
                  />
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-16 rounded-full border-2 border-red-400/60" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-2xl shadow-red-500/30"
                  >
                    <Shield className="w-12 h-12 text-white" />
                  </motion.div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  animate={{ y: [0, -8, 0] }}
                  className="absolute bottom-8 right-8 bg-white rounded-2xl p-5 shadow-2xl border border-neutral-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-neutral-900">100%</p>
                      <p className="text-sm text-neutral-500">自托管</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  animate={{ y: [0, 8, 0] }}
                  className="absolute top-8 left-8 bg-white rounded-xl p-4 shadow-xl border border-neutral-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-neutral-700">实时监控中</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ============================================          CTA Section      ============================================ */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-100/40 to-neutral-100/40 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <img src="/claw.png" alt="Claw Wallet" className="h-12 w-auto mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            准备好让你的 Agent
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              拥有安全钱包了吗？
            </span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            加入数千名开发者的行列，使用 Claw Wallet 为 AI Agent 提供安全可靠的加密资产管理能力。
          </p>
          
          <div className="mt-10">
            <p className="text-sm text-neutral-500 mb-4 font-medium">发送给 OpenClaw 立即安装：</p>
            <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
              <motion.div 
                className="flex-1 flex items-center gap-3 px-5 py-4 bg-neutral-900 rounded-xl shadow-xl shadow-neutral-900/20"
                whileHover={{ scale: 1.01 }}
              >
                <Terminal className="w-4 h-4 text-red-400" />
                <code className="text-white font-mono text-sm tracking-wide">claw install wallet</code>
              </motion.div>
              <motion.button
                onClick={copyCommand}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm"
              >
                {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-neutral-600" />}
              </motion.button>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" icon={Code2}>查看文档</Button>
            <Button variant="secondary" size="lg" icon={Github}>GitHub</Button>
          </div>
        </motion.div>
      </section>



      {/* ============================================          Footer      ============================================ */}
      <footer className="py-16 px-6 border-t border-neutral-100 bg-neutral-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-2.5 mb-5 group">
                <div className="relative h-10 w-auto">
                  <img src="/claw.png" alt="Claw" className="h-full w-auto object-contain" />
                </div>
              </a>
              <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
                专为 AI Agent 构建的安全加密钱包。自托管、无私钥管理、智能风控。让 AI 安全地管理加密资产。
              </p>
              <div className="mt-6 flex items-center gap-4">
                {['GitHub', 'Twitter', 'Discord'].map((social) => (
                  <a key={social} href="#" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-5 text-neutral-900">产品</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                {['功能特性', '安全架构', '定价', '更新日志'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-neutral-900 transition-colors hover:translate-x-0.5 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-5 text-neutral-900">开发者</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                {['文档', 'API 参考', 'GitHub', 'SDK'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-neutral-900 transition-colors hover:translate-x-0.5 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">© 2026 Claw Wallet. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors">隐私政策</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors">服务条款</a>
              <span className="text-sm font-medium text-neutral-900 bg-neutral-100 px-3 py-1 rounded-full">v1.6.0</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
