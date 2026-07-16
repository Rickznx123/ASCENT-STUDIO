"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Produzimos vídeos estratégicos.",
    desc: "Roteiro, filmagem e edição pensados para comunicar autoridade — não apenas estética.",
  },
  {
    n: "02",
    title: "Criamos campanhas inteligentes.",
    desc: "Estrutura de Meta Ads segmentada, testada e otimizada para o público certo.",
  },
  {
    n: "03",
    title: "Geramos oportunidades.",
    desc: "Leads e contatos qualificados chegam até a sua equipe comercial, prontos para conversa.",
  },
  {
    n: "04",
    title: "Sua equipe fecha negócios.",
    desc: "A conversão é o próximo passo — e ele pertence ao seu time comercial.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-purple">
            Como funciona
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            Um processo, quatro etapas, sem ruído.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
            >
              <span className="font-mono text-sm text-ink-500">{s.n}</span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-ink-100">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                {s.desc}
              </p>
              {i < STEPS.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-5 -translate-y-1/2 translate-x-full bg-line lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
