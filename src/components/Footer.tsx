import { Mail, MapPin } from "lucide-react";
import { Wordmark } from "./Logo";
import { FooterWhatsAppLink } from "./FooterWhatsAppLink";

function InstagramIcon({ className = "h-4 w-4 text-ink-500" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <Wordmark />
          <p className="mt-4 text-sm leading-relaxed text-ink-500">
            Estratégia · Criatividade · Resultados. Produção audiovisual e
            gestão de tráfego pago para empresas que querem oportunidades
            reais.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-ink-300">
          <a
            href="https://instagram.com/ascentstudioaf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 transition-colors hover:text-ink-100"
          >
            <InstagramIcon />
            @ascentstudioaf
          </a>
          <FooterWhatsAppLink />
          <a
            href="mailto:contato@ascentstudio.com.br"
            className="flex items-center gap-2.5 transition-colors hover:text-ink-100"
          >
            <Mail className="h-4 w-4 text-ink-500" />
            contato@ascentstudio.com.br
          </a>
          <span className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-ink-500" />
            Alta Floresta, MT — Brasil
          </span>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6">
        <p className="border-t border-line pt-6 text-xs text-ink-500">
          © {new Date().getFullYear()} Ascent Studio. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
