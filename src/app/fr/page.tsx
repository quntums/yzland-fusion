import HeroSlideshow from "@/components/HeroSlideshow";
import TrustStrip from "@/components/TrustStrip";
import TourCard from "@/components/TourCard";
import FounderBlock from "@/components/FounderBlock";
import EnhancedTestimonials from "@/components/EnhancedTestimonials";
import Footer from "@/components/Footer";
import HomepageMobileConversion from "@/components/HomepageMobileConversion";
import TrustCounters from "@/components/TrustCounters";
import GuestGallery from "@/components/GuestGallery";
import fs from 'fs';
import path from 'path';
import { saharaTestimonials, imperialTestimonials, chefchaouenTestimonial } from "@/lib/testimonials";
import type { Metadata } from 'next';

function getFrenchTours() {
  const dir = path.join(process.cwd(), 'data/fr');
  const files = fs.readdirSync(dir).filter((f: string) => f.endsWith('.json'));
  return files.map((f: string) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
}

export const metadata: Metadata = {
  title: 'Y&ZLand Tours – Voyages Premium au Maroc',
  description: 'Circuits privés artisanaux au Maroc. Désert du Sahara, villes impériales, Chefchaouen, montagnes de l\'Atlas et Grand Tour de 9 jours. Opérateur local agréé.',
};

export default function FrHomePage() {
  const tours = getFrenchTours();
  const featuredTestimonials = [
    saharaTestimonials[0],
    imperialTestimonials[1],
    chefchaouenTestimonial,
  ];

  return (
    <>
      <HeroSlideshow isFr={true} />
      <TrustStrip isFr={true} />
      <TrustCounters isFr={true} />
      <div className="lg:hidden">
        <HomepageMobileConversion isFr={true} />
      </div>
      <div className="hidden lg:block">
        <main className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-2xl font-bold text-[#D4A84B] text-center mb-16">Nos Circuits Premium</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour: any) => (
              <TourCard key={tour.slug} slug={tour.slug} title={tour.title} image={tour.images?.[0] || '/placeholder.webp'} price={tour.price_from} duration={tour.duration} highlights={tour.highlights} isFrench={true} />
            ))}
          </div>
        </main>
        <FounderBlock isFr={true} />
        <EnhancedTestimonials testimonials={featuredTestimonials} />
      </div>
      <GuestGallery isFr={true} />
      <Footer />
    </>
  );
}
