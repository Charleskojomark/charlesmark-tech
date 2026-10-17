export const siteConfig = {
  name: "Charles Mark",
  title: "AI Systems Engineer",
  tagline: "AI Systems Engineer / Backend / Automation",
  description:
    "Personal website and portfolio of Charles Mark. Building AI-powered systems, intelligent workflows, and reliable backend services that solve practical problems.",
  url: "https://charlesmark.tech",
  ogImage: "https://charlesmark.tech/og-image.png",
  author: {
    name: "Charles Mark",
    role: "AI Systems Engineer",
    location: "Global / Remote",
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
  cv: {
    // Configured CV path. If file does not exist, UI gracefully renders an advisory note
    url: "/cv-charles-mark.pdf",
    available: false, // Set to true when the actual CV file is placed in /public
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  rolesToCycle: [
    "AI Systems Engineer",
    "Backend Engineer",
    "Workflow Automation Engineer",
  ],
  contact: {
    phone: "+2347082367382",
    phoneDisplay: "+234 708 236 7382",
    whatsappUrl: "https://wa.me/2347082367382?text=Hi%20Charles%2C%20let's%20talk%20about%20a%20project",
    getWhatsappUrlForService: (serviceName?: string) => {
      const text = serviceName
        ? `Hi Charles, I'm interested in discussing ${serviceName} with you.`
        : "Hi Charles, let's talk about a project.";
      return `https://wa.me/2347082367382?text=${encodeURIComponent(text)}`;
    },
    emailPlaceholder: "charles@charlesmark.tech",
    fallbackMailto: "mailto:markcharleskojo@gmail.com",
    turnaround: "Direct WhatsApp chat • Instant response / same day reply",
  },
};
