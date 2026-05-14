export const SITE = {
  name: "Involynk",
  tagline: "Building Intelligent Solutions For The Real World.",
  description:
    "Involynk crafts cinematic digital experiences, intelligent automations, and premium brand systems for ambitious companies.",
  email: "hello@involynk.com",
  phone: "+1 (415) 555-0142",
  location: "San Francisco · Remote Worldwide",
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    dribbble: "https://dribbble.com",
  },
};

export const NAV_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Contact", to: "/contact" as const },
];

export const SERVICES = [
  {
    id: "web",
    number: "01",
    title: "Web Development",
    short: "Cinematic, performance-first websites built to convert.",
    image: "/Service/webdevelopment.png",
    description:
      "From immersive marketing sites to complex platforms — engineered with Next-gen stacks, motion architecture, and obsessive attention to detail.",
    capabilities: [
      "Premium marketing sites",
      "Web applications",
      "E-commerce platforms",
      "Headless CMS systems",
      "Motion & interaction design",
    ],
  },
  {
    id: "ai",
    number: "02",
    title: "AI Automation",
    short: "Intelligent systems that remove friction from your business.",
    image: "/Service/AIautomation.png",
    description:
      "Custom AI agents, retrieval pipelines, and automation flows that integrate with the tools you already use — and quietly run your operations 24/7.",
    capabilities: [
      "Custom AI agents",
      "Workflow automation",
      "RAG & knowledge systems",
      "Voice & chat interfaces",
      "Process intelligence",
    ],
  },
  {
    id: "app",
    number: "03",
    title: "App Development",
    short: "Native-feel mobile experiences that earn screen time.",
    image: "/Service/Appdevelopment.png",
    description:
      "Cross-platform apps with the polish of native, the speed of modern tooling, and the design language of the products people actually love.",
    capabilities: [
      "iOS & Android",
      "React Native & Expo",
      "Realtime experiences",
      "Offline-first systems",
      "App Store optimization",
    ],
  },
  {
    id: "social",
    number: "04",
    title: "Social Media Management",
    short: "Editorial-grade content systems for modern brands.",
    image: "/Service/SocialMedia.png",
    description:
      "Strategy, art direction, and production that turns scattered posts into a recognizable brand voice — and a compounding audience.",
    capabilities: [
      "Brand strategy",
      "Content production",
      "Editorial calendars",
      "Paid amplification",
      "Community design",
    ],
  },
];

export const PROCESS = [
  { step: "01", title: "Discover", body: "We immerse ourselves in your business, audience, and ambition." },
  { step: "02", title: "Define", body: "We sharpen the strategy, narrative, and architecture before pixels move." },
  { step: "03", title: "Design", body: "Cinematic systems, motion direction, and interface choreography." },
  { step: "04", title: "Develop", body: "Production-grade engineering with motion, performance, and scale baked in." },
  { step: "05", title: "Deploy", body: "We ship, measure, and refine — then keep compounding the result." },
];

export const PROJECTS = [
  {
    slug: "northwind",
    name: "Northwind Labs",
    category: "AI Platform · Web",
    year: "2025",
    summary:
      "A cinematic launch platform for an AI research lab — built for press cycles, investor demos, and hiring at scale.",
    color: "from-[oklch(0.62_0.24_255)] to-[oklch(0.72_0.22_250)]",
  },
  {
    slug: "atlas",
    name: "Atlas Studio",
    category: "Brand · Web · Motion",
    year: "2025",
    summary:
      "A modular brand system and editorial site for an architecture studio crossing into the digital realm.",
    color: "from-[oklch(0.18_0.02_240)] to-[oklch(0.4_0.1_250)]",
  },
  {
    slug: "lumen",
    name: "Lumen OS",
    category: "Automation · App",
    year: "2024",
    summary:
      "An AI ops layer for fast-growing teams — handling support, sales, and internal knowledge in the background.",
    color: "from-[oklch(0.7_0.18_230)] to-[oklch(0.85_0.12_220)]",
  },
  {
    slug: "harbor",
    name: "Harbor & Co.",
    category: "E-commerce · Brand",
    year: "2024",
    summary:
      "A premium DTC experience that lifted average order value by 38% in the first quarter post-launch.",
    color: "from-[oklch(0.3_0.05_250)] to-[oklch(0.55_0.18_255)]",
  },
  {
    slug: "orbit",
    name: "Orbit Health",
    category: "App · AI",
    year: "2024",
    summary:
      "A mobile platform pairing clinicians with AI co-pilots — designed for trust, clarity, and high-stakes workflows.",
    color: "from-[oklch(0.5_0.18_255)] to-[oklch(0.78_0.16_240)]",
  },
];

export const TEAM = [
  {
    name: "Aarav Mehta",
    role: "Founder · Creative Direction",
    bio: "Obsessed with the intersection of cinema, software, and brand systems.",
    image: "/Team/WhatsApp Image 2026-05-06 at 22.25.49.jpeg",
    linkedin: "https://linkedin.com",
    initials: "AM",
  },
  {
    name: "Maya Okafor",
    role: "Head of Engineering",
    bio: "Ships scalable, motion-rich products. Previously at high-growth startups.",
    image: "/Team/WhatsApp Image 2026-05-06 at 22.06.22.jpeg",
    linkedin: "https://linkedin.com",
    initials: "MO",
  },
  {
    name: "Lukas Reiner",
    role: "Design Director",
    bio: "Editorial design background. Believes typography is a storytelling weapon.",
    image: "/Team/WhatsApp Image 2026-05-06 at 22.30.42.jpeg",
    linkedin: "https://linkedin.com",
    initials: "LR",
  },
  {
    name: "Sana Iqbal",
    role: "AI & Automation Lead",
    bio: "Builds the invisible systems that run quietly behind great products.",
    image: "/Team/WhatsApp Image 2026-05-06 at 22.56.11.jpeg",
    linkedin: "https://linkedin.com",
    initials: "SI",
  },
];

export const VALUES = [
  { title: "Craft over volume", body: "Fewer projects. Far more depth. Every detail considered." },
  { title: "Cinematic by default", body: "Motion, pacing, and atmosphere are part of the product — not garnish." },
  { title: "Systems, not screens", body: "We design systems that scale with your ambition, not just one-off pages." },
  { title: "Calm operations", body: "Calm processes, sharp decisions, weekly momentum. No theatrics." },
];

export const STATS = [
  { value: "70+", label: "Products shipped" },
  { value: "12", label: "Countries served" },
  { value: "98%", label: "Client retention" },
  { value: "4.9", label: "Average rating" },
];

export const CLIENTS = [
  "NORTHWIND",
  "ATLAS",
  "LUMEN",
  "HARBOR & CO",
  "ORBIT",
  "MERIDIAN",
  "PARALLEL",
  "VANTAGE",
];
