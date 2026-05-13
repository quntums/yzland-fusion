interface TrustStripProps {
  isFr?: boolean;
}

export default function TrustStrip({ isFr = false }: TrustStripProps) {
  return (
    <section className="bg-[#FCFAF7] border-b border-[#E8DDD0] py-3">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-[#2E4063] font-medium">
        <span>✔ {isFr ? 'Opérateur Marocain Agréé' : 'Licensed Moroccan Operator'}</span>
        <span>✔ {isFr ? 'Réservation Sécurisée avec Acompte' : 'Secure Booking with Deposit'}</span>
        <span>✔ {isFr ? 'Support WhatsApp 24/7' : '24/7 WhatsApp Support'}</span>
      </div>
    </section>
  );
}
