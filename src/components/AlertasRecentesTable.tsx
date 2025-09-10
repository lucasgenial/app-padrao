/**
 * Componente AlertasRecentesTable
 * Exibe uma tabela com os alertas mais recentes
 * Usa dados passados via props
 * Cada alerta tem horário, descrição, tipo, severidade e status
 * Layout responsivo com scroll horizontal se necessário
 * 
 */
import type { Alerta } from "../types/Alerta";

type Props = { data: Alerta[] };

export default function AlertasRecentesTable({ data}: Props) {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 dark:text-gray-400">
            <th className="py-2">Horário</th>
            <th className="py-2">Escola / Sala</th>
            <th className="py-2">Tipo</th>
            <th className="py-2">Severidade</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {data.map((r, i) => (
            <tr key={`${r.horario}-${i}`}>
              <td className="py-2">{r.horario}</td>
              <td className="py-2">{r.descricao}</td>
              <td className="py-2">{r.tipo}</td>
              <td className="py-2">{r.severidade}</td>
              <td className="py-2">{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}