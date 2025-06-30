/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
// import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
          <ItemLayout
            className={
              " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
            }
          >
            <h2 className="text-xl md:text-2xl text-left w-full capitalize">
              Professional Summary
            </h2>
            <p className="font-light  text-sm sm:text-sm md:text-base">
              Results-driven Software Engineer and Quantitative Developer with
              5+ years of experience building scalable, high-performance web and
              mobile applications. MSc in Financial Engineering from WorldQuant
              University. Expert in React, React Native, Node.js, Next.js,
              Python, C++, and quantitative finance. Proven track record in
              leading remote engineering teams, optimizing systems, and
              delivering clean, maintainable code.
            </p>

            <p className="font-light text-sm sm:text-sm md:text-base">
              <span className="font-semibold text-sm sm:text-sm md:text-base text-left mb-2 block w-full">
                Core Expertise & Quantitative Skills
              </span>
              Specialized in full-stack development (React, Node.js), mobile
              applications (React Native, Flutter), and quantitative finance
              (Python, C++, mathematical modeling). Passionate about bridging
              technology and finance, contributing to mission-driven
              organizations, mentoring engineers, and driving impactful software
              solutions. Led internationalization efforts expanding apps to 4+
              languages and improved frontend performance by 35%.
            </p>
          </ItemLayout>

          <ItemLayout
            className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              5+{" "}
              <sub className="font-semibold text-base">years of experience</sub>
            </p>
          </ItemLayout>

          <ItemLayout
            className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
          >
            <img
              className="w-full h-full"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=ayomidemi&hide=contribs&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
              alt="Pease Adeniji"
              loading="lazy"
            />
          </ItemLayout>

          {/* Education Section */}
          <ItemLayout
            className={"col-span-full md:col-span-6 flex-col items-start"}
          >
            <h3 className="text-lg md:text-xl text-left w-full capitalize mb-3">
              Education
            </h3>
            <div className="space-y-3 w-full">
              <div className="border-l-2 border-accent/30 pl-4">
                <h4 className="text-sm font-semibold text-accent">
                  Master of Science (MSc) in Financial Engineering
                </h4>
                <p className="text-sm text-foreground/80">
                  WorldQuant University
                </p>
                <p className="text-sm text-muted">2026</p>
                <p className="text-sm text-muted mt-1">
                  Quantitative Finance • Risk Management • Portfolio
                  Optimization
                </p>
              </div>
              <div className="border-l-2 border-accent/30 pl-4">
                <h4 className="text-sm font-semibold text-accent">
                  Bachelor of Science (BSc) in Computer Science
                </h4>
                <p className="text-sm text-foreground/80">
                  Miva Open University
                </p>
                <p className="text-sm text-muted">2025</p>
                <p className="text-sm text-muted mt-1">
                  Software Engineering • Data Structures • Algorithms
                </p>
              </div>
            </div>
          </ItemLayout>

          {/* Key Achievements */}
          <ItemLayout
            className={"col-span-full md:col-span-6 flex-col items-start"}
          >
            <h3 className="text-lg md:text-xl text-left w-full capitalize mb-3">
              Key Achievements
            </h3>
            <ul className="space-y-2 text-sm sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>
                  Led internationalization expanding apps to 4+ languages and
                  currencies
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>
                  Improved frontend performance by 35% through UI optimization
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>
                  Reduced release cycle time by 40% through automated deployment
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Led team of 5 developers across multiple time zones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>
                  Developed quantitative models for financial risk assessment
                </span>
              </li>
            </ul>
          </ItemLayout>

          {/* Core Technologies */}
          <ItemLayout
            className={"col-span-full md:col-span-6 flex-col items-start"}
          >
            <h3 className="text-lg md:text-xl text-left w-full capitalize mb-3">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "Python", "C++"].map(
                (lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm sm:text-sm font-medium"
                  >
                    {lang}
                  </span>
                )
              )}
            </div>
          </ItemLayout>

          {/* Frameworks & Technologies */}
          <ItemLayout
            className={"col-span-full md:col-span-6 flex-col items-start"}
          >
            <h3 className="text-lg md:text-xl text-left w-full capitalize mb-3">
              Frameworks & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "React Native",
                "Next.js",
                "Node.js",
                "Express.js",
                "Django",
                "Flask",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted/20 text-foreground rounded-full text-sm sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ItemLayout>

          {/* All Skills Icons */}
          <ItemLayout className={"col-span-full"}>
            <img
              className="w-full h-auto"
              src={`https://skillicons.dev/icons?i=js,ts,python,cpp,react,nodejs,nextjs,flutter,dart,swift,java,aws,azure,docker,git,github,mongodb,postgresql,firebase,tailwind,figma,vscode`}
              alt="Pease Adeniji Technical Skills"
              loading="lazy"
            />
          </ItemLayout>

          {/* Languages */}
          <ItemLayout
            className={
              "col-span-full xs:col-span-6 lg:col-span-4 flex-col items-start"
            }
          >
            <h3 className="text-lg md:text-xl text-left w-full capitalize mb-3">
              Languages
            </h3>
            <div className="space-y-2 w-full text-sm sm:text-sm">
              <div className="flex justify-between">
                <span>English</span>
                <span className="text-muted">Full Professional</span>
              </div>
              <div className="flex justify-between">
                <span>Yoruba</span>
                <span className="text-muted">Native/Bilingual</span>
              </div>
            </div>
          </ItemLayout>

          {/* Availability */}
          <ItemLayout
            className={
              "col-span-full xs:col-span-6 lg:col-span-4 flex-col items-start"
            }
          >
            <h3 className="text-lg md:text-xl text-left w-full capitalize mb-3">
              Availability
            </h3>
            <div className="space-y-1 text-sm sm:text-sm">
              <p className="text-accent font-semibold">
                Open to New Opportunities
              </p>
              <p className="text-foreground/80">Remote & Hybrid Roles</p>
              <p className="text-muted">Full-time, Contract & Consulting</p>
              <p className="text-muted">Available Worldwide</p>
            </div>
          </ItemLayout>

          <ItemLayout
            className={
              "col-span-full xs:col-span-6 lg:col-span-4 flex-col items-start"
            }
          >
            <h3 className="text-lg md:text-xl text-left w-full capitalize mb-3">
              Interests
            </h3>
            <div className="flex flex-wrap gap-1">
              {[
                "Mathematics",
                "Volunteering",
                "Swimming",
                "Reading",
                "Writing",
                "Pottery",
                "Violin",
                "Research",
                "Mentorship",
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted/10 text-foreground/80 rounded text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </ItemLayout>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
