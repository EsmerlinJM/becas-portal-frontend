import Buscar_CTA from "../../../../../../img/Buscar-CTA.svg";
import home3834 from "../../../../../../img/Group 3834@2x.png";
import Logo from "../../../../../../img/AF Logo Beca tu Futuro RGB-07@2x.png";

import { useHistory } from "react-router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../../../redux/slices/user/_actions";
import { getAuth } from "../../../../utils/auth";
import UserOptions from "../../molecules/user-options";

export default function HomeInit() {
  const { data: user, status } = useSelector((state) => state.user.one);
  const [query, setQuery] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const onSearch = () => {
    if (query && query.length > 5) {
      history.push(`/query-result?all=${query}`);
      return;
    }
    query.length <= 5 && toast.error("Mínimo 6 caracteres");
  };

  const closeSesion = async () =>
    dispatch(await logoutUser(getAuth().token, history));

  console.log(user, "jojoo");
  return (
    <div className="home flex">
      <div className="left w-screen">
        <div className="header1 bg-white flex items-center">
          <img
            className="w-40 ml-10"
            src={Logo}
            alt=""
            onClick={() => history.push("/")}
          />
          <div className="mt-11 m-7 text-xs text-gray-400 font-bold">
            <span className="cursor-pointer  m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800">
              BLOG
            </span>
            <span
              onClick={() => history.push("/cuetion-frequency")}
              className="cursor-pointer m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800"
            >
              PREGUNTAS FRECUENTES
            </span>
          </div>
        </div>
        <div className="busqueda p-4 h-96 flex flex-col mt-12 ml-52 mr-32 justify-center ml-24">
          <div className="azul text-6xl mb-3">
            <h3>CRECE TU TALENTO</h3>
            <h3 className="font-bold">CRECE EL PAÍS</h3>
          </div>
          <p className="font-semibold mb-5">
            Busca la carrera que te ayudará a desarrollar un mejor futuro.
          </p>
          <div className="flex items-center">
            <input
              className="outline-none border rounded-3xl w-96 p-3.5 pl-6 focus:placeholder-blue-100 placeholder-blue-800 text-xs font-bold"
              name="user"
              type="text"
              required
              placeholder="¿Qué quieres estudiar?"
              defaultValue={query}
              onKeyPress={({ key }) => key === "Enter" && onSearch()}
              onChange={({ target }) => setQuery(() => target.value)}
              maxLength={50}
            />
            <p className="text-xs select-none font-thin text-gray-400 -ml-36">
              {" "}
              <i>Ej. Odontología</i>
            </p>
            <input
              className="w-11 ml-7 text-black hover:fill-current hover:text-black"
              src={Buscar_CTA}
              type="image"
              alt="hola"
              placeholder="Consultar"
              onClick={onSearch}
            />
          </div>
        </div>
      </div>
      <div className="right azulbg w-3/5 border border-blue-400">
        <div className="header1 flex items-center justify-center">
          <div
            className="m-5 text-xs text-white "
            // onClick={closeSesion}
          >
            {user.id && status === "completed" ? (
              <>
                {/* <span className="font-bold m-3 transition delay-100 hover:text-blue-100 azulbg hover:border-white cursor-pointer">
                  {user.name}
                </span>
                <button
                  onClick={closeSesion}
                  className="font-bold transition delay-100 p-2.5 bg-white azul rounded-3xl m-3 hover:bg-blue-100"
                >
                  Cerrar sesión
                </button> */}

                <UserOptions user={user} />
              </>
            ) : (
              <>
                <span
                  onClick={() => history.push("/login")}
                  className="font-bold m-3 transition delay-100 hover:text-blue-100 azulbg hover:border-white cursor-pointer"
                >
                  INICIAR SESIÓN
                </span>
                <button
                  onClick={() => history.push("/register")}
                  className="font-bold transition delay-100 p-2.5 bg-white azul rounded-3xl m-3 hover:bg-blue-100"
                >
                  REGÍSTRATE AHORA
                </button>
              </>
            )}
          </div>
        </div>
        <div className="w-full">
          <img
            className="-ml-24 -mb-1 pr-20 w-full"
            src={home3834}
            alt="hola"
          />
        </div>
      </div>
    </div>
  );
}
