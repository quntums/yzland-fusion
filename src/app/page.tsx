import HeroSlideshow from "@/components/HeroSlideshow";
import TrustStrip from "@/components/TrustStrip";
import TourCard from "@/components/TourCard";
import FounderBlock from "@/components/FounderBlock";
import EnhancedTestimonials from "@/components/EnhancedTestimonials";
import Footer from "@/components/Footer";
import HomepageMobileConversion from "@/components/HomepageMobileConversion";
import TrustCounters from "@/components/TrustCounters";
import { getAllTours } from "@/lib/tours";
import { saharaTestimonials, imperialTestimonials, chefchaouenTestimonial } from "@/lib/testimonials";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Y&ZLand Tours – Premium Morocco Travel',
  description: 'Handcrafted private tours in Morocco. Sahara desert, Imperial cities, Chefchaouen, Atlas Mountains and a 9‑Day Grand Tour. Licensed local operator.',
};

export default function HomePage() {
  const tours = getAllTours();
  const featuredTestimonials = [
    saharaTestimonials[0],
    imperialTestimonials[1],
    chefchaouenTestimonial,
  ];

  return (
    <>
      <HeroSlideshow isFr={false} />
      <TrustStrip isFr={false} />
      <TrustCounters isFr={false} />
      <div className="lg:hidden">
        <HomepageMobileConversion />
      </div>
      <div className="hidden lg:block">
        <main className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-16">Our Premium Tours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map(tour => (
              <TourCard key={tour.slug} slug={tour.slug} title={tour.title} image={tour.images?.[0] || '/placeholder.jpg'} price={tour.price_from} duration={tour.duration} highlights={tour.highlights} isFrench={false} />
            ))}
          </div>
        </main>
        <EnhancedTestimonials testimonials={featuredTestimonials} />
      </div>
      <FounderBlock />
      <Footer />
    </>
  );
}
