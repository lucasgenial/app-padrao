// /src/components/icons/ListIcon.tsx
/**
 *
 * Ícone List (lista)
 * Representa uma lista, simbolizando organização e estrutura
 * Usado em itens de menu relacionados a listas
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function ListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
