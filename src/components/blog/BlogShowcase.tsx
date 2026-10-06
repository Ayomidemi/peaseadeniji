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
    id: 6,
    title: "In the Twenty-Ninth Second",
    excerpt:
      "They say you get up to thirty seconds after death to reflect on life. Isn’t that interesting? Knowing that there is life, even after death. My last thirty seconds, what will I think about? The kiss I shared with James at the cinema last year or the way he looked at me afterwards?...",
    readTime: "4 min",
    category: "Personal Reflections",
    date: "2026",
    url: "https://medium.com/@peaseadeniji/in-the-twenty-ninth-second-158525ce8be8",
    featured: false,
  },
  {
    id: 1,
    title: "All of the People That I Am",
    excerpt:
      "I make noodles the way I saw a roommate make them in university. Brymo became an artist I love because the boy I liked loved him first. I love burgers because a talking stage in 2020 convinced me to try them...",
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
      "A few days ago, I posted on my story about how I hated being a woman, and I got a couple of replies. Some of them went: “Are you on your period?” “You shouldn’t say that because women are wonderful.” “Did something happen?”...",
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
      "A few days ago, I went on a solo date to a stage play even though I didn’t buy the ticket intending to go alone. I’d asked a man (whom I’d completely lost all respect for at the time) to come with me, and he agreed...",
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
      "And we’ve been ignoring it because it doesn’t wear a suit. The stock market is calm. Too calm sometimes. It moves with careful steps, checks the news, adjusts its tie...",
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
      "From the first page, Blessings resonated with me on such a personal level that I feel an overwhelming sense of gratitude to Chukwuebuka Ibeh for crafting this beautiful story. It is a beautiful and deeply relatable piece that took me on a long emotional journey...",
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
