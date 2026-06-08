import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Guia Completo de Ética para OAB | Acerte Todas as Questões",
  description:
    "O material mais completo para você acertar todas as questões de Ética Profissional na prova da OAB. Criado por um ex-relator do Tribunal de Ética com mais de 10 anos de experiência.",
  openGraph: {
    title: "Acerte todas as questões de Ética na OAB e seja aprovado",
    description:
      "75 páginas + videoaulas + aulão ao vivo pré-prova. Criado por um ex-relator do Tribunal de Ética da OAB/SP com mais de 3.000 alunos aprovados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${outfit.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
