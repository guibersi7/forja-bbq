import { CountdownGate } from "@/components/ui/CountdownGate";
import { HeroVideo } from "@/components/ui/HeroVideo";

export function HeroSection() {
  return (
    <section className="section-frame relative flex min-h-screen items-end overflow-hidden pt-20">
      <HeroVideo />

      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/70 to-bg-primary" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(9,11,9,0.88)_78%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-12 sm:px-6 sm:pb-16">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent-olive-bright/95">
          FORJA M4 | O VALE DA DECISÃO
        </p>

        <h1 className="max-w-[20ch] font-display text-5xl leading-[0.88] tracking-[0.03em] text-text-primary sm:text-7xl">
          Ou você entra no vale... ou continua vivendo aquém.
        </h1>

        <p className="mt-5 max-w-[34ch] text-lg leading-tight text-text-secondary sm:text-2xl">
          Deus já decidiu te chamar. Agora você decide se vai responder.
        </p>

        <div className="mt-8 max-w-[780px] rounded-2xl border border-line-soft bg-black/45 p-4 backdrop-blur-sm sm:p-6">
          <CountdownGate />
        </div>
      </div>
    </section>
  );
}
