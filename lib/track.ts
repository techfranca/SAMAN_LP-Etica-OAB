function getCookie(name: string): string {
  if (typeof document === 'undefined') return '';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
  return '';
}

/** `_fbc` montado do fbclid quando o cookie ainda não existe: sem isso o primeiro evento de quem chega do anúncio sai sem fbc. */
function getFbc(): string {
  const cookie = getCookie('_fbc');
  if (cookie) return cookie;
  let fbclid = new URLSearchParams(location.search).get('fbclid') || '';
  if (!fbclid) { try { fbclid = sessionStorage.getItem('trk_fbclid') || ''; } catch { /* sem armazenamento */ } }
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : '';
}

/** Id anônimo e persistente do visitante: melhora a correspondência do Meta em página sem formulário. */
export function getExternalId(): string {
  try {
    const salvo = localStorage.getItem('frc_eid');
    if (salvo) return salvo;
    const novo = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem('frc_eid', novo);
    return novo;
  } catch {
    return '';
  }
}

export function trackEvent(eventName: string, eventData: Record<string, unknown> = {}) {
  const eventId = `${eventName}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  // Eventos padrão do Meta vão com "track"; os da casa (Rolagem, 30s, BotaoN) vão com "trackCustom" (manual de rastreamento, seção 13).
  const PADRAO = ['PageView', 'ViewContent', 'Lead', 'InitiateCheckout', 'Purchase', 'CompleteRegistration'];
  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
    (window as any).fbq(PADRAO.includes(eventName) ? 'track' : 'trackCustom', eventName, eventData, { eventID: eventId });
  }

  fetch('/api/pixel', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    keepalive: true, // o clique no botão sai da página; sem isso o navegador cancela o envio pro servidor
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: getCookie('_fbp'),
      fbc: getFbc(),
      external_id: getExternalId(),
    }),
  }).catch(() => {});
}
