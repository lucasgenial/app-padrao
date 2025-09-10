// src/components/icons/BellIcon.tsx
/**
 * Componente de ícone Bell (sino)
 * Usa SVG para renderizar o ícone
 * Permite passar props SVG padrão
 * Pode ser usado em botões de notificação
 * Estilizado via classes ou props inline
 * 
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .54-.21 1.06-.6 1.44L4 17h16M12 19a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
    </svg>
  );
}