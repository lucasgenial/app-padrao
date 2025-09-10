/**
 * Componente TopSalasTable
 * Exibe uma tabela com as salas que mais ficaram em alerta
 * Usa dados mockados, mas permite receber dados via props
 * Cada sala tem nome, escola associada e tempo em alerta
 * Layout responsivo com scroll horizontal se necessário
 * 
 * As propriedades são:
 * - data: array de objetos Sala (opcional, usa mock se não fornecido)
 * 
 * Cada objeto Sala tem:
 * - sala: número ou nome da sala
 * - escola: nome da escola
 * - tempo: tempo em alerta (ex: "37 min")
 * Todos os campos são strings
 * 
 */
import type { Sala } from "../types/Sala";

const mockData: Sala[] = [
  { sala: "204", escola: "CED Eraldo Tinoco", tempo: "37 min" },
  { sala: "Lab 01", escola: "Escola Modelo", tempo: "22 min" },
  { sala: "106", escola: "EM Centro", tempo: "18 min" },
];

interface Props {
  data?: Sala[]; // permite passar dados por props
}

export default function TopSalasTable({ data = mockData }: Props) {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 dark:text-gray-400">
            <th className="py-2">Sala</th>
            <th className="py-2">Escola</th>
            <th className="py-2">Tempo em alerta</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {data.map((r) => (
            <tr key={`${r.sala}-${r.escola}`}>
              <td className="py-2 font-medium">{r.sala}</td>
              <td className="py-2">{r.escola}</td>
              <td className="py-2">{r.tempo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}