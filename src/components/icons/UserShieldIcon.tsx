// /src/components/icons/UserShieldIcon.tsx
/**
 *
 * Ícone de Usuário com Escudo
 * Representa segurança e proteção de dados do usuário
 * Usado em seções relacionadas a segurança ou permissões
 * Renderizado como SVG
 *
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function UserShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <circle cx="8" cy="7" r="3.5" />
      <path d="M2 21v-1.2A4.8 4.8 0 0 1 6.8 15h2.4" />
      <path d="M14 9l4 1.2V14a6 6 0 0 1-4 3.8A6 6 0 0 1 10 14V10.2L14 9Z" />
    </svg>
  );
}
