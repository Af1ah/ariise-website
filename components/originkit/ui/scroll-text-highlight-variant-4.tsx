// Originkit preset `variant-4` — props baked into the default export.
"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FontStyle = React.CSSProperties;

type SplitBy = "characters" | "words";

type ScrollPosition =
    | "top top"
    | "top center"
    | "top bottom"
    | "center top"
    | "center center"
    | "center bottom"
    | "bottom top"
    | "bottom center"
    | "bottom bottom";

type ScrollHighlightProps = {
    text?: string;
    font?: FontStyle;
    as?: "p" | "h2";
    wrapperStyle?: React.CSSProperties;

    dimColor?: string;
    highlightColor?: string;

    splitBy?: SplitBy;
    scrollStart?: ScrollPosition;
    scrollEnd?: ScrollPosition;
    scrub?: boolean;
};

const CHAR_STAGGER = 0.03;
const WORD_STAGGER = 0.1;

function OriginkitBaseScrollHighlight({
    text = "Every word in this paragraph will light up as you scroll through it.",

    font = {
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "60px",
        fontWeight: 600,
        letterSpacing: "-0.025em",
        lineHeight: "1.1em",
        textAlign: "left",
    },
    as = "p",
    wrapperStyle,

    dimColor = "rgba(255, 255, 255, 0.15)",
    highlightColor = "#FFFFFF",

    splitBy = "words",
    scrollStart = "top center",
    scrollEnd = "bottom center",
    scrub = true,
}: ScrollHighlightProps) {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const words = text.trim().split(/\s+/).filter(Boolean);
    const chars = Array.from(text);
    const stagger = splitBy === "characters" ? CHAR_STAGGER : WORD_STAGGER;

    useEffect(() => {
        const paragraph = containerRef.current;
        if (!paragraph) return;

        const targets = paragraph.querySelectorAll(
            splitBy === "characters" ? ".char" : ".word"
        );

        const ctx = gsap.context(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                gsap.set(targets, { color: highlightColor });
                return;
            }

            gsap.set(targets, {
                color: dimColor,
            });

            gsap.to(targets, {
                color: highlightColor,
                stagger,
                scrollTrigger: {
                    trigger: paragraph,
                    start: scrollStart,
                    end: scrollEnd,
                    scrub,
                },
            });
        }, paragraph);

        return () => ctx.revert();
    }, [
        text,
        dimColor,
        highlightColor,
        splitBy,
        stagger,
        scrollStart,
        scrollEnd,
        scrub,
    ]);

    const content = splitBy === "characters"
                    ? chars.map((char, index) => (
                          <span
                              key={`${char}-${index}`}
                              className="char"
                              style={{
                                  display: "inline-block",
                                  color: dimColor,
                              }}
                          >
                              {char === " " ? "\u00A0" : char}
                          </span>
                      ))
                    : words.map((word, index) => (
                          <React.Fragment key={`${word}-${index}`}>
                              <span
                                  className="word"
                                  style={{
                                      display: "inline-block",
                                      color: dimColor,
                                  }}
                              >
                                  {word}
                              </span>
                              {index < words.length - 1 ? " " : null}
                          </React.Fragment>
                    ));
    const textStyle = {
        margin: 0,
        display: "inline-block",
        whiteSpace: "pre-wrap",
        color: dimColor,
        ...font,
    } satisfies React.CSSProperties;

    return (
        <div style={{ paddingTop: "100dvh", paddingBottom: "100dvh", ...wrapperStyle }}>
            {as === "h2" ? (
                <h2 ref={containerRef as React.RefObject<HTMLHeadingElement>} style={textStyle}>{content}</h2>
            ) : (
                <p ref={containerRef as React.RefObject<HTMLParagraphElement>} style={textStyle}>{content}</p>
            )}
        </div>
    );
}

const __originkitPresetProps = {
  "font": {
    "variant": "Semibold",
    "fontSize": "32px",
    "textAlign": "left",
    "fontFamily": "Inter",
    "fontWeight": 600,
    "lineHeight": "1.4em",
    "letterSpacing": "0em"
  },
  "text": "As technology continues to evolve, we remain committed to building products that are adaptable, scalable, and prepared for the future. Our goal is to create experiences that not only solve today's problems but also unlock tomorrow's opportunities. By combining strategic thinking, human-centered design, and modern technology, we help businesses create lasting impact, foster meaningful connections, and deliver value at every stage of growth.",
  "scrub": true,
  "splitBy": "words",
  "dimColor": "#FFFFFF1A",
  "scrollEnd": "top top",
  "scrollStart": "center center",
  "highlightColor": "#008BFF"
};

export default function ScrollHighlight(props: Record<string, unknown>) {
  return <OriginkitBaseScrollHighlight {...(__originkitPresetProps as Record<string, unknown>)} {...props} />;
}
