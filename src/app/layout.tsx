import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next"
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Peace (Pease) Adeniji - Senior Software Engineer",
    default:
      "Peace (Pease) Adeniji - Senior Software Engineer & Quantitative Developer | Portfolio",
  },
  description:
    "Results-driven Senior Software Engineer and Quantitative Developer with 5+ years of experience building scalable, high-performance web and mobile applications. MSc in Financial Engineering from WorldQuant University. Expert in React, React Native, Node.js, Python, C++, and quantitative finance. Proven track record in leading remote engineering teams, optimizing systems, and delivering clean, maintainable code.",
  keywords: [
    "Peace Adeniji",
    "Pease Adeniji",
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
    title:
      "Peace (Pease) Adeniji - Senior Software Engineer & Quantitative Developer | Portfolio",
    description:
      "Senior Software Engineer & Quantitative Developer with 5+ years experience in React, React Native, Node.js, Python, C++. MSc Financial Engineering. Available for remote opportunities worldwide.",
    siteName: "Peace Adeniji Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Peace Adeniji - Senior Software Engineer & Quantitative Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Peace (Pease) Adeniji - Senior Software Engineer & Quantitative Developer",
    description:
      "Senior Software Engineer & Quantitative Developer specializing in React, React Native, Node.js, Python, C++. MSc Financial Engineering. 5+ years experience building scalable applications.",
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

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Peace Adeniji",
              alternateName: "Pease Adeniji",
              url: "https://peaseadeniji.com",
              image: "https://peaseadeniji.com/og-image.jpg",
              sameAs: [
                "https://www.linkedin.com/in/peaceadeniji",
                "https://github.com/Ayomidemi",
                "https://x.com/pease_js",
              ],
              jobTitle: [
                "Senior Software Engineer",
                "Quantitative Developer",
                "Financial Engineer",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Available for Opportunities",
              },
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "Python",
                "C++",
                "React",
                "React Native",
                "Node.js",
                "Next.js",
                "Flutter",
                "AWS",
                "Azure",
                "DevOps",
                "Mobile Development",
                "Web Development",
                "Software Engineering",
                "Quantitative Finance",
                "Financial Engineering",
                "Algorithmic Trading",
                "Financial Modeling",
                "Risk Management",
                "Portfolio Optimization",
                "Machine Learning",
                "Data Science",
                "Mathematical Modeling",
                "Statistical Analysis",
                "Time Series Analysis",
                "Derivatives Pricing",
                "Fintech",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
              },
              email: "adenijiayomide13@gmail.com",
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "WorldQuant University",
                  description: "Master of Science in Financial Engineering",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Miva Open University",
                  description: "Bachelor of Science in Computer Science",
                },
              ],
            }),
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
