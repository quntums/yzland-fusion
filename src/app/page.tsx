import Hero from '@/components/Hero';
import TourCard from '@/components/TourCard';
import { getAllTours } from '@/lib/tours';
import { defaultTestimonials } from '@/lib/testimonials';
import TestimonialBlock from '@/components/TestimonialBlock';
import Footer from '@/components/Footer';

export default function Home() {
  const tours = getAllTours();

  return (
    <main>
      <Hero
        title="Explore Morocco with YZLand"
        subtitle="Luxury journeys across deserts, mountains, and cities."
        image="/images/sahara-sunset-traveler.jpg"
        ctaText="Discover Sahara Tours"
        ctaLink="/tours/sahara-3-days"
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Premium Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard
              key={tour.slug}
              slug={tour.slug}
              title={tour.title}
              images={tour.images}
              price_from={tour.price_from}
              duration={tour.duration}
              highlights={tour.highlights}
            />
          ))}
        </div>
      </section>

      <TestimonialBlock testimonials={defaultTestimonials} />
      <Footer />
    </main>
  );
}
