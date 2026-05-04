import fs from 'fs';
import path from 'path';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface GuideData {
  slug: string;
  title: string;
  description: string;
  image?: string;
  content?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

function getGuide(slug: string): GuideData | null {
  const dir = path.join(process.cwd(), 'data/guides');
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  for (const f of files) {
    const guide = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')) as GuideData;
    if (guide.slug === slug) return guide;
  }
  return null;
}

export function generateStaticParams() {
  const dir = path.join(process.cwd(), 'data/guides');
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  return files.map(f => {
    const guide = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
    return { slug: guide.slug };
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.seo?.metaTitle || guide.title,
    description: guide.seo?.metaDescription || guide.description,
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
        <p className="text-gray-500 mb-8">{guide.description}</p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: guide.content?.replace(/\n/g, '<br/>') || '' }} />
      </main>
      <Footer />
    </>
  );
}
