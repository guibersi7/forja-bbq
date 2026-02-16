import Image from "next/image";
import { Clock, Check, AlertTriangle, ShieldCheck, Paintbrush } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const ageGroups = [
  {
    emoji: "👶",
    label: "2 a 4 anos",
    price: 15,
    color: "#FF6B6B",
    activities: [
      "Participação nas oficinas",
      "Acesso ao Kids Play",
      "Piscina de bolinhas",
    ],
    notice:
      "Obrigatório o acompanhamento e supervisão de um adulto responsável durante todo o período.",
    noticeType: "warning" as const,
  },
  {
    emoji: "🧒",
    label: "A partir de 4 anos",
    price: 25,
    color: "#4ECDC4",
    activities: [
      "Participação nas oficinas",
      "Acesso ao Kids Play",
      "Piscina de bolinhas",
      "Tobogã",
    ],
    notice:
      "O espaço contará com monitores responsáveis pela organização e orientação das crianças.",
    noticeType: "info" as const,
  },
  {
    emoji: "🐂",
    label: "A partir de 8 anos",
    price: 25,
    color: "#45B7D1",
    activities: [
      "Participação nas oficinas",
      "Acesso ao Kids Play",
      "Piscina de bolinhas",
      "Tobogã",
      "Touro Mecânico",
    ],
    notice:
      "Participação no touro mecânico mediante orientação dos monitores e assinatura de responsabilidade.",
    noticeType: "warning" as const,
  },
];

const generalRules = [
  "O respeito às idades é obrigatório.",
  "Não será permitido acesso fora da faixa etária indicada.",
  "Em caso de comportamento inadequado, a criança poderá ser retirada da atividade.",
  "O responsável deve estar sempre disponível nas proximidades.",
  "A organização do FORJA BBQ preza pela segurança e integridade de todas as crianças.",
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
        {/* Top: intro + image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <ScrollReveal direction="left" distance={30} duration={600}>
            <span className="text-accent-fire text-sm font-bold tracking-[0.2em] mb-4 block">
              PARA A FAMÍLIA TODA
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              IGE KIDS
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Pensamos em tudo para que você e sua família tenham um dia
              incrível! O <strong>IGE KIDS</strong> é um espaço exclusivo com
              brinquedos infláveis e muita diversão para as crianças gastarem
              energia enquanto os pais aproveitam o melhor churrasco e comunhão.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Diversão com segurança, organização e responsabilidade.
            </p>
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

        {/* Operating hours badge */}
        <ScrollReveal direction="up" distance={20} duration={500}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent-fire/10 text-accent-fire font-bold text-sm px-5 py-2.5 rounded-full border border-accent-fire/20">
              <Clock className="w-4 h-4" />
              Funcionamento: 15h às 19h
            </div>
          </div>
        </ScrollReveal>

        {/* Age Group Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ageGroups.map((group, index) => (
            <ScrollReveal
              key={group.label}
              direction="up"
              distance={30}
              duration={500}
              delay={index * 100}
            >
              <div
                className="bg-bg-secondary rounded-3xl overflow-hidden border border-accent-metal/20 h-full flex flex-col"
                style={{ borderTopColor: group.color, borderTopWidth: 3 }}
              >
                {/* Card Header */}
                <div className="px-6 py-5 flex items-center justify-between border-b border-accent-metal/10">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{group.emoji}</span>
                    <h3 className="font-black text-text-primary text-lg">
                      {group.label}
                    </h3>
                  </div>
                  <span
                    className="text-2xl font-black"
                    style={{ color: group.color }}
                  >
                    R$ {group.price}
                  </span>
                </div>

                {/* Activities */}
                <div className="px-6 py-5 space-y-3 flex-1">
                  {group.activities.map((activity) => (
                    <div key={activity} className="flex items-center gap-2">
                      <Check
                        className="w-4 h-4 shrink-0"
                        style={{ color: group.color }}
                      />
                      <span className="text-text-secondary text-sm">
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Notice */}
                <div className="px-6 pb-5">
                  <div
                    className={`flex items-start gap-2 text-xs rounded-xl p-3 ${
                      group.noticeType === "warning"
                        ? "bg-amber-500/10 text-amber-400"
                        : "bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {group.noticeType === "warning" ? (
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    ) : (
                      <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                    )}
                    <span>{group.notice}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pintura Facial - Special Benefit */}
        <ScrollReveal direction="up" distance={20} duration={500}>
          <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-400/20 rounded-3xl p-px mb-12">
            <div className="bg-bg-secondary rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/15 flex items-center justify-center shrink-0">
                <Paintbrush className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-black text-text-primary text-xl mb-1">
                  Pintura Facial
                </h3>
                <p className="text-text-secondary mb-3">
                  Todas as crianças com pulseira de participação têm acesso à
                  pintura facial artística.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="inline-flex items-center gap-1 bg-purple-500/15 text-purple-400 text-xs font-bold px-3 py-1.5 rounded-full">
                    <Clock className="w-3 h-3" />
                    16h às 18h
                  </span>
                  <span className="inline-flex items-center gap-1 bg-accent-fire/15 text-accent-fire text-xs font-bold px-3 py-1.5 rounded-full">
                    Necessário pulseira
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* General Rules */}
        <ScrollReveal direction="up" distance={20} duration={500}>
          <div className="bg-bg-secondary rounded-3xl p-6 md:p-8 border border-accent-metal/20">
            <h3 className="font-black text-text-primary text-lg mb-5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent-fire" />
              Regras Gerais
            </h3>
            <ul className="space-y-3">
              {generalRules.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 text-text-secondary text-sm"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
