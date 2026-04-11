import type { Metadata } from "next";
// import { Inter, Roboto_Mono } from "next/font/google"; // Disabled due to network issues
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground";
import Preloader from "./components/Preloader";
import { UIProvider } from "./context/UIContext";

// fonts are now defined in globals.css to avoid network errors
// const inter = Inter({ ... });
// const robotoMono = Roboto_Mono({ ... });

export const metadata: Metadata = {
  title: "Portfolio Gemintang",
  description: "Welcome to Gemintang's Professional Portfolio",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased bg-background text-foreground transition-colors duration-300`}>
        <UIProvider>
          <Preloader />
          {/* Global Background Layer */}
          <div className="fixed inset-0 -z-40">
            <InteractiveBackground />
          </div>

          <Navbar />
          <main className="min-h-screen relative z-0">{children}</main>
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
