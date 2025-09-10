/**
 * Componente Sidebar
 * Contém logo, navegação e rodapé
 * Recebe prop 'collapsed' para estado recolhido ou não
 * Usa componentes Accordion e NavItem para itens de navegação
 * Layout responsivo, escondido em telas pequenas
 * 
 * As seções são:
 * - Logo e título no topo
 * - Navegação com links e acordeões    
 * - Rodapé com versão e copyright
 * 
 * Cada acordeão pode ser expandido/recolhido
 * Cada item de navegação é um link simples (a href="#")
 * Usa Tailwind CSS para estilos
 * Design limpo e moderno, com suporte a modo escuro
 * Utiliza ícones SVG embutidos para os itens
 * O componente é funcional e usa hooks do React
 * Permite fácil adição ou remoção de itens na navegação
 * Pode ser integrado em dashboards ou painéis administrativos
 * Pode ser facilmente customizado via props ou estilos
 * Mantém boa acessibilidade com aria-expanded e roles
 * Usa classes utilitárias para espaçamentos, cores e tipografia
 * O layout é fixo na lateral esquerda em telas grandes
 * O componente é auto-contido e reutilizável
 * Pode ser testado isoladamente
 * 
 */

import type { MenuItem } from "../types/menu/MenuItem";
import type { SidebarProps } from "../types/SidebarProps";
import { 
    BoxesIcon,
    HomeIcon, 
    SchoolIcon, 
    AlertsIcon,
    SupportIcon,
    UsersIcon,
    ListIcon,
    FileSpreadsheetIcon,
    DownloadIcon,
    LifeBuoyIcon,
    MegaphoneIcon,
    UserPlusIcon,
    ReportsIcon,
    PlusIcon
  } from "./icons";
import { ClipboardListIcon } from "./icons/ClipboardListIcon";
import { CogIcon } from "./icons/CogIcon";
import { FileTextIcon } from "./icons/FileTextIcon";
import { InboxIcon } from "./icons/InboxIcon";
import { PulseIcon } from "./icons/PulseIcon";
import { UserShieldIcon } from "./icons/UserShieldIcon";
import RecursiveMenu from "./RecursiveMenu";

/**
 * Componente Sidebar
 * @param param0 Props do Sidebar
 * @returns 
 * 
 * Cada sidebarProps é:
 * - collapsed: boolean (se a sidebar está recolhida ou não)
 * - activeHref: string (link ativo atual)  
 * - items: MenuItem[] (itens de navegação)
 * - onNavigate: (href: string) => void (callback ao navegar)
 */
export default function Sidebar({
  collapsed = false,
  activeHref = "/dashboard",
  items = DEFAULT_ITEMS,
  onNavigate,
}: SidebarProps) {
  return (
    <aside
      id="sidebar"
      className={`w-72 shrink-0 bg-white/80 backdrop-blur border-r border-gray-200
        dark:bg-gray-900/70 dark:border-gray-800 hidden lg:flex flex-col
        ${collapsed ? "desktop-hidden" : ""}`}
    >
      <div className="h-16 px-5 flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-brand-600 text-white grid place-items-center font-bold">MQA</div>
        <div className="leading-tight">
          <p className="font-semibold">MQA • Admin</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SaaS Gestão da Qualidade do Ar</p>
        </div>
      </div>

      <nav className="px-3 py-2 overflow-y-auto">
        <p className="px-3 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Navegação</p>
        <RecursiveMenu items={items} activeHref={activeHref} onNavigate={onNavigate} />
      </nav>

      <div className="mt-auto p-4 text-xs text-gray-500 dark:text-gray-400">
        <p>v0.1 · MVP</p>
        <p>© MQA</p>
      </div>
    </aside>
  );
}

const DEFAULT_ITEMS: MenuItem[] = [
  { key: "dashboard", label: "Visão Geral", href: "/dashboard", icon: HomeIcon },
  {
    key: "escolas",
    label: "Escolas",
    icon: SchoolIcon,
    defaultOpen: true,
    children: [
      { key: "todas", label: "Todas as escolas", href: "/escolas", icon: ListIcon },
      { key: "nova", label: "Nova escola", href: "/escolas/nova", icon: PlusIcon, status: "new" },
    ],
  },
  {
    key: "boxes",
    label: "Boxes",
    icon: BoxesIcon,
    children: [
      { key: "inv", label: "Inventário", href: "/boxes", icon: ClipboardListIcon },
      { key: "novo", label: "Registrar Box", href: "/boxes/novo", icon: DownloadIcon },
      { key: "saude", label: "Saúde", href: "/boxes/saude", icon: PulseIcon, status: "warning" },
    ],
  },
  {
    key: "alertas",
    label: "Alertas",
    icon: AlertsIcon,
    children: [
      { key: "fila", label: "Fila de alertas", href: "/alertas/fila", icon: InboxIcon },
      { key: "config", label: "Configurações", href: "/alertas/config", icon: CogIcon },
    ],
  },
  {
    key: "relatorios",
    label: "Relatórios",
    icon: ReportsIcon,
    children: [
      { key: "relatorios-lista", label: "Relatórios", href: "/relatorios", icon: FileTextIcon },
      { key: "exportar", label: "Exportar CSV", href: "/relatorios/exportar", icon: FileSpreadsheetIcon },
    ],
  },
  {
    key: "usuarios",
    label: "Usuários",
    icon: UsersIcon,
    children: [
      { key: "diretores", label: "Diretores", href: "/usuarios/diretores", icon: /* UsersIcon ou */ UserShieldIcon },
      { key: "convidar", label: "Convidar", href: "/usuarios/convidar", icon: UserPlusIcon },
    ],
  },
  {
    key: "suporte",
    label: "Suporte",
    icon: SupportIcon,
    children: [
      { key: "chamados", label: "Chamados", href: "/suporte/chamados", icon: LifeBuoyIcon },
      { key: "notas", label: "Notas de versão", href: "/suporte/notas", icon: MegaphoneIcon },
    ],
  },
];
