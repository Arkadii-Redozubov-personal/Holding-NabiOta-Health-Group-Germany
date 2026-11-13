import rawOverrides from "@/data/cms-overrides.json";
import type { SupportedLocale } from "@/lib/i18n";

export type CmsNamespace =
  | "home"
  | "homeExtras"
  | "medicalAreas"
  | "aboutPage"
  | "areasPage"
  | "valuesPage"
  | "partnersPage"
  | "careerPage"
  | "contactPage"
  | "contactLocations";

export type NamespaceOverridesMap = Partial<Record<CmsNamespace, Record<string, string>>>;

export interface CmsOverridesDocument {
  version: number;
  updatedAt: string;
  updatedBy: string;
  overrides: Record<SupportedLocale, NamespaceOverridesMap>;
}

const LOCAL_STORAGE_KEY = "nabiota_cms_overrides_live";

export function getEmptyOverridesDocument(): CmsOverridesDocument {
  return {
    version: 1,
    updatedAt: new Date(0).toISOString(),
    updatedBy: "system@nabiota-health-group.de",
    overrides: {
      de: {},
      en: {},
      ru: {},
      tr: {},
      ar: {},
      uz: {},
    },
  };
}

export function normalizeOverridesDocument(input: unknown): CmsOverridesDocument {
  const base = getEmptyOverridesDocument();
  if (!input || typeof input !== "object") return base;
  const obj = input as Record<string, unknown>;

  if (typeof obj.version === "number") base.version = obj.version;
  if (typeof obj.updatedAt === "string") base.updatedAt = obj.updatedAt;
  if (typeof obj.updatedBy === "string") base.updatedBy = obj.updatedBy;

  if (obj.overrides && typeof obj.overrides === "object") {
    const rawLocales = obj.overrides as Record<string, unknown>;
    for (const loc of ["de", "en", "ru", "tr", "ar", "uz"] as SupportedLocale[]) {
      const locObj = rawLocales[loc];
      if (locObj && typeof locObj === "object") {
        const cleanNsMap: NamespaceOverridesMap = {};
        for (const [ns, fields] of Object.entries(locObj as Record<string, unknown>)) {
          if (fields && typeof fields === "object") {
            const cleanFields: Record<string, string> = {};
            for (const [k, v] of Object.entries(fields as Record<string, unknown>)) {
              if (typeof v === "string") {
                cleanFields[k] = v;
              }
            }
            if (Object.keys(cleanFields).length > 0) {
              cleanNsMap[ns as CmsNamespace] = cleanFields;
            }
          }
        }
        base.overrides[loc] = cleanNsMap;
      }
    }
  }

  return base;
}

export function getCommittedCmsOverrides(): CmsOverridesDocument {
  return normalizeOverridesDocument(rawOverrides);
}

export function getActiveCmsOverrides(): CmsOverridesDocument {
  const committed = getCommittedCmsOverrides();
  if (typeof window === "undefined") {
    return committed;
  }

  try {
    const cachedRaw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!cachedRaw) return committed;
    const cached = normalizeOverridesDocument(JSON.parse(cachedRaw));
    if (cached.updatedAt >= committed.updatedAt) {
      return cached;
    }
  } catch {
    // Ignore storage read errors
  }

  return committed;
}

export function setLocalCmsOverridesCache(doc: CmsOverridesDocument): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(doc));
  } catch {
    // Ignore storage write errors
  }
}

export function getByPath(obj: unknown, path: string): unknown {
  if (!obj || typeof obj !== "object") return undefined;
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current === null || current === undefined || typeof current !== "object") {
      return undefined;
    }
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

function setByPathImmutable<T>(root: T, path: string, value: string): T {
  const parts = path.split(".");
  if (parts.length === 0) return root;

  const cloneNode = (node: unknown): Record<string, unknown> | unknown[] => {
    if (Array.isArray(node)) return [...node];
    if (node && typeof node === "object") return { ...(node as Record<string, unknown>) };
    return {};
  };

  const newRoot = cloneNode(root);
  let cursor: Record<string, unknown> | unknown[] = newRoot;

  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    const nextKey = parts[i + 1];
    const existing = (cursor as Record<string, unknown>)[key];
    let clonedChild: Record<string, unknown> | unknown[];

    if (Array.isArray(existing)) {
      clonedChild = [...existing];
    } else if (existing && typeof existing === "object") {
      clonedChild = { ...(existing as Record<string, unknown>) };
    } else {
      clonedChild = /^\d+$/.test(nextKey) ? [] : {};
    }

    (cursor as Record<string, unknown>)[key] = clonedChild;
    cursor = clonedChild;
  }

  const lastKey = parts[parts.length - 1];
  (cursor as Record<string, unknown>)[lastKey] = value;

  return newRoot as T;
}

export function applyNamespaceOverrides<T>(
  baseData: T,
  locale: SupportedLocale,
  namespace: CmsNamespace,
  sourceDoc?: CmsOverridesDocument
): T {
  const doc = sourceDoc ?? getActiveCmsOverrides();
  const fieldMap = doc.overrides?.[locale]?.[namespace];
  if (!fieldMap || Object.keys(fieldMap).length === 0) {
    return baseData;
  }

  let result = baseData;
  for (const [dotPath, overrideVal] of Object.entries(fieldMap)) {
    if (typeof overrideVal === "string") {
      result = setByPathImmutable(result, dotPath, overrideVal);
    }
  }
  return result;
}

