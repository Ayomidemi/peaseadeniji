"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Form from "@/components/contact/Form";
import Navbar from "@/components/Navbar";

import bg from "../../../public/background/Pease.png";

const contactInfo = {
  email: "adenijiayomide13@gmail.com",
  location: "Lagos, Nigeria",
  linkedin: "https://www.linkedin.com/in/peaceadeniji",
  portfolio: "https://peaseadeniji.com",
};

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[100vh] flex justify-center items-center pt-0 sm:pt-16">
        <Image
          src={bg}
          priority
          sizes="100vw"
          alt="Peace (Pease) Adeniji"
          className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-[0.05]"
        />

        <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white font-semibold text-center text-4xl sm:text-5xl capitalize"
            >
              Let&apos;s{" "}
              <span className="text-accent">Connect</span>
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto max-w-md"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-center font-light text-base xs:text-base max-w-[80%] sm:max-w-[65%]"
            >
              Have a project in mind or just want to chat? I&apos;m always
              excited to collaborate and explore new ideas. Reach out, and
              let&apos;s bring your vision to life!
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full max-w-full sm:max-w-4xl"
          >
            {/* Contact Information */}
            <div className="flex flex-col space-y-6 text-center lg:text-left">
              <h2 className="text-xl font-semibold text-foreground">
                Get in Touch
              </h2>

              <div className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <span className="text-accent font-medium text-base">
                    Email:
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-foreground hover:text-accent transition-colors text-base"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <span className="text-accent font-medium text-base">
                    Location:
                  </span>
                  <span className="text-foreground text-base">
                    {contactInfo.location}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <span className="text-accent font-medium text-base">
                    LinkedIn:
                  </span>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors text-base"
                  >
                    linkedin.com/in/peaceadeniji
                  </a>
                </div>
              </div>

              <div className="pt-4 hidden sm:flex">
                <p className="text-muted text-sm max-w-xs">
                  Available for remote work opportunities worldwide. Open to
                  full-time, contract, and consulting roles.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 w-full max-w-full sm:max-w-md">
              <Form />
            </div>
          </motion.div>
        </article>
      </div>
    </>
  );
};

export default ContactPage;
