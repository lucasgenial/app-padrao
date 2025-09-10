// /src/components/icons/BoxesIcon.tsx
/**
 * 
 * Ícone de Caixas
 * Representa um conjunto de caixas empilhadas
 * Usado em itens de menu relacionados a caixas
 * Renderizado como SVG
 * Permite passar props SVG padrão
 *
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function BoxesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v8l-8 4-8-4V6l8-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v8l8 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10L4 6" />
    </svg>
  );
}


