import Link from 'next/link';

interface TourCardProps {
  slug: string;
  title: string;
  price_from: number;
  duration: string;
  highlights: string[];
  images: string[];
}

export default function TourCard({ slug, title, price_from, duration, highlights, images }: TourCardProps) {
  return (
    <Link href={`/tours/${slug}`} className="border rounded-xl overflow-hidden hover:shadow-lg transition block">
      <img src={images[0] || '/placeholder.jpg'} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{duration}</p>
        <p className="text-lg font-bold mt-2">From €{price_from} / person</p>
        <ul className="mt-2 space-y-1">
          {highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="text-gray-500 text-sm">✓ {h}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
