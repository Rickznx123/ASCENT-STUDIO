"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const POINTS = [
  "Não fazemos marketing por volume.",
  "Cada campanha possui estratégia.",
  "Geramos oportunidades reais.",
  "Criamos anúncios que despertam atenção.",
];

export function WhyUs() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-purple">
            Por que a Ascent
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink-100 sm:text-4xl">
            Estratégia antes de execução. Sempre.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
            Não somos uma agência de social media. Somos um estúdio que trata
            cada campanha como um sistema — com hipótese, teste e
            responsabilidade sobre o que é entregue.
          </p>
        </motion.div>

        <div className="space-y-3">
          {POINTS.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 rounded-2xl border border-line bg-white/[0.02] px-5 py-4"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple to-pink">
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-ink-100 sm:text-base">
                {p}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
