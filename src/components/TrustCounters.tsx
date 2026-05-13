'use client';
import { useEffect, useState, useRef } from 'react';

interface TrustCountersProps {
  isFr?: boolean;
}

export default function TrustCounters({ isFr = false }: TrustCountersProps) {
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState({ travelers: 0, reviews: 0, tours: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const targets = { travelers: 200, reviews: 98, tours: 7 };
    const duration = 1500;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setCounts({
        travelers: Math.floor(progress * targets.travelers),
        reviews: Math.floor(progress * targets.reviews),
        tours: Math.floor(progress * targets.tours),
      });
      if (progress >= 1) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [started]);

  const t = {
    travelers: isFr ? 'Voyageurs Accompagnés' : 'Travelers Hosted',
    reviews: isFr ? 'Avis 5 Étoiles' : '5‑Star Reviews',
    tours: isFr ? 'Circuits Proposés' : 'Curated Tours',
  };

  return (
    <div ref={ref} className="bg-[#FCFAF7] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-10 sm:gap-16 text-center">
        <div>
          <p className="text-4xl sm:text-5xl font-bold text-[#C96A3D]">
            {counts.travelers}+
          </p>
          <p className="text-sm text-gray-600 mt-2">{t.travelers}</p>
        </div>
        <div>
          <p className="text-4xl sm:text-5xl font-bold text-[#C96A3D]">
            {counts.reviews}%
          </p>
          <p className="text-sm text-gray-600 mt-2">{t.reviews}</p>
        </div>
        <div>
          <p className="text-4xl sm:text-5xl font-bold text-[#C96A3D]">
            {counts.tours}
          </p>
          <p className="text-sm text-gray-600 mt-2">{t.tours}</p>
        </div>
      </div>
    </div>
  );
}
