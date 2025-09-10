import { useMemo, useState } from "react";

// Hooks
import { useTheme, useSidebarCollapsed } from "./hooks";

// Componentes principais
import {
    Sidebar, 
    TopbarPrincipal, 
    KPICard, 
    ChartRPM,
    GraficoSeveridade,
    TopSalasTable,
    AlertasRecentesTable,
    BoxSaude
} from "./components";

// Ícones
import { PlusIcon } from "./components/icons";
import type { Alerta } from "./types/Alerta";

export default function App() {
  const { mode, toggleTheme } = useTheme();
  const { collapsed, toggleCollapsed } = useSidebarCollapsed();

  const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);

  function handleToggleSidebar(mode?: "desktop") {
    if (mode === "desktop") toggleCollapsed();
    else setSidebarMobileOpen((v) => !v);
  }

  const kpis = useMemo(
    () => [
      { label: "Escolas ativas", value: "12" },
      { label: "Boxes ativos", value: "58" },
      { label: "Alertas abertos", value: "7" },
      { label: "Leituras hoje", value: "148.2k" },
    ],
    []
  );

  return (
    <div className="min-h-screen h-full bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 flex">
      {/* Sidebar desktop */}
      <Sidebar collapsed={collapsed} />

      {/* Drawer mobile */}
      {sidebarMobileOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setSidebarMobileOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-72 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-r border-gray-200 dark:bg-gray-900/70 dark:border-gray-800">
            <Sidebar collapsed={false} />
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col">
        <TopbarPrincipal
          onToggleSidebar={handleToggleSidebar}
          collapsed={collapsed}
          theme={mode}
          onToggleTheme={toggleTheme}
        />

        <main className="p-5 md:p-6 lg:p-8 space-y-6">
          {/* Título + ações */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Dashboard Geral
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Visão agregada do SaaS por escola, boxes, alertas e uso.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-600 text-white text-sm hover:bg-brand-700">
                <PlusIcon className="h-4 w-4" />
                Nova Escola
              </button>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                <PlusIcon className="h-4 w-4" />
                Convidar Diretor
              </button>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                <PlusIcon className="h-4 w-4" />
                Registrar Box
              </button>
            </div>
          </div>
          
          {/* KPIs */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {kpis.map((k) => (
              <KPICard key={k.label} label={k.label} value={k.value} />
            ))}
          </section>

          {/* Gráficos / Resumos */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <Card title="Leituras por Minuto (última hora)" subtitle="simulado">
              <div style={{ height: 160 }}>
                <ChartRPM />
              </div>
            </Card>

            <Card title="Incidentes por Severidade (mês)" subtitle="simulado">
              <div style={{ height: 160 }}>
                <GraficoSeveridade />
              </div>
            </Card>

            <Card title="TOP Salas por tempo em alerta (hoje)">
              <TopSalasTable />
            </Card>
          </section>

          {/* Alertas + Saúde Boxes */}
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Card title="Alertas Recentes">
              <AlertasRecentesTable data={alertas} />
            </Card>

            <Card title="Saúde dos Boxes">
              <BoxSaude />
            </Card>
          </section>

          <footer className="pt-2 text-xs text-gray-500 dark:text-gray-400">
            <p>MVP • Integração com API entra no próximo passo.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

/* ============== Card utilitário local (mantido no App) ============== */
function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        {subtitle ? <span className="text-xs dark:text-gray-500">{subtitle}</span> : null}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}


/* ============== Mocks ============== */
const alertas: Alerta[] = [
  { horario: "12:41", descricao: "CED Eraldo Tinoco / 204", tipo: "CO₂", severidade: "Crítico", status: "Aberto" },
  { horario: "12:18", descricao: "Escola Modelo / Lab 01", tipo: "Temp",  severidade: "Alto",    status: "Resolvido" },
  { horario: "11:55", descricao: "EM Centro / 106",        tipo: "Umidade", severidade: "Alto",   status: "Resolvido" },
];
