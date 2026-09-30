"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL, trackLead } from "@/lib/track";
import { Wordmark } from "./Logo";

const LINKS = [
  { href: "#cases", label: "Cases" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div
          className={`flex w-full items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.3)]" : ""
          }`}
        >
          <a href="#top" className="shrink-0">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-300 transition-colors hover:text-ink-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead("nav")}
            className="shrink-0 rounded-full bg-ink-100 px-5 py-2 text-sm font-semibold text-void transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
