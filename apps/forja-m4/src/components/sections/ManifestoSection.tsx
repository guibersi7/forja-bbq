import { ImageCarousel } from "@/components/ui/ImageCarousel";

const manifestoParagraphs = [
  "Até quando vai negociar com aquilo que Deus já mandou você matar?",
  "Você sabe onde precisa mudar. Sabe o que precisa confrontar. Mas continua adiando.",
  "Chega. O tempo da fuga acabou. O tempo da desculpa terminou.",
  "Existe um lugar onde homens não se escondem, se revelam. Onde o pecado não é tolerado, é confrontado.",
  "FORJA M4 não é um evento. É um divisor de águas.",
  "A decisão é sua. Mas Deus já decidiu te chamar.",
];

export function ManifestoSection() {
  return (
    <section className="section-frame metal-grid relative overflow-hidden bg-bg-secondary py-14 sm:py-20">
      <div className="manifesto-glow pointer-events-none absolute -top-32 left-1/2 h-[360px] w-[360px] -translate-x-1/2" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <div className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent-olive-bright">
            O que é o FORJA M4
          </p>
          <h2 className="font-display text-4xl leading-[0.92] tracking-[0.04em] sm:text-6xl">
            O lugar onde o homem velho morre e o homem de Deus se levanta.
          </h2>

          <div className="rounded-2xl border border-line-soft bg-bg-primary/80 p-4 text-base leading-relaxed text-text-secondary sm:p-6 sm:text-lg">
            <div className="space-y-4">
              {manifestoParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 border-t border-line-soft pt-4 text-sm uppercase tracking-[0.2em] text-text-muted">
              Quando as inscrições forem liberadas, clique em{' '}
              <strong className="text-accent-olive-bright">A HORA É AGORA!</strong> na seção acima para abrir o formulário.
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-text-muted">
            Galeria de impacto (arraste para o lado)
          </p>
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}
