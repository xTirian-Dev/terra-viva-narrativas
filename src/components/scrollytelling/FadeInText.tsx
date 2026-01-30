import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

export function FadeInText({
  children,
  delay = 0,
  className = "",
  as = "div",
}: FadeInTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const Component = motion[as];

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
