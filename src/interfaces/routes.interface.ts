import { ReactElement } from "react";

export interface RoutesInterface {
  id: string;
  name: string;
  active: boolean;
  path: string;
  icon: string;
  render: ReactElement;
}
