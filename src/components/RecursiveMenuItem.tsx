// src/components/RecursiveMenuItem.tsx
/**
 *
 * Componente RecursiveMenuItem
 * Renderiza itens de menu recursivamente, suportando links e grupos (accordion)
 * Usa props para dados do item, profundidade, link ativo e função de navegação
 * Destaca item ativo e abre grupos com item ativo dentro
 * Usa ícone padrão se nenhum for fornecido
 * Permite desabilitar itens
 * Renderiza badge de status se fornecido
 * Usa Tailwind CSS para estilos
 * Renderiza filhos dentro de um <ul> indentado
 *
 */
import { useMemo, useState } from "react";
import ChevronIcon from "../components/icons/ChevronIcon";
import StatusBadge from "../components/StatusBadge";
import type { MenuItem } from "../types/menu/MenuItem";
import type { RecursiveMenuItemProps } from "../types/menu/RecursiveMenuItemProps";

/**
 * 
 * Verifica se o nó ou algum filho contém o href ativo
 * 
 * @param n nó do menu
 * @param activeHref href ativo
 * @returns true se o nó ou algum filho contém o href ativo * 
 * 
 */
function containsActive(n: MenuItem, activeHref?: string): boolean {
  if (!activeHref) return false;
  if (n.href && n.href === activeHref) return true;
  return (n.children ?? []).some((c: MenuItem) => containsActive(c, activeHref));
}

/**
 * Componente de item de menu recursivo
 * 
 * @param param0 props do componente
 * @returns JSX.Element
 * 
 */
export default function RecursiveMenuItem({ node, depth = 0, activeHref, onNavigate,}: RecursiveMenuItemProps) {
  
  const hasChildren = (node.children?.length ?? 0) > 0;
  const isActive = !!(node.href && activeHref === node.href);

  // estado aberto se tiver filho ativo ou defaultOpen true
  const hasActiveDesc = useMemo(
    () => containsActive(node, activeHref),
    [node, activeHref]
  );

  // controla estado aberto do accordion
  const [open, setOpen] = useState<boolean>(node.defaultOpen ?? hasActiveDesc);

  // estilos base
  const padd = depth === 0 ? "" : ""; // usamos ml-9 no contêiner dos filhos (como no seu HTML)
  const baseBtn     = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800";
  const baseLink    = "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors";
  const activeCls   = "bg-brand-50 text-brand-800 dark:bg-brand-900/40 dark:text-brand-100 font-medium";
  const disabledCls = "opacity-50 pointer-events-none";

  // ícone fallback quando não for passado
  function FallbackIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        className={props.className ?? "h-5 w-5"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h18M3 12h18M3 17h18"
        />
      </svg>
    );
  }

  // folha (link)
  if (!hasChildren) {
    //const Icon = node.icon ?? FallbackIcon;
    const Icon = node.icon; // <- opcional
    return (
      <li>
        <a
          href={node.href ?? "#"}
          aria-current={isActive ? "page" : undefined}
          onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(node); } }}
          className={`${baseLink} ${isActive ? activeCls : "hover:bg-gray-100 dark:hover:bg-gray-800"} ${node.disabled ? disabledCls : ""}`}
        >
          {Icon ? <Icon className="h-5 w-5" /> : null}
          <span className="truncate">{node.label}</span>
          <StatusBadge status={node.status} className="ml-auto" />
        </a>
      </li>
    );
  }

  // grupo (accordion)
  const Icon = node.icon ?? FallbackIcon;
  return (
    <li className={padd}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={baseBtn}
      >
        <Icon className="h-5 w-5" />
        <span className="truncate">{node.label}</span>
        <StatusBadge status={node.status} />
        <ChevronIcon
          className={`ml-auto h-4 w-4 transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      <ul className={`mt-1 ml-9 space-y-1 ${open ? "" : "hidden"}`}>
        {node.children!.map((child: MenuItem) => (
          <RecursiveMenuItem
            key={child.key}
            node={child}
            depth={depth + 1}
            activeHref={activeHref}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </li>
  );
}
