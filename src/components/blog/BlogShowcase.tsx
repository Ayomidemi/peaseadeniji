"use client";

import React from "react";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  date: string;
  url: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "All of the People That I Am",
    excerpt:
      "I am a mosaic of everyone I have ever loved, even if only for a heartbeat. From noodles made like a roommate once did, to songs, books, and rainy Saturday mornings borrowed from almost-lovers and friends, I exist in habits I picked up from people who no longer stay.",
    readTime: "2 min",
    category: "Personal Essays",
    date: "2025",
    url: "https://medium.com/@peaseadeniji/all-of-the-people-that-i-am-9c1d9234bfe7",
    featured: false,
  },
  {
    id: 2,
    title: "I Hate Being a Woman, But Let Me Tell You Why",
    excerpt:
      "I said I hated being a woman and everyone asked if I was on my period. This is why that question misses the point entirely. From security guards who hang up on you to the reality that your voice goes shrill when you try to assert authority.",
    readTime: "8 min",
    category: "Personal Essays",
    date: "2025",
    url: "https://medium.com/@peaseadeniji/i-hate-being-a-woman-but-let-me-tell-you-why-e50158c716e6",
    featured: false,
  },
  {
    id: 3,
    title: "The Love Letter I Never Got to Pen",
    excerpt:
      "For all the words that stayed trapped in my throat, all the feelings that lived in the space between almost and never. This is for the love that existed in possibility, and the letters that live forever unwritten.",
    readTime: "6 min",
    category: "Personal Reflections",
    date: "2025",
    url: "https://medium.com/@peaseadeniji/the-love-letter-i-never-got-to-pen-aecb12b05398",
    featured: false,
  },
  {
    id: 4,
    title:
      "What If the Loudest Asset in the Room Is the Only One Telling the Truth",
    excerpt:
      "Bitcoin doesn't whisper, it screams. While stocks move with careful, suited steps, crypto trades like it's chasing demons. What if the asset we dismiss as unhinged is actually the most honest voice in the market?",
    readTime: "3 min",
    category: "Financial Analysis",
    date: "2025",
    url: "https://medium.com/@peaseadeniji/what-if-the-loudest-asset-in-the-room-is-the-only-one-telling-the-truth-5c6aca9439c4",
    featured: false,
  },
  {
    id: 5,
    title: "Blessings by Chukwuebuka Ibeh: A Book That Met Me Where I Was",
    excerpt:
      "When you're drowning in your own thoughts, sometimes the right book throws you a lifeline. This is about finding yourself reflected in someone else's words and realizing you're not as alone as you thought.",
    readTime: "7 min",
    category: "Book Reviews",
    date: "2025",
    url: "https://medium.com/@peaseadeniji/blessings-by-chukwuebuka-ibeh-a-book-that-met-me-where-i-was-489987f563fa",
    featured: false,
  },
];

const BlogShowcase = () => {
  return (
    <div>
      <header className="mb-14 max-w-xl">
        <h1 className="font-serif text-5xl text-foreground sm:text-6xl">
          Writing
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
          Essays on identity, markets, and the books that stayed. Published on
          Medium.
        </p>
      </header>

      <div className="divide-y divide-blush border-t border-blush">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-8"
          >
            <p className="text-xs tracking-wide text-muted">
              {post.category} · {post.date} · {post.readTime}
            </p>
            <h2 className="mt-3 font-serif text-2xl text-foreground sm:text-3xl">
              {post.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-block text-sm text-foreground underline decoration-blush decoration-2 underline-offset-4 group-hover:decoration-accent">
              Read
            </span>
          </a>
        ))}
      </div>

      <a
        href="https://medium.com/@peaseadeniji"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-block text-sm text-foreground underline decoration-blush decoration-2 underline-offset-4 hover:decoration-accent"
      >
        All essays on Medium
      </a>
    </div>
  );
};

export default BlogShowcase;
