import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactez Y&ZLand Tours',
  description: 'Contactez Y&ZLand Tours pour un voyage sur mesure au Maroc. Réponse en moins d\'une heure. Sans engagement, conseils gratuits.',
};

export default function FrContactPage() {
  return (
    <>
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-4">Contactez‑nous</h1>
        <p className="text-center text-gray-600 mb-10">
          Posez une question, demandez un devis ou réservez votre circuit. Nous répondons rapidement.
        </p>
        <form
          action="https://formspree.io/f/mbdqzavl"
          method="POST"
          className="space-y-5 bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">Nom *</label>
            <input type="text" name="name" id="name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="Votre nom complet" />
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">E‑mail *</label>
            <input type="email" name="email" id="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="votre@email.com" />
          </div>
          <div>
            <label htmlFor="tour" className="block text-sm font-medium text-gray-800 mb-1">Circuit souhaité</label>
            <select name="tour" id="tour" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none">
              <option style={{ color: "#1a1a1a" }}  value="">Sélectionnez un circuit</option>
              <option style={{ color: "#1a1a1a" }}  value="Grand Morocco Tour 9D">Grand Tour du Maroc – 9 Jours</option>
              <option style={{ color: "#1a1a1a" }}  value="Sahara 3D">Sahara – Expérience 3 Jours</option>
              <option style={{ color: "#1a1a1a" }}  value="Imperial Cities">Circuit Villes Impériales</option>
              <option style={{ color: "#1a1a1a" }}  value="Chefchaouen">Chefchaouen – La Perle Bleue</option>
              <option style={{ color: "#1a1a1a" }}  value="Akchour">Akchour – Cascades et Nature</option>
              <option style={{ color: "#1a1a1a" }}  value="Marrakech Agafay">Marrakech & Agafay</option>
              <option style={{ color: "#1a1a1a" }}  value="Atlas Escape">Échappée dans l’Atlas</option>
              <option style={{ color: "#1a1a1a" }}  value="Other">Autre / Sur mesure</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">Message *</label>
            <textarea name="message" id="message" rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="Quel circuit ? Quelles dates ? Nombre de voyageurs ?" />
          </div>
          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm">
            Envoyer le message
          </button>
          <p className="text-xs text-gray-500 text-center mt-4">
            Nous respectons votre vie privée. Vos données ne sont jamais partagées. En soumettant ce formulaire, vous acceptez notre Politique de confidentialité.
          </p>
        </form>
        <div className="text-center mt-8 paypal-option">
          <p className="text-sm text-gray-500">Ou payez instantanément via PayPal :</p>
          <a href="https://www.paypal.me/chkouri" target="_blank" className="inline-block bg-[#ffc439] text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-[#f5b000] transition mt-2">
            💳 Payer avec PayPal
          </a>
          <p className="text-xs text-gray-400 mt-1">Pas de compte PayPal ? Carte bancaire acceptée.</p>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Ou contactez‑nous sur WhatsApp :</p>
          <a href="https://wa.me/212621405131" target="_blank" className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
            Discuter sur WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
