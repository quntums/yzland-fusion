interface IncludesBlockProps {
  includes: string[];
}

export default function IncludesBlock({ includes }: IncludesBlockProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
      <ul className="space-y-2 text-gray-600">
        {includes.map((item, i) => (
          <li key={i}>✓ {item}</li>
        ))}
      </ul>
    </section>
  );
}
