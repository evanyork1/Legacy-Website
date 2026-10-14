import { assertEquals } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { bodySchema, savedRowSchema, SIGNED_URL_SECONDS } from './validation.ts';
const id='11111111-1111-4111-8111-111111111111';
const row={id,name:'Lovable Test',email:'evan@licoat.com',phone:'2143056516',company:null,square_footage:null,project_description:'Test',landing_page:null,referrer:null,utm_source:null,utm_medium:null,utm_campaign:null,created_at:new Date().toISOString(),files:[]};
Deno.test('Signed links expire after exactly seven days',()=>assertEquals(SIGNED_URL_SECONDS,604800));
Deno.test('Reject non-UUID submission ids',()=>assertEquals(bodySchema.safeParse({submission_id:'invalid'}).success,false));
Deno.test('Allow at most ten files',()=>{const f={path:`${id}/plan.pdf`,name:'plan.pdf',size:1};assertEquals(savedRowSchema.safeParse({...row,files:Array(10).fill(f)}).success,true);assertEquals(savedRowSchema.safeParse({...row,files:Array(11).fill(f)}).success,false);});
Deno.test('Allow at most 25 MB per file',()=>{const f={path:`${id}/plan.pdf`,name:'plan.pdf',size:26214400};assertEquals(savedRowSchema.safeParse({...row,files:[f]}).success,true);assertEquals(savedRowSchema.safeParse({...row,files:[{...f,size:26214401}]}).success,false);});
Deno.test('Never sign another submission folder',()=>assertEquals(savedRowSchema.safeParse({...row,files:[{path:'22222222-2222-4222-8222-222222222222/plan.pdf',name:'plan.pdf',size:1}]}).success,false));
