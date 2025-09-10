// src/types/menu/StatusBadgeProps.ts
/**
 * Props para o componente StatusBadge
 * Define as propriedades aceitas pelo componente
 * Inclui status do item e classes extras para customização
 * Usado para mostrar badges de status em itens de menu
 * 
 */
import type { ItemStatus } from "./ItemStatus";

export interface StatusBadgeProps {
  status?: ItemStatus;
  className?: string;
}