'use client';

import { useEffect } from 'react';
import { getExternalId, trackEvent } from '@/lib/track';

// Espera o fbq aparecer (teto de 2s). Se não vier, o PageView sai só pelo servidor.
export function PixelInit() {
  useEffect(() => {
    let tentativas = 0;
    let timer: number | undefined;

    const iniciar = () => {
      const fbq = (window as any).fbq;
      if (typeof fbq === 'function') {
        const externalId = getExternalId();
        fbq('init', '2136424236368281', externalId ? { external_id: externalId } : {});
        trackEvent('PageView');
        return;
      }
      if (tentativas++ < 40) {
        timer = window.setTimeout(iniciar, 50);
        return;
      }
      trackEvent('PageView');
    };

    iniciar();
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  return null;
}
