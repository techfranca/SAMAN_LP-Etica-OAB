'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/track';

// PADRÃO FRANCA DE EVENTOS (out/2026): Rolagem25/50/75/100 · 30s · 60s · Botao1..BotaoN.
// Os botões seguem numerados na ordem em que aparecem na página (1 = topo, 8 = fim).
const BUTTON_MAP: Record<string, string> = {
  'QUERO SER APROVADO NA OAB': 'Botao1',
  'QUERO MUDAR ISSO AGORA': 'Botao2',
  'QUERO MATERIAL COMPLETO': 'Botao3',
  'QUERO APRENDER COM ELE': 'Botao4',
  'QUERO TER ACESSO AO CONTEÚDO': 'Botao5',
  'QUERO O MESMO RESULTADO': 'Botao6',
  'GARANTIR OFERTA': 'Botao7_Oferta', // botão da seção de oferta leva o sufixo
  'QUERO PASSAR NA OAB': 'Botao8',
};

// ORIGEM DA VENDA: o que vem no link do anúncio (UTMs, fbclid, src, sck) é guardado e carimbado no link do checkout,
// pra venda chegar na Hotmart dizendo de qual anúncio veio. Sem isso toda venda aparece "sem origem".
const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'src', 'sck'];
const ORGANICO = 'lp-etica-oab-organico';

function dominioRaiz() {
  const h = location.hostname;
  if (/^(localhost|[\d.]+)$/.test(h) || h.endsWith('.vercel.app')) return '';
  const partes = h.split('.');
  const duploNivel = /\.(com|net|org|gov|edu|adv|eng)\.br$/.test(h);
  return '.' + partes.slice(duploNivel ? -3 : -2).join('.');
}

function prepararOrigem() {
  const params = new URLSearchParams(location.search);
  KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) { try { sessionStorage.setItem('trk_' + k, v); } catch { /* sem armazenamento */ } }
  });
  // Plano B: o cookie frc_trk (30 dias) guarda o anúncio da última visita que veio com parâmetros.
  // Quem clica no anúncio, fecha a aba e volta depois perdia a origem, porque o sessionStorage morre com a aba.
  const doCookie: Record<string, string> = {};
  try {
    const m = document.cookie.match(/(?:^|;\s*)frc_trk=([^;]*)/);
    if (m) new URLSearchParams(decodeURIComponent(m[1])).forEach((v, k) => { if (v) doCookie[k] = v; });
  } catch { /* cookie ilegível */ }
  // a visita "tem origem" quando o link diz QUAL anúncio (utm_source sozinho não diz)
  const temNaUrl = ['utm_campaign', 'utm_content', 'sck'].some((k) => !!params.get(k));
  const getTrk = (k: string) => {
    let v = '';
    try { v = sessionStorage.getItem('trk_' + k) || ''; } catch { /* sem armazenamento */ }
    if (!v && !temNaUrl) v = doCookie[k] || ''; // só herda do cookie se esta visita chegou sem origem nenhuma
    return v;
  };
  try {
    const all: string[] = [];
    KEYS.forEach((k) => { const v = getTrk(k); if (v) all.push(k + '=' + encodeURIComponent(v)); });
    if (all.length) {
      const raiz = dominioRaiz();
      document.cookie = 'frc_trk=' + encodeURIComponent(all.join('&')) + (raiz ? '; domain=' + raiz : '') + '; path=/; max-age=2592000; SameSite=Lax';
    }
  } catch { /* sem cookie */ }
  return getTrk;
}

/** Carimba a origem no link do checkout (Hotmart lê sck e src no relatório de vendas). */
function carimbar(el: HTMLAnchorElement, getTrk: (k: string) => string) {
  try {
    const url = new URL(el.href);
    if (!/(^|\.)hotmart\.com$/.test(url.hostname)) return;
    KEYS.forEach((k) => { const v = getTrk(k); if (v && k !== 'src' && k !== 'sck') url.searchParams.set(k, v); });
    // src/sck vindos do anúncio têm prioridade; senão monta das UTMs; senão marca orgânico
    const sck = getTrk('sck') || [getTrk('utm_campaign'), getTrk('utm_content')].filter(Boolean).join('|') || ORGANICO;
    url.searchParams.set('sck', sck);
    url.searchParams.set('src', getTrk('src') || getTrk('utm_content') || ORGANICO);
    el.href = url.toString();
  } catch { /* link inválido: segue como está */ }
}

export function TrackingEvents() {
  useEffect(() => {
    const fired = new Set<string>();
    const umaVez = (nome: string) => { if (fired.has(nome)) return; fired.add(nome); trackEvent(nome); };
    const getTrk = prepararOrigem();

    function handleScroll() {
      const total = document.documentElement.scrollHeight;
      if (total <= 0) return;
      const pct = ((window.scrollY + window.innerHeight) / total) * 100;
      for (const marco of [25, 50, 75, 100]) if (pct >= marco) umaVez(`Rolagem${marco}`);
    }

    // Tempo na página: separa quem chegou e saiu de quem leu
    const t30 = window.setTimeout(() => umaVez('30s'), 30_000);
    const t60 = window.setTimeout(() => umaVez('60s'), 60_000);

    // ViuOferta: a seção de oferta (id="oferta") entrou na tela, ou seja, a pessoa chegou no preço. Uma vez por visita.
    const oferta = document.getElementById('oferta');
    let obsOferta: IntersectionObserver | undefined;
    if (oferta && typeof IntersectionObserver !== 'undefined') {
      obsOferta = new IntersectionObserver((entradas) => {
        if (entradas.some((e) => e.isIntersecting)) { umaVez('ViuOferta'); obsOferta?.disconnect(); }
      }, { rootMargin: '0px 0px -25% 0px' });
      obsOferta.observe(oferta);
    }

    function handleClick(e: MouseEvent) {
      const el = (e.target as Element).closest('a, button');
      if (!el) return;
      if (el instanceof HTMLAnchorElement) carimbar(el, getTrk); // antes do navegador seguir o link
      const text = el.textContent?.trim().replace(/\s+/g, ' ').toUpperCase() || '';
      for (const [key, eventName] of Object.entries(BUTTON_MAP)) {
        if (text.includes(key)) { trackEvent(eventName); break; }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, true); // captura: roda antes da navegação
    handleScroll(); // tela alta já pode nascer com 25% visível

    return () => {
      window.clearTimeout(t30);
      window.clearTimeout(t60);
      obsOferta?.disconnect();
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return null;
}
