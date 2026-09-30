"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, trackLead } from "@/lib/track";

export function FooterWhatsAppLink() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead("footer")}
      className="flex items-center gap-2.5 transition-colors hover:text-ink-100"
    >
      <MessageCircle className="h-4 w-4 text-ink-500" />
      (66) 99976-5693
    </a>
  );
}