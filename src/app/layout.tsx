import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Pease Adeniji",
    default: "Pease Adeniji",
  },
  description:
    "Experienced Front-End Engineer with a proven record in codebase optimization, project leadership, and junior developer mentorship. Committed to continuous learning and enhancing team performance for improved user efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        <FireFliesBackground />
        {children}
      </body>
    </html>
  );
}
