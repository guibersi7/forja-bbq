"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "#sobre", label: "O EVENTO" },
  { href: "#forja", label: "FORJA" },
  { href: "/cardapio", label: "CARDÁPIO" },
  { href: "#ige-kids", label: "IGE KIDS" },
  { href: "#local", label: "LOCAL" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg-primary/95 md:backdrop-blur-md border-b border-accent-metal/20" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <Image
                src="/images/preview-removebg-preview.webp"
                alt="Forja BBQ"
                width={48}
                height={48}
                className="h-12 w-auto"
                sizes="48px"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary hover:text-accent-fire text-xs font-bold tracking-[0.15em] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className="w-6 h-0.5 bg-text-primary block transition-all duration-300"
                style={isOpen ? { transform: "rotate(45deg) translateY(6px)" } : undefined}
              />
              <span
                className="w-6 h-0.5 bg-text-primary block transition-opacity duration-300"
                style={isOpen ? { opacity: 0 } : undefined}
              />
              <span
                className="w-6 h-0.5 bg-text-primary block transition-all duration-300"
                style={isOpen ? { transform: "rotate(-45deg) translateY(-6px)" } : undefined}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg-primary md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-text-primary text-2xl font-black tracking-wider hover:text-accent-fire transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-8">
            <Link
              href="#local"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 bg-accent-fire hover:bg-accent-fire-hover text-white font-bold text-sm px-8 py-4 rounded-full transition-colors"
            >
              COMO CHEGAR
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
