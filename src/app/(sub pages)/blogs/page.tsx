import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import BlogShowcase from "@/components/blog/BlogShowcase";
import Navbar from "@/components/Navbar";

import bg from "../../../../public/background/Pease.png";

export const metadata: Metadata = {
  title: "Blogs - Thoughts on Life, Identity & Growth | Peace (Pease) Adeniji",
  description:
    "Explore Peace (Pease) Adeniji's personal blogs featuring thoughtful reflections on womanhood, identity, love, literature, and the human experience. Read engaging stories and insights on Medium.",
  keywords: [
    "Peace Adeniji",
    "Pease Adeniji",
    "Peace Pease Adeniji",
    "Peace Pease Adeniji Blogs",
    "Peace Pease Adeniji Blogs",
    "Personal Blogs",
    "Life Reflections",
    "Book Reviews",
    "Personal Growth",
    "Writing",
    "Medium Articles",
    "Thought Leadership",
    "Personal Stories",
    "Social Commentary",
    "Literature Reviews",
    "Women's Perspectives",
    "Personal Development",
    "Storytelling",
    "Creative Writing",
    "Pease Adeniji Medium",
    "Nigerian Writer",
    "Tech Professional Blog",
    "Identity Essays",
    "Womanhood Reflections",
    "Blogs",
  ],
  openGraph: {
    title: "Blogs - Personal Reflections & Insights by Peace (Pease) Adeniji",
    description:
      "Discover thoughtful essays and personal reflections by Peace (Pease) Adeniji. From life experiences to book reviews, explore engaging stories and insights published on Medium.",
    url: "https://peaseadeniji.com/blogs",
  },
  twitter: {
    title: "Blogs - Peace (Pease) Adeniji | Personal Reflections & Insights",
    description:
      "Read personal essays, life reflections, and book reviews by Peace (Pease) Adeniji. Thoughtful writing on life, growth, and society published on Medium.",
  },
  alternates: {
    canonical: "/blogs",
  },
};

const Blogs = () => {
  return (
    <>
      <Navbar />
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Peace (Pease) Adeniji Blogs"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-[0.05]"
      />

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-0 sm:pt-16">
        <BlogShowcase />
      </div>
    </>
  );
};

export default Blogs;
