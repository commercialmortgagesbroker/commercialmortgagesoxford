import { NextRequest, NextResponse } from 'next/server';

// Every enquiry is forwarded server side to the shared portfolio lead service,
// which writes it to GoHighLevel and emails it. The site identity is fixed here
// (not taken from the browser) so a visitor cannot select another brand.
const ENDPOINT = 'https://lenzie-portfolio-leads.netlify.app/api/enquiry';
const DOMAIN = 'commercialmortgagesoxford.co.uk';
const DELIVERY_ERROR = 'Could not deliver your enquiry. Please try again or call us.';

function failure(error: string, status: number) {
  return NextResponse.json({ success: false, ok: false, error }, { status });
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return failure('Invalid JSON', 400);
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return failure('Invalid enquiry', 400);
  }

  // The lead form sends a contact-only capture before step 2 is completed.
  const source = typeof body.source === 'string' ? body.source : '';
  const partial = body.partial === true || /partial/i.test(source);

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      signal: AbortSignal.timeout(30000),
      headers: { 'Content-Type': 'application/json', Origin: `https://${DOMAIN}` },
      body: JSON.stringify({
        ...body,
        ...(partial ? { partial: true } : {}),
        website: DOMAIN,
        sourcePage: body.sourcePage || request.headers.get('referer') || `https://${DOMAIN}`,
      }),
    });
    const result = await response.json();
    if (!result || typeof result !== 'object') throw new Error('Invalid delivery response');
    if (response.ok && result.success !== true && result.ok !== true) throw new Error('Delivery not confirmed');
    if (!response.ok) console.error('[leads] shared service rejected enquiry', response.status, result);
    return NextResponse.json(result, { status: response.status });
  } catch (e) {
    console.error('[leads] could not reach shared lead service:', e);
    return failure(DELIVERY_ERROR, 502);
  }
}
