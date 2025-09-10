/**
 * Componente BoxSaude
 * Exibe um resumo do status de saúde das salas
 * Mostra dados como quantidade de boxes online, offline e latência média
 * Usa dados mockados, mas permite receber dados via props
 * Cada dado é exibido em um card com label e valor
 * Layout responsivo com grid de 3 colunas
 */
import type { BoxSaudeData } from "../types/BoxSaudeData";

const mockData: BoxSaudeData[] = [
  { label: "Online", value: 53 },
  { label: "Offline", value: 5 },
  { label: "Latência média", value: "1.2s" },
];

type Props = {
  data?: BoxSaudeData[]; // permite passar dados via props, mas mantém mock se não vier nada
};

export default function BoxSaude({ data = mockData }: Props) {
  return (
    <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
      {data.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-gray-200 dark:border-gray-800 p-3"
        >
          <p className="text-xs text-gray-500">{item.label}</p>
          <p className="text-2xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}