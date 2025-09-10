// /src/components/icons/InboxIcon.tsx
/**
 *
 * Ícone Inbox
 * Representa uma caixa de entrada, simbolizando recebimento de mensagens
 * Usado em itens de menu relacionados a mensagens ou notificações
 * Renderizado como SVG
 * Permite passar props SVG padrão
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function InboxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l3-7h12l3 7v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h6l2 2h2l2-2h6" />
    </svg>
  );
}
