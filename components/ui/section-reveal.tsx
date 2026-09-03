"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className: string;
  id?: string;
};

export function SectionReveal({ children, className, id }: SectionRevealProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const [hasEntered, setHasEntered] = useState(reduceMotion);

  return (
    <motion.section
      id={id}
      className={className}
      data-motion={reduceMotion ? "reduced" : hasEntered ? "entered" : "idle"}
      initial={reduceMotion ? false : { opacity: 0, transform: "translate3d(0, 1rem, 0)" }}
      whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
      onViewportEnter={() => setHasEntered(true)}
    >
      {children}
    </motion.section>
  );
}
