"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (params: Record<string, unknown> | undefined) => {
    const toastId = toast.loading("Sending your message, please wait...");

    emailjs
      .send(
        String(process.env.NEXT_PUBLIC_SERVICE_ID),
        String(process.env.NEXT_PUBLIC_TEMPLATE_ID),
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I have received your message, I will get back to you soon!",
            {
              id: toastId,
            }
          );
          reset(); // Clear the form after successful submission
        },
        (error) => {
          //   console.log("FAILED...", error.text);
          toast.error(
            "There was an error sending your message, please try again later!",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data: any) => {
    const templateParams = {
      to_name: "Peace Adeniji",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />

      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Humor me!",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 characters long.",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent text-sm">
            {(errors as any).name.message}
          </span>
        )}

        <motion.input
          variants={item}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Humor me!",
            pattern: /^\S+@\S+$/i,
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent text-sm">
            {(errors as any).email.message}
          </span>
        )}

        <motion.textarea
          variants={item}
          placeholder="Message"
          {...register("message", {
            required: "Humor me!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent text-sm">
            {(errors as any).message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      "
          type="submit"
        />
      </motion.form>
    </>
  );
}
