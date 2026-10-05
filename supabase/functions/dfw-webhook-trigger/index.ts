import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('DFW webhook trigger started');
    
    const payload = await req.json();
    {
      const _b: any = payload;
      const _n = String(_b?.name ?? _b?.first_name ?? _b?.lead?.name ?? '').trim();
      const _e = String(_b?.email ?? _b?.lead?.email ?? '').trim();
      const _p = String(_b?.phone ?? _b?.lead?.phone ?? '').trim();
      if (!_n || (!_e && !_p)) {
        console.warn('Skipping blank lead webhook');
        return new Response(JSON.stringify({ skipped: true }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }
    }
    console.log('Received DFW quote data:', payload);

    // Post to Zapier webhook
    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/18144828/u21rmpg/';
    
    const zapierPayload = {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      zip_code: payload.zip_code,
      garage_type: payload.garage_type,
      custom_sqft: payload.custom_sqft,
      space_type: payload.space_type,
      other_space_type: payload.other_space_type,
      color_choice: payload.color_choice,
      estimated_price: payload.estimated_price,
      created_at: payload.created_at,
      lead_source: payload.lead_source || 'DFW',
      status: payload.status || 'new'
    };

    console.log('Sending to Zapier webhook:', zapierWebhookUrl);
    console.log('Zapier payload:', zapierPayload);

    const response = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zapierPayload),
    });

    if (!response.ok) {
      console.error('Zapier webhook failed:', response.status, response.statusText);
      throw new Error(`Zapier webhook failed: ${response.status}`);
    }

    console.log('DFW webhook sent successfully to Zapier');

    return new Response(
      JSON.stringify({ success: true, message: 'DFW webhook triggered successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in DFW webhook trigger:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to trigger DFW webhook', 
        details: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
})