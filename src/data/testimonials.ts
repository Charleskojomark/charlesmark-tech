export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  outcome: string;
  tag: string;
  verified: boolean;
  rating?: number;
  initials?: string;
}

export const SHOW_UNVERIFIED_TESTIMONIALS = true;

export const testimonials: Testimonial[] = [
  {
    id: "elvis-nwoko",
    quote:
      "Excellent engineer. He took our vague idea and turned it into a functional AI product. Fast, professional, and knows how to ship.",
    author: "Elvis Nwoko",
    role: "UI/UX Designer",
    company: "Ethos Clinical Supervision",
    outcome: "Vague idea turned into a functional, shipped AI product",
    tag: "AI Product Engineering",
    verified: true,
    rating: 5,
    initials: "EN",
  },
  {
    id: "franklin-isaac-tochukwu",
    quote:
      "I’ve worked with Charles on several projects, and he’s the kind of backend engineer you want when something actually needs to ship. He’s very results-oriented: he gets clear on what success looks like, then builds toward it without overcomplicating things. His code is clean, well-structured, and, most importantly, it works. That saves a lot of back-and-forth and makes the systems easy for the rest of the team to build on. I’d recommend him to anyone who needs reliable backend work done properly.",
    author: "Franklin Isaac Tochukwu",
    role: "CTO",
    company: "BluTechnology Innovations",
    outcome: "Clean, reliable backend systems & clear team-ready architecture",
    tag: "Backend & Systems Architecture",
    verified: true,
    rating: 5,
    initials: "FT",
  },
];
