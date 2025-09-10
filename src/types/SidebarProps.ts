// src/types/SidebarProps.ts
/**
 * 
 * Props para o componente Sidebar
 * Recebe estado colapsado, link ativo, itens do menu e função de navegação
 * Usado para renderizar sidebar com menu recursivo
 * 
 * Exemplo de uso:
 * <Sidebar
 *   collapsed={isCollapsed}
 *   activeHref={activeLink}
 *   items={menuItems}
 *   onNavigate={handleNavigation}
 * />
 * 
 * Importante:
 * items deve seguir estrutura MenuItem
 * onNavigate é chamada ao clicar em item
 * Utiliza RecursiveMenu para renderizar itens
 *  
*/
import type { MenuItem } from "./menu/MenuItem";

export interface SidebarProps {
  collapsed?: boolean;
  activeHref?: string;
  items?: MenuItem[];                  // você pode injetar seus itens aqui
  onNavigate?: (node: MenuItem) => void;
}