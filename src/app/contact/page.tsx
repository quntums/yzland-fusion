import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Y&ZLand Tours',
  description: 'Get in touch with Y&ZLand Tours for a custom Morocco trip. We reply within 1 hour. No obligation, free planning advice.',
};

export default function ContactPage() {
  return (
    <>
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          Ask a question, request a quote, or book your tour. We reply quickly.
        </p>
        <form
          action="https://formspree.io/f/mbdqzavl"
          method="POST"
          className="space-y-5 bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">Name *</label>
            <input type="text" name="name" id="name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">Email *</label>
            <input type="email" name="email" id="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="tour" className="block text-sm font-medium text-gray-800 mb-1">Tour Interest</label>
            <select name="tour" id="tour" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none">
              <option value="">Select a tour</option>
              <option value="Grand Morocco Tour 9D">Grand Morocco Tour – 9 Days</option>
              <option value="Sahara 3D">Sahara 3‑Day Experience</option>
              <option value="Imperial Cities">Imperial Cities Tour</option>
              <option value="Chefchaouen">Chefchaouen – Blue Pearl</option>
              <option value="Akchour">Akchour – Waterfalls & Nature</option>
              <option value="Marrakech Agafay">Marrakech & Agafay</option>
              <option value="Atlas Escape">Atlas Mountains Escape</option>
              <option value="Other">Other / Custom</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">Message *</label>
            <textarea name="message" id="message" rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="Which tour? Preferred dates? Number of travelers?" />
          </div>
          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm">Send Message</button>
          <p className="text-xs text-gray-500 text-center mt-4">We respect your privacy. Your data is never shared. By submitting, you agree to our Privacy Policy.</p>
        </form>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Or reach us on WhatsApp:</p>
          <a href="https://wa.me/212619852591" target="_blank" className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">Chat on WhatsApp</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
