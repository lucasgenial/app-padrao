// nome do arquivo: src/types/TopbarPrincipalProps.ts
/**
 * Props para o componente TopbarPrincipal.
 * Define as propriedades necessárias para controlar a barra superior da aplicação.
 * - onToggleSidebar: Função para alternar a visibilidade da sidebar (menu lateral).
 * - collapsed: Indica se a sidebar está colapsada (true) ou expandida (false).
 * - theme: Tema atual da aplicação, pode ser 'light' ou 'dark'.
 * - onToggleTheme: Função para alternar entre os temas claro e escuro.
 * 
 * Uso:
 * <TopbarPrincipal
 *  onToggleSidebar={handleToggleSidebar}
 * collapsed={collapsed}
 * theme={theme}
 * onToggleTheme={toggleTheme}
 * />
 * Assegura que o componente TopbarPrincipal tenha todas as informações necessárias para
 *  renderizar corretamente e responder às interações do usuário.
 */
export interface TopbarPrincipalProps {
  onToggleSidebar: (mode?: "desktop") => void;
  collapsed: boolean;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}