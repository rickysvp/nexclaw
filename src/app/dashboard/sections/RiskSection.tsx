'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, AlertTriangle, CheckCircle, FileText, Bell, X, Edit2, Save, Plus,
  Trash2, Search, Filter, ChevronDown, Clock, AlertOctagon, Eye,
  Mail, Smartphone, Activity, Lock, History, Users, Key, Fingerprint,
  Globe, Cpu, Database, FileCode, Layers, RefreshCw, Play, Pause,
  Settings2, UserCog, ShieldCheck, ShieldAlert, ShieldOff, EyeOff,
  Unlock, UserCheck, UserX, Building2, Wallet, ArrowRightLeft
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useWallet } from '@/lib/wallet-store';
import { RiskRule, RiskLog, Permission, Role } from '@/types';
import { formatDateTime, formatRelativeTime, copyToClipboard } from '@/lib/utils';

// 权限定义
const PERMISSIONS: Permission[] = [
  { id: 'wallet_view', name: '查看钱包', description: '查看钱包列表和余额', module: 'wallet', actions: ['read'] },
  { id: 'wallet_create', name: '创建钱包', description: '创建新的钱包', module: 'wallet', actions: ['create'] },
  { id: 'wallet_delete', name: '删除钱包', description: '删除已有钱包', module: 'wallet', actions: ['delete'] },
  { id: 'wallet_transfer', name: '转账操作', description: '执行转账交易', module: 'wallet', actions: ['transfer'] },
  { id: 'wallet_export', name: '导出私钥', description: '导出钱包私钥', module: 'wallet', actions: ['export'] },
  { id: 'tx_view', name: '查看交易', description: '查看交易记录', module: 'transaction', actions: ['read'] },
  { id: 'tx_approve', name: '审批交易', description: '审批待处理交易', module: 'transaction', actions: ['approve', 'reject'] },
  { id: 'tx_sign', name: '签名交易', description: '对交易进行签名', module: 'transaction', actions: ['sign'] },
  { id: 'risk_view', name: '查看风控', description: '查看风控规则和日志', module: 'risk', actions: ['read'] },
  { id: 'risk_manage', name: '管理风控', description: '创建和编辑风控规则', module: 'risk', actions: ['create', 'update', 'delete'] },
  { id: 'analytics_view', name: '查看分析', description: '查看数据分析报表', module: 'analytics', actions: ['read'] },
  { id: 'settings_manage', name: '系统设置', description: '管理全局设置', module: 'settings', actions: ['update'] },
];

// 预定义角色
const DEFAULT_ROLES: Role[] = [
  {
    id: 'super_admin',
    name: '超级管理员',
    description: '拥有所有权限，可管理其他用户和角色',
    permissions: PERMISSIONS.map(p => p.id),
    isSystem: true,
    createdAt: '2024-01-01',
  },
  {
    id: 'wallet_admin',
    name: '钱包管理员',
    description: '管理钱包和交易，可执行转账和审批',
    permissions: ['wallet_view', 'wallet_create', 'wallet_delete', 'wallet_transfer', 'tx_view', 'tx_approve', 'tx_sign', 'risk_view'],
    isSystem: true,
    createdAt: '2024-01-01',
  },
  {
    id: 'operator',
    name: '操作员',
    description: '可查看钱包和交易，执行转账操作',
    permissions: ['wallet_view', 'wallet_transfer', 'tx_view', 'tx_sign', 'risk_view'],
    isSystem: true,
    createdAt: '2024-01-01',
  },
  {
    id: 'viewer',
    name: '观察员',
    description: '仅可查看，无法执行任何操作',
    permissions: ['wallet_view', 'tx_view', 'risk_view', 'analytics_view'],
    isSystem: true,
    createdAt: '2024-01-01',
  },
  {
    id: 'auditor',
    name: '审计员',
    description: '可查看所有数据和风控日志，用于审计',
    permissions: ['wallet_view', 'tx_view', 'risk_view', 'risk_manage', 'analytics_view'],
    isSystem: true,
    createdAt: '2024-01-01',
  },
];

