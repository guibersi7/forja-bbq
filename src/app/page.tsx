"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Play, MapPin, Clock, Calendar, ChevronRight, Menu, X } from "lucide-react";

// Navigation
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
        scrolled ? "bg-church-bg-primary/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-church-text-primary font-black text-xl tracking-tight">
            IGE
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-church-text-secondary hover:text-church-accent-gold text-sm font-medium tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-church-text-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-church-bg-primary border-t border-church-bg-highlight"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-church-text-primary text-lg font-medium"
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
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/church-poster.jpg"
        >
          <source src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-church-bg-primary/80 via-church-bg-primary/60 to-church-bg-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-church-text-primary leading-[0.9] mb-8">
            IGREJA
            <br />
            <span className="text-gradient-gold">GERAÇÃO ELEITA</span>
          </h1>
          <p className="text-church-text-secondary text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
            Uma igreja apaixonada por Jesus, comprometida com o Reino e dedicada a transformar vidas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#cultos"
              className="inline-flex items-center gap-2 bg-church-accent-main text-church-bg-primary font-bold px-8 py-4 rounded-full hover:bg-church-accent-light transition-colors"
            >
              Nossos Cultos
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="#sobre"
              className="inline-flex items-center gap-2 border-2 border-church-text-secondary text-church-text-primary font-bold px-8 py-4 rounded-full hover:border-church-accent-gold hover:text-church-accent-gold transition-colors"
            >
              Conheça a IGE
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-church-text-muted rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-church-accent-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32 bg-church-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-church-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
              NOSSA HISTÓRIA
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-church-text-primary mb-6 leading-tight">
              Uma Igreja que
              <br />
              Transforma Vidas
            </h2>
            <p className="text-church-text-secondary text-lg leading-relaxed mb-6">
              A Igreja Geração Eleita nasceu com um propósito claro: ser uma comunidade
              onde pessoas encontram Jesus, são discipuladas e enviadas para transformar
              o mundo ao seu redor.
            </p>
            <p className="text-church-text-secondary text-lg leading-relaxed mb-8">
              Acreditamos que cada pessoa foi criada para um propósito único e que,
              juntos, podemos impactar nossa cidade, nossa nação e as nações.
            </p>
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 text-church-accent-gold font-bold hover:gap-4 transition-all"
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
            <div className="aspect-[4/5] bg-church-bg-highlight rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-church-text-muted text-lg">Imagem da Igreja</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-church-accent-gold text-church-bg-primary p-6 rounded-xl">
              <p className="text-4xl font-black">10+</p>
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
    {
      day: "Domingo",
      time: "09h e 18h",
      name: "Celebração",
      description: "Culto de adoração e pregação da Palavra",
    },
    {
      day: "Quarta",
      time: "19h30",
      name: "Culto de Ensino",
      description: "Estudo aprofundado das Escrituras",
    },
    {
      day: "Sexta",
      time: "20h",
      name: "Arena Jovem",
      description: "Encontro especial para jovens",
    },
  ];

  return (
    <section id="cultos" className="py-24 md:py-32 bg-church-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-church-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
            PROGRAMAÇÃO
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-church-text-primary mb-6">
            Nossos Cultos
          </h2>
          <p className="text-church-text-secondary text-lg max-w-2xl mx-auto">
            Venha nos visitar! Temos programações especiais para todas as idades e momentos da semana.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cultos.map((culto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-church-bg-secondary rounded-2xl p-8 border border-church-bg-highlight hover:border-church-accent-gold/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-church-accent-gold" />
                <span className="text-church-text-primary font-bold">{culto.day}</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-church-accent-gold" />
                <span className="text-church-text-secondary">{culto.time}</span>
              </div>
              <h3 className="text-2xl font-black text-church-text-primary mb-2 group-hover:text-church-accent-gold transition-colors">
                {culto.name}
              </h3>
              <p className="text-church-text-muted">{culto.description}</p>
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
    { name: "Forja", desc: "Ministério de Homens", href: "/forja/forja-bbq", color: "#FF5E00" },
    { name: "Mulheres", desc: "Ministério Feminino", href: "#", color: "#D4AF37" },
    { name: "Jovens", desc: "Arena Jovem", href: "#", color: "#4ECDC4" },
    { name: "Kids", desc: "Ministério Infantil", href: "#", color: "#FF6B9D" },
  ];

  return (
    <section id="ministerios" className="py-24 md:py-32 bg-church-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-church-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
            MINISTÉRIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-church-text-primary mb-6">
            Encontre seu Lugar
          </h2>
          <p className="text-church-text-secondary text-lg max-w-2xl mx-auto">
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
                className="block bg-church-bg-primary rounded-2xl p-8 border border-church-bg-highlight hover:border-opacity-50 transition-all hover:scale-[1.02] group"
                style={{ borderColor: min.color + "30" }}
              >
                <div
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-2xl font-black text-white"
                  style={{ backgroundColor: min.color }}
                >
                  {min.name.charAt(0)}
                </div>
                <h3 className="text-xl font-black text-church-text-primary mb-2 group-hover:text-church-accent-gold transition-colors">
                  {min.name}
                </h3>
                <p className="text-church-text-muted">{min.desc}</p>
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
    <section id="eventos" className="py-24 md:py-32 bg-church-bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-church-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
            PRÓXIMOS EVENTOS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-church-text-primary mb-6">
            Agenda
          </h2>
        </motion.div>

        {/* Forja BBQ Event Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href="/forja/forja-bbq"
            className="block bg-gradient-to-r from-[#2A1A0F] to-[#1A1A1A] rounded-3xl p-8 md:p-12 border border-[#FF5E00]/20 hover:border-[#FF5E00]/50 transition-all group"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                <Image
                  src="/images/preview-removebg-preview.png"
                  alt="Forja BBQ"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-[#FF5E00] text-sm font-bold tracking-wider">
                  21 DE FEVEREIRO • 14H ÀS 21H
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4 group-hover:text-[#FF5E00] transition-colors">
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
    <section className="py-24 md:py-32 bg-church-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-church-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
            ASSISTA
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-church-text-primary">
            Último Culto
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video bg-church-bg-primary rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Último Culto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContatoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 md:py-32 bg-church-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-church-accent-gold text-sm font-bold tracking-[0.2em] mb-4 block">
              CONTATO
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-church-text-primary mb-6">
              Venha nos Visitar
            </h2>
            <p className="text-church-text-secondary text-lg mb-8">
              Estamos de portas abertas para você! Venha conhecer nossa comunidade e fazer parte dessa família.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-church-bg-highlight rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-church-accent-gold" />
                </div>
                <div>
                  <h3 className="text-church-text-primary font-bold mb-1">Endereço</h3>
                  <p className="text-church-text-secondary">
                    Sorocaba - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-church-bg-highlight rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-church-accent-gold" />
                </div>
                <div>
                  <h3 className="text-church-text-primary font-bold mb-1">Horários</h3>
                  <p className="text-church-text-secondary">
                    Domingo: 09h e 18h
                    <br />
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
            className="bg-church-bg-secondary rounded-2xl overflow-hidden h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps?q=Sorocaba,SP&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização IGE"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-church-bg-secondary py-16 border-t border-church-bg-highlight">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-church-text-primary font-black text-2xl mb-2">
              Igreja Geração Eleita
            </h3>
            <p className="text-church-text-muted">
              Uma igreja apaixonada por Jesus
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-church-text-secondary hover:text-church-accent-gold text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-church-bg-highlight text-center">
          <p className="text-church-text-muted text-sm">
            &copy; {new Date().getFullYear()} IGE - Igreja Geração Eleita. Todos os direitos reservados.
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
