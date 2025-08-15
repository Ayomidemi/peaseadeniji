import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import About from "./(sub pages)/about/page";
import Contact from "./(sub pages)/contact/page";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import { projectsData } from "@/app/data";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden px-6 sm:px-8">
      <Navbar />
      <div className="pt-16">
        <About />
        <FeaturedProjects projects={projectsData} />
        <Contact />
      </div>
    </main>
  );
}
