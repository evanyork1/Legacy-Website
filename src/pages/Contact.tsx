import { Helmet } from "react-helmet-async";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { RequestInfoForm } from "@/components/forms/RequestInfoForm";
import { Phone, Mail } from "lucide-react";
const Contact = () => {
  return <>
      <Helmet>
        <title>Contact Legacy Industrial Coatings | Commercial Epoxy Flooring Contractor, Plano TX</title>
        <meta name="description" content="Contact Legacy Industrial Coatings for your epoxy flooring needs. Serving Dallas-Fort Worth and Phoenix metro areas." />
        <link rel="canonical" href="https://legacyindustrialcoatings.com/contact" />
        <meta property="og:url" content="https://legacyindustrialcoatings.com/contact" />
      </Helmet>

      <PageBreadcrumbs items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />

      <div className="min-h-screen bg-white">
        <SiteHeader />
        
        <main className="pt-0 md:pt-20">
          <section className="py-10 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                    Contact{" "}
                    <span className="text-blue-900">
                      Legacy Industrial Coatings
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600">
                    Ready to transform your floors? Get in touch with our experts today.
                  </p>
                </div>

                <div className="mb-12">
                  <RequestInfoForm id="request-info" />
                </div>

                {/* Contact Information - Offices */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {/* DFW Office */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">DFW Office</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-blue-600 mr-3" />
                        <a href="tel:214-305-6516" className="text-lg font-bold text-gray-900 hover:text-blue-600">
                          (214) 305-6516
                        </a>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                        <div className="text-gray-600">
                          <p>6010 W Spring Creek Parkway</p>
                          <p>Plano, TX 75024</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phoenix Office */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Phoenix Office</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-blue-600 mr-3" />
                        <a href="tel:602-560-0974" className="text-lg font-bold text-gray-900 hover:text-blue-600">
                          (602) 560-0974
                        </a>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                        <div className="text-gray-600">
                          <p>7150 E Camelback Rd Ste. 444</p>
                          <p>Scottsdale, AZ 85251</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600">
                    <Mail className="inline h-4 w-4 mr-2" />
                    <a href="mailto:support@legacyindustrialcoatings.com" className="max-md:inline-flex max-md:items-center max-md:min-h-11 max-md:break-all text-blue-600 hover:underline">
                      support@legacyindustrialcoatings.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>;
};
export default Contact;