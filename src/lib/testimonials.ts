export interface Testimonial {
  quote: string;
  author: string;
  origin: string;
  rating?: number;
}

export const saharaTestimonials: Testimonial[] = [
  { quote: "The Sahara tour was the highlight of our Morocco trip. Everything was perfectly organised.", author: "Sarah & Tom", origin: "UK", rating: 5 },
  { quote: "Incredible experience! Our guide was knowledgeable and the desert camp was magical.", author: "Marie Dubois", origin: "France", rating: 5 }
];

export const imperialTestimonials: Testimonial[] = [
  { quote: "The Sahara tour was the highlight of our Morocco trip. Everything was perfectly organised.", author: "Sarah & Tom", origin: "UK", rating: 5 },
  { quote: "Incredible experience! Our guide was knowledgeable and the desert camp was magical.", author: "Marie Dubois", origin: "France", rating: 5 }
];

export const atlasTestimonials: Testimonial[] = [
  { quote: "Mount Toubkal trek tested us but the views were worth every step. Highly recommend YZLand.", author: "Carlos Mendez", origin: "Spain", rating: 5 }
];

export const chefchaouenTestimonial: Testimonial = {
  quote: "The Chefchaouen tour was pure magic. Our guide knew every hidden alley – the blue city came alive through his stories.",
  author: "Camille R.", origin: "France", rating: 5
};

export const defaultTestimonials: Testimonial[] = [
  saharaTestimonials[0],
  imperialTestimonials[1],
  chefchaouenTestimonial
];

export const defaultFrenchTestimonials: Testimonial[] = [
  { quote: "Un séjour magnifique, tout était parfaitement organisé. Je recommande vivement YZLand !", author: "Sophie L.", origin: "France", rating: 5 },
  { quote: "Des paysages à couper le souffle et un guide passionné. Une expérience inoubliable.", author: "Karim B.", origin: "Maroc", rating: 5 }
];
