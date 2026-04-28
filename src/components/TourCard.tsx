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
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition bg-white">
      <img src={images[0] || '/placeholder.jpg'} alt={title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{duration}</p>
        <p className="text-lg font-bold mt-2">From €{price_from} / person</p>
        <ul className="mt-2 space-y-1">
          {highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="text-gray-500 text-sm">✓ {h}</li>
          ))}
        </ul>
        <div className="mt-4 flex gap-2">
          <Link href={`/tours/${slug}`} className="flex-1 text-center bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
            View Details
          </Link>
          <Link href="/contact" className="flex-1 text-center border border-green-600 text-green-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-50 transition">
            Book Now
          </Link>
        </div>
        <p className="text-xs text-orange-600 mt-2 text-center">Limited spots available</p>
      </div>
    </div>
  );
}
