"use client";

import { motion } from "framer-motion";
import {
  ChartNoAxesCombined,
  Clapperboard,
  GitBranch,
  MapPin,
  PanelsTopLeft,
  Search,
  Target,
  Video,
} from "lucide-react";

const SERVICES = [
  {
    icon: Clapperboard,
    title: "Reels com a nossa blogueira",
    desc: "Ela visita o seu negócio e grava o conteúdo em parceria com o seu perfil. Sua marca aparece com uma cara nova, sem você precisar ir para frente da câmera.",
  },
  {
    icon: Video,
    title: "Reels com o seu negócio",
    desc: "Planejamos e editamos os vídeos com o dono ou alguém da equipe. O público conhece quem está por trás da marca e ganha confiança antes do primeiro contato.",
  },
  {
    icon: Target,
    title: "Meta Ads",
    desc: "Anúncios no Instagram e no Facebook mostrados para pessoas com o perfil do seu cliente, para você aparecer diante de quem tem chance real de comprar.",
  },
  {
    icon: Search,
    title: "Google Ads",
    desc: "Você aparece quando alguém pesquisa pelo seu produto ou serviço. São pessoas que já estão procurando.",
  },
  {
    icon: MapPin,
    title: "Google Meu Negócio",
    desc: "Seu negócio no Google Maps e nas buscas da cidade, com fotos, horários e avaliações, para quem procura por perto.",
  },
  {
    icon: PanelsTopLeft,
    title: "Instagram organizado",
    desc: "Bio e perfil ajustados, posts semanais e stories para o perfil passar profissionalismo e transformar visita em contato.",
  },
  {
    icon: GitBranch,
    title: "Estratégia, copy e funil",
    desc: "Textos e ofertas que explicam o valor do que você vende, remarketing para quem já viu seu anúncio e landing page objetiva que leva ao WhatsApp.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Relatórios e otimização",
    desc: "Acompanhamos os números, mostramos o que está funcionando e ajustamos as campanhas. Você sabe de onde vêm os contatos.",
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
            O que cada serviço faz pelo seu negócio.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
