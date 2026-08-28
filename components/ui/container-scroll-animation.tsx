"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type ContainerScrollProps = {
  titleComponent: ReactNode;
  children: ReactNode;
  className?: string;
};

type HeaderProps = {
  transform: MotionValue<string>;
  reduceMotion: boolean;
  children: ReactNode;
};

type CardProps = {
  transform: MotionValue<string>;
  reduceMotion: boolean;
  children: ReactNode;
};

export function ContainerScroll({
  titleComponent,
  children,
  className = "",
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.55], [0, -100]);
  const cardY = useTransform(scrollYProgress, [0, 0.65], [0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.6], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.05, 1]);
  const headingTransform = useMotionTemplate`translate3d(0, ${headingY}px, 0)`;
  const cardTransform = useMotionTemplate`perspective(1000px) translate3d(0, ${cardY}px, 0) rotateX(${rotateX}deg) scale(${scale})`;

  return (
    <div
      ref={containerRef}
      className={`relative flex h-[60rem] items-center justify-center overflow-hidden p-2 md:h-[80rem] md:p-20 ${className}`}
    >
      <div className="relative w-full py-10 md:py-40" style={{ perspective: "1000px" }}>
        <ScrollHeader transform={headingTransform} reduceMotion={reduceMotion}>
          {titleComponent}
        </ScrollHeader>
        <ScrollCard transform={cardTransform} reduceMotion={reduceMotion}>
          {children}
        </ScrollCard>
      </div>
    </div>
  );
}

function ScrollHeader({ transform, reduceMotion, children }: HeaderProps) {
  return (
    <motion.div
      className="relative z-10 mx-auto max-w-4xl text-center"
      style={{
        transform: reduceMotion ? "none" : transform,
        willChange: reduceMotion ? "auto" : "transform",
      }}
    >
      {children}
    </motion.div>
  );
}

function ScrollCard({ transform, reduceMotion, children }: CardProps) {
  return (
    <motion.div
      className="relative mx-auto mt-8 aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-[1.25rem] bg-[#102d39] p-1.5 shadow-[0_36px_90px_rgba(16,45,57,0.22)] md:mt-10 md:aspect-[1790/879] md:rounded-[1.75rem] md:p-2.5"
      style={{
        transform: reduceMotion ? "none" : transform,
        transformOrigin: "center top",
        willChange: reduceMotion ? "auto" : "transform",
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[0.95rem] bg-[#f1efe8] md:rounded-[1.25rem]">
        {children}
      </div>
    </motion.div>
  );
}
