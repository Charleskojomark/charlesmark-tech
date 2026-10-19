export const siteConfig = {
  name: "Charles Mark",
  title: "Charles Mark | Applied AI & Forward Deployed Systems Engineer",
  tagline: "Backend Systems • Cloud Infrastructure & DevOps • Agentic AI Systems",
  description:
    "Applied AI & Forward Deployed Systems Engineer. Bridging resilient backend architecture, cloud DevOps infrastructure, and production agentic AI systems for companies operating at scale. Trained by FAANG engineers.",
  url: "https://charlesmark.tech",
  ogImage: "https://charlesmark.tech/og-image.png",
  author: {
    name: "Charles Mark",
    role: "Applied AI & Forward Deployed Systems Engineer",
    focus: "Backend Architecture, Cloud DevOps & Production Agentic Systems",
  },
  social: {
    linkedin: {
      name: "LinkedIn",
      username: "markcharleskojo",
      url: "https://www.linkedin.com/in/markcharleskojo/",
      color: "#0A66C2",
    },
    github: {
      name: "GitHub",
      username: "Charleskojomark",
      url: "https://github.com/Charleskojomark",
      color: "#000000",
    },
    website: {
      domain: "charlesmark.tech",
      url: "https://charlesmark.tech",
      color: "#000000",
    },
  },
  // Business conversion links
  booking: {
    url: "https://cal.com/charlesmark",
    label: "Schedule a Technical Consultation (Cal.com)",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "How I Work", href: "/#how-it-works" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  rolesToCycle: [
    "Agentic System Design & AI Agents",
    "Resilient Backend Architecture",
    "Cloud Infrastructure & DevOps",
    "Forward Deployed Engineering",
  ],
  contact: {
    phone: "+2347082367382",
    phoneDisplay: "+234 708 236 7382",
    email: "markcharleskojo@gmail.com",
    whatsappUrl: "https://wa.me/2347082367382?text=Hi%20Charles%2C%20I'd%20like%20to%20discuss%20an%20AI%20systems%20or%20backend%20infrastructure%20project",
    getWhatsappUrlForService: (serviceName?: string) => {
      const text = serviceName
        ? `Hi Charles, I'd like to discuss ${serviceName} for our systems.`
        : "Hi Charles, I'd like to discuss an AI systems or backend infrastructure project.";
      return `https://wa.me/2347082367382?text=${encodeURIComponent(text)}`;
    },
    fallbackMailto: "mailto:markcharleskojo@gmail.com?subject=Project%20Inquiry%20-%20AI%20%26%20Backend%20Systems",
    turnaround: "Fast response within 24 hours • Direct WhatsApp or booking",
  },
};
