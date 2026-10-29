
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/useAuth";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import Commercial from "./pages/Commercial";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Financing from "./pages/Financing";

import Gallery from "./pages/Gallery";

import NotFound from "./pages/NotFound";
const PackagePresentation = lazy(() => import("./pages/PackagePresentation"));
import PrivacyPolicy from "./pages/PrivacyPolicy";

import Quote from "./pages/Quote";
const QuoteDFW = lazy(() => import("./pages/QuoteDFW"));
import ResidentialGarageFloors from "./pages/ResidentialGarageFloors";
import ResidentialPatio from "./pages/ResidentialPatio";
import ServiceAreas from "./pages/ServiceAreas";
import EpoxyFlooringCity from "./pages/EpoxyFlooringCity";
import TermsAndConditions from "./pages/TermsAndConditions";
import Warranty from "./pages/Warranty";
const GPT = lazy(() => import("./pages/GPT"));
import DFWResLanding from "./pages/DFWResLanding";
const LandingVisual = lazy(() => import("./pages/LandingVisual"));
const Auth = lazy(() => import("./pages/Auth"));
const SalesDashboard = lazy(() => import("./pages/SalesDashboard"));
const FlakeFloorTemplate = lazy(() => import("./pages/FlakeFloorTemplate"));

const GarageLandingForm = lazy(() => import("./pages/GarageLandingForm"));
const GoogleGaragePage = lazy(() => import("./pages/GoogleGaragePage"));
const GaragePacketPage = lazy(() => import("./pages/GaragePacketPage"));
const GaragePacketResults = lazy(() => import("./pages/GaragePacketResults"));
const GarageLandingInstant = lazy(() => import("./pages/GarageLandingInstant"));
const GarageFloorsDallasFB = lazy(() => import("./pages/GarageFloorsDallasFB"));
const FloorVisualizer = lazy(() => import("./pages/FloorVisualizer"));
const CRM = lazy(() => import("./pages/CRM"));
const SalesPresentation = lazy(() => import("./pages/SalesPresentation"));
const CustomerPresentationPage = lazy(() => import("./pages/CustomerPresentationPage"));
import SplashSelect from "./pages/SplashSelect";
import AquaTotsFlooring from "./pages/AquaTotsFlooring";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import CaseStudiesHub from "./pages/CaseStudiesHub";
import SiteHome from "./pages/site/Home";
import SiteAbout from "./pages/site/About";
import OurProcess from "./pages/site/OurProcess";
import CapabilityPacket from "./pages/site/CapabilityPacket";
import WhoWeServe from "./pages/site/WhoWeServe";
import { IndustriesHub, ResourcesHub, ServicesHub } from "./pages/site/Hubs";
import Reviews from "./pages/site/Reviews";
import LineStriping from "./pages/site/LineStriping";
import DataCenterFlooring from "./pages/site/DataCenterFlooring";
import SiteIndustryPage from "./pages/site/IndustryPage";
import SiteSystemPage from "./pages/site/SystemPage";
import { Helmet } from "react-helmet-async";

const NoIndex = () => (
  <Helmet>
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>
);
import { INDUSTRY_PAGES } from "./data/site/industries";
import { SYSTEM_PAGES } from "./data/site/systems";
import ScrollToTop from "./components/ScrollToTop";
import EstimateRequestReceived from "./pages/EstimateRequestReceived";
import Careers from "./pages/Careers";
import CareerMarketPage from "./pages/CareerMarketPage";
const PacketsFormat = lazy(() => import("./pages/PacketsFormat"));
const ArchiveSessionProvider = lazy(() => import("./pages/jobberdetails/archiveSession").then((m) => ({ default: m.ArchiveSessionProvider })));
const ArchiveLogin = lazy(() => import("./pages/jobberdetails/ArchiveLogin"));
const ArchiveSetPassword = lazy(() => import("./pages/jobberdetails/ArchiveLogin").then((m) => ({ default: m.SetPassword })));
const ArchiveLayout = lazy(() => import("./pages/jobberdetails/ArchiveLayout"));
const ArchiveAdminOnly = lazy(() => import("./pages/jobberdetails/ArchiveLayout").then((m) => ({ default: m.AdminOnly })));
const ArchiveDashboard = lazy(() => import("./pages/jobberdetails/ArchivePages").then((m) => ({ default: m.ArchiveDashboard })));
const ArchiveJobberSettings = lazy(() => import("./pages/jobberdetails/ArchivePages").then((m) => ({ default: m.ArchiveJobberSettings })));
const ArchiveUsers = lazy(() => import("./pages/jobberdetails/ArchivePages").then((m) => ({ default: m.ArchiveUsers })));
const ArchiveAudit = lazy(() => import("./pages/jobberdetails/ArchivePages").then((m) => ({ default: m.ArchiveAudit })));
const ArchiveSync = lazy(() => import("./pages/jobberdetails/ArchiveSync"));
const ArchiveSearch = lazy(() => import("./pages/jobberdetails/ArchiveSearch").then((m) => ({ default: m.ArchiveSearch })));
const ArchiveClient = lazy(() => import("./pages/jobberdetails/ArchiveSearch").then((m) => ({ default: m.ArchiveClient })));


const queryClient = new QueryClient();

