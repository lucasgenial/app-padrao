// /src/components/icons/AlertsIcon.tsx
/**
 * 
 * Ícone de Alertas
 * Representa um sino, simbolizando notificações ou alertas
 * Usado em itens de menu relacionados a alertas
 * Renderizado como SVG
 * Permite passar props SVG padrão
 *
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function AlertsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17h.01" />
    </svg>
  );
}
