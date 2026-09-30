"use client";

import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Minus } from "lucide-react";
import { buildWhatsAppUrl, trackLead } from "@/lib/track";

type PlanId = "basico" | "avancado" | "premium";
type PlanModeId = "colab" | "negocio";

type PlanItem = {
  text: string;
  badge?: string;
};

type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  featured?: boolean;
  includes: PlanItem[];
  excludes: string[];
};

type PlanMode = {
  id: PlanModeId;
  tabLabel: string;
  description: string;
  whatsappMode: string;
  plans: Plan[];
};

const PLAN_MODES: PlanMode[] = [
  {
    id: "colab",
    tabLabel: "Com a nossa blogueira",
    description:
      "Nossa blogueira vai até o seu negócio e grava o conteúdo em parceria com o seu perfil. Você não precisa aparecer.",
    whatsappMode: "com a blogueira",
    plans: [
      {
        id: "basico",
        name: "Básico",
        tagline: "Apareça com força",
        includes: [
          { text: "1 Reels com colab por mês" },
          { text: "2 visitas presenciais da blogueira por mês" },
          { text: "Até 10 stories por visita" },
          { text: "Gravação e produção de conteúdo" },
          { text: "Ajuste de bio e perfil" },
          { text: "Direcionamento estratégico de conteúdo" },
        ],
        excludes: ["Meta Ads", "Google Ads", "Gestão do Instagram", "2 posts semanais"],
      },
      {
        id: "avancado",
        name: "Avançado",
        tagline: "Mais alcance, mais resultados",
        featured: true,
        includes: [
          { text: "2 Reels com colab por mês" },
          { text: "4 visitas presenciais da blogueira por mês" },
          { text: "Até 10 stories por visita" },
          { text: "Gravação e produção de conteúdo" },
          { text: "Ajuste de bio e perfil" },
          { text: "Direcionamento estratégico de conteúdo" },
          { text: "Meta Ads" },
        ],
        excludes: ["Google Ads", "Gestão do Instagram", "2 posts semanais"],
      },
      {
        id: "premium",
        name: "Premium",
        tagline: "Autoridade e crescimento real",
        includes: [
          { text: "4 Reels com colab por mês" },
          { text: "4 visitas presenciais da blogueira por mês" },
          { text: "Até 10 stories por visita" },
          { text: "Gravação e produção de conteúdo" },
          { text: "Ajuste de bio e perfil" },
          { text: "Direcionamento estratégico de conteúdo" },
          { text: "Meta Ads" },
          { text: "Google Ads" },
          { text: "Gestão do Instagram" },
          { text: "2 posts semanais" },
        ],
        excludes: [],
      },
    ],
  },
  {
    id: "negocio",
    tabLabel: "Com o seu negócio",
    description:
      "Nós planejamos, produzimos e editamos os vídeos com o dono ou alguém da sua equipe na frente da câmera.",
    whatsappMode: "com o meu negócio",
    plans: [
      {
        id: "basico",
        name: "Básico",
        tagline: "Apareça com força",
        includes: [
          { text: "Estratégia e planejamento de conteúdo" },
          { text: "Produção de 4 Reels por mês" },
          { text: "Otimização de bio e perfil" },
          { text: "Meta Ads" },
          { text: "Configuração e otimização das campanhas" },
          { text: "Relatório mensal" },
        ],
        excludes: ["Google Ads", "Google Meu Negócio", "Posts para Instagram", "Landing page / site"],
      },
      {
        id: "avancado",
        name: "Avançado",
        tagline: "Mais alcance, mais resultados",
        featured: true,
        includes: [
          { text: "Tudo do Básico" },
          { text: "Produção de 8 Reels por mês" },
          { text: "Meta Ads" },
          { text: "Google Ads" },
          { text: "Google Meu Negócio" },
          { text: "Estratégia de campanhas" },
          { text: "Copywriting" },
          { text: "Otimização semanal" },
          { text: "Relatório + análise mensal" },
        ],
        excludes: ["Posts para Instagram", "Landing page / site"],
      },
      {
        id: "premium",
        name: "Premium",
        tagline: "Autoridade e crescimento real",
        includes: [
          { text: "Tudo do Avançado" },
          { text: "Produção de 12 Reels por mês" },
          { text: "2 posts semanais" },
          { text: "Meta Ads" },
          { text: "Google Ads" },
          { text: "Google Meu Negócio" },
          { text: "Gestão de conteúdo do Instagram" },
          { text: "Estruturação de funil" },
          { text: "Remarketing" },
          { text: "Landing page / site", badge: "Incluso" },
          { text: "Otimização contínua" },
          { text: "Reunião estratégica mensal" },
          { text: "Relatório completo" },
        ],
        excludes: [],
      },
    ],
  },
];

function handleTabKeyDown(
  event: KeyboardEvent<HTMLButtonElement>,
  currentIndex: number,
  setModeId: (modeId: PlanModeId) => void
) {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();

  const nextIndex =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? PLAN_MODES.length - 1
        : (currentIndex + (event.key === "ArrowRight" ? 1 : -1) + PLAN_MODES.length) %
          PLAN_MODES.length;
  const nextMode = PLAN_MODES[nextIndex] ?? PLAN_MODES[0];

  setModeId(nextMode.id);
  document.getElementById(`plans-tab-${nextMode.id}`)?.focus();
}

