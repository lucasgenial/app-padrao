// /src/components/icons/SearchIcon.tsx
/**
 *
 * Ícone Search (lupa)
 * Representa uma lupa, simbolizando a busca
 * Usado em itens de menu relacionados à pesquisa
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
  );
}