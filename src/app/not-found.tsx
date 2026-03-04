"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import bg from "../../public/background/Pease.png";

const NotFound = () => {
  const [glitchText, setGlitchText] = useState("404");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const terminalSequence = [
    "$ searching for page...",
    "> ERROR: Page not found in database",
    "> Checking backup servers...",
    "> ERROR: No backup found",
    "> Scanning alternative routes...",
    "> SUGGESTION: Return to home base",
    "> System ready for new command",
  ];

  // Client-side only effect
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Glitch effect for 404 text
  useEffect(() => {
    if (!isClient) return;

    const glitchInterval = setInterval(() => {
      const shouldGlitch = Math.random() < 0.1;
      if (shouldGlitch) {
        const glitchedText = "404"
          .split("")
          .map((char) =>
            Math.random() < 0.3
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : char
          )
          .join("");
        setGlitchText(glitchedText);
        setTimeout(() => setGlitchText("404"), 100);
      }
    }, 150);

    return () => clearInterval(glitchInterval);
  }, [isClient]);

  // Terminal animation
  useEffect(() => {
    if (!isClient) return;

    const terminalInterval = setInterval(() => {
      if (currentLineIndex < terminalSequence.length) {
        setTerminalLines((prev) => [
          ...prev,
          terminalSequence[currentLineIndex],
        ]);
        setCurrentLineIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setTerminalLines([]);
          setCurrentLineIndex(0);
        }, 3000);
      }
    }, 800);

    return () => clearInterval(terminalInterval);
  }, [currentLineIndex, terminalSequence, isClient]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-[0.04]"
      />

      <div className="relative z-10 text-center px-4 py-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.h1
              className="text-7xl md:text-8xl font-extrabold text-accent font-mono"
            >
              {glitchText}
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1.5 }}
              className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-4"
            />
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            This page wandered off{" "}
            <span className="text-accent">the path</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Looks like this page got a little lost. Don&apos;t worry, it
            happens to the best explorers—let&apos;s gently guide you back
            home.
          </p>
        </motion.div>

        {/* Terminal Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-background/90 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 mb-12 max-w-2xl mx-auto shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-muted text-sm font-mono ml-2">
              soft-terminal
            </span>
          </div>
          <div className="text-left space-y-2 min-h-[200px]">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-sm text-foreground/70"
              >
                {line}
                {index === terminalLines.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-accent"
                  >
                    |
                  </motion.span>
                )}
              </motion.div>
            ))}
            {!isClient && (
              <div className="font-mono text-sm text-foreground/60">
                Loading terminal...
              </div>
            )}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(86, 124, 228, 0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent/95 transition-colors shadow-md"
            >
              <span>←</span>
              Go Home
            </motion.button>
          </Link>

          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 border border-accent/60 text-accent font-semibold rounded-full hover:bg-accent/10 transition-colors"
            >
              <span>🚀</span>
              View Projects
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 border border-accent/60 text-accent font-semibold rounded-full hover:bg-accent/10 transition-colors"
            >
              <span>💬</span>
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Fun Error Codes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { code: "HTTP 404", desc: "Not Found" },
            { code: "ERRNO 2", desc: "No Such File" },
            { code: "STATUS", desc: "Missing" },
            { code: "LOCATE", desc: "Failed" },
          ].map((error, index) => (
            <motion.div
              key={error.code}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 + index * 0.1 }}
              className="bg-background/80 backdrop-blur-sm border border-foreground/5 rounded-xl p-4 text-center shadow-sm"
            >
              <div className="font-mono text-xs text-accent font-semibold">
                {error.code}
              </div>
              <div className="text-xs text-muted mt-1">{error.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-muted/70 text-sm font-mono">
            🔍 Gentle tip: Check the URL spelling, or start fresh from the
            homepage.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
