'use client';

import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

export function InstallationCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 flex items-center gap-3 px-5 py-4 bg-neutral-900 rounded-xl shadow-xl shadow-neutral-900/20">
        <Terminal className="w-4 h-4 text-orange-400" />
        <code className="text-white font-mono text-sm tracking-wide">{command}</code>
      </div>
      <button
        onClick={copyCommand}
        className="px-4 py-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm"
      >
        {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-neutral-600" />}
      </button>
    </div>
  );
}
