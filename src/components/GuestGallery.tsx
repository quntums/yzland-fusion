'use client';
import { useState } from 'react';

// Only authentic travel photos, no review screenshots
const photos = [
  { src: '/images/chefchaouen-tour-guide.jpeg', altEn: 'Youssef guiding travelers in Chefchaouen', altFr: 'Youssef guidant des voyageurs à Chefchaouen' },
  { src: '/images/group-hiking-photo.jpeg', altEn: 'Group hiking in Morocco', altFr: 'Groupe en randonnée au Maroc' },
  { src: '/images/group-photo-canyon.jpeg', altEn: 'Travelers at a canyon in Morocco', altFr: 'Voyageurs dans un canyon au Maroc' },
  { src: '/images/group-photo-canyon-2.jpeg', altEn: 'Group photo at Moroccan canyon', altFr: 'Photo de groupe dans un canyon marocain' },
  { src: '/images/group-tour-historic-site.jpeg', altEn: 'Group tour at historic site', altFr: 'Visite de groupe sur un site historique' },
  { src: '/images/group-on-trail.jpeg', altEn: 'Travelers on a trail', altFr: 'Voyageurs sur un sentier' },
  { src: '/images/man-in-blue-city.jpeg', altEn: 'Traveler in Chefchaouen blue medina', altFr: 'Voyageur dans la médina bleue de Chefchaouen' },
  { src: '/images/men-walking-blue-alley.jpeg', altEn: 'Travelers walking through blue alley', altFr: 'Voyageurs marchant dans une ruelle bleue' },
  { src: '/images/people-cooking-together.jpeg', altEn: 'Guests cooking together in Morocco', altFr: 'Invités cuisinant ensemble au Maroc' },
  { src: '/images/two-men-on-bus.jpeg', altEn: 'Travelers on bus in Morocco', altFr: 'Voyageurs dans un bus au Maroc' },
  { src: '/images/two-men-smiling-together.jpeg', altEn: 'Travelers smiling together', altFr: 'Voyageurs souriant ensemble' },
  { src: '/images/two-people-outdoor-selfie.jpeg', altEn: 'Travelers taking outdoor selfie', altFr: 'Voyageurs prenant un selfie en plein air' },
];

export default function GuestGallery({ isFr = false }: { isFr?: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);
  const title = isFr ? 'Expériences Réelles, Personnes Réelles' : 'Real Experiences, Real People';
  const subtitle = isFr
    ? 'Chaque voyage est personnel. Voici des moments capturés avec des invités qui ont fait confiance à Y&ZLand pour leur montrer le Maroc dont ils rêvaient.'
    : 'Every journey is personal. Here are moments captured with guests who trusted Y&ZLand to show them the Morocco they dreamed of.';

  return (
    <section className="py-16 sm:py-20 bg-[#F6F0E8]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4 text-center tracking-wide">{title}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{subtitle}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-sm cursor-pointer" onClick={() => setSelected(photo.src)}>
              <img
                src={photo.src}
                alt={isFr ? photo.altFr : photo.altEn}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 text-white text-3xl font-bold" onClick={() => setSelected(null)} aria-label="Close">×</button>
          <img src={selected} alt="Enlarged guest photo" className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
