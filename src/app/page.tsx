// import Image from "next/image";
import dynamic from "next/dynamic";

// import bg from "../../public/background/bg-image.png";
// import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigations";
import About from "./(sub pages)/about/page";
import Projects from "./(sub pages)/projects/page";
import Contact from "./(sub pages)/contact/page";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden px-6 sm:px-8">
      {/* <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-40"
      />

      <div className="w-full h-screen">
      <Navigation />
        
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div> */}

      <Navigation />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
