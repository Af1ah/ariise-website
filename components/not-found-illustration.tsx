"use client";

import animationData from "@/public/assets/lotti-404.json";
import { Lottie } from "lottie-react";
import { useReducedMotion } from "framer-motion";

export function NotFoundIllustration() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="not-found-illustration" aria-hidden="true">
      <Lottie
        src={animationData}
        autoplay={!reduceMotion}
        className="not-found-lottie"
        loop={!reduceMotion}
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
