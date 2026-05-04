'use client';
import { Testimonial } from '@/lib/testimonials';
import ItineraryBlock from './ItineraryBlock';
import IncludesBlock from './IncludesBlock';
import DeparturesBlock from './DeparturesBlock';
import TestimonialBlock from './TestimonialBlock';
import CTASticky from './CTASticky';
import Footer from '@/components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

interface TourPageProps {
  tour: {
    title: string;
    price_from: number;
    duration: string;
    route: string[];
    highlights: string[];
    includes: string[];
    images: string[];
    itinerary?: {
      day: number;
      date?: string;
      city?: string;
      title?: string;
      desc?: string;
    }[];
    cta: {
      whatsapp: boolean;
      form: boolean;
      payment_link: string;
    };
    whatsapp_message?: string;
    subtitle?: string;
    departures?: {
      date: string;
      spots: number;
      link: string;
    }[];
  };
  testimonials: Testimonial[];
}

export default function TourPage({ tour, testimonials }: TourPageProps) {
  const { trackWhatsAppClick } = useAnalytics();
  const whatsappMsg = encodeURIComponent(
    tour.whatsapp_message || `I'm interested in ${tour.title}`
  );
  const departures = tour.departures || [];

  return (
    <main>
      <section className="bg-gray-50 p-8 rounded-xl text-center">
        <h2 className="text-3xl font-bold">From €{tour.price_from} / person</h2>
        <p className="text-gray-600 mt-2">Groups of 2-6 people • Private tours available</p>
        <div className="mt-4 space-y-1 text-sm text-gray-600">
          <p>✔ Free cancellation up to 48h</p>
          <p>✔ Instant confirmation</p>
          <p>✔ Trusted local operators</p>
        </div>
        <p className="text-orange-600 font-medium mt-4">Limited availability during peak season</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/212619852591?text=${whatsappMsg}`} target="_blank" onClick={() => trackWhatsAppClick(tour.title)} className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-700 transition">
            Book via WhatsApp
          </a>
          <a href={tour.cta.payment_link || '#'} target="_blank" className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-800 transition">
            Pay Deposit (Secure Spot)
          </a>
          <a href="/contact.html" className="border-2 border-amber-600 text-amber-700 bg-amber-50 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-600 hover:text-white transition">
            Ask a Question
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">Secure your booking with a small deposit. Pay the rest later.</p>
      </section>

      {tour.itinerary && <ItineraryBlock itinerary={tour.itinerary} />}
      <IncludesBlock includes={tour.includes} />

      {departures.length > 0 && <DeparturesBlock departures={departures} />}

      <TestimonialBlock testimonials={testimonials} />
      <CTASticky tourTitle={tour.title} />
      <Footer />
    </main>
  );
}
