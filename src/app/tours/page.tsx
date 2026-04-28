import { getAllTours } from '@/lib/tours';
import TourCard from '@/components/TourCard';

export default function ToursPage() {
  const tours = getAllTours();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
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
