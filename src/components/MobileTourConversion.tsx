'use client';
import { useState } from 'react';
import { Testimonial } from '@/lib/testimonials';

interface MobileTourConversionProps {
  tour: {
    title: string;
    price_from: number;
    duration: string;
    highlights: string[];
    images?: string[];
    itinerary?: {
      day: number;
      date?: string;
      city?: string;
      title?: string;
      desc?: string;
    }[];
    whatsapp_message?: string;
    departures?: {
      date: string;
      spots: number;
      link: string;
    }[];
  };
  testimonials: Testimonial[];
  slug: string;
  isFr?: boolean;
}

export default function MobileTourConversion({ tour, testimonials, slug, isFr = false }: MobileTourConversionProps) {
  const whatsappMsg = encodeURIComponent(
    tour.whatsapp_message || `I'm interested in ${tour.title}`
  );
  const departures = tour.departures || [];
  const fr = isFr;

  const track = (event: string) => {
    const raw = localStorage.getItem('yzland-analytics');
    const log: Array<{ ts: number; event: string; payload?: Record<string, unknown> }> = raw ? JSON.parse(raw) : [];
    log.push({ ts: Date.now(), event, payload: { tour: tour.title, path: window.location.pathname } });
    localStorage.setItem('yzland-analytics', JSON.stringify(log.slice(-200)));
  };

  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const toggleDay = (day: number) => {
    const newDay = expandedDay === day ? null : day;
    setExpandedDay(newDay);
    if (newDay !== null) track('itinerary_accordion_open');
  };

  return (
    <div className="lg:hidden max-w-[640px] mx-auto px-4 py-6 space-y-6">
      {tour.images && tour.images.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {tour.images.slice(0, 4).map((img, i) => (
            <img key={i} src={img} alt={`${tour.title} - image ${i + 1}`} className="w-full h-32 object-cover rounded-xl" loading="lazy" />
          ))}
        </div>
      )}

      {/* 1. Hero Section */}
      <div className="text-center space-y-3">
        <h1 className="text-2xl font-bold text-[#C9A45C]">{tour.title}</h1>
        <p className="text-sm text-gray-500">{fr ? 'Circuit privé guidé avec un expert local' : 'Private guided journey with a local expert'}</p>
        <div className="flex justify-center gap-4 text-xs text-gray-600 font-medium">
          <span>🕒 {tour.duration}</span>
          <span>💰 {fr ? 'À partir de' : 'From'} €{tour.price_from}</span>
          <span>📍 {fr ? 'Marrakech' : 'Marrakech'}</span>
        </div>
        <a
          href={`https://wa.me/212619852591?text=${whatsappMsg}`}
          target="_blank"
          onClick={() => track('hero_cta_click')}
          className="inline-block w-full bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-3 rounded-xl text-base"
        >
          💬 {fr ? 'Vérifier la disponibilité sur WhatsApp' : 'Check Availability on WhatsApp'}
        </a>
        <p className="text-xs text-gray-400">{fr ? '✓ Réponse en moins d\'une heure • ✓ Sans engagement • ✓ Expert local' : '✓ Reply within 1 hour • ✓ No obligation • ✓ Local expert'}</p>
      </div>

      {/* 2. Trust Bar */}
      <div className="flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-900 bg-white p-3 rounded-xl">
        <span>✅ {fr ? 'Opérateur agréé' : 'Licensed operator'}</span>
        <span>👥 {fr ? '200+ voyageurs' : '200+ travelers'}</span>
        <span>🔒 {fr ? 'Circuits privés' : 'Private tours'}</span>
      </div>

      {/* 3. Highlights */}
      <div>
        <h3 className="text-lg font-semibold mb-2">{fr ? 'Points forts' : 'Highlights'}</h3>
        <ul className="list-disc list-inside text-sm text-gray-900 bg-white p-4 rounded-xl space-y-1">
          {tour.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>

      {/* 4. Mid‑Page CTA */}
      <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-2xl p-5 text-center space-y-3">
        <h3 className="text-lg font-semibold">{fr ? 'Vous voulez personnaliser ce circuit ?' : 'Want to customize this tour?'}</h3>
        <p className="text-sm text-gray-600">{fr ? 'Ajustez les dates, les hôtels ou les activités – nous adaptons tout pour vous.' : 'Adjust dates, hotels, or activities – we\'ll tailor it for you.'}</p>
        <a
          href={`https://wa.me/212619852591?text=${whatsappMsg}`}
          target="_blank"
          onClick={() => track('mid_cta_click')}
          className="inline-block w-full bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-3 rounded-xl text-base"
        >
          💬 {fr ? 'Demander sur WhatsApp' : 'Ask on WhatsApp'}
        </a>
        <p className="text-xs text-gray-400">{fr ? 'Sans engagement • Conseil gratuit' : 'No commitment • Free planning advice'}</p>
      </div>

      {/* 5. Collapsible Itinerary */}
      <div>
        <h3 className="text-lg font-semibold mb-2">{fr ? 'Itinéraire' : 'Itinerary'}</h3>
        <div className="space-y-2">
          {tour.itinerary?.map((day, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button onClick={() => toggleDay(idx)} className="w-full flex items-center justify-between p-3 text-left bg-gray-100 text-gray-900 font-medium">
                <span className="font-medium text-sm">{fr ? 'Jour' : 'Day'} {day.day}: {day.title}</span>
                <span>{expandedDay === idx ? '▲' : '▼'}</span>
              </button>
              {expandedDay === idx && (
                <div className="p-3 text-sm text-gray-900 bg-white">
                  {day.city && <p className="font-medium text-amber-700">{day.city}</p>}
                  <p>{day.desc}</p>
                  {day.date && <p className="text-gray-500 mt-1">{day.date}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 6. Quick Facts + CTA */}
      <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-2xl p-5 text-center space-y-3">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          <span>🕒 {tour.duration}</span>
          <span>💰 {fr ? 'À partir de' : 'From'} €{tour.price_from}</span>
          <span>📍 {fr ? 'Marrakech' : 'Marrakech'}</span>
        </div>
        <a
          href={`https://wa.me/212619852591?text=${whatsappMsg}`}
          target="_blank"
          onClick={() => track('quickfacts_cta_click')}
          className="inline-block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl text-base"
        >
          💬 {fr ? 'Réserver maintenant' : 'Book Now'}
        </a>
      </div>

      {/* 7. Testimonials */}
      <div>
        <h3 className="text-lg font-semibold mb-3">{fr ? 'Ce que disent les voyageurs' : 'What travelers say'}</h3>
        <div className="space-y-3">
          {testimonials.slice(0, 2).map((t, i) => (
            <blockquote key={i} className="text-sm italic text-gray-900 bg-white p-4 rounded-xl border border-gray-100">
              “{t.quote}”
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs text-gray-500">— {t.author}, {t.origin}</span>
                {t.rating && (
                  <span className="text-xs text-amber-500">{'★'.repeat(t.rating)}</span>
                )}
              </div>
              <span className="inline-block mt-1 text-xs text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                ✓ {fr ? 'Voyageur vérifié' : 'Verified traveler'}
              </span>
            </blockquote>
          ))}
        </div>
      </div>

      {/* 8. Objection Handling */}
      <div className="flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-700">
        <span>🔒 {fr ? 'Privé' : 'Private'}</span>
        <span>🎨 {fr ? 'Personnalisable' : 'Customizable'}</span>
        <span>💳 {fr ? 'Aucun acompte' : 'No upfront payment'}</span>
      </div>

      {/* 9. Final CTA */}
      <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-2xl p-5 text-center space-y-3">
        <h3 className="text-lg font-semibold">{fr ? 'Commencez à planifier votre voyage aujourd\'hui' : 'Start planning your trip today'}</h3>
        <a
          href={`https://wa.me/212619852591?text=${whatsappMsg}`}
          target="_blank"
          onClick={() => track('final_cta_click')}
          className="inline-block w-full bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-3 rounded-xl text-base"
        >
          💬 {fr ? 'Écrivez-nous sur WhatsApp' : 'Message Us on WhatsApp'}
        </a>
        <p className="text-xs text-gray-400">{fr ? '✓ Réponse rapide • ✓ Sans obligation' : '✓ Fast response • ✓ No obligation'}</p>
      </div>
    </div>
  );
}
