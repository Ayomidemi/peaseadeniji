/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";

const GitHubStatsCard = () => {
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const handleError = () => {
    if (retryKey < 2) {
      setRetryKey((current) => current + 1);
      return;
    }

    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="w-full text-left space-y-3">
        <p className="text-base font-semibold text-foreground">GitHub</p>
        <p className="text-sm text-muted leading-relaxed">
          Commits, repos, and side projects — see what I&apos;m building on
          GitHub.
        </p>
        <Link
          href="https://github.com/Ayomidemi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm font-medium text-accent hover:underline"
        >
          View on GitHub →
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center">
      <img
        key={retryKey}
        className="w-full max-w-none scale-110 origin-center"
        src={
          retryKey > 0
            ? `/api/github-stats?retry=${retryKey}`
            : "/api/github-stats"
        }
        alt="GitHub stats for Pease Adeniji"
        loading="eager"
        decoding="async"
        onError={handleError}
      />
    </div>
  );
};

export default GitHubStatsCard;
