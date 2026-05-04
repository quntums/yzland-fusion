import fs from 'fs';
import path from 'path';
import Footer from '@/components/Footer';

interface GuideData {
  slug: string;
  title: string;
  description: string;
  image?: string;
  content?: string;
}

function getAllGuides(): GuideData[] {
  const dir = path.join(process.cwd(), 'data/guides');
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  return files.map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')) as GuideData);
}

export default function GuidesPage() {
  const guides = getAllGuides();
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-4">Morocco Travel Guides</h1>
        <p className="text-gray-500 text-center mb-12">Expert local advice for your Moroccan adventure</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map(guide => (
            <a key={guide.slug} href={`/guides/${guide.slug}.html`} className="border rounded-xl p-6 hover:shadow-md transition block">
              {guide.image && <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover rounded-lg mb-4" />}
              <h2 className="text-xl font-semibold mb-2">{guide.title}</h2>
              <p className="text-gray-600 text-sm">{guide.description}</p>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
