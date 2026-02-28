import { mockWallets } from '@/lib/mockData';
import WalletDetailClient from './WalletDetailClient';

// 生成静态参数
export function generateStaticParams() {
  return mockWallets.map((wallet) => ({
    id: wallet.id,
  }));
}

// 生成元数据
export function generateMetadata({ params }: { params: { id: string } }) {
  const wallet = mockWallets.find((w) => w.id === params.id);
  return {
    title: wallet?.name || `Wallet #${params.id}`,
    description: 'NexClaw 钱包详情',
  };
}

export default function WalletDetailPage({ params }: { params: { id: string } }) {
  return <WalletDetailClient walletId={params.id} />;
}
