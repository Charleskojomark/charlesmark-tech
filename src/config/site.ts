export const siteConfig = {
  name: "Charles Mark",
  title: "AI Systems Engineer",
  tagline: "AI Systems Engineer | Workflow Automation & Backend Systems",
  description:
    "AI automation and backend systems for businesses that want less manual work and more reliable operations. Custom AI agents, n8n workflows, RAG assistants, and scalable APIs.",
  url: "https://charlesmark.tech",
  ogImage: "https://charlesmark.tech/og-image.png",
  author: {
    name: "Charles Mark",
    role: "AI Systems Engineer",
    focus: "AI Automation, Custom Agents & Backend Systems",
  },
  social: {
    linkedin: {
      name: "LinkedIn",
      username: "markcharleskojo",
      url: "https://www.linkedin.com/in/markcharleskojo/",
      color: "#0A66C2", // official brand blue for icon only
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
    // [TODO: booking URL - e.g. Cal.com or Calendly link]
    url: "https://cal.com/charlesmark", // [TODO: Replace with verified booking link]
    placeholder: "[TODO: booking URL]",
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
    "AI Workflow Automation",
    "Custom AI Agents & RAG",
    "Scalable Backend Systems",
  ],
  contact: {
    phone: "+2347082367382",
    phoneDisplay: "+234 708 236 7382",
    email: "markcharleskojo@gmail.com",
    whatsappUrl: "https://wa.me/2347082367382?text=Hi%20Charles%2C%20I'd%20like%20to%20discuss%20an%20AI%20automation%20or%20backend%20project",
    getWhatsappUrlForService: (serviceName?: string) => {
      const text = serviceName
        ? `Hi Charles, I'd like to discuss ${serviceName} for our business.`
        : "Hi Charles, I'd like to discuss an AI automation or backend project.";
      return `https://wa.me/2347082367382?text=${encodeURIComponent(text)}`;
    },
    fallbackMailto: "mailto:markcharleskojo@gmail.com?subject=Project%20Inquiry%20-%20AI%20%26%20Backend%20Systems",
    turnaround: "Fast response within 24 hours • Direct WhatsApp or booking",
  },
};
