import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  src: string;
  title: string;
  poster?: string;
  caption?: string;
  type?: "youtube" | "vimeo" | "local";
}

export function VideoEmbed({
  src,
  title,
  poster,
  caption,
  type = "youtube",
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getEmbedUrl = () => {
    if (type === "youtube") {
      const videoId = src.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/)?.[1];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (type === "vimeo") {
      const videoId = src.match(/vimeo\.com\/(\d+)/)?.[1];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return src;
  };

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className="my-12 md:my-20"
    >
      <div className="relative aspect-video bg-muted overflow-hidden rounded-sm">
        {!isLoaded ? (
          <button
            onClick={() => setIsLoaded(true)}
            className="absolute inset-0 group cursor-pointer"
            aria-label={`Reproduzir ${title}`}
          >
            {poster && (
              <img
                src={poster}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={32} className="text-foreground ml-1" />
              </div>
            </div>
          </button>
        ) : (
          <iframe
            src={getEmbedUrl()}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      {caption && (
        <figcaption className="text-sm text-muted-foreground mt-4 text-center">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
