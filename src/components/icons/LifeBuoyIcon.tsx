// /src/components/icons/LifeBuoyIcon.tsx
/**
 *
 * Ícone de Boia de Salvação
 * Representa segurança e suporte
 * Usado em seções relacionadas a ajuda ou suporte
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function LifeBuoyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M4.93 4.93l3.54 3.54M15.53 15.53l3.54 3.54M4.93 19.07l3.54-3.54M15.53 8.47l3.54-3.54" />
    </svg>
  );
}
