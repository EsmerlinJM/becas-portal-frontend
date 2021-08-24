import BECA from "../../../img/AF Logo Beca tu Futuro RGB-07@2x.png";
import GROUP from "../../../img/Group 3834@2x.png";
import useAction from "./use-action";

import { useHistory } from "react-router";
import { isValidEmail } from "../../shared/utils/validate-email";

export default function Register() {
  const history = useHistory();
  const [{ errors }, actions] = useAction();
  const password = actions.watch("password");

  return (
    <div className="fadeIn">
      <div className="grid grid-cols-1 xs:grid-cols-1">
        <div className=" grid grid-co\ls-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-5 xl:grid-cols-5 h-screen">
          <div className="left col-span-3">
            <div className="header1 bg-white flex items-center">
              <img className="w-40 ml-10" src={BECA} alt="" />
              <div className="mt-11 m-7 text-xs text-gray-400 font-bold">
                <span className="m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer">
                  BLOG
                </span>
                <span
                  onClick={() => history.push("/cuetion-frequency")}
                  className="m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer"
                >
                  PREGUNTAS FRECUENTES
                </span>
              </div>
            </div>
            <div className="login flex flex-col items-center justify-center h-full p-3">
              <div className="">
                <h4 className="font-bold text-xl mb-2">Registrar cuenta</h4>
                <p className="w-80 font-light text-sm mb-6">
                  Crea tu perfil para que puedas acceder a llenar una aplicación
                  a la beca de tu elección.
                </p>
              </div>
              <div className="flex flex-col  mb-6">
                <input
                  className={`
                  w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3 
                  ${errors.name ? "border-red-600" : "border-gray-300"}
                  `}
                  name="nombre"
                  type="text"
                  {...actions.register("name", { required: true })}
                  placeholder="Nombre"
                />
                <div className="mb-3">
                  {errors.name?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                </div>
                <input
                  className={`
                  w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3 
                  ${errors.last_name ? "border-red-600" : "border-gray-300"}
                  `}
                  name="apellido"
                  type="text"
                  placeholder="Apellido"
                  {...actions.register("last_name", { required: true })}
                />
                <div className="mb-3">
                  {errors.last_name?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                </div>
                <input
                  className={`
                  w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3
                  ${errors.email ? "border-red-600" : "border-gray-300"}
                  `}
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  {...actions.register("email", {
                    required: true,
                    validate: (email) => isValidEmail(email),
                  })}
                />
                <div className="mb-3">
                  {errors.email?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                  {errors.email?.type === "validate" && (
                    <span className="text-red-500 text-xs mt-1 ">
                      email incorrecto
                    </span>
                  )}
                </div>
                <input
                  className={`
                  w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3
                  ${errors.password ? "border-red-600" : "border-gray-300"}
                  `}
                  type="password"
                  placeholder="Contraseña"
                  {...actions.register("password", {
                    required: true,
                    minLength: 8,
                  })}
                />
                <div className="mb-3">
                  {errors.password?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500 text-xs mt-1 ">
                      8 caracteres como minimo
                    </span>
                  )}
                </div>
                <input
                  className={`
                  w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3
                  ${
                    errors.password_confirmation
                      ? "border-red-600"
                      : "border-gray-300"
                  }
                  `}
                  name="pass"
                  type="password"
                  placeholder="Repetir contraseña"
                  {...actions.register("password_confirmation", {
                    required: true,
                    validate: (confirmPass) =>
                      confirmPass ? confirmPass === password : true,
                  })}
                />
                <div className="mb-3">
                  {errors.password_confirmation?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                  {errors.password_confirmation?.type === "validate" && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Las contraseñas no coinciden
                    </span>
                  )}
                </div>
                <button
                  onClick={actions.action}
                  className="w-80 transition delay-75 azulbg text-white hover:bg-white border border-blue-900 hover:border-blue-800 hover:text-blue-800 rounded px-16 py-3 mb-2 cursor-pointer"
                >
                  CREAR CUENTA
                </button>
                <div className="flex text-sm">
                  <p className="px-1">¿Ya tienes una cuenta?</p>
                  <span className="hover:border-blue-500 transition delay-75 border-b border-transparent text-blue-500 cursor-pointer">
                    INICIA SESIÓN
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right col-span-2 azulbg flex items-end hidden xs:hidden sm:hidden  md:flex lg:flex xl:flex">
            <div className>
              <img className="-ml-28 pr-7" src={GROUP} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
