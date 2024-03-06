import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { StyledButtom } from "../styled-components/buttom";
import { ChangeEvent, useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const { buttonInfoColor, buttonInfoBackground } = useTheme();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  const handleSubmit = () => {
    if (user.length <= 0) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }
    localStorage.setItem("usuarioRegistrado", user);
    navigate("/#");
  };
  return (
    <form action="">
      <div className="h-screen flex items-center justify-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-auto w-auto"
              src="https://www.coamb.cat/wp-content/uploads/2021/05/logo_IL3_vert_color_transparent_ca-1.png"
              alt="IL-3 EUREKA LOGO"
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {error && (
              <span className="block w-full	mb-3 bg-red-100 text-red-800 font-medium me-2 px-2.5 py-2  rounded dark:bg-red-900 dark:text-red-300">
                Rellene Los Campos
              </span>
            )}
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre de usuario
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    onChange={(e) => handleChange(e)}
                    value={user}
                    min={4}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contraseña
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-1">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember" className="text-sm font-bold">
                    Recuerdame
                  </label>
                </div>
                <Link to="/forgot-password" className="text-blue-500">
                  Olvidaste tu contraseña?
                </Link>
              </div>
              <div>
                <StyledButtom
                  color={`${buttonInfoColor}`}
                  bg={`${buttonInfoBackground}`}
                  type="submit"
                  onClick={() => handleSubmit()}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Entrar
                </StyledButtom>
              </div>
            </form>
          </div>
        </div>
      </div>
    </form>
  );
}
