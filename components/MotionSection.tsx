"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

type MotionSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function MotionSection({ id, className, children }: MotionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 86%", "end 14%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.78, 1], [0, 1, 1, 0.72]);
  const y = useTransform(scrollYProgress, [0, 0.22, 0.82, 1], [88, 0, 0, -44]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.78, 1], [0.965, 1, 1, 0.985]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.22, 0.82, 1],
    ["blur(18px)", "blur(0px)", "blur(0px)", "blur(10px)"],
  );

  if (prefersReducedMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={className}
      style={{ opacity, y, scale, filter }}
    >
      {children}
    </motion.section>
  );
}
