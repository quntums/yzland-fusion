import Link from 'next/link';
import { toFrenchSlug } from '@/lib/slugMap';

interface MobileTourCardProps {
  slug: string;
  title: string;
  image: string;
  price: number;
  duration: string;
  highlights?: string[];
  isPopular?: boolean;
  isFrench?: boolean;
}

export default function MobileTourCard({ slug, title, image, price, duration, highlights, isPopular, isFrench }: MobileTourCardProps) {
  const whatsappMsg = encodeURIComponent(`I'm interested in the ${title} tour. Can you share availability?`);
  const basePath = isFrench ? '/fr' : '';
  const resolvedSlug = isFrench ? toFrenchSlug(slug) : slug;
  const href = `${basePath}/tours/${resolvedSlug}.html`;

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
      <Link href={href}>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4 space-y-2">
        {isPopular && (
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
            ⭐ Most Popular
          </span>
        )}
        <h3 className="text-lg font-semibold text-[#C9A45C]">{title}</h3>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>🕒 {duration}</span>
          <span>💰 From €{price}</span>
        </div>
        {highlights && highlights.length > 0 && (
          <ul className="text-sm text-gray-600 space-y-1">
            {highlights.slice(0, 2).map((h, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-amber-500">•</span>
                {h}
              </li>
            ))}
          </ul>
        )}
        <a
          href={`https://wa.me/212619852591?text=${whatsappMsg}`}
          target="_blank"
          className="block w-full text-center bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-2 rounded-xl text-sm"
        >
          💬 Book Now
        </a>
      </div>
    </div>
  );
}
