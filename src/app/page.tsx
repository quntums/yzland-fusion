import HeroSlideshow from "@/components/HeroSlideshow";
import TrustStrip from "@/components/TrustStrip";
import TourCard from "@/components/TourCard";
import FounderBlock from "@/components/FounderBlock";
import EnhancedTestimonials from "@/components/EnhancedTestimonials";
import Footer from "@/components/Footer";
import { getAllTours } from "@/lib/tours";
import { saharaTestimonials, imperialTestimonials, atlasTestimonials } from "@/lib/testimonials";

export default function HomePage() {
  const tours = getAllTours();
  const featuredTestimonials = [
    saharaTestimonials[0],
    imperialTestimonials[1],
    atlasTestimonials[0],
  ];

  return (
    <>
      <HeroSlideshow />
      <TrustStrip />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-16">Our Premium Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map(tour => (
            <TourCard key={tour.slug} slug={tour.slug} title={tour.title} image={tour.images?.[0] || '/placeholder.jpg'} price={tour.price_from} duration={tour.duration} highlights={tour.highlights} />
          ))}
        </div>
      </main>
      <FounderBlock />
      <EnhancedTestimonials testimonials={featuredTestimonials} />
      <Footer />
    </>
  );
}
