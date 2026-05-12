import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* Iconos utilitarios (chevrons, close, menu, arrows): trazo limpio.
   Siguen el patrón Lucide para que se vean bien al lado de copy. */
const base = (props: IconProps) => ({
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

/* Iconos temáticos (Book, Coin, Leaf, Compass, Tools, Globe, Bars): siluetas
   sólidas inspiradas en el icon style de WWF (panda.org / wwfbrand.panda.org/
   infographics). Formas chunky, fill por currentColor, sin outline. */
const filled = (props: IconProps) => ({
  width: 26,
  height: 26,
  viewBox: "0 0 32 32",
  fill: "currentColor",
  stroke: "none",
  "aria-hidden": true,
  ...props,
});

export const Arrow = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronLeft = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

export const ChevronRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base({ strokeWidth: 2.4, ...p })}>
    <path d="M4 12l5 5L20 6" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...p })}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Chat = (p: IconProps) => (
  <svg {...base({ strokeWidth: 1.6, ...p })}>
    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1l-4 1 1-4a8.5 8.5 0 1 1 15.5-4.5z" />
  </svg>
);

export const Send = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12l16-8-5 16-3-7-8-1z" />
  </svg>
);

/* Libro abierto: dos páginas espejadas con leve concavidad en el lomo. */
export const Book = (p: IconProps) => (
  <svg {...filled(p)}>
    <path d="M16 8c-3-2-7-2.5-12-2v20c5-.5 9 0 12 2v-20z" />
    <path d="M16 8c3-2 7-2.5 12-2v20c-5-.5-9 0-12 2v-20z" />
  </svg>
);

/* Compás: disco sólido con aguja diamante recortada (evenodd). */
export const Compass = (p: IconProps) => (
  <svg {...filled({ fillRule: "evenodd", ...p })}>
    <path d="M16 3a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm0 6l-3 7 3 7 3-7-3-7z" />
  </svg>
);

/* Llave inglesa: silueta única con la cabeza abierta tipo "C" y mango largo. */
export const Tools = (p: IconProps) => (
  <svg {...filled(p)}>
    <path d="M23 3a8 8 0 0 0-7.8 10l-9.8 9.8a3 3 0 0 0 4.2 4.2l9.8-9.8A8 8 0 0 0 30 11l-4.6 4.6-3-.8-.8-3L26.2 7.2A8 8 0 0 0 23 3z" />
  </svg>
);

/* Moneda: disco sólido con un símbolo $ recortado (evenodd). */
export const Coin = (p: IconProps) => (
  <svg {...filled({ fillRule: "evenodd", ...p })}>
    <path d="M16 3a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm.8 5v1.6c2 .3 3.5 1.4 3.5 2.9h-2.3c0-.5-.6-.9-1.2-1v3.4l.8.2c2.2.5 3.6 1.4 3.6 3.1 0 1.7-1.5 2.9-3.6 3.2v1.6h-1.5v-1.6c-2.1-.3-3.6-1.4-3.6-2.9h2.3c0 .5.6.9 1.3 1v-3.4l-.7-.2c-2.2-.5-3.7-1.5-3.7-3.2 0-1.7 1.5-2.9 3.5-3.2V8h1.6z" />
  </svg>
);

/* Hoja: silueta orgánica con base en esquina inferior-izquierda. */
export const Leaf = (p: IconProps) => (
  <svg {...filled(p)}>
    <path d="M28 3c-1 0-2 0-3 0-12 0-21 6-21 18 0 3 2 5 5 5C21 26 28 16 28 4c0-.5 0-1 0-1z" />
  </svg>
);

export const Wave = (p: IconProps) => (
  <svg {...base({ strokeWidth: 1.4, ...p })}>
    <path d="M2 8c2.5-2 5 2 7.5 0S14.5 6 17 8s5 0 5 0" />
    <path d="M2 14c2.5-2 5 2 7.5 0S14.5 12 17 14s5 0 5 0" />
  </svg>
);

