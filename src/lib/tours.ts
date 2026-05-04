import fs from 'fs';
import path from 'path';

export interface ItineraryDay {
  day: number;
  date?: string;
  city?: string;
  title?: string;
  desc?: string;
}

export interface TourData {
  description?: string;
  slug: string;
  title: string;
  price_from: number;
  duration: string;
  route: string[];
  highlights: string[];
  includes: string[];
  images: string[];
  itinerary?: ItineraryDay[];
  testimonials?: {
    quote: string;
    author: string;
    origin: string;
  }[];
  cta: {
    whatsapp: boolean;
    form: boolean;
    payment_link: string;
  };
}

export function getAllTours(): TourData[] {
  const dataDir = path.join(process.cwd(), 'data');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
  return files.map(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
    return JSON.parse(content) as TourData;
  });
}

export function getTourBySlug(slug: string): TourData | null {
  const tours = getAllTours();
  return tours.find(t => t.slug === slug) || null;
}

export function getAllSlugs(): string[] {
  return getAllTours().map(t => t.slug);
}
