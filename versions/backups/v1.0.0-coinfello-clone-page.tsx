'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Shield, 
  Lock, 
  FileText, 
  Server, 
  ArrowRight, 
  MessageSquare,
  TrendingUp,
  Zap,
  LayoutGrid,
  Copy,
  Check,
  Twitter
} from 'lucide-react';

const commandTags = [
  'swap 100 USDC for ETH on Base',
  'bridge 50 USDC from Base to Arbitrum',
  'stake 1000 USDC in the highest yield protocol',
  'what\'s the best yield for USDC right now?',
  'show my portfolio performance',
  'set up a recurring buy of $100 ETH every week',
];

const features = [
  {
    icon: MessageSquare,
    label: 'Chat',
    title: 'Ask anything. Execute everything.',
    items: [
      'Swap, bridge, stake.',
      'Research any asset or protocol.',
      'Complex DeFi. Simplified.',
      'Automate complex onchain actions.',
    ],
  },
  {
    icon: TrendingUp,
    label: 'Earn',
    title: 'Find the best yields. Automatically.',
    items: [
      'Discover top yields across chains.',
      'Compare protocols instantly.',
      'Auto-compound your rewards.',
      'Track your earnings in real-time.',
    ],
  },
  {
    icon: Zap,
    label: 'Automate',
    title: 'Set it and forget it.',
    items: [
      'Create custom strategies.',
      'Schedule recurring trades.',
      'Auto-rebalance your portfolio.',
      'Never miss an opportunity.',
    ],
  },
  {
    icon: LayoutGrid,
    label: 'Smart Widgets',
    title: 'Your dashboard, your way.',
    items: [
      'Personalize your view.',
      'Track what matters most.',
      'Quick actions at your fingertips.',
      'Unified cross-chain view.',
    ],
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'Your keys never move',
    description: 'Your private keys stay in your wallet. CoinFello never has access to them.',
  },
  {
    icon: Shield,
    title: 'You set the limits',
    description: 'Spending caps, token restrictions, and expiry dates. Your agent only operates within the boundaries you define.',
  },
  {
    icon: FileText,
    title: 'Every transaction in plain language',
    description: 'Every transaction is explained in plain language before it executes.',
  },
  {
    icon: Server,
    title: 'Self-sovereign, verified execution',
    description: 'Runs in a Trusted Execution Environment you control, with model selection coming soon.',
  },
];

const investorLogos = [
  { name: 'Griffin', width: 80 },
  { name: 'Ethereal Ventures', width: 140 },
  { name: 'Consensys', width: 120 },
  { name: 'Mirana', width: 100 },
  { name: 'Bitkraft', width: 120 },
  { name: 'Delphi Digital', width: 140 },
];

const mediaLogos = [
  { name: 'DL News', width: 80 },
  { name: 'Forbes', width: 80 },
  { name: 'The Defiant', width: 100 },
  { name: 'Blockhash', width: 100 },
];

