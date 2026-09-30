// Dispara eventos de conversão quando o lead clica no WhatsApp.
// Só funciona depois que o Pixel do Meta (fbq) e/ou a tag do Google (gtag)
// estiverem instalados no site. Sem eles, a função simplesmente não faz nada.

type Win = Window & {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

export const WHATSAPP_URL =
  "https://wa.me/5566999765693?text=" +
  encodeURIComponent(
    "Olá! Vim através do site da ASCENT STUDIO e gostaria de solicitar um orçamento."
  );

export function trackLead(source: string) {
  if (typeof window === "undefined") return;
  const w = window as Win;
  try {
    w.fbq?.("track", "Contact", { source });
    w.gtag?.("event", "whatsapp_click", { source });
  } catch {
    // rastreamento nunca deve quebrar o clique
  }
}
