"use client";

import { Play } from "lucide-react";

const OPEN_EVENT_NAME = "forja:intro-video:open";

export function IntroVideoTriggerButton() {
  const onOpenIntro = () => {
    window.dispatchEvent(new Event(OPEN_EVENT_NAME));
  };

  return (
    <button
      type="button"
      onClick={onOpenIntro}
      className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-olive/50 bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-olive-bright transition-all duration-300 hover:border-accent-olive-bright hover:bg-black/55 hover:text-text-primary"
      aria-label="Assistir vídeo de abertura do Forja M4"
    >
      <Play className="h-3.5 w-3.5 fill-current" />
      Assista ao vídeo
    </button>
  );
}