const aiTools = [
  { name: 'OpenClaw', icon: '🦞' },
  { name: 'Claude Code', icon: '🟣' },
  { name: 'Kiro', icon: '⚡' },
  { name: 'Windsurf', icon: '🌊' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText('npm install -g @coinfello/agent');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F5F5DC] text-[#1A1A1A] overflow-x-hidden">
      {/* Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');
        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5DC]/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">�️</span>
              <span className="text-xl font-semibold tracking-tight">CoinFello</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="text-black/70 hover:text-black transition-colors">Developers</a>
              <a href="#" className="text-black/70 hover:text-black transition-colors">Blog</a>
              <a href="#" className="text-black/70 hover:text-black transition-colors">FAQ</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium border border-black/20 rounded-full hover:bg-black/5 transition-colors"
            >
              <Twitter className="w-4 h-4" />
              Follow us on X
            </a>
            <a 
              href="#" 
              className="px-5 py-2.5 text-sm font-semibold bg-[#F5E642] text-black rounded-full hover:bg-[#E5D63A] transition-colors shadow-sm"
            >
              Launch app
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-6">
              <span className="block">All of crypto</span>
              <span className="block">in one</span>
              <span className="block text-[#A89F4B] italic">conversation.</span>
            </h1>
            <p className="text-lg md:text-xl text-black/60 mb-8 max-w-xl leading-relaxed">
              The first AI agent that securely researches, executes, and automates any onchain action.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5E642] text-black font-semibold rounded-full hover:bg-[#E5D63A] transition-colors border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-black/20 text-black font-medium rounded-full hover:bg-black/5 transition-colors shadow-sm"
              >
                See how it works
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.15em] text-black/40 uppercase">
              <span>Self-Custodial</span>
              <span className="w-1 h-1 rounded-full bg-black/30" />
              <span>Granular Agent Permissions</span>
              <span className="w-1 h-1 rounded-full bg-black/30" />
              <span>Revoke Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Command Tags */}
      <section className="py-6 overflow-hidden border-y border-black/5 bg-[#F5F5DC]">
        <motion.div 
          className="flex gap-4"
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...commandTags, ...commandTags, ...commandTags, ...commandTags].map((tag, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 px-5 py-2.5 bg-[#F0EEE5] rounded-full text-sm text-black/70 whitespace-nowrap border border-black/10"
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Investors Section */}
      <section className="py-16 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium tracking-wider text-black/40 uppercase mb-10">
            Investors
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {investorLogos.map((logo) => (
              <div 
                key={logo.name}
                className="h-8 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity"
                style={{ width: logo.width }}
              >
                <span className="text-sm font-semibold text-black/70 tracking-wide">{logo.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-black/20 rounded-full hover:bg-black/5 transition-colors"
            >
              CoinFello is fundraising.
              <span className="text-[#A89F4B]">Get in touch</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section - One agent. Many superpowers. */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] mb-12">
            <span className="block">One agent.</span>
            <span className="block text-[#A89F4B] italic">Many superpowers.</span>
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {features.map((feature, idx) => (
              <button
                key={feature.label}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === idx 
                    ? 'bg-[#1A1A1A] text-white' 
                    : 'bg-black/5 text-black/70 hover:bg-black/10'
                }`}
              >
                <feature.icon className="w-4 h-4" />
                {feature.label}
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{features[activeTab].title}</h3>
              <ul className="space-y-4">
                {features[activeTab].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-black/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A89F4B] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Demo Chat Interface */}
            <div className="bg-white rounded-2xl shadow-lg border border-black/5 overflow-hidden">
              <div className="px-4 py-3 border-b border-black/5 flex items-center gap-2 bg-white">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
              <div className="p-6 space-y-4 bg-[#FAFAF8]">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F5E642] flex items-center justify-center text-sm flex-shrink-0">🖐️</div>
                  <div className="bg-[#F5F5DC] rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-black/80">Ask anything</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#1A1A1A] rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-white/90">Swap 100 USDC for ETH on Base</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F5E642] flex items-center justify-center text-sm flex-shrink-0">🖐️</div>
                  <div className="bg-[#F5F5DC] rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-black/80">I'll swap 100 USDC for ETH on Base. This will use the best available route.</p>
                    <div className="mt-3 p-3 bg-white rounded-xl border border-black/5">
                      <div className="flex justify-between text-xs text-black/50 mb-1">
                        <span>From</span>
                        <span>To</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">100 USDC</span>
                        <ArrowRight className="w-4 h-4 text-black/30" />
                        <span className="font-semibold">~0.042 ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automations Section */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-medium tracking-wider text-white/40 uppercase mb-4 block">Automations</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-6">
              Define your intent. CoinFello automates the execution.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Describe any strategy in plain language. CoinFello maps it to onchain actions and runs it 24/7 — at exactly the right moment.
            </p>
          </div>

          {/* Automation Demo */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#F5E642]/20 flex items-center justify-center mb-4">
                  <span className="text-xl">📝</span>
                </div>
                <h4 className="font-semibold mb-2">Describe Your Strategy</h4>
                <p className="text-sm text-white/50">"Buy ETH when it drops 5% and stake it for yield"</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#F5E642]/20 flex items-center justify-center mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">CoinFello Maps Actions</h4>
                <p className="text-sm text-white/50">Converts your intent into executable onchain transactions</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#F5E642]/20 flex items-center justify-center mb-4">
                  <span className="text-xl">🤖</span>
                </div>
                <h4 className="font-semibold mb-2">Runs 24/7</h4>
                <p className="text-sm text-white/50">Executes at the optimal moment based on your conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-medium tracking-wider text-black/40 uppercase mb-4 block">Security</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-6">
                Powerful by default. Designed for safety.
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-6">
                AI agents and crypto are a high-value target. CoinFello is built like it's already under attack.
              </p>
              <p className="text-black/60 leading-relaxed">
                Other solutions hand your agent the keys to your wallet and hope for the best. CoinFello limits your agent to the <span className="font-semibold text-black">permissions you define</span>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F5DC] flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-[#A89F4B]" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-black/60 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent Skill Section */}
      <section className="py-24 px-6 bg-[#F0EEE5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium tracking-wider text-black/40 uppercase mb-4 block">Agent Skill</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-6">
                Give your agents a wallet they can actually use.
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-8">
                Your agents can now send, swap, stake, and set up complex automations onchain using natural language.
              </p>

              {/* Code Block */}
              <div className="bg-[#1A1A1A] rounded-xl overflow-hidden font-mono text-sm">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#252525]">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                </div>
                <div className="p-5 overflow-x-auto">
                  <pre className="text-white/90 leading-relaxed">
                    <code>{`const agent = new CoinFelloAgent({
  wallet: userWallet,
  permissions: ['swap', 'stake'],
  limits: {
    maxSpend: '1000 USDC',
    allowedTokens: ['ETH', 'USDC']
  }
});

await agent.execute(
  "Swap 100 USDC for ETH and stake it"
);`}</code>
                  </pre>
                </div>
              </div>

              <button
                onClick={copyCommand}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy install command'}
              </button>
            </div>

            <div>
              <p className="text-sm font-medium tracking-wider text-black/40 uppercase mb-6 text-center">
                Works with your favorite AI tools
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {aiTools.map((tool) => (
                  <div 
                    key={tool.name}
                    className="flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-black/5 shadow-sm"
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 px-5 py-3 bg-white/50 rounded-full border border-black/5">
                  <span className="text-black/40 font-medium">+ others</span>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[#A89F4B] font-medium hover:underline"
                >
                  View Docs
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen In Section */}
      <section className="py-16 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium tracking-wider text-black/40 uppercase mb-10">
            As Seen In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {mediaLogos.map((logo) => (
              <div 
                key={logo.name}
                className="h-6 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity"
                style={{ width: logo.width }}
              >
                <span className="text-sm font-semibold text-black/70">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8">
            Your crypto, <span className="italic">finally simple.</span>
          </h2>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5E642] text-black font-semibold rounded-full hover:bg-[#E5D63A] transition-colors shadow-sm text-lg"
          >
            Launch CoinFello
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-[#F0EEE5]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-3">Stay in the loop.</h3>
            <p className="text-black/60 mb-6">Get product updates and DeFi insights, straight to your inbox.</p>
            <form className="flex gap-3">
              <input 
                type="email" 
                placeholder="you@example.com"
                className="flex-1 px-5 py-3 rounded-full border border-black/10 bg-white focus:outline-none focus:border-black/30 text-sm"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-[#1A1A1A] text-white font-medium rounded-full hover:bg-black/80 transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl">�️</span>
                <span className="text-xl font-semibold">CoinFello</span>
              </a>
              <p className="text-sm text-black/50 max-w-xs">
                600 W 6th Street Fourth Floor #1079, Fort Worth, TX 76102
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">Follow us</a></li>
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">Developers</a></li>
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">Terms of Use</a></li>
                <li><a href="#" className="text-sm text-black/60 hover:text-black transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black/40">© 2026 CoinFello Labs Inc.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-black/40 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
