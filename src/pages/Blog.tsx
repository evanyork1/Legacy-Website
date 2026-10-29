import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Eyebrow, PageHero } from "@/components/site/sections";
import { JOB } from "@/data/site/jobPhotos";
import { fetchSortedPosts, type BlogPost } from "@/data/blogPosts";

const LABEL = "font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground";
const MORE = "inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground";

const PostMeta = ({ post }: { post: BlogPost }) => (
  <>
    {post.category} · <time dateTime={post.publishedDate}>{post.date}</time>
    {post.readTime && <> · {post.readTime}</>}
    {post.location && <> · {post.location}</>}
  </>
);

const FeaturedPost = ({ post }: { post: BlogPost }) => (
  <Link to={`/blog/${post.slug}`} className="group grid lg:grid-cols-2 border border-border bg-background hover:border-foreground transition-colors">
    <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-muted">
      <img
        src={post.featuredImage || post.image}
        alt={post.featuredAlt ?? post.title}
        loading="eager"
        decoding="async"
        width={1200}
        height={900}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center min-w-0">
      <p className={`${LABEL} mb-4`}>
        <PostMeta post={post} />
      </p>
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.15] mb-4 text-balance group-hover:underline">
        {post.title}
      </h3>
      <p className="text-muted-foreground text-[16px] leading-[1.85] mb-6">{post.excerpt}</p>
      <span className={MORE}>
        Read the article <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);

const PostCard = ({ post }: { post: BlogPost }) => (
  <Link to={`/blog/${post.slug}`} className="group flex flex-col border border-border bg-background hover:border-foreground transition-colors min-w-0">
    <div className="aspect-[4/3] overflow-hidden bg-muted">
      <img
        src={post.featuredImage || post.image}
        alt={post.featuredAlt ?? post.title}
        loading="lazy"
        decoding="async"
        width={800}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <p className={`${LABEL} mb-2`}>
        <PostMeta post={post} />
      </p>
      <h3 className="font-heading font-semibold text-[17px] leading-[1.35] text-foreground mb-3 group-hover:underline">{post.title}</h3>
      <p className="text-[14px] text-muted-foreground leading-[1.7] line-clamp-3 mb-4">{post.excerpt}</p>
      <span className={`${MORE} mt-auto`}>
        Read more <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetchSortedPosts().then((data) => {
      if (!active) return;
      setPosts(data);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <>
      <Helmet>
        <title>Commercial & Industrial Flooring Blog | Epoxy, Polished Concrete & More | Legacy Industrial Coatings</title>
        <meta
          name="description"
          content="Straight answers on commercial epoxy flooring, polished concrete, warehouse floors, food plant floors and floor care from Legacy Industrial Coatings in Dallas–Fort Worth, serving all of Texas and nationwide."
        />
        <meta property="og:title" content="Commercial & Industrial Flooring Blog | Legacy Industrial Coatings" />
        <meta property="og:image" content="https://legacyindustrialcoatings.com/og/legacy-commercial-industrial-flooring.jpg" />
        <meta
          property="og:description"
          content="Straight answers on commercial epoxy flooring, polished concrete, warehouse floors, food plant floors and floor care from Legacy Industrial Coatings."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://legacyindustrialcoatings.com/blog" />
        <meta property="og:url" content="https://legacyindustrialcoatings.com/blog" />
      </Helmet>

      <PageBreadcrumbs items={crumbs} />

      <div className="lcf min-h-screen bg-background">
        <SiteHeader />

        <PageHero
          eyebrow="Resources"
          title="Commercial Flooring Blog"
          subhead="Straight answers on commercial epoxy flooring, polished concrete, warehouse floors, food plant floors and floor care."
          image={JOB.hangar.src}
          imageAlt={JOB.hangar.alt}
          crumbs={crumbs}
        />

        {featuredPost && (
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
              <Eyebrow>Featured Article</Eyebrow>
              <FeaturedPost post={featuredPost} />
            </div>
          </section>
        )}

        <section className="py-16 md:py-24 bg-secondary border-y border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Latest Articles</Eyebrow>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-4 text-balance">
              Guides & Insights
            </h2>
            <p className="text-muted-foreground text-[16px] leading-[1.85] mb-10 max-w-3xl">
              Explore our collection of expert guides and industry insights.
            </p>

            {loading ? (
              <p className={LABEL}>Loading posts…</p>
            ) : regularPosts.length === 0 && !featuredPost ? (
              <p className="text-muted-foreground text-[16px]">No posts published yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {regularPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>

        <SiteFooter
          cta={{
            title: "Ready to Transform Your Space?",
            text: "Get expert flooring solutions from Legacy Industrial Coatings. Send plans or a scope and we'll recommend the right system for your space.",
          }}
        />
      </div>
    </>
  );
};

export default Blog;
