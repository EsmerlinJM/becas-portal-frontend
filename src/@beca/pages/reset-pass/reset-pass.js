import Log from "../../../img/Group 3834@2x.png";
import Logo from "../../../img/AF Logo Beca tu Futuro RGB-07@2x.png";

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { resetPass } from "../../shared/services/user";
import { isValidEmail } from "../../shared/utils/validate-email";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router";

export default function ResetPass() {
  const history = useHistory();

  const [email, setEmail] = useState("");

  const send = async () => {
    if (!isValidEmail(email)) return toast.error("Correo invalido");
    toast.promise(resetPass(email), {
      loading: <b>Enviando...</b>,
      success: <b>Enviando exitosamente!</b>,
      error: () => {
        return <b>Ups, ha ocurrido un error!</b>;
      },
    });
  };

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
            <div className="login flex flex-col mt-24 justify-start items-center mr-0 xl:mr-32">
              <div className="w-80 flex flex-col items-center xl:items-start">
                <h4 className="font-bold text-xl mb-2">
                  Restablecer contraseña
                </h4>
                <p className="font-light text-sm mb-6 text-justify">
                  Ingresa debajo la dirección de correo electrónico que usaste
                  para registrarte. Te enviaremos un correo con un código para
                  restablecer tu contraseña.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center mb-6">
                <input
                  className="w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3 mb-3"
                  name="email"
                  type="email"
                  onChange={({ target }) => setEmail(() => target.value)}
                  placeholder="Correo"
                />
                <button
                  onClick={send}
                  className="w-80 transition delay-75 azulbg text-white hover:bg-white border border-blue-900 hover:border-blue-800 hover:text-blue-800 rounded px-16 py-3 cursor-pointer uppercase"
                >
                  Enviar
                </button>
                <button
                  className="mt-2 w-80 text-center transition delay-75 text-red-700 hover:bg-white border border-red-400 hover:border-blue-800 hover:text-blue-800 rounded px-10 py-3 mb-3 cursor-pointer"
                  onClick={() => history.push("/login")}
                >
                  Atras
                </button>
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
