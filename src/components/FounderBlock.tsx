'use client';
interface FounderBlockProps {
  isFr?: boolean;
}
export default function FounderBlock({ isFr = false }: FounderBlockProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 sm:py-20 flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-[#E8DDD0] mb-6 overflow-hidden flex-shrink-0">
        <img
          src="/images/founder.webp"
          alt="Youssef Chkoori"
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E4063] mb-4">
        {isFr
          ? "Rencontrez Youssef — votre expert local du monde caché de Chefchaouen"
          : "Meet Youssef — your local expert in Chefchaouen's hidden world"}
      </h2>
      <p className="text-gray-600 max-w-2xl leading-relaxed text-base sm:text-lg">
        {isFr
          ? "Né et élevé dans la légendaire Ville Bleue du Maroc, Youssef guide les voyageurs à travers l’ancienne médina de Chefchaouen depuis 2016. Avec près d’une décennie d’expérience, il offre ce qu’aucune application ni guide ne peut offrir : un accès privilégié aux ruelles secrètes, à la vie locale authentique et aux histoires derrière les murs bleus."
          : "Born and raised in Morocco's legendary Blue City, Youssef has been guiding travelers through Chefchaouen's ancient medina since 2016. With nearly a decade of hands-on experience, he offers something no app or guidebook can: genuine insider access to secret alleyways, authentic local life, and the stories behind the blue walls."}
      </p>
      <p className="text-gray-600 max-w-2xl leading-relaxed text-base sm:text-lg mt-4">
        {isFr
          ? "Que vous soyez ici pour la photographie, l’immersion culturelle ou simplement pour vous perdre magnifiquement — Youssef rendra votre expérience inoubliable."
          : "Whether you're here for stunning photography, cultural immersion, or simply to get beautifully lost — Youssef will make it unforgettable."}
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-[#2E4063] font-medium">
        <span className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-full px-4 py-1">
          {isFr ? '🇲🇦 Opérateur Agréé' : '🇲🇦 Licensed Operator'}
        </span>
        <span className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-full px-4 py-1">
          {isFr ? '⭐ Avis 5 Étoiles' : '⭐ 5-Star Reviews'}
        </span>
        <span className="bg-[#FCFAF7] border border-[#E8DDD0] rounded-full px-4 py-1">
          {isFr ? '🔒 Réservation Sécurisée' : '🔒 Secure Booking'}
        </span>
      </div>
    </section>
  );
}
