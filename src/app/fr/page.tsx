import fs from 'fs';
import path from 'path';
import TourCard from '@/components/TourCard';

function getFrenchTours() {
  const dir = path.join(process.cwd(), 'data/fr');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  return files.map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
}

export default function FrHome() {
  const tours = getFrenchTours();
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Découvrez le Maroc Authentique</h1>
      <p className="text-center text-gray-500 mb-10">Dunes du Sahara · Villes Impériales · Sommets de l'Atlas</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour: any) => (
          <TourCard key={tour.slug} slug={tour.slug} title={tour.title} image={tour.images?.[0] || '/placeholder.jpg'} price_from={tour.price_from} duration={tour.duration} highlights={tour.highlights} />
        ))}
      </div>
    </main>
  );
}
