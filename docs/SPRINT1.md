# Sprint 1: 核心功能完善 (v0.2.0)

## 目标
完善钱包管理和安全规则功能，提升用户体验和安全性。

## 时间线
**开始日期**: 2026-02-28  
**结束日期**: 2026-03-14 (2 周)  
**版本目标**: v0.2.0

---

## 任务清单

### 任务 1: 钱包详情页面
**优先级**: P0  
**预计工时**: 2 天  
**负责人**: 前端开发

#### 功能需求
- [ ] 创建 `/dashboard/wallet/[id]` 页面
- [ ] 显示完整钱包信息（地址、余额、UID、创建时间）
- [ ] 添加交易统计图表（最近 7 天交易量、余额变化）
- [ ] 显示最近交易记录列表
- [ ] 导出钱包数据功能（JSON/CSV）
- [ ] 从钱包列表点击跳转

#### 技术实现
```typescript
// 新增类型
interface WalletDetails extends Wallet {
  transactions: Transaction[];
  stats: {
    totalTransactions: number;
    totalVolume: string;
    lastActivity: string;
  };
}
```

#### UI 设计
- 左侧：钱包基本信息卡片
- 右侧：交易统计图表
- 下方：最近交易记录表格

---

### 任务 2: 钱包编辑功能
**优先级**: P0  
**预计工时**: 1 天  
**负责人**: 前端开发

#### 功能需求
- [ ] 添加编辑按钮到钱包卡片
- [ ] 创建编辑对话框
- [ ] 支持修改钱包名称
- [ ] 支持添加钱包备注
- [ ] 保存到本地存储

#### 技术实现
```typescript
// 更新 Wallet 类型
interface Wallet {
  id: string;
  name?: string;  // 新增
  description?: string;  // 新增
  address: string;
  balance: string;
  createdAt: string;
  uid: string;
}
```

---

### 任务 3: 钱包删除功能
**优先级**: P0  
**预计工时**: 0.5 天  
**负责人**: 前端开发

#### 功能需求
- [ ] 添加删除按钮到钱包卡片
- [ ] 创建确认对话框
- [ ] 要求输入 "DELETE" 确认
- [ ] 显示警告信息（删除后无法恢复）
- [ ] 从列表中移除并更新状态

#### 安全考虑
- 必须二次确认
- 警告用户备份重要信息
- 删除后保留交易历史记录

---

### 任务 4: 钱包搜索和筛选
**优先级**: P1  
**预计工时**: 1 天  
**负责人**: 前端开发

#### 功能需求
- [ ] 添加搜索框到钱包列表
- [ ] 支持按名称/地址搜索
- [ ] 添加排序功能（按余额、创建时间）
- [ ] 添加筛选器（按余额范围）

---

### 任务 5: 安全规则配置页面
**优先级**: P0  
**预计工时**: 3 天  
**负责人**: 前端开发

#### 功能需求
- [ ] 创建 `/dashboard/security` 页面
- [ ] PIN 码设置/修改
  - 6 位数字 PIN
  - 确认 PIN
  - 修改时需要旧 PIN
- [ ] 交易限额配置
  - 单笔交易限额
  - 日累计限额
  - 限额提醒
- [ ] 地址白名单管理
  - 添加/删除地址
  - 地址验证
  - 备注功能
- [ ] 合约黑名单管理
  - 添加/删除合约地址
  - 合约验证
- [ ] 安全评分显示
  - 根据规则计算评分
  - 安全建议提示

#### 技术实现
```typescript
// 安全规则类型
interface SecurityRule {
  id: string;
  walletId: string;
  pinCode?: string;
  maxAmountPerTx?: string;
  maxAmountPerDay?: string;
  whitelistAddresses: WhitelistAddress[];
  blacklistContracts: BlacklistContract[];
  securityScore: number;
}

interface WhitelistAddress {
  id: string;
  address: string;
  name: string;
  addedAt: string;
}

interface BlacklistContract {
  id: string;
  address: string;
  name: string;
  reason?: string;
  addedAt: string;
}
```

#### UI 设计
- 标签页切换不同规则类型
- 表单验证和错误提示
- 实时安全评分更新

---

### 任务 6: 安全规则验证
**优先级**: P0  
**预计工时**: 2 天  
**负责人**: 前端开发

#### 功能需求
- [ ] 交易前规则检查
- [ ] 超出限额时阻止交易并提示
- [ ] 非白名单地址交易时警告
- [ ] 黑名单合约交互时阻止
- [ ] 显示规则检查详情

#### 集成点
- 在转账功能中集成
- 在小龙虾测试工具中集成

---

