import { useUI as useUIFromContext } from "@/context/UIContext";

/**
 * Custom hook to access UI state and context properties.
 */
export function useUI() {
  return useUIFromContext();
}
