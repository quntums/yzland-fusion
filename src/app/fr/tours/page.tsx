import fs from 'fs';
import path from 'path';
import TourCard from '@/components/TourCard';
import Footer from '@/components/Footer';

function getFrenchTours() {
  const dir = path.join(process.cwd(), 'data/fr');
  const files = fs.readdirSync(dir).filter((f: string) => f.endsWith('.json'));
  return files.map((f: string) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
}

export default function FrToursPage() {
  const tours = getFrenchTours();

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Circuits</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour: any) => (
            <TourCard
              key={tour.slug}
              slug={tour.slug}
              title={tour.title}
              image={tour.images?.[0] || '/placeholder.webp'}
              price={tour.price_from}
              duration={tour.duration}
              highlights={tour.highlights}
              isFrench={true}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
