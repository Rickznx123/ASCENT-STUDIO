"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL, trackLead } from "@/lib/track";

/* ------------------------------------------------------------------
   ATENÇÃO: os números abaixo são EXEMPLOS para validar o layout.
   Troque pelos resultados reais de cada cliente (e peça autorização)
   antes de publicar. Dado inventado em anúncio destrói confiança.
------------------------------------------------------------------- */

type Channel = "Meta Ads" | "Google Ads";

type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

type Case = {
  client: string;
  segment: string;
  channel: Channel;
  period: string;
  summary: string;
  metrics: [Metric, Metric, Metric];
};

const CASES: Case[] = [
  {
    client: "Trairão Esportes",
    segment: "Varejo esportivo",
    channel: "Meta Ads",
    period: "90 dias", // TODO: real
    summary: "Vídeos de produto + campanha de conversas no WhatsApp.",
    metrics: [
      { value: 214, label: "conversas iniciadas" }, // TODO: real
      { value: 38, prefix: "−R$ ", label: "no custo por conversa" }, // TODO: real
      { value: 3.2, suffix: "x", decimals: 1, label: "retorno sobre o investimento" }, // TODO: real
    ],
  },
  {
    client: "Laboratório Helena Dóris",
    segment: "Saúde",
    channel: "Google Ads",
    period: "60 dias", // TODO: real
    summary: "Rede de Pesquisa para exames com alta intenção de busca.",
    metrics: [
      { value: 96, label: "agendamentos" }, // TODO: real
      { value: 41, suffix: "%", label: "menos custo por contato" }, // TODO: real
      { value: 7.4, suffix: "%", decimals: 1, label: "taxa de conversão da página" }, // TODO: real
    ],
  },
  {
    client: "Japa'z Sushi",
    segment: "Gastronomia",
    channel: "Meta Ads",
    period: "45 dias", // TODO: real
    summary: "Criativos em vídeo curto e oferta por região.",
    metrics: [
      { value: 173, label: "pedidos pelo WhatsApp" }, // TODO: real
      { value: 2.6, suffix: "x", decimals: 1, label: "retorno sobre o investimento" }, // TODO: real
      { value: 4.9, suffix: "%", decimals: 1, label: "CTR médio" }, // TODO: real
    ],
  },
];

const FILTERS = ["Todos", "Meta Ads", "Google Ads"] as const;
type Filter = (typeof FILTERS)[number];

function Stat({ m }: { m: Metric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const decimals = m.decimals ?? 0;

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, m.value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = `${m.prefix ?? ""}${v.toFixed(decimals)}${m.suffix ?? ""}`;
      },
    });
    return () => controls.stop();
  }, [inView, m, decimals]);

  return (
    <div>
      <span ref={ref} className="text-3xl font-extrabold tracking-tight text-gradient">
        {m.prefix ?? ""}0{m.suffix ?? ""}
      </span>
      <p className="mt-1 text-xs leading-snug text-ink-500">{m.label}</p>
    </div>
  );
}

export function Cases() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const visible = CASES.filter((c) => filter === "Todos" || c.channel === filter);

  return (
    <section id="cases" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            Resultados de quem já está na frente das{" "}
            <span className="text-gradient">pessoas certas.</span>
          </h2>
          <p className="mt-4 text-base text-ink-500">
            Campanhas reais, com números medidos nas próprias contas de anúncio.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filtrar cases por canal"
          className="mx-auto mb-10 flex w-fit gap-1 rounded-full border border-line bg-white/[0.03] p-1"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-purple ${
                filter === f ? "text-white" : "text-ink-300 hover:text-ink-100"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="case-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple to-pink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((c) => (
              <motion.article
                key={c.client}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass flex flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-line px-3 py-1 text-xs text-ink-300">
                    {c.channel}
                  </span>
                  <span className="text-xs text-ink-500">{c.period}</span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-ink-100">{c.client}</h3>
                <p className="text-sm text-ink-500">{c.segment}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{c.summary}</p>

                <div className="mt-8 grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {c.metrics.map((m) => (
                    <Stat key={m.label} m={m} />
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead("cases")}
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple to-pink px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Quero um resultado assim
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
