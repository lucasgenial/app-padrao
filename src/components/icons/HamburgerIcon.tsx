// /src/components/icons/HamburgerIcon.tsx
/**
 *
 * Ícone Hamburger (menu)
 * Representa um menu de navegação
 * Usado para abrir/fechar menus em dispositivos móveis
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function HamburgerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}