'use client';
import { Testimonial } from '@/lib/testimonials';
import ItineraryBlock from './ItineraryBlock';
import IncludesBlock from './IncludesBlock';
import DeparturesBlock from './DeparturesBlock';
import TestimonialBlock from './TestimonialBlock';
import Footer from '@/components/Footer';
import MobileTourConversion from './MobileTourConversion';
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
    itinerary?: { day: number; date?: string; city?: string; title?: string; desc?: string; }[];
    cta: { whatsapp: boolean; form: boolean; payment_link: string; };
    whatsapp_message?: string;
    subtitle?: string;
    departures?: { date: string; spots: number; link: string; }[];
  };
  testimonials: Testimonial[];
  slug: string;
  isFr?: boolean;
}

const tourCopy: Record<string, any> = {
  'sahara-3-days': { heroMicrocopy: 'Plan your Sahara experience with a local expert', midHeadline: 'Customize your desert experience', midMicrocopy: 'Adjust camp type, route, or duration – we’ll tailor it for you.', endHeadline: 'Start planning your Sahara adventure', endMicrocopy: 'Talk with a real Morocco expert today. No upfront payment required to inquire.' },
  'imperial-cities': { heroMicrocopy: 'Discover Morocco’s history with a private guide', midHeadline: 'Customize your Imperial Cities tour', midMicrocopy: 'Change cities, pace, or accommodation to match your travel style.', endHeadline: 'Build your perfect cultural itinerary', endMicrocopy: 'Ask our local specialists – immediate, no‑obligation advice.' },
  'atlas-escape': { heroMicrocopy: 'Escape to the Atlas with trusted local guides', midHeadline: 'Adjust your mountain experience', midMicrocopy: 'Modify hiking difficulty, meals, or stops along the way.', endHeadline: 'Plan your Atlas retreat', endMicrocopy: 'Get a personalised plan in minutes – no commitment.' },
  'chefchaouen-blue-pearl': { heroMicrocopy: 'Explore the Blue City at your own pace', midHeadline: 'Personalize your Chefchaouen getaway', midMicrocopy: 'Add extra nights, include a cooking class, or explore nearby Akchour.', endHeadline: 'Plan your blue city escape', endMicrocopy: 'Speak with a local who knows every shade of blue.' },
  'akchour-waterfalls': { heroMicrocopy: 'Discover hidden waterfalls with local experts', midHeadline: 'Adjust hiking level and timing', midMicrocopy: 'Make the trek easier or more challenging – your choice.', endHeadline: 'Start your Akchour adventure', endMicrocopy: 'Quick answers from our mountain guides. No strings attached.' },
  'marrakech-agafay': { heroMicrocopy: 'Combine city energy with desert calm', midHeadline: 'Customize your Marrakech escape', midMicrocopy: 'Add a balloon ride, spa treatment, or extend your desert dinner.', endHeadline: 'Plan your Agafay experience', endMicrocopy: 'Your Marrakech expert is just a WhatsApp message away.' },
  'morocco-grand-tour': { heroMicrocopy: 'A complete Morocco journey, fully customizable', midHeadline: 'Tailor your 9‑day itinerary to your travel style', midMicrocopy: 'Adjust cities, hotels, or add exclusive experiences.', endHeadline: 'Start planning your full Morocco experience', endMicrocopy: 'Talk with our lead curator – no fee, no pressure.' },
};

const tourCopyFR: Record<string, any> = {
  'sahara-3-jours': { heroMicrocopy: 'Planifiez votre expérience saharienne avec un expert local', midHeadline: 'Personnalisez votre expérience dans le désert', midMicrocopy: 'Ajustez le type de camp, l\'itinéraire ou la durée – nous nous adaptons à vous.', endHeadline: 'Commencez à planifier votre aventure saharienne', endMicrocopy: 'Parlez à un véritable expert du Maroc aujourd\'hui. Aucun acompte requis pour se renseigner.' },
  'villes-imperiales': { heroMicrocopy: 'Découvrez l\'histoire du Maroc avec un guide privé', midHeadline: 'Personnalisez votre circuit des villes impériales', midMicrocopy: 'Modifiez les villes, le rythme ou l\'hébergement selon votre style.', endHeadline: 'Construisez votre itinéraire culturel parfait', endMicrocopy: 'Demandez à nos spécialistes locaux – conseils immédiats et sans engagement.' },
  'escapade-atlas': { heroMicrocopy: 'Évadez-vous dans l\'Atlas avec des guides locaux de confiance', midHeadline: 'Ajustez votre expérience en montagne', midMicrocopy: 'Modifiez la difficulté des randonnées, les repas ou les étapes.', endHeadline: 'Planifiez votre retraite dans l\'Atlas', endMicrocopy: 'Obtenez un plan personnalisé en quelques minutes – sans engagement.' },
  'chefchaouen-perle-bleue': { heroMicrocopy: 'Explorez la Ville Bleue à votre rythme', midHeadline: 'Personnalisez votre escapade à Chefchaouen', midMicrocopy: 'Ajoutez des nuits supplémentaires, un cours de cuisine ou explorez Akchour.', endHeadline: 'Planifiez votre évasion bleue', endMicrocopy: 'Parlez à un local qui connaît chaque nuance de bleu.' },
  'akchour-cascades': { heroMicrocopy: 'Découvrez des cascades cachées avec des experts locaux', midHeadline: 'Ajustez le niveau de randonnée et les horaires', midMicrocopy: 'Rendez la randonnée plus facile ou plus difficile – à vous de choisir.', endHeadline: 'Commencez votre aventure à Akchour', endMicrocopy: 'Réponses rapides de nos guides de montagne. Sans engagement.' },
  'marrakech-agafay': { heroMicrocopy: 'Combinez l\'énergie de la ville et le calme du désert', midHeadline: 'Personnalisez votre escapade à Marrakech', midMicrocopy: 'Ajoutez un vol en montgolfière, un soin spa ou prolongez votre dîner dans le désert.', endHeadline: 'Planifiez votre expérience à Agafay', endMicrocopy: 'Votre expert de Marrakech est à un message WhatsApp.' },
  'maroc-grand-tour': { heroMicrocopy: 'Un voyage complet au Maroc, entièrement personnalisable', midHeadline: 'Adaptez votre itinéraire de 9 jours à votre style de voyage', midMicrocopy: 'Ajustez les villes, les hôtels ou ajoutez des expériences exclusives.', endHeadline: 'Commencez à planifier votre expérience complète au Maroc', endMicrocopy: 'Parlez à notre conservateur principal – sans frais, sans pression.' },
};

