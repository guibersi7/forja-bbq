"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Utensils, Sparkles } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">
            GARANTA JÁ O SEU!
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Faça seu pedido antecipado pelo WhatsApp e evite filas no dia do evento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Cardápio CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/cardapio"
              className="group block bg-bg-highlight rounded-2xl p-8 border border-accent-metal/20 hover:border-accent-fire/50 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-accent-fire/20 rounded-2xl flex items-center justify-center group-hover:bg-accent-fire/30 transition-colors">
                  <Utensils className="w-8 h-8 text-accent-fire" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-text-primary mb-2 group-hover:text-accent-fire transition-colors">
                    CARDÁPIO
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Costela, linguiça, acompanhamentos, bebidas e sobremesas.
                    Veja o cardápio completo e faça seu pedido!
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent-fire font-bold text-sm">
                    Ver Cardápio
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
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* IGE Kids CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/ige-kids"
              className="group block bg-gradient-to-br from-[#1a1a2e] to-bg-primary rounded-2xl p-8 border border-accent-metal/20 hover:border-[#FF6B9D]/50 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-[#FF6B9D]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#FF6B9D]/30 transition-colors">
                  <Sparkles className="w-8 h-8 text-[#FF6B9D]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-text-primary mb-2 group-hover:text-[#FF6B9D] transition-colors">
                    IGE KIDS
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Área exclusiva para crianças! Pula-pula, tobogã, piscina de
                    bolinhas e muito mais diversão.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#FF6B9D] font-bold text-sm">
                    Ver Brinquedos
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
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
