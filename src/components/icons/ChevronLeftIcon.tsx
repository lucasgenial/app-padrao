// /src/components/icons/ChevronLeftIcon.tsx
/**
 *
 * Ícone Chevron Left (seta para esquerda)
 * Representa uma seta apontando para a esquerda
 * Usado para navegação ou indicar direção  
 *
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}