'use client';
import { usePathname } from 'next/navigation';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useState } from 'react';
import { toFrenchSlug, toEnglishSlug } from '@/lib/slugMap';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const pathname = usePathname();
  const { trackWhatsAppClick, trackLanguageSwitch } = useAnalytics();
  const isFr = pathname.startsWith('/fr');
  const [drawerOpen, setDrawerOpen] = useState(false);

  let switchTarget = '/';
  if (pathname === '/' || pathname === '/index.html') {
    switchTarget = '/fr.html';
  } else if (pathname === '/fr' || pathname === '/fr.html') {
    switchTarget = '/';
  } else if (pathname === '/tours' || pathname === '/tours.html') {
    switchTarget = '/fr/tours.html';
  } else if (pathname === '/fr/tours' || pathname === '/fr/tours.html') {
    switchTarget = '/tours.html';
  } else if (pathname.startsWith('/tours/')) {
    const slug = pathname.replace(/^\/tours\//, '').replace('.html', '');
    switchTarget = `/fr/tours/${toFrenchSlug(slug)}.html`;
  } else if (pathname.startsWith('/fr/tours/')) {
    const slug = pathname.replace(/^\/fr\/tours\//, '').replace('.html', '');
    switchTarget = `/tours/${toEnglishSlug(slug)}.html`;
  } else if (pathname.startsWith('/guides/')) {
    switchTarget = pathname.replace('/guides/', '/fr/guides/');
  } else if (pathname.startsWith('/fr/guides/')) {
    switchTarget = pathname.replace('/fr/guides/', '/guides/');
  } else {
    switchTarget = isFr ? '/' : '/fr.html';
  }

  const handleLangSwitch = () => {
    trackLanguageSwitch(isFr ? 'fr' : 'en', isFr ? 'en' : 'fr');
    setDrawerOpen(false);
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick();
    setDrawerOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href={isFr ? '/fr.html' : '/'} className="flex items-center gap-2 hover:opacity-80 transition">
          <img
            src="/images/LOGO.webp"
            alt="Y&ZLand Tours"
            className="h-10 sm:h-40 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <a href={isFr ? '/fr.html' : '/'} className="text-gray-600 hover:text-amber-700 transition whitespace-nowrap">
            {isFr ? 'Accueil' : 'Home'}
          </a>
          <a href={isFr ? '/fr/tours.html' : '/tours.html'} className="text-gray-600 hover:text-amber-700 transition whitespace-nowrap">
            {isFr ? 'Circuits' : 'Tours'}
          </a>
          <a href={isFr ? '/fr/guides.html' : '/guides.html'} className="text-gray-600 hover:text-amber-700 transition whitespace-nowrap">
            {isFr ? 'Guides' : 'Guides'}
          </a>
          <a href={isFr ? '/fr/contact.html' : '/contact.html'} className="text-gray-600 hover:text-amber-700 transition whitespace-nowrap">
            Contact
          </a>
          <a
            href={switchTarget}
            onClick={handleLangSwitch}
            className="text-xs font-bold bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition whitespace-nowrap"
          >
            {isFr ? 'EN' : 'FR'}
          </a>
          <a
            href="https://wa.me/212621405131"
            target="_blank"
            onClick={() => trackWhatsAppClick()}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition whitespace-nowrap"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Trigger – minimal, editorial */}
        <button
          className="lg:hidden text-[#7A8B74] hover:text-[#C96A3D] transition-colors text-sm font-medium tracking-wide uppercase"
          onClick={() => setDrawerOpen(true)}
          aria-label="Menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className="lg:hidden">
        <MobileDrawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          isFr={isFr}
          switchTarget={switchTarget}
          onLangSwitch={handleLangSwitch}
          onWhatsAppClick={handleWhatsApp}
        />
      </div>
    </header>
  );
}
