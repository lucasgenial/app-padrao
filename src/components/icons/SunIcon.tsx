// /src/components/icons/SunIcon.tsx
/**
 *
 * Ícone Sun (sol)
 * Representa o sol, simbolizando o modo diurno
 * Usado em itens de menu relacionados ao tema
 *
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m14.95 6.364-.943-.943M6.993 6.993l-.943-.943m10.9 0-.943.943M6.05 17.364l-.943.943M12 6.75a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5z" />
    </svg>
  );
}