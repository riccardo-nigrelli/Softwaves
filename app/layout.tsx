import type { Metadata, Viewport } from "next";
import { Figtree, Outfit } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-outfit" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-figtree" });

export const metadata: Metadata = {
  // Origin only: Next adds basePath to file-based images (OG, icons) itself.
  metadataBase: new URL(new URL(SITE_URL).origin),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "automazione processi aziendali",
    "software su misura",
    "sviluppo software gestionale",
    "integrazione ERP CRM",
    "dashboard aziendali",
    "digitalizzazione PMI",
  ],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: `${SITE_URL}/`,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${outfit.variable} ${figtree.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
