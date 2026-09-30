"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL, trackLead } from "@/lib/track";

export function FinalCta() {
  return (
    <section id="orcamento" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/15 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-bold leading-tight tracking-tight text-ink-100 sm:text-4xl lg:text-5xl"
        >
          Vamos colocar sua empresa na{" "}
          <span className="text-gradient">frente das pessoas certas?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead("final-cta")}
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple to-pink px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Solicitar orçamento
            <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
