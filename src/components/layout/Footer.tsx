import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-bg-secondary py-16 border-t border-accent-metal/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/images/preview-removebg-preview.png"
              alt="Forja BBQ"
              width={80}
              height={80}
              className="h-16 w-auto"
            />
            <p className="text-text-secondary text-sm text-center md:text-left">
              Da brasa à mesa, para o Reino.
              <br />
              IGE - Igreja Geração Eleita
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { href: "#sobre", label: "O Evento" },
              { href: "#forja", label: "Forja" },
              { href: "#detalhes", label: "Detalhes" },
              { href: "#local", label: "Local" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-accent-fire text-xs font-bold tracking-wider transition-colors"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Date */}
          <div className="text-center md:text-right">
            <p className="text-accent-fire font-black text-2xl">21.02.25</p>
            <p className="text-text-secondary text-xs tracking-wider">14H - 21H</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-accent-metal/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary/60 text-xs">
            &copy; {new Date().getFullYear()} IGE - Igreja Geração Eleita
          </p>
          <p className="text-text-secondary/60 text-xs">
            Feito com <span className="text-accent-fire">♥</span> pelo ministério Forja
          </p>
        </div>
      </div>
    </footer>
  );
}
