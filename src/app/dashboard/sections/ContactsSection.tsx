'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Search,
  Plus,
  Copy,
  ExternalLink,
  Edit3,
  Trash2,
  MoreVertical,
  RefreshCw,
  User,
  Building2,
  Bot,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockContacts } from '@/lib/mockData';
import { Contact } from '@/types';

export default function ContactsSection() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = () => {
    setContacts(mockContacts);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      loadContacts();
      setIsLoading(false);
    }, 1000);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyMessage('地址已复制');
    setTimeout(() => setCopyMessage(null), 2000);
  };

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'agent': return Bot;
      case 'organization': return Building2;
      default: return User;
    }
  };

  return (
    <div className="space-y-6">
      {/* Copy Message */}
      {copyMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          {copyMessage}
        </motion.div>
      )}

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">地址簿</h1>
          <p className="text-gray-500 mt-1">管理常用联系人地址</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isLoading}
            className="border-gray-200 text-gray-600 hover:bg-gray-100"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            刷新
          </Button>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600">
            <Plus className="h-4 w-4 mr-2" />
            添加联系人
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">总联系人</p>
              <p className="text-xl font-bold text-gray-900">{contacts.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <Bot className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">AI Agents</p>
              <p className="text-xl font-bold text-gray-900">{contacts.filter(c => c.type === 'agent').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">组织</p>
              <p className="text-xl font-bold text-gray-900">{contacts.filter(c => c.type === 'organization').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="搜索联系人..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContacts.map((contact, index) => {
          const TypeIcon = getTypeIcon(contact.type);
          return (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    contact.type === 'agent' ? 'bg-purple-100' :
                    contact.type === 'organization' ? 'bg-blue-100' :
                    'bg-green-100'
                  }`}>
                    <TypeIcon className={`h-6 w-6 ${
                      contact.type === 'agent' ? 'text-purple-600' :
                      contact.type === 'organization' ? 'text-blue-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{contact.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {contact.type === 'agent' ? 'AI Agent' : contact.type === 'organization' ? '组织' : '个人'}
                    </Badge>
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                <code className="flex-1 text-sm text-gray-600 font-mono truncate">
                  {contact.address.slice(0, 8)}...{contact.address.slice(-6)}
                </code>
                <button
                  onClick={() => handleCopy(contact.address)}
                  className="p-2 rounded-lg hover:bg-gray-200 text-gray-500"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>

              {contact.notes && (
                <p className="text-sm text-gray-500 mt-3">{contact.notes}</p>
              )}

              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-200 text-gray-600 hover:bg-gray-100"
                >
                  <Edit3 className="h-4 w-4 mr-1" />
                  编辑
                </Button>
                <a
                  href={`https://etherscan.io/address/${contact.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  查看
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">没有找到联系人</h3>
          <p className="text-gray-500 mb-4">添加您的第一个联系人</p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            添加联系人
          </Button>
        </div>
      )}
    </div>
  );
}
