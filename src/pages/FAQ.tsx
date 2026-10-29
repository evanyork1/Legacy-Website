import { Helmet } from "react-helmet-async";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { FaqBlock, PageHero } from "@/components/site/sections";
import { JOB } from "@/data/site/jobPhotos";

const residentialFAQs = [
  {
    question: "What is the difference between polyurea and epoxy garage floor coatings?",
    answer: "Polyurea is more flexible, cures faster, and resists UV damage better than epoxy. It lasts longer and is less likely to peel or chip."
  },
  {
    question: "How long will my garage floor coating last?",
    answer: "Our polyurea floors typically last 15–20 years or more with minimal maintenance."
  },
  {
    question: "Can you coat over cracked or damaged concrete?",
    answer: "Yes. We repair cracks and prep the concrete with diamond grinding before applying any coating."
  },
  {
    question: "What causes other floors to fail or peel?",
    answer: "Poor surface prep, moisture intrusion, and cheap materials are the most common reasons. We address all three before coating."
  },
  {
    question: "How soon can I walk or park on my coated garage floor?",
    answer: "Light foot traffic is usually okay within 6–8 hours. You can typically park within 24 hours, depending on temperature and humidity."
  },
  {
    question: "Will the floor be slippery?",
    answer: "Our flake floors include a textured finish that improves slip resistance, even when wet."
  },
  {
    question: "Can I customize the look of my garage floor?",
    answer: "Yes. We offer a range of flake colors and sizes to suit your style and your home's design."
  },
  {
    question: "Do you offer garage floor coatings for new construction?",
    answer: "Absolutely. Many customers schedule us before move-in to protect and upgrade their brand-new garage from day one."
  },
  {
    question: "How do I clean the floor after installation?",
    answer: "Sweep regularly and mop with water or a gentle cleaner. Avoid harsh chemicals or degreasers."
  },
  {
    question: "Do you remove old coatings or failed epoxy jobs?",
    answer: "Yes. In fact, about 50% of our projects involve removing cheap, failed epoxy coatings before redoing the job correctly."
  }
];

const commercialFAQs = [
  {
    question: "Do you install coatings for commercial or industrial facilities?",
    answer: "Yes. We install high-performance polyurea, polyaspartic, and polished concrete systems in warehouses, showrooms, kitchens, and more."
  },
  {
    question: "What's the best flooring solution for high-traffic commercial areas?",
    answer: "That depends on the use case. Polyurea is excellent for durability and ease of cleaning; polished concrete is ideal for large open areas with forklift traffic."
  },
  {
    question: "How long does it take to install commercial coatings?",
    answer: "Most small to medium commercial projects take 2–4 days depending on square footage and prep needs."
  },
  {
    question: "Can you install coatings overnight or on weekends to reduce downtime?",
    answer: "Yes. We offer flexible scheduling to minimize business disruption, including after-hours and weekend work."
  },
  {
    question: "What safety certifications or slip resistance standards do you meet?",
    answer: "Our commercial coatings can meet OSHA and ADA slip-resistance standards, and we can add grit or texture where needed."
  },
  {
    question: "Do you offer polished concrete for retail or office spaces?",
    answer: "Yes. Polished concrete is a popular low-maintenance choice for commercial interiors and we offer multiple finish levels."
  },
  {
    question: "Are there antimicrobial or chemical-resistant options for kitchens or labs?",
    answer: "Yes. We offer specialty coatings that are resistant to bacteria, acids, oils, and other industrial chemicals."
  },
  {
    question: "Can your coatings be used in automotive shops or dealerships?",
    answer: "Absolutely. We install showroom-grade polyurea and polished concrete that holds up under lifts, oil, and hot tires."
  },
  {
    question: "What maintenance is required for commercial floors?",
    answer: "Just routine sweeping and occasional mopping. We also offer maintenance plans for high-traffic environments."
  },
  {
    question: "Do you provide free estimates for commercial projects?",
    answer: "Yes. We'll assess your space, understand your needs, and deliver a custom plan with options that fit your budget."
  }
];

const toBlock = (items: { question: string; answer: string }[]) => items.map((f) => ({ q: f.question, a: f.answer }));

const FAQ = () => (
  <div className="lcf min-h-screen bg-background">
    <Helmet>
      <title>Frequently Asked Questions - Garage Floor Coatings | Legacy Industrial Coatings</title>
      <meta name="description" content="Get answers to common questions about our polyurea garage floor coatings, installation process, pricing, and maintenance. Expert advice from Legacy Industrial Coatings." />
      <meta name="keywords" content="garage floor coating FAQ, polyurea coating questions, floor coating maintenance, garage floor installation" />

      <meta property="og:title" content="FAQ - Garage Floor Coating Questions | Legacy Industrial Coatings" />
      <meta property="og:description" content="Get answers to common questions about our polyurea garage floor coatings, installation process, pricing, and maintenance." />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://legacyindustrialcoatings.com/faq" />
      <meta property="og:url" content="https://legacyindustrialcoatings.com/faq" />
    </Helmet>

    <StructuredData faqs={[...residentialFAQs, ...commercialFAQs]} />

    <PageBreadcrumbs items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "FAQ", url: "/faq" }]} />

    <SiteHeader />

    <PageHero
      compact
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      subhead="Find answers to the most common questions about our floor coatings, installation process, and maintenance. Can't find what you're looking for? Contact us directly for personalized assistance."
      image={JOB.polishedIndustrial.src}
      imageAlt={JOB.polishedIndustrial.alt}
      crumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "FAQ", url: "/faq" }]}
    />

    <FaqBlock heading="Commercial & Industrial Floors" faqs={toBlock(commercialFAQs)} />

    <FaqBlock heading="Residential Garage Floors" faqs={toBlock(residentialFAQs)} />

    <SiteFooter
      cta={{
        title: "Still Have Questions?",
        text: "Our flooring experts are here to help. Get personalized answers and a free quote for your project.",
      }}
    />
  </div>
);

export default FAQ;
