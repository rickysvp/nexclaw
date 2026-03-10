'use client';

import TransactionsSection from '../sections/TransactionsSection';

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <TransactionsSection />
      </div>
    </div>
  );
}
