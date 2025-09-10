import { useEffect, useMemo, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import type { GraficoSeveridadeProps } from "../types/GraficoSeveridadeProps";

// registra uma única vez
let _registered = false;
if (!_registered) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  _registered = true;
}

export default function GraficoSeveridade({
  labels: labelsProp,
  data: dataProp,
  height = 160,
  colors: colorsProp,
  legendLabel = "Incidentes por Severidade",
}: GraficoSeveridadeProps) {
  // observa o dark mode (classe 'dark' no <html>)
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
    () => labelsProp ?? ["Crítico", "Alto", "Aviso"],
    [labelsProp]
  );

  const valores = useMemo(
    () =>
      dataProp ?? [
        2 + Math.floor(Math.random() * 5),
        8 + Math.floor(Math.random() * 8),
        12 + Math.floor(Math.random() * 10),
      ],
    [dataProp]
  );

  const colors = colorsProp ?? ["#ef4444", "#f59e0b", "#3b82f6"]; // red-500, amber-500, blue-500

  const axisColor = isDark ? "#e5e7eb" : "#374151"; // gray-200 vs gray-700

  const chartData: ChartData<"doughnut"> = {
    labels,
    datasets: [
      {
        label: legendLabel,
        data: valores,
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: axisColor },
      },
      tooltip: { intersect: false },
    },
    cutout: "65%", // espessura da rosca
  };

  return <Doughnut data={chartData} options={options} height={height} />;
}