### 任务 7: 转账功能
**优先级**: P0  
**预计工时**: 2 天  
**负责人**: 前端开发

#### 功能需求
- [ ] 创建转账对话框
- [ ] 收款地址输入和验证
- [ ] 金额输入和格式检查
- [ ] 余额检查
- [ ] Gas 费用估算（模拟）
- [ ] 安全规则检查
- [ ] PIN 码确认
- [ ] 交易确认和提交
- [ ] 交易状态反馈

#### 技术实现
```typescript
interface TransferRequest {
  fromWalletId: string;
  toAddress: string;
  amount: string;
  token: string;
  gasPrice?: string;
}

interface TransferResult {
  success: boolean;
  transactionId?: string;
  error?: string;
  status: 'pending' | 'success' | 'failed';
}
```

---

### 任务 8: 充值功能
**优先级**: P1  
**预计工时**: 1 天  
**负责人**: 前端开发

#### 功能需求
- [ ] 创建充值对话框
- [ ] 显示钱包地址和 QR 码
- [ ] 一键复制地址
- [ ] 显示充值说明
- [ ] 充值记录列表

---

## Mock 数据更新

### 新增 Mock 数据
```typescript
// mockData.ts 新增
export const mockSecurityRules: SecurityRule[] = [
  {
    id: '1',
    walletId: '1',
    pinCode: '123456',
    maxAmountPerTx: '1.0',
    maxAmountPerDay: '5.0',
    whitelistAddresses: [
      {
        id: '1',
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
        name: '我的主钱包',
        addedAt: '2026-02-01T10:00:00Z'
      }
    ],
    blacklistContracts: [],
    securityScore: 85
  }
];
```

---

## 技术方案

### 组件清单
1. **WalletDetailPage** - 钱包详情页面
2. **EditWalletDialog** - 编辑钱包对话框
3. **DeleteWalletDialog** - 删除钱包确认对话框
4. **SecurityRulesPage** - 安全规则配置页面
5. **PinCodeInput** - PIN 码输入组件
6. **AddressWhitelist** - 地址白名单管理组件
7. **ContractBlacklist** - 合约黑名单管理组件
8. **TransferDialog** - 转账对话框
9. **DepositDialog** - 充值对话框
10. **SecurityScore** - 安全评分显示组件

### 状态管理
使用 React Context + useReducer 管理：
- 钱包列表状态
- 安全规则状态
- 交易状态

### 本地存储
使用 localStorage 持久化：
- 钱包数据
- 安全规则
- 用户设置

---

## UI/UX 设计规范

### 颜色方案
- 主色调：橙色到紫色渐变
- 背景：深色主题 (#0a0a0f)
- 卡片：半透明深色背景
- 成功：绿色 (#22c55e)
- 警告：黄色 (#eab308)
- 错误：红色 (#ef4444)

### 动画效果
- 页面过渡：0.3s ease
- 卡片悬停：scale 1.02 + y -5px
- 按钮点击：scale 0.95
- 对话框：fade + scale

---

## 测试计划

### 单元测试
- [ ] 钱包编辑功能
- [ ] 安全规则验证逻辑
- [ ] 转账金额验证

### 集成测试
- [ ] 完整转账流程
- [ ] 安全规则检查流程
- [ ] 钱包删除流程

### 手动测试
- [ ] 响应式设计检查
- [ ] 动画效果检查
- [ ] 错误处理检查

---

## 交付标准

### 功能完成
- [ ] 所有任务完成并通过测试
- [ ] 代码审查通过
- [ ] 文档更新完成

### 质量标准
- [ ] 无严重 Bug
- [ ] 性能达标（页面加载 < 3s）
- [ ] 响应式设计正常

### 文档
- [ ] 更新 CHANGELOG.md
- [ ] 更新 API 文档
- [ ] 更新用户指南

---

## 风险与缓解

| 风险 | 影响 | 缓解措施 |
|-----|------|---------|
| 安全规则逻辑复杂 | 中 | 提前设计，充分测试 |
| 本地存储限制 | 低 | 考虑 IndexedDB |
| 时间不足 | 中 | 优先级排序，必要时调整范围 |

---

## 每日站会

**时间**: 每天上午 10:00  
**时长**: 15 分钟  
**内容**:
1. 昨天完成了什么
2. 今天计划做什么
3. 有什么阻碍

---

**Sprint 计划会议**: 2026-02-28  
**Sprint 评审会议**: 2026-03-13  
**Sprint 回顾会议**: 2026-03-14

---

**文档版本**: v1.0  
**创建日期**: 2026-02-28  
**最后更新**: 2026-02-28
