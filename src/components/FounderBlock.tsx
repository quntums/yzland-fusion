'use client';
export default function FounderBlock() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 sm:py-20 flex flex-col items-center text-center">
      {/* Circular photo placeholder */}
      <div className="w-24 h-24 rounded-full bg-[#E8DDD0] mb-6 overflow-hidden flex-shrink-0">
        <img
          src="/images/founder.jpg"
          alt="Youssef Chkoori"
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E4063] mb-4">
        Meet Youssef — your local expert in Chefchaouen's hidden world
      </h2>
      <p className="text-gray-600 max-w-2xl leading-relaxed text-base sm:text-lg">
        Born and raised in Morocco's legendary Blue City, Youssef has been guiding travelers through Chefchaouen's ancient medina since 2016. With nearly a decade of hands-on experience, he offers something no app or guidebook can: genuine insider access to secret alleyways, authentic local life, and the stories behind the blue walls.
      </p>
      <p className="text-gray-600 max-w-2xl leading-relaxed text-base sm:text-lg mt-4">
        Whether you're here for stunning photography, cultural immersion, or simply to get beautifully lost — Youssef will make it unforgettable.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-[#2E4063] font-medium">
        <span className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-full px-4 py-1">🇲🇦 Licensed Operator</span>
        <span className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-full px-4 py-1">⭐ 5-Star Reviews</span>
        <span className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-full px-4 py-1">🔒 Secure Booking</span>
      </div>
    </section>
  );
}
