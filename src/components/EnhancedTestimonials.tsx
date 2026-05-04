import { Testimonial } from '@/lib/testimonials';

interface Props {
  testimonials: Testimonial[];
}

export default function EnhancedTestimonials({ testimonials }: Props) {
  return (
    <section className="bg-[#FCFAF7] py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E4063] mb-12">
          What Our Guests Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <blockquote key={i} className="flex flex-col items-center">
              <p className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-4">
                “{t.quote}”
              </p>
              <footer className="text-sm text-[#7A8B74] font-medium">
                — {t.author}, {t.origin}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
