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
    id: "david-kelechukwu",
    quote:
      "Working with him on my AI workflow automation project was a great experience. He understood my needs, delivered a well-structured solution, and helped automate processes that would otherwise require a lot of manual effort. His knowledge of AI automation and n8n really stood out, and the entire process was smooth and professional. I’m satisfied with the quality of his work and would recommend him to anyone looking to streamline business operations through AI automation.",
    author: "David Kelechukwu",
    role: "CEO",
    company: "RedGuard Africa",
    outcome: "Streamlined business operations & automated manual processes with n8n",
    tag: "AI Workflow Automation",
    verified: true,
    rating: 5,
    initials: "DK",
  },
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
  {
    id: "unclekay-innovation-growth-hub",
    quote:
      "I have known Charles Mark for over three years, and throughout this time, he has consistently demonstrated exceptional expertise, professionalism, and dedication to his work. He is highly skilled at what he does, pays attention to detail, and is committed to delivering quality results. Beyond his technical expertise, he is reliable, knowledgeable, and passionate about providing excellent service. My experience with him has been very positive, and I have no hesitation in recommending him to anyone looking for a competent and trustworthy expert. If you need someone who truly understands his craft and delivers with excellence, Charles Mark is definitely someone to trust!",
    author: "Unclekay",
    role: "Hub Manager",
    company: "Innovation Growth Hub",
    outcome: "Over 3 years of exceptional expertise, professionalism, and trustworthy delivery",
    tag: "Technical Expertise & Delivery",
    verified: true,
    rating: 5,
    initials: "UK",
  },
];
