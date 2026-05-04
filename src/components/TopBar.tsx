import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white text-xs py-2 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-2">
          <span className="bg-green-600 w-2 h-2 rounded-full animate-pulse"></span>
          24/7 WhatsApp: +212 6 19 85 25 91
        </span>
        <span className="hidden sm:block">Licensed Moroccan Tour Operator</span>
        <Link href="/contact" className="hover:text-amber-400 transition">Email Us</Link>
      </div>
    </div>
  );
}
