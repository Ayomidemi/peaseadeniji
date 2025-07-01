"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ResearchComingSoon = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const [streamData, setStreamData] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  const messages = [
    "Initializing research protocols...",
    "Collecting quantitative data...",
    "Analyzing market patterns...",
    "Processing financial models...",
    "Calibrating AI algorithms...",
    "Optimizing portfolio strategies...",
    "Ready for launch...",
  ];

  const researchAreas = [
    { name: "Quantitative Finance", progress: 78 },
    { name: "Machine Learning", progress: 85 },
    { name: "Risk Management", progress: 62 },
    { name: "Algorithmic Trading", progress: 91 },
    { name: "Portfolio Optimization", progress: 74 },
    { name: "Financial Engineering", progress: 83 },
  ];

  // Matrix effect
  useEffect(() => {
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const matrix = [];
    for (let i = 0; i < 50; i++) {
      matrix.push(chars[Math.floor(Math.random() * chars.length)]);
    }
    setMatrixChars(matrix);

    const interval = setInterval(() => {
      setMatrixChars((prev) =>
        prev.map(() => chars[Math.floor(Math.random() * chars.length)])
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Message cycling
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(messageInterval);
  }, [messages.length]);

  // Progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 3;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  // Client-side only effect
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Stream data generation (client-side only)
  useEffect(() => {
    if (!isClient) return;

    const generateStreamData = () => {
      const newData = Array.from(
        { length: 5 },
        (_, i) =>
          `${Date.now() + i} | Processing dataset_${Math.floor(
            Math.random() * 1000
          )}.csv...`
      );
      setStreamData(newData);
    };

    generateStreamData();
    const streamInterval = setInterval(generateStreamData, 2000);

    return () => clearInterval(streamInterval);
  }, [isClient]);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-0 sm:py-16 lg:py-20">
      {/* Matrix Background Effect */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex flex-wrap opacity-10">
          {matrixChars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, 20, 40],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "linear",
              }}
              className="text-accent text-xs font-mono"
              style={{
                position: "absolute",
                left: `${(index % 10) * 10}%`,
                top: `${Math.floor(index / 10) * 10}%`,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div> */}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center space-y-12"
      >
        {/* Header */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground"
          >
            Research <span className="text-accent">Hub</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto max-w-md"
          />
        </div>

        {/* Status Messages */}
        <div className="space-y-4">
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="bg-background/80 backdrop-blur-sm border border-accent/30 rounded-lg p-4 max-w-md mx-auto"
          >
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
                <div className="w-2 h-2 bg-accent rounded-full animate-ping animation-delay-200" />
                <div className="w-2 h-2 bg-accent rounded-full animate-ping animation-delay-400" />
              </div>
              <span className="text-foreground font-mono text-sm">
                {messages[currentMessage]}
              </span>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="bg-muted/20 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent/60"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-sm text-muted mt-2 font-mono">
              Data Collection: {Math.floor(progress)}%
            </p>
          </div>
        </div>

        {/* Research Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background/40 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/40 transition-all duration-300"
            >
              <h3 className="text-foreground font-semibold mb-3">
                {area.name}
              </h3>
              <div className="space-y-2">
                <div className="bg-muted/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${area.progress}%` }}
                    transition={{ delay: 2.5 + index * 0.2, duration: 1.5 }}
                    className="h-full bg-gradient-to-r from-accent to-accent/60"
                  />
                </div>
                <p className="text-xs text-muted font-mono">
                  {area.progress}% analyzed
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="space-y-6"
        >
          <div className="p-8 rounded-lg border border-accent/30 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🔬 Research Coming Soon
            </h2>
            <p className="text-muted leading-relaxed">
              I&apos;m currently collecting and analyzing data across multiple
              research domains. This hub will feature original research in
              quantitative finance, machine learning applications in trading,
              risk management strategies, and cutting-edge financial engineering
              solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {[
                "📊 Data Analysis",
                "🤖 AI Models",
                "📈 Trading Algorithms",
                "⚡ Risk Management",
              ].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.5 + index * 0.1 }}
                  className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Contact for Early Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-muted mb-4">
              Interested in early access to research findings?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get Notified
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Data Stream Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="mt-12 font-mono text-xs text-accent/60 max-w-4xl mx-auto overflow-hidden"
        >
          <div className="bg-background/20 rounded-lg p-4 border border-accent/10">
            <div className="flex justify-between items-center mb-2">
              <span>Real-time Data Stream</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div className="space-y-1 text-left">
              {isClient &&
                streamData.map((data, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: [0, 1, 0], x: [0, 200, 400] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "linear",
                    }}
                    className="text-xs"
                  >
                    {data}
                  </motion.div>
                ))}
              {!isClient && (
                <div className="text-xs">Loading data stream...</div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResearchComingSoon;
