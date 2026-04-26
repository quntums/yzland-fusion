import { getTourBySlug, getAllSlugs } from '@/lib/tours';
import { defaultTestimonials } from '@/lib/testimonials';
import TourPage from '@/components/TourPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default async function TourPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();
  return <TourPage tour={tour} testimonials={defaultTestimonials} />;
}
