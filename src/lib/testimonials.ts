export interface Testimonial {
  quote: string;
  author: string;
  origin: string;
}

export const defaultTestimonials: Testimonial[] = [
  { quote: "The Sahara tour was the highlight of our Morocco trip. Everything was perfectly organised.", author: "Sarah & Tom", origin: "UK" },
  { quote: "Incredible experience! Our guide was knowledgeable and the desert camp was magical.", author: "Marie Dubois", origin: "France" },
  { quote: "Mount Toubkal trek tested us but the views were worth every step. Highly recommend YZLand.", author: "Carlos Mendez", origin: "Spain" }
];
