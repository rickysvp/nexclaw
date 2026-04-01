'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Repeat,
  Users,
  Landmark,
  BarChart2,
  CircleDollarSign,
  ChevronRight,
  Play,
  Pause,
  Trash2,
  Plus,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAgentStrategyStore } from '@/lib/agent-strategy-store';

const strategyTypes = [
  { id: 'transfer', label: '转账', icon: Zap, color: 'bg-orange-500' },
  { id: 'defi', label: 'DeFi', icon: BarChart2, color: 'bg-green-500' },
  { id: 'dca', label: '定投', icon: Repeat, color: 'bg-blue-500' },
  { id: 'copy', label: '跟单', icon: Users, color: 'bg-purple-500' },
  { id: 'staking', label: '质押', icon: Landmark, color: 'bg-yellow-500' },
  { id: 'lending', label: '借贷', icon: CircleDollarSign, color: 'bg-pink-500' },
];

interface AgentStrategyProps {
  onStrategySelect: (strategy: any) => void;
}

export default function AgentStrategy({ onStrategySelect }: AgentStrategyProps) {
  const { strategies, toggleStrategyStatus, deleteStrategy } = useAgentStrategyStore();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredStrategies = selectedType
    ? strategies.filter((strategy) => strategy.type === selectedType)
    : strategies;

  return (
    <div className="space-y-6">
      {/* Strategy Types */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Agent 策略</h2>
        <Button variant="default" size="sm" className="bg-orange-500 hover:bg-orange-600">
          <Plus className="h-4 w-4 mr-2" />
          创建策略
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={selectedType === null ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedType(null)}
          className={selectedType === null ? 'bg-orange-500 hover:bg-orange-600' : ''}
        >
          全部
        </Button>
        {strategyTypes.map((type) => (
          <Button
            key={type.id}
            variant={selectedType === type.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedType(type.id)}
            className={selectedType === type.id ? `${type.color} hover:${type.color}/90` : ''}
          >
            <type.icon className="h-4 w-4 mr-2" />
            {type.label}
          </Button>
        ))}
      </div>

      {/* Strategy List */}
      <div className="space-y-3">
        {filteredStrategies.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500">暂无策略</p>
            <Button
              variant="default"
              size="sm"
              className="mt-4 bg-orange-500 hover:bg-orange-600"
            >
              <Plus className="h-4 w-4 mr-2" />
              创建第一个策略
            </Button>
          </div>
        ) : (
          filteredStrategies.map((strategy) => {
            const typeInfo = strategyTypes.find((type) => type.id === strategy.type);
            return (
              <motion.div
                key={strategy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-all"
                onClick={() => onStrategySelect(strategy)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg ${typeInfo?.color} flex items-center justify-center`}>
                      {typeInfo && <typeInfo.icon className="h-5 w-5 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900 truncate">{strategy.name}</h3>
                        <Badge
                          variant={
                            strategy.status === 'active'
                              ? 'default'
                              : strategy.status === 'pending'
                              ? 'secondary'
                              : 'destructive'
                          }
                          className={
                            strategy.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : strategy.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-orange-100 text-orange-700'
                          }
                        >
                          {strategy.status === 'active'
                            ? '运行中'
                            : strategy.status === 'pending'
                            ? '待执行'
                            : '已停止'}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={
                            strategy.risk === 'low'
                              ? 'bg-blue-100 text-blue-700'
                              : strategy.risk === 'medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-orange-100 text-orange-700'
                          }
                        >
                          {strategy.risk === 'low'
                            ? '低风险'
                            : strategy.risk === 'medium'
                            ? '中风险'
                            : '高风险'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 mt-1 truncate">{strategy.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                        {strategy.lastExecuted && (
                          <span>上次执行: {strategy.lastExecuted}</span>
                        )}
                        {strategy.nextExecution && (
                          <span>下次执行: {strategy.nextExecution}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {strategy.profit && (
                      <p className={`font-medium ${strategy.profit.startsWith('+') ? 'text-green-600' : 'text-orange-600'}`}>
                        {strategy.profit}
                      </p>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStrategyStatus(strategy.id);
                      }}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {strategy.status === 'active' ? (
                        <Pause className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Play className="h-5 w-5 text-green-500" />
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteStrategy(strategy.id);
                      }}
                      className="p-2 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <Trash2 className="h-5 w-5 text-orange-500" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Settings className="h-5 w-5 text-gray-500" />
                    </button>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
