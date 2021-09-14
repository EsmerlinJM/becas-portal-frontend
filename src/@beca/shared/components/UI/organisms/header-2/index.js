import { Drawer } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
// import Logo from "../../../../../../img/AF Logo Beca tu Futuro RGB-07@2x.png";
import Logo from "../../../../../../img/Logo_BECATUFUTURO.svg";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMenuFold,
} from "react-icons/ai";

export default function Header2() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-5 flex items-center justify-between lg:justify-between">
      <div className="flex justify-between">
        <img
          src={Logo}
          alt="logo3 "
          className="w-36 md:w-40 cursor-pointer"
          onClick={() => history.push("/")}
        />
        <div className=" m-7 text-xs text-gray-400 font-bold hidden xs:hidden sm:hidden md:flex lg:flex xl:flex">
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
      <div className="header1 flex items-center justify-center">
        <div className=" text-xs text-white ">
          <span
            onClick={() => history.push("/login")}
            className="font-bold m-3 transition delay-100 hover:text-blue-800 hover:border-blue-800 blancobg text-gray-400 cursor-pointer hidden md:inline-block"
          >
            INICIAR SESIÓN
          </span>
          <button
            onClick={() => history.push("/register")}
            className="font-bold transition delay-100 px-4 py-2  hover:bg-red-600 azulbg  rounded-3xl m-3 bg-blue-700"
          >
            REGÍSTRATE
          </button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <AiOutlineMenu size={24} />
        </button>
      </div>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="w-64 ">
          <div className="p-4 azulbg flex items-center justify-between text-white">
            Beca tu futuro
            <button className="cursor-pointer transform hover:scale-125 transition-all duration-100">
              <AiOutlineClose
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </button>
          </div>

          <div className="mx-4 my-2 text-base text-gray-400 font-bold border-b-2">
            <div className="p-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer hidden">
              BLOG
            </div>
            <div
              onClick={() => history.push("/FAQs")}
              className="p-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer"
            >
              PREGUNTAS FRECUENTES
            </div>
          </div>

          <div className="grid mx-4 my-4 text-xs text-white ">
            <button
              onClick={() => history.push("/login")}
              className="mb-4 font-bold transition delay-100 hover:text-blue-800 hover:border-blue-800 blancobg text-gray-400 "
            >
              INICIAR SESIÓN
            </button>
            <button
              onClick={() => history.push("/register")}
              className="font-bold transition delay-100 px-4 py-2  hover:bg-red-600 azulbg rounded-3xl bg-blue-700"
            >
              REGÍSTRATE
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
