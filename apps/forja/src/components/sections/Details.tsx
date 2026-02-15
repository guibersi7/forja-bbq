import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Details() {
  return (
    <section
      id="detalhes"
      className="relative py-24 md:py-32 bg-accent-fire noise overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <ScrollReveal direction="left" distance={50} duration={800}>
            <span className="text-white/60 text-sm font-bold tracking-[0.2em] mb-4 block">
              O QUE ESPERAR
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[0.95]">
              COSTELA,
              <br />
              LOUVOR E
              <br />
              COMUNHÃO
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: "🔥",
                  title: "COSTELA NO FOGO DE CHÃO",
                  desc: "Preparada com dedicação pelos homens do Forja",
                },
                {
                  icon: "🎵",
                  title: "LOUVOR AO VIVO",
                  desc: "Momentos de adoração e celebração",
                },
                {
                  icon: "🤝",
                  title: "TEMPO DE COMUNHÃO",
                  desc: "Fortaleça amizades e faça novas conexões",
                },
              ].map((item, i) => (
                <ScrollReveal
                  key={i}
                  direction="left"
                  distance={30}
                  duration={600}
                  delay={i * 150}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {item.title}
                      </h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Right - Big CTA Card */}
          <ScrollReveal direction="right" distance={50} duration={800} delay={200}>
            <div className="bg-bg-primary rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <span className="text-accent-fire text-sm font-bold tracking-[0.2em] mb-6 block">
                  ENTRADA GRATUITA
                </span>

                <div className="mb-8">
                  <p className="text-6xl md:text-7xl font-black text-text-primary mb-2">
                    R$0
                  </p>
                  <p className="text-text-secondary">para entrar no evento</p>
                </div>

                <div className="border-t border-accent-metal/30 pt-8 mb-8">
                  <p className="text-text-secondary leading-relaxed">
                    Não cobramos entrada! Venha curtir e aproveite para saborear
                    nossas delícias. Toda contribuição através do consumo será
                    revertida para as obras da igreja.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl md:text-3xl font-black text-accent-fire">
                      21
                    </p>
                    <p className="text-[10px] text-text-secondary tracking-wider">
                      FEV
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-black text-accent-fire">
                      14H
                    </p>
                    <p className="text-[10px] text-text-secondary tracking-wider">
                      INÍCIO
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-black text-accent-fire">
                      20H
                    </p>
                    <p className="text-[10px] text-text-secondary tracking-wider">
                      FIM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