const RouteLoading = () => (
  <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading…</div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <Suspense fallback={<RouteLoading />}>
            <Routes>
              <Route path="/" element={<SiteHome />} />
              <Route path="/gpt" element={<><GPT /><NoIndex /></>} />
              <Route path="/dfw" element={<Navigate to="/" replace />} />
              
              <Route path="/quotedfw" element={<QuoteDFW />} />
              
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/landingvisual" element={<LandingVisual />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/epoxy-flooring/:city" element={<EpoxyFlooringCity />} />
              <Route path="/warranty" element={<Warranty />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/residential-patio" element={<ResidentialPatio />} />
              <Route path="/garagefloors" element={<ResidentialGarageFloors />} />
              <Route path="/commercial" element={<Commercial />} />
              {/* Consolidated into /commercial and /our-process (301s in public/_redirects). */}
              <Route path="/commercialfloors" element={<Navigate to="/commercial" replace />} />
              <Route path="/about-commercial" element={<Navigate to="/our-process" replace />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/financing" element={<Financing />} />
              <Route path="/about" element={<SiteAbout />} />
              <Route path="/our-process" element={<OurProcess />} />
              <Route path="/capability-packet" element={<CapabilityPacket />} />
              <Route path="/who-we-serve" element={<WhoWeServe />} />
              <Route path="/services" element={<ServicesHub />} />
              <Route path="/industries" element={<IndustriesHub />} />
              <Route path="/resources" element={<ResourcesHub />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/materials" element={<Navigate to="/commercial" replace />} />
              <Route path="/roof-deck-waterproofing" element={<Navigate to="/deck-coatings" replace />} />
              <Route path="/line-striping" element={<LineStriping />} />
              <Route path="/data-center-flooring" element={<DataCenterFlooring />} />
              <Route path="/case-studies" element={<CaseStudiesHub />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/commercial-case-studies" element={<CaseStudies category="commercial" />} />
              <Route path="/commercial-case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/residential-case-studies" element={<CaseStudies category="residential" />} />
              <Route path="/residential-case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/packagepresentation" element={<><PackagePresentation /><NoIndex /></>} />
              <Route path="/flakefloortemplate" element={<><FlakeFloorTemplate /><NoIndex /></>} />

              {/* Commercial industries — new template (data center has its own page) */}
              {INDUSTRY_PAGES.map((i) => (
                <Route
                  key={i.path}
                  path={i.path}
                  element={<SiteIndustryPage path={i.path} />}
                />
              ))}

              {/* Commercial systems — every system page renders through the shared template. */}
              {SYSTEM_PAGES.filter((s) => s.path !== "/industrial-epoxy").map((s) => (
                <Route
                  key={s.path}
                  path={s.path}
                  element={<SiteSystemPage path={s.path} />}
                />
              ))}
              <Route path="/specialty-floor-systems" element={<Navigate to="/commercial" replace />} />

              {/* Keyword URL redirects to existing pages */}
              <Route path="/garage-floor-coating" element={<Navigate to="/garagefloors" replace />} />
              <Route path="/polyaspartic-garage-floor" element={<Navigate to="/garagefloors" replace />} />
              <Route path="/polished-concrete" element={<Navigate to="/concrete-polishing" replace />} />
              <Route path="/warehouse-epoxy-flooring" element={<Navigate to="/warehouse-flooring" replace />} />
              <Route path="/commercial-flooring" element={<Navigate to="/commercial" replace />} />
              <Route path="/epoxy-flooring-dallas" element={<Navigate to="/commercial" replace />} />
              <Route path="/industrial-epoxy" element={<Navigate to="/commercial" replace />} />

              
          <Route path="/garagelandingform" element={<GarageLandingForm />} />
          <Route path="/garagelandinginstant" element={<GarageLandingInstant />} />
          <Route path="/garagefloorsdallasfb" element={<GarageFloorsDallasFB />} />
          <Route path="/googlegaragepage" element={<GoogleGaragePage />} />
          <Route path="/garagepacketpage" element={<GaragePacketPage />} />
          <Route path="/garage-packet-result/:id" element={<GaragePacketResults />} />
          <Route path="/floor-visualizer" element={<FloorVisualizer />} />
              
              <Route path="/auth" element={<Auth />} />
              <Route path="/sales-dashboard" element={<SalesDashboard />} />
              <Route path="/crm" element={<CRM />} />
              <Route path="/sales-presentation" element={<SalesPresentation />} />
              <Route path="/presentation/:id" element={<><CustomerPresentationPage /><NoIndex /></>} />
              <Route path="/aquatotsflooring" element={<AquaTotsFlooring />} />
              <Route path="/estimate-request-received" element={<EstimateRequestReceived />} />
              <Route path="/booking-confirmed" element={<EstimateRequestReceived />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:city" element={<CareerMarketPage />} />
              <Route path="/packetsformat" element={<PacketsFormat />} />
              <Route path="/jobberdetails/set-password" element={<ArchiveSetPassword />} />
              <Route path="/jobberdetails" element={<ArchiveSessionProvider><ArchiveLogin /></ArchiveSessionProvider>} />
              <Route path="/jobberdetails/*" element={<ArchiveSessionProvider><ArchiveLayout /></ArchiveSessionProvider>}>
                <Route path="dashboard" element={<ArchiveDashboard />} />
                <Route path="settings" element={<ArchiveAdminOnly><ArchiveJobberSettings /></ArchiveAdminOnly>} />
                <Route path="users" element={<ArchiveAdminOnly><ArchiveUsers /></ArchiveAdminOnly>} />
                <Route path="audit" element={<ArchiveAdminOnly><ArchiveAudit /></ArchiveAdminOnly>} />
                <Route path="search" element={<ArchiveSearch />} />
                <Route path="client/:id" element={<ArchiveClient />} />
                <Route path="sync" element={<ArchiveAdminOnly><ArchiveSync /></ArchiveAdminOnly>} />
                <Route path="*" element={<ArchiveDashboard />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </Router>
          <Toaster />
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
