import { ExpandableChapters } from "./expandable-chapters";
import { ExpandableTestimonials } from "./expandable-testimonials";
import { CtaButton } from "./cta-button";

function SectionTitle({
  children,
  sub,
  light = false,
}: {
  children: React.ReactNode;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-8 sm:mb-10">
      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${
          light ? "text-white" : "gradient-gold-text"
        }`}
      >
        {children}
      </h2>
      {sub && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
          {sub}
        </p>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div className="flex justify-center py-2">
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════ */
export function HeroSection({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,154,17,0.08)_0%,transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 sm:pt-24 sm:pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
          <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
          </svg>
          <span className="text-xs sm:text-sm font-bold text-green-400 tracking-wide uppercase">
            Mais de 3.000 alunos aprovados na OAB
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-bold leading-[1.15] tracking-tight text-white mb-6">
          Acerte todas as questões de{" "}
          <span className="gradient-gold-text">
            Ética na prova da OAB
          </span>{" "}
          e seja aprovado
        </h1>

        {/* Capa do e-book */}
        <div className="flex justify-center mb-8">
          <div className="w-56 sm:w-64 rounded-xl overflow-hidden shadow-2xl shadow-gold-500/10 border border-zinc-800/40">
            <img
              src="/ebook-capa-v2.webp"
              alt="Ética Profissional para o Exame da OAB — Leonardo Cremasco"
              className="w-full"
            />
          </div>
        </div>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tenha acesso ao material completo que já aprovou mais de 3 mil alunos
          na OAB. Criado por um ex-relator do Tribunal de Ética da OAB/SP com
          mais de 10 anos em sala de aula.
        </p>

        {/* CTA */}
        <CtaButton href={checkoutUrl} label="QUERO SER APROVADO NA OAB" />

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   2. PROBLEMA
   ═══════════════════════════════════════════════ */
export function ProblemSection({ checkoutUrl }: { checkoutUrl: string }) {
  const problems = [
    {
      icon: "📚",
      text: "Ética Profissional não é ensinada na faculdade voltada para a prova e por isso muitos acabam reprovando",
    },
    {
      icon: "📊",
      text: "É uma das matérias com mais questões na prova, e a maioria dos candidatos não passam por ignorar",
    },
    {
      icon: "😰",
      text: "Muitos deixam de passar por 2 ou 3 pontos que poderiam ter vindo de Ética",
    },
    {
      icon: "⏳",
      text: "Cada reprovação significa mais meses esperando, mais taxa e mais ansiedade que poderia ser evitado",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#0f1117]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTitle light>
          A faculdade te formou em Direito,{" "}
          <span className="gradient-gold-text">
            mas não te preparou para a OAB
          </span>
        </SectionTitle>

        <div className="space-y-4">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-zinc-800/60 bg-dark-900/50 hover:border-gold-500/20 transition-colors"
            >
              <span className="text-xl sm:text-2xl flex-shrink-0 mt-0.5">
                {p.icon}
              </span>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <CtaButton href={checkoutUrl} label="QUERO MUDAR ISSO AGORA" size="md" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   3. VIRADA
   ═══════════════════════════════════════════════ */
export function TurningPointSection({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="py-10 sm:py-14 bg-[#0a0c12]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <Divider />
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-8 mb-6 leading-tight">
          Conheça o material que{" "}
          <span className="gradient-gold-text">cobre tudo que cai na prova</span>{" "}
          de Ética da OAB.
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          10 capítulos cobrindo todos os artigos do Estatuto da OAB e do Código de
          Ética, <strong className="text-zinc-200 underline">40 questões com gabarito comentado, quadros comparativos e as
          pegadinhas que mais aparecem</strong> — criado por quem já esteve{" "}
          do outro lado da banca e
          já aprovou mais de 3.000 alunos.
        </p>

        {/* Print do sumário */}
        <div className="flex justify-center mt-10">
          <div className="w-72 sm:w-80 rounded-xl overflow-hidden shadow-2xl shadow-gold-500/10 border border-zinc-800/40">
            <img
              src="/sumario.webp"
              alt="Sumário — 13 capítulos cobrindo todo o conteúdo de Ética para OAB"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <div className="inline-flex items-start gap-2.5 px-5 py-3 rounded-xl border border-gold-500/20 bg-gold-500/5">
            <span className="text-gold-400 font-bold text-sm mt-0.5">BÔNUS:</span>
            <span className="text-sm text-zinc-300">Aulão ao vivo antes da prova para revisão e tira-dúvidas</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <CtaButton href={checkoutUrl} label="QUERO MATERIAL COMPLETO" size="md" />
        </div>

        <Divider />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   3.5. O QUE VOCÊ VAI APRENDER (conteúdo real)
   ═══════════════════════════════════════════════ */
export function ContentSection({ checkoutUrl }: { checkoutUrl: string }) {
  const chapters = [
    {
      num: "01",
      title: "Guia de Estudo Estratégico",
      topics: "Por que Ética é crucial · O que mais cai na prova · Método Gabaritar",
    },
    {
      num: "02",
      title: "Atividades Exclusivas da Advocacia",
      topics: "Atividades privativas · Jus Postulandi e exceções · Notória especialização · Nulidade de atos",
    },
    {
      num: "03",
      title: "Inscrição na OAB",
      topics: "Requisitos essenciais · Idoneidade moral · Compromisso solene · Estagiários · Cancelamento vs Licenciamento",
    },
    {
      num: "04",
      title: "Incompatibilidades e Impedimentos",
      topics: "Proibição total vs parcial · Cargos públicos · Impacto nas sociedades de advogados",
    },
    {
      num: "05",
      title: "Direitos e Prerrogativas",
      topics: "Inviolabilidade · Sala de Estado-Maior · Livre ingresso · Imunidade profissional",
    },
    {
      num: "06",
      title: "Procuração e Mandato",
      topics: "Atuação com urgência · Renúncia ao mandato · Substabelecimento · Prazos legais",
    },
    {
      num: "07",
      title: "Honorários Advocatícios",
      topics: "Tipos de honorários · Tabela da OAB · Pacto de quota litis · Vedações",
    },
    {
      num: "08",
      title: "Ética e Disciplina",
      topics: "Deveres do advogado · Sigilo profissional · Publicidade · Infrações éticas e sanções",
    },
    {
      num: "09",
      title: "Sociedade de Advogados",
      topics: "Constituição · Responsabilidade · Registro · Restrições",
    },
    {
      num: "10",
      title: "Tribunal de Ética e Disciplina",
      topics: "Competência · Processo disciplinar · Recursos · Prescrição",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#0a0c12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle
          light
          sub="75 páginas de conteúdo direcionado — tudo que cai na prova, nada que não cai"
        >
          O que você vai encontrar{" "}
          <span className="gradient-gold-text">dentro do guia</span>
        </SectionTitle>

        <ExpandableChapters chapters={chapters} />

        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-400 mb-6">
            + Quadros comparativos, dicas de ouro para a prova e análise das pegadinhas mais recorrentes
          </p>
          <CtaButton href={checkoutUrl} label="QUERO TER ACESSO AO CONTEÚDO" size="md" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   4. AUTORIDADE
   ═══════════════════════════════════════════════ */
export function AuthoritySection({ checkoutUrl }: { checkoutUrl: string }) {
  const credentials = [
    "Sócio Advogado — Cremasco & Vianna Sociedade de Advogados",
    "Professor Especialista em Ética Profissional e Direito do Trabalho",
    "Ex-Relator da 06ª Turma do Tribunal de Ética e Disciplina da OAB/SP (10 anos)",
    "Autor Jurídico — Obras publicadas sobre Ética para a OAB",
    "Mais de 3.000 alunos aprovados no Exame da Ordem",
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#0f1117]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle light sub="Conheça quem está por trás deste material">
          Criado por quem já esteve{" "}
          <span className="gradient-gold-text">do outro lado da banca</span>
        </SectionTitle>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Photo */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl border-2 border-gold-500/20 flex-shrink-0 glow-gold overflow-hidden">
            <img
              src="/professor.webp"
              alt="Prof. Leonardo Cremasco Sartorio"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Credentials */}
          <div className="flex-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
              Prof. Leonardo Cremasco Sartorio
            </h3>
            <p className="text-gold-400 text-sm mb-6">
              Especialista em Ética Profissional para OAB
            </p>
            <ul className="space-y-3">
              {credentials.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-zinc-300">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <CtaButton href={checkoutUrl} label="QUERO APRENDER COM ELE" size="md" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   5. O QUE VOCÊ RECEBE
   ═══════════════════════════════════════════════ */
export function WhatYouGetSection() {
  const items = [
    {
      icon: "📖",
      title: "Guia Completo de Ética",
      subtitle: "75 páginas · 10 capítulos",
      desc: "Cobre todos os temas que caem na prova: atividades exclusivas da advocacia, inscrição na OAB, incompatibilidades e impedimentos, direitos e prerrogativas, honorários, infrações éticas e muito mais — com artigos, análises e quadros comparativos.",
      value: "R$ 97",
    },
    {
      icon: "🎬",
      title: "Videoaulas Completas",
      subtitle: "Curso em vídeo",
      desc: "Todo o conteúdo do guia explicado em aula pelo Prof. Leonardo. Assista, pause, revise — no seu ritmo, de qualquer dispositivo.",
      value: "R$ 97",
    },
    {
      icon: "🔴",
      title: "Aulão ao Vivo Pré-Prova",
      subtitle: "Bônus exclusivo",
      desc: "Revisão ao vivo na manhã do dia da prova. Tire dúvidas em tempo real e vá para o exame com o conteúdo fresco na cabeça.",
      value: "Inestimável",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-dark-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle light sub="Guia escrito + videoaulas + aulão ao vivo pré-prova">
          Tudo que você precisa para{" "}
          <span className="gradient-gold-text">dominar Ética na OAB</span>
        </SectionTitle>

        <div className="grid gap-5 sm:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-zinc-800/60 bg-dark-950/80 p-6 hover:border-gold-500/30 transition-colors group"
            >
              {i === 2 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gold-500 text-dark-950 text-[10px] font-bold uppercase tracking-wider">
                  Bônus
                </div>
              )}
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h3 className="font-bold text-white text-base sm:text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-gold-400 text-xs font-medium mb-3 uppercase tracking-wider">
                {item.subtitle}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {item.desc}
              </p>
              <p className="text-xs text-zinc-500">
                Valor:{" "}
                <span className="line-through text-zinc-600">{item.value}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-zinc-500 mt-8">
          Tudo isso valeria{" "}
          <span className="line-through text-zinc-400">R$ 197</span>. Mas na
          oferta de lançamento, você leva por muito menos.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   6. OFERTA
   ═══════════════════════════════════════════════ */
export function OfferSection({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section id="oferta" className="py-10 sm:py-14 bg-[#0f1117]">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl border-2 border-gold-500/30 bg-gradient-to-b from-dark-800/80 to-dark-900/90 p-6 sm:p-8 glow-gold">
          {/* Discount badge */}
          <div className="absolute -top-3 -right-3">
            <div className="bg-gold-500 text-dark-950 px-4 py-1 rounded-full font-bold text-xs shadow-lg">
              OFERTA DE LANÇAMENTO
            </div>
          </div>

          {/* Escassez */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2.5 text-center mb-4">
            <p className="text-xs font-bold text-red-400">
              Oferta especial válida somente até 30/06/2026
            </p>
          </div>

          <div className="text-center space-y-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
              Garanta seu acesso agora
            </h2>

            {/* Value stack */}
            <div className="text-left space-y-2.5">
              <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider text-center mb-3">
                O que você recebe
              </p>
              <div className="flex items-start gap-2.5">
                <svg className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-zinc-300">
                  <strong className="text-white">Guia Completo de Ética</strong> — 75 páginas · 10 capítulos
                  <span className="text-red-400 ml-1 line-through text-xs font-bold">R$ 99</span>
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-zinc-300">
                  <strong className="text-white">Videoaulas Completas</strong> — curso em vídeo com o Prof. Leonardo
                  <span className="text-red-400 ml-1 line-through text-xs font-bold">R$ 99</span>
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-zinc-300">
                  <strong className="text-white">Aulão ao Vivo Pré-Prova</strong> — revisão no dia anterior ao dia do exame
                  <span className="text-red-400 ml-1 line-through text-xs font-bold">R$ 99</span>
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="pt-4 border-t border-zinc-800/60">
              <p className="text-base text-zinc-400 mb-2">
                De{" "}
                <span className="line-through text-red-400 text-2xl font-bold">
                  R$ 297
                </span>
              </p>
              <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wider">por apenas</p>
              <p className="text-5xl sm:text-6xl font-bold text-green-400 font-display">
                R$ 47
              </p>
              <p className="text-xs text-zinc-500 mt-2">
                Pagamento único — acesso vitalício
              </p>
            </div>

            {/* CTA */}
            <CtaButton href={checkoutUrl} label="GARANTIR OFERTA" />

            {/* Guarantee */}
            <div className="flex items-center gap-3 bg-dark-950/60 border border-zinc-800/60 rounded-xl p-4 text-left">
              <svg
                className="h-8 w-8 text-gold-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-sm font-semibold text-white">
                  Garantia de 7 dias
                </p>
                <p className="text-xs text-zinc-400">
                  Se não for o que esperava, devolvemos 100% — sem perguntas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   7. PROVA SOCIAL
   ═══════════════════════════════════════════════ */
export function SocialProofSection({ checkoutUrl }: { checkoutUrl: string }) {
  const prints = [
    {
      src: "/depoimento-1.webp",
      alt: "Aluno: Mestre passei. Gabaritei ética.",
    },
    {
      src: "/depoimento-2.webp",
      alt: "Aluno: Por conta de sua ajuda, também gabaritei ética. Aquela aula de manhã foi sensacional.",
    },
    {
      src: "/depoimento-3.webp",
      alt: "Aluna: PROFFFFFFF 40 cravado. Errei 1 de ética. MTO OBRIGADA POR TODO ENSINAMENTO.",
    },
    {
      src: "/depoimento-4.webp",
      alt: "Aluno: Professor, ética me salvou na prova de hoje! Praticamente tudo que você falou em aula, caiu na prova.",
    },
    {
      src: "/depoimento-5.webp",
      alt: "Aluno: Boa tarde professor. Aqui deu certo, errei duas por desatenção, obrigado pelas aulas, obrigado pela acessibilidade.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#0f1117]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle light sub="Prints reais de alunos que estudaram com o Prof. Leonardo">
          O que os alunos dizem{" "}
          <span className="gradient-gold-text">depois da prova</span>
        </SectionTitle>

        <ExpandableTestimonials prints={prints} />

        <p className="text-center text-sm text-zinc-500 mt-8 mb-6">
          Conversas reais entre alunos e o Prof. Leonardo no Instagram e WhatsApp
        </p>

        <div className="text-center">
          <CtaButton href={checkoutUrl} label="QUERO O MESMO RESULTADO" size="md" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   8. PARA QUEM É
   ═══════════════════════════════════════════════ */
export function ForWhoSection({ checkoutUrl }: { checkoutUrl: string }) {
  const forWho = [
    "Estudantes de Direito que vão prestar a OAB",
    "Quem já reprovou e precisa garantir pontos em Ética",
    "Quem nunca estudou Ética voltada especificamente para a prova",
    "Quem quer um material direcionado, sem montar roteiro de estudo sozinho",
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#0a0c12]">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <SectionTitle light>Para quem é <span className="gradient-gold-text">este material</span></SectionTitle>

        <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
          <ul className="space-y-3">
            {forWho.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <span className="text-green-400 mt-0.5 flex-shrink-0">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   9. FAQ
   ═══════════════════════════════════════════════ */
export function FaqSection() {
  const faqs = [
    {
      q: "Preciso ter conhecimento prévio em Ética?",
      a: "Não. O material parte do zero — a maioria dos alunos nunca teve essa matéria na faculdade voltada para a prova da OAB.",
    },
    {
      q: "Funciona para qualquer edição da OAB?",
      a: "Sim. O conteúdo cobre os temas recorrentes que caem em todas as edições do exame.",
    },
    {
      q: "O que é a revisão ao vivo pré-prova?",
      a: "Um aulão que acontece na manhã do dia da prova, para você ir com o conteúdo fresco. Você recebe o link com antecedência.",
    },
    {
      q: "Só o guia já é suficiente para passar?",
      a: "O guia cobre todo o conteúdo de Ética. Alunos que estudaram com esse material relatam acertar 7 ou 8 das questões da matéria.",
    },
    {
      q: "E se eu não gostar do material?",
      a: "Você tem 7 dias de garantia incondicional. Devolvemos 100% do valor, sem perguntas.",
    },
    {
      q: "Posso acessar pelo celular?",
      a: "Sim. Tanto as videoaulas quanto o guia escrito funcionam em qualquer dispositivo — celular, tablet ou computador.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#0a0c12]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <SectionTitle light>Perguntas <span className="gradient-gold-text">frequentes</span></SectionTitle>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-zinc-800/60 bg-dark-950/60 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-sm sm:text-base text-zinc-200 hover:text-white transition-colors">
                {faq.q}
                <svg
                  className="h-5 w-5 text-gold-500 flex-shrink-0 transition-transform group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   10. CTA FINAL
   ═══════════════════════════════════════════════ */
export function FinalCtaSection({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="py-10 sm:py-14 bg-[#0f1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,154,17,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <Divider />

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 leading-tight">
          Sem a OAB, você é bacharel.
          <br />
          <span className="gradient-gold-text">
            Com esse material, você vira advogado.
          </span>
        </h2>

        <p className="text-base text-zinc-400 mb-8 max-w-xl mx-auto">
          Não arrisque ir para a prova sem preparo em Ética. Por menos de R$ 1
          por dia, você garante o método que já aprovou centenas de alunos.
        </p>

        <CtaButton href={checkoutUrl} label="QUERO PASSAR NA OAB" />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
          <span>Garantia de 7 dias</span>
          <span>&bull;</span>
          <span>Acesso imediato</span>
          <span>&bull;</span>
          <span>Compra segura via Hotmart</span>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
export function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs text-zinc-600 leading-relaxed">
          Este produto não garante a aprovação na prova da OAB. Os resultados
          dependem do empenho e dedicação de cada aluno. Este site não tem
          relação com a OAB, Facebook, Google ou qualquer outra plataforma
          mencionada.
        </p>
        <p className="text-xs text-zinc-700 mt-4">
          &copy; {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
