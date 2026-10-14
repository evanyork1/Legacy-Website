import { useLocation } from 'react-router-dom';
import { RequestInfoForm } from '@/components/forms/RequestInfoForm';
import { showFooterRequestInfo } from '@/lib/requestInfo';
export const RequestInfoSection=({id='request-info'}:{id?:string})=>{const {pathname}=useLocation();if(!showFooterRequestInfo(pathname))return null;return <section id={id} className="request-info-theme scroll-mt-32 bg-muted py-10 text-foreground lg:py-14"><div className="container mx-auto"><div className="mx-auto max-w-3xl"><RequestInfoForm/></div></div></section>;};
