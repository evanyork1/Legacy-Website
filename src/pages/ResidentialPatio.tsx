import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { BTN, Eyebrow, PageHero } from "@/components/site/sections";
import { openCalBooking } from "@/lib/calBooking";
import { ArrowRight, Shield, Clock, Palette, Wrench, Check, Calendar } from "lucide-react";

/**
 * /residential-patio — residential page in the same look as /garagefloors.
 * Homeowners book an in-person estimate through Cal.com; the commercial
 * Request Information form is not shown here.
 */

const HERO = "/lovable-uploads/7b59a18f-94c1-45aa-88f1-9bc7c3277305.png";

const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8 text-balance";
const P = "text-muted-foreground font-body text-[16px] leading-[1.85] mb-6";

const EstimateCalButton = ({ light = false }: { light?: boolean }) => (
  <button
    type="button"
    onClick={openCalBooking}
    className={`${BTN} ${
      light
        ? "bg-background text-foreground border border-background hover:bg-transparent hover:text-background"
        : "bg-foreground text-background border border-foreground hover:bg-foreground/90"
    }`}
  >
    <Calendar size={14} />
    Book An Estimate
    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
  </button>
);

const CallUsLink = ({ light = false }: { light?: boolean }) => (
  <Link
    to="/contact"
    className={`${BTN} border ${
      light
        ? "border-background/30 text-background hover:bg-background hover:text-foreground"
        : "border-foreground text-foreground hover:bg-foreground hover:text-background"
    }`}
  >
    Call Us Now
    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
  </Link>
);

