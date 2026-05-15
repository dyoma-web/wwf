/**
 * Estado del Proposal Builder.
 *
 * - Single source of truth: `useProposal()` retorna [proposal, update, reset].
 * - Persistencia: hidrata desde localStorage en mount, persiste en cada update
 *   con un pequeño debounce (300ms) para evitar trashing.
 * - SSR-safe: en server render, retorna el `emptyProposal()` y la hidratación
 *   real ocurre client-side. El componente que la consume es "use client".
 *
 * No usamos Context — el wizard vive en una sola página y un hook compartido
 * con localStorage es suficiente. Si en el futuro queremos compartir estado
 * entre rutas, lo subimos a Context.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { type Proposal, emptyProposal } from "./types";

const STORAGE_KEY = "wwf:proposal-builder:v1";
const DEBOUNCE_MS = 300;

function loadFromStorage(): Proposal | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Proposal;
    // Si en el futuro versionamos el schema, aquí migramos.
    if (parsed.version !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveToStorage(p: Proposal) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // localStorage lleno o bloqueado — fallar en silencio, el usuario
    // sigue viendo el wizard, solo no persiste entre sesiones.
  }
}

export type ProposalUpdater = (patch: Partial<Proposal>) => void;

export function useProposal(): {
  proposal: Proposal;
  update: ProposalUpdater;
  reset: () => void;
  hydrated: boolean;
} {
  const [proposal, setProposal] = useState<Proposal>(() => emptyProposal());
  const [hydrated, setHydrated] = useState(false);
  const saveTimerRef = useRef<number | null>(null);

  // Hidratación: solo client-side, después del primer mount.
  useEffect(() => {
    const stored = loadFromStorage();
    if (stored) setProposal(stored);
    setHydrated(true);
  }, []);

  // Persistencia debounceada.
  useEffect(() => {
    if (!hydrated) return;
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => {
      saveToStorage(proposal);
    }, DEBOUNCE_MS);
    return () => {
      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    };
  }, [proposal, hydrated]);

  const update: ProposalUpdater = useCallback((patch) => {
    setProposal((p) => ({ ...p, ...patch, updatedAt: new Date().toISOString() }));
  }, []);

  const reset = useCallback(() => {
    setProposal(emptyProposal());
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return { proposal, update, reset, hydrated };
}

/** Helper: % avance del wizard (basado en campos clave llenos). */
export function computeProgress(p: Proposal): number {
  const checks = [
    p.projectName.trim().length > 0,
    p.leadOrganization.trim().length > 0,
    p.impactStatement.trim().length > 20,
    p.biome !== "" && p.country.trim().length > 0,
    p.activities.length > 0,
    p.stakeholders.length > 0 || p.primaryBeneficiaries.trim().length > 0,
    p.projectType !== "" && p.budgetLines.some((l) => l.amounts.some((a) => a > 0)),
    p.risks.length > 0 || Object.values(p.safeguards).some(Boolean),
  ];
  const done = checks.filter(Boolean).length;
  return Math.round((done / checks.length) * 100);
}
