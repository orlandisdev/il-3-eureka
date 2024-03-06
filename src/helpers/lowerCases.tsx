import { RoutesInterface } from "../interfaces/routes.interface";

export function lowerCaseUrl(routes: RoutesInterface[]) {
  return routes.map((route) => ({
    ...route,
    path: route.path.toLowerCase(),
  }));
}
