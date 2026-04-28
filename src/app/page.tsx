import { getAllTours } from '@/lib/tours';
import TourCard from '@/components/TourCard';

export default function HomePage() {
  const tours = getAllTours();
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Explore Morocco with YZLand</h1>
      <p className="text-center text-gray-500 mb-10">Luxury journeys across deserts, mountains, and cities.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map(tour => (
          <TourCard
            key={tour.slug}
            slug={tour.slug}
            title={tour.title}
            image={tour.images?.[0] || '/placeholder.jpg'}
            price_from={tour.price_from}
            duration={tour.duration}
            highlights={tour.highlights}
          />
        ))}
      </div>
    </main>
  );
}
