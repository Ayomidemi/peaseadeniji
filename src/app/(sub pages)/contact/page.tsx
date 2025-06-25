import React from "react";
import type { Metadata } from "next";
// import Image from "next/image";

// import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata: Metadata = {
  title:
    "Contact Me - Hire Senior Software Engineer | Available for Remote Work",
  description:
    "Get in touch with Peace Adeniji, Senior Software Engineer available for remote opportunities worldwide. Open to full-time, contract, and consulting roles. Expert in React, React Native, Node.js, and modern web technologies. Based in Lagos, Nigeria with global availability.",
  keywords: [
    "Contact Peace Adeniji",
    "Hire Senior Software Engineer",
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
    title: "Contact Peace Adeniji - Senior Software Engineer for Hire",
    description:
      "Ready to hire a Senior Software Engineer? Peace Adeniji is available for remote opportunities worldwide. 5+ years experience in React, React Native, Node.js. Contact for collaboration.",
    url: "https://peaseadeniji.com/contact",
  },
  twitter: {
    title: "Hire Peace Adeniji - Senior Software Engineer",
    description:
      "Senior Software Engineer available for remote work. 5+ years experience, expert in React/Node.js. Open to full-time, contract & consulting opportunities.",
  },
  alternates: {
    canonical: "/contact",
  },
};

const contactInfo = {
  email: "adenijiayomide13@gmail.com",
  location: "Lagos, Nigeria",
  linkedin: "https://www.linkedin.com/in/peaceadeniji",
  portfolio: "https://peaseadeniji.com",
};

const Contact = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      {/* <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Pease Adeniji"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
      /> */}

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Let&apos;s Connect
          </h1>
          <p className="text-center font-light text-base xs:text-base max-w-[80%] sm:max-w-[65%]">
            Have a project in mind or just want to chat? I&apos;m always excited
            to collaborate and explore new ideas. Reach out, and let&apos;s
            bring your vision to life!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full max-w-full sm:max-w-4xl">
          {/* Contact Information */}
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <h2 className="text-xl font-semibold text-foreground">
              Get in Touch
            </h2>

            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                <span className="text-accent font-medium text-base">
                  Email:
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-foreground hover:text-accent transition-colors text-base"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                <span className="text-accent font-medium text-base">
                  Location:
                </span>
                <span className="text-foreground text-base">
                  {contactInfo.location}
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                <span className="text-accent font-medium text-base">
                  LinkedIn:
                </span>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors text-base"
                >
                  linkedin.com/in/peaceadeniji
                </a>
              </div>
            </div>

            <div className="pt-4 hidden sm:flex">
              <p className="text-muted text-sm max-w-xs">
                Available for remote work opportunities worldwide. Open to
                full-time, contract, and consulting roles.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full max-w-full sm:max-w-md">
            <Form />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Contact;
