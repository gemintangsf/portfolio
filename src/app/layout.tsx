import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Gemintang",
  description: "Welcome to Gemintang's Professional Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Background */}
        <div className="fixed inset-0 bg-brand-highlight -z-50" />
        <div className="fixed inset-0 -z-40">
          <InteractiveBackground />
        </div>

        {/* Global Brand Blobs */}
        <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-brand-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse -z-40 pointer-events-none" />
        <div className="fixed top-[20%] right-[-5%] w-96 h-96 bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700 -z-40 pointer-events-none" />
        <div className="fixed bottom-[-10%] left-[20%] w-80 h-80 bg-brand-base/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000 -z-40 pointer-events-none" />

        <Navbar />
        <main className="min-h-screen relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
