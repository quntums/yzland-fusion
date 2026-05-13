'use client';
export default function HomepageMobileConversion() {
  const track = (event: string) => {
    const raw = localStorage.getItem('yzland-analytics');
    const log: Array<{ ts: number; event: string; payload?: Record<string, unknown> }> = raw ? JSON.parse(raw) : [];
    log.push({ ts: Date.now(), event, payload: { page: 'homepage' } });
    localStorage.setItem('yzland-analytics', JSON.stringify(log.slice(-200)));
  };

  const whatsappMsg = encodeURIComponent("Hello Y&ZLand, I'm interested in your tours. Can you share more details?");

  return (
    <div className="max-w-[640px] mx-auto px-4 py-6 space-y-8">
      {/* 1. Above-the-fold CTA */}
      <div className="text-center space-y-3">
        <h2 className="text-xl font-bold text-gray-800">Explore Morocco with a local expert</h2>
        <p className="text-sm text-gray-500">Handcrafted private tours – designed for you, guided by locals.</p>
        <a
          href={`https://wa.me/212619852591?text=${whatsappMsg}`}
          target="_blank"
          onClick={() => track('hero_cta_click')}
          className="inline-block w-full bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-3 rounded-xl text-base"
        >
          💬 Check Availability
        </a>
        <p className="text-xs text-gray-400">✓ Reply within 1 hour • ✓ No obligation • ✓ Licensed operator</p>
      </div>

      {/* 2. Trust bar (repeated for mobile emphasis) */}
      <div className="flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-700">
        <span>✅ Licensed Moroccan Operator</span>
        <span>👥 200+ Happy Travelers</span>
        <span>🔒 Secure Booking</span>
      </div>

      {/* 3. How it works */}
      <div>
        <h3 className="text-lg font-semibold text-center mb-4">How it works</h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-xl p-3">
            <div className="text-2xl mb-1">1️⃣</div>
            <p className="text-xs font-medium">Choose a tour</p>
          </div>
          <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-xl p-3">
            <div className="text-2xl mb-1">💬</div>
            <p className="text-xs font-medium">Chat with an expert</p>
          </div>
          <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-xl p-3">
            <div className="text-2xl mb-1">🛠️</div>
            <p className="text-xs font-medium">Customize & book</p>
          </div>
        </div>
      </div>

      {/* 4. Mid CTA */}
      <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-2xl p-5 text-center space-y-3">
        <h3 className="text-lg font-semibold">Not sure which tour is right for you?</h3>
        <p className="text-sm text-gray-600">Tell us your travel style and we'll recommend the perfect experience.</p>
        <a
          href={`https://wa.me/212619852591?text=${whatsappMsg}`}
          target="_blank"
          onClick={() => track('mid_cta_click')}
          className="inline-block w-full bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-3 rounded-xl text-base"
        >
          💬 Get a personalized recommendation
        </a>
        <p className="text-xs text-gray-400">Free · No commitment</p>
      </div>

      {/* 5. Final CTA */}
      <div className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-2xl p-5 text-center space-y-3">
        <h3 className="text-lg font-semibold">Ready to start planning?</h3>
        <a
          href={`https://wa.me/212619852591?text=${whatsappMsg}`}
          target="_blank"
          onClick={() => track('final_cta_click')}
          className="inline-block w-full bg-[#C96A3D] hover:bg-[#B85A30] text-white font-semibold py-3 rounded-xl text-base"
        >
          💬 Message Us on WhatsApp
        </a>
        <p className="text-xs text-gray-400">✓ Fast response • ✓ No upfront payment</p>
      </div>
    </div>
  );
}
