import { RouteObject } from "react-router-dom";
import { RoutesInterface } from "../interfaces/routes.interface";
import { routerMenu } from "../routes/routes";

export default function routerAdapter(): RouteObject[] {
  const menu = routerMenu.map((menu: RoutesInterface) => {
    const { path, render } = menu;
    return {
      index: true,
      path: `/${path}`,
      element: render,
    };
  });

  return [...menu];
}
