import type { Metadata } from "next";
import { Noto_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
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

export const metadata: Metadata = {
  title: {
    default: "Sustainable Finance for Conservation",
    template: "%s · Sustainable Finance for Conservation",
  },
  description:
    "A single entry point to learn, explore and apply the Landscape Finance Approach.",
  metadataBase: new URL("https://example.org"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[color:var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
