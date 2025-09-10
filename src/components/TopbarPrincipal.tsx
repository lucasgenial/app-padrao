// nome do arquivo: src/components/TopbarPrincipal.tsx
/***
 * 
 *  Componente de barra superior principal da aplicação.
 * Define a estrutura e comportamento da barra superior, incluindo:
 * - Botão de menu hambúrguer para dispositivos móveis.
 * - Botão para colapsar/expandir a sidebar em desktops.
 * - Filtros simples para seleção de escola e período.
 * - Campo de busca.
 * - Botão para alternar entre temas claro e escuro.
 * - Ícone de notificações com contador e menu dropdown.
 * - Ícone de usuário com menu dropdown para perfil e configurações.
 * Utiliza props para controlar o estado da sidebar e do tema.
 * Importa ícones SVG como componentes React para uso na interface.
 * Assegura acessibilidade com labels e titles apropriados.
 * Melhora a usabilidade com fechamento de menus via tecla Escape.
 * Uso:
 * <TopbarPrincipal
 * onToggleSidebar={handleToggleSidebar}
 * collapsed={collapsed}
 * theme={theme}
 * onToggleTheme={toggleTheme}
 * />
 *  
 * */
import { useState, useEffect } from "react";
import type { TopbarPrincipalProps } from "../types/TopbarPrincipalProps";
import { 
  HamburgerIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  SearchIcon,
  SunIcon,
  MoonIcon,
  BellIcon, 
} from "./icons";

export default function TopbarPrincipal({ onToggleSidebar, collapsed, theme, onToggleTheme }: TopbarPrincipalProps) {
  /* Estado dos menus de notificação */
  const [notifOpen, setNotifOpen] = useState(false);

  /* Estado do menu do usuário */
  const [userOpen, setUserOpen] = useState(false);

  /**
   * Fecha menus com Escape
   * Adiciona um event listener para fechar menus de notificação e usuário ao pressionar a tecla Escape
   * Limpa o event listener ao desmontar o componente
   * Isso melhora a usabilidade permitindo que o usuário feche menus rapidamente com o teclado
   */
  useEffect(() => {
    /**
     * Fecha menus se Escape for pressionado
     * @param e Evento de teclado
     * @returns {void}
     */
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setNotifOpen(false);
        setUserOpen(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="h-16 border-b border-gray-200 bg-white/70 
      backdrop-blur supports-[backdrop-filter]:bg-white/50 
      dark:bg-gray-900/50 dark:border-gray-800 px-4 flex items-center gap-3">
      {/* Mobile hamburger */}
      <button
        onClick={() => onToggleSidebar()}
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Abrir menu"
      >
        <HamburgerIcon className="h-5 w-5" />
      </button>

      {/* Collapse desktop */}
      <button
        onClick={() => onToggleSidebar("desktop")}
        className="hidden lg:inline-flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        title="Colapsar menu"
      >
        {collapsed ? (
          <ChevronRightIcon className="h-5 w-5" />
        ) : (
          <ChevronLeftIcon className="h-5 w-5" />
        )}
      </button>

      {/* Filtros simples */}
      <div className="hidden md:flex items-center gap-2">
        <select className="min-w-[16rem] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm">
          <option>Todas as escolas</option>
          <option>CED Eraldo Tinoco</option>
          <option>Escola Municipal Centro</option>
          <option>Escola Modelo</option>
        </select>
        <select className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm">
          <option>Hoje</option>
          <option>Semana</option>
          <option>Mês</option>
        </select>
      </div>

      <div className="ml-auto flex items-center gap-2">
        {/* Busca */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Buscar…"
            className="w-64 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm pl-9"
          />
          <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        {/* Tema */}
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Alternar tema"
          aria-label="Alternar tema"
        >
          {theme === "dark" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>

        {/* Notificações */}
        <div className="relative">
          <button
            onClick={() => {
              setNotifOpen((v) => !v);
              setUserOpen(false);
            }}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            title="Notificações"
          >
            <BellIcon className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-rose-500 text-white text-[10px] grid place-items-center">
              3
            </span>
          </button>
          {notifOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg z-50">
              <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <p className="text-sm font-medium">Notificações</p>
                <button className="text-xs text-brand-600 hover:underline">
                  Marcar todas lidas
                </button>
              </div>
              <ul className="max-h-80 overflow-auto divide-y divide-gray-100 dark:divide-gray-800">
                <li className="p-3 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <p className="text-sm">
                    <span className="font-medium">CO₂ crítico</span> na Sala
                    204 (CED Eraldo Tinoco).
                  </p>
                  <p className="text-xs text-gray-500 mt-1">há 2 min</p>
                </li>
                <li className="p-3 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <p className="text-sm">
                    Box-LAB01 com <span className="font-medium">latência alta</span>.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">há 12 min</p>
                </li>
                <li className="p-3 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <p className="text-sm">
                    Relatório semanal <span className="font-medium">gerado</span> para Escola Modelo.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">há 1h</p>
                </li>
              </ul>
              <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-800 text-right">
                <a href="#" className="text-xs text-brand-600 hover:underline">
                  ver todas
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Usuário */}
        <div className="relative">
          <button
            onClick={() => {
              setUserOpen((v) => !v);
              setNotifOpen(false);
            }}
            className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center text-white text-sm font-semibold select-none"
            title="Conta"
          >
            LM
          </button>
          {userOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg z-50">
              <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                <p className="text-sm font-medium">Lucas Melo</p>
                <p className="text-xs text-gray-500">admin@mqa.app</p>
              </div>
              <ul className="py-1 text-sm">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Meu Perfil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Configurações
                  </a>
                </li>
              </ul>
              <div className="border-t border-gray-100 dark:border-gray-800">
                <button className="w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20">
                  Sair
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}