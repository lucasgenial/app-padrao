// /src/components/icons/HomeIcon.tsx
/**
 *
 * Ícone Home
 * Representa uma casa, simbolizando a página inicial
 * Usado em itens de menu relacionados à página inicial
 * Renderizado como SVG
 * Permite passar props SVG padrão
 *
 * @param props Props SVG
 * @returns JSX.Element
 *
 */
import type { SVGProps } from "react";

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  return (
    <svg
      className={className ?? "h-5 w-5"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2 7-7 7 7M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10"
      />
    </svg>
  );
}
