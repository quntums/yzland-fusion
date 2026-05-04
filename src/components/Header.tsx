'use client';
import { usePathname } from 'next/navigation';
import { useAnalytics } from '@/hooks/useAnalytics';

const slugMap: Record<string, string> = {
  'sahara-3-days': 'sahara-3-jours',
  'imperial-cities': 'villes-imperiales',
  'atlas-escape': 'escapade-atlas',
  'chefchaouen-blue-pearl': 'chefchaouen-perle-bleue',
  'akchour-waterfalls': 'akchour-cascades',
  'marrakech-agafay': 'marrakech-agafay',
  'morocco-grand-tour': 'maroc-grand-tour',
  'maroc-grand-tour': 'morocco-grand-tour',
  'sahara-3-jours': 'sahara-3-days',
  'villes-imperiales': 'imperial-cities',
  'escapade-atlas': 'atlas-escape',
  'chefchaouen-perle-bleue': 'chefchaouen-blue-pearl',
  'akchour-cascades': 'akchour-waterfalls',
};

export default function Header() {
  let pathname = usePathname();
  const { trackWhatsAppClick, trackLanguageSwitch } = useAnalytics();

  if (pathname.endsWith('/') && pathname !== '/') {
    pathname = pathname.slice(0, -1);
  }

  const isFrench = pathname.startsWith('/fr');
  const homeLink = isFrench ? '/fr.html' : '/';
  const toursLink = isFrench ? '/fr/tours.html' : '/tours.html';
  const guidesLink = isFrench ? '/fr/guides.html' : '/guides.html';

  let switchUrl = '/';
  if (isFrench) {
    const enPath = pathname.replace(/^\/fr/, '') || '/';
    if (enPath === '/' || enPath === '/index.html') {
      switchUrl = '/';
    } else if (enPath === '/tours' || enPath === '/tours.html') {
      switchUrl = '/tours.html';
    } else if (enPath.startsWith('/tours/')) {
      const slug = enPath.replace('/tours/', '').replace('.html', '');
      const enSlug = slugMap[slug] || slug;
      switchUrl = `/tours/${enSlug}.html`;
    } else {
      switchUrl = '/';
    }
  } else {
    if (pathname === '/' || pathname === '/index.html') {
      switchUrl = '/fr.html';
    } else if (pathname === '/tours' || pathname === '/tours.html') {
      switchUrl = '/fr/tours.html';
    } else if (pathname.startsWith('/tours/')) {
      const slug = pathname.replace('/tours/', '').replace('.html', '');
      const frSlug = slugMap[slug] || slug;
      switchUrl = `/fr/tours/${frSlug}.html`;
    } else {
      switchUrl = '/fr.html';
    }
  }

  const switchLabel = isFrench ? 'EN' : 'FR';

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-2">
        <a href={homeLink} className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition flex-shrink-0">
          <img
            src="/images/LOGO.jpeg"
            alt="Y&ZLand Tours"
            className="h-14 sm:h-40 w-auto object-contain flex-shrink-0"
          />
        </a>
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm font-medium flex-wrap justify-end">
          <a href={homeLink} className="text-gray-600 hover:text-amber-700 transition whitespace-nowrap">
            {isFrench ? 'Accueil' : 'Home'}
          </a>
          <a href={toursLink} className="text-gray-600 hover:text-amber-700 transition whitespace-nowrap">
            {isFrench ? 'Circuits' : 'Tours'}
          </a>
          <a href={guidesLink} className="text-gray-600 hover:text-amber-700 transition whitespace-nowrap">
            {isFrench ? 'Guides' : 'Guides'}
          </a>
          <a href="/contact.html" className="text-gray-600 hover:text-amber-700 transition whitespace-nowrap">
            Contact
          </a>
          <a
            href={switchUrl}
            onClick={() => trackLanguageSwitch(isFrench ? 'fr' : 'en', isFrench ? 'en' : 'fr')}
            className="text-[10px] sm:text-xs font-bold bg-gray-100 hover:bg-gray-200 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded transition whitespace-nowrap"
          >
            {switchLabel}
          </a>
          <a
            href="https://wa.me/212619852591"
            target="_blank"
            onClick={() => trackWhatsAppClick()}
            className="bg-green-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-green-700 transition whitespace-nowrap"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
