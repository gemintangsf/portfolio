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
  metadataBase: new URL("https://gemintangsf.vercel.app"),
  title: "Gemintang \u2013 Software Engineer | Gemintang Sangkaji Furqon",
  description: "Gemintang (Gemintang Sangkaji Furqon) is a software engineer specializing in Backend, Frontend, and Mobile Development.",
  openGraph: {
    title: "Gemintang \u2013 Software Engineer | Gemintang Sangkaji Furqon",
    description: "Gemintang (Gemintang Sangkaji Furqon) is a software engineer specializing in Backend, Frontend, and Mobile Development.",
    url: "https://gemintangsf.vercel.app",
    siteName: "Portfolio Gemintang",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemintang \u2013 Software Engineer | Gemintang Sangkaji Furqon",
    description: "Gemintang (Gemintang Sangkaji Furqon) is a software engineer specializing in Backend, Frontend, and Mobile Development.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "V4LXIZhcFBbe-hon_g9EleuX573WoTVY40LlsHLGgmI",
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Gemintang Sangkaji Furqon",
                url: "https://gemintangsf.vercel.app",
                sameAs: [
                  "https://github.com/gemintangsf",
                  "https://www.linkedin.com/in/gemintangsf/"
                ]
              })
            }}
          />
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
