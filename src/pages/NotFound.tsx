import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Seo } from "@/components/seo/Seo";
import { BTN, Eyebrow } from "@/components/site/sections";

const LINKS = [
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Contact", path: "/contact" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo
        title="Page Not Found | Legacy Industrial Coatings"
        description="The page you're looking for doesn't exist. Return to Legacy Industrial Coatings."
        path={location.pathname}
        noindex
      />
      <SiteHeader />

      <main className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-[1.05] mb-6 text-balance">
            Oops! Page not found
          </h1>
          <p className="text-muted-foreground text-[16px] leading-[1.85] mb-10 break-words">
            The page you're looking for doesn't exist.
          </p>
          <a href="/" className={`${BTN} bg-foreground text-background border border-foreground hover:bg-foreground/90`}>
            Return to Home
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>

          <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
            {LINKS.map((l) => (
              <li key={l.path} className="bg-background">
                <a href={l.path} className="group flex items-center justify-between gap-3 px-6 py-5 font-heading font-semibold text-[14px] text-foreground hover:bg-secondary transition-colors">
                  <span className="group-hover:underline">{l.label}</span>
                  <ArrowRight size={14} className="text-muted-foreground transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default NotFound;
