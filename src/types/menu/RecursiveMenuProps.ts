// src/types/menu/RecursiveMenuProps.ts
/**
 * 
 * Props para o componente RecursiveMenu
 * Recebe itens, link ativo e função de navegação
 * Usado para renderizar menu recursivo na sidebar
 *  
 */
import type { MenuItem } from "./MenuItem";

export interface RecursiveMenuProps {
  items: MenuItem[];
  depth?: number;
  activeHref?: string;
  onNavigate?: (node: MenuItem) => void;
}