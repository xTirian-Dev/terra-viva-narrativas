import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface QuoteBlockProps {
  quote: string;
  author?: string;
  role?: string;
}

export function QuoteBlock({ quote, author, role }: QuoteBlockProps) {
  const ref = useRef<HTMLQuoteElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 md:py-32 px-6 md:px-12 text-center"
    >
      <p className="font-serif text-2xl md:text-4xl lg:text-5xl italic text-secondary max-w-4xl mx-auto leading-relaxed">
        "{quote}"
      </p>
      {author && (
        <footer className="mt-8">
          <cite className="not-italic">
            <span className="block text-lg font-medium">{author}</span>
            {role && (
              <span className="block text-sm text-muted-foreground mt-1">
                {role}
              </span>
            )}
          </cite>
        </footer>
      )}
    </motion.blockquote>
  );
}
