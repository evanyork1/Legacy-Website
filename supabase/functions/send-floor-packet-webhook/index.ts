const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FloorPacketWebhookData {
  id: string;
  name: string;
  email: string;
  phone: string;
  garage_type: string;
  custom_sqft?: number | null;
  selected_color: string;
  estimated_price: number;
  visualization_url?: string | null;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get('FLOOR_PACKET_WEBHOOK_URL');
    if (!webhookUrl) {
      console.error('FLOOR_PACKET_WEBHOOK_URL secret is not set');
      return new Response(
        JSON.stringify({ error: 'FLOOR_PACKET_WEBHOOK_URL not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json().catch(() => ({}));
    const id = String(body?.id || '');
    if (!/^[0-9a-f-]{36}$/i.test(id)) {
      return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    // Never trust the request body: load the real saved lead so blank or
    // forged calls can't push empty leads to Zapier/Jobber.
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
    const { data: row } = await admin.from('floor_packets').select('*').eq('id', id).maybeSingle();
    if (!row || !String(row.name || '').trim() || !String(row.email || '').trim() || !String(row.phone || '').trim()) {
      console.warn('Skipping webhook: packet missing or blank', id);
      return new Response(JSON.stringify({ skipped: true }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    const { error: claimErr } = await admin.from('webhook_send_log').insert({ source: 'floor-packet', lead_id: id, page: req.headers.get('origin') || null });
    if (claimErr) {
      console.warn('Already sent floor packet alert', id);
      return new Response(JSON.stringify({ skipped: true, reason: 'already_sent' }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    const packetData: FloorPacketWebhookData = row as FloorPacketWebhookData;
    console.log('Floor packet webhook received for id:', packetData.id);

    const origin = req.headers.get('origin') || '';
    const resultsPageUrl = origin
      ? `${origin}/garage-packet-result/${packetData.id}`
      : `/garage-packet-result/${packetData.id}`;

    const payload = {
      timestamp: new Date().toISOString(),
      event_type: 'floor_packet_submitted',
      lead: {
        id: packetData.id,
        name: packetData.name,
        email: packetData.email,
        phone: packetData.phone,
        garage_type: packetData.garage_type,
        custom_sqft: packetData.custom_sqft ?? null,
        selected_color: packetData.selected_color,
        estimated_price: packetData.estimated_price,
        estimated_price_formatted: `$${(packetData.estimated_price ?? 0).toLocaleString()}`,
        visualization_url: packetData.visualization_url ?? null,
        results_page_url: resultsPageUrl,
      },
    };

    console.log('Posting floor packet webhook to Zapier');
    const zapRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const zapText = await zapRes.text();
    console.log('Zapier response', zapRes.status, zapText);

    if (!zapRes.ok) {
      return new Response(
        JSON.stringify({ error: 'Zapier webhook failed', status: zapRes.status, response: zapText }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Webhook sent successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('send-floor-packet-webhook error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
