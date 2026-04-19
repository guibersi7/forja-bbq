import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/igrejageracaoeleita_/",
    label: "Instagram IGE",
    icon: Instagram,
  },
  {
    href: "https://www.facebook.com/igeigrejageracaoeleita",
    label: "Facebook IGE",
    icon: Facebook,
  },
  {
    href: "https://www.instagram.com/forjanaselva/",
    label: "Instagram Forja",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line-soft bg-bg-secondary/95 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-text-muted">
            IGE - Igreja Geração Eleita
          </p>
          <p className="font-display text-lg leading-none tracking-[0.1em] text-accent-olive-bright">
            FORJA M4
          </p>
        </div>

        <nav className="flex items-center gap-3">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-soft bg-bg-elevated text-text-secondary transition-colors hover:border-accent-olive-bright hover:text-accent-olive-bright"
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-between border-t border-line-soft pt-4 text-[11px] uppercase tracking-[0.2em] text-text-muted">
          <p>Todos os direitos reservados IGE</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
