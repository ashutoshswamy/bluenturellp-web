"use client";

import { useEffect, useState } from "react";
import { Ship } from "lucide-react";

// ponytail: brand loading screen, not a real progress indicator — bar/ship
// motion is CSS-driven (compositor, costs React nothing). Previously the %
// number also came from rAF + setState every frame (~60 renders/sec), which
// fought hydration + the GSAP chunk load for the same main thread — that was
// the actual "laggy" feel on first load. A 10/sec interval keeps the number
// readable while cutting re-renders ~6x.
const DURATION = 2200;
const TICK_MS = 100;

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = Date.now();

    const interval = setInterval(() => {
      setProgress(Math.min(100, ((Date.now() - start) / DURATION) * 100));
    }, TICK_MS);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setDone(true);
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("site:loaded"));
    }, DURATION + 350);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {!done && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-neutral-900 overflow-hidden animate-loading-out"
          style={{ animationDuration: `${DURATION}ms`, animationDelay: `${DURATION}ms` }}
          aria-hidden
        >
          <div className="flex h-56 w-56 items-center justify-center">
            <Ship
              className="text-primary-500 animate-loading-ship"
              size={72}
              style={{ animationDuration: `${DURATION}ms` }}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-primary-500 animate-loading-bar"
                style={{ animationDuration: `${DURATION}ms` }}
              />
            </div>
            <span className="font-mono text-sm tabular-nums text-white/70">{Math.round(progress)}%</span>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
