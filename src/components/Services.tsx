"use client";

import { motion } from "framer-motion";
import { Clapperboard, LineChart, Sparkles, LayoutTemplate, Search } from "lucide-react";

const SERVICES = [
  {
    icon: Clapperboard,
    title: "Produção Audiovisual",
    desc: "Vídeos institucionais e comerciais gravados e editados para transmitir autoridade de marca.",
  },
  {
    icon: LineChart,
    title: "Gestão de Meta Ads",
    desc: "Campanhas estruturadas, segmentadas e otimizadas continuamente com base em dados reais.",
  },
  {
    icon: Search,
    title: "Google Ads",
    desc: "Campanhas estratégicas na Rede de Pesquisa, Display, YouTube e Performance Max para conectar sua empresa a pessoas que já estão procurando pelo seu produto ou serviço.",
  },
  {
    icon: Sparkles,
    title: "Criativos para anúncios",
    desc: "Peças pensadas para deter o scroll e comunicar a proposta certa para cada público.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages de Conversão",
    desc: "Páginas rápidas e objetivas, construídas para transformar atenção em contato qualificado.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-pink">
            Serviços
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            Tudo o que conecta sua marca ao público certo.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass group relative rounded-2xl p-7 transition-transform hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple/25 to-pink/25 text-ink-100">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-ink-100">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
