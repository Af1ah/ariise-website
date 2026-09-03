// Built using Hyperiux Vault: https://vault.hyperiux.com

"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const DEFAULT_HREF = "#";
const COMPACT_LAYOUT_BREAKPOINT = 1280;
const ANIMATION_DURATION_MS = 450;

export interface ArrowFillButtonOwnProps {
  btnText?: string;
  href?: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
  fillBgColor?: string;
  fillTextColor?: string;
  hoverFillBgColor?: string;
  hoverFillTextColor?: string;
  arrowColor?: string;
  hoverArrowColor?: string;
  animationDuration?: number;
  fillOnHover?: boolean;
  variant?: "primary" | "light" | "nav" | "custom";
  size?: "default" | "sm" | "vw";
  arrowType?: "right" | "up-right";
  as?: "a" | "button";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onPointerDown?: (event: PointerEvent<HTMLElement>) => void;
  onPointerUp?: (event: PointerEvent<HTMLElement>) => void;
  onPointerCancel?: (event: PointerEvent<HTMLElement>) => void;
  children?: ReactNode;
}

export type ArrowFillButtonProps = ArrowFillButtonOwnProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof ArrowFillButtonOwnProps>;

export function ArrowFillButton({
  btnText,
  href = DEFAULT_HREF,
  className = "",

  bgColor,
  textColor,

  fillBgColor,
  fillTextColor,

  hoverFillBgColor,
  hoverFillTextColor,

  arrowColor,
  hoverArrowColor,

  variant = "primary",
  size = "default",
  arrowType = "up-right",
  as = "a",
  type = "button",
  disabled = false,
  children,

  ...props
}: ArrowFillButtonProps) {
  const [isCompactLayout, setIsCompactLayout] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const releaseTimeoutRef = useRef<number | null>(null);

  const textLabel =
    btnText ||
    (typeof children === "string" ? children : "") ||
    "Hover Me";

  // Palette resolution based on variant
  const resolvedBgColor =
    bgColor ??
    (variant === "light"
      ? "#fff9ed"
      : variant === "nav"
      ? "transparent"
      : "var(--ink, #102d39)");

  const resolvedTextColor =
    textColor ??
    (variant === "light"
      ? "var(--ink, #102d39)"
      : variant === "nav"
      ? "var(--ink, #102d39)"
      : "#fffdf8");

  const resolvedFillBgColor =
    fillBgColor ??
    (variant === "light"
      ? "var(--ink, #102d39)"
      : variant === "nav"
      ? "var(--ink, #102d39)"
      : "#f2efe6");

  const resolvedFillTextColor =
    fillTextColor ??
    (variant === "light"
      ? "#fff9ed"
      : variant === "nav"
      ? "#fffdf8"
      : "var(--ink, #102d39)");

  const resolvedHoverFillBg = hoverFillBgColor ?? resolvedFillBgColor;
  const resolvedHoverFillText = hoverFillTextColor ?? resolvedFillTextColor;
  const resolvedArrowColor = arrowColor || resolvedFillTextColor;
  const resolvedHoverArrowColor = hoverArrowColor || resolvedHoverFillText;

  const usesUtilityBackground =
    className.includes("bg-") ||
    className.includes("from-") ||
    className.includes("via-") ||
    className.includes("to-");

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${COMPACT_LAYOUT_BREAKPOINT - 1}px)`
    );

    const syncCompactLayout = (event: MediaQueryList | MediaQueryListEvent) => {
      const matches =
        "matches" in event
          ? event.matches
          : ((event as unknown as { currentTarget: MediaQueryList }).currentTarget)
              .matches;
      setIsCompactLayout(matches);

      if (!matches) {
        setIsPressed(false);
      }
    };

    syncCompactLayout(mediaQuery);
    mediaQuery.addEventListener("change", syncCompactLayout);

    return () => {
      mediaQuery.removeEventListener("change", syncCompactLayout);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (releaseTimeoutRef.current) {
        window.clearTimeout(releaseTimeoutRef.current);
      }
    };
  }, []);

  const clearPressedState = () => {
    if (releaseTimeoutRef.current) {
      window.clearTimeout(releaseTimeoutRef.current);
    }

    releaseTimeoutRef.current = window.setTimeout(() => {
      setIsPressed(false);
      releaseTimeoutRef.current = null;
    }, ANIMATION_DURATION_MS);
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    props.onPointerDown?.(event);

    if (!isCompactLayout || event.pointerType === "mouse") {
      return;
    }

    if (releaseTimeoutRef.current) {
      window.clearTimeout(releaseTimeoutRef.current);
      releaseTimeoutRef.current = null;
    }

    setIsPressed(true);
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    props.onPointerUp?.(event);

    if (!isCompactLayout || event.pointerType === "mouse") {
      return;
    }

    clearPressedState();
  };

  const handlePointerCancel = (event: PointerEvent<HTMLElement>) => {
    props.onPointerCancel?.(event);

    if (!isCompactLayout || event.pointerType === "mouse") {
      return;
    }

    clearPressedState();
  };

  // Dimensions
  const circleSize =
    size === "vw" ? "3.1vw" : size === "sm" ? "1.95rem" : "2.35rem";
  const circleRight =
    size === "vw" ? "0.55vw" : size === "sm" ? "0.35rem" : "0.45rem";

  const sizeClasses =
    size === "vw"
      ? "h-[4.2vw] px-[3vw] pr-[calc(var(--icon-circle)+var(--icon-right)+2vw)] text-[1.155vw] max-[1025px]:h-[11vw] max-[1025px]:px-[5vw] max-[1025px]:pr-[calc(var(--icon-circle)+var(--icon-right)+4vw)] max-[1025px]:text-[3.15vw] max-md:h-[15vw] max-md:px-[7vw] max-md:pr-[calc(var(--icon-circle)+var(--icon-right)+5vw)] max-md:text-[4.41vw]"
      : size === "sm"
      ? "h-[2.75rem] min-h-[2.75rem] px-4 pr-[2.95rem] text-[0.84rem] font-semibold"
      : "h-[3.4rem] min-h-[3.4rem] px-5 pr-[3.65rem] text-[0.92rem] font-semibold";

  const arrowIconSizeClass =
    size === "vw"
      ? "size-[1.5vw] max-[1025px]:size-[4vw] max-md:size-[5vw]"
      : size === "sm"
      ? "size-[0.95rem]"
      : "size-[1.15rem]";

  const containerClasses = `arrow-fill-btn group relative inline-flex w-fit min-w-fit max-w-none cursor-pointer items-center justify-center overflow-hidden rounded-full border whitespace-nowrap leading-none [text-rendering:geometricPrecision] ${sizeClasses} ${
    disabled ? "opacity-60 pointer-events-none cursor-not-allowed" : ""
  } ${className}`;

  const styleObject = {
    "--btn-bg": resolvedBgColor,
    "--btn-text": resolvedTextColor,
    "--btn-fill-bg": resolvedFillBgColor,
    "--btn-fill-text": resolvedFillTextColor,
    "--btn-fill-bg-hover": resolvedHoverFillBg,
    "--btn-fill-text-hover": resolvedHoverFillText,
    "--btn-arrow": resolvedArrowColor,
    "--btn-arrow-hover": resolvedHoverArrowColor,
    "--icon-circle": circleSize,
    "--icon-right": circleRight,
    "--circle-inset-y": `calc((100% - ${circleSize}) / 2)`,
    "--circle-left": `calc(100% - ${circleRight} - ${circleSize})`,
    backgroundColor: usesUtilityBackground ? undefined : resolvedBgColor,
  } as CSSProperties & Record<string, string | number>;

  const ArrowIcon = arrowType === "up-right" ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      {/* 1. Base Text Layer - ALWAYS VISIBLE, transitions to hover color */}
      <span className="arrow-fill-btn-text relative z-10 select-none pb-px motion-reduce:transition-none">
        {textLabel}
      </span>

      {/* 2. Expanding Background Fill */}
      <div aria-hidden="true" className="arrow-fill-btn-bg motion-reduce:transition-none" />

      {/* 3. Double Sliding Arrow Badge */}
      <span className="arrow-fill-btn-icon-wrap motion-reduce:transition-none" aria-hidden="true">
        <ArrowIcon
          className={`absolute left-1/2 top-1/2 ${arrowIconSizeClass} translate-x-[-170%] -translate-y-1/2 origin-center scale-0 text-current transition-transform duration-450 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-100 group-data-[pressed=true]:-translate-x-1/2 group-data-[pressed=true]:-translate-y-1/2 group-data-[pressed=true]:scale-100`}
          strokeWidth={1.8}
        />

        <ArrowIcon
          className={`absolute left-1/2 top-1/2 ${arrowIconSizeClass} -translate-x-1/2 -translate-y-1/2 origin-center text-current transition-transform duration-450 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:translate-x-[70%] group-hover:-translate-y-1/2 group-hover:scale-0 group-data-[pressed=true]:translate-x-[70%] group-data-[pressed=true]:-translate-y-1/2 group-data-[pressed=true]:scale-0`}
          strokeWidth={1.8}
        />
      </span>
    </>
  );

  if (as === "button") {
    return (
      <button
        type={type}
        disabled={disabled}
        data-pressed={isPressed ? "true" : "false"}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        className={containerClasses}
        style={styleObject}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }

  // If href is internal route (starts with /), use Next.js Link
  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        data-pressed={isPressed ? "true" : "false"}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        className={containerClasses}
        style={styleObject}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      data-pressed={isPressed ? "true" : "false"}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className={containerClasses}
      style={styleObject}
      {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {content}
    </a>
  );
}

export default ArrowFillButton;
