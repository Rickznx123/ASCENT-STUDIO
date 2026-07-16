# Ascent Studio — Landing Page

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide Icons.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

Testado localmente: `tsc --noEmit`, `eslint` e `next build` passam limpos. As fontes
(Plus Jakarta Sans + JetBrains Mono) são self-hosted via `@fontsource`, então o build
funciona 100% offline — sem depender do Google Fonts.

## Estrutura

```
src/
  app/
    layout.tsx      -> fontes + metadata
    globals.css     -> design tokens (cores, tipografia, glass/glow utilities)
    page.tsx        -> monta as secoes na ordem do briefing
  components/
    Nav.tsx          -> header fixo com blur ao rolar
    Hero.tsx         -> headline + CTAs + DeckPanel
    DeckPanel.tsx    -> elemento de assinatura: mockup de dashboard animado
    LogoStrip.tsx    -> area "Empresas"
    HowItWorks.tsx   -> 4 etapas (01-04)
    Services.tsx     -> 4 cards de servico
    WhyUs.tsx        -> diferenciais ("Por que a Ascent")
    Portfolio.tsx    -> grid de projetos com hover
    Testimonials.tsx -> depoimentos
    FinalCta.tsx     -> chamada final
    Footer.tsx       -> contato e redes
    Logo.tsx         -> marca (icone "seta-A" + wordmark)
```

## O que ainda precisa ser trocado por conteudo real

Marquei no codigo (comentarios `// Placeholder`) tudo que e provisorio:

- **`LogoStrip.tsx`** - hoje mostra os nomes dos clientes em texto. Troque por SVGs
  reais dos logos quando tiver.
- **`Portfolio.tsx`** - os 4 cards usam thumbnails em gradiente (roxo/rosa) no lugar
  de video real. Troque `grad` por uma imagem/poster real ou embed de video, e o
  `href="#"` pelo link do projeto.
- **`Testimonials.tsx`** - depoimentos de exemplo. Troque pelos textos reais dos
  clientes (Janaina, Trairao, Helena Doris, etc.).
- **`Footer.tsx` / `FinalCta.tsx`** - o link do WhatsApp esta como `https://wa.me/55`;
  troque pelo seu numero completo (`https://wa.me/55XXXXXXXXXXX`), e o e-mail de
  contato se for diferente de `contato@ascentstudio.com.br`.
- **`Nav.tsx`** - o botao "Solicitar orcamento" aponta para `#orcamento` (a secao de
  CTA final). Se preferir abrir direto o WhatsApp, troque o `href`.

## Deploy

Pronto para subir na Vercel (`vercel --prod`) ou conectar o repo do GitHub direto
no dashboard da Vercel - mesmo fluxo que voce ja usa no Ascent CRM.
