// /src/components/icons/CogIcon.tsx
/**
 *
 * Ícone Cog
 * Representa configurações ou ajustes
 * Usado em menus ou seções relacionadas a configurações
 * Renderizado como SVG
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function CogIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M10.4 2h3.2l.6 2.6a7.9 7.9 0 0 1 2.2 1.3l2.5-.9 1.6 2.8-2 1.7a7.8 7.8 0 0 1 .1 2.6l2 1.7-1.6 2.8-2.5-.9a7.9 7.9 0 0 1-2.2 1.3L13.6 22h-3.2l-.6-2.6a7.9 7.9 0 0 1-2.2-1.3l-2.5.9L3.5 16l2-1.7a7.8 7.8 0 0 1-.1-2.6L3.5 10 5.1 7.2l2.5.9a7.9 7.9 0 0 1 2.2-1.3L10.4 2Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
