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
                <span className="m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer hidden">
                  BLOG
                </span>
                <span
                  onClick={() => history.push("/FAQs")}
                  className="m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer"
                >
                  PREGUNTAS FRECUENTES
                </span>
              </div>
            </div>
            <div className="login flex flex-col mt-24 justify-start items-center mr-0 xl:mr-32">
              <p className="text-2xl flex">
                <p>Su token ha expirado,{"  "}</p>
                <p
                  onClick={() => history.push("/reset-pass")}
                  className=" ml-2 hover:border-blue-500 transition delay-75 border-b border-transparent text-blue-500 cursor-pointer"
                >
                  Intente nuevamente!
                </p>
              </p>
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
