/**
 * Define a estrutura dos dados exibidos na BoxSaude
 * Cada dado tem um rótulo (label) e um valor (value)
 * O valor pode ser um número (quantidade) ou string (latência)
 * 
 * Exemplos:
 * { label: "Online", value: 53 }
 * { label: "Latência média", value: "1.2s" }
 * 
 *  As propriedades são:
 * - label: rótulo do dado (ex: "Online", "Offline", "Latência média")
 * - value: valor do dado, pode ser número (quantidade) ou string (latência)
 *  Todos os campos são obrigatórios
 */
export interface BoxSaudeData {
  label: string;
  value: string | number;
};