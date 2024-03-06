import { v4 as uuid } from "uuid";
import { RoutesInterface } from "../interfaces/routes.interface";
import { lowerCaseUrl } from "../helpers/lowerCases";
const data = [
  {
    id: uuid(),
    name: "Expedientes",
    active: true,
    path: "expedientes",
    icon: "1.png",
    render: (
      <>
        <div className="">
          <h1 className="m-5 p-3 rounded font-bold text-4xl bg-red-600 text-white">
            Componente a reenderizar
          </h1>
          <h3>Parte Izquierda</h3>
        </div>
        <div className="">
          <h1 className="m-5 p-3 rounded font-bold text-4xl bg-red-600 text-white">
            Componente a reenderizar
          </h1>
          <h2>Parte derecha</h2>
        </div>
      </>
    ),
  },
  {
    id: uuid(),
    name: "Tareas",
    active: true,
    path: "tareas",
    icon: "2.png",
    render: <h1>Componente a reenderizar</h1>,
  },
  {
    id: uuid(),
    name: "Presupuestos",
    active: true,
    path: "Presupuestos",
    icon: "3.png",
    render: <h1>Componente a reenderizar</h1>,
  },
  {
    id: uuid(),
    name: "Pedidos",
    active: true,
    path: "Pedidos",
    icon: "4.png",
    render: <h1>Componente a reenderizar</h1>,
  },
  {
    id: uuid(),
    name: "Facturas",
    active: true,
    path: "Facturas",
    icon: "5.png",
    render: <h1>Componente a reenderizar</h1>,
  },
  {
    id: uuid(),
    name: "Inventario",
    active: true,
    path: "Inventario",
    icon: "6.png",
    render: <h1>Componente a reenderizar</h1>,
  },
  {
    id: uuid(),
    name: "Calendarios",
    active: true,
    path: "Calendarios",
    icon: "7.png",
    render: <h1>Componente a reenderizar</h1>,
  },
  {
    id: uuid(),
    name: "Mantenimiento",
    active: false,
    path: "Mantenimiento",
    icon: "8.png",
    render: <h1>Componente a reenderizar</h1>,
  },
];
export const routerMenu: RoutesInterface[] = lowerCaseUrl(data);
