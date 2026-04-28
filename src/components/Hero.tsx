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
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-5xl font-bold leading-tight">{title}</h1>
        <p className="mt-6 text-xl text-white/90">{subtitle}</p>
        <div className="flex flex-wrap gap-6 text-sm text-white/80 mt-6 justify-center">
          <span>✔ Licensed Moroccan operator</span>
          <span>✔ Trusted by international travelers</span>
          <span>✔ Secure booking with deposit</span>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={ctaLink} className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-700 transition">
            {ctaText}
          </Link>
          <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-black transition">
            Ask a Question
          </Link>
        </div>
        <p className="mt-4 text-sm text-white/60">Limited spots available — Book now to secure your dates</p>
      </div>
    </section>
  );
}
