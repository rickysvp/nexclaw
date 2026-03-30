// Custom Claw Wallet Icons
// Tech-minimalist design system with bold geometric shapes
// Consistent 2px stroke, rounded corners, lobster red accent

interface IconProps {
  className?: string;
}

// Base icon wrapper with consistent styling
const IconWrapper = ({ children, className = "w-5 h-5" }: { children: React.ReactNode; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

// Arrow Right Icon
export const ClawArrowRight = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </IconWrapper>
);

// Shield Icon - Security
export const ClawShield = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </IconWrapper>
);

// Zap Icon - Lightning
export const ClawZap = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconWrapper>
);

// Chevron Down Icon
export const ClawChevronDown = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="m6 9 6 6 6-6" />
  </IconWrapper>
);

// Star Icon
export const ClawStar = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </IconWrapper>
);

// Globe Icon - World/Network
export const ClawGlobe = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </IconWrapper>
);

// Wallet Icon
export const ClawWallet = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" />
  </IconWrapper>
);

// Chevron Left Icon
export const ClawChevronLeft = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="m15 18-6-6 6-6" />
  </IconWrapper>
);

// Chevron Right Icon
export const ClawChevronRight = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="m9 18 6-6-6-6" />
  </IconWrapper>
);

// Lock Icon
export const ClawLock = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconWrapper>
);

// Key Icon
export const ClawKey = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="m21 2-9.6 9.6" />
    <path d="m15 5 3 3" />
  </IconWrapper>
);

// Alert Triangle Icon
export const ClawAlertTriangle = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </IconWrapper>
);

// Check Circle Icon
export const ClawCheckCircle = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </IconWrapper>
);

// Activity Icon
export const ClawActivity = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </IconWrapper>
);

// Bar Chart Icon
export const ClawBarChart2 = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </IconWrapper>
);

// Shield Check Icon
export const ClawShieldCheck = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 12 15 16 10" />
  </IconWrapper>
);

// Shield Alert Icon
export const ClawShieldAlert = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </IconWrapper>
);

// Copy Icon
export const ClawCopy = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </IconWrapper>
);

// Check Icon
export const ClawCheck = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <polyline points="20 6 9 17 4 12" />
  </IconWrapper>
);

// Terminal Icon
export const ClawTerminal = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </IconWrapper>
);

// Lock Keyhole Icon
export const ClawLockKeyhole = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" />
  </IconWrapper>
);

// Eye Icon
export const ClawEye = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);

// User Icon
export const ClawUser = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconWrapper>
);

// Bot Icon - AI/Robot
export const ClawBot = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="8.5" cy="15.5" r="1.5" />
    <circle cx="15.5" cy="15.5" r="1.5" />
    <path d="M12 11V7a4 4 0 0 1 4-4h0" />
    <path d="M12 11V7a4 4 0 0 0-4-4h0" />
  </IconWrapper>
);

// Package Icon
export const ClawPackage = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </IconWrapper>
);

// Sparkles Icon
export const ClawSparkles = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </IconWrapper>
);

// Chevron Up Icon
export const ClawChevronUp = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="m18 15-6-6-6 6" />
  </IconWrapper>
);

// Menu Icon
export const ClawMenu = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </IconWrapper>
);

// X Icon
export const ClawX = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconWrapper>
);

// Github Icon
export const ClawGithub = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </IconWrapper>
);

// Twitter Icon
export const ClawTwitter = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </IconWrapper>
);

// Code Icon
export const ClawCode = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </IconWrapper>
);

// ============ Feature Icons ============

// Lock Icon - Social Login
export const ClawLockIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconWrapper>
);

// Robot Icon - AI Agent
export const ClawRobotIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="8.5" cy="15.5" r="1.5" />
    <circle cx="15.5" cy="15.5" r="1.5" />
    <path d="M12 11V7a4 4 0 0 1 4-4h0" />
    <path d="M12 11V7a4 4 0 0 0-4-4h0" />
  </IconWrapper>
);

// Chain Icon - Multi-chain
export const ClawChainIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </IconWrapper>
);

// Key Icon - Security/TEE
export const ClawKeyIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="m21 2-9.6 9.6" />
    <path d="m15 5 3 3" />
  </IconWrapper>
);

// Chart Icon - Analytics/Audit
export const ClawChartIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </IconWrapper>
);

// Bolt Icon - Fast/Integration
export const ClawBoltIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconWrapper>
);

// Search Icon - Research
export const ClawSearchIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </IconWrapper>
);

// Handshake Icon - Payment
export const ClawHandshakeIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <path d="M2 12h4l2-2h4l2 2h4" />
    <path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
    <path d="M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
    <circle cx="9" cy="16" r="1" />
    <circle cx="15" cy="16" r="1" />
  </IconWrapper>
);

// Money Icon - Asset Management
export const ClawMoneyIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 12a5 5 0 0 1-10 0" />
  </IconWrapper>
);

// Trending Icon - DeFi Trading
export const ClawTrendingIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <IconWrapper className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </IconWrapper>
);
