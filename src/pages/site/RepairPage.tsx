import SimplePage from "@/components/site/SimplePage";
import NotFound from "@/pages/NotFound";
import { JOB } from "@/data/site/jobPhotos";
import { REPAIR_PAGES, type RepairPage as RepairData } from "@/data/site/simple/repairs";

/**
 * "Problems & Repairs" landing page (e.g. /epoxy-floor-repair). Same simple
 * layout as the system pages; content lives in src/data/site/simple/repairs.ts.
 */
const photo = (key: string) => (JOB as Record<string, { src: string; alt: string } | undefined>)[key];

const RepairPage = ({ page }: { page?: RepairData }) => {
  if (!page) return <NotFound />;
  const hero = photo(page.heroKey);
  const others = REPAIR_PAGES.filter((p) => p.path !== page.path).map((p) => ({ label: p.h1, path: p.path }));
  return (
    <SimplePage
      path={page.path}
      metaTitle={`${page.metaTitle} | Legacy Industrial Coatings`}
      metaDescription={page.metaDescription}
      h1={page.h1}
      eyebrow={page.eyebrow}
      heroImage={hero?.src ?? ""}
      heroAlt={hero?.alt ?? page.h1}
      crumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: page.h1, url: page.path },
      ]}
      serviceName={page.h1}
      content={page.content}
      photos={page.photoKeys.map(photo).filter((p): p is { src: string; alt: string } => !!p)}
      related={{ title: "Related Services", links: page.related }}
      more={{ title: "Other Floor Problems We Fix", links: others }}
      closing={{
        title: "Tell us what's wrong with your floor",
        text: "Send a few photos and the square footage. We'll walk the site within 1–3 business days and tell you whether it needs a repair, a recoat or a new floor.",
      }}
    />
  );
};

export default RepairPage;
