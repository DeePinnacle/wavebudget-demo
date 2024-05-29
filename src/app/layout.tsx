import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/sections/top-nav"
import Footer from '@/components/sections/footer'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WaveBudget",
  description: "your easy way to financial wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <TopNav />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
