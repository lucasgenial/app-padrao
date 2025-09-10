// src/types/menu/MenuItem.ts
/** 
 * Tipos para o menu de navegação
 * Define estrutura de itens e subitens
 * Permite ícones SVG para cada item
 * 
 * Suporta estados visuais (ativo, desabilitado, novo, beta)
 * Usado na sidebar para renderizar menu
 * Flexível para diferentes seções e links
 * 
 */
import type { IconType } from "./IconType";
import type { ItemStatus } from "./ItemStatus";

export interface MenuItem {
  key: string;
  label: string;
  icon?: IconType;           // opcional
  href?: string;             // recomendado para folhas (sem children)
  status?: ItemStatus;
  disabled?: boolean;
  defaultOpen?: boolean;     // abre no primeiro render
  children?: MenuItem[];     // se existir, vira accordion
}
