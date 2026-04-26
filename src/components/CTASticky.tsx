export default function CTASticky() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex justify-between items-center md:hidden z-50">
      <span>Plan your Sahara trip</span>
      <a href="/contact" className="bg-white text-black px-4 py-2 rounded">Get Quote</a>
    </div>
  );
}
