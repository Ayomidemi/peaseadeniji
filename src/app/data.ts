/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectCategories = [
  {
    id: "fintech",
    name: "Fintech & Banking",
    description: "Financial technology and banking applications",
    icon: "💰",
    color: "bg-green-500/20 text-green-400",
  },
  {
    id: "web",
    name: "Web Applications",
    description:
      "Full-stack platforms, e-commerce, social impact projects, AI-powered apps, and 3D experiences",
    icon: "🌐",
    color: "bg-blue-500/20 text-blue-400",
  },

  {
    id: "web3",
    name: "Web3 & Blockchain",
    description: "Decentralized applications and NFT platforms",
    icon: "🔗",
    color: "bg-orange-500/20 text-orange-400",
  },

  {
    id: "mobile",
    name: "Mobile Apps",
    description: "React Native and Flutter mobile applications",
    icon: "📱",
    color: "bg-pink-500/20 text-pink-400",
  },
  {
    id: "webflow",
    name: "Webflow Design",
    description: "Custom websites and landing pages built with Webflow",
    icon: "🎨",
    color: "bg-indigo-500/20 text-indigo-400",
  },
  {
    id: "quant",
    name: "Quantitative & Research",
    description: "Python-based quantitative analysis and financial modeling",
    icon: "📊",
    color: "bg-emerald-500/20 text-emerald-400",
  },
];

