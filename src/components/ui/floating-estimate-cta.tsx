import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { BookingModal } from "@/components/landing/BookingModal";

export const FloatingEstimateCTA = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7; // 70vh hero height
      setScrolledPastHero(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!scrolledPastHero) return null;

  return (
    <>
      <div className="md:hidden h-[calc(68px+env(safe-area-inset-bottom,0px))]" aria-hidden="true" />
      {/* Fixed bottom CTA block - Mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-blue-900 text-white shadow-2xl rounded-t-3xl md:hidden pb-[env(safe-area-inset-bottom,0px)]">
        <div className="container mx-auto px-4 py-3">
          <Button variant="ghost"
            className="w-full h-11 p-0 text-center cursor-pointer group transition-all duration-200 hover:scale-105 hover:bg-transparent hover:text-inherit"
            onClick={() => setShowBookingModal(true)}
          >
            <div className="text-xl font-bold tracking-wide group-hover:text-blue-200 transition-colors">
              Book An Estimate
            </div>
          </Button>
        </div>
      </div>

      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)} 
      />
    </>
  );
};