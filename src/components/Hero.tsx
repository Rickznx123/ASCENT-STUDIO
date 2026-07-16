"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { DeckPanel } from "./DeckPanel";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* ambient glow field */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-purple/20 blur-[140px]" />
        <div className="absolute right-[-8%] top-[20%] h-[420px] w-[420px] rounded-full bg-pink/15 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* left column */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-purple" />
            <span className="font-mono text-xs tracking-wide text-ink-300">
              Produção Audiovisual + Meta Ads
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-100 sm:text-5xl lg:text-[3.4rem]"
          >
            A sua empresa precisa de{" "}
            <span className="text-gradient">mais oportunidades</span> de negócio.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-lg text-lg leading-relaxed text-ink-300"
          >
            Criamos vídeos estratégicos e campanhas no Meta Ads para conectar
            sua empresa às pessoas certas.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <a
              href="https://wa.me/5566999765693?text=Olá! Vim através do site da ASCENT STUDIO e gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple to-pink px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#como-trabalhamos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink-100 transition-colors hover:bg-white/[0.05]"
            >
              <PlayCircle className="h-4 w-4" />
              Ver como trabalhamos
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 max-w-md font-mono text-xs leading-relaxed text-ink-500"
          >
            Nós geramos oportunidades qualificadas. A equipe comercial do
            cliente transforma essas oportunidades em vendas.
          </motion.p>
        </div>

        {/* right column — signature visual */}
        <div className="flex justify-center lg:justify-end">
          <DeckPanel />
        </div>
      </div>
    </section>
  );
}
