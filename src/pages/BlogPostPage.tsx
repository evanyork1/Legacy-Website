import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { fetchPostBySlug, type BlogPost } from "@/data/blogPosts";
import NotFound from "./NotFound";

const SITE_URL = "https://legacyindustrialcoatings.com";

const LABEL = "font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground";

const ARTICLE_BODY = [
  "max-w-none font-body text-[16px] md:text-[17px] leading-[1.85] text-muted-foreground break-words",
  "[&_p]:mb-6",
  "[&_h2]:font-heading [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:leading-[1.15]",
  "[&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:leading-snug",
  "[&_h4]:font-heading [&_h4]:font-semibold [&_h4]:text-foreground [&_h4]:mt-8 [&_h4]:mb-2",
  "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_li]:mb-2 [&_li]:pl-1",
  "[&_strong]:text-foreground [&_strong]:font-semibold",
  "[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-border [&_a:hover]:decoration-foreground",
  "[&_blockquote]:border-l [&_blockquote]:border-foreground [&_blockquote]:pl-6 [&_blockquote]:my-8 [&_blockquote]:text-foreground",
  "[&_img]:w-full [&_img]:h-auto [&_img]:my-8",
  "[&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:my-8 [&_table]:border [&_table]:border-border [&_table]:text-[14px]",
  "[&_th]:bg-secondary [&_th]:text-foreground [&_th]:font-heading [&_th]:text-left [&_th]:p-3 [&_th]:border-b [&_th]:border-border",
  "[&_td]:p-3 [&_td]:border-t [&_td]:border-border [&_td]:align-top",
  "[&_hr]:border-border [&_hr]:my-12",
].join(" ");

const RELATED_LINK =
  "group flex items-center justify-between gap-3 px-5 py-4 font-heading text-[14px] text-foreground hover:bg-secondary hover:underline transition-colors";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    if (!slug) {
      setLoading(false);
      return;
    }
    fetchPostBySlug(slug).then((data) => {
      if (!active) return;
      setPost(data);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="lcf min-h-screen bg-background">
        <SiteHeader />
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <p className={LABEL}>Loading article…</p>
        </div>
        <SiteFooter />
      </div>
    );
  }

  if (!post) return <NotFound />;

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const rawImage = post.featuredImage || post.image;
  const image = rawImage.startsWith("http") ? rawImage : `${SITE_URL}${rawImage}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedDate,
    author: { "@type": "Organization", name: "Legacy Industrial Coatings" },
    publisher: {
      "@type": "Organization",
      name: "Legacy Industrial Coatings",
      url: SITE_URL,
    },
    description: post.excerpt,
    image,
    mainEntityOfPage: canonical,
  };

  const related = [
    { label: "Commercial & industrial epoxy flooring", path: "/commercial" },
    { label: "Polished concrete", path: "/concrete-polishing" },
    { label: "Commercial carpet tile", path: "/commercial-carpet-tile" },
    { label: "Commercial LVT & LVP", path: "/commercial-lvt-flooring" },
    post.category === "Garage Floors"
      ? { label: "Garage floor coatings", path: "/garagefloors" }
      : { label: "Commercial flooring resource center", path: "/resources" },
  ];

  return (
    <>
      <Helmet>
        <title>{post.metaTitle ?? `${post.title} | Legacy Industrial Coatings`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.metaTitle ?? post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={image} />
        <meta property="article:published_time" content={post.publishedDate} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={image} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <PageBreadcrumbs items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: post.title, url: `/blog/${post.slug}` }]} />

      <div className="lcf min-h-screen bg-background">
        <SiteHeader />

        <article>
          <header className="pt-12 md:pt-20 pb-10 md:pb-12">
            <div className="max-w-3xl mx-auto px-6 md:px-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
              >
                <ArrowLeft size={12} />
                Back to Blog
              </Link>

              <p className={`${LABEL} mb-5 flex flex-wrap gap-x-3 gap-y-1`}>
                <span className="text-foreground">{post.category}</span>
                <span aria-hidden="true">/</span>
                <time dateTime={post.publishedDate}>{post.date}</time>
                {post.location && (
                  <>
                    <span aria-hidden="true">/</span>
                    <span>{post.location}</span>
                  </>
                )}
              </p>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.08] mb-6 text-balance">
                {post.title}
              </h1>

              <p className="text-muted-foreground text-[14px]">By {post.author}</p>
            </div>
          </header>

          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={post.featuredImage || post.image}
                alt={post.featuredAlt ?? post.title}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={1600}
                height={900}
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
            <div className={ARTICLE_BODY} dangerouslySetInnerHTML={{ __html: post.content }} />

            <nav aria-label="Related services" className="mt-16 pt-10 border-t border-border">
              <p className={`${LABEL} mb-4`}>Related services</p>
              <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                {related.map((r) => (
                  <li key={r.path} className="bg-background">
                    <a href={r.path} className={RELATED_LINK}>
                      <span>{r.label}</span>
                      <ArrowRight size={14} className="text-muted-foreground flex-shrink-0 transition-transform group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </article>

        <SiteFooter
          cta={{
            title: "Talk to us about your floor",
            text: "Send plans or a scope. Site walk within 1–3 business days; full bid within 24 hours of receiving plans.",
          }}
        />
      </div>
    </>
  );
};

export default BlogPostPage;
