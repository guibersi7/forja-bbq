"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const slides = [
  {
    src: "/images/forja-m4-slide-1-v2.webp",
    alt: "Homens reunidos em oração no FORJA",
  },
  {
    src: "/images/forja-m4-slide-2-v2.webp",
    alt: "Momento de adoração intensa durante o retiro",
  },
  {
    src: "/images/forja-m4-slide-3-v2.webp",
    alt: "Homens unidos levantando as mãos",
  },
  {
    src: "/images/forja-m4-slide-4-v2.webp",
    alt: "Paisagem com atmosfera de batalha espiritual",
  },
];

export function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const draggingRef = useRef(false);
  const pointerStartRef = useRef(0);
  const hasMultipleSlides = slides.length > 1;

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    pointerStartRef.current = event.clientX;
  };

  const onPointerMove = () => undefined;

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || !hasMultipleSlides) return;

    draggingRef.current = false;
    const delta = event.clientX - pointerStartRef.current;
    const swipeThreshold = 38;

    if (delta >= swipeThreshold && activeIndex > 0) {
      setActiveIndex((current) => current - 1);
      return;
    }

    if (delta <= -swipeThreshold && activeIndex < slides.length - 1) {
      setActiveIndex((current) => current + 1);
    }
  };

  const goToNext = () => {
    setActiveIndex((current) => Math.min(current + 1, slides.length - 1));
  };

  const goToPrevious = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <div className="space-y-3">
      <div className="relative rounded-2xl border border-line-soft bg-bg-primary/70 p-3">
        {hasMultipleSlides ? (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              disabled={activeIndex === 0}
              aria-label="Foto anterior"
              className="absolute left-5 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line-soft bg-black/65 text-text-primary transition-colors hover:border-accent-olive-bright hover:text-accent-olive-bright disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              disabled={activeIndex === slides.length - 1}
              aria-label="Próxima foto"
              className="absolute right-5 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line-soft bg-black/65 text-text-primary transition-colors hover:border-accent-olive-bright hover:text-accent-olive-bright disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        ) : null}

        <div
          className="overflow-hidden rounded-xl border border-line-soft"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
          >
            {slides.map((slide, index) => (
              <figure
                key={slide.src}
                className="relative h-[360px] w-full shrink-0 overflow-hidden sm:h-[440px]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 520px"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </figure>
            ))}
          </div>
        </div>

        {hasMultipleSlides ? (
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir para foto ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-accent-olive-bright"
                    : "w-3 bg-text-muted/60 hover:bg-text-secondary"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
        Arraste para ver mais imagens.
      </p>
    </div>
  );
}
