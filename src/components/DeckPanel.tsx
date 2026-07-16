"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = v.toFixed(decimals) + suffix;
      }
    });
  }, [spring, suffix, decimals]);

  return <span ref={ref}>0{suffix}</span>;
}

const BARS = [38, 62, 45, 80, 58, 94, 70];

export function DeckPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: 4 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      className="glass glow-purple relative w-full max-w-md rounded-3xl p-5 sm:p-6"
      style={{ perspective: 1000 }}
    >
      {/* header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-pink" />
          <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-500">
            campanha · ao vivo
          </span>
        </div>
        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] text-ink-500">
          meta ads
        </span>
      </div>

      {/* metric tiles */}
      <div className="mb-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-line bg-white/[0.03] p-4">
          <p className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-500">
            Oportunidades
          </p>
          <p className="mt-1.5 text-2xl font-bold text-ink-100">
            <Counter to={128} suffix="" />
          </p>
          <p className="mt-1 font-mono text-[0.7rem] text-purple">↑ 34% no mês</p>
        </div>
        <div className="rounded-2xl border border-line bg-white/[0.03] p-4">
          <p className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-500">
            CTR médio
          </p>
          <p className="mt-1.5 text-2xl font-bold text-ink-100">
            <Counter to={4.8} decimals={1} suffix="%" />
          </p>
          <p className="mt-1 font-mono text-[0.7rem] text-pink">acima da média</p>
        </div>
      </div>

      {/* bar chart */}
      <div className="mb-5 rounded-2xl border border-line bg-white/[0.03] p-4">
        <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-wider text-ink-500">
          Alcance qualificado / 7 dias
        </p>
        <div className="flex h-16 items-end gap-1.5">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{
                duration: 0.8,
                delay: 0.6 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-1 rounded-sm bg-gradient-to-t from-purple to-pink"
            />
          ))}
        </div>
      </div>

      {/* video strip */}
      <div>
        <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-wider text-ink-500">
          Criativos em produção
        </p>
        <div className="flex gap-2">
          {[
            "from-purple/40 to-panel",
            "from-pink/40 to-panel",
            "from-purple/30 via-pink/20 to-panel",
          ].map((grad, i) => (
            <div
              key={i}
              className={`relative flex h-14 flex-1 items-center justify-center rounded-xl border border-line bg-gradient-to-br ${grad}`}
            >
              <Play className="h-3.5 w-3.5 text-ink-100/80" fill="currentColor" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
