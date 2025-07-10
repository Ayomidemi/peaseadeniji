import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Peace (Pease) Adeniji - Software Engineer",
    default:
      "Peace (Pease) Adeniji - Software Engineer & Quantitative Developer",
  },
  description:
    "Results-driven Software Engineer and Quantitative Developer with 5+ years of experience building scalable, high-performance web and mobile applications. MSc in Financial Engineering from WorldQuant University. Expert in React, React Native, Node.js, Python, C++, and quantitative finance. Proven track record in leading remote engineering teams, optimizing systems, and delivering clean, maintainable code.",
  keywords: [
    "Peace Adeniji",
    "Pease Adeniji",
    "Pease",
    "Peace",
    "Software Engineer",
    "Senior Software Engineer",
    "Quantitative Developer",
    "Quantitative Engineer",
    "Financial Engineer",
    "Frontend Developer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "Python Developer",
    "C++ Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Mobile App Developer",
    "Web Developer",
    "Software Engineer Lagos",
    "Remote Software Engineer",
    "Nigerian Developer",
    "Freelance Developer",
    "Tech Lead",
    "Engineering Manager",
    "DevOps Engineer",
    "UI/UX Developer",
    "Next.js Developer",
    "Flutter Developer",
    "AWS Developer",
    "Azure Developer",
    "Financial Engineering",
    "Quantitative Finance",
    "Algorithmic Trading",
    "Financial Modeling",
    "Risk Management",
    "Portfolio Optimization",
    "Machine Learning",
    "Data Science",
    "Mathematical Modeling",
    "Statistical Analysis",
    "WorldQuant University",
    "Computer Science",
    "Fintech Developer",
    "Quant Developer",
    "Trading Systems",
    "Financial Technology",
    "Derivatives Pricing",
    "Time Series Analysis",
    "Enclave Studios",
    "Eze Wholesales",
    "Chess In Slums Africa",
    "TechBeaver",
    "Peniel Day",
  ],
  authors: [{ name: "Peace Adeniji", url: "https://peaseadeniji.com" }],
  creator: "Peace Adeniji",
  publisher: "Peace Adeniji",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://peaseadeniji.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://peaseadeniji.com",
    title: "Peace (Pease) Adeniji - Software Engineer & Quantitative Developer",
    description:
      "Software Engineer & Quantitative Developer with 5+ years experience in React, React Native, Node.js, Python, C++. MSc Financial Engineering. Available for remote opportunities worldwide.",
    siteName: "Peace (Pease) Adeniji",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Peace Adeniji - Software Engineer & Quantitative Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peace (Pease) Adeniji - Software Engineer & Quantitative Developer",
    description:
      "Software Engineer & Quantitative Developer specializing in React, React Native, Node.js, Python, C++. MSc Financial Engineering. 5+ years experience building scalable applications.",
    creator: "@pease_js",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/pease.svg",
        color: "#fefe5b",
      },
    ],
  },
  verification: {
    // Add these when you set up Google Search Console and other tools
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1b1b1b" />
        <meta name="color-scheme" content="dark light" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* AI-friendly meta tags */}
        <meta name="author" content="Peace Adeniji" />
        <meta
          name="subject"
          content="Software Engineering and Quantitative Development"
        />
        <meta
          name="classification"
          content="Technology, Software Development, Portfolio"
        />
        <meta
          name="category"
          content="Software Engineering, Quantitative Finance, Technology"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />

        {/* Entity and Knowledge Graph hints for AI */}
        <meta property="profile:first_name" content="Peace" />
        <meta property="profile:last_name" content="Adeniji" />
        <meta property="profile:username" content="pease_js" />
        <meta property="profile:gender" content="female" />
        <meta property="article:author" content="Peace Adeniji" />
        <meta
          property="business:contact_data:street_address"
          content="Lagos, Nigeria"
        />
        <meta property="business:contact_data:locality" content="Lagos" />
        <meta property="business:contact_data:region" content="Lagos State" />
        <meta property="business:contact_data:postal_code" content="100001" />
        <meta property="business:contact_data:country_name" content="Nigeria" />

        {/* Professional identity for AI systems */}
        <meta
          name="profession"
          content="Software Engineer, Quantitative Developer"
        />
        <meta
          name="expertise"
          content="React, React Native, Node.js, Python, C++, Financial Engineering, Quantitative Finance"
        />
        <meta name="experience_years" content="5+" />
        <meta
          name="availability"
          content="Available for remote opportunities"
        />
        <meta name="work_type" content="Full-time, Contract, Consulting" />
        <meta
          name="specialization"
          content="Fintech, Web Development, Mobile Development, Quantitative Analysis"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="DA-VhKcOmXlSVzIeGINjlk_UXrM7dWVNJxZbCJFYbLk"
        />

        {/* Enhanced JSON-LD Structured Data for AI SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://peaseadeniji.com/#person",
                name: "Peace Adeniji",
                alternateName: ["Pease Adeniji", "Peace (Pease) Adeniji"],
                url: "https://peaseadeniji.com",
                image: {
                  "@type": "ImageObject",
                  url: "https://peaseadeniji.com/og-image.jpg",
                  width: 1200,
                  height: 630,
                },
                sameAs: [
                  "https://www.linkedin.com/in/peaceadeniji",
                  "https://github.com/Ayomidemi",
                  "https://x.com/pease_js",
                  "https://twitter.com/pease_js",
                ],
                jobTitle: [
                  "Senior Software Engineer",
                  "Quantitative Developer",
                  "Financial Engineer",
                  "Full Stack Developer",
                  "React Native Developer",
                ],
                description:
                  "Results-driven Software Engineer and Quantitative Developer with 5+ years of experience building scalable, high-performance web and mobile applications. MSc in Financial Engineering from WorldQuant University.",
                worksFor: {
                  "@type": "Organization",
                  name: "Available for Remote Opportunities",
                  description: "Freelance Software Engineer & Consultant",
                },
                hasOccupation: [
                  {
                    "@type": "Occupation",
                    name: "Software Engineer",
                    occupationLocation: {
                      "@type": "Place",
                      name: "Remote Worldwide",
                    },
                    skills: [
                      "React",
                      "React Native",
                      "Node.js",
                      "Python",
                      "TypeScript",
                      "JavaScript",
                      "C++",
                      "Next.js",
                      "Nest.js",
                      "Express.js",
                      "PostgreSQL",
                      "MongoDB",
                      "Docker",
                      "Kubernetes",
                      "CI/CD",
                      "AWS",
                      "Azure",
                    ],
                  },
                  {
                    "@type": "Occupation",
                    name: "Quantitative Developer",
                    occupationLocation: {
                      "@type": "Place",
                      name: "Remote Worldwide",
                    },
                    skills: [
                      "Financial Engineering",
                      "Algorithmic Trading",
                      "Risk Management",
                      "Portfolio Optimization",
                      "Machine Learning",
                      "Mathematical Modeling",
                      "Statistical Analysis",
                      "Python",
                      "C++",
                    ],
                  },
                ],
                knowsAbout: [
                  {
                    "@type": "Thing",
                    name: "Programming Languages",
                    description:
                      "JavaScript, TypeScript, Python, C++, SQL, HTML, CSS",
                  },
                  {
                    "@type": "Thing",
                    name: "Frontend Technologies",
                    description:
                      "React, React Native, Next.js, Tailwind CSS, Material-UI",
                  },
                  {
                    "@type": "Thing",
                    name: "Backend Technologies",
                    description:
                      "Node.js, Express.js, Python Flask/Django, PostgreSQL, MongoDB, Nest.js",
                  },
                  {
                    "@type": "Thing",
                    name: "Cloud & DevOps",
                    description:
                      "AWS, Azure, Docker, Kubernetes, CI/CD, Git, Linux",
                  },
                  {
                    "@type": "Thing",
                    name: "Financial Technology",
                    description:
                      "Quantitative Finance, Algorithmic Trading, Risk Management, Financial Modeling, Derivatives Pricing",
                  },
                  {
                    "@type": "Thing",
                    name: "Data Science & AI",
                    description:
                      "Machine Learning, Data Analysis, Statistical Modeling, Time Series Analysis",
                  },
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Lagos",
                  addressRegion: "Lagos State",
                  addressCountry: "Nigeria",
                  postalCode: "100001",
                },
                email: "adenijiayomide13@gmail.com",
                telephone: "+234-XXX-XXX-XXXX",
                nationality: "Nigerian",
                alumniOf: [
                  {
                    "@type": "EducationalOrganization",
                    name: "WorldQuant University",
                    description: "Master of Science in Financial Engineering",
                    url: "https://www.wqu.edu/",
                    startDate: "2025",
                    endDate: "2027",
                  },
                  {
                    "@type": "EducationalOrganization",
                    name: "Miva Open University",
                    description: "Bachelor of Science in Computer Science",
                    startDate: "2023",
                    endDate: "2025",
                  },
                  {
                    "@type": "EducationalOrganization",
                    name: "University of Lagos",
                    description: "Bachelor of Science in Marine Biology",
                    startDate: "2019",
                    endDate: "2023",
                  },
                ],
                award: [
                  "MSc Financial Engineering Graduate",
                  "Computer Science Graduate",
                  "5+ Years Software Development Experience",
                ],
                hasCredential: [
                  {
                    "@type": "EducationalOccupationalCredential",
                    name: "Master of Science in Financial Engineering",
                    educationalLevel: "Graduate",
                    credentialCategory: "Degree",
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    name: "Bachelor of Science in Computer Science",
                    educationalLevel: "Undergraduate",
                    credentialCategory: "Degree",
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    name: "Bachelor of Science in Marine Biology",
                    educationalLevel: "Undergraduate",
                    credentialCategory: "Degree",
                  },
                ],
                workExample: [
                  {
                    "@type": "CreativeWork",
                    name: "EasyShare Global",
                    description:
                      "Web3 cryptocurrency trading platform with DeFi features",
                    url: "https://app.easyshare.global",
                  },
                  {
                    "@type": "CreativeWork",
                    name: "Eze Wholesale",
                    description:
                      "E-commerce platform for bulk electronics with inventory management",
                    url: "https://www.ezewholesale.com",
                  },
                  {
                    "@type": "CreativeWork",
                    name: "MyItura Health App",
                    description:
                      "Digital health platform with 24/7 telemedicine consultations",
                    url: "https://play.google.com/store/apps/details?id=com.myitura.app",
                  },
                  {
                    "@type": "CreativeWork",
                    name: "TradeLenda",
                    description:
                      "Digital banking platform for SMEs with BVN-based credit scoring",
                    url: "https://play.google.com/store/apps/details?id=com.tradelenda.app",
                  },
                ],
                seeks: {
                  "@type": "Demand",
                  name: "Remote Software Engineering Opportunities",
                  description:
                    "Looking for remote full-time or contract opportunities in software engineering, quantitative development, or fintech",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://peaseadeniji.com/#website",
                url: "https://peaseadeniji.com",
                name: "Peace Adeniji - Software Engineer Portfolio",
                description:
                  "Professional portfolio of Peace Adeniji, Software Engineer and Quantitative Developer with expertise in React, React Native, Python, and Financial Engineering",
                author: {
                  "@id": "https://peaseadeniji.com/#person",
                },
                inLanguage: "en-US",
                copyrightYear: "2024",
                copyrightHolder: {
                  "@id": "https://peaseadeniji.com/#person",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://peaseadeniji.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://peaseadeniji.com/#service",
                name: "Software Development & Quantitative Analysis Services",
                description:
                  "Professional software development, web application development, mobile app development, and quantitative analysis services",
                provider: {
                  "@id": "https://peaseadeniji.com/#person",
                },
                serviceType: [
                  "Software Development",
                  "Web Development",
                  "Mobile App Development",
                  "Quantitative Analysis",
                  "Financial Engineering",
                  "Technical Consulting",
                ],
                areaServed: "Worldwide",
                availableLanguage: "English",
                url: "https://peaseadeniji.com",
                serviceOutput: [
                  "Web Applications",
                  "Mobile Applications",
                  "Trading Systems",
                  "Financial Models",
                  "API Development",
                  "Database Design",
                ],
              },
            ]),
          }}
        />
      </head>
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}

        {/* <FireFliesBackground /> */}
        {/* <Sound />
        <div id="my-modal" /> */}
      </body>
    </html>
  );
}
