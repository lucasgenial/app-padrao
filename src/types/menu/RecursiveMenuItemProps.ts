// src/types/menu/RecursiveMenuItemProps.ts
/**
 * Props para o componente RecursiveMenuItem
 * Define as propriedades necessárias para renderizar um item de menu recursivamente
 * Permite personalizar a profundidade, o link ativo e a função de navegação
 * Usado para construir menus hierárquicos na sidebar
 *  
 */
import type { MenuItem } from "./MenuItem";

export interface RecursiveMenuItemProps {
  node: MenuItem;
  depth?: number;
  activeHref?: string;
  onNavigate?: (node: MenuItem) => void;
}
