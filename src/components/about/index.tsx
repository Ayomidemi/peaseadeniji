import React from "react";
import Link from "next/link";

const AboutDetails = () => {
  const years = new Date().getFullYear() - 2020;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-24 sm:px-8">
      <div className="max-w-2xl space-y-6 border-t border-blush pt-10 text-sm leading-relaxed text-muted">
        <p>
          Software engineer and quantitative developer with {years}+ years
          building web and mobile products. MSc in Financial Engineering from
          WorldQuant University. I work in React, React Native, Node.js,
          Next.js, Python, and C++.
        </p>
        <p>
          Most of the work is fintech and social impact: products people
          actually open, then the models underneath. I have led remote teams,
          taken apps into four languages, and cut frontend load time by about
          35%.
        </p>
      </div>

      <div className="mt-16 grid gap-12 border-t border-blush pt-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-foreground">Education</h2>
          <div className="mt-6 space-y-6 text-sm">
            <div>
              <p className="text-foreground">
                MSc, Financial Engineering
              </p>
              <p className="mt-1 text-muted">WorldQuant University · 2027</p>
            </div>
            <div>
              <p className="text-foreground">BSc, Computer Science</p>
              <p className="mt-1 text-muted">Miva Open University · 2026</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl text-foreground">Tools</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            JavaScript, TypeScript, Python, C++, React, React Native, Next.js,
            Node.js, Nest.js, Express, Django, Flask, PostgreSQL, MongoDB,
            Docker, Kubernetes.
          </p>
          <Link
            href="https://github.com/Ayomidemi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
