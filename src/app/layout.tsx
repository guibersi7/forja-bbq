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
  metadataBase: new URL("https://igrejageracaoeleita.com"),
  title: {
    default: "IGE - Igreja Geração Eleita | Sorocaba",
    template: "%s | IGE - Igreja Geração Eleita",
  },
  description:
    "Uma igreja apaixonada por Jesus, comprometida com o Reino e dedicada a transformar vidas. Venha nos visitar em Sorocaba!",
  keywords: [
    "Igreja",
    "Igreja Geração Eleita",
    "IGE",
    "Sorocaba",
    "Igreja Evangélica",
    "Culto",
    "Jesus",
    "Cristão",
  ],
  authors: [{ name: "IGE - Igreja Geração Eleita" }],
  openGraph: {
    title: "IGE - Igreja Geração Eleita",
    description:
      "Uma igreja apaixonada por Jesus, comprometida com o Reino e dedicada a transformar vidas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Igreja Geração Eleita",
  },
  twitter: {
    card: "summary_large_image",
    title: "IGE - Igreja Geração Eleita",
    description:
      "Uma igreja apaixonada por Jesus, comprometida com o Reino e dedicada a transformar vidas.",
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
