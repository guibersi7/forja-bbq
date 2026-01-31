import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forja BBQ - Festival da Costela | IGE Igreja Geração Eleita",
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
    "Evento Cristão",
  ],
  authors: [{ name: "IGE - Igreja Geração Eleita" }],
  openGraph: {
    title: "Forja BBQ - Festival da Costela",
    description:
      "Da brasa à mesa, para o Reino. Participe do Forja BBQ! 21 de Fevereiro, 14h às 21h no Rancho IGE.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Forja BBQ - Festival da Costela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forja BBQ - Festival da Costela",
    description:
      "Da brasa à mesa, para o Reino. Participe do Forja BBQ! 21 de Fevereiro no Rancho IGE.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
