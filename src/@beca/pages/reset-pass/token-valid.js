import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router";

import Log from "../../../img/Group 3834@2x.png";
import Logo from "../../../img/AF Logo Beca tu Futuro RGB-07@2x.png";

export default function TokenInvalid() {
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>Olvidaste tu contraseña | Beca tu futuro</title>
      </Helmet>
      <div className="grid grid-cols-1">
        <div className=" grid grid-cols-1 xl:grid-cols-5 h-screen">
          <div className="left col-span-3">
            <div className="header1 bg-white flex items-center">
              <img
                onClick={() => history.push("/")}
                className="w-40 ml-10"
                src={Logo}
                alt=""
              />
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
            <div className="login flex flex-col mt-24 justify-center w-full items-center mr-0 xl:mr-32">
              <div className="w-1/2">
                <p className="text-xl">
                  ha restablecido correctamente, puede revisar su correo
                  electrónico donde le mandamos una contraseña por defecto
                </p>
                <div className="flex flex-col mt-10">
                  <span
                    onClick={() => history.push("/login")}
                    className="w-80 mb-2  text-center transition delay-75 azulbg text-white hover:bg-white border border-blue-900 hover:border-blue-800 hover:text-blue-800 rounded px-16 py-3 cursor-pointer"
                  >
                    INICIAR SESIÓN
                  </span>
                  <span
                    onClick={() => history.push("/register")}
                    className="w-80 text-center transition delay-75 text-red-700 hover:bg-white border border-red-400 hover:border-blue-800 hover:text-blue-800 rounded px-10 py-3 mb-3 cursor-pointer"
                  >
                    CREAR CUENTA
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right col-span-2 azulbg flex items-end hidden xl:flex">
            <div className>
              <img className="-ml-28 pr-7" src={Log} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
