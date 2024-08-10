import React from "react";
// import Image from "next/image";

// import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      {/* <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Pease Adeniji"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
      /> */}

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Let’s Connect
          </h1>
          <p className="text-center font-light text-sm xs:text-base max-w-[80%] sm:max-w-[65%]">
            Have a project in mind or just want to chat? I’m always excited to
            collaborate and explore new ideas. Reach out, and let’s bring your
            vision to life!
          </p>
        </div>
        <Form />
      </article>
    </div>
  );
};

export default Contact;
