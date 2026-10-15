"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ArcanaSymbol from "./ArcanaSymbol";

interface Props {
  descriptor: string;
}

const DURATION_MS = 1100;

/** Brief session-only preloader. Never blocks navigation. */
export default function Preloader({ descriptor }: Props) {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let show: number | undefined;
    let hide: number | undefined;
    try {
      if (!sessionStorage.getItem("arcana-seen")) {
        sessionStorage.setItem("arcana-seen", "1");
        // Deferred on purpose: state updates live in callbacks, never
        // synchronously in the effect body (react-hooks/set-state-in-effect).
        show = window.setTimeout(() => {
          setVisible(true);
          hide = window.setTimeout(() => setVisible(false), DURATION_MS);
        }, 0);
      }
    } catch {
      // Storage unavailable (SSR / private mode): skip the preloader.
    }
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="ARCANA"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.01 : 0.5, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-gold"
          >
            <ArcanaSymbol className="h-12 w-12" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.45em" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display mt-5 text-2xl text-ivory"
          >
            ARCANA
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-3 text-[10px] tracking-[0.3em] text-smoke uppercase"
          >
            {descriptor}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
