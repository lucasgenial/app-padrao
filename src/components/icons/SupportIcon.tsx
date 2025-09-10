// /src/components/icons/SupportIcon.tsx
/**
 * Ícone Support (suporte)
 * Representa suporte ao cliente ou ajuda
 * Usado em seções de suporte ou ajuda
 * Renderizado como SVG
 *
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function SupportIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      {/* headset */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 0 1 16 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v5a3 3 0 0 0 3 3h3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v5a3 3 0 0 1-3 3h-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12v5M16 12v5" />
    </svg>
  );
}
