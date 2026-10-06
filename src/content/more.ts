import { medicineExtras } from "./more-med";
import { pharmacyExtras } from "./more-pharm";
import { physioExtras } from "./more-physio";
import type { Extra } from "./more-types";

export const extras: Record<string, Extra> = {
  ...medicineExtras,
  ...physioExtras,
  ...pharmacyExtras,
};

export type { Extra };
