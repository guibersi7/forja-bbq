"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-21T14:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 md:gap-6">
      {[
        { value: timeLeft.days, label: "DIAS" },
        { value: timeLeft.hours, label: "HORAS" },
        { value: timeLeft.minutes, label: "MIN" },
        { value: timeLeft.seconds, label: "SEG" },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="bg-bg-secondary/80 md:backdrop-blur-sm border border-accent-metal/30 rounded-lg px-3 py-2 md:px-5 md:py-3 min-w-[60px] md:min-w-[80px]">
            <span className="text-2xl md:text-4xl font-black text-accent-fire tabular-nums">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] md:text-xs text-text-secondary mt-1 block tracking-widest">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-fire/5 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Logo — visible immediately, no JS needed */}
          <div className="mb-6 animate-hero-fade-in">
            <Image
              src="/images/preview-removebg-preview.webp"
              alt="Forja BBQ - Festival da Costela"
              width={500}
              height={500}
              className="w-[280px] md:w-[400px] lg:w-[500px] h-auto"
              priority
              quality={80}
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 500px"
            />
          </div>

          {/* Tagline */}
          <p className="text-text-secondary text-base md:text-xl tracking-wide mb-8 text-center animate-hero-fade-up [animation-delay:300ms]">
            Da brasa à mesa, para o Reino.
          </p>

          {/* Countdown */}
          <div className="mb-10 animate-hero-fade-up [animation-delay:500ms]">
            <Countdown />
          </div>

          {/* Event Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-text-secondary text-sm md:text-base mb-10 animate-hero-fade-up [animation-delay:700ms]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-fire rounded-full" />
              21 DE FEVEREIRO
            </span>
            <span className="hidden md:block text-accent-metal">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-fire rounded-full" />
              14H ÀS 21H
            </span>
            <span className="hidden md:block text-accent-metal">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-fire rounded-full" />
              RANCHO IGE
            </span>
          </div>

          {/* CTA */}
          <div className="animate-hero-fade-up [animation-delay:900ms]">
            <Link
              href="#local"
              className="group relative inline-flex items-center gap-3 bg-accent-fire hover:bg-accent-fire-hover text-white font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <span>COMO CHEGAR</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-hero-fade-in [animation-delay:1200ms]">
        <div className="flex flex-col items-center gap-2 text-text-secondary/50">
          <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-text-secondary/30 to-transparent animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
}
