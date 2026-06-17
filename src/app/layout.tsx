import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/layouts";
import { UIProvider } from "@/context/UIContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gemintangsf.vercel.app"),
  title: "Gemintang – Software Engineer | Gemintang Sangkaji Furqon",
  description: "Gemintang (Gemintang Sangkaji Furqon) is a software engineer specializing in Backend, Frontend, and Mobile Development.",
  openGraph: {
    title: "Gemintang – Software Engineer | Gemintang Sangkaji Furqon",
    description: "Gemintang (Gemintang Sangkaji Furqon) is a software engineer specializing in Backend, Frontend, and Mobile Development.",
    url: "https://gemintangsf.vercel.app",
    siteName: "Portfolio Gemintang",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemintang – Software Engineer | Gemintang Sangkaji Furqon",
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
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" />
      </head>
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

          <Navbar />
          <main className="min-h-screen relative z-0">{children}</main>
          <Footer />
          <SpeedInsights />
        </UIProvider>
      </body>
    </html>
  );
}
