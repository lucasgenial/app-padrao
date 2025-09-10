// /src/components/icons/ReportsIcon.tsx
/**
 *
 * Ícone de Relatórios
 * Representa um gráfico de barras, simbolizando relatórios e análises
 * Usado em itens de menu relacionados a relatórios
 * Renderizado como SVG
 * Permite passar props SVG padrão
 *
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function ReportsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
      <rect x="6.5" y="11" width="3" height="7" rx="1" />
      <rect x="11" y="6" width="3" height="12" rx="1" />
      <rect x="15.5" y="13" width="3" height="5" rx="1" />
    </svg>
  );
}
