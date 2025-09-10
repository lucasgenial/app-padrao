// src/hooks/useTheme.ts
/**
 * Hook para gerenciar o tema (claro/escuro) da aplicação.
 * Utiliza localStorage para persistência e verifica a preferência do sistema na inicialização.
 * Aplica a classe 'dark' no elemento <html> conforme o tema selecionado.
 * 
 * Retorna o tema atual, função para alterar o tema e função para alternar entre temas.
 * Uso:
 * const { theme, setTheme, toggleTheme } = useTheme();
 * Onde theme é 'light' ou 'dark'.
 * 
 * O tema padrão é 'light' se nenhuma preferência for encontrada.
 */
import { useCallback, useEffect, useState } from 'react';

const THEME_KEY = 'mqa.theme'; // mesmo nome da sua versão HTML

type Mode = 'light' | 'dark';

export function useTheme() {
  const [mode, setMode] = useState<Mode>('light');

  // aplica classe no <html>
  const apply = useCallback((m: Mode) => {
    const root = document.documentElement;
    root.classList.toggle('dark', m === 'dark');
    localStorage.setItem(THEME_KEY, m);
    setMode(m);
  }, []);

  const toggleTheme = useCallback(() => {
    apply(mode === 'dark' ? 'light' : 'dark');
  }, [mode, apply]);

  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as Mode) || null;
    if (saved) apply(saved);
    else {
      // respeita preferências do SO no primeiro carregamento
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      apply(prefersDark ? 'dark' : 'light');
    }
  }, [apply]);

  return { mode, toggleTheme, setMode: apply };
}