export function Plans() {
  const [activeModeId, setActiveModeIdState] = useState<PlanModeId>("colab");
  const activeMode = PLAN_MODES.find((mode) => mode.id === activeModeId) ?? PLAN_MODES[0];

  return (
    <section id="planos" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-pink">
            Planos
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            Escolha como quer produzir seu conteúdo.
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Escolha o modelo do plano"
          className="mx-auto mb-8 flex w-full max-w-xl gap-1 rounded-full border border-line bg-white/[0.03] p-1"
        >
          {PLAN_MODES.map((mode, index) => (
            <button
              key={mode.id}
              id={`plans-tab-${mode.id}`}
              type="button"
              role="tab"
              aria-selected={activeModeId === mode.id}
              aria-controls={`plans-panel-${mode.id}`}
              tabIndex={activeModeId === mode.id ? 0 : -1}
              onClick={() => setActiveModeIdState(mode.id)}
              onKeyDown={(event) =>
                handleTabKeyDown(event, index, setActiveModeIdState)
              }
              className={`relative flex min-w-0 flex-1 items-center justify-center rounded-full px-2 py-2.5 text-center text-xs font-medium leading-tight transition-colors sm:px-5 sm:text-sm ${
                activeModeId === mode.id
                  ? "text-white"
                  : "text-ink-300 hover:text-ink-100"
              }`}
            >
              {activeModeId === mode.id && (
                <motion.span
                  layoutId="plans-tab-indicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{mode.tabLabel}</span>
            </button>
          ))}
        </div>

        {PLAN_MODES.filter((mode) => mode.id !== activeMode.id).map((mode) => (
          <div
            key={mode.id}
            id={`plans-panel-${mode.id}`}
            role="tabpanel"
            aria-labelledby={`plans-tab-${mode.id}`}
            hidden
          />
        ))}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeMode.id}
            id={`plans-panel-${activeMode.id}`}
            role="tabpanel"
            aria-labelledby={`plans-tab-${activeMode.id}`}
            tabIndex={0}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="outline-none focus-visible:outline-2 focus-visible:outline-purple"
          >
            <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-ink-500 sm:text-base">
              {activeMode.description}
            </p>

            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
              {activeMode.plans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl ${
                    plan.featured ? "bg-gradient-to-br from-purple to-pink p-px" : ""
                  }`}
                >
                  <motion.article
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    className={`glass flex h-full flex-col rounded-2xl p-6 ${
                      plan.featured ? "border-transparent" : ""
                    }`}
                  >
                    {plan.featured && (
                      <span className="mb-4 inline-flex self-start rounded-full bg-gradient-to-r from-purple to-pink px-3 py-1 text-xs font-semibold text-white">
                        Mais escolhido
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-ink-100">{plan.name}</h3>
                    <p className="mt-1 text-sm text-ink-500">{plan.tagline}</p>

                    <ul className="mt-6 space-y-3">
                      {plan.includes.map((item) => (
                        <li key={item.text} className="flex min-w-0 items-start gap-3">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-pink"
                            aria-hidden="true"
                          />
                          <span className="min-w-0 flex-1 text-sm leading-relaxed text-ink-300">
                            {item.text}
                          </span>
                          {item.badge && (
                            <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-[10px] text-ink-300">
                              {item.badge}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>

                    {plan.excludes.length > 0 && (
                      <div className="mt-6 border-t border-line pt-5">
                        <p className="mb-3 text-xs font-semibold text-ink-500">
                          Não inclui
                        </p>
                        <ul className="space-y-2.5">
                          {plan.excludes.map((item) => (
                            <li key={item} className="flex min-w-0 items-start gap-3">
                              <Minus
                                className="mt-0.5 h-4 w-4 shrink-0 text-ink-500"
                                aria-hidden="true"
                              />
                              <span className="min-w-0 text-sm leading-relaxed text-ink-500">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <a
                      href={buildWhatsAppUrl(
                        `Olá! Vim pelo site da ASCENT STUDIO e quero o plano ${plan.name} (${activeMode.whatsappMode}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackLead(`plano-${plan.id}-${activeMode.id}`)
                      }
                      className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple to-pink px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-purple"
                    >
                      Quero este plano
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </motion.article>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="glass mt-12 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-ink-100">
                Serviços avulsos — precisa de algo específico?
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-300 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-2 sm:space-y-0">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink" aria-hidden="true" />
                  Visita presencial (até 10 stories)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink" aria-hidden="true" />
                  Reels com colab (cobertura de evento, inauguração e outros)
                </li>
              </ul>
            </div>
            <a
              href={buildWhatsAppUrl(
                "Olá! Vim pelo site da ASCENT STUDIO e quero um serviço avulso."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead("servico-avulso")}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink-100 transition-colors hover:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-purple"
            >
              Falar sobre um serviço avulso
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}