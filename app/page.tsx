import {
  HeroSection,
  ProblemSection,
  TurningPointSection,
  ContentSection,
  AuthoritySection,
  WhatYouGetSection,
  OfferSection,
  SocialProofSection,
  ForWhoSection,
  FaqSection,
  FinalCtaSection,
  Footer,
} from "./sections";

export default function Home() {
  const CHECKOUT_URL = "#oferta";
  const HOTMART_URL = "https://pay.hotmart.com/L103078598Q?off=4vfc2nmx&checkoutMode=10";

  return (
    <main className="min-h-screen bg-dark-950">
      <HeroSection checkoutUrl={CHECKOUT_URL} />
      <ProblemSection checkoutUrl={CHECKOUT_URL} />
      <TurningPointSection checkoutUrl={CHECKOUT_URL} />
      <AuthoritySection checkoutUrl={CHECKOUT_URL} />
      <ContentSection checkoutUrl={CHECKOUT_URL} />
      <SocialProofSection checkoutUrl={CHECKOUT_URL} />
      <ForWhoSection checkoutUrl={CHECKOUT_URL} />
      <OfferSection checkoutUrl={HOTMART_URL} />
      <FaqSection />
      <FinalCtaSection checkoutUrl={CHECKOUT_URL} />
      <Footer />
    </main>
  );
}
