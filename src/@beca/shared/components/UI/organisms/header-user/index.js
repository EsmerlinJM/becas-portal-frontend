import Logo from "../../../../../../img/AF Logo Beca tu Futuro RGB-07@2x.png";
import UserOptions from "../../molecules/user-options";
import InputSearchHome from "../../atoms/input-search-home";
import { useHistory } from "react-router";
export default function HeaderUser({ isHome = false }) {
  const history = useHistory();

  return (
    <div className="relative">
      <div className="w-full z-40 shadow fixed bg-white">
        <div className="mx-10 flex justify-between flex-wrap">
          <div className="ll flex">
            <img
              src={Logo}
              className="w-40 mr-2 cursor-pointer"
              alt=""
              onClick={() => history.push("/")}
            />
            <div className="flex self-center mt-2 text-xs text-gray-400 font-bold">
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
            <div className="self-center ml-4">
              <InputSearchHome
                isHeader
                heightInput={"h-9"}
                widthImg="w-9"
                placeholder="Que ofertas buscas?"
              />
            </div>
          </div>
          <div className="self-center">
            <UserOptions user={{}} history={history} />
          </div>
        </div>
      </div>
      {!isHome && (
        <>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div className="mb-4">&nbsp;</div>
        </>
      )}
    </div>
  );
}
//
