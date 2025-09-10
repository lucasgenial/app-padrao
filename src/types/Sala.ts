/**
 * Tipo Sala
 * Define a estrutura de dados para representar uma sala em uma escola
 * Cada sala tem um nome/número, escola associada e tempo em alerta
 * Usado para listar salas com alertas na aplicação
 * Exemplo: { sala: "101", escola: "Escola A", tempo: "37 min" }
 *
 * As propriedades são:
 * - sala: número ou nome da sala
 * - escola: nome da escola
 * - tempo: tempo em alerta (ex: "37 min")
 * Todos os campos são strings
 */
export interface Sala {
  sala: string; // número ou nome da sala
  escola: string; // nome da escola
  tempo: string; // tempo em alerta (ex: "37 min")
}
