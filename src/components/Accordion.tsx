// src/components/Accordion.tsx
/**
 * Componente Accordion
 * Usado na sidebar para agrupar links
 * Recebe um label e uma lista de itens
 * Ao clicar no label, expande ou recolhe os itens
 * Usa estado interno para controlar aberto/fechado
 * Cada item é um link simples (a href="#")               
 *  
 */
import { useState } from "react";
import ChevronIcon from "./icons/ChevronIcon";

interface AccordionProps {
  label: string;
  items: string[];
}

export default function Accordion({ label, items }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {/* ícone de lista */}
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
        {label}
        <ChevronIcon
          className={`ml-auto h-4 w-4 transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      <div className={`mt-1 ml-9 space-y-1 ${open ? "" : "hidden"}`}>
        {items.map((it) => (
          <a
            key={it}
            href="#"
            className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {it}
          </a>
        ))}
      </div>
    </li>
  );
}
