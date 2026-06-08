import { NextRequest, NextResponse } from 'next/server';

const PIXEL_ID = '2136424236368281';
const CAPI_TOKEN = 'EAAXoWwR5ZC9UBRilfRfgYTzPvKvoeo5oaOIZBW6xbsyWZApFkJCd44H6k8oPygVDPdt8d3UAlWlybUtL1yHwgFEI2wIagwKmQ51ZAdVPNvvUmJKydt1IBlzb3iApJWxd9UsCiI0wl3ZCl22p69dt2Qd006JsNmD5pFHxO4BcvLUl6X91zmadH1HVJlfo7B6z1bwZDZD';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event_name, event_id, event_source_url, fbp, fbc } = body;

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
        },
      }],
      access_token: CAPI_TOKEN,
    };

    await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
