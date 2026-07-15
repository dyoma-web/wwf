import type { Metadata } from "next";
import { Open_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SITE_BASE } from "@/lib/site";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* Fuente oficial WWF. Se carga con next/font/local para que respete el
   basePath (/wwf) automáticamente — el @font-face con url absoluta daba 404. */
const wwfFont = localFont({
  src: "../../public/fonts/WWF.otf",
  variable: "--font-wwf-local",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE),
  title: {
    default: "Discover Landscape Finance — Scaling Capital for Nature and People",
    template: "%s · Discover Landscape Finance",
  },
  description:
    "A single entry point to learn, explore and apply the Landscape Finance Approach.",
  openGraph: {
    type: "website",
    siteName: "Discover Landscape Finance",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${jetbrainsMono.variable} ${wwfFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
