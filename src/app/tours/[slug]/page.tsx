import { getTourBySlug, getAllSlugs } from '@/lib/tours';
import { saharaTestimonials, imperialTestimonials, atlasTestimonials, defaultTestimonials } from '@/lib/testimonials';
import TourPage from '@/components/TourPage';
import { notFound } from 'next/navigation';

function getTestimonialsForTour(slug: string) {
  if (slug === 'sahara-3-days') return saharaTestimonials;
  if (slug === 'imperial-cities') return imperialTestimonials;
  if (slug === 'atlas-escape') return atlasTestimonials;
  return defaultTestimonials;
}

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default async function TourPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();
  return <TourPage tour={tour} testimonials={getTestimonialsForTour(slug)} />;
}
