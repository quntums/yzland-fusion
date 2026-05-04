export interface Testimonial {
  quote: string;
  author: string;
  origin: string;
}

export const saharaTestimonials: Testimonial[] = [
  { quote: "The Sahara tour was the highlight of our Morocco trip. Everything was perfectly organised.", author: "Sarah & Tom", origin: "UK" },
  { quote: "Incredible experience! Our guide was knowledgeable and the desert camp was magical.", author: "Marie Dubois", origin: "France" }
];

export const imperialTestimonials: Testimonial[] = [
  { quote: "The Sahara tour was the highlight of our Morocco trip. Everything was perfectly organised.", author: "Sarah & Tom", origin: "UK" },
  { quote: "Incredible experience! Our guide was knowledgeable and the desert camp was magical.", author: "Marie Dubois", origin: "France" }
];

export const atlasTestimonials: Testimonial[] = [
  { quote: "Mount Toubkal trek tested us but the views were worth every step. Highly recommend YZLand.", author: "Carlos Mendez", origin: "Spain" }
];

export const defaultTestimonials: Testimonial[] = [
  saharaTestimonials[0],
  imperialTestimonials[1],
  atlasTestimonials[0]
];

export const defaultFrenchTestimonials: Testimonial[] = [
  { quote: "Le circuit du Sahara était le point culminant de notre voyage au Maroc. Tout était parfaitement organisé.", author: "Sarah & Tom", origin: "Royaume-Uni" },
  { quote: "Expérience incroyable ! Notre guide était très compétent et le camp dans le désert était magique.", author: "Marie Dubois", origin: "France" }
];
