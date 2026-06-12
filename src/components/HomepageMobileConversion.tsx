'use client';
export default function HomepageMobileConversion({ isFr = false }: { isFr?: boolean }) {
  const track = (event: string) => {
    const raw = localStorage.getItem('yzland-analytics');
    const log: Array<{ ts: number; event: string; payload?: Record<string, unknown> }> = raw ? JSON.parse(raw) : [];
    log.push({ ts: Date.now(), event, payload: { page: 'homepage' } });
    localStorage.setItem('yzland-analytics', JSON.stringify(log.slice(-200)));
  };

  const whatsappMsg = encodeURIComponent(isFr 
    ? "Bonjour Y&ZLand, je suis intéressé par vos circuits. Pouvez-vous me donner plus d'informations ?"
    : "Hello Y&ZLand, I'm interested in your tours. Can you share more details?");

  return (
    <div className="max-w-[640px] mx-auto px-4 py-6 space-y-8 bg-[#FCFAF7] pt-16">
      {/* 1. Above-the-fold CTA */}
      <div className="text-center space-y-3">
        <h2 className="text-xl font-bold text-gray-900">
          {isFr ? 'Explorez le Maroc avec un expert local' : 'Explore Morocco with a local expert'}
        </h2>
        <p className="text-sm text-gray-700">
          {isFr ? 'Circuits privés artisanaux – conçus pour vous, guidés par des locaux.' : 'Handcrafted private tours – designed for you, guided by locals.'}
        </p>
        <a
          href={`https://wa.me/212621405131?text=${whatsappMsg}`}
          target="_blank"
          onClick={() => track('hero_cta_click')}
          className="inline-block w-full bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-3 rounded-xl text-base"
        >
          💬 {isFr ? 'Vérifier la disponibilité' : 'Check Availability'}
        </a>
        <p className="text-xs text-gray-600">
          {isFr ? '✓ Réponse en moins d\'une heure • ✓ Sans engagement • ✓ Opérateur agréé' : '✓ Reply within 1 hour • ✓ No obligation • ✓ Licensed operator'}
        </p>
      </div>

      {/* 2. Trust bar */}
      <div className="flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-900 bg-white p-3 rounded-xl">
        <span>✅ {isFr ? 'Opérateur Marocain Agréé' : 'Licensed Moroccan Operator'}</span>
        <span>👥 {isFr ? '200+ Voyageurs Satisfaits' : '200+ Happy Travelers'}</span>
        <span>🔒 {isFr ? 'Réservation Sécurisée' : 'Secure Booking'}</span>
      </div>

      {/* 3. How it works */}
      <div>
        <h3 className="text-lg font-semibold text-center text-gray-900 mb-4">
          {isFr ? 'Comment ça marche' : 'How it works'}
        </h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-xl p-3">
            <div className="text-2xl mb-1">1️⃣</div>
            <p className="text-xs font-medium text-gray-800">{isFr ? 'Choisissez un circuit' : 'Choose a tour'}</p>
          </div>
          <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-xl p-3">
            <div className="text-2xl mb-1">💬</div>
            <p className="text-xs font-medium text-gray-800">{isFr ? 'Discutez avec un expert' : 'Chat with an expert'}</p>
          </div>
          <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-xl p-3">
            <div className="text-2xl mb-1">🛠️</div>
            <p className="text-xs font-medium text-gray-800">{isFr ? 'Personnalisez et réservez' : 'Customize & book'}</p>
          </div>
        </div>
      </div>

      {/* 4. Mid CTA */}
      <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-2xl p-5 text-center space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          {isFr ? 'Vous ne savez pas quel circuit choisir ?' : 'Not sure which tour is right for you?'}
        </h3>
        <p className="text-sm text-gray-700">
          {isFr ? 'Dites-nous votre style de voyage et nous vous recommanderons l\'expérience parfaite.' : 'Tell us your travel style and we\'ll recommend the perfect experience.'}
        </p>
        <a
          href={`https://wa.me/212621405131?text=${whatsappMsg}`}
          target="_blank"
          onClick={() => track('mid_cta_click')}
          className="inline-block w-full bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-3 rounded-xl text-base"
        >
          💬 {isFr ? 'Obtenir une recommandation personnalisée' : 'Get a personalized recommendation'}
        </a>
        <p className="text-xs text-gray-600">{isFr ? 'Gratuit · Sans engagement' : 'Free · No commitment'}</p>
      </div>

      {/* 5. Final CTA */}
      <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-2xl p-5 text-center space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          {isFr ? 'Prêt à planifier ?' : 'Ready to start planning?'}
        </h3>
        <a
          href={`https://wa.me/212621405131?text=${whatsappMsg}`}
          target="_blank"
          onClick={() => track('final_cta_click')}
          className="inline-block w-full bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-3 rounded-xl text-base"
        >
          💬 {isFr ? 'Écrivez-nous sur WhatsApp' : 'Message Us on WhatsApp'}
        </a>
        <p className="text-xs text-gray-600">
          {isFr ? '✓ Réponse rapide • ✓ Aucun acompte' : '✓ Fast response • ✓ No upfront payment'}
        </p>
      </div>
    </div>
  );
}
