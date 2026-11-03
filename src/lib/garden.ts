import { useCallback, useEffect, useSyncExternalStore } from "react";
import type { CompanionId, ZoneId } from "@/data/lettuce";

const KEY = "from-seed-to-seed";

export type GardenState = {
  zone: ZoneId;
  checks: string[];
  companions: CompanionId[];
};

const defaultCompanions: CompanionId[] = ["alyssum", "chives", "radish"];

export const defaultGarden: GardenState = {
  zone: "6",
  checks: [],
  companions: defaultCompanions,
};

let state: GardenState = defaultGarden;
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  if (typeof window !== "undefined" && hydrated) {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function snapshot() {
  return hydrated ? state : defaultGarden;
}

export function useGarden() {
  const value = useSyncExternalStore(subscribe, snapshot, () => defaultGarden);

  useEffect(() => {
    if (hydrated) return;
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<GardenState>;
        state = {
          zone: parsed.zone ?? defaultGarden.zone,
          checks: Array.isArray(parsed.checks) ? parsed.checks : [],
          companions: Array.isArray(parsed.companions) ? parsed.companions : defaultCompanions,
        };
      }
    } catch {
      state = defaultGarden;
    }
    hydrated = true;
    emit();
  }, []);

  const setZone = useCallback((zone: ZoneId) => {
    state = { ...state, zone };
    emit();
  }, []);

  const toggleCheck = useCallback((id: string) => {
    const checks = state.checks.includes(id) ? state.checks.filter((item) => item !== id) : [...state.checks, id];
    state = { ...state, checks };
    emit();
  }, []);

  const toggleCompanion = useCallback((id: CompanionId) => {
    const companions = state.companions.includes(id)
      ? state.companions.filter((item) => item !== id)
      : [...state.companions, id];
    state = { ...state, companions };
    emit();
  }, []);

  return { ...value, setZone, toggleCheck, toggleCompanion };
}
