export const staticLocalizedRoutes = [
  "",
  "/about",
  "/areas",
  "/values",
  "/partners",
  "/career",
  "/contact",
  "/imprint",
  "/privacy",
] as const;

const unprefixedDefaultRouteRoots = new Set(
  staticLocalizedRoutes
    .filter((route) => route.length > 0)
    .map((route) => route.replace(/^\//, "").split("/")[0]),
);

export function hasUnprefixedDefaultRoute(route: string): boolean {
  const firstSegment = route.trim().replace(/^\/+|\/+$/g, "").split("/")[0];
  return !firstSegment || unprefixedDefaultRouteRoots.has(firstSegment);
}
