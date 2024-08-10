/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
// import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Who I Am & What I Do
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            Hi there! I’m Peace, but you can call me Pease (no deep story here,
            just a personal vibe 😉). I’m based in the vibrant city of Lagos,
            Nigeria. My passion lies in crafting UI effects, embracing
            cutting-edge tech, and bringing animations to life. I’m all about
            creating intuitive and dynamic user experiences. Whether it’s
            ReactJS, NodeJS, React Native, Flutter, or Kotlin, I’m here to build
            something awesome.
          </p>

          <p className="font-light text-xs sm:text-sm md:text-base">
            <span className="font-semibold text-xs sm:text-sm md:text-base text-left mb-2 block w-full">
              What I Excel At
            </span>
            I’ve got a knack for many things, but frontend development is where
            I truly shine. I’m especially thrilled by making interactive
            applications that captivate and engage. My ultimate goal? To become
            a top-notch Blockchain Engineer 😄. So, you’ll often find me diving
            into new projects and exploring the latest tech trends.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
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

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,azure,babel,blender,bootstrap,css,cypress,dart,django,docker,express,figma,firebase,flask,flutter,git,github,graphql,html,idea,ai,java,jest,kotlin,materialui,mongodb,nestjs,nextjs,nodejs,notion,pnpm,postman,py,react,redux,sass,sqlite,solidity,swift,tailwind,threejs,ts,vscode`}
            alt="Pease Adeniji"
            loading="lazy"
          />
        </ItemLayout>

        {/* <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=ayomidemi&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Pease Adeniji"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=ayomidemi&hide=contribs&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Pease Adeniji"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=ayomidemi&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Pease Adeniji"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/Ayomidemi/NextJs-Apple-Clone"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=ayomidemi&repo=NextJs-Apple-Clone&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Pease Adeniji"
              loading="lazy"
            />
          </Link>
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;
