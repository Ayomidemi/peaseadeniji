import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

type Props = {
  name: string;
  description: string;
  date: string;
  demoLink: string;
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink }: Props) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:shadow-glass-sm transition-all duration-300"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground font-semibold">{name}</h2>
        <p className="text-muted hidden sm:inline-block">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground text-sm">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </ProjectLink>
  );
};

export default ProjectLayout;
