// /src/components/icons/FileTextIcon.tsx
/**
 *
 * Ícone File Text
 * Representa um arquivo de texto
 * Usado em menus ou seções relacionadas a documentos
 * Renderizado como SVG
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function FileTextIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path strokeLinecap="round" d="M8 13h8M8 17h8M8 9h3" />
    </svg>
  );
}
