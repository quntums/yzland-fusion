'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isFrench = pathname.startsWith('/fr');
  const privacyHref = isFrench ? '/fr/privacy.html' : '/privacy.html';
  const privacyLabel = isFrench ? 'Politique de confidentialité' : 'Privacy Policy';
  const cookieLabel = isFrench ? 'Paramètres des cookies' : 'Cookie Settings';

  const openCookieSettings = () => {
    window.dispatchEvent(new Event('openCookieSettings'));
  };

  return (
    <footer className="border-t mt-16 py-8 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Y&ZLand Tours. All rights reserved.</p>
      <p className="mt-1">Licensed Moroccan tour operator | Premium travel experiences</p>
      <p className="mt-1 text-xs text-gray-500">Engineered by Quantum Shift</p>
      <div className="mt-3 flex justify-center gap-6">
        <Link href={privacyHref} className="hover:text-amber-700 transition underline">
          {privacyLabel}
        </Link>
        <button onClick={openCookieSettings} className="hover:text-amber-700 transition underline cursor-pointer">
          {cookieLabel}
        </button>
      </div>
    </footer>
  );
}
 
