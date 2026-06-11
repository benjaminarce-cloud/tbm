/**
 * TBM's physical network, geocoded. Sourced from FACILITIES in site.ts —
 * one entry per city, with every role that city plays. Rendered by
 * components/site/network-map.tsx.
 */

export type NetworkRole =
  | "hq"
  | "terminal"
  | "dropyard"
  | "crossing"
  | "office"
  | "maintenance";

export type NetworkLocation = {
  id: string;
  name: string;
  country: "US" | "MX";
  lat: number;
  lon: number;
  roles: readonly NetworkRole[];
};

export const NETWORK_LOCATIONS: readonly NetworkLocation[] = [
  // ── United States ────────────────────────────────────────────────
  { id: "san-antonio", name: "San Antonio, TX", country: "US", lat: 29.42, lon: -98.49, roles: ["hq"] },
  { id: "calexico", name: "Calexico, CA", country: "US", lat: 32.68, lon: -115.5, roles: ["terminal", "crossing"] },
  { id: "nogales-az", name: "Nogales, AZ", country: "US", lat: 31.34, lon: -110.93, roles: ["terminal", "crossing"] },
  { id: "del-rio", name: "Del Rio, TX", country: "US", lat: 29.36, lon: -100.9, roles: ["terminal", "crossing"] },
  { id: "laredo", name: "Laredo, TX", country: "US", lat: 27.51, lon: -99.51, roles: ["terminal", "crossing"] },
  { id: "ferndale", name: "Ferndale, WA", country: "US", lat: 48.85, lon: -122.59, roles: ["dropyard"] },
  { id: "otay-mesa", name: "Otay Mesa, CA", country: "US", lat: 32.57, lon: -116.94, roles: ["dropyard", "crossing"] },
  { id: "el-paso", name: "El Paso, TX", country: "US", lat: 31.76, lon: -106.49, roles: ["dropyard", "crossing"] },
  { id: "hopkinsville", name: "Hopkinsville, KY", country: "US", lat: 36.87, lon: -87.49, roles: ["dropyard"] },
  { id: "charlotte", name: "Charlotte, NC", country: "US", lat: 35.23, lon: -80.84, roles: ["dropyard"] },
  { id: "indianapolis", name: "Indianapolis, IN", country: "US", lat: 39.77, lon: -86.16, roles: ["dropyard"] },
  { id: "batesville", name: "Batesville, IN", country: "US", lat: 39.3, lon: -85.22, roles: ["dropyard"] },
  { id: "troy", name: "Troy, OH", country: "US", lat: 40.04, lon: -84.2, roles: ["dropyard"] },
  { id: "channahon", name: "Channahon, IL", country: "US", lat: 41.43, lon: -88.23, roles: ["dropyard"] },
  { id: "linwood", name: "Linwood, NC", country: "US", lat: 35.75, lon: -80.31, roles: ["dropyard"] },
  { id: "atlanta", name: "Atlanta, GA", country: "US", lat: 33.75, lon: -84.39, roles: ["dropyard"] },
  { id: "dallas", name: "Dallas, TX", country: "US", lat: 32.78, lon: -96.8, roles: ["dropyard"] },
  { id: "detroit", name: "Detroit, MI", country: "US", lat: 42.33, lon: -83.05, roles: ["dropyard", "crossing"] },
  { id: "tecate-ca", name: "Tecate, CA", country: "US", lat: 32.58, lon: -116.63, roles: ["crossing"] },
  { id: "eagle-pass", name: "Eagle Pass, TX", country: "US", lat: 28.71, lon: -100.5, roles: ["crossing"] },
  { id: "blaine", name: "Blaine, WA", country: "US", lat: 48.99, lon: -122.75, roles: ["crossing"] },
  { id: "sweet-grass", name: "Sweet Grass, MT", country: "US", lat: 48.99, lon: -111.96, roles: ["crossing"] },
  { id: "port-huron", name: "Port Huron, MI", country: "US", lat: 42.97, lon: -82.42, roles: ["crossing"] },
  { id: "lewiston", name: "Lewiston, NY", country: "US", lat: 43.17, lon: -79.04, roles: ["crossing"] },
  { id: "champlain", name: "Champlain, NY", country: "US", lat: 44.99, lon: -73.45, roles: ["crossing"] },

  // ── Mexico ───────────────────────────────────────────────────────
  { id: "mexicali", name: "Mexicali, B.C.", country: "MX", lat: 32.66, lon: -115.47, roles: ["office", "crossing", "maintenance"] },
  { id: "saltillo", name: "Saltillo, Coah.", country: "MX", lat: 25.43, lon: -101.0, roles: ["office"] },
  { id: "queretaro", name: "Querétaro, Qro.", country: "MX", lat: 20.59, lon: -100.39, roles: ["office"] },
  { id: "tecate-bc", name: "Tecate, B.C.", country: "MX", lat: 32.55, lon: -116.64, roles: ["crossing"] },
  { id: "nogales-son", name: "Nogales, Son.", country: "MX", lat: 31.31, lon: -110.94, roles: ["crossing"] },
  { id: "acuna", name: "Cd. Acuña, Coah.", country: "MX", lat: 29.32, lon: -100.93, roles: ["crossing", "maintenance"] },
  { id: "piedras-negras", name: "Piedras Negras, Coah.", country: "MX", lat: 28.7, lon: -100.52, roles: ["crossing"] },
  { id: "nuevo-laredo", name: "Nuevo Laredo, Tamps.", country: "MX", lat: 27.48, lon: -99.51, roles: ["crossing", "maintenance"] },
] as const;

/**
 * Signature freight corridors, drawn through real TBM facilities only.
 * Rendered as animated flow lines on the network map (south → north).
 */
/**
 * Twin-city border gateways (US id, MX id) — cross-border lanes in the
 * lane planner route through whichever pair minimizes total distance.
 */
export const GATEWAY_PAIRS: readonly (readonly [string, string])[] = [
  ["calexico", "mexicali"],
  ["tecate-ca", "tecate-bc"],
  ["nogales-az", "nogales-son"],
  ["del-rio", "acuna"],
  ["eagle-pass", "piedras-negras"],
  ["laredo", "nuevo-laredo"],
] as const;

export const NETWORK_CORRIDORS: readonly {
  id: string;
  name: string;
  stops: readonly string[];
}[] = [
  {
    id: "central",
    name: "Central corridor — Bajío to the Midwest",
    stops: [
      "queretaro",
      "saltillo",
      "nuevo-laredo",
      "laredo",
      "san-antonio",
      "indianapolis",
      "detroit",
    ],
  },
  {
    id: "pacific",
    name: "Pacific corridor — Baja to the Pacific Northwest",
    stops: ["mexicali", "calexico", "ferndale", "blaine"],
  },
] as const;
