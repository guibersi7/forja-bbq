import Image from "next/image";
import { Gamepad2, Heart, ShieldCheck, Ticket } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const WHATSAPP_NUMBER = "5515997008154";

const features = [
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "BRINQUEDOS INFLÁVEIS",
    description:
      "Diversão garantida com brinquedos seguros e monitorados.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "SEGURANÇA",
    description:
      "Monitores treinados para cuidar das crianças enquanto você aproveita.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "DIVERSÃO",
    description:
      "Um ambiente preparado com muito carinho para os pequenos.",
  },
  {
    icon: <Ticket className="w-6 h-6" />,
    title: "ACESSO LIVRE",
    description:
      "Passaporte único para brincar à vontade durante todo o evento.",
  },
];

export function IgeKids() {
  return (
    <section
      id="ige-kids"
      className="relative py-24 bg-bg-primary overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-fire/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal direction="left" distance={30} duration={600}>
            <span className="text-accent-fire text-sm font-bold tracking-[0.2em] mb-4 block">
              PARA A FAMÍLIA TODA
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              IGE KIDS
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Pensamos em tudo para que você e sua família tenham um dia
              incrível! O <strong>IGE KIDS</strong> é um espaço exclusivo com
              brinquedos infláveis e muita diversão para as crianças gastarem
              energia enquanto os pais aproveitam o melhor churrasco e comunhão.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-accent-fire mb-1">{feature.icon}</div>
                  <h3 className="font-bold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de garantir acesso ao IGE KIDS.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-fire text-white font-bold rounded-full hover:bg-accent-fire-hover transition-colors"
            >
              GARANTIR ACESSO
            </a>
          </ScrollReveal>

          {/* Visual / Image */}
          <ScrollReveal direction="right" distance={30} duration={600} delay={200}>
            <div className="relative h-[400px] bg-bg-secondary rounded-3xl border border-accent-metal/20 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/area-kids.webp"
                alt="Área Kids com brinquedos infláveis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-fire/20 rounded-full blur-xl z-10" />
              <div className="absolute top-10 right-10 w-20 h-20 bg-accent-gold/20 rounded-full blur-xl z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
