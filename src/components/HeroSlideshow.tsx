'use client';
import { useState, useEffect } from 'react';

interface HeroSlideshowProps {
  isFr?: boolean;
}

const images = [
  '/images/erg-chebbi-sunset-dunes.webp',
  '/images/meknes-bab-mansour.webp',
  '/images/toubkal-mountain-hike.webp',
];

export default function HeroSlideshow({ isFr = false }: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const headline = isFr ? 'Explorez le Maroc avec Y&ZLand' : 'Explore Morocco with Y&ZLand';
  const subtitle = isFr
    ? 'Voyages de luxe à travers déserts, montagnes et villes.'
    : 'Luxury journeys across deserts, mountains, and cities.';
  const cta = isFr ? 'Découvrir Nos Circuits' : 'Discover Our Tours';

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2s] ease-in-out"
          style={{
            backgroundImage: `url('${img}')`,
            opacity: i === current ? 1 : 0,
            animation: i === current ? 'heroZoom 8s ease-out forwards' : 'none',
          }}
        />
      ))}

      {/* Dégradé subtil pour relier l'image à la tablette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,25,35,0.92)] via-[rgba(20,25,35,0.4)] to-transparent z-10" />

      {/* Tablette de contenu protégée en bas */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 pb-10 pt-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md max-w-xl mx-auto">
            {subtitle}
          </p>
          <a
            href={isFr ? '/fr/tours.html' : '/tours.html'}
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-2xl hover:scale-105"
          >
            {cta}
          </a>
        </div>
      </div>

      {/* Indicateurs de diapositive */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${i === current ? 'bg-amber-500 scale-125 shadow-lg' : 'bg-white/40 hover:bg-white/70'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
