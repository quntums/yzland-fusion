'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TourCardProps {
  slug: string;
  title: string;
  image: string;
  price_from: number;
  duration: string;
  highlights: string[];
}

export default function TourCard({ slug, title, image, price_from, duration, highlights }: TourCardProps) {
  const pathname = usePathname();
  const isFrench = pathname.startsWith('/fr');
  const link = isFrench ? `/fr/tours/${slug}` : `/tours/${slug}`;
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <div className="flex gap-4 text-sm text-gray-500 mb-3"><span>⏱ {duration}</span><span className="font-semibold text-amber-700">€{price_from}</span></div>
        <ul className="text-sm text-gray-600 mb-4 space-y-1">{highlights.slice(0,3).map((h,i)=><li key={i} className="flex items-start gap-2"><span className="text-amber-500">✓</span>{h}</li>)}</ul>
        <Link href={link} className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 rounded-lg transition-colors text-sm">{isFrench ? 'Voir le circuit' : 'View Tour'}</Link>
      </div>
    </div>
  );
}
