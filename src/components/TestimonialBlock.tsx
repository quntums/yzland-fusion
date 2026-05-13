import { Testimonial } from '@/lib/testimonials';

function renderStars(rating?: number) {
  if (!rating) return null;
  return (
    <div className="flex items-center gap-1 mt-2">
      {Array.from({ length: rating }, (_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

interface TestimonialBlockProps {
  testimonials: Testimonial[];
}

export default function TestimonialBlock({ testimonials }: TestimonialBlockProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-12 text-center tracking-wide">
          What Our Guests Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(0, 4).map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 italic">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.origin}</p>
                </div>
              </div>
              {renderStars(t.rating)}
              <span className="inline-block mt-2 text-xs text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                ✓ Verified traveler
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
