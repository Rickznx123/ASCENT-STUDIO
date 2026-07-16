import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASCENT STUDIO | Produção Audiovisual e Gestão de Tráfego",
  description:
    "Criamos campanhas estratégicas no Meta Ads para conectar sua empresa às pessoas certas e gerar novas oportunidades de negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-void text-ink-100 font-display">
        {children}
      </body>
    </html>
  );
}
