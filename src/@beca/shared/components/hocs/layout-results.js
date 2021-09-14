import React, { useState } from "react";
import Header2 from "../UI/organisms/header-2";
import HeaderUser from "../UI/organisms/header-user";
import Navigation from "../UI/molecules/navigation";
import SidebarFilter from "../UI/organisms/sidebar-filter";
// import AlertTop from "../UI/molecules/alert-top";
import InputSearch from "../UI/atoms/input-search";
import Footer from "../UI/organisms/footer";
import { useSelector } from "react-redux";
import { getAuth } from "../../utils/auth";
import { FiSliders } from "react-icons/fi";
import { Drawer } from "@material-ui/core";
import { useHistory } from "react-router";

export default function LayoutResult({ children }) {
  const history = useHistory();
  const { data, status } = useSelector((state) => state.user.one);
  const { token } = getAuth();
  const [isOpen, setIsOpen] = useState(false);

  const today = new Date();
  const expec_date = new Date("2022/1/31");
  const valUser = token && status === "completed" && Object.keys(data).length;
  return (
    <div className="fadeIn">
      {/* <AlertTop /> */}
      {valUser ? <HeaderUser user={data} /> : <Header2 />}
      {/* <Header2 /> */}
      <Navigation />

      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <SidebarFilter />
      </Drawer>

      <div className="flex">
        <div
          className="shadow-lg z-10	rounded hidden md:inline-block"
          style={{ width: "270px", minWidth: "270px" }}
        >
          <SidebarFilter />
        </div>

        <div className="p-8 bg-gray-50 w-full z-0">
          <InputSearch />
          {children}
          {expec_date.getTime() > today.getTime() && (
            <div className="busqueda p-4 h-96 flex flex-col xl:ml-52 xl:mr-32 justify-center  sm:ml-16 sm:mr-8 -mt-16 max-w-2xl min-w-lg ">
              {!valUser ? (
                <div className="azul lg:text-6xl sm:text-3xl text-2xl mb-3 border-b	border-gray-300 pb-4">
                  <h3 className="font-bold">Regístrate</h3>
                  <h3 className="pb-2">y entérate a tiempo</h3>
                  <h3 className="font-bold lg:text-2xl text-1xl">
                    de las próximas ofertas de becas
                  </h3>
                </div>
              ) : (
                <div className="azul lg:text-6xl sm:text-3xl text-2xl mb-3 border-b	border-gray-300 pb-4">
                  <h3 className="pb-2"> Entérate a tiempo</h3>
                  <h3 className="font-bold lg:text-2xl text-1xl">
                    de las próximas ofertas de becas
                  </h3>
                </div>
              )}
              <p className="font-semibold mb-5 azul ">
                Siguiente convocatoria de becas nacionales:
                <span className="text-yellow-600"> 31 de enero de 2022.</span>
              </p>
              {!valUser && (
                <button
                  onClick={() => history.push("/register")}
                  className="font-bold transition text-white delay-100 px-4 py-2  hover:ring azulbg  rounded-3xl m-3 bg-blue-700"
                >
                  REGÍSTRATE
                </button>
              )}
            </div>
          )}
        </div>

        <div className="fixed bottom-6 right-6 md:hidden">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            class="p-0 h-14 w-14 bg-blue-800 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            <FiSliders className="inline-block text-white" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
