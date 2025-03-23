import type { Metadata } from "next";
import { Inter, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import {twMerge} from 'tailwind-merge'

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });

const dm_serif = DM_Serif_Text({ subsets: ["latin"], display: 'swap', variable: '--font-dm-serif-text', weight: "400" });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio website showcasing my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, dm_serif.variable, 'bg-gray-900 antialiased text-white font-inter')}>{children}</body>
    </html>
  );
}
