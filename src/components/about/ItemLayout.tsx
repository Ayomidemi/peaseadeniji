"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ItemLayout = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "flex items-center justify-center space-y-6 border border-blush bg-blush/20 p-6 sm:p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
