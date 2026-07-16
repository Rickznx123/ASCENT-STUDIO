"use client";

import { motion } from "framer-motion";

// Placeholder wordmarks — substitua por SVGs reais dos logos dos clientes.
const CLIENTS = [
  "Trairão Esportes",
  "Pet Center",
  "Lab. Helena Dóris",
  "Japa'z Sushi",
  "Janaina Cardozo",
];

export function LogoStrip() {
  return (
    <section className="border-y border-line py-10">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-7 text-center font-mono text-xs uppercase tracking-wider text-ink-500"
        >
          Empresas que já colocamos na frente das pessoas certas
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {CLIENTS.map((name) => (
            <span
              key={name}
              className="text-base font-semibold tracking-tight text-ink-500 opacity-70 grayscale transition-opacity hover:opacity-100"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
