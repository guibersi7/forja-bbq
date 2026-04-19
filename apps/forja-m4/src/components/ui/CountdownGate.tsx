"use client";

import { useEffect, useMemo, useState } from "react";
import { ForjaFormModal } from "@/components/ui/ForjaFormModal";

const RELEASE_DATE = new Date("2026-04-20T18:30:00-03:00").getTime();

interface CountdownState {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getCountdown(): CountdownState {
  const total = RELEASE_DATE - Date.now();

  if (total <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export function CountdownGate() {
  const [countdown, setCountdown] = useState<CountdownState>(getCountdown);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (countdown.total <= 0) return;

    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, [countdown.total]);

  const timeBoxes = useMemo(
    () => [
      { value: countdown.days, label: "DIAS" },
      { value: countdown.hours, label: "HORAS" },
      { value: countdown.minutes, label: "MIN" },
      { value: countdown.seconds, label: "SEG" },
    ],
    [countdown.days, countdown.hours, countdown.minutes, countdown.seconds],
  );

  return (
    <>
      {countdown.total <= 0 ? (
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-olive-bright">
            Inscrições liberadas
          </p>
          <a
            href="#formulario-forja-m4"
            onClick={(event) => {
              event.preventDefault();
              setOpenModal(true);
            }}
            className="w-full rounded-xl bg-accent-olive px-6 py-4 font-display text-3xl leading-none tracking-[0.08em] text-white transition-all hover:bg-accent-olive-bright sm:w-auto sm:min-w-[300px]"
          >
            A HORA É AGORA!
          </a>
        </div>
      ) : (
        <div>
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.34em] text-text-secondary sm:text-left">
            INSCRIÇÕES ABREM EM
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {timeBoxes.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-line-soft bg-bg-secondary/85 px-2 py-3 text-center sm:px-3 sm:py-4"
              >
                <div
                  className="countdown-number font-display text-4xl leading-none tracking-[0.08em] text-accent-olive-bright sm:text-5xl"
                  suppressHydrationWarning
                >
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-text-muted sm:text-[11px]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-sm text-text-secondary sm:text-left">
            Segunda-feira, 20 de abril de 2026 às 18:30.
          </p>
        </div>
      )}

      <ForjaFormModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
