import { ScrollReveal } from "@/components/ui/ScrollReveal";

const quotes = [
  {
    text: "Assim como o ferro afia o ferro, o homem afia o seu companheiro.",
    ref: "Provérbios 27:17",
  },
  {
    text: "Vigiai, estai firmes na fé, portai-vos varonilmente, fortalecei-vos.",
    ref: "1 Coríntios 16:13",
  },
  {
    text: "Sede fortes e corajosos; não temais, porque o Senhor vai convosco.",
    ref: "Deuteronômio 31:6",
  },
];

export function Forja() {
  return (
    <section
      id="forja"
      className="relative py-24 md:py-32 bg-bg-primary noise overflow-hidden"
    >
      {/* Background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bg-highlight/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal duration={800} className="text-center mb-16 md:mb-24">
          <span className="text-accent-fire text-sm font-bold tracking-[0.2em] mb-4 block">
            MINISTÉRIO DE HOMENS
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary leading-[0.9]">
            O QUE É SER
            <br />
            <span className="text-gradient">FORJA?</span>
          </h2>
        </ScrollReveal>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {[
            {
              title: "FORJADOS PELO FOGO",
              desc: "Assim como o metal é forjado pelo fogo para se tornar resistente, os homens de Deus são moldados pelas provações.",
            },
            {
              title: "LIDERANÇA SERVIL",
              desc: "O verdadeiro líder é aquele que serve. Liderar é servir à família, à igreja e à comunidade.",
            },
            {
              title: "COMUNHÃO",
              desc: "Nenhum homem caminha sozinho. Construímos relacionamentos que nos ajudam a crescer.",
            },
            {
              title: "COMPROMISSO",
              desc: "Somos chamados a ser homens comprometidos com o avanço do Reino de Deus em todas as áreas.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} duration={600} delay={i * 100}>
              <div className="group flex items-start gap-4">
                <span className="text-accent-fire font-black text-2xl md:text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-text-primary mb-3 group-hover:text-accent-fire transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quotes */}
        <ScrollReveal duration={800} delay={400}>
          <div className="border-t border-accent-metal/30 pt-16">
            <div className="grid md:grid-cols-3 gap-8">
              {quotes.map((quote, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-text-secondary italic text-lg mb-3 leading-relaxed">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <span className="text-accent-fire text-sm font-bold">
                    {quote.ref}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Big quote */}
        <ScrollReveal duration={800} delay={600} className="mt-20 text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary leading-tight">
            &ldquo;HOMENS DE VERDADE
            <br />
            <span className="text-gradient">CONSTROEM O REINO&rdquo;</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
