"use client";

import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/components/blog/BlogShowcase";

const HomeBlogPreview = () => {
  const topPosts = blogPosts.slice(0, 2);

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
              From the <span className="text-accent">blog</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-xl">
              Soft, personal essays on identity, love, and the small moments
              that shape a life.
            </p>
          </div>
          <motion.a
            href="/blogs"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-accent/60 text-sm font-medium text-accent hover:bg-accent/10 transition-colors"
          >
            View all essays →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topPosts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3 text-xs text-muted">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded-full">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:underline"
                >
                  Read on Medium
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogPreview;

