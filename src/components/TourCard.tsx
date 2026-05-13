import Link from 'next/link';
import { toFrenchSlug } from '@/lib/slugMap';

interface TourCardProps {
  slug: string;
  title: string;
  subtitle?: string;
  image: string;
  price?: number;
  highlights?: string[];
  duration?: string;
  isFrench?: boolean;
}

export default function TourCard({ slug, title, subtitle, image, price, highlights, duration, isFrench }: TourCardProps) {
  const basePath = isFrench ? '/fr' : '';
  const resolvedSlug = isFrench ? toFrenchSlug(slug) : slug;
  const href = `${basePath}/tours/${resolvedSlug}.html`;

  return (
    <Link href={href} className="group block bg-white border border-[#E8DDD0] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#C9A45C] group-hover:text-[#C96A3D] transition-colors">{title}</h3>
        {subtitle && <p className="text-sm text-[#7A8B74] mt-1 italic">{subtitle}</p>}
        {duration && <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{duration}</p>}
        {highlights && highlights.length > 0 && (
          <ul className="mt-3 space-y-1">
            {highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                <span className="text-[#C9A45C] mt-0.5">•</span>
                {h}
              </li>
            ))}
          </ul>
        )}
        {price && (
          <p className="mt-4 text-lg font-bold text-[#C96A3D]">From €{price}</p>
        )}
      </div>
    </Link>
  );
}
