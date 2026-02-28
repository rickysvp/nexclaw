'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Search, Plus, Trash2, Copy, Edit2, Wallet, X, CheckCircle2,
  Star, StarOff, Filter, ExternalLink, Send, QrCode, MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { formatAddress, copyToClipboard, formatDate } from '@/lib/utils';

// Contact interface
interface Contact {
  id: string;
  name: string;
  address: string;
  chain: string;
  isFavorite: boolean;
  addedAt: string;
  note?: string;
  tags?: string[];
  txCount?: number;
}

// Mock contacts data
const mockContacts: Contact[] = [
  {
    id: '1',
    name: '我的主钱包',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    chain: 'Ethereum',
    isFavorite: true,
    addedAt: '2026-02-01',
    note: '主要使用的钱包地址',
    tags: ['个人', '常用'],
    txCount: 156,
  },
  {
    id: '2',
    name: '交易所充值',
    address: '0x8ba1f109551bD432803012645Hac136c82C3e8C',
    chain: 'Ethereum',
    isFavorite: true,
    addedAt: '2026-02-15',
    note: 'Binance 充值地址',
    tags: ['交易所'],
    txCount: 42,
  },
  {
    id: '3',
    name: '合作伙伴 Alice',
    address: '0x1234567890abcdef1234567890abcdef12345678',
    chain: 'Polygon',
    isFavorite: false,
    addedAt: '2026-02-20',
    tags: ['商务'],
    txCount: 8,
  },
  {
    id: '4',
    name: 'DeFi 协议合约',
    address: '0xabcdef1234567890abcdef1234567890abcdef12',
    chain: 'Arbitrum',
    isFavorite: false,
    addedAt: '2026-02-25',
    note: 'Uniswap V3 Router',
    tags: ['合约', 'DeFi'],
    txCount: 23,
  },
];

