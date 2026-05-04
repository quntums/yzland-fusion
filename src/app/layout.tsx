import './globals.css';
import Header from '@/components/Header';
import CookieConsent from '@/components/CookieConsent';

export const metadata = {
  title: 'Y&ZLand Tours – Premium Morocco Travel',
  description: 'Luxury Morocco tours: Sahara desert, Imperial cities, Chefchaouen, Atlas Mountains, and the 9‑Day Grand Tour.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
