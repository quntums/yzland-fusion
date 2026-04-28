import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-500 mb-8">Ask a question, request a quote, or book your tour.</p>
        <form name="contact" method="POST" data-netlify="true" action="/contact/success" className="space-y-5">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input name="name" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm" placeholder="Your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tour Interest</label>
            <select name="tour" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white">
              <option value="">Select a tour</option>
              <option value="Sahara">Sahara 3-Day Experience</option>
              <option value="Imperial">Imperial Cities Tour</option>
              <option value="Atlas">Atlas Mountains Escape</option>
              <option value="Other">Other / Custom</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
            <textarea name="message" rows={4} required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm" placeholder="Which tour? Preferred dates? Number of travelers?" />
          </div>
          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors">Send Message</button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">Or reach us directly:</p>
          <a href="https://wa.me/212619852591" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">WhatsApp Us</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
