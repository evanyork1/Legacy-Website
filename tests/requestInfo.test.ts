import { describe, it, expect } from 'bun:test';
import { acceptsFile, passesBotChecks, requestInfoSchema, showFooterRequestInfo, MAX_FILES } from '../src/lib/requestInfo';
describe('Request information rules',()=>{
 it('limits attachments to ten',()=>expect(MAX_FILES).toBe(10));
 it('limits files to 25 MB',()=>{expect(acceptsFile({name:'plan.pdf',type:'application/pdf',size:26214400})).toBe(true);expect(acceptsFile({name:'plan.pdf',type:'application/pdf',size:26214401})).toBe(false);});
 it('accepts the required document extensions and rejects executables',()=>{for(const ext of ['pdf','jpg','png','webp','heic','dwg','dxf','zip','doc','docx','xls','xlsx'])expect(acceptsFile({name:`plan.${ext}`,type:'',size:1})).toBe(true);expect(acceptsFile({name:'malware.exe',type:'',size:1})).toBe(false);});
 it('silently rejects less than three seconds',()=>{expect(passesBotChecks('',2999)).toBe(false);expect(passesBotChecks('',3000)).toBe(true);});
 it('silently rejects a filled honeypot',()=>expect(passesBotChecks('spam',5000)).toBe(false));
 it('requires consent',()=>{const f={name:'Test',email:'evan@licoat.com',phone:'2143056516',company:'',job_site_address:'6010 W Spring Creek Pkwy, Plano, TX',square_footage:'10,000–50,000 SF',project_description:'Test'};expect(requestInfoSchema.safeParse({...f,consent:true}).success).toBe(true);expect(requestInfoSchema.safeParse({...f,consent:false}).success).toBe(false);});
 it('job site address is optional',()=>{const f={name:'Test',email:'evan@licoat.com',phone:'2143056516',company:'',job_site_address:'',square_footage:'',project_description:'Test',consent:true};expect(requestInfoSchema.safeParse(f).success).toBe(true);expect(requestInfoSchema.safeParse({...f,job_site_address:'x'.repeat(301)}).success).toBe(false);expect(requestInfoSchema.safeParse({...f,job_site_address:'123 Main St, Dallas, TX'}).success).toBe(true);});
 it('excludes every specified internal or confirmation route',()=>{for(const path of ['/crm','/auth','/sales-dashboard','/jobberdetails/search','/presentation/test','/sales-presentation','/packagepresentation','/packetsformat','/flakefloortemplate','/booking-confirmed','/estimate-request-received'])expect(showFooterRequestInfo(path)).toBe(false);expect(showFooterRequestInfo('/')).toBe(true);});
 it('does not duplicate contact or commercial body forms',()=>{expect(showFooterRequestInfo('/contact')).toBe(false);expect(showFooterRequestInfo('/commercial')).toBe(true);expect(showFooterRequestInfo('/commercialfloors')).toBe(true);});
});