/* Globo: disco sólido con meridiano y ecuador recortados (evenodd). */
export const Globe = (p: IconProps) => (
  <svg {...filled({ fillRule: "evenodd", ...p })}>
    <path d="M16 3a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm-12 13c0-.7.1-1.4.2-2h23.6c.1.6.2 1.3.2 2s-.1 1.4-.2 2H4.2c-.1-.6-.2-1.3-.2-2zm12-11c2 2 3.5 5.4 4 9.5h-8c.5-4.1 2-7.5 4-9.5zm-1 22.5c-1.7-1.8-3-4.9-3.5-8.5h7c-.5 3.6-1.8 6.7-3.5 8.5z" />
  </svg>
);

export const Warning = (p: IconProps) => (
  <svg {...base({ strokeWidth: 1.4, ...p })}>
    <path d="M12 3l10 18H2L12 3z" />
    <path d="M12 10v5M12 18v.5" />
  </svg>
);

/* Barras de gráfico: tres rectángulos sólidos sobre línea base. */
export const Bars = (p: IconProps) => (
  <svg {...filled(p)}>
    <path d="M4 16h5v12H4zM12.5 7h5v21h-5zM21 19h5v9h-5zM3 28h26v2H3z" />
  </svg>
);

export const Pdf = (p: IconProps) => (
  <svg {...base({ strokeWidth: 1.3, ...p })}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <text x="7" y="17.5" fontSize="4.6" fontWeight="700" fontFamily="sans-serif" fill="currentColor" stroke="none">
      PDF
    </text>
  </svg>
);

export const Xlsx = (p: IconProps) => (
  <svg {...base({ strokeWidth: 1.3, ...p })}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <text x="7" y="17.5" fontSize="4.6" fontWeight="700" fontFamily="sans-serif" fill="currentColor" stroke="none">
      XLS
    </text>
  </svg>
);

export const Doc = (p: IconProps) => (
  <svg {...base({ strokeWidth: 1.3, ...p })}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M8 12h8M8 15h5" />
  </svg>
);

export const Search = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4-4" />
  </svg>
);

export const Download = (p: IconProps) => (
  <svg {...base({ width: 14, height: 14, ...p })}>
    <path d="M12 4v12M6 10l6 6 6-6M4 20h16" />
  </svg>
);

export const Play = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden {...p}>
    <path d="M6 4l14 8-14 8V4z" />
  </svg>
);

export const Pin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M3 6l9 7 9-7" />
  </svg>
);

export const Facebook = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="14" height="14" {...p}>
    <path d="M13 22V12h3l.5-4H13V5.5c0-1 .3-1.7 1.8-1.7H17V.2C16.6.1 15.3 0 14 0c-3 0-5 1.8-5 5v3H6v4h3v10h4z" />
  </svg>
);

export const Twitter = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="14" height="14" {...p}>
    <path d="M18.2 4h3L14 12.3 22.5 22H16l-5-6.5L5.2 22H2l7.8-9L1.8 4H8.5l4.5 5.9L18.2 4z" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden width="14" height="14" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const YouTube = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="14" height="14" {...p}>
    <path d="M22 7s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16 4 12 4 12 4s-4 0-7 .2c-.5 0-1.3 0-2.1.8C2.2 5.6 2 7 2 7S1.8 8.6 1.8 10.2v1.5C1.8 13.4 2 15 2 15s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.2 7 .2 7 .2s4 0 7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.3-.2-3.3zM10 14V8l5 3-5 3z" />
  </svg>
);

export const LinkedIn = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="14" height="14" {...p}>
    <path d="M4.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3V9zm5 0h3v1.6c.4-.7 1.5-1.8 3.5-1.8 3.3 0 4 2 4 5V21h-3v-6c0-1.5-.5-2.5-2-2.5s-2.5 1-2.5 2.5V21H8V9z" />
  </svg>
);
