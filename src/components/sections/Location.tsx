"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ADDRESS = "Estrada do Ipatinga - travessa, 6, 231 - Bairro do Ipatinga, Sorocaba - SP, 18053-400";
const ADDRESS_ENCODED = encodeURIComponent(ADDRESS);

export function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_ENCODED}`;
  const embedUrl = `https://www.google.com/maps?q=${ADDRESS_ENCODED}&output=embed`;

  return (
    <section id="local" className="relative py-24 md:py-32 bg-bg-primary noise">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-fire text-sm font-bold tracking-[0.2em] mb-4 block">
            LOCALIZAÇÃO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[0.95]">
            ONDE VAI
            <br />
            <span className="text-gradient">ACONTECER</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square lg:aspect-auto lg:h-[500px] bg-bg-secondary rounded-2xl overflow-hidden relative"
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Rancho IGE"
              className="absolute inset-0 w-full h-full"
            />

            {/* Decorative border */}
            <div className="absolute inset-0 border border-accent-metal/20 rounded-2xl pointer-events-none" />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: "LOCAL",
                value: "Rancho IGE",
                sub: "Bairro do Ipatinga, Sorocaba - SP",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                label: "DATA",
                value: "21 de Fevereiro de 2025",
                sub: "Sexta-feira",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "HORÁRIO",
                value: "14h às 21h",
                sub: "7 horas de evento",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                label: "ENDEREÇO",
                value: "Estrada do Ipatinga",
                sub: "Travessa, 6, 231 - CEP 18053-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-bg-secondary rounded-2xl p-5 flex items-center gap-5 border border-accent-metal/20 hover:border-accent-fire/30 transition-colors"
              >
                <div className="w-12 h-12 bg-bg-highlight rounded-xl flex items-center justify-center text-accent-fire flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-[10px] text-text-secondary tracking-[0.15em] block mb-1">
                    {item.label}
                  </span>
                  <p className="text-text-primary font-bold">{item.value}</p>
                  <p className="text-text-secondary text-sm">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full inline-flex items-center justify-center gap-3 bg-accent-fire hover:bg-accent-fire-hover text-white font-bold text-base px-8 py-5 rounded-2xl transition-all hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              ABRIR NO GOOGLE MAPS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
