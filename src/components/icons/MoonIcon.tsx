// /src/components/icons/MoonIcon.tsx
/**
 *
 * Ícone Moon (lua)
 * Representa a lua, simbolizando o modo noturno
 * Usado em itens de menu relacionados ao tema
 * Renderizado como SVG
 * Permite passar props SVG padrão
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 12 21.75 9.75 9.75 0 0 1 8.25 3.07 9 9 0 1 0 21.75 12c0 1.06-.186 2.078-.528 3.002z" />
    </svg>
  );
}