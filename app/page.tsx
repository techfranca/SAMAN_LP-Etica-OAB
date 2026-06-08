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
  const CHECKOUT_URL =
    "#"; // Substituir pelo link de checkout da Hotmart

  return (
    <main className="min-h-screen bg-dark-950">
      <HeroSection checkoutUrl={CHECKOUT_URL} />
      <ProblemSection />
      <TurningPointSection />
      <AuthoritySection />
      <ContentSection />
      <SocialProofSection />
      <ForWhoSection />
      <OfferSection checkoutUrl={CHECKOUT_URL} />
      <FaqSection />
      <FinalCtaSection checkoutUrl={CHECKOUT_URL} />
      <Footer />
    </main>
  );
}
