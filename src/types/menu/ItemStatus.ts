// src/types/menu/ItemStatus.ts
/**
 * Tipos para os estados visuais dos itens de menu
 * Usado para indicar status como ativo, desabilitado, novo, beta
 * Permite customizar aparência dos itens na sidebar
 * Flexível para diferentes necessidades de UI
 * 
 * /
 
/** Estados visuais possíveis (ajuste livre) */
export type ItemStatus = "default" | "active" | "disabled" | "warning" | "new" | "beta";