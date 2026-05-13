// Centralized EN ↔ FR slug mapping
// Use: import { toFrenchSlug, toEnglishSlug } from '@/lib/slugMap';

const enToFr: Record<string, string> = {
  'sahara-3-days': 'sahara-3-jours',
  'imperial-cities': 'villes-imperiales',
  'atlas-escape': 'escapade-atlas',
  'chefchaouen-blue-pearl': 'chefchaouen-perle-bleue',
  'akchour-waterfalls': 'akchour-cascades',
  'marrakech-agafay': 'marrakech-agafay',
  'morocco-grand-tour': 'maroc-grand-tour',
};

const frToEn: Record<string, string> = {
  'sahara-3-jours': 'sahara-3-days',
  'villes-imperiales': 'imperial-cities',
  'escapade-atlas': 'atlas-escape',
  'chefchaouen-perle-bleue': 'chefchaouen-blue-pearl',
  'akchour-cascades': 'akchour-waterfalls',
  'marrakech-agafay': 'marrakech-agafay',
  'maroc-grand-tour': 'morocco-grand-tour',
};

export function toFrenchSlug(enSlug: string): string {
  return enToFr[enSlug] || enSlug;
}

export function toEnglishSlug(frSlug: string): string {
  return frToEn[frSlug] || frSlug;
}
