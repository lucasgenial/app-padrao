// src/types/ItensMenuProps.ts
/**
 * Props para o componente ItensMenu
 * Recebe dados do menu, link ativo e função de navegação
 * Usado para renderizar itens de menu na sidebar
 * 
 * */

import type { MenuItem } from "./MenuItem";

export type ItensMenu = MenuItem[];

export interface ItensMenuProps {
  data: ItensMenu;
  activeHref?: string;
  onNavigate?: (item: MenuItem) => void;
}