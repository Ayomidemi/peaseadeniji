"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import emailjs from "@emailjs/browser";

const fieldClass =
  "w-full border border-blush bg-background px-3 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (params: Record<string, unknown> | undefined) => {
    const toastId = toast.loading("Sending your message…");

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
          toast.success("Message received. I will reply soon.", {
            id: toastId,
          });
          reset();
        },
        () => {
          toast.error("The message did not send. Please try again.", {
            id: toastId,
          });
        }
      );
  };

  const onSubmit = (data: Record<string, string>) => {
    sendEmail({
      to_name: "Peace Adeniji",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    });
  };

  return (
    <>
      <Toaster richColors={true} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs uppercase tracking-[0.22em] text-muted"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 3,
                message: "Name should be at least 3 characters.",
              },
            })}
            className={fieldClass}
          />
          {errors.name && (
            <span className="mt-2 block text-sm text-accent">
              {String(errors.name.message)}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs uppercase tracking-[0.22em] text-muted"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@email.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email.",
              },
            })}
            className={fieldClass}
          />
          {errors.email && (
            <span className="mt-2 block text-sm text-accent">
              {String(errors.email.message)}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs uppercase tracking-[0.22em] text-muted"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="What would you like to talk about?"
            {...register("message", {
              required: "Message is required.",
              maxLength: {
                value: 500,
                message: "Message should be less than 500 characters.",
              },
            })}
            className={fieldClass}
          />
          {errors.message && (
            <span className="mt-2 block text-sm text-accent">
              {String(errors.message.message)}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-fit cursor-pointer bg-blush px-8 py-3 text-sm text-foreground transition-colors hover:bg-accent hover:text-background"
        >
          Send
        </button>
      </form>
    </>
  );
}
