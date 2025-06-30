import React from "react";
import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Me - Hire Software Engineer | Available for Remote Work",
  description:
    "Get in touch with Peace (Pease) Adeniji, Software Engineer available for remote opportunities worldwide. Open to full-time, contract, and consulting roles. Expert in React, React Native, Node.js, and modern web technologies. Based in Lagos, Nigeria with global availability.",
  keywords: [
    "Contact Peace Pease Adeniji",
    "Hire Software Engineer",
    "Remote Software Engineer",
    "React Developer for Hire",
    "Freelance Software Engineer",
    "Contract Developer",
    "Software Engineering Consultant",
    "Full Stack Developer Available",
    "React Native Developer Hire",
    "Node.js Developer Contact",
    "Remote Work Opportunities",
    "Software Engineer Lagos Nigeria",
    "International Remote Developer",
    "Technology Consultant",
    "Web Development Services",
    "Mobile App Development Services",
  ],
  openGraph: {
    title: "Contact Peace (Pease) Adeniji - Software Engineer for Hire",
    description:
      "Ready to hire a Software Engineer? Peace (Pease) Adeniji is available for remote opportunities worldwide. 5+ years experience in React, React Native, Node.js. Contact for collaboration.",
    url: "https://peaseadeniji.com/contact",
  },
  twitter: {
    title: "Hire Peace (Pease) Adeniji - Software Engineer",
    description:
      "Software Engineer available for remote work. 5+ years experience, expert in React/Node.js. Open to full-time, contract & consulting opportunities.",
  },
  alternates: {
    canonical: "/contact",
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
