import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="mx-auto w-full max-w-5xl flex-1 px-6 pb-24 pt-36 sm:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">404</p>
        <h1 className="mt-4 font-serif text-5xl text-foreground sm:text-6xl">
          This page is not here.
        </h1>
        <div className="mt-8 flex gap-6 text-sm">
          <Link
            href="/"
            className="text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
          >
            Projects
          </Link>
          <Link
            href="/quant"
            className="text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
          >
            Quant
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
