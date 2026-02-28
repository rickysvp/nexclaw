'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Plus,
  Trash2,
  Save,
  ChevronRight,
  Wallet,
} from 'lucide-react';
import { mockWallets, mockSecurityRules, getWalletSecurityRule } from '@/lib/mockData';
import { SecurityRule, WhitelistAddress, BlacklistContract, Wallet as WalletType } from '@/types';

export default function SecurityPage() {
  const [selectedWallet, setSelectedWallet] = useState<WalletType | null>(null);
  const [securityRule, setSecurityRule] = useState<SecurityRule | null>(null);
  const [activeTab, setActiveTab] = useState<'pin' | 'limits' | 'whitelist' | 'blacklist'>('pin');
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  // PIN Code State
  const [pinCode, setPinCode] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [oldPin, setOldPin] = useState('');

  // Limits State
  const [maxAmountPerTx, setMaxAmountPerTx] = useState('');
  const [maxAmountPerDay, setMaxAmountPerDay] = useState('');

  // Whitelist State
  const [whitelistAddresses, setWhitelistAddresses] = useState<WhitelistAddress[]>([]);
  const [newWhitelistAddress, setNewWhitelistAddress] = useState('');
  const [newWhitelistName, setNewWhitelistName] = useState('');

  // Blacklist State
  const [blacklistContracts, setBlacklistContracts] = useState<BlacklistContract[]>([]);
  const [newBlacklistAddress, setNewBlacklistAddress] = useState('');
  const [newBlacklistName, setNewBlacklistName] = useState('');
  const [newBlacklistReason, setNewBlacklistReason] = useState('');

  useEffect(() => {
    if (selectedWallet) {
      const rule = getWalletSecurityRule(selectedWallet.id);
      if (rule) {
        setSecurityRule(rule);
        setPinCode(rule.pinCode || '');
        setMaxAmountPerTx(rule.maxAmountPerTx || '');
        setMaxAmountPerDay(rule.maxAmountPerDay || '');
        setWhitelistAddresses(rule.whitelistAddresses);
        setBlacklistContracts(rule.blacklistContracts);
      } else {
        // Create default rule
        const newRule: SecurityRule = {
          id: `sr_${selectedWallet.id}`,
          walletId: selectedWallet.id,
          pinCode: '',
          maxAmountPerTx: '',
          maxAmountPerDay: '',
          whitelistAddresses: [],
          blacklistContracts: [],
          securityScore: 50,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        setSecurityRule(newRule);
        mockSecurityRules.push(newRule);
        setPinCode('');
        setMaxAmountPerTx('');
        setMaxAmountPerDay('');
        setWhitelistAddresses([]);
        setBlacklistContracts([]);
      }
    }
  }, [selectedWallet]);

  const calculateSecurityScore = (rule: SecurityRule): number => {
    let score = 50; // Base score
    if (rule.pinCode) score += 15;
    if (rule.maxAmountPerTx) score += 10;
    if (rule.maxAmountPerDay) score += 10;
    if (rule.whitelistAddresses.length > 0) score += 10;
    if (rule.blacklistContracts.length > 0) score += 5;
    return Math.min(score, 100);
  };

  const handleSave = () => {
    if (!securityRule) return;

    const updatedRule: SecurityRule = {
      ...securityRule,
      pinCode: pinCode || undefined,
      maxAmountPerTx: maxAmountPerTx || undefined,
      maxAmountPerDay: maxAmountPerDay || undefined,
      whitelistAddresses,
      blacklistContracts,
      securityScore: calculateSecurityScore({ ...securityRule, pinCode, maxAmountPerTx, maxAmountPerDay, whitelistAddresses, blacklistContracts }),
      updatedAt: new Date().toISOString(),
    };

    // Update in mockSecurityRules
    const index = mockSecurityRules.findIndex((r) => r.id === securityRule.id);
    if (index !== -1) {
      mockSecurityRules[index] = updatedRule;
    }

    setSecurityRule(updatedRule);
    setSaveMessage('安全规则已保存');
    setTimeout(() => setSaveMessage(null), 2000);
  };

  const addWhitelistAddress = () => {
    if (!newWhitelistAddress || !newWhitelistName) return;
    const newEntry: WhitelistAddress = {
      id: `wl_${Date.now()}`,
      address: newWhitelistAddress,
      name: newWhitelistName,
      addedAt: new Date().toISOString(),
    };
    setWhitelistAddresses([...whitelistAddresses, newEntry]);
    setNewWhitelistAddress('');
    setNewWhitelistName('');
  };

  const removeWhitelistAddress = (id: string) => {
    setWhitelistAddresses(whitelistAddresses.filter((addr) => addr.id !== id));
  };

  const addBlacklistContract = () => {
    if (!newBlacklistAddress || !newBlacklistName) return;
    const newEntry: BlacklistContract = {
      id: `bl_${Date.now()}`,
      address: newBlacklistAddress,
      name: newBlacklistName,
      reason: newBlacklistReason || undefined,
      addedAt: new Date().toISOString(),
    };
    setBlacklistContracts([...blacklistContracts, newEntry]);
    setNewBlacklistAddress('');
    setNewBlacklistName('');
    setNewBlacklistReason('');
  };

  const removeBlacklistContract = (id: string) => {
    setBlacklistContracts(blacklistContracts.filter((contract) => contract.id !== id));
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Save Message */}
      {saveMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          {saveMessage}
        </motion.div>
      )}

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">安全规则</h1>
              <p className="text-gray-400">配置钱包安全设置</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Wallet Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-white">选择钱包</h3>
              <div className="space-y-3">
                {mockWallets.map((wallet) => (
                  <motion.button
                    key={wallet.id}
                    onClick={() => setSelectedWallet(wallet)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                      selectedWallet?.id === wallet.id
                        ? 'border-orange-500/50 bg-gradient-to-r from-orange-500/10 to-purple-500/10'
                        : 'border-gray-700/50 hover:border-gray-600/50 bg-gray-900/30'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                        <Wallet className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{wallet.name || `Wallet #${wallet.id}`}</p>
                        <p className="text-sm text-gray-400">{wallet.balance}</p>
                      </div>
                    </div>
                    {selectedWallet?.id === wallet.id && (
                      <div className="mt-3 pt-3 border-t border-gray-700/50">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">安全评分</span>
                          <span className={`font-bold ${
                            (securityRule?.securityScore || 0) >= 80 ? 'text-green-400' :
                            (securityRule?.securityScore || 0) >= 60 ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {securityRule?.securityScore || 50}
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Security Settings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {selectedWallet ? (
              <div className="space-y-6">
                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {[
                    { id: 'pin', label: 'PIN 码', icon: Lock },
                    { id: 'limits', label: '交易限额', icon: DollarSign },
                    { id: 'whitelist', label: '白名单', icon: CheckCircle },
                    { id: 'blacklist', label: '黑名单', icon: AlertCircle },
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-4 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-white border border-orange-500/30'
                          : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.label}
                    </motion.button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
                  {activeTab === 'pin' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">PIN 码设置</h3>
                        <p className="text-gray-400">设置 6 位数字 PIN 码，用于交易确认</p>
                      </div>

                      {securityRule?.pinCode && (
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">当前 PIN 码</label>
                          <input
                            type="password"
                            value={oldPin}
                            onChange={(e) => setOldPin(e.target.value)}
                            placeholder="输入当前 PIN 码"
                            maxLength={6}
                            className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          {securityRule?.pinCode ? '新 PIN 码' : '设置 PIN 码'}
                        </label>
                        <input
                          type="password"
                          value={pinCode}
                          onChange={(e) => setPinCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                          placeholder="6 位数字"
                          maxLength={6}
                          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors font-mono tracking-widest"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">确认 PIN 码</label>
                        <input
                          type="password"
                          value={confirmPin}
                          onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                          placeholder="再次输入 PIN 码"
                          maxLength={6}
                          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors font-mono tracking-widest"
                        />
                        {pinCode && confirmPin && pinCode !== confirmPin && (
                          <p className="text-red-400 text-sm mt-2">PIN 码不匹配</p>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === 'limits' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">交易限额</h3>
                        <p className="text-gray-400">设置交易金额限制，保护资产安全</p>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">单笔交易限额 (ETH)</label>
                        <input
                          type="number"
                          value={maxAmountPerTx}
                          onChange={(e) => setMaxAmountPerTx(e.target.value)}
                          placeholder="例如：1.0"
                          step="0.01"
                          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                        />
                        <p className="text-sm text-gray-500 mt-2">超过此金额的交易需要额外确认</p>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">日累计限额 (ETH)</label>
                        <input
                          type="number"
                          value={maxAmountPerDay}
                          onChange={(e) => setMaxAmountPerDay(e.target.value)}
                          placeholder="例如：5.0"
                          step="0.01"
                          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                        />
                        <p className="text-sm text-gray-500 mt-2">每日累计交易金额上限</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'whitelist' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">地址白名单</h3>
                        <p className="text-gray-400">添加信任的地址，交易时无需额外确认</p>
                      </div>

                      <div className="flex gap-3">
                        <input
                          type="text"
                          value={newWhitelistName}
                          onChange={(e) => setNewWhitelistName(e.target.value)}
                          placeholder="名称（例如：我的主钱包）"
                          className="flex-1 px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                        />
                        <input
                          type="text"
                          value={newWhitelistAddress}
                          onChange={(e) => setNewWhitelistAddress(e.target.value)}
                          placeholder="0x..."
                          className="flex-[2] px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors font-mono"
                        />
                        <motion.button
                          onClick={addWhitelistAddress}
                          disabled={!newWhitelistAddress || !newWhitelistName}
                          className="px-4 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Plus className="h-5 w-5" />
                        </motion.button>
                      </div>

                      <div className="space-y-3">
                        {whitelistAddresses.map((addr) => (
                          <div
                            key={addr.id}
                            className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-700/30"
                          >
                            <div>
                              <p className="font-medium text-white">{addr.name}</p>
                              <p className="text-sm text-gray-400 font-mono">{addr.address}</p>
                            </div>
                            <motion.button
                              onClick={() => removeWhitelistAddress(addr.id)}
                              className="p-2 rounded-lg hover:bg-red-500/20 text-red-400 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 className="h-4 w-4" />
                            </motion.button>
                          </div>
                        ))}
                        {whitelistAddresses.length === 0 && (
                          <p className="text-center text-gray-500 py-8">暂无白名单地址</p>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === 'blacklist' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">合约黑名单</h3>
                        <p className="text-gray-400">添加可疑合约地址，阻止交互</p>
                      </div>

                      <div className="space-y-3">
                        <input
                          type="text"
                          value={newBlacklistName}
                          onChange={(e) => setNewBlacklistName(e.target.value)}
                          placeholder="名称（例如：钓鱼合约）"
                          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                        />
                        <input
                          type="text"
                          value={newBlacklistAddress}
                          onChange={(e) => setNewBlacklistAddress(e.target.value)}
                          placeholder="合约地址 0x..."
                          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors font-mono"
                        />
                        <input
                          type="text"
                          value={newBlacklistReason}
                          onChange={(e) => setNewBlacklistReason(e.target.value)}
                          placeholder="原因（可选）"
                          className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                        />
                        <motion.button
                          onClick={addBlacklistContract}
                          disabled={!newBlacklistAddress || !newBlacklistName}
                          className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Plus className="h-4 w-4" />
                          添加到黑名单
                        </motion.button>
                      </div>

                      <div className="space-y-3">
                        {blacklistContracts.map((contract) => (
                          <div
                            key={contract.id}
                            className="flex items-center justify-between p-4 bg-red-500/5 rounded-xl border border-red-500/20"
                          >
                            <div>
                              <p className="font-medium text-white">{contract.name}</p>
                              <p className="text-sm text-gray-400 font-mono">{contract.address}</p>
                              {contract.reason && (
                                <p className="text-sm text-red-400 mt-1">{contract.reason}</p>
                              )}
                            </div>
                            <motion.button
                              onClick={() => removeBlacklistContract(contract.id)}
                              className="p-2 rounded-lg hover:bg-red-500/20 text-red-400 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 className="h-4 w-4" />
                            </motion.button>
                          </div>
                        ))}
                        {blacklistContracts.length === 0 && (
                          <p className="text-center text-gray-500 py-8">暂无黑名单合约</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Save Button */}
                <motion.button
                  onClick={handleSave}
                  className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255, 165, 0, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Save className="h-5 w-5" />
                  保存安全规则
                </motion.button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center mb-6">
                  <Wallet className="h-10 w-10 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">选择钱包</h3>
                <p className="text-gray-400">请从左侧选择一个钱包来配置安全规则</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
