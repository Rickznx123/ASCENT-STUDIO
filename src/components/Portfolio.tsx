"use client";

import { motion } from "framer-motion";
import { Microscope, Lightbulb, Zap, BarChart3 } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Analisamos o momento atual da empresa, entendemos seus objetivos, público e oportunidades para definir a melhor estratégia.",
    icon: Microscope,
  },
  {
    n: "02",
    title: "Estratégia",
    desc: "Planejamos toda a campanha, definimos público, objetivos, criativos e estrutura dos anúncios.",
    icon: Lightbulb,
  },
  {
    n: "03",
    title: "Execução",
    desc: "Criamos as campanhas, configuramos o Meta Ads e colocamos sua empresa diante das pessoas certas.",
    icon: Zap,
  },
  {
    n: "04",
    title: "Otimização",
    desc: "Monitoramos continuamente os resultados, realizamos testes e ajustes para melhorar a performance das campanhas.",
    icon: BarChart3,
  },
];

export function Portfolio() {
  return (
    <section id="como-trabalhamos" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-pink">
            Processo
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            Como trabalhamos.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {STEPS.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="font-mono text-sm text-ink-500">{s.n}</span>
                    <h3 className="mt-3 text-xl font-semibold text-ink-100">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      {s.desc}
                    </p>
                  </div>
                  <div className="ml-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple/20 to-pink/20">
                    <IconComponent className="h-6 w-6 text-pink" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
