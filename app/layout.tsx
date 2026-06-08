import type { Metadata } from "next";
import Script from "next/script";
import { Sora, Outfit } from "next/font/google";
import { PixelInit } from "@/components/pixel-init";
import { TrackingEvents } from "@/components/tracking-events";
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
      <head>
        <Script id="fb-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');`}
        </Script>
      </head>
      <body>
        {children}
        <PixelInit />
        <TrackingEvents />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(e) {
                var link = e.target.closest('a[href="#oferta"]');
                if (link) {
                  e.preventDefault();
                  e.stopPropagation();
                  var el = document.getElementById('oferta');
                  if (el) {
                    var y = el.getBoundingClientRect().top + window.pageYOffset - 10;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }
              }, true);
            `,
          }}
        />
      </body>
    </html>
  );
}
