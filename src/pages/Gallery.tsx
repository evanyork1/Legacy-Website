import { useState, useEffect } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Seo } from "@/components/seo/Seo";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageHero } from "@/components/site/sections";
import { JOB } from "@/data/site/jobPhotos";

interface GalleryPhoto {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string;
  display_order: number;
  is_featured: boolean;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryPhoto | null>(null);
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;

      // Sort photos to put featured images first, then by display_order
      const sortedPhotos = (data || []).sort((a, b) => {
        // First, sort by featured status (featured first)
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
        // Then by display_order within each group
        return a.display_order - b.display_order;
      });

      setPhotos(sortedPhotos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo
        title="Floor Coating Gallery — Garage, Commercial & Polished Concrete | Legacy Industrial Coatings"
        description="Browse our portfolio of completed garage floor, polyurea flake, polished concrete, and commercial epoxy installations across Dallas-Fort Worth."
        path="/gallery"
        ogImage={JOB.hangar.src}
      />
      <PageBreadcrumbs items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Gallery", url: "/gallery" }]} />
      <SiteHeader />

      <PageHero
        compact
        eyebrow="Our Work"
        title="Our Work Gallery"
        subhead="Explore our portfolio of premium floor coating installations."
        image={JOB.hangar.src}
        imageAlt={JOB.hangar.alt}
        crumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Gallery", url: "/gallery" }]}
      />

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {loading ? (
            <div className="flex justify-center items-center h-64 border border-border">
              <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Loading gallery...</p>
            </div>
          ) : photos.length === 0 ? (
            <div className="text-center py-20 border border-border">
              <ImageIcon className="h-16 w-16 text-muted-foreground/40 mx-auto mb-6" strokeWidth={1.25} />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">No Photos Yet</h2>
              <p className="text-muted-foreground text-[16px]">Check back soon for our latest work!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
              {photos.map((photo, i) => (
                <button
                  key={photo.id}
                  type="button"
                  className="group relative block aspect-square overflow-hidden bg-muted text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                  onClick={() => setSelectedImage(photo)}
                  aria-label={`Expand photo: ${photo.title}`}
                >
                  <img
                    src={photo.image_url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={i < 8 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  {photo.is_featured && (
                    <span className="absolute top-3 left-3 bg-foreground text-background px-2 py-1 font-heading text-[10px] tracking-[0.2em] uppercase">
                      Featured
                    </span>
                  )}

                  {/* Hover overlay */}
                  <span className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="block text-background">
                      <span className="block font-heading font-semibold text-[15px] leading-snug">{photo.title}</span>
                      <span className="block font-heading text-[10px] tracking-[0.2em] uppercase text-background/70 mt-1">Click to expand</span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal for expanded image */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="lcf max-w-4xl w-[calc(100%-2rem)] h-auto p-0 gap-0 rounded-none sm:rounded-none border-border bg-foreground shadow-none [&>button:last-child]:hidden">
          <DialogTitle className="sr-only">
            {selectedImage?.title}
          </DialogTitle>
          <div className="relative">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 bg-foreground/70 text-background p-2 hover:bg-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {selectedImage && (
              <div>
                <img
                  src={selectedImage.image_url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain bg-foreground"
                  loading="eager"
                  decoding="async"
                />
                <div className="bg-foreground px-6 py-5 border-t border-background/10">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-background mb-1">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.description && (
                    <p className="text-background/70 text-[14px] leading-[1.7]">{selectedImage.description}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <SiteFooter cta={{ title: "Want a Floor Like These?", text: "Tell us about the space and how it's used. We'll walk it and recommend the right system." }} />
    </div>
  );
};

export default Gallery;
