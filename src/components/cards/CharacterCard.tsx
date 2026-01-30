import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CharacterCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  slug: string;
  index?: number;
}

export function CharacterCard({
  name,
  role,
  quote,
  image,
  slug,
  index = 0,
}: CharacterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group"
    >
      <Link to={`/personagens/${slug}`} className="block">
        <div className="relative aspect-portrait overflow-hidden rounded-sm mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-serif text-2xl text-background mb-1">{name}</h3>
            <p className="text-background/70 text-sm">{role}</p>
          </div>
        </div>

        <blockquote className="font-serif text-lg italic text-muted-foreground mb-4">
          "{quote}"
        </blockquote>

        <span className="inline-flex items-center gap-2 text-sm text-secondary group-hover:gap-3 transition-all">
          Conhecer história <ArrowRight size={16} />
        </span>
      </Link>
    </motion.article>
  );
}
