import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
