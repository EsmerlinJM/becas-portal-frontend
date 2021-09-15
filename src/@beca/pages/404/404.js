import { Helmet } from "react-helmet-async";
import Footer from "../../shared/components/UI/organisms/footer";
import { useSelector } from "react-redux";
import Logo from "../../../img/Logo_BECATUFUTURO.svg";
import leftSideImg from "../../../img/Group 3834@2x.png";
import { getAuth } from "../../shared/utils/auth";
import { useHistory } from "react-router";
import HeaderUser from "../../shared/components/UI/organisms/header-user";
import Header2 from "../../shared/components/UI/organisms/header-2";

export default function PageNotFound() {
  const { data: user, status } = useSelector((state) => state.user.one);
  const history = useHistory();
  const { token } = getAuth();

  const userExist =
    token &&
    status === "completed" &&
    Object.keys(user || {}).length &&
    user.id;

  return (
    <div className="fadeIn">
      <Helmet>
        <title> Beca tu futuro | Crece tu talento, crece el pais </title>
      </Helmet>
      {userExist ? <HeaderUser user={user} isHome /> : null}
      <div className="home flex">
        <div className="left w-screen">
          <div className="hidden">
            <Header2 />
          </div>
          <div className="header1 bg-white hidden md:flex items-center">
            <img
              className="w-40 ml-10"
              src={Logo}
              alt=""
              onClick={() => history.push("/")}
            />
            <div className="mt-11 m-7 text-xs text-gray-400 font-bold">
              <span className="cursor-pointer  m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 hidden">
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
          <div className="busqueda p-4 h-96 flex flex-col lg:mt-12 lg:ml-52 lg:mr-32 justify-center mt-4 mb-8 ml-16 mr-8">
            <div className="azul lg:text-6xl text-3xl 	border-gray-300 pb-4">
              <h3 className="font-bold mb-4">404</h3>
              <h3 className="font-semibold text-xl">
                La página que estás buscando no existe o ha ocurrido un error
                inesperado.
              </h3>
            </div>
            <div className="max-w-xl border-b-2" />
            <p className="font-semibold mb-5 mt-4 azul text-sm">
              Vuelva atrás, o diríjase a la página principal para ir a otra
              dirección.
            </p>
            <div>
              <button
                onClick={() => history.goBack()}
                className=" font-bold transition text-white delay-100 px-4 py-2  hover:ring azulbg  rounded-3xl bg-blue-700"
              >
                VOLVER
              </button>
            </div>
          </div>
        </div>
        <div className="right azulbg xl:w-3/5 border border-blue-400 xl:block hidden ">
          <div className="w-full">
            <img
              className="-ml-24 -mb-1 pr-20 w-full"
              src={leftSideImg}
              alt="hola"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
