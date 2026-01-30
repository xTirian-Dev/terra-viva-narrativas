import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ReportCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  category?: string;
  index?: number;
}

export function ReportCard({
  title,
  excerpt,
  image,
  slug,
  category,
  index = 0,
}: ReportCardProps) {
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
      <Link to={`/reportagens/${slug}`} className="block">
        <div className="relative aspect-editorial overflow-hidden rounded-sm mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {category && (
          <span className="caption text-secondary mb-3 block">{category}</span>
        )}

        <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-secondary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>

        <span className="inline-flex items-center gap-2 text-sm text-secondary group-hover:gap-3 transition-all">
          Ler reportagem <ArrowRight size={16} />
        </span>
      </Link>
    </motion.article>
  );
}