// 模拟用户数据
interface UserRole {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: Role;
  status: 'active' | 'inactive' | 'suspended';
  lastLoginAt: string;
  twoFactorEnabled: boolean;
  loginAttempts: number;
  ipWhitelist: string[];
}

const MOCK_USERS: UserRole[] = [
  {
    id: 'user_001',
    name: '张三',
    email: 'zhangsan@nexclaw.com',
    role: DEFAULT_ROLES[0],
    status: 'active',
    lastLoginAt: '2024-01-15T10:30:00Z',
    twoFactorEnabled: true,
    loginAttempts: 0,
    ipWhitelist: [],
  },
  {
    id: 'user_002',
    name: '李四',
    email: 'lisi@nexclaw.com',
    role: DEFAULT_ROLES[1],
    status: 'active',
    lastLoginAt: '2024-01-14T16:45:00Z',
    twoFactorEnabled: true,
    loginAttempts: 0,
    ipWhitelist: ['192.168.1.100'],
  },
  {
    id: 'user_003',
    name: '王五',
    email: 'wangwu@nexclaw.com',
    role: DEFAULT_ROLES[2],
    status: 'active',
    lastLoginAt: '2024-01-15T09:00:00Z',
    twoFactorEnabled: false,
    loginAttempts: 2,
    ipWhitelist: [],
  },
  {
    id: 'user_004',
    name: '赵六',
    email: 'zhaoliu@nexclaw.com',
    role: DEFAULT_ROLES[3],
    status: 'inactive',
    lastLoginAt: '2024-01-10T14:20:00Z',
    twoFactorEnabled: false,
    loginAttempts: 0,
    ipWhitelist: [],
  },
];

