import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import TourPage from '@/components/TourPage';
import { saharaTestimonials, imperialTestimonials, atlasTestimonials } from '@/lib/testimonials';

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

export default async function FrTourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getFrenchTour(slug);
  if (!tour) notFound();
  const testimonials = slug === 'sahara-3-jours' ? saharaTestimonials : slug === 'villages-imperiales' ? imperialTestimonials : atlasTestimonials;
  return <TourPage tour={tour} testimonials={testimonials} />;
}
