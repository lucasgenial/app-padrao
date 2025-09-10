// /src/components/icons/PulseIcon.tsx
/**
 *
 * Ícone Pulse (pulso)
 * Representa atividade ou monitoramento
 * Usado em dashboards ou seções de monitoramento
 * Renderizado como SVG
 * 
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function PulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2.5 5L13 7l2.5 5H21" />
    </svg>
  );
}
