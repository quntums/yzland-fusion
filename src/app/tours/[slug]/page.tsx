import { getTourBySlug, getAllSlugs } from '@/lib/tours';
import { saharaTestimonials, imperialTestimonials, atlasTestimonials, defaultTestimonials } from '@/lib/testimonials';
import TourPage from '@/components/TourPage';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

function getTestimonialsForTour(slug: string) {
  if (slug === 'sahara-3-days') return saharaTestimonials;
  if (slug === 'imperial-cities') return imperialTestimonials;
  if (slug === 'atlas-escape') return atlasTestimonials;
  if (slug === 'morocco-grand-tour') {
    const tour = getTourBySlug('morocco-grand-tour');
    if (tour && tour.testimonials) return tour.testimonials;
  }
  return defaultTestimonials;
}

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return {
    title: `${tour.title} – Y&ZLand Tours`,
    description: `Book the ${tour.title} with Y&ZLand Tours, a licensed Moroccan operator. Includes: ${tour.highlights?.slice(0, 3).join(', ')}. From €${tour.price_from}.`,
    openGraph: {
      title: `${tour.title} – Y&ZLand Tours`,
      description: `Private guided tour in Morocco. ${tour.duration}. From €${tour.price_from}.`,
      images: tour.images?.[0] ? [tour.images[0]] : [],
    },
  };
}

export default async function TourPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();
  return <TourPage tour={tour} slug={slug} testimonials={getTestimonialsForTour(slug)} />;
}
