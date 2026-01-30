import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  const navigate = (direction: "prev" | "next") => {
    if (selectedIndex === null) return;
    if (direction === "prev") {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    } else {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className={`grid ${gridCols[columns]} gap-4 my-12 md:my-20`}
      >
        {images.map((image, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
          </motion.button>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-background/70 hover:text-background transition-colors"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
              className="absolute left-6 text-background/70 hover:text-background transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
              className="absolute right-6 text-background/70 hover:text-background transition-colors"
              aria-label="Próxima"
            >
              <ChevronRight size={40} />
            </button>

            <motion.figure
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-h-[80vh] object-contain"
              />
              {images[selectedIndex].caption && (
                <figcaption className="text-background/70 text-sm mt-4 text-center">
                  {images[selectedIndex].caption}
                </figcaption>
              )}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
