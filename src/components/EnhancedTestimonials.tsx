import { Testimonial } from '@/lib/testimonials';

export default function EnhancedTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-12 tracking-wide">
          What Our Guests Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <div key={i} className="bg-[#FCFAF7] p-8 rounded-2xl shadow-sm border border-gray-100 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.origin}</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 italic">
                “{t.quote}”
              </p>
              {t.rating && (
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.rating }, (_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
              )}
              <span className="inline-block text-xs text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                ✓ Verified traveler
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
