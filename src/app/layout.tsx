import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { WalletProvider } from "@/lib/wallet-store";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    default: "Claw Wallet - OpenClaw 原生安全加密钱包 | AI Agent Web3 钱包",
    template: "%s | Claw Wallet",
  },
  description: "Claw Wallet 是专为 OpenClaw AI Agent 生态构建的 Web3 安全加密钱包。基于 AWS Nitro Enclaves TEE 分片架构，支持 20+ 区块链，一键社交登录，让 AI Agent 安全执行链上操作。",
  keywords: [
    "Claw Wallet",
    "OpenClaw",
    "AI Agent 钱包",
    "Web3 钱包",
    "加密钱包",
    "TEE 安全钱包",
    "多链钱包",
    "Agent 钱包",
    "DeFi 钱包",
    "智能合约钱包",
    "AWS Nitro Enclaves",
    "分片加密",
    "社交登录钱包",
    "无助记词钱包",
  ],
  authors: [{ name: "Claw Wallet Team" }],
  creator: "Claw Wallet",
  publisher: "Claw Wallet",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://clawwallet.com",
    siteName: "Claw Wallet",
    title: "Claw Wallet - OpenClaw 原生安全加密钱包",
    description: "专为 OpenClaw AI Agent 生态构建的 Web3 安全加密钱包。TEE 分片架构，20+ 链支持，一键社交登录。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claw Wallet - AI Agent Web3 钱包",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claw Wallet - OpenClaw 原生安全加密钱包",
    description: "专为 OpenClaw AI Agent 生态构建的 Web3 安全加密钱包。TEE 分片架构，20+ 链支持。",
    images: ["/og-image.png"],
    creator: "@clawwallet",
  },
  alternates: {
    canonical: "https://clawwallet.com",
    languages: {
      "zh-CN": "https://clawwallet.com",
      "en-US": "https://clawwallet.com/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  classification: "Web3, Cryptocurrency, AI Agent, Wallet",
  metadataBase: new URL("https://clawwallet.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://clawwallet.com/#organization",
        name: "Claw Wallet",
        alternateName: "OpenClaw Wallet",
        url: "https://clawwallet.com",
        logo: {
          "@type": "ImageObject",
          url: "https://clawwallet.com/logo.svg",
          width: 512,
          height: 512,
        },
        description: "专为 OpenClaw AI Agent 生态构建的 Web3 安全加密钱包",
        foundingDate: "2024",
        sameAs: [
          "https://twitter.com/clawwallet",
          "https://github.com/clawwallet",
          "https://discord.gg/clawwallet",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@clawwallet.com",
          availableLanguage: ["Chinese", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://clawwallet.com/#website",
        url: "https://clawwallet.com",
        name: "Claw Wallet",
        description: "OpenClaw 原生安全加密钱包",
        publisher: {
          "@id": "https://clawwallet.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://clawwallet.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://clawwallet.com/#webpage",
        url: "https://clawwallet.com",
        name: "Claw Wallet - OpenClaw 原生安全加密钱包",
        description: "专为 OpenClaw AI Agent 生态构建的 Web3 安全加密钱包。基于 AWS Nitro Enclaves TEE 分片架构，支持 20+ 区块链。",
        isPartOf: {
          "@id": "https://clawwallet.com/#website",
        },
        about: {
          "@id": "https://clawwallet.com/#organization",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://clawwallet.com/og-image.png",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Claw Wallet",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web, iOS, Android",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "10000",
        },
        featureList: [
          "AI Agent 原生支持",
          "TEE 分片安全架构",
          "20+ 区块链支持",
          "社交登录",
          "无助记词恢复",
          "多签安全",
        ],
      },
    ],
  };

  return (
    <html lang="zh-CN" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className="font-sans antialiased bg-black text-white"
      >
        <AuthProvider>
          <WalletProvider>
            {children}
          </WalletProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
