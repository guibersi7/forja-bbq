"use client";

import { useEffect, useState } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-21T14:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 md:gap-6">
      {[
        { value: timeLeft.days, label: "DIAS" },
        { value: timeLeft.hours, label: "HORAS" },
        { value: timeLeft.minutes, label: "MIN" },
        { value: timeLeft.seconds, label: "SEG" },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="bg-bg-secondary/80 md:backdrop-blur-sm border border-accent-metal/30 rounded-lg px-3 py-2 md:px-5 md:py-3 min-w-[60px] md:min-w-[80px]">
            <span className="text-2xl md:text-4xl font-black text-accent-fire tabular-nums">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] md:text-xs text-text-secondary mt-1 block tracking-widest">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