export const projectsData = [
  {
    id: 1,
    name: "EasyShare Global",
    description:
      "Web3 cryptocurrency trading and sharing platform with modern DeFi features",
    longDescription:
      "EasyShare is a cutting-edge Web3 application that enables seamless cryptocurrency trading and sharing. Built with modern DeFi protocols, the platform provides users with intuitive tools for managing digital assets, peer-to-peer transactions, and decentralized finance operations.",
    date: "2024-09-15",
    demoLink: "https://app.easyshare.global",
    githubLink: "",
    category: "web3",
    technologies: [
      "React",
      "Web3.js",
      "Smart Contracts",
      "DeFi Protocols",
      "Cryptocurrency APIs",
      "Blockchain",
    ],
    features: [
      "Cryptocurrency trading",
      "P2P asset sharing",
      "DeFi integration",
      "Wallet connectivity",
    ],
    featured: true,
    status: "Live",
    image: "/projects/easyshare.png",
  },
  {
    id: 2,
    name: "Eze Wholesale",
    description:
      "E-commerce platform for bulk electronics with advanced inventory management",
    longDescription:
      "Full-stack e-commerce solution for wholesale electronics. Built with modern web technologies, featuring advanced search, inventory management, and international shipping capabilities.",
    date: "2023-02-04",
    demoLink: "https://www.ezewholesale.com",
    githubLink: "",
    category: "web",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "AWS"],
    features: [
      "Bulk ordering",
      "Inventory management",
      "Payment processing",
      "International shipping",
    ],
    featured: true,
    status: "Live",
    image: "/projects/eze-wholesale.png",
  },
  {
    id: 3,
    name: "Eze Enterprise",
    description:
      "B2B marketplace for sustainable IT hardware procurement and wholesale electronics",
    longDescription:
      "Eze Enterprise is a Y Combinator-backed B2B marketplace that enables businesses to procure sustainable IT hardware at wholesale prices. The platform offers new, manufacturer refurbished, and certified used electronics from top brands, helping companies save up to 70% on IT procurement while maintaining quality and compliance standards. Trusted by 20,000+ customers globally.",
    date: "2023-06-15",
    demoLink: "https://enterprise.ezewholesale.com/",
    githubLink: "",
    category: "web",
    technologies: [
      "React",
      "Node.js",
      "E-commerce Platform",
      "Payment Gateway",
      "Inventory Management",
      "Quality Assurance APIs",
    ],
    features: [
      "B2B wholesale marketplace",
      "Sustainable electronics procurement",
      "Quality certification process",
      "Global shipping & logistics",
    ],
    featured: true,
    status: "Live",
    image: "/projects/eze-enterprise.png",
  },
  {
    id: 4,
    name: "ChessInSlums Africa",
    description:
      "Non-profit platform empowering underprivileged children through chess education",
    longDescription:
      "A social impact web platform supporting chess education in underserved communities. Features event management, student tracking, donation processing, and community engagement tools.",
    date: "2022-11-12",
    demoLink: "https://www.chessinslumsafrica.com",
    githubLink: "",
    category: "web",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Mailchimp",
      "Social Impact",
    ],
    features: [
      "Event management",
      "Donation processing",
      "Student tracking",
      "Community engagement",
    ],
    featured: true,
    status: "Live",
    image: "/projects/chess-in-slums.png",
  },
  {
    id: 5,
    name: "SRK - Haute Horlogerie",
    description:
      "Luxury watchmaking website showcasing premium timepieces and craftsmanship",
    longDescription:
      "SRK is an elegant website for haute horlogerie (luxury watchmaking) built with Webflow. The platform showcases premium timepieces, expert craftsmanship, and the artistry behind luxury watch creation with sophisticated design and seamless user experience.",
    date: "2024-01-15",
    demoLink: "https://www.srk-hautehorlogerie.com",
    githubLink: "",
    category: "webflow",
    technologies: [
      "Webflow",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "CMS",
      "SEO Optimization",
    ],
    features: [
      "Luxury product showcase",
      "Responsive design",
      "Content management",
      "SEO optimization",
    ],
    featured: true,
    status: "Live",
    image: "/projects/srk-haute-horlogerie.png",
  },
  {
    id: 6,
    name: "Horizon Banking App",
    description:
      "Modern fintech application with intuitive banking features and real-time transactions",
    longDescription:
      "A comprehensive banking platform built with Next.js and modern fintech standards. Features include account management, transaction history, fund transfers, and real-time financial analytics.",
    date: "2024-07-13",
    demoLink: "https://horizon-banking-app-psi.vercel.app",
    githubLink: "",
    category: "fintech",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Plaid API",
      "Appwrite",
    ],
    features: [
      "Real-time transactions",
      "Multi-bank connectivity",
      "Financial analytics",
      "Responsive design",
    ],
    featured: false,
    status: "Live",
    image: "/projects/horizon-banking.png",
  },
  {
    id: 7,
    name: "Apple Website Clone",
    description:
      "Pixel-perfect recreation of Apple's website with advanced animations",
    longDescription:
      "A detailed recreation of Apple's website showcasing advanced CSS animations, responsive design, and modern web development techniques. Built with Next.js and Tailwind CSS.",
    date: "2023-09-18",
    demoLink: "https://next-js-apple-clone.vercel.app",
    githubLink: "",
    category: "web",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "GSAP"],
    features: [
      "Advanced animations",
      "Responsive design",
      "Performance optimization",
      "Modern UI/UX",
    ],
    featured: false,
    status: "Live",
    image: "/projects/apple-clone.png",
  },
  {
    id: 8,
    name: "NFT Marketplace - The Heisenbergs",
    description:
      "Web3 marketplace for NFT trading with modern UI and blockchain integration",
    longDescription:
      "A sophisticated NFT marketplace built with React and Web3 technologies. Features NFT minting, trading, wallet connectivity, and real-time market data integration.",
    date: "2022-03-13",
    demoLink: "https://nft-landing-page-by-peace.netlify.app",
    githubLink: "",
    category: "web3",
    technologies: [
      "React",
      "Web3.js",
      "Ethereum",
      "MetaMask",
      "IPFS",
      "Solidity",
    ],
    features: [
      "NFT minting",
      "Wallet integration",
      "Trading platform",
      "Market analytics",
    ],
    featured: false,
    status: "Live",
    image: "/projects/nft-marketplace.png",
  },
  {
    id: 9,
    name: "AI T-Shirt Design Generator",
    description:
      "3D interactive application for AI-powered custom t-shirt design and visualization",
    longDescription:
      "An innovative 3D application using Three.js and AI to generate custom t-shirt designs. Users can interact with 3D models, apply AI-generated designs, and visualize products in real-time.",
    date: "2024-07-20",
    demoLink: "https://ai-powered-threejs-t-shirt-generato.vercel.app/",
    githubLink: "",
    category: "web",
    technologies: [
      "React",
      "Three.js",
      "AI/OpenAI API",
      "3D Modeling",
      "Canvas API",
      "WebGL",
      "Framer Motion",
    ],
    features: [
      "3D visualization",
      "AI design generation",
      "Real-time customization",
      "3D model interaction",
    ],
    featured: false,
    status: "Live",
    image: "/projects/ai-tshirt.png",
  },
  {
    id: 10,
    name: "Peniel Day Foundation",
    description:
      "Educational platform for adolescent development and community outreach",
    longDescription:
      "A comprehensive platform for the Peniel Day Foundation focused on adolescent development. Features program management, resource sharing, and community engagement tools.",
    date: "2022-09-18",
    demoLink: "https://www.penielday.org/",
    githubLink: "",
    category: "web",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "EmailJS",
      "Social Impact",
    ],
    features: [
      "Program management",
      "Resource library",
      "Event coordination",
      "Community engagement",
    ],
    featured: false,
    status: "Live",
    image: "/projects/peniel-day.png",
  },
  {
    id: 11,
    name: "MyItura",
    description:
      "Digital health companion providing 24/7 telemedicine consultations and AI health assistance",
    longDescription:
      "MyItura is a comprehensive healthcare platform that makes managing health simple and stress-free. Features include 24/7 doctor consultations via chat/video, AI health assistant, secure health records storage, and online lab test ordering with home-based testing services.",
    date: "2024-06-03",
    demoLink: "https://play.google.com/store/apps/details?id=com.myitura.app",
    githubLink: "",
    category: "mobile",
    technologies: [
      "React Native",
      "Node.js",
      "AI/ML",
      "Healthcare APIs",
      "Video Calling",
      "Real-time Chat",
    ],
    features: [
      "24/7 doctor consultations",
      "AI health assistant",
      "Health records storage",
      "Home-based lab testing",
    ],
    featured: true,
    status: "Live",
    image: "/projects/myitura.png",
  },
  {
    id: 12,
    name: "TradeLenda",
    description:
      "Digital banking platform for SMEs providing loans, investments, and financial literacy",
    longDescription:
      "TradeLenda is a digital bank for SMEs, providing finance to micro, small and informal businesses. The platform offers financial literacy, micro investment and insurance services. Features BVN-based credit scoring, 6% interest rates, and 6-hour loan disbursement with 50K+ downloads.",
    date: "2025-04-02",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.tradelenda.app",
    githubLink: "",
    category: "mobile",
    technologies: [
      "React Native",
      "Node.js",
      "BVN Integration",
      "Credit Scoring",
      "Payment Systems",
      "Encryption",
    ],
    features: [
      "BVN-based credit scoring",
      "6-hour loan disbursement",
      "SME-focused lending",
      "Financial literacy tools",
    ],
    featured: true,
    status: "Live",
    image: "/projects/tradelenda.png",
  },
  {
    id: 13,
    name: "Eterna Jewelry",
    description:
      "Luxury jewelry e-commerce website showcasing handcrafted elegance and timeless designs",
    longDescription:
      "Eterna Jewelry is an exquisite luxury jewelry website built with Webflow, featuring handcrafted pieces from master artisans. The site showcases premium collections including necklaces, earrings, bracelets, rings, and charms, with custom engagement ring services. Features sophisticated product galleries, customer testimonials, and seamless e-commerce functionality.",
    date: "2024-03-20",
    demoLink: "https://eterna-jewelry.webflow.io/",
    githubLink: "",
    category: "webflow",
    technologies: [
      "Webflow",
      "E-commerce",
      "CMS",
      "Responsive Design",
      "Animation",
      "SEO Optimization",
    ],
    features: [
      "Luxury product showcase",
      "Custom jewelry configurator",
      "Customer testimonials",
      "Multi-location presence",
    ],
    featured: false,
    status: "Live",
    image: "/projects/eterna-jewelry.png",
  },
  {
    id: 14,
    name: "Amarta Experience",
    description:
      "Luxury Bali resort website featuring premium accommodations and wellness experiences",
    longDescription:
      "Amarta Experience is a sophisticated luxury resort website built with Webflow for a premium Bali destination. The site showcases villas, residences, culinary experiences, and wellness offerings perched atop Uluwatu's sacred cliffs. Features interactive booking systems, cultural event calendars, and immersive visual storytelling that captures the essence of Balinese hospitality.",
    date: "2024-02-15",
    demoLink: "https://amarta-experience.webflow.io/",
    githubLink: "",
    category: "webflow",
    technologies: [
      "Webflow",
      "Booking System",
      "Multi-language",
      "CMS",
      "Interactive Design",
      "Mobile Optimization",
    ],
    features: [
      "Luxury resort showcase",
      "Integrated booking system",
      "Cultural event calendar",
      "Wellness program display",
    ],
    featured: false,
    status: "Live",
    image: "/projects/amarta-experience.png",
  },
];

export const BtnList = [
  // { label: "Home", link: "/", icon: "home", newTab: false },
  // { label: "About", link: "/about", icon: "about", newTab: false },
  // { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  // { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Ayomidemi",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/peaceadeniji",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/pease_js",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
