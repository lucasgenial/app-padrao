// /src/components/icons/ClipboardListIcon.tsx
/**
 *
 * Ícone Clipboard List
 * Representa uma lista de itens em um clipboard
 * Usado em menus ou seções relacionadas a listas ou tarefas
 * Renderizado como SVG
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function ClipboardListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="5" y="5" width="14" height="16" rx="2" />
      <path d="M9 5h6a2 2 0 0 1 2 2v0H7v0a2 2 0 0 1 2-2Z" />
      <path strokeLinecap="round" d="M9 11h6M9 15h6" />
      <path d="M8 11.01h.01M8 15.01h.01" />
    </svg>
  );
}
