"use client";

import { motion } from "framer-motion";

// Depoimentos de exemplo — substitua pelos textos reais dos seus clientes.
const TESTIMONIALS = [
  {
    quote:
      "A diferença é a clareza. Sabemos exatamente de onde vem cada oportunidade que chega até o nosso time.",
    name: "Janaina Cardozo",
    company: "Estética & Estúdio de Beleza",
    initials: "JC",
  },
  {
    quote:
      "Os vídeos elevaram o padrão da marca. Parece uma empresa muito maior do que realmente somos.",
    name: "Diretoria",
    company: "Trairão Esportes",
    initials: "TE",
  },
  {
    quote:
      "Trocamos volume por qualidade. Menos leads, mas leads que realmente conversam com nosso comercial.",
    name: "Diretoria",
    company: "Laboratório Helena Dóris",
    initials: "HD",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-purple">
            Depoimentos
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            O que dizem sobre o trabalho.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-2xl border border-line bg-white/[0.02] p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-ink-300">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple to-pink text-xs font-semibold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-100">{t.name}</p>
                  <p className="text-xs text-ink-500">{t.company}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
