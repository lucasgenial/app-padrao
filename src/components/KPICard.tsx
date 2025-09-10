/**
 * Props para o componente KPICard
 * Permite exibir um cartão com um rótulo, valor, ícone e tendência
 * 
 * label: rótulo do KPI (ex: "Usuários Ativos")
 * value: valor principal (ex: "1.234")
 * icon: ícone opcional (ReactNode, ex: SVG)
 * delta: valor de tendência opcional com direção (up, down, flat) e valor (ex: "+5%")
 * dense: se true, usa padding menor e fonte menor
 * className: classes CSS adicionais para customização
 * 
 */

import type { KPICardProps } from "../types/KPICardProps";

export default function KPICard({
  label,
  value,
  icon,
  delta,
  dense,
  className = "",
}: KPICardProps) {
  const pad = dense ? "p-3" : "p-4";

  const deltaColor =
    delta?.direction === "up"
      ? "text-emerald-600"
      : delta?.direction === "down"
      ? "text-rose-600"
      : "text-gray-500";

  const DeltaIcon =
    delta?.direction === "up"
      ? UpIcon
      : delta?.direction === "down"
      ? DownIcon
      : FlatIcon;

  return (
    <div
      className={`rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 ${pad} ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-xs uppercase text-gray-500">{label}</p>

          <div className="mt-2 flex items-baseline gap-2">
            <p className={`text-3xl font-semibold ${dense ? "text-2xl" : ""}`}>
              {value}
            </p>

            {delta && (
              <span className={`inline-flex items-center gap-1 text-xs ${deltaColor}`}>
                <DeltaIcon className="h-3.5 w-3.5" />
                {delta.value}
              </span>
            )}
          </div>
        </div>

        {icon && (
          <div className="shrink-0 h-10 w-10 rounded-xl grid place-items-center bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

/* Ícones mínimos em SVG (sem dependências) */
function UpIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l7-7 7 7"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14"/>
    </svg>
  );
}

function DownIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12l-7 7-7-7"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14"/>
    </svg>
  );
}

function FlatIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16"/>
    </svg>
  );
}
