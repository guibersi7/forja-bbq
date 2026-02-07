import Link from "next/link";
import { Utensils } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal duration={800} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">
            GARANTA JÁ O SEU!
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Faça seu pedido antecipado pelo WhatsApp e evite filas no dia do
            evento.
          </p>
        </ScrollReveal>

        <div className="flex w-full justify-center">
          <ScrollReveal direction="left" delay={200} duration={600}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
