// src/components/StatusBadge.tsx
/**
 * Componente StatusBadge
 * Usado para mostrar o status de um item (ex: ativo, desabilitado, novo)
 * Recebe status e classe extra via props
 * Usa classes Tailwind para estilos
 * Renderiza badge colorida com texto do status
 * Não renderiza nada se status for "default" ou ausente
 * 
 * */
import type { StatusBadgeProps } from "../types/menu/StatusBadgeProps";
import type { ItemStatus } from "../types/menu/ItemStatus";



export default function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  if (!status || status === "default") return null;
  const map: Record<ItemStatus, string> = {
    default: "",
    active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    disabled: "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    new: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    beta: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300",
  };
  return (
    <span className={`ml-2 inline-flex items-center rounded px-1.5 py-0.5 text-[10px] ${map[status]} ${className}`}>
      {status}
    </span>
  );
}
