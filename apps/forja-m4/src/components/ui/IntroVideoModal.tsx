"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const INTRO_STORAGE_KEY = "forja_m4_intro_seen_v2";
const INTRO_COOKIE_KEY = "forja_m4_first_access_done";
const OPEN_EVENT_NAME = "forja:intro-video:open";
const OPEN_DELAY_MS = 380;
const CLOSE_ANIMATION_MS = 260;
const INTRO_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

type IdleWindow = Window & {
  cancelIdleCallback?: (id: number) => void;
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
};

export function IntroVideoModal() {
  const closeTimerRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const hasSeenIntroCookie = useCallback(() => {
    return document.cookie
      .split(";")
      .some((cookieEntry) => cookieEntry.trim().startsWith(`${INTRO_COOKIE_KEY}=1`));
  }, []);

  const markAsSeen = useCallback(() => {
    try {
      document.cookie = `${INTRO_COOKIE_KEY}=1; Max-Age=${INTRO_COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax`;
      localStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      // no-op
    }
  }, []);

  const hasSeenIntro = useCallback(() => {
    try {
      if (hasSeenIntroCookie()) return true;
      return localStorage.getItem(INTRO_STORAGE_KEY) === "1";
    } catch {
      return true;
    }
  }, [hasSeenIntroCookie]);

  const openModal = useCallback(() => {
    setVideoError(false);
    setVideoReady(false);
    setVisible(true);
    requestAnimationFrame(() => setOpen(true));
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const appWindow = window as IdleWindow;

    const openFromFirstAccess = () => {
      if (hasSeenIntro()) return;
      markAsSeen();
      openModal();
    };

    if (appWindow.requestIdleCallback) {
      const idleId = appWindow.requestIdleCallback(openFromFirstAccess, { timeout: OPEN_DELAY_MS });
      return () => {
        if (appWindow.cancelIdleCallback) appWindow.cancelIdleCallback(idleId);
      };
    }

    const timer = window.setTimeout(openFromFirstAccess, OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [hasSeenIntro, markAsSeen, openModal]);

  useEffect(() => {
    const onOpenRequested = () => openModal();
    window.addEventListener(OPEN_EVENT_NAME, onOpenRequested);
    return () => window.removeEventListener(OPEN_EVENT_NAME, onOpenRequested);
  }, [openModal]);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  const closeModal = useCallback(() => {
    setOpen(false);
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setVisible(false);
      setVideoReady(false);
    }, CLOSE_ANIMATION_MS);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onEsc);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    void videoRef.current?.play().catch(() => undefined);

    return () => window.removeEventListener("keydown", onEsc);
  }, [open, closeModal]);

  if (!visible || typeof window === "undefined") return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[110] flex items-center justify-center bg-black/82 p-3 transition-opacity duration-300 sm:p-6 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
      onClick={closeModal}
    >
      <div
        className={`pulse-border relative w-[92vw] overflow-hidden rounded-2xl border border-line-soft bg-bg-secondary shadow-[0_25px_80px_rgba(0,0,0,0.75)] transition-all duration-300 sm:w-[88vw] lg:w-[75vw] ${
          open ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.97] opacity-0"
        }`}
        style={{ maxWidth: "75vw", maxHeight: "90vh" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="forja-intro-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent p-3">
          <p id="forja-intro-title" className="text-[10px] font-semibold uppercase tracking-[0.24em] text-text-primary/95">
            FORJA M4 | O VALE DA DECISÃO
          </p>
          <button
            type="button"
            className="rounded-full border border-line-soft bg-black/30 p-1.5 text-text-secondary transition-colors hover:text-text-primary"
            aria-label="Fechar vídeo de abertura"
            onClick={closeModal}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative flex h-[68vh] w-full items-center justify-center bg-black sm:h-[76vh] lg:h-[90vh]">
          <div
            className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-300 ${
              videoReady && !videoError ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundImage: "url('/images/forja-m4-hero-poster.webp')" }}
            aria-hidden="true"
          />

          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${
              videoReady && !videoError ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            playsInline
            controls
            preload="none"
            poster="/images/forja-m4-hero-poster.webp"
            onCanPlay={() => setVideoReady(true)}
            onLoadedData={() => setVideoReady(true)}
            onEnded={closeModal}
            onError={() => {
              setVideoError(true);
              setVideoReady(false);
            }}
          >
            <source src="/videos/forja-m4-intro.webm" type="video/webm" />
            <source src="/videos/forja-m4-intro.mp4" type="video/mp4" />
            <source src="/videos/forja-m4-intro.mov" type="video/quicktime" />
          </video>

          {videoError ? (
            <div className="absolute inset-0 flex items-end justify-center bg-black/55 p-4">
              <p className="max-w-[28ch] text-center text-xs leading-relaxed text-text-secondary">
                Não foi possível reproduzir o vídeo de abertura.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}
