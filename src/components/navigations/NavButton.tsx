import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
// import ResponsiveComponent from "../ResponsiveComponent";

type Props = {
  x: string | number;
  y: string | number;
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
  labelDirection?: "left" | "right";
};

const getIcon = (icon: string) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}: Props) => {
  return (
    <div className="w-fit cursor-pointer z-50">
      <NavLink
        variants={item}
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground rounded-full flex items-center justify-center
        custom-bg
        "
        aria-label={label}
        // name={label}
        prefetch={false}
        scroll={false}
      >
        <span className="relative sm:w-10 sm:h-10 sm:p-3 w-8 h-8 p-2 hover:text-accent">
          {getIcon(icon)}

          <span className="peer bg-transparent absolute top-0 left-0 sm:w-10 sm:h-10 w-8 h-8" />

          <span
            className={clsx(
              "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
              labelDirection === "left" ? "right-full left-auto" : ""
            )}
          >
            {label}
          </span>
        </span>
      </NavLink>
    </div>
  );
};

export default NavButton;
