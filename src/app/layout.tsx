import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { WalletProvider } from "@/lib/wallet-store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexClaw Wallet - AI Agent Wallet Platform",
  description: "下一代 AI Agent 安全钱包平台，让NexClaw安全帮你管钱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}
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
