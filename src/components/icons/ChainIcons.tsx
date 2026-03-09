// Blockchain Icons Component
// Using SVG paths for popular blockchain logos

export const EthereumIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#627EEA"/>
    <path d="M16.5 4L16 5.5V20.5L16.5 21L23 16.5L16.5 4Z" fill="white" fillOpacity="0.6"/>
    <path d="M16.5 4L10 16.5L16.5 21V12.5V4Z" fill="white"/>
    <path d="M16.5 22.5L16 23.5V28L16.5 29L23 18L16.5 22.5Z" fill="white" fillOpacity="0.6"/>
    <path d="M16.5 29V22.5L10 18L16.5 29Z" fill="white"/>
    <path d="M16.5 12.5L23 16.5L16.5 21V12.5Z" fill="white" fillOpacity="0.2"/>
    <path d="M10 16.5L16.5 12.5V21L10 16.5Z" fill="white" fillOpacity="0.6"/>
  </svg>
);

export const SolanaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="url(#solana-gradient)"/>
    <path d="M8 12.5L12.5 8H23L18.5 12.5H8Z" fill="white"/>
    <path d="M8 17.5L12.5 13H23L18.5 17.5H8Z" fill="white"/>
    <path d="M8 22.5L12.5 18H23L18.5 22.5H8Z" fill="white"/>
    <defs>
      <linearGradient id="solana-gradient" x1="4" y1="28" x2="28" y2="4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9945FF"/>
        <stop offset="0.5" stopColor="#14F195"/>
        <stop offset="1" stopColor="#14F195"/>
      </linearGradient>
    </defs>
  </svg>
);

export const BaseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#0052FF"/>
    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="#0052FF"/>
    <path d="M16 24.5C20.6944 24.5 24.5 20.6944 24.5 16C24.5 11.3056 20.6944 7.5 16 7.5C11.3056 7.5 7.5 11.3056 7.5 16C7.5 20.6944 11.3056 24.5 16 24.5Z" fill="white"/>
  </svg>
);

export const ArbitrumIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#2D374B"/>
    <path d="M16 6L8 20L16 26L24 20L16 6Z" fill="#28A0F0"/>
    <path d="M16 6V16L24 20L16 6Z" fill="#96BEDC"/>
    <path d="M16 16L8 20L16 26V16Z" fill="#96BEDC"/>
  </svg>
);

export const OptimismIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#FF0420"/>
    <path d="M10.5 20.5C9.5 20.5 8.7 20.2 8.1 19.6C7.5 19 7.2 18.2 7.2 17.2C7.2 16.8 7.25 16.35 7.35 15.85C7.45 15.35 7.6 14.8 7.8 14.2C8.4 12.5 9.25 11.2 10.35 10.3C11.45 9.4 12.75 8.95 14.25 8.95C14.95 8.95 15.55 9.1 16.05 9.4C16.55 9.7 16.9 10.1 17.1 10.6C17.8 9.9 18.55 9.4 19.35 9.1C20.15 8.8 20.95 8.65 21.75 8.65C22.75 8.65 23.55 8.95 24.15 9.55C24.75 10.15 25.05 10.95 25.05 11.95C25.05 12.35 25 12.8 24.9 13.3C24.8 13.8 24.65 14.35 24.45 14.95C23.85 16.65 23 17.95 21.9 18.85C20.8 19.75 19.5 20.2 18 20.2C17.3 20.2 16.7 20.05 16.2 19.75C15.7 19.45 15.35 19.05 15.15 18.55C14.45 19.25 13.7 19.75 12.9 20.05C12.1 20.35 11.3 20.5 10.5 20.5ZM11.5 17.5C11.9 17.5 12.3 17.4 12.7 17.2C13.1 17 13.5 16.65 13.9 16.15L15.15 13.5C14.75 13.1 14.35 12.85 13.95 12.75C13.55 12.65 13.15 12.6 12.75 12.6C12.05 12.6 11.4 12.85 10.8 13.35C10.2 13.85 9.75 14.55 9.45 15.45C9.25 16.05 9.15 16.55 9.15 16.95C9.15 17.35 9.25 17.65 9.45 17.85C9.65 18.05 10 18.15 10.5 18.15L11.5 17.5ZM19.5 17.5C19.9 17.5 20.3 17.4 20.7 17.2C21.1 17 21.5 16.65 21.9 16.15L23.15 13.5C22.75 13.1 22.35 12.85 21.95 12.75C21.55 12.65 21.15 12.6 20.75 12.6C20.05 12.6 19.4 12.85 18.8 13.35C18.2 13.85 17.75 14.55 17.45 15.45C17.25 16.05 17.15 16.55 17.15 16.95C17.15 17.35 17.25 17.65 17.45 17.85C17.65 18.05 18 18.15 18.5 18.15L19.5 17.5Z" fill="white"/>
  </svg>
);

export const PolygonIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#8247E5"/>
    <path d="M21 12L16 9L11 12V20L16 23L21 20V12Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M16 16V23" stroke="white" strokeWidth="1.5"/>
    <path d="M16 16L21 12" stroke="white" strokeWidth="1.5"/>
    <path d="M16 16L11 12" stroke="white" strokeWidth="1.5"/>
  </svg>
);

export const AvalancheIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#E84142"/>
    <path d="M10 24L15 14H17L22 24H19L17.5 21H14.5L13 24H10ZM15.5 19H16.5L16 18L15.5 19Z" fill="white"/>
    <path d="M12 14L9.5 19L7 14H9L10 16L11 14H12Z" fill="white"/>
  </svg>
);

