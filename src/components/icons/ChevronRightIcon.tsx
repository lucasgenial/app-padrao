// /src/components/icons/ChevronRightIcon.tsx
/**
 *
 * Ícone Chevron Right (seta para direita)
 * Representa uma seta apontando para a direita
 * Usado para navegação ou indicar direção
 *
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}