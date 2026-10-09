import crypto from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';

const PIXEL_ID = '2136424236368281';
// Token SEMPRE no ambiente (META_CAPI_TOKEN na Vercel), nunca no código.
const CAPI_TOKEN = process.env.META_CAPI_TOKEN;

const sha256 = (v: string) => crypto.createHash('sha256').update(v.trim().toLowerCase()).digest('hex');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event_name, event_id, event_source_url, fbp, fbc, external_id } = body;
    if (!event_name || !event_id) return NextResponse.json({ ok: false }, { status: 400 });
    if (!CAPI_TOKEN) return NextResponse.json({ ok: true, capi: false });

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      '';
    const userAgent = req.headers.get('user-agent') || '';

    const payload = {
      data: [{
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        action_source: 'website' as const,
        event_source_url,
        user_data: {
          client_ip_address: ip,
          client_user_agent: userAgent,
          ...(fbp ? { fbp } : {}),
          ...(fbc ? { fbc } : {}),
          ...(external_id ? { external_id: sha256(String(external_id)) } : {}),
        },
      }],
      access_token: CAPI_TOKEN,
    };

    const r = await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ ok: r.ok, capi: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
