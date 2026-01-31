"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-bg-secondary noise">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-fire text-sm font-bold tracking-[0.2em] mb-4 block">
              O EVENTO
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-[0.95]">
              MAIS QUE UM
              <br />
              <span className="text-gradient">CHURRASCO</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              O Forja BBQ é uma celebração de fé, comunhão e propósito. Cada
              costela servida carrega o amor dos homens do ministério Forja e
              a missão de expandir o Reino de Deus.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Toda a arrecadação será destinada às obras de ampliação da IGE -
              Igreja Geração Eleita. Venha fazer parte dessa construção.
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "100%", label: "PARA A OBRA" },
              { number: "7H", label: "DE EVENTO" },
              { number: "0", label: "ENTRADA" },
              { number: "∞", label: "COMUNHÃO" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-bg-primary/50 backdrop-blur-sm border border-accent-metal/30 rounded-2xl p-6 md:p-8 text-center hover:border-accent-fire/30 transition-colors"
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-accent-fire block mb-2">
                  {stat.number}
                </span>
                <span className="text-[10px] md:text-xs text-text-secondary tracking-[0.15em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
