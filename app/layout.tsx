import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  JetBrains_Mono,
  Poiret_One,
} from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const deco = Poiret_One({
  variable: "--font-deco",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jardim Botânico · London Dry Gin — São Paulo Urban Distillery",
  description:
    "Jardim Botânico London Dry Gin — No 5. Destilado em São Paulo, 43% vol. Um gin urbano, brasileiro, elaborado em pequenos lotes.",
  keywords: [
    "jardim botanico gin",
    "london dry gin",
    "sao paulo urban distillery",
    "gin brasileiro",
    "gin artesanal",
  ],
  authors: [{ name: "São Paulo Urban Distillery" }],
  openGraph: {
    title: "Jardim Botânico · London Dry Gin",
    description:
      "Um London Dry Gin destilado em São Paulo. Pequenos lotes, método clássico.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${deco.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-white text-[color:var(--color-ink)] paper-grain font-sans"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}
