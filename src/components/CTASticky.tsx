interface CTAStickyProps {
  tourTitle: string;
}

export default function CTASticky({ tourTitle }: CTAStickyProps) {
  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between z-40">
      <span className="text-sm font-medium text-gray-700">{tourTitle}</span>
      <a
        href="https://wa.me/212621405131"
        target="_blank"
        className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
      >
        Book via WhatsApp
      </a>
    </div>
  );
}
