// /src/components/icons/FileSpreadsheetIcon.tsx
/**
 *
 * Ícone FileSpreadsheet
 * Representa uma planilha ou arquivo de dados
 * Usado em menus ou seções relacionadas a relatórios e exportação de dados
 * Renderizado como SVG
 * 
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function FileSpreadsheetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M7 12h10M7 16h10M10 9v10M14 9v10" />
    </svg>
  );
}
