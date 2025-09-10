// /src/components/icons/UserPlusIcon.tsx
/**
 * 
 * Ícone de Adicionar Usuário
 * Representa a ação de adicionar um novo usuário
 * Usado em formulários ou seções relacionadas a usuários
 * Renderizado como SVG
 *
 * @param props Props SVG
 * @returns JSX.Element
 * 
 */
import type { SVGProps } from "react";

export function UserPlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <circle cx="9" cy="7" r="4" />
      <path d="M2 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" />
      <path strokeLinecap="round" d="M20 8v6M23 11h-6" />
    </svg>
  );
}
