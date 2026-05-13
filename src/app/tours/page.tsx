import { getAllTours } from '@/lib/tours';
import TourCard from '@/components/TourCard';
import Footer from '@/components/Footer';
import MobileTourCard from '@/components/MobileTourCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Tours – Y&ZLand',
  description: 'Browse all Morocco private tours: Sahara, Imperial Cities, Chefchaouen, Akchour waterfalls, Marrakech & Agafay, and the 9‑Day Grand Tour. From €180 to €2,500.',
};

export default function ToursPage() {
  const tours = getAllTours();
  const whatsappMsg = encodeURIComponent("Hello Y&ZLand, I'm interested in your tours. Can you share more details?");

  return (
    <>
      <div className="lg:hidden">
        <main className="max-w-[640px] mx-auto px-4 py-8 space-y-6">
          <h1 className="text-2xl font-bold text-center">Our Tours</h1>
          <div className="grid grid-cols-1 gap-6">
            {tours.map((tour, idx) => (
              <MobileTourCard
                key={tour.slug}
                slug={tour.slug}
                title={tour.title}
                image={tour.images?.[0] || '/placeholder.jpg'}
                price={tour.price_from}
                duration={tour.duration}
                highlights={tour.highlights}
                isPopular={tour.slug === 'morocco-grand-tour'}
              />
            ))}
          </div>
          <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-2xl p-5 text-center space-y-3">
            <h3 className="text-lg font-semibold">Not sure which tour to choose?</h3>
            <p className="text-sm text-gray-600">We'll help you pick the perfect experience.</p>
            <a
              href={`https://wa.me/212619852591?text=${whatsappMsg}`}
              target="_blank"
              className="inline-block w-full bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-3 rounded-xl text-base"
            >
              💬 Get a recommendation
            </a>
          </div>
        </main>
      </div>
      <div className="hidden lg:block">
        <main className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center mb-12">Our Tours</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard
                key={tour.slug}
                slug={tour.slug}
                title={tour.title}
                image={tour.images?.[0] || '/placeholder.jpg'}
                price={tour.price_from}
                duration={tour.duration}
                highlights={tour.highlights}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
