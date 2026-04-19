import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://forja.igrejageracaoeleita.com"),
  title: {
    default: "FORJA M4 - O VALE DA DECISÃO | IGE",
    template: "%s | FORJA M4",
  },
  description:
    "FORJA M4 - O Vale da Decisão. Um retiro espiritual para homens que escolheram confrontar o pecado, alinhar a vida com o céu e responder ao chamado de Deus.",
  keywords: [
    "Forja M4",
    "Vale da Decisão",
    "Retiro espiritual",
    "Homens",
    "IGE",
    "Igreja Geração Eleita",
  ],
  openGraph: {
    title: "FORJA M4 - O VALE DA DECISÃO",
    description:
      "Não é um evento. É um divisor de águas. A decisão é sua.",
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
      <head>
        <link
          rel="preload"
          href="/images/forja-m4-logo-v2.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/forja-m4-hero-poster.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
