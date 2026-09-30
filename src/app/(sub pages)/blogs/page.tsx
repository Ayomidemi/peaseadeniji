import React from "react";
import type { Metadata } from "next";
import BlogShowcase from "@/components/blog/BlogShowcase";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore Peace (Pease) Adeniji's personal blogs featuring thoughtful reflections on womanhood, identity, love, literature, and the human experience. Read engaging stories and insights on Medium.",
  keywords: [
    "Peace Adeniji",
    "Pease Adeniji",
    "Personal Blogs",
    "Life Reflections",
    "Book Reviews",
    "Personal Growth",
    "Writing",
    "Medium Articles",
  ],
  openGraph: {
    title: "Blogs · Peace Adeniji",
    description:
      "Discover thoughtful essays and personal reflections by Peace (Pease) Adeniji. From life experiences to book reviews, explore engaging stories and insights published on Medium.",
    url: "https://peaseadeniji.com/blogs",
  },
  twitter: {
    title: "Blogs · Peace Adeniji",
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
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 sm:px-8 sm:pt-36">
        <BlogShowcase />
      </div>
    </>
  );
};

export default Blogs;
