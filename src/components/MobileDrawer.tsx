'use client';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  isFr: boolean;
  switchTarget: string;
  onLangSwitch: () => void;
  onWhatsAppClick: () => void;
}

export default function MobileDrawer({
  isOpen,
  onClose,
  isFr,
  switchTarget,
  onLangSwitch,
  onWhatsAppClick,
}: MobileDrawerProps) {
  return (
    <>
      {/* Backdrop – light, airy, not oppressive */}
      <div
        className={`fixed inset-0 z-40 bg-[#F6F0E8]/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel – slides up from bottom, editorial feel */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 bg-[#FCFAF7] rounded-t-3xl shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Handle bar – subtle visual cue */}
        <div className="flex justify-center pt-4 pb-2">
          <div className="w-10 h-1 rounded-full bg-[#E8DDD0]" />
        </div>

        <nav className="px-8 pt-6 pb-10 flex flex-col items-center gap-8 text-2xl font-light tracking-wide text-[#2E4063]">
          <a href={isFr ? '/fr.html' : '/'} onClick={onClose} className="hover:text-[#C96A3D] transition-colors">
            {isFr ? 'Accueil' : 'Home'}
          </a>
          <a href={isFr ? '/fr/tours.html' : '/tours.html'} onClick={onClose} className="hover:text-[#C96A3D] transition-colors">
            {isFr ? 'Circuits' : 'Tours'}
          </a>
          <a href={isFr ? '/fr/guides.html' : '/guides.html'} onClick={onClose} className="hover:text-[#C96A3D] transition-colors">
            {isFr ? 'Guides' : 'Guides'}
          </a>
          <a href="/contact.html" onClick={onClose} className="hover:text-[#C96A3D] transition-colors">
            Contact
          </a>

          {/* Separator */}
          <div className="w-16 h-px bg-[#E8DDD0]" />

          {/* Language toggle */}
          <a
            href={switchTarget}
            onClick={onLangSwitch}
            className="text-lg font-medium text-[#7A8B74] hover:text-[#C96A3D] transition-colors"
          >
            {isFr ? 'English' : 'Français'}
          </a>

          {/* WhatsApp CTA – elegant, not aggressive */}
          <a
            href="https://wa.me/212619852591"
            target="_blank"
            onClick={onWhatsAppClick}
            className="mt-4 inline-flex items-center gap-2 bg-[#C96A3D] hover:bg-[#B85A30] text-white px-8 py-4 rounded-2xl text-lg font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
