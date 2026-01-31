"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Calendar, ChevronRight, Menu, X, Play } from "lucide-react";

const FORJA_URL = "https://forja.igrejageracaoeleita.com";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cultos", label: "Cultos" },
  { href: "#ministerios", label: "Ministérios" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contato", label: "Contato" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg-primary/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-text-primary font-black text-2xl tracking-tight font-display">
            IGE
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-accent-gold text-sm font-medium tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary p-2"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg-primary border-t border-bg-highlight"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-text-primary text-lg font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-bg-highlight via-bg-primary to-bg-primary" />
        <div className="absolute inset-0 bg-bg-primary/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-text-primary leading-[0.9] mb-8 font-display">
            IGREJA
            <br />
            <span className="text-gradient-gold">GERAÇÃO ELEITA</span>
          </h1>
          <p className="text-text-secondary text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
            Uma igreja apaixonada por Jesus, comprometida com o Reino e dedicada a transformar vidas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#cultos"
              className="inline-flex items-center gap-2 bg-accent-main text-bg-primary font-bold px-8 py-4 rounded-full hover:bg-accent-light transition-colors"
            >
              Nossos Cultos
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="#sobre"
              className="inline-flex items-center gap-2 border-2 border-text-secondary text-text-primary font-bold px-8 py-4 rounded-full hover:border-accent-gold hover:text-accent-gold transition-colors"
            >
              Conheça a IGE
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
              NOSSA HISTÓRIA
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 leading-tight font-display">
              Uma Igreja que
              <br />
              Transforma Vidas
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              A Igreja Geração Eleita nasceu com um propósito claro: ser uma comunidade
              onde pessoas encontram Jesus, são discipuladas e enviadas para transformar
              o mundo ao seu redor.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Acreditamos que cada pessoa foi criada para um propósito único e que,
              juntos, podemos impactar nossa cidade, nossa nação e as nações.
            </p>
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 text-accent-gold font-bold hover:gap-4 transition-all"
            >
              Faça parte dessa história
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-bg-highlight rounded-2xl overflow-hidden flex items-center justify-center">
              <span className="text-text-muted">Imagem da Igreja</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent-gold text-bg-primary p-6 rounded-xl">
              <p className="text-4xl font-black font-display">10+</p>
              <p className="text-sm font-bold">Anos de história</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CultosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cultos = [
    { day: "Domingo", time: "09h e 18h", name: "Celebração", description: "Culto de adoração e pregação da Palavra" },
    { day: "Quarta", time: "19h30", name: "Culto de Ensino", description: "Estudo aprofundado das Escrituras" },
    { day: "Sexta", time: "20h", name: "Arena Jovem", description: "Encontro especial para jovens" },
  ];

  return (
    <section id="cultos" className="py-24 md:py-32 bg-bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
            PROGRAMAÇÃO
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 font-display">
            Nossos Cultos
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Venha nos visitar! Temos programações especiais para todas as idades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cultos.map((culto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-bg-secondary rounded-2xl p-8 border border-bg-highlight hover:border-accent-gold/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-accent-gold" />
                <span className="text-text-primary font-bold">{culto.day}</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-accent-gold" />
                <span className="text-text-secondary">{culto.time}</span>
              </div>
              <h3 className="text-2xl font-black text-text-primary mb-2 group-hover:text-accent-gold transition-colors font-display">
                {culto.name}
              </h3>
              <p className="text-text-muted">{culto.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MinisteriosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ministerios = [
    { name: "Forja", desc: "Ministério de Homens", href: FORJA_URL, color: "#FF5E00" },
    { name: "Mulheres", desc: "Ministério Feminino", href: "#", color: "#D4AF37" },
    { name: "Jovens", desc: "Arena Jovem", href: "#", color: "#4ECDC4" },
    { name: "Kids", desc: "Ministério Infantil", href: "#", color: "#FF6B9D" },
  ];

  return (
    <section id="ministerios" className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
            MINISTÉRIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 font-display">
            Encontre seu Lugar
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Na IGE, acreditamos que todos têm um chamado. Descubra onde você pode servir e crescer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministerios.map((min, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={min.href}
                target={min.href.startsWith("http") ? "_blank" : undefined}
                className="block bg-bg-primary rounded-2xl p-8 border border-bg-highlight hover:scale-[1.02] transition-all group"
                style={{ borderColor: `${min.color}20` }}
              >
                <div
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-2xl font-black text-white font-display"
                  style={{ backgroundColor: min.color }}
                >
                  {min.name.charAt(0)}
                </div>
                <h3 className="text-xl font-black text-text-primary mb-2 group-hover:text-accent-gold transition-colors font-display">
                  {min.name}
                </h3>
                <p className="text-text-muted">{min.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="eventos" className="py-24 md:py-32 bg-bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
            PRÓXIMOS EVENTOS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 font-display">
            Agenda
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href={FORJA_URL}
            target="_blank"
            className="block bg-gradient-to-r from-[#2A1A0F] to-[#1A1A1A] rounded-3xl p-8 md:p-12 border border-[#FF5E00]/20 hover:border-[#FF5E00]/50 transition-all group"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-[#2A1A0F] rounded-2xl flex items-center justify-center">
                <span className="text-[#FF5E00] text-6xl font-black font-display">F</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-[#FF5E00] text-sm font-bold tracking-wider">
                  21 DE FEVEREIRO • 14H ÀS 21H
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4 group-hover:text-[#FF5E00] transition-colors font-display">
                  FORJA BBQ
                </h3>
                <p className="text-gray-400 mb-6">
                  Festival da Costela! Toda arrecadação será destinada às obras de ampliação da igreja.
                </p>
                <span className="inline-flex items-center gap-2 text-[#FF5E00] font-bold">
                  Saiba mais
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
            ASSISTA
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary font-display">
            Último Culto
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video bg-bg-primary rounded-2xl overflow-hidden flex items-center justify-center"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Play className="w-10 h-10 text-accent-gold" />
            </div>
            <p className="text-text-muted">Vídeo do último culto</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContatoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 md:py-32 bg-bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
              CONTATO
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 font-display">
              Venha nos Visitar
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Estamos de portas abertas para você! Venha conhecer nossa comunidade.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-highlight rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-gold" />
                </div>
                <div>
                  <h3 className="text-text-primary font-bold mb-1">Endereço</h3>
                  <p className="text-text-secondary">Sorocaba - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-highlight rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent-gold" />
                </div>
                <div>
                  <h3 className="text-text-primary font-bold mb-1">Horários</h3>
                  <p className="text-text-secondary">
                    Domingo: 09h e 18h<br />
                    Quarta: 19h30
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-bg-secondary rounded-2xl overflow-hidden h-[400px] flex items-center justify-center"
          >
            <span className="text-text-muted">Mapa</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bg-secondary py-16 border-t border-bg-highlight">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-text-primary font-black text-2xl mb-2 font-display">
              Igreja Geração Eleita
            </h3>
            <p className="text-text-muted">Uma igreja apaixonada por Jesus</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-accent-gold text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-bg-highlight text-center">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} IGE - Igreja Geração Eleita. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CultosSection />
        <MinisteriosSection />
        <EventosSection />
        <VideoSection />
        <ContatoSection />
      </main>
      <Footer />
    </div>
  );
}
