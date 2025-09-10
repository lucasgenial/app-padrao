import { useEffect, useState } from "react";

const SIDEBAR_KEY = "mqa.sidebar.collapsed";

function getInitialCollapsed(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(SIDEBAR_KEY) === "1";
}

export function useSidebarCollapsed() {
  const [collapsed, setCollapsed] = useState<boolean>(getInitialCollapsed);

  useEffect(() => {
    localStorage.setItem(SIDEBAR_KEY, collapsed ? "1" : "0");
  }, [collapsed]);

  const toggleCollapsed = () => setCollapsed((v) => !v);

  return { collapsed, setCollapsed, toggleCollapsed };
}
