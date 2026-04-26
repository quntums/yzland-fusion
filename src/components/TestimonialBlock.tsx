import { Testimonial } from '@/lib/testimonials';

interface TestimonialBlockProps {
  testimonials: Testimonial[];
}

export default function TestimonialBlock({ testimonials }: TestimonialBlockProps) {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">What Our Travelers Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.slice(0, 4).map((t, i) => (
          <div key={i} className="p-4 border rounded-xl">
            <p>"{t.quote}"</p>
            <span className="text-sm text-gray-500">— {t.author}, {t.origin}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
