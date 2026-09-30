import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import { projectsData } from "@/app/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-28 sm:px-8 sm:pt-36">
        <header className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            Software engineer
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-foreground sm:text-7xl">
            Peace Adeniji
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-[15px]">
            I build fintech products and the quantitative work behind them.
          </p>
        </header>

        <FeaturedProjects projects={projectsData} />
      </div>
      <Footer />
    </main>
  );
}
