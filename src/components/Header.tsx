import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <Image src="/yzland-logo.png" alt="YZLand Tours" width={120} height={48} className="h-12 w-auto" priority />
          <span className="font-semibold text-gray-800 hidden sm:block text-lg">YZLand Tours</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 text-sm font-medium">
          <Link href="/" className="text-gray-600 hover:text-amber-700 transition">Home</Link>
          <Link href="/tours" className="text-gray-600 hover:text-amber-700 transition">Tours</Link>
          <Link href="/contact" className="text-gray-600 hover:text-amber-700 transition">Contact</Link>
          <a href="https://wa.me/212619852591" target="_blank" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition whitespace-nowrap">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
