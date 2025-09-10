/**
 * Props para o componente GraficoSeveridade
 * Permite personalizar rótulos, dados, altura, cores e legenda
 * 
 * Rótulos do gráfico (padrão: ["Crítico", "Alto", "Aviso"])
 */
export interface GraficoSeveridadeProps {  
  labels?: string[];    /** Valores (padrão: números simulados) */
  data?: number[];      /** Altura em px (padrão: 160) */
  height?: number;      /** Cores da série (padrão: vermelho, âmbar, azul) */
  colors?: string[];    /** Título da legenda (apenas rotulo, não renderiza título visual) */
  legendLabel?: string;
}