export default function RiskSection() {
  const { riskRules, riskLogs, updateRiskRule, deleteRiskRule, addRiskRule } = useWallet();
  
  const [activeTab, setActiveTab] = useState<'rules' | 'logs' | 'notifications' | 'permissions'>('rules');
  const [searchQuery, setSearchQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'blocked' | 'warning' | 'passed'>('all');
  
  // Rule editing state
  const [editingRule, setEditingRule] = useState<RiskRule | null>(null);
  const [showRuleDialog, setShowRuleDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  
  // Log detail state
  const [selectedLog, setSelectedLog] = useState<RiskLog | null>(null);
  
  // Permission management state
  const [roles, setRoles] = useState<Role[]>(DEFAULT_ROLES);
  const [users, setUsers] = useState<UserRole[]>(MOCK_USERS);
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [editingUser, setEditingUser] = useState<UserRole | null>(null);
  const [showRoleDialog, setShowRoleDialog] = useState(false);
  const [showUserDialog, setShowUserDialog] = useState(false);
  const [showPermissionDetail, setShowPermissionDetail] = useState<Permission | null>(null);
  
  // Notification settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    transactionAlerts: true,
    riskAlerts: true,
    dailyReport: false,
    weeklyReport: true,
  });

  // Filter rules
  const filteredRules = useMemo(() => {
    return riskRules.filter(rule => {
      const matchesSearch = rule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rule.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSeverity = severityFilter === 'all' || rule.severity === severityFilter;
      return matchesSearch && matchesSeverity;
    });
  }, [riskRules, searchQuery, severityFilter]);

  // Filter logs
  const filteredLogs = useMemo(() => {
    return riskLogs.filter(log => {
      const matchesSearch = log.ruleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.reason.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSeverity = severityFilter === 'all' || log.severity === severityFilter;
      const matchesStatus = statusFilter === 'all' || log.status === statusFilter;
      return matchesSearch && matchesSeverity && matchesStatus;
    });
  }, [riskLogs, searchQuery, severityFilter, statusFilter]);

  // Filter users
  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [users, searchQuery]);

  // Stats
  const stats = useMemo(() => {
    const totalRules = riskRules.length;
    const enabledRules = riskRules.filter(r => r.enabled).length;
    const highRiskLogs = riskLogs.filter(l => l.severity === 'high').length;
    const blockedCount = riskLogs.filter(l => l.status === 'blocked').length;
    const activeUsers = users.filter(u => u.status === 'active').length;
    const totalUsers = users.length;
    return { totalRules, enabledRules, highRiskLogs, blockedCount, activeUsers, totalUsers };
  }, [riskRules, riskLogs, users]);

  const handleSaveRule = () => {
    if (!editingRule) return;
    
    if (editingRule.id.startsWith('new-')) {
      const { id, ...ruleWithoutId } = editingRule;
      addRiskRule(ruleWithoutId);
    } else {
      updateRiskRule(editingRule.id, editingRule);
    }
    setShowRuleDialog(false);
    setEditingRule(null);
  };

  const handleDeleteRule = (id: string) => {
    deleteRiskRule(id);
    setShowDeleteConfirm(null);
  };

  const handleCreateRule = () => {
    setEditingRule({
      id: `new-${Date.now()}`,
      name: '新规则',
      type: 'amount_limit',
      severity: 'medium',
      enabled: true,
      config: { maxAmount: '1000', unit: 'USDT' },
      description: '',
    });
    setShowRuleDialog(true);
  };

  const handleSaveRole = () => {
    if (!editingRole) return;
    
    if (editingRole.id.startsWith('new-')) {
      const newRole: Role = {
        ...editingRole,
        id: `role_${Date.now()}`,
        isSystem: false,
        createdAt: new Date().toISOString(),
      };
      setRoles([...roles, newRole]);
    } else {
      setRoles(roles.map(r => r.id === editingRole.id ? editingRole : r));
    }
    setShowRoleDialog(false);
    setEditingRole(null);
  };

  const handleDeleteRole = (id: string) => {
    setRoles(roles.filter(r => r.id !== id));
  };

  const handleCreateRole = () => {
    setEditingRole({
      id: `new-${Date.now()}`,
      name: '新角色',
      description: '',
      permissions: [],
      isSystem: false,
      createdAt: new Date().toISOString(),
    });
    setShowRoleDialog(true);
  };

  const handleTogglePermission = (permissionId: string) => {
    if (!editingRole) return;
    const hasPermission = editingRole.permissions.includes(permissionId);
    setEditingRole({
      ...editingRole,
      permissions: hasPermission
        ? editingRole.permissions.filter(id => id !== permissionId)
        : [...editingRole.permissions, permissionId],
    });
  };

  const handleUpdateUserRole = (userId: string, roleId: string) => {
    const role = roles.find(r => r.id === roleId);
    if (!role) return;
    setUsers(users.map(u => u.id === userId ? { ...u, role } : u));
  };

  const handleToggleUserStatus = (userId: string) => {
    setUsers(users.map(u => {
      if (u.id === userId) {
        return { ...u, status: u.status === 'active' ? 'suspended' : 'active' as const };
      }
      return u;
    }));
  };

  const handleToggle2FA = (userId: string) => {
    setUsers(users.map(u => u.id === userId ? { ...u, twoFactorEnabled: !u.twoFactorEnabled } : u));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertOctagon className="h-5 w-5 text-red-400" />;
      case 'medium': return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case 'low': return <Shield className="h-5 w-5 text-green-400" />;
      default: return <Shield className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'blocked': return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">已拦截</Badge>;
      case 'warning': return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">警告</Badge>;
      case 'passed': return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">已通过</Badge>;
      default: return <Badge className="bg-gray-500/20 text-gray-400">未知</Badge>;
    }
  };

  const getUserStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">正常</Badge>;
      case 'inactive': return <Badge className="bg-gray-500/20 text-gray-400">未激活</Badge>;
      case 'suspended': return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">已停用</Badge>;
      default: return <Badge className="bg-gray-500/20 text-gray-400">未知</Badge>;
    }
  };

  const getRuleTypeLabel = (type: string) => {
    switch (type) {
      case 'amount_limit': return '金额限制';
      case 'frequency_limit': return '频率限制';
      case 'address_check': return '地址检查';
      case 'behavior_check': return '行为检查';
      case 'data_monitor': return '数据监控';
      case 'contract_scan': return '合约扫描';
      case 'cross_chain': return '跨链监控';
      default: return type;
    }
  };

  const getRuleTypeIcon = (type: string) => {
    switch (type) {
      case 'amount_limit': return <Wallet className="h-4 w-4" />;
      case 'frequency_limit': return <Clock className="h-4 w-4" />;
      case 'address_check': return <ShieldCheck className="h-4 w-4" />;
      case 'behavior_check': return <Activity className="h-4 w-4" />;
      case 'data_monitor': return <Database className="h-4 w-4" />;
      case 'contract_scan': return <FileCode className="h-4 w-4" />;
      case 'cross_chain': return <Layers className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  const getRuleConfigDisplay = (rule: RiskRule) => {
    switch (rule.type) {
      case 'amount_limit':
        return `限额: ${rule.config.maxAmount} ${rule.config.unit}`;
      case 'frequency_limit':
        return `频率: ${rule.config.maxCount} 次/${rule.config.window}`;
      case 'address_check':
        return '检查黑名单地址';
      case 'behavior_check':
        return `敏感度: ${rule.config.sensitivity}`;
      case 'data_monitor':
        return `阈值: ${rule.config.threshold} ${rule.config.unit}`;
      case 'contract_scan':
        return `扫描级别: ${rule.config.scanLevel}`;
      case 'cross_chain':
        return `监控桥: ${rule.config.bridges?.join(', ') || '全部'}`;
      default:
        return '';
    }
  };

  const getModuleIcon = (module: string) => {
    switch (module) {
      case 'wallet': return <Wallet className="h-4 w-4" />;
      case 'transaction': return <ArrowRightLeft className="h-4 w-4" />;
      case 'risk': return <Shield className="h-4 w-4" />;
      case 'analytics': return <Activity className="h-4 w-4" />;
      case 'settings': return <Settings2 className="h-4 w-4" />;
      default: return <Key className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">风控安全</h1>
          <p className="text-gray-400">安全规则、风险监控与权限管理</p>
        </div>
        <div className="flex gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{stats.enabledRules}/{stats.totalRules}</p>
            <p className="text-sm text-gray-400">启用规则</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-400">{stats.highRiskLogs}</p>
            <p className="text-sm text-gray-400">高风险事件</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-400">{stats.blockedCount}</p>
            <p className="text-sm text-gray-400">已拦截</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">{stats.activeUsers}/{stats.totalUsers}</p>
            <p className="text-sm text-gray-400">在线用户</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800/50">
        {[
          { id: 'rules', label: '风控规则', icon: Shield },
          { id: 'logs', label: '风控日志', icon: FileText },
          { id: 'permissions', label: '权限管理', icon: UserCog },
          { id: 'notifications', label: '通知设置', icon: Bell },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-all border-b-2 ${
              activeTab === tab.id
                ? 'text-white border-orange-500'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
            whileHover={{ y: -2 }}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder={activeTab === 'rules' ? '搜索规则名称...' : activeTab === 'permissions' ? '搜索用户、角色...' : '搜索日志...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-800/50 border-gray-700 text-white"
          />
        </div>
        {activeTab === 'rules' && (
          <Button
            onClick={handleCreateRule}
            className="bg-gradient-to-r from-orange-500 to-purple-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            新建规则
          </Button>
        )}
        {activeTab === 'permissions' && (
          <Button
            onClick={handleCreateRole}
            className="bg-gradient-to-r from-orange-500 to-purple-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            新建角色
          </Button>
        )}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'rules' && (
          <motion.div
            key="rules"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {filteredRules.map((rule) => (
              <motion.div
                key={rule.id}
                layout
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getSeverityColor(rule.severity)}`}>
                      {getSeverityIcon(rule.severity)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{rule.name}</h3>
                      <Badge className={getSeverityColor(rule.severity)}>
                        {rule.severity === 'high' ? '高' : rule.severity === 'medium' ? '中' : '低'}优先级
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={rule.enabled}
                      onCheckedChange={() => updateRiskRule(rule.id, { enabled: !rule.enabled })}
                    />
                    <button
                      onClick={() => {
                        setEditingRule({ ...rule });
                        setShowRuleDialog(true);
                      }}
                      className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(rule.id)}
                      className="p-2 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  {getRuleTypeIcon(rule.type)}
                  <span>{getRuleTypeLabel(rule.type)}</span>
                </div>
                <p className="text-sm text-gray-500">{getRuleConfigDisplay(rule)}</p>
                {rule.description && (
                  <p className="text-sm text-gray-500 mt-2">{rule.description}</p>
                )}
              </motion.div>
            ))}
            {filteredRules.length === 0 && (
              <div className="col-span-2 text-center py-12">
                <Shield className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500">没有找到匹配的规则</p>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'logs' && (
          <motion.div
            key="logs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {/* Log Filters */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'high', 'medium', 'low'] as const).map((sev) => (
                <button
                  key={sev}
                  onClick={() => setSeverityFilter(sev)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    severityFilter === sev
                      ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                  }`}
                >
                  {sev === 'all' ? '全部级别' : sev === 'high' ? '高风险' : sev === 'medium' ? '中风险' : '低风险'}
                </button>
              ))}
              {(['all', 'blocked', 'warning', 'passed'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    statusFilter === status
                      ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                  }`}
                >
                  {status === 'all' ? '全部状态' : status === 'blocked' ? '已拦截' : status === 'warning' ? '警告' : '已通过'}
                </button>
              ))}
            </div>

            {/* Logs Table */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-900/50 border-b border-gray-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">时间</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">规则</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">级别</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">状态</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/30">
                  {filteredLogs.map((log) => (
                    <motion.tr
                      key={log.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="h-4 w-4" />
                          {formatRelativeTime(log.timestamp)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-white">{log.ruleName}</td>
                      <td className="px-6 py-4">
                        <Badge className={getSeverityColor(log.severity)}>
                          {log.severity === 'high' ? '高' : log.severity === 'medium' ? '中' : '低'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(log.status)}</td>
                      <td className="px-6 py-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedLog(log)}
                          className="text-gray-400 hover:text-white"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          详情
                        </Button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              {filteredLogs.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">没有找到匹配的日志</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {activeTab === 'permissions' && (
          <motion.div
            key="permissions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Roles Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {roles.map((role) => (
                <motion.div
                  key={role.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setEditingRole({ ...role });
                    setShowRoleDialog(true);
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      role.id === 'super_admin' ? 'bg-red-500/20' :
                      role.id === 'wallet_admin' ? 'bg-orange-500/20' :
                      role.id === 'operator' ? 'bg-blue-500/20' :
                      role.id === 'viewer' ? 'bg-green-500/20' :
                      'bg-purple-500/20'
                    }`}>
                      {role.id === 'super_admin' ? <ShieldAlert className="h-5 w-5 text-red-400" /> :
                       role.id === 'wallet_admin' ? <ShieldCheck className="h-5 w-5 text-orange-400" /> :
                       role.id === 'operator' ? <UserCheck className="h-5 w-5 text-blue-400" /> :
                       role.id === 'viewer' ? <Eye className="h-5 w-5 text-green-400" /> :
                       <UserCog className="h-5 w-5 text-purple-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white truncate">{role.name}</h3>
                      <p className="text-xs text-gray-500">{role.permissions.length} 项权限</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2">{role.description}</p>
                  {role.isSystem && (
                    <Badge className="mt-3 bg-gray-700/50 text-gray-400">系统角色</Badge>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Users Table */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-700/50 flex items-center justify-between">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-400" />
                  用户权限管理
                </h3>
                <span className="text-sm text-gray-400">共 {filteredUsers.length} 位用户</span>
              </div>
              <table className="w-full">
                <thead className="bg-gray-900/50 border-b border-gray-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">用户</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">角色</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">2FA</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">状态</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">最后登录</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/30">
                  {filteredUsers.map((user) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-medium">{user.name[0]}</span>
                          </div>
                          <div>
                            <p className="font-medium text-white">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={user.role.id}
                          onChange={(e) => handleUpdateUserRole(user.id, e.target.value)}
                          className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-white"
                        >
                          {roles.map(role => (
                            <option key={role.id} value={role.id}>{role.name}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggle2FA(user.id)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                            user.twoFactorEnabled
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-gray-700/50 text-gray-400'
                          }`}
                        >
                          <Fingerprint className="h-4 w-4" />
                          {user.twoFactorEnabled ? '已启用' : '未启用'}
                        </button>
                      </td>
                      <td className="px-6 py-4">{getUserStatusBadge(user.status)}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {formatRelativeTime(user.lastLoginAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleToggleUserStatus(user.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              user.status === 'active'
                                ? 'hover:bg-red-500/20 text-gray-400 hover:text-red-400'
                                : 'hover:bg-green-500/20 text-gray-400 hover:text-green-400'
                            }`}
                            title={user.status === 'active' ? '停用用户' : '启用用户'}
                          >
                            {user.status === 'active' ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                          </button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setEditingUser(user);
                              setShowUserDialog(true);
                            }}
                            className="text-gray-400 hover:text-white"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              {filteredUsers.length === 0 && (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">没有找到匹配的用户</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {activeTab === 'notifications' && (
          <motion.div
            key="notifications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Real-time Notifications */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Bell className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">实时通知</h3>
                  <p className="text-sm text-gray-400">即时安全事件提醒</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { key: 'emailNotifications', label: '邮件通知', desc: '接收重要安全事件的邮件提醒', icon: Mail },
                  { key: 'pushNotifications', label: '推送通知', desc: '浏览器推送实时通知', icon: Smartphone },
                  { key: 'transactionAlerts', label: '交易提醒', desc: '交易状态变更时通知', icon: Activity },
                  { key: 'riskAlerts', label: '风控提醒', desc: '风控拦截时通知', icon: AlertTriangle },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between py-3 border-b border-gray-700/30 last:border-0">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, [item.key]: checked }))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Report Settings */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">报告设置</h3>
                  <p className="text-sm text-gray-400">定期安全报告</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { key: 'dailyReport', label: '日报', desc: '每日安全摘要报告' },
                  { key: 'weeklyReport', label: '周报', desc: '每周安全分析报告' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between py-3 border-b border-gray-700/30 last:border-0">
                    <div>
                      <p className="font-medium text-white">{item.label}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, [item.key]: checked }))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rule Edit Dialog */}
      <AnimatePresence>
        {showRuleDialog && editingRule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowRuleDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">
                    {editingRule.id.startsWith('new-') ? '新建规则' : '编辑规则'}
                  </h3>
                  <button
                    onClick={() => setShowRuleDialog(false)}
                    className="p-2 rounded-lg hover:bg-gray-800 text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">规则名称</label>
                  <Input
                    value={editingRule.name}
                    onChange={(e) => setEditingRule({ ...editingRule, name: e.target.value })}
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">规则类型</label>
                  <select
                    value={editingRule.type}
                    onChange={(e) => setEditingRule({ ...editingRule, type: e.target.value as any })}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="amount_limit">金额限制</option>
                    <option value="frequency_limit">频率限制</option>
                    <option value="address_check">地址检查</option>
                    <option value="behavior_check">行为检查</option>
                    <option value="data_monitor">数据监控</option>
                    <option value="contract_scan">合约扫描</option>
                    <option value="cross_chain">跨链监控</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">严重级别</label>
                  <select
                    value={editingRule.severity}
                    onChange={(e) => setEditingRule({ ...editingRule, severity: e.target.value as any })}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="low">低</option>
                    <option value="medium">中</option>
                    <option value="high">高</option>
                  </select>
                </div>
                {editingRule.type === 'amount_limit' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">最大金额</label>
                      <Input
                        value={editingRule.config.maxAmount}
                        onChange={(e) => setEditingRule({
                          ...editingRule,
                          config: { ...editingRule.config, maxAmount: e.target.value }
                        })}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">单位</label>
                      <Input
                        value={editingRule.config.unit}
                        onChange={(e) => setEditingRule({
                          ...editingRule,
                          config: { ...editingRule.config, unit: e.target.value }
                        })}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                )}
                {editingRule.type === 'frequency_limit' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">最大次数</label>
                      <Input
                        type="number"
                        value={editingRule.config.maxCount}
                        onChange={(e) => setEditingRule({
                          ...editingRule,
                          config: { ...editingRule.config, maxCount: parseInt(e.target.value) }
                        })}
                        className="bg-gray-800/50 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">时间窗口</label>
                      <select
                        value={editingRule.config.window}
                        onChange={(e) => setEditingRule({
                          ...editingRule,
                          config: { ...editingRule.config, window: e.target.value }
                        })}
                        className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
                      >
                        <option value="hour">每小时</option>
                        <option value="day">每天</option>
                        <option value="week">每周</option>
                      </select>
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">描述</label>
                  <textarea
                    value={editingRule.description || ''}
                    onChange={(e) => setEditingRule({ ...editingRule, description: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white resize-none h-20"
                    placeholder="规则描述..."
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-800 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700"
                  onClick={() => setShowRuleDialog(false)}
                >
                  取消
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600"
                  onClick={handleSaveRule}
                >
                  <Save className="h-4 w-4 mr-2" />
                  保存
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Role Edit Dialog */}
      <AnimatePresence>
        {showRoleDialog && editingRole && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowRoleDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">
                    {editingRole.id.startsWith('new-') ? '新建角色' : '编辑角色'}
                  </h3>
                  <button
                    onClick={() => setShowRoleDialog(false)}
                    className="p-2 rounded-lg hover:bg-gray-800 text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">角色名称</label>
                  <Input
                    value={editingRole.name}
                    onChange={(e) => setEditingRole({ ...editingRole, name: e.target.value })}
                    className="bg-gray-800/50 border-gray-700 text-white"
                    disabled={editingRole.isSystem}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">角色描述</label>
                  <textarea
                    value={editingRole.description}
                    onChange={(e) => setEditingRole({ ...editingRole, description: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white resize-none h-20"
                    placeholder="角色描述..."
                    disabled={editingRole.isSystem}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-4">权限配置</label>
                  <div className="space-y-4">
                    {['wallet', 'transaction', 'risk', 'analytics', 'settings'].map((module) => {
                      const modulePermissions = PERMISSIONS.filter(p => p.module === module);
                      if (modulePermissions.length === 0) return null;
                      return (
                        <div key={module} className="bg-gray-800/30 rounded-xl p-4">
                          <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                            {getModuleIcon(module)}
                            {module === 'wallet' ? '钱包管理' :
                             module === 'transaction' ? '交易管理' :
                             module === 'risk' ? '风控安全' :
                             module === 'analytics' ? '数据分析' : '系统设置'}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {modulePermissions.map((permission) => (
                              <label
                                key={permission.id}
                                className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 cursor-pointer hover:bg-gray-700/50 transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={editingRole.permissions.includes(permission.id)}
                                  onChange={() => handleTogglePermission(permission.id)}
                                  className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500"
                                  disabled={editingRole.isSystem}
                                />
                                <div>
                                  <p className="font-medium text-white text-sm">{permission.name}</p>
                                  <p className="text-xs text-gray-500">{permission.description}</p>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-800 flex gap-3">
                {!editingRole.isSystem && (
                  <Button
                    variant="outline"
                    className="border-red-700 text-red-400 hover:bg-red-500/10"
                    onClick={() => {
                      handleDeleteRole(editingRole.id);
                      setShowRoleDialog(false);
                    }}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    删除
                  </Button>
                )}
                <div className="flex-1"></div>
                <Button
                  variant="outline"
                  className="border-gray-700"
                  onClick={() => setShowRoleDialog(false)}
                >
                  取消
                </Button>
                {!editingRole.isSystem && (
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-purple-600"
                    onClick={handleSaveRole}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    保存
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Detail Dialog */}
      <AnimatePresence>
        {showUserDialog && editingUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowUserDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">用户详情</h3>
                  <button
                    onClick={() => setShowUserDialog(false)}
                    className="p-2 rounded-lg hover:bg-gray-800 text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-medium">{editingUser.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{editingUser.name}</h4>
                    <p className="text-gray-400">{editingUser.email}</p>
                    <div className="flex items-center gap-2 mt-2">
                      {getUserStatusBadge(editingUser.status)}
                      <Badge className={editingUser.twoFactorEnabled ? 'bg-green-500/20 text-green-400' : 'bg-gray-700/50 text-gray-400'}>
                        {editingUser.twoFactorEnabled ? '2FA 已启用' : '2FA 未启用'}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-400">角色</span>
                    <span className="text-white font-medium">{editingUser.role.name}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-400">最后登录</span>
                    <span className="text-white">{formatDateTime(editingUser.lastLoginAt)}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-400">登录失败次数</span>
                    <span className={`font-medium ${editingUser.loginAttempts > 3 ? 'text-red-400' : 'text-white'}`}>
                      {editingUser.loginAttempts} 次
                    </span>
                  </div>
                  <div className="py-3 border-b border-gray-800">
                    <span className="text-gray-400 block mb-2">IP 白名单</span>
                    {editingUser.ipWhitelist.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {editingUser.ipWhitelist.map((ip, idx) => (
                          <Badge key={idx} className="bg-gray-700/50 text-gray-300">{ip}</Badge>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-500">未设置</span>
                    )}
                  </div>
                  <div className="py-3">
                    <span className="text-gray-400 block mb-3">权限列表</span>
                    <div className="flex flex-wrap gap-2">
                      {editingUser.role.permissions.map((permId) => {
                        const perm = PERMISSIONS.find(p => p.id === permId);
                        return perm ? (
                          <Badge key={permId} className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                            {perm.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-800 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700"
                  onClick={() => setShowUserDialog(false)}
                >
                  关闭
                </Button>
                <Button
                  className={`flex-1 ${editingUser.status === 'active' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                  onClick={() => {
                    handleToggleUserStatus(editingUser.id);
                    setShowUserDialog(false);
                  }}
                >
                  {editingUser.status === 'active' ? (
                    <><UserX className="h-4 w-4 mr-2" />停用用户</>
                  ) : (
                    <><UserCheck className="h-4 w-4 mr-2" />启用用户</>
                  )}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowDeleteConfirm(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-md p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">确认删除</h3>
                  <p className="text-sm text-gray-400">此操作无法撤销</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                您确定要删除这条风控规则吗？删除后将不再进行相关风险检查。
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700"
                  onClick={() => setShowDeleteConfirm(null)}
                >
                  取消
                </Button>
                <Button
                  className="flex-1 bg-red-500 hover:bg-red-600"
                  onClick={() => handleDeleteRule(showDeleteConfirm)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  删除
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Log Detail Dialog */}
      <AnimatePresence>
        {selectedLog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedLog(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getSeverityIcon(selectedLog.severity)}
                    <div>
                      <h3 className="text-lg font-bold text-white">{selectedLog.ruleName}</h3>
                      <p className="text-sm text-gray-400">{getStatusBadge(selectedLog.status)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedLog(null)}
                    className="p-2 rounded-lg hover:bg-gray-800 text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">触发时间</span>
                  <span className="text-white">{formatDateTime(selectedLog.timestamp)}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">风险级别</span>
                  <Badge className={getSeverityColor(selectedLog.severity)}>
                    {selectedLog.severity === 'high' ? '高' : selectedLog.severity === 'medium' ? '中' : '低'}
                  </Badge>
                </div>
                <div className="py-2">
                  <span className="text-gray-400 block mb-2">触发原因</span>
                  <p className="text-white bg-gray-800/30 p-3 rounded-lg">{selectedLog.reason}</p>
                </div>
                {selectedLog.details && (
                  <div className="py-2">
                    <span className="text-gray-400 block mb-2">详细信息</span>
                    <pre className="text-sm text-gray-300 bg-gray-800/30 p-3 rounded-lg overflow-x-auto">
                      {JSON.stringify(selectedLog.details, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
              <div className="p-6 border-t border-gray-800">
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-purple-600"
                  onClick={() => setSelectedLog(null)}
                >
                  关闭
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
