/***
 * Componente ChartRPM
 * Exibe um gráfico de linhas com leituras por minuto
 * Usa Chart.js via react-chartjs-2
 * Detecta dark mode e ajusta cores do gráfico
 * Permite passar labels e dados via props, com valores padrão/mock
 * Altura customizável via props
 * O gráfico é responsivo e mantém proporção
 * Usa hooks do React para estado e efeitos
 * Permite fácil adição ou remoção de séries
 * 
 */
import { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
  type ChartData,
} from "chart.js";

// Registra os elementos do Chart.js (garantindo que só aconteça uma vez)
let _registered = false;
if (!_registered) {
  ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler);
  _registered = true;
}

export interface ChartRPMProps {
  /** Rótulos do eixo X. Padrão: 60 rótulos de -59 a 0. */
  labels?: string[];
  /** Valores da série. Padrão: números simulados. */
  data?: number[];
  /** Altura em pixels (default: 160) */
  height?: number;
  /** Título da série (apenas rótulo da legenda) */
  label?: string;
}

export default function ChartRPM({
  labels: labelsProp,
  data: dataProp,
  height = 160,
  label = "Leituras/min",
}: ChartRPMProps) {
  // Detecta dark mode e reage a mudanças de classe no <html>
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("light")
  );

  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => {
      setIsDark(el.classList.contains("dark"));
    });
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const labels = useMemo(
    () => labelsProp ?? Array.from({ length: 60 }, (_, i) => `${i - 59}`),
    [labelsProp]
  );

  const serie = useMemo(
    () =>
      dataProp ??
      labels.map(() => Math.round(120 + Math.random() * 60)), // mock
    [labels, dataProp]
  );

  const axisColor = isDark ? "#e5e7eb" : "#374151"; // gray-200 vs gray-700
  const gridColor = isDark ? "#374151" : "#e5e7eb"; // gray-700 vs gray-200

  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label,
        data: serie,
        borderWidth: 2,
        tension: 0.35,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: axisColor } },
      tooltip: { intersect: false, mode: "index" as const },
    },
    scales: {
      x: {
        ticks: { color: axisColor, autoSkip: true, maxTicksLimit: 8 },
        grid: { color: gridColor },
      },
      y: {
        ticks: { color: axisColor },
        grid: { color: gridColor },
      },
    },
  };

  return <Line data={data} options={options} height={height} />;
}
