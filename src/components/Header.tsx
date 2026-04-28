'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isFrench = pathname.startsWith('/fr');
  const switchUrl = isFrench ? pathname.replace('/fr', '') : '/fr' + pathname;
  const switchLabel = isFrench ? 'EN' : 'FR';
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={isFrench ? '/fr' : '/'} className="flex items-center gap-3 hover:opacity-80 transition">
          <img src="/yzland-logo.png" alt="YZLand Tours" style={{ height: '160px', width: 'auto' }} />
          <span className="font-semibold text-gray-800 hidden sm:block text-lg">YZLand Tours</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 text-sm font-medium">
          <Link href={isFrench ? '/fr' : '/'} className="text-gray-600 hover:text-amber-700 transition">{isFrench ? 'Accueil' : 'Home'}</Link>
          <Link href={isFrench ? '/fr/tours' : '/tours'} className="text-gray-600 hover:text-amber-700 transition">{isFrench ? 'Circuits' : 'Tours'}</Link>
          <Link href="/contact" className="text-gray-600 hover:text-amber-700 transition">Contact</Link>
          <a href={switchUrl} className="text-xs font-bold bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition">{switchLabel}</a>
          <a href="https://wa.me/212619852591" target="_blank" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition whitespace-nowrap">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
