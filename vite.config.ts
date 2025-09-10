/**
 * Arquivo de configuração do Vite
 * Define plugins e aliases para o projeto
 * Usa o plugin oficial do React para suporte a JSX e outras funcionalidades
 * Configura um alias "@" para facilitar importações relativas ao diretório src
 * Isso melhora a organização e legibilidade do código
 * Exemplo: import MeuComponente from "@/components/MeuComponente"
 * em vez de import MeuComponente from "../../components/MeuComponente"
 * O arquivo é escrito em TypeScript e exporta a configuração padrão do Vite
 * Usa módulos ES e sintaxe moderna do JavaScript
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": resolve(__dirname, "src") }
  }
});
