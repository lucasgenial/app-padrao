// /src/components/icons/SchoolIconPlus.tsx
/**
 * Ícone de Escola com badge de "+"
 * Representa uma escola com um símbolo de adição, indicando "nova escola"
 * Usado em menus ou botões para adicionar uma nova escola
 * Renderizado como SVG
 *  
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

/** Ícone de Escola com badge de "+" (para "Nova escola") */
export function SchoolIconPlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      {/* base do prédio */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M1 21h18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V9l8-5 8 5v12" />
      {/* porta central */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h4v9" />
      {/* janelas simples */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 11.5h1.5M15 11.5h1.5" />

      {/* badge de + (canto superior direito) */}
      {/* BADGE MAIOR (círculo + sinal de +) */}
      {/* r aumentado para ~4.2 (diâmetro ~8.4), posicionado para não cortar */}
      {/*<circle cx="19" cy="6" r="8" />*/}
      <path strokeLinecap="round" d="M20 3.8v4.4M16.8 5h4.4" />
      {/*<path strokeLinecap="round" d="M20 8v6M23 11h-6" />*/}
    </svg>
  );
}
