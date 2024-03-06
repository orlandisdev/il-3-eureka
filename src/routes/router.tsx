import { createBrowserRouter } from "react-router-dom";
//TODO: List of rendering components on the router
import { Login } from "../components/auth";
import { Layout } from "../components/layouts";
import data from "../../config.json";
import routerAdapter from "../helpers/routerAdapter";
import { ForgotPassword } from "../components/auth/forgot-password";

const routes = routerAdapter();
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout data={data} />,
    children: [
      {
        index: true,
        path: `/home`,
        element: (
          <div>
            <h1>Home</h1>
          </div>
        ),
      },
      {
        index: true,
        path: `/gestions`,
        element: (
          <div>
            <h1>Gestiones</h1>
          </div>
        ),
      },
      ...routes,
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
