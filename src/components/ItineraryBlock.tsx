interface ItineraryBlockProps {
  route: string[];
}

export default function ItineraryBlock({ route }: ItineraryBlockProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
      <ul className="space-y-2 text-gray-600">
        {route.map((step, i) => (
          <li key={i}><strong>Day {i + 1}:</strong> {step}</li>
        ))}
      </ul>
    </section>
  );
}
