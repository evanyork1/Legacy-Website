import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { Link, useParams } from "react-router-dom";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { fetchPostBySlug, type BlogPost } from "@/data/blogPosts";
import NotFound from "./NotFound";

const SITE_URL = "https://legacyindustrialcoatings.com";

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
      <div className="min-h-screen bg-white">
        <SiteHeader />
        <div className="container mx-auto px-4 py-24 text-center text-gray-500">
          Loading article…
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

      <div className="min-h-screen bg-white">
        <SiteHeader />

        <article className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedDate}>{post.date}</time>
                </div>
                {post.location && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="h-4 w-4" />
                    {post.location}
                  </div>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>

              <p className="text-gray-500 mb-8">By {post.author}</p>

              <img
                src={post.featuredImage || post.image}
                alt={post.featuredAlt ?? post.title}
                className="w-full h-64 sm:h-96 object-cover rounded-xl shadow-lg mb-10"
                loading="eager"
              />

              <div
                className="max-w-none text-[17px] leading-[1.85] text-gray-700 [&_p]:mb-5 [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:leading-tight [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_li]:mb-2 [&_strong]:text-gray-900 [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <nav aria-label="Related services" className="mt-14 border-t border-gray-200 pt-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">Related services</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-blue-700">
                  <li><a href="/commercial" className="hover:underline">Commercial epoxy flooring</a></li>
                  <li><a href="/industrial-epoxy" className="hover:underline">Industrial epoxy flooring</a></li>
                  <li><a href="/concrete-polishing" className="hover:underline">Polished concrete</a></li>
                  <li><a href="/commercial-carpet-tile" className="hover:underline">Commercial carpet tile</a></li>
                  <li><a href="/commercial-lvt-flooring" className="hover:underline">Commercial LVT &amp; LVP</a></li>
                  {post.category === "Garage Floors" ? (
                    <li><a href="/garagefloors" className="hover:underline">Garage floor coatings</a></li>
                  ) : (
                    <li><a href="/resources" className="hover:underline">Commercial flooring resource center</a></li>
                  )}
                </ul>
              </nav>
            </div>
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
