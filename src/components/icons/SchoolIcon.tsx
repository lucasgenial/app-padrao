// /src/components/icons/SchoolIcon.tsx
/**
 * Ícone de Escola
 * Representa uma escola com telhado, porta e janelas
 * Usado em itens de menu relacionados a escolas
 * Renderizado como SVG
 * Permite passar props SVG padrão
 * 
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function SchoolIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      {/* base */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
      {/* corpo da escola com telhado */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V9l8-5 8 5v12" />
      {/* porta central */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
      {/* janelas simples */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 11.5h1.5M15 11.5h1.5" />
    </svg>
  );
}
