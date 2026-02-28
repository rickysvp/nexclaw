'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Search, Plus, Trash2, Copy, Edit2, Wallet,
  Star, StarOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Mock contacts data
interface Contact {
  id: string;
  name: string;
  address: string;
  chain: string;
  isFavorite: boolean;
  addedAt: string;
  note?: string;
}

const mockContacts: Contact[] = [
  {
    id: '1',
    name: '我的主钱包',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    chain: 'Ethereum',
    isFavorite: true,
    addedAt: '2026-02-01',
    note: '主要使用的钱包地址',
  },
  {
    id: '2',
    name: '交易所充值',
    address: '0x8ba1f109551bD432803012645Hac136c82C3e8C',
    chain: 'Ethereum',
    isFavorite: true,
    addedAt: '2026-02-15',
    note: 'Binance 充值地址',
  },
  {
    id: '3',
    name: '合作伙伴',
    address: '0x1234567890abcdef1234567890abcdef12345678',
    chain: 'Polygon',
    isFavorite: false,
    addedAt: '2026-02-20',
  },
];

export default function ContactsSection() {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', address: '', chain: 'Ethereum', note: '' });

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (id: string) => {
    setContacts(contacts.map(c => 
      c.id === id ? { ...c, isFavorite: !c.isFavorite } : c
    ));
  };

  const deleteContact = (id: string) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const addContact = () => {
    if (!newContact.name || !newContact.address) return;
    
    const contact: Contact = {
      id: Date.now().toString(),
      name: newContact.name,
      address: newContact.address,
      chain: newContact.chain,
      isFavorite: false,
      addedAt: new Date().toISOString().split('T')[0],
      note: newContact.note,
    };
    
    setContacts([...contacts, contact]);
    setNewContact({ name: '', address: '', chain: 'Ethereum', note: '' });
    setShowAddDialog(false);
  };

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">地址簿</h1>
          <p className="text-gray-400">管理常用地址</p>
        </div>
        <motion.button
          onClick={() => setShowAddDialog(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          添加地址
        </motion.button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          placeholder="搜索地址名称或地址..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-gray-800/50 border-gray-700 text-white"
        />
      </div>

      {/* Contacts List */}
      <div className="space-y-4">
        {filteredContacts.map((contact) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white">{contact.name}</h3>
                    {contact.isFavorite && (
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-sm text-gray-400">{contact.address}</span>
                    <button
                      onClick={() => copyAddress(contact.address)}
                      className="p-1 rounded hover:bg-gray-700/50 text-gray-500 hover:text-white"
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge className="bg-blue-500/20 text-blue-400">{contact.chain}</Badge>
                    {contact.note && (
                      <span className="text-sm text-gray-500">{contact.note}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={() => toggleFavorite(contact.id)}
                  className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-yellow-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {contact.isFavorite ? (
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ) : (
                    <StarOff className="h-5 w-5" />
                  )}
                </motion.button>
                <motion.button
                  className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Edit2 className="h-5 w-5" />
                </motion.button>
                <motion.button
                  onClick={() => deleteContact(contact.id)}
                  className="p-2 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Trash2 className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
        
        {filteredContacts.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500">没有找到匹配的地址</p>
          </div>
        )}
      </div>

      {/* Add Contact Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-md"
          >
            <h3 className="text-xl font-bold text-white mb-4">添加新地址</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">名称</label>
                <Input
                  value={newContact.name}
                  onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                  placeholder="例如：我的主钱包"
                  className="bg-gray-900/80 border-gray-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">地址</label>
                <Input
                  value={newContact.address}
                  onChange={(e) => setNewContact({ ...newContact, address: e.target.value })}
                  placeholder="0x..."
                  className="bg-gray-900/80 border-gray-700 text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">链</label>
                <select
                  value={newContact.chain}
                  onChange={(e) => setNewContact({ ...newContact, chain: e.target.value })}
                  className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-2 text-white"
                >
                  <option value="Ethereum">Ethereum</option>
                  <option value="Polygon">Polygon</option>
                  <option value="BSC">BSC</option>
                  <option value="Arbitrum">Arbitrum</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">备注（可选）</label>
                <Input
                  value={newContact.note}
                  onChange={(e) => setNewContact({ ...newContact, note: e.target.value })}
                  placeholder="添加备注..."
                  className="bg-gray-900/80 border-gray-700 text-white"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowAddDialog(false)}
                  className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  取消
                </Button>
                <motion.button
                  onClick={addContact}
                  disabled={!newContact.name || !newContact.address}
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  添加
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
