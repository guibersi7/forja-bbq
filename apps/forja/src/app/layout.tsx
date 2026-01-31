import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forja.igrejageracaoeleita.com"),
  title: {
    default: "Forja BBQ - Festival da Costela | IGE",
    template: "%s | Forja BBQ",
  },
  description:
    "Da brasa à mesa, para o Reino. Participe do Forja BBQ, o maior festival de costela da IGE! Toda arrecadação será destinada às obras de ampliação da igreja. 21 de Fevereiro, 14h às 21h no Rancho IGE.",
  keywords: [
    "Forja BBQ",
    "Festival da Costela",
    "IGE",
    "Igreja Geração Eleita",
    "Forja",
    "Ministério de Homens",
    "Churrasco",
  ],
  openGraph: {
    title: "Forja BBQ - Festival da Costela",
    description: "Da brasa à mesa, para o Reino. 21 de Fevereiro no Rancho IGE.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
