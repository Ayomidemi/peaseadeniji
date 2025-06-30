"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  date: string;
  url: string;
  featured: boolean;
}

const BlogShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "I Hate Being a Woman, But Let Me Tell You Why",
      excerpt:
        "I said I hated being a woman and everyone asked if I was on my period. This is why that question misses the point entirely. From security guards who hang up on you to the reality that your voice goes shrill when you try to assert authority, sometimes the very body you love betrays you in a world that refuses to take you seriously.",
      readTime: "8 min read",
      category: "Personal Essays",
      date: "2025",
      url: "https://medium.com/@peaseadeniji/i-hate-being-a-woman-but-let-me-tell-you-why-e50158c716e6",
      featured: false,
    },
    {
      id: 2,
      title: "The Love Letter I Never Got to Pen",
      excerpt:
        "For all the words that stayed trapped in my throat, all the feelings that lived in the space between 'almost' and 'never.' This is for the love that existed in possibility, the tenderness that bloomed in silence, and the letters that live forever unwritten.",
      readTime: "6 min read",
      category: "Personal Reflections",
      date: "2025",
      url: "https://medium.com/@peaseadeniji/the-love-letter-i-never-got-to-pen-aecb12b05398",
      featured: false,
    },
    {
      id: 3,
      title:
        "What If the Loudest Asset in the Room Is the Only One Telling the Truth",
      excerpt:
        "Bitcoin doesn't whisper, it screams. While stocks move with careful, suited steps, crypto trades like it's chasing demons. What if the asset we dismiss as 'unhinged' is actually the most honest voice in the market, reacting to possibilities before everyone else even notices?",
      readTime: "3 min read",
      category: "Financial Analysis",
      date: "2025",
      url: "https://medium.com/@peaseadeniji/what-if-the-loudest-asset-in-the-room-is-the-only-one-telling-the-truth-5c6aca9439c4",
      featured: false,
    },
    {
      id: 4,
      title: "Blessings by Chukwuebuka Ibeh: A Book That Met Me Where I Was",
      excerpt:
        "When you're drowning in your own thoughts, sometimes the right book throws you a lifeline. This is about finding yourself reflected in someone else's words and realizing you're not as alone as you thought. Some books don't just tell stories, they hold you.",
      readTime: "7 min read",
      category: "Book Reviews",
      date: "2025",
      url: "https://medium.com/@peaseadeniji/blessings-by-chukwuebuka-ibeh-a-book-that-met-me-where-i-was-489987f563fa",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Personal <span className="text-accent">Blog</span>
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto max-w-md mb-6"
        />
        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          Thoughts on life, personal growth, and the human experience. A
          collection of essays exploring identity, society, literature, and the
          moments that shape us.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex items-center justify-center gap-2 text-muted/80"
        >
          <span className="text-sm">Published on</span>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">M</span>
            </div>
            <span className="text-sm font-medium">Medium</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            variants={cardVariants}
            onHoverStart={() => setHoveredCard(post.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className={`group relative ${post.featured ? "lg:col-span-2" : ""}`}
          >
            <motion.a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full bg-background/40 backdrop-blur-sm border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 group-hover:bg-background/60">
                {/* Featured Badge */}
                {post.featured && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full border border-accent/30"
                  >
                    Featured
                  </motion.div>
                )}

                {/* External Link Icon */}
                <div className="absolute top-4 left-4 opacity-60 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="pt-8">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted">
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h2
                    className={`font-bold text-foreground mb-4 group-hover:text-accent transition-colors ${
                      post.featured
                        ? "text-2xl md:text-3xl"
                        : "text-xl md:text-2xl"
                    }`}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <span>Read on Medium</span>
                    <motion.span
                      animate={{ x: hoveredCard === post.id ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 border border-accent/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(254, 254, 91, 0.05) 0%, transparent 100%)",
                  }}
                />
              </div>
            </motion.a>
          </motion.article>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-20 text-center"
      >
        <div className="bg-background/40 backdrop-blur-sm p-8 rounded-lg border border-accent/30 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to stay updated?
          </h3>
          <p className="text-muted mb-6">
            Follow Pease Adeniji on Medium for the latest essays, reflections,
            and book reviews. New stories published regularly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://medium.com/@peaseadeniji"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">M</span>
              </div>
              Follow on Medium
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors"
            >
              💬 Get In Touch
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogShowcase;
