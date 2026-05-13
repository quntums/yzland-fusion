'use client';
import { useState, useEffect } from 'react';

interface HeroSlideshowProps {
  isFr?: boolean;
}

const images = [
  '/images/sahara-1.jpg',
  '/images/imperial-2.jpg',
  '/images/atlas-1.jpg',
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
            backgroundImage: `linear-gradient(rgba(46,64,99,0.55), rgba(46,64,99,0.30)), url('${img}')`,
            opacity: i === current ? 1 : 0,
            animation: i === current ? 'heroZoom 8s ease-out forwards' : 'none',
          }}
        />
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl tracking-tight">{headline}</h1>
        <p className="text-xl md:text-2xl mb-10 drop-shadow-lg max-w-2xl">{subtitle}</p>
        <a
          href={isFr ? '/fr/tours.html' : '/tours.html'}
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-10 py-5 rounded-xl text-xl transition-all shadow-2xl hover:scale-105"
        >
          {cta}
        </a>
      </div>
      <div className="absolute bottom-8 z-10 flex gap-3">
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
