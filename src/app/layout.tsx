import type { Metadata } from "next";
import { Noto_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
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

/* Fuente oficial WWF. Se carga con next/font/local para que respete el
   basePath (/wwf) automáticamente — el @font-face con url absoluta daba 404. */
const wwfFont = localFont({
  src: "../../public/fonts/WWF.otf",
  variable: "--font-wwf-local",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sustainable Finance for Conservation",
    template: "%s · Sustainable Finance for Conservation",
  },
  description:
    "A single entry point to learn, explore and apply the Landscape Finance Approach.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSans.variable} ${jetbrainsMono.variable} ${wwfFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
