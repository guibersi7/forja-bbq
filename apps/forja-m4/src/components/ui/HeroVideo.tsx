"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;

    const onReady = () => setVideoVisible(true);
    const onError = () => setVideoVisible(false);

    video.addEventListener("canplay", onReady);
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("error", onError);

    let rafId = 0;
    if (video.readyState >= 2) {
      rafId = requestAnimationFrame(onReady);
    }

    if (media.matches || saveData) {
      video.pause();
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        video.removeEventListener("canplay", onReady);
        video.removeEventListener("loadeddata", onReady);
        video.removeEventListener("error", onError);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("error", onError);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0 bg-[#0a0d0a]" aria-hidden="true">
        <Image
          src="/images/forja-m4-hero-poster.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <video
        ref={videoRef}
        className={`absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-500 ${
          videoVisible ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/forja-m4-hero-poster.webp"
        disablePictureInPicture
        aria-label="Vídeo de ambientação do FORJA"
      >
        <source src="/videos/forja-m4-hero.mp4" type="video/mp4" />
      </video>
    </>
  );
}