const ResidentialPatio = () => {
  const benefits = [{
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Lifetime Warranty",
    description: "Our polyurea patio floors come with an industry-leading lifetime warranty, ensuring your outdoor investment is protected for years to come."
  }, {
    icon: <Clock size={22} strokeWidth={1.5} />,
    title: "Fast Installation",
    description: "Most residential patio projects can be completed in just one day, minimizing disruption to your outdoor living space."
  }, {
    icon: <Palette size={22} strokeWidth={1.5} />,
    title: "Customizable Design",
    description: "Choose from a wide variety of flake colors and patterns to create a unique patio surface that complements your outdoor décor and landscape."
  }, {
    icon: <Wrench size={22} strokeWidth={1.5} />,
    title: "Low Maintenance",
    description: "Once installed, patio flake floors require minimal maintenance - just simple cleaning with standard outdoor cleaning products."
  }];
  const features = ["Weather and UV resistant", "Slip-resistant texture for safety", "Freeze-thaw resistant", "Impact and abrasion resistant", "Easy to clean and maintain", "Available in multiple color combinations"];
  const steps = [{
    title: "Diamond Grind Surface Preparation",
    description: "We diamond grind to prepare the surface properly for the coating, ensuring optimal adhesion and longevity.",
    image: "/lovable-uploads/7a02cc67-38e9-4f07-9b6e-e051b18f52a2.png"
  }, {
    title: "Crack Repair & Surface Restoration",
    description: "We repair cracks so they don't create problems long term. Every floor has minor hairline cracks, even the newest concrete.",
    image: "/lovable-uploads/cf1d8da4-0027-41ff-a35e-e0fe7d638db4.png"
  }, {
    title: "Polyurea Base Coat Application",
    description: "Our high-performance polyurea base coat provides the foundation for a durable, long-lasting floor system.",
    image: "/lovable-uploads/abfd686b-1b52-4bc9-a8e0-5bd5f130a682.png"
  }, {
    title: "Polymer Flake Installation",
    description: "Decorative polymer flakes are broadcast into the base coat, creating texture and the signature look of your new floor.",
    image: "/lovable-uploads/184a567c-9bf6-4719-9e8b-8aec08c14ca3.png"
  }, {
    title: "Polyaspartic Topcoat Protection",
    description: "Our polyaspartic topcoat protects the surface long term and gives it that signature feel and shine.",
    image: "/lovable-uploads/494eac69-523e-4734-b40b-ac20fd3a3245.png"
  }];
  const faqs = [{
    q: "How long does a patio floor coating take to install?",
    a: "Most residential patio floors are installed in just one day, and ready for foot traffic within 24–48 hours."
  }, {
    q: "Will the coating handle outdoor weather conditions?",
    a: "Yes. Our polyurea patio coatings are specifically designed for outdoor use and resist UV rays, rain, freeze-thaw cycles, and temperature extremes without fading, cracking, or peeling."
  }, {
    q: "Is the surface slip-resistant when wet?",
    a: "Yes. The flake system provides excellent slip resistance, even when wet, making it safe for outdoor use around pools and in rainy conditions."
  }, {
    q: "How do I clean and maintain my patio floor?",
    a: "Simply hose down and scrub with mild soap as needed. Our coatings are non-porous and resist stains from food, drinks, and outdoor elements."
  }, {
    q: "Do you offer a warranty on outdoor installations?",
    a: "Yes. Most of our outdoor options do come with a warranty. Length depends on which option is chosen."
  }];

  return <>
      <Helmet>
        <title>Polyurea Patio Floors - Premium Outdoor Patio Coatings | Legacy Industrial Coatings</title>
        <meta name="description" content="Transform your outdoor patio with our premium polyurea flake floors. Lifetime warranty, weather-resistant, and endless customization options. Perfect for outdoor living spaces." />
        <meta name="keywords" content="polyurea patio floors, outdoor patio coating, flake flooring, decorative concrete, patio renovation, outdoor floor coating Dallas, weather resistant flooring" />

        <meta property="og:title" content="Polyurea Patio Floors - Premium Outdoor Patio Coatings | Legacy Industrial Coatings" />
        <meta property="og:description" content="Transform your outdoor patio with our premium polyurea flake floors. Lifetime warranty, weather-resistant, and endless customization options." />
        <meta property="og:image" content="https://legacyindustrialcoatings.com/lovable-uploads/7b59a18f-94c1-45aa-88f1-9bc7c3277305.png" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://legacyindustrialcoatings.com/residential-patio" />
        <meta property="og:url" content="https://legacyindustrialcoatings.com/residential-patio" />
      </Helmet>

      <StructuredData
        services={[{ name: "Residential Patio Coatings", description: "Decorative polyurea flake and concrete overlay coatings for patios, pool decks, and outdoor living spaces — UV-stable, slip-resistant, and built for Texas weather across Dallas-Fort Worth.", url: "/residential-patio" }]}
      />

      <PageBreadcrumbs items={[{ name: "Home", url: "/" }, { name: "Residential", url: "/garagefloors" }, { name: "Patios", url: "/residential-patio" }]} />

      <div className="lcf min-h-screen bg-background">
        <SiteHeader />

        {/* Hero */}
        <PageHero
          eyebrow="Residential · Patios"
          title="Premium Patio Floors"
          subhead="Transform your outdoor living space with our signature polyurea flake patio system. Designed specifically for outdoor environments, these floors combine superior weather resistance with stunning aesthetics."
          image={HERO}
          imageAlt="Beautiful polyurea flake patio installation"
          action={<>
              <CallUsLink light />
              <EstimateCalButton light />
            </>}
        />

        {/* What Are Patio Flake Floors */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl">
              <Eyebrow>Patio Floors</Eyebrow>
              <h2 className={H2}>What Are Polyurea Patio Floors?</h2>
              <p className={P}>
                Polyurea patio floors are our premium outdoor flooring solution that combines a high-performance polyurea base coat
                with decorative vinyl flakes, topped with a crystal-clear protective topcoat. Specifically engineered for outdoor environments, these systems excel in patios, pool decks, outdoor kitchens, and entertainment areas. This versatile solution creates a durable, beautiful, and long-lasting outdoor floor that outperforms traditional concrete stains and sealers in every way.
              </p>
              <p className={P}>
                Perfect for patios, pool decks, outdoor entertainment areas, and walkways. With a lifetime warranty and endless customization options, it's the ideal solution for any outdoor space.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mt-10">
              <div>
                <h3 className="font-heading font-semibold text-[20px] md:text-[22px] text-foreground mb-6">Superior Outdoor Performance Features</h3>
                <ul className="divide-y divide-border border-y border-border">
                  {features.map((feature) => <li key={feature} className="flex items-center gap-3 py-4">
                      <Check size={16} className="text-foreground flex-shrink-0" />
                      <span className="text-muted-foreground font-body text-[16px]">{feature}</span>
                    </li>)}
                </ul>
              </div>
              <div className="border border-border bg-muted">
                <img src="/lovable-uploads/527e9b8a-a124-4c0a-9735-37c08cb429b2.png" alt="Close-up of polyurea flake patio floor texture" className="w-full h-72 md:h-80 object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-secondary border-y border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Benefits</Eyebrow>
            <h2 className={H2}>Why Choose Patio Flake Floors?</h2>
            <p className={`${P} max-w-3xl mb-10`}>
              Discover the advantages that make polyurea flake floors the preferred choice for outdoor patios, pool decks, and entertainment spaces.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {benefits.map((benefit) => <div key={benefit.title} className="bg-background p-6 md:p-8">
                  <div className="w-11 h-11 border border-border flex items-center justify-center text-foreground mb-5">
                    {benefit.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-[17px] text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.7]">{benefit.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Process</Eyebrow>
            <h2 className={H2}>Our Proven 5-Step Process</h2>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {steps.map((s, i) => <li key={s.title} className="border border-border bg-background">
                  <div className="aspect-video overflow-hidden bg-muted border-b border-border">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <div className="p-6">
                    <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Step {i + 1}</p>
                    <h3 className="font-heading font-semibold text-[17px] text-foreground mb-2">{s.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.7]">{s.description}</p>
                  </div>
                </li>)}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-secondary border-y border-border">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className={`${P} mb-10`}>Common questions about our patio floor coating services</p>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f) => <div key={f.q} className="py-8">
                  <h3 className="font-heading font-semibold text-[18px] md:text-[20px] text-foreground mb-3 leading-snug">{f.q}</h3>
                  <p className="text-muted-foreground font-body text-[15px] leading-[1.8]">{f.a}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="lcf py-24 md:py-32 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-[1.15] mb-6 text-balance text-background">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-background/70 font-body text-[16px] leading-[1.8] mb-10 max-w-2xl mx-auto">
              Get a free quote for your custom polyurea patio floor installation. Our experts will help you choose the perfect design for your outdoor living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CallUsLink light />
              <EstimateCalButton light />
            </div>
          </div>
        </section>

        <SiteFooter requestInfo={false} />
      </div>
    </>;
};
export default ResidentialPatio;
