"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function MotionSection({ id, className, children }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
