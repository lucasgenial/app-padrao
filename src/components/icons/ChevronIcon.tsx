// src/components/icons/ChevronIcon.tsx
/**
 * Componente de ícone Chevron (seta)
 * Usa SVG para renderizar o ícone
 * Permite passar classe CSS via props
 * Pode ser usado em botões ou menus
 * Estilizado via classes Tailwind ou props inline
 *  
 */
interface IconProps {
  className?: string;
}

export default function ChevronIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
