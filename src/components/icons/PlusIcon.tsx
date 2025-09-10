// /src/components/icons/PlusIcon.tsx
/**
 *
 * Ícone Plus (adição)
 * Representa uma ação de adicionar
 * Usado em botões de adicionar ou criar
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}