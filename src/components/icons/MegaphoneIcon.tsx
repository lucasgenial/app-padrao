// /src/components/icons/MegaphoneIcon.tsx
/**
 *
 * Ícone de Megafone
 * Representa comunicação e divulgação
 * Usado em seções relacionadas a anúncios ou notificações
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function MegaphoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M3 10v4" />
      <path d="M3 12h4l10 4V8L7 12H3Z" />
      <path d="M13 16v3a2 2 0 0 1-2 2H9" />
    </svg>
  );
}
