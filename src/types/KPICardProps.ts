/**
 * 
 * Propriedades do componente KPICard
 * Permite exibir um cartão com rótulo, valor, ícone e tendência
 * label: rótulo do KPI (ex: "Usuários Ativos")
 * value: valor principal (ex: "1.234")
 * icon: ícone opcional (ReactNode, ex: SVG)
 * delta: valor de tendência opcional com direção (up, down, flat) e valor (ex: "+5%")
 * dense: se true, usa padding menor e fonte menor
 * className: classes CSS adicionais para customização
 *
 */

import type { ReactNode } from "react";

export interface KPICardProps {
  label: string;        /** Valor principal (texto ou número) */
  value: ReactNode;     /** Ícone opcional à direita (qualquer ReactNode) */
  icon?: ReactNode;     /** Tendência opcional (aparece abaixo/ao lado do valor) */
  dense?: boolean;      /** Densidade do card (padrão: normal) */
  className?: string;   /** Classe extra para customização */
  delta?: {
    value: string;                      // ex.: "+12%", "−3.1k", "estável"
    direction?: "up" | "down" | "flat"; // define cor/ícone se quiser
  }; 
}