/**
 * Tipo Alerta
 * Define a estrutura de um alerta com propriedades como horário, descrição, tipo, severidade e status
 * 
 * Exemplo:
 * {  horario: "14:32", descricao: "Escola A / Sala 101", tipo: "CO₂", severidade: "Alta", status: "Pendente" } 
 * 
 * Cada propriedade é uma string representando o respectivo dado do alerta
 * Usado para tipar listas de alertas na aplicação
 * Todas as propriedades são obrigatórias 
 * As propriedades são:
 * - horario: horário do alerta
 * - descricao: descrição do alerta, geralmente Escola / Sala
 * - tipo: tipo do alerta, ex: CO₂, Temp, etc.
 * - severidade: severidade do alerta, ex: Baixa, Média, Alta
 * - status: status atual do alerta, ex: Pendente, Resolvido
 */
export interface Alerta {
  horario: string;      // horário
  descricao: string;   // Escola / Sala
  tipo: string;   // CO₂, Temp, etc.
  severidade: string;    // severidade
  status: string; // status do alerta
};