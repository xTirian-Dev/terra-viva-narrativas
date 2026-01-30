import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

export function ScrollSection({
  children,
  className = "",
  id,
  fullHeight = false,
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`${fullHeight ? "min-h-screen" : ""} ${className}`}
    >
      {children}
    </motion.section>
  );
}
