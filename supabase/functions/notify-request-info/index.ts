import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { bodySchema, savedRowSchema, SIGNED_URL_SECONDS } from './validation.ts';
const json=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:{...corsHeaders,'Content-Type':'application/json'}});
Deno.serve(async req=>{
 if(req.method==='OPTIONS')return new Response('ok',{headers:corsHeaders});
 if(req.method!=='POST')return json({error:'Method not allowed'},405);
 try{
  const parsed=bodySchema.safeParse(await req.json().catch(()=>null));
  if(!parsed.success)return json({error:'A valid submission_id is required'},400);
  const url=Deno.env.get('SUPABASE_URL'),serviceKey=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),hook=Deno.env.get('ZAPIER_REQUEST_INFO_HOOK');
  if(!url||!serviceKey||!hook)return json({error:'Notification configuration unavailable'},503);
  // The database uses the publishable caller key, never the service-role key.
  // Only saved records can be sent; a unique notification claim prevents replay.
  const expectedKey=Deno.env.get('SUPABASE_ANON_KEY');
  const authorization=req.headers.get('Authorization');
  if(!expectedKey||authorization!==`Bearer ${expectedKey}`)return json({error:'Unauthorized'},401);
  const admin=createClient(url,serviceKey);
  const {data,error}=await admin.from('commercial_submissions').select('*').eq('id',parsed.data.submission_id).maybeSingle();
  if(error)throw new Error('Unable to load submission');
  if(!data)return json({error:'Submission not found'},404);
  const rowResult=savedRowSchema.safeParse(data);
  if(!rowResult.success)return json({error:'Invalid saved submission'},400);
  const row=rowResult.data;
  const {error:claimError}=await admin.from('webhook_send_log').insert({source:'request-info-form',lead_id:row.id,page:row.landing_page});
  if(claimError){if(claimError.code==='23505')return json({skipped:true,reason:'already_notified'});throw new Error('Unable to claim notification');}
  const files=[];
  for(const file of row.files){
   const {data:signed,error:signError}=await admin.storage.from('request-info-uploads').createSignedUrl(file.path,SIGNED_URL_SECONDS);
   if(signError||!signed)throw new Error('Unable to sign attachment');
   files.push({name:file.name,url:signed.signedUrl,size:file.size});
  }
  const response=await fetch(hook,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...row,files}),signal:AbortSignal.timeout(20000)});
  await admin.from('webhook_send_log').update({status:response.status}).eq('source','request-info-form').eq('lead_id',row.id);
  console.log(JSON.stringify({submission_id:row.id,zapier_status:response.status}));
  return json({status:response.status});
 }catch{console.error('Request information notification failed');return json({error:'Notification failed'},500);}
});