function CTABlock({ variant, tourTitle, heroMicrocopy, midHeadline, midMicrocopy, endHeadline, endMicrocopy, whatsappMsg, trackAndBook, isFr }: any) {
  const base = "rounded-2xl p-6 sm:p-8 text-center shadow-sm bg-[#FCFAF7] border border-[#E8DDD0]";
  const btn = "inline-flex items-center gap-2 bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-base";
  const fr = isFr;
  if (variant === 'hero') return (
    <section className={`${base} mt-12`}>
      <h2 className="text-3xl font-bold text-[#C9A45C] mb-2">{tourTitle}</h2>
      {heroMicrocopy && <p className="text-gray-500 mb-4">{heroMicrocopy}</p>}
      <a href={`https://wa.me/212619852591?text=${whatsappMsg}`} target="_blank" onClick={trackAndBook} className={btn}><span>💬</span> {fr ? 'Vérifier la disponibilité' : 'Check Availability'}</a>
      <div className="mt-4 space-y-1 text-sm text-[#6B6B6B]"><p>✓ {fr ? 'Réponse en moins d\'une heure' : 'Reply within 1 hour'}</p><p>✓ {fr ? 'Sans engagement' : 'No obligation'}</p><p>✓ {fr ? 'Expert local' : 'Local expert'}</p></div>
    </section>
  );
  if (variant === 'mid') return (
    <section className={`${base} mt-16`}>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{midHeadline}</h3>
      {midMicrocopy && <p className="text-gray-500 mb-4">{midMicrocopy}</p>}
      <a href={`https://wa.me/212619852591?text=${whatsappMsg}`} target="_blank" onClick={trackAndBook} className={btn}><span>💬</span> {fr ? 'Demander sur WhatsApp' : 'Ask on WhatsApp'}</a>
    </section>
  );
  return (
    <section className={`${base} mt-16`}>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{endHeadline}</h3>
      {endMicrocopy && <p className="text-gray-500 mb-4">{endMicrocopy}</p>}
      <a href={`https://wa.me/212619852591?text=${whatsappMsg}`} target="_blank" onClick={trackAndBook} className={btn}><span>💬</span> {fr ? 'Écrivez-nous sur WhatsApp' : 'Message Us on WhatsApp'}</a>
      <div className="mt-4 text-sm text-[#6B6B6B]"><p>✓ {fr ? 'Aucun acompte pour se renseigner' : 'No upfront payment to inquire'}</p><p>✓ {fr ? 'Réponse rapide (moins d\'une heure)' : 'Fast response (under 1 hour)'}</p></div>
    </section>
  );
}

export default function TourPage({ tour, testimonials, slug, isFr = false }: TourPageProps) {
  const { trackWhatsAppClick } = useAnalytics();
  const whatsappMsg = encodeURIComponent(tour.whatsapp_message || `I'm interested in ${tour.title}`);
  const departures = tour.departures || [];
  const copy = isFr ? (tourCopyFR[slug] || tourCopyFR['sahara-3-jours']) : (tourCopy[slug] || tourCopy['sahara-3-days']);
  const trackAndBook = () => trackWhatsAppClick(tour.title);

  return (
    <main>
      {/* Desktop */}
      <div className="hidden lg:block">
        {tour.images && tour.images.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {tour.images.map((img, i) => (
              <img key={i} src={img} alt={`${tour.title} - image ${i + 1}`} className="w-full h-64 object-cover rounded-xl" loading="lazy" />
            ))}
          </section>
        )}
        <CTABlock variant="hero" tourTitle={tour.title} heroMicrocopy={copy.heroMicrocopy} whatsappMsg={whatsappMsg} trackAndBook={trackAndBook} isFr={isFr} />
        <p className="text-center text-sm text-gray-400 mt-2">{isFr ? 'À partir de' : 'From'} €{tour.price_from} / {isFr ? 'personne' : 'person'} • {tour.duration}</p>
        {tour.itinerary && <ItineraryBlock itinerary={tour.itinerary} />}
        <CTABlock variant="mid" tourTitle={tour.title} midHeadline={copy.midHeadline} midMicrocopy={copy.midMicrocopy} whatsappMsg={whatsappMsg} trackAndBook={trackAndBook} isFr={isFr} />
        <IncludesBlock includes={tour.includes} />
        {departures.length > 0 && <DeparturesBlock departures={departures} />}
        <TestimonialBlock testimonials={testimonials} />
        <CTABlock variant="end" tourTitle={tour.title} endHeadline={copy.endHeadline} endMicrocopy={copy.endMicrocopy} whatsappMsg={whatsappMsg} trackAndBook={trackAndBook} isFr={isFr} />
      </div>
      {/* Mobile */}
      <MobileTourConversion tour={tour} testimonials={testimonials} slug={slug} isFr={isFr} />
      <Footer />
    </main>
  );
}
