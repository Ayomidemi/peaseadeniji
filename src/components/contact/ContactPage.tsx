"use client";

import React from "react";
import Form from "@/components/contact/Form";
import Navbar from "@/components/Navbar";

const contactInfo = {
  email: "adenijiayomide13@gmail.com",
  location: "Lagos, Nigeria",
  linkedin: "https://www.linkedin.com/in/peaceadeniji",
};

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-background pb-24 pt-28 sm:pt-36">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <header className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              Contact
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl">
              Send a note
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-[15px]">
              A project, a role, or a question. I reply to every message.
            </p>
          </header>

          <div className="mt-16 grid gap-16 pt-10 lg:grid-cols-[minmax(0,16rem)_minmax(0,28rem)] lg:gap-24">
            <div className="space-y-8 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-2 inline-block text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">
                  Location
                </p>
                <p className="mt-2 text-foreground">{contactInfo.location}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">
                  LinkedIn
                </p>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
                >
                  linkedin.com/in/peaceadeniji
                </a>
              </div>

              <p className="max-w-xs text-sm leading-relaxed text-muted">
                Open to remote work worldwide — full-time, contract, and
                consulting.
              </p>
            </div>

            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