export const BNBIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#F3BA2F"/>
    <path d="M16 8L18 10L16 12L14 10L16 8Z" fill="white"/>
    <path d="M12 12L14 14L12 16L10 14L12 12Z" fill="white"/>
    <path d="M20 12L22 14L20 16L18 14L20 12Z" fill="white"/>
    <path d="M16 14L18 16L16 18L14 16L16 14Z" fill="white"/>
    <path d="M12 16L14 18L12 20L10 18L12 16Z" fill="white"/>
    <path d="M20 16L22 18L20 20L18 18L20 16Z" fill="white"/>
    <path d="M16 20L18 22L16 24L14 22L16 20Z" fill="white"/>
  </svg>
);

export const ZkSyncIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#4E529A"/>
    <path d="M16 8L24 16L16 24L8 16L16 8Z" stroke="white" strokeWidth="1.5"/>
    <path d="M16 12L20 16L16 20L12 16L16 12Z" fill="white"/>
  </svg>
);

export const LineaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#121212"/>
    <path d="M10 12H14V20H10V12Z" fill="white"/>
    <path d="M18 12H22V20H18V12Z" fill="white"/>
    <path d="M14 14H18V18H14V14Z" fill="white"/>
  </svg>
);

export const ScrollIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#FFEEDA"/>
    <circle cx="16" cy="16" r="12" fill="#EBC28E"/>
    <path d="M16 8C11.58 8 8 11.58 8 16C8 20.42 11.58 24 16 24C20.42 24 24 20.42 24 16" stroke="#FFEEDA" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const TaikoIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#E81899"/>
    <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="2"/>
    <circle cx="16" cy="16" r="4" fill="white"/>
  </svg>
);

export const MantleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#000000"/>
    <path d="M16 8C11.58 8 8 11.58 8 16C8 20.42 11.58 24 16 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="4" fill="white"/>
  </svg>
);

export const MetisIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#00D2FF"/>
    <path d="M16 8L20 14H12L16 8Z" fill="white"/>
    <path d="M12 14L16 20L20 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 20V24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const GnosisIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#133629"/>
    <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="1.5"/>
    <circle cx="16" cy="16" r="5" fill="white"/>
  </svg>
);

export const FantomIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#1969FF"/>
    <path d="M16 8L20 10V14L16 16L12 14V10L16 8Z" fill="white"/>
    <path d="M12 14V18L16 20L20 18V14" stroke="white" strokeWidth="1.5"/>
    <path d="M16 16V24" stroke="white" strokeWidth="1.5"/>
  </svg>
);

export const CeloIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#FCFF52"/>
    <circle cx="16" cy="16" r="6" fill="#476520"/>
    <path d="M16 6C13 6 10 8 10 11C10 14 13 16 16 16" stroke="#476520" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 26C19 26 22 24 22 21C22 18 19 16 16 16" stroke="#476520" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MoonbeamIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#53CBC8"/>
    <circle cx="16" cy="16" r="10" fill="white"/>
    <circle cx="16" cy="16" r="6" fill="#53CBC8"/>
    <circle cx="16" cy="16" r="2" fill="white"/>
  </svg>
);

export const AuroraIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="url(#aurora-gradient)"/>
    <circle cx="16" cy="16" r="8" fill="white"/>
    <defs>
      <linearGradient id="aurora-gradient" x1="4" y1="28" x2="28" y2="4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#70D44B"/>
        <stop offset="0.5" stopColor="#00D1FF"/>
        <stop offset="1" stopColor="#3F51B5"/>
      </linearGradient>
    </defs>
  </svg>
);

export const ChainIcon = ({ name, className = "w-6 h-6" }: { name: string; className?: string }) => {
  const icons: Record<string, React.FC<{ className?: string }>> = {
    ethereum: EthereumIcon,
    solana: SolanaIcon,
    base: BaseIcon,
    arbitrum: ArbitrumIcon,
    optimism: OptimismIcon,
    polygon: PolygonIcon,
    avalanche: AvalancheIcon,
    bnb: BNBIcon,
    zksync: ZkSyncIcon,
    linea: LineaIcon,
    scroll: ScrollIcon,
    taiko: TaikoIcon,
    mantle: MantleIcon,
    metis: MetisIcon,
    gnosis: GnosisIcon,
    fantom: FantomIcon,
    celo: CeloIcon,
    moonbeam: MoonbeamIcon,
    aurora: AuroraIcon,
  };

  const Icon = icons[name.toLowerCase()];
  return Icon ? <Icon className={className} /> : <div className={`${className} rounded-full bg-white/10 flex items-center justify-center text-xs text-[#A09890]`}>{name[0]}</div>;
};

export const chainList = [
  { name: "Ethereum", icon: "ethereum" },
  { name: "Solana", icon: "solana" },
  { name: "Base", icon: "base" },
  { name: "Arbitrum", icon: "arbitrum" },
  { name: "Optimism", icon: "optimism" },
  { name: "Polygon", icon: "polygon" },
  { name: "Avalanche", icon: "avalanche" },
  { name: "BNB", icon: "bnb" },
  { name: "zkSync", icon: "zksync" },
  { name: "Linea", icon: "linea" },
  { name: "Scroll", icon: "scroll" },
  { name: "Taiko", icon: "taiko" },
  { name: "Mantle", icon: "mantle" },
  { name: "Metis", icon: "metis" },
  { name: "Gnosis", icon: "gnosis" },
  { name: "Fantom", icon: "fantom" },
  { name: "Celo", icon: "celo" },
  { name: "Moonbeam", icon: "moonbeam" },
  { name: "Aurora", icon: "aurora" },
];