const chainColors: Record<string, string> = {
  Ethereum: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Polygon: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  BSC: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Arbitrum: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  Optimism: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export default function ContactsSection() {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const [searchQuery, setSearchQuery] = useState('');
  const [chainFilter, setChainFilter] = useState<string>('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  // Dialog states
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [showSendDialog, setShowSendDialog] = useState<Contact | null>(null);
  
  // Form states
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [newContact, setNewContact] = useState({ 
    name: '', 
    address: '', 
    chain: 'Ethereum', 
    note: '',
    tags: [] as string[]
  });
  
  // UI states
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [sendAmount, setSendAmount] = useState('');
  const [sendToken, setSendToken] = useState('ETH');

  // Filter contacts
  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => {
      const matchesSearch = 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.note?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesChain = chainFilter === 'all' || contact.chain === chainFilter;
      const matchesFavorite = !showFavoritesOnly || contact.isFavorite;
      
      return matchesSearch && matchesChain && matchesFavorite;
    });
  }, [contacts, searchQuery, chainFilter, showFavoritesOnly]);

  // Stats
  const stats = useMemo(() => {
    const total = contacts.length;
    const favorites = contacts.filter(c => c.isFavorite).length;
    const chains = [...new Set(contacts.map(c => c.chain))].length;
    const totalTx = contacts.reduce((sum, c) => sum + (c.txCount || 0), 0);
    return { total, favorites, chains, totalTx };
  }, [contacts]);

  // Get unique chains
  const chains = useMemo(() => {
    return ['all', ...new Set(contacts.map(c => c.chain))];
  }, [contacts]);

  const handleCopyAddress = async (address: string, id: string) => {
    await copyToClipboard(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleFavorite = (id: string) => {
    setContacts(contacts.map(c => 
      c.id === id ? { ...c, isFavorite: !c.isFavorite } : c
    ));
  };

  const handleAddContact = () => {
    if (!newContact.name || !newContact.address) return;
    
    const contact: Contact = {
      id: `contact_${Date.now()}`,
      name: newContact.name,
      address: newContact.address,
      chain: newContact.chain,
      isFavorite: false,
      addedAt: new Date().toISOString(),
      note: newContact.note,
      tags: newContact.tags,
      txCount: 0,
    };
    
    setContacts([contact, ...contacts]);
    setNewContact({ name: '', address: '', chain: 'Ethereum', note: '', tags: [] });
    setShowAddDialog(false);
  };

  const handleEditContact = () => {
    if (!editingContact) return;
    
    setContacts(contacts.map(c => 
      c.id === editingContact.id ? editingContact : c
    ));
    setShowEditDialog(false);
    setEditingContact(null);
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter(c => c.id !== id));
    setShowDeleteConfirm(null);
  };

  const handleSend = () => {
    // In a real app, this would initiate a transaction
    alert(`发送 ${sendAmount} ${sendToken} 到 ${showSendDialog?.name}`);
    setShowSendDialog(null);
    setSendAmount('');
  };

  const openEditDialog = (contact: Contact) => {
    setEditingContact({ ...contact });
    setShowEditDialog(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">地址簿</h1>
          <p className="text-gray-400">管理常用地址和联系人</p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{stats.total}</p>
            <p className="text-sm text-gray-400">联系人</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-400">{stats.favorites}</p>
            <p className="text-sm text-gray-400">收藏</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">{stats.chains}</p>
            <p className="text-sm text-gray-400">链</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -trangray-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="搜索名称、地址、标签..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-800/50 border-gray-700 text-white"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -trangray-y-1/2 p-1 rounded hover:bg-gray-700/50"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <select
            value={chainFilter}
            onChange={(e) => setChainFilter(e.target.value)}
            className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
          >
            <option value="all">全部链</option>
            {chains.filter(c => c !== 'all').map(chain => (
              <option key={chain} value={chain}>{chain}</option>
            ))}
          </select>
          <Button
            variant={showFavoritesOnly ? 'default' : 'outline'}
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={showFavoritesOnly ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'border-gray-700 text-gray-400'}
          >
            <Star className="h-4 w-4 mr-2" />
            收藏
          </Button>
          <Button
            onClick={() => setShowAddDialog(true)}
            className="bg-gradient-to-r from-orange-500 to-purple-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            添加
          </Button>
        </div>
      </div>

      {/* Contacts List */}
      <div className="space-y-3">
        <AnimatePresence>
          {filteredContacts.map((contact) => (
            <motion.div
              key={contact.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-5 hover:border-gray-600/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-white">{contact.name}</h3>
                      {contact.isFavorite && (
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      )}
                      <Badge className={chainColors[contact.chain] || 'bg-gray-500/20 text-gray-400'}>
                        {contact.chain}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-sm text-gray-400">{formatAddress(contact.address)}</span>
                      <button
                        onClick={() => handleCopyAddress(contact.address, contact.id)}
                        className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white"
                      >
                        {copiedId === contact.id ? (
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </button>
                      <button
                        onClick={() => window.open(`https://etherscan.io/address/${contact.address}`, '_blank')}
                        className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                    {contact.note && (
                      <p className="text-sm text-gray-500 mt-2">{contact.note}</p>
                    )}
                    {contact.tags && contact.tags.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {contact.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-700/50 rounded text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>添加于 {formatDate(contact.addedAt)}</span>
                      {contact.txCount !== undefined && (
                        <span>{contact.txCount} 笔交易</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSendDialog(contact)}
                    className="text-green-400 hover:text-green-300 hover:bg-green-500/10"
                  >
                    <Send className="h-4 w-4 mr-1" />
                    转账
                  </Button>
                  <button
                    onClick={() => toggleFavorite(contact.id)}
                    className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-yellow-400"
                  >
                    {contact.isFavorite ? (
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ) : (
                      <StarOff className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    onClick={() => openEditDialog(contact)}
                    className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(contact.id)}
                    className="p-2 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-400"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredContacts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Users className="h-12 w-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500">没有找到匹配的地址</p>
            <Button
              variant="ghost"
              onClick={() => {
                setSearchQuery('');
                setChainFilter('all');
                setShowFavoritesOnly(false);
              }}
              className="mt-4 text-orange-400"
            >
              清除筛选
            </Button>
          </motion.div>
        )}
      </div>

      {/* Add Contact Dialog */}
      <AnimatePresence>
        {showAddDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowAddDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-md"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">添加新地址</h3>
                  <button
                    onClick={() => setShowAddDialog(false)}
                    className="p-2 rounded-lg hover:bg-gray-800 text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">名称 *</label>
                  <Input
                    value={newContact.name}
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    placeholder="例如：我的主钱包"
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">地址 *</label>
                  <div className="relative">
                    <Input
                      value={newContact.address}
                      onChange={(e) => setNewContact({ ...newContact, address: e.target.value })}
                      placeholder="0x..."
                      className="bg-gray-800/50 border-gray-700 text-white font-mono pr-10"
                    />
                    <button className="absolute right-3 top-1/2 -trangray-y-1/2 p-1 rounded hover:bg-gray-700/50 text-gray-500">
                      <QrCode className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">链</label>
                  <select
                    value={newContact.chain}
                    onChange={(e) => setNewContact({ ...newContact, chain: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="Ethereum">Ethereum</option>
                    <option value="Polygon">Polygon</option>
                    <option value="BSC">BSC</option>
                    <option value="Arbitrum">Arbitrum</option>
                    <option value="Optimism">Optimism</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">备注</label>
                  <Input
                    value={newContact.note}
                    onChange={(e) => setNewContact({ ...newContact, note: e.target.value })}
                    placeholder="添加备注..."
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-800 flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowAddDialog(false)}
                  className="flex-1 border-gray-700"
                >
                  取消
                </Button>
                <Button
                  onClick={handleAddContact}
                  disabled={!newContact.name || !newContact.address}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 disabled:opacity-50"
                >
                  添加
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Contact Dialog */}
      <AnimatePresence>
        {showEditDialog && editingContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowEditDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-md"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">编辑地址</h3>
                  <button
                    onClick={() => setShowEditDialog(false)}
                    className="p-2 rounded-lg hover:bg-gray-800 text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">名称</label>
                  <Input
                    value={editingContact.name}
                    onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })}
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">地址</label>
                  <Input
                    value={editingContact.address}
                    onChange={(e) => setEditingContact({ ...editingContact, address: e.target.value })}
                    className="bg-gray-800/50 border-gray-700 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">链</label>
                  <select
                    value={editingContact.chain}
                    onChange={(e) => setEditingContact({ ...editingContact, chain: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="Ethereum">Ethereum</option>
                    <option value="Polygon">Polygon</option>
                    <option value="BSC">BSC</option>
                    <option value="Arbitrum">Arbitrum</option>
                    <option value="Optimism">Optimism</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">备注</label>
                  <Input
                    value={editingContact.note || ''}
                    onChange={(e) => setEditingContact({ ...editingContact, note: e.target.value })}
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-800 flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowEditDialog(false)}
                  className="flex-1 border-gray-700"
                >
                  取消
                </Button>
                <Button
                  onClick={handleEditContact}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600"
                >
                  <Edit2 className="h-4 w-4 mr-2" />
                  保存
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
                  <Trash2 className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">确认删除</h3>
                  <p className="text-sm text-gray-400">此操作无法撤销</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                您确定要删除这个地址吗？删除后需要重新添加。
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
                  onClick={() => handleDeleteContact(showDeleteConfirm)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  删除
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Send Dialog */}
      <AnimatePresence>
        {showSendDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowSendDialog(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-md"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">转账</h3>
                  <button
                    onClick={() => setShowSendDialog(null)}
                    className="p-2 rounded-lg hover:bg-gray-800 text-gray-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-gray-800/30 rounded-xl p-4">
                  <p className="text-sm text-gray-400 mb-1">收款方</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                      <Wallet className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{showSendDialog.name}</p>
                      <p className="text-sm text-gray-500">{formatAddress(showSendDialog.address)}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">金额</label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      placeholder="0.00"
                      className="flex-1 bg-gray-800/50 border-gray-700 text-white"
                    />
                    <select
                      value={sendToken}
                      onChange={(e) => setSendToken(e.target.value)}
                      className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
                    >
                      <option value="ETH">ETH</option>
                      <option value="USDT">USDT</option>
                      <option value="USDC">USDC</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-800 flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowSendDialog(null)}
                  className="flex-1 border-gray-700"
                >
                  取消
                </Button>
                <Button
                  onClick={handleSend}
                  disabled={!sendAmount || parseFloat(sendAmount) <= 0}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 disabled:opacity-50"
                >
                  <Send className="h-4 w-4 mr-2" />
                  确认转账
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
