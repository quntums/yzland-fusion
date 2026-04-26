import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, image, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-6 text-lg">{subtitle}</p>
        <div className="flex flex-wrap gap-6 text-sm text-white/80 mt-4 justify-center">
          <span>✔ Licensed Moroccan operator</span>
          <span>✔ Trusted by international travelers</span>
          <span>✔ Secure booking with deposit</span>
        </div>
        <Link href={ctaLink} className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-xl shadow hover:opacity-90">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
