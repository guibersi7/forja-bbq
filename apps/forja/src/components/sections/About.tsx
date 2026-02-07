import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32 bg-bg-secondary noise overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Text */}
          <ScrollReveal direction="left" distance={50} duration={800}>
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
              costela servida carrega o amor dos homens do ministério Forja e a
              missão de expandir o Reino de Deus.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Toda a arrecadação será destinada às obras de ampliação da IGE -
              Igreja Geração Eleita. Venha fazer parte dessa construção.
            </p>
          </ScrollReveal>

          {/* Right - Stats */}
          <ScrollReveal direction="right" distance={50} duration={800} delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "100%", label: "PARA A OBRA" },
                { number: "7H", label: "DE EVENTO" },
                { number: "0", label: "ENTRADA" },
                { number: "∞", label: "COMUNHÃO" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-bg-primary/50 md:backdrop-blur-sm border border-accent-metal/30 rounded-2xl p-6 md:p-8 text-center hover:border-accent-fire/30 transition-colors"
                >
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black text-accent-fire block mb-2">
                    {stat.number}
                  </span>
                  <span className="text-[10px] md:text-xs text-text-secondary tracking-[0.15em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
