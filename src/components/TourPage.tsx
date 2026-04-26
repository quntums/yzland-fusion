import { TourData } from '@/lib/tours';
import { Testimonial } from '@/lib/testimonials';
import ItineraryBlock from './ItineraryBlock';
import IncludesBlock from './IncludesBlock';
import TestimonialBlock from './TestimonialBlock';
import CTASticky from './CTASticky';

interface TourPageProps {
  tour: TourData;
  testimonials: Testimonial[];
}

export default function TourPage({ tour, testimonials }: TourPageProps) {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <section>
        <h1 className="text-4xl font-bold">{tour.title}</h1>
        <p className="text-gray-600 mt-4 text-lg">{tour.description || 'A premium Moroccan travel experience.'}</p>
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-4">
          <span>✔ Licensed Moroccan operator</span>
          <span>✔ Trusted by international travelers</span>
          <span>✔ Secure booking with deposit</span>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tour.images.map((img, i) => (
          <img key={i} src={img} alt={`${tour.title} - image ${i + 1}`} className="w-full h-64 object-cover rounded-xl" />
        ))}
      </section>

      <ItineraryBlock route={tour.route} />
      <IncludesBlock includes={tour.includes} />

      <section className="bg-gray-50 p-8 rounded-xl text-center">
        <h2 className="text-3xl font-bold">From €{tour.price_from} / person</h2>
        <p className="text-gray-600 mt-2">Groups of 2-6 people • Private tours available</p>
        <div className="mt-4 space-y-1 text-sm text-gray-600">
          <p>✔ Free cancellation up to 48h</p>
          <p>✔ Instant confirmation</p>
          <p>✔ Trusted local operators</p>
        </div>
        <p className="text-sm text-gray-500 mt-4">Limited availability during peak season.</p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href={tour.cta.payment_link || '#'} target="_blank" className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:opacity-90">Book Now</a>
          <a href="/contact" className="border px-6 py-3 rounded-xl hover:bg-gray-50">Ask a Question</a>
        </div>
        <p className="text-sm text-gray-500 mt-2">Secure your booking with a small deposit. Pay the rest later.</p>
      </section>

      <TestimonialBlock testimonials={testimonials} />
      <CTASticky />
    </main>
  );
}
