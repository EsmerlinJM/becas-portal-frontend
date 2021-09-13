import Logo from "../../../../../../img/AF Logo Beca tu Futuro RGB-07@2x.png";
import UserOptions from "../../molecules/user-options";
import InputSearchHome from "../../atoms/input-search-home";
import { useHistory } from "react-router";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Drawer } from "@material-ui/core";
import { logoutUser } from "../../../../../redux/slices/user/_actions";
import { useDispatch } from "react-redux";

export default function HeaderUser({ user, isHome = false }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="w-full z-40 shadow fixed bg-white">
        <div className="px-5 flex justify-between flex-wrap">
          <div className="flex">
            <img
              src={Logo}
              className="w-28 md:w-40 cursor-pointer"
              alt=""
              onClick={() => history.push("/")}
            />
            <div className="flex self-center mt-2 text-xs text-gray-400 font-bold">
              <span className="cursor-pointer m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 hidden">
                BLOG
              </span>
              <span
                onClick={() => history.push("/cuetion-frequency")}
                className="cursor-pointer m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 hidden md:inline-block"
              >
                PREGUNTAS FRECUENTES
              </span>
            </div>
            <div className="self-center ml-4 hidden xs:inline-block">
              <InputSearchHome
                isHeader
                heightInput="h-9"
                widthImg="w-9"
                placeholder="¿Qué quieres estudiar? "
              />
            </div>
          </div>
          <div className="self-center hidden md:inline-block">
            <UserOptions user={user} history={history} />
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>
      {!isHome && (
        <>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div className="-mt-3 md:mt-0 md:mb-4">&nbsp;</div>
        </>
      )}

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

          <div className="mx-4 my-2 text-base text-gray-400 font-bold ">
            <div
              onClick={() => history.push("/favorites")}
              className="p-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer "
            >
              FAVORITOS
            </div>
            <div
              onClick={() => history.push("/notifications")}
              className="p-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer "
            >
              NOTIFICACIONES
            </div>
            <div
              onClick={() => history.push("/blogs")}
              className="p-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer hidden"
            >
              BLOG
            </div>
            <div
              onClick={() => history.push("/cuetion-frequency")}
              className="p-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer"
            >
              PREGUNTAS FRECUENTES
            </div>
            <div
              onClick={() => history.push("/profile")}
              className="p-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer"
            >
              MI PERFIL
            </div>
            <div
              onClick={() => history.push("/my-requests")}
              className="p-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer"
            >
              MIS SOLICITUDES
            </div>
          </div>

          <div className="p-3">
            <InputSearchHome
              isHeader
              heightInput="h-9"
              widthImg="w-9"
              placeholder="¿Qué quieres estudiar? "
            />
          </div>

          <div className="flex items-center justify-between px-4 py-2 text-xs text-white ">
            <button
              onClick={async () => dispatch(await logoutUser(history))}
              className="font-bold transition delay-100 px-4 py-2  hover:bg-red-600 azulbg rounded-3xl bg-blue-700"
            >
              CERRAR SESIÓN
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
//
