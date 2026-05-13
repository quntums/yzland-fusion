import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import TourPage from '@/components/TourPage';
import { saharaTestimonials, imperialTestimonials, atlasTestimonials, defaultFrenchTestimonials } from '@/lib/testimonials';
import type { Metadata } from 'next';

function getFrenchTour(slug: string) {
  const dir = path.join(process.cwd(), 'data/fr');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  for (const f of files) {
    const tour = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    if (tour.slug === slug) return tour;
  }
  return null;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'data/fr');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  return files.map(f => {
    const tour = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    return { slug: tour.slug };
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getFrenchTour(slug);
  if (!tour) return {};
  return {
    title: `${tour.title} – Y&ZLand Tours`,
    description: `Réservez ${tour.title} avec Y&ZLand Tours, opérateur marocain agréé. Inclus: ${tour.highlights?.slice(0,3).join(', ')}. À partir de €${tour.price_from}.`,
    openGraph: {
      title: `${tour.title} – Y&ZLand Tours`,
      description: `Circuit privé guidé au Maroc. ${tour.duration}. À partir de €${tour.price_from}.`,
      images: tour.images?.[0] ? [tour.images[0]] : [],
    },
  };
}

export default async function FrTourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getFrenchTour(slug);
  if (!tour) notFound();
  const testimonials = slug === 'sahara-3-jours' ? saharaTestimonials : slug === 'villes-imperiales' ? imperialTestimonials : slug === 'escapade-atlas' ? atlasTestimonials : defaultFrenchTestimonials;
  return <TourPage tour={tour} slug={slug} testimonials={testimonials} isFr={true} />;
}
