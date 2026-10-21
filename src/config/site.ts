export const siteConfig = {
  name: "Charles Mark",
  title: "Charles Mark | AI Systems, Workflow Automation & Backend Engineer",
  tagline: "AI Workflow Automation • Backend Systems • Cloud DevOps • Agentic AI",
  description:
    "AI Systems, Workflow Automation & Forward Deployed Engineer. Bridging automated n8n pipelines, resilient backend infrastructure, cloud DevOps, and production agentic AI systems. Trained by FAANG engineers.",
  url: "https://charlesmark.tech",
  ogImage: "https://charlesmark.tech/og-image.png",
  author: {
    name: "Charles Mark",
    role: "AI Systems, Workflow Automation & Forward Deployed Engineer",
    focus: "AI Workflow Automation, Backend Architecture, Cloud DevOps & Agentic Systems",
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
    { label: "Free Audit", href: "/#audit" },
    { label: "3D AI Waitlist", href: "/waitlist" },
    { label: "Services", href: "/services" },
    { label: "How I Work", href: "/#how-it-works" },
    { label: "Certifications", href: "/#certifications" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  rolesToCycle: [
    "AI Workflow Automation & n8n",
    "Agentic System Design & AI Agents",
    "Resilient Backend Architecture",
    "Cloud Infrastructure & DevOps",
    "Forward Deployed Engineering",
  ],
  contact: {
    phone: "+2347082367382",
    phoneDisplay: "+234 708 236 7382",
    email: "markcharleskojo@gmail.com",
    whatsappUrl: "https://wa.me/2347082367382?text=Hi%20Charles%2C%20I'd%20like%20to%20discuss%20an%20AI%20automation%2C%20backend%2C%20or%20agentic%20project",
    getWhatsappUrlForService: (serviceName?: string) => {
      const text = serviceName
        ? `Hi Charles, I'd like to discuss ${serviceName} for our business.`
        : "Hi Charles, I'd like to discuss an AI automation, backend, or agentic project.";
      return `https://wa.me/2347082367382?text=${encodeURIComponent(text)}`;
    },
    fallbackMailto: "mailto:markcharleskojo@gmail.com?subject=Project%20Inquiry%20-%20AI%20Automation%20%26%20Backend%20Systems",
    turnaround: "Fast response within 24 hours • Direct WhatsApp or booking",
  },
};
