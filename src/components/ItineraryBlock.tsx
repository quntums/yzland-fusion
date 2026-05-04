'use client';
import { useState } from 'react';

interface ItineraryDay {
  day: number;
  date?: string;
  city?: string;
  title?: string;
  desc?: string;
}

interface ItineraryBlockProps {
  itinerary: ItineraryDay[];
}

export default function ItineraryBlock({ itinerary }: ItineraryBlockProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Itinerary</h2>
      <div className="space-y-4">
        {itinerary.map((day, idx) => {
          const isOpen = expandedDay === idx;
          return (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedDay(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-medium">
                  Day {day.day}: {day.title || 'Day ' + day.day}
                </span>
                <span className="text-xl">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="p-4 text-gray-700 space-y-2">
                  {day.city && <p className="text-sm font-medium text-amber-700">{day.city}</p>}
                  <p>{day.desc}</p>
                  {day.date && <p className="text-sm text-gray-500">{day.date}</p>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
