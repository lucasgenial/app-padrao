// src/components/RecursiveMenu.tsx
/**
 * 
 * Componente RecursiveMenu
 * Renderiza menu recursivo a partir de lista de itens
 * Recebe itens, link ativo e função de navegação via props
 * Usa RecursiveMenuItem para renderizar cada item
 * Renderiza lista não ordenada com espaçamento entre itens
 * Usado na sidebar para navegação
 * Utiliza Tailwind CSS para estilos
 *  
 */
import type { RecursiveMenuProps } from "../types/menu/RecursiveMenuProps";
import type { MenuItem } from "../types/menu/MenuItem";
import RecursiveMenuItem from "./RecursiveMenuItem";

export default function RecursiveMenu({ items, activeHref, onNavigate }: RecursiveMenuProps) {
  return (
    <ul className="space-y-1">
      {items.map((n: MenuItem) => (
        <RecursiveMenuItem
          key={n.key}
          node={n}
          activeHref={activeHref}
          onNavigate={onNavigate}
        />
      ))}
    </ul>
  );
}
