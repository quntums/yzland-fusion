interface Departure {
  date: string;
  spots: number;
  link: string;
}

interface DeparturesBlockProps {
  departures: Departure[];
}

export default function DeparturesBlock({ departures }: DeparturesBlockProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Next Departures</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Spots Left</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {departures.map((d, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{d.date}</td>
                <td className="px-4 py-3">
                  <span className={d.spots <= 2 ? 'text-red-600 font-semibold' : 'text-gray-600'}>
                    {d.spots} {d.spots === 1 ? 'spot' : 'spots'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <a href={d.link} target="_blank" className="text-green-700 font-semibold hover:underline text-xs whitespace-nowrap">
                    Book via WhatsApp ↗
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
