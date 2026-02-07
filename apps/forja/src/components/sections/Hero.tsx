"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
          <div className="bg-bg-secondary/80 backdrop-blur-sm border border-accent-metal/30 rounded-lg px-3 py-2 md:px-5 md:py-3 min-w-[60px] md:min-w-[80px]">
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
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <Image
              src="/images/preview-removebg-preview.png"
              alt="Forja BBQ - Festival da Costela"
              width={500}
              height={500}
              className="w-[280px] md:w-[400px] lg:w-[500px] h-auto"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-secondary text-base md:text-xl tracking-wide mb-8 text-center"
          >
            Da brasa à mesa, para o Reino.
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10"
          >
            <Countdown />
          </motion.div>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-text-secondary text-sm md:text-base mb-10"
          >
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
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-text-secondary/50">
          <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-text-secondary/30 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
