import React from "react";
// import BECA from "../../../../../../img/groupp.png";
import BECA from "../../../../../../img/Logo_BECATUFUTURO_BLANCO.svg";
import GOBRD from "../../../../../../img/Logo__GOBRD_BLANCO.svg";
import FB from "../../../../../../img/facebook(1).svg";
import YTB from "../../../../../../img/youtube-brands.svg";
import SP from "../../../../../../img/Shape.svg";
import IG from "../../../../../../img/instagram(3).svg";
import OGTIC from "../../../../../../img/ogtic.svg";
import INNOVACION from "../../../../../../img/LogoGabineteInnovacion.svg";
import { useHistory } from "react-router";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  const history = useHistory();

  return (
    <div className="fadeIn">
      <footer className="azulbg">
        <div className="container px-5 py-24 mx-auto  flex md:items-center lg:items-start lg:justify-around md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-48 md:w-full lg:w-64 grid grid-cols-1 lg:flex lg:mx-0 mx-auto text-center md:text-left justify-center items-center lg:p-4">
            <img className="pb-4 md:pb-0" src={BECA} alt="" />
            <img className="" src={GOBRD} alt="" />
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                AYUDA
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <button
                    onClick={() => history.push("/terminos-condiciones")}
                    className="text-white hover:text-blue-300"
                    href="#"
                  >
                    Términos de Uso
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => history.push("/politicas-privacidad")}
                    className="text-white hover:text-blue-300"
                    href="#"
                  >
                    Política de Privacidad
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => history.push("/cuetion-frequency")}
                    className="text-white hover:text-blue-300"
                    href="#"
                  >
                    Preguntas Frecuentes
                  </button>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                INFORMACIÓN
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-300">Tel: (809) 731-1100</p>
                </li>
                <li>
                  <p className="text-gray-300">Fax: (809) 731-1101</p>
                </li>
                <li>
                  <p className="text-gray-300">info@mescyt.gob.do</p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Contáctanos
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-300">Tel: (809) 731-1100</p>
                </li>
                <li>
                  <p className="text-gray-300">Fax: (809) 731-1101</p>
                </li>
                <li>
                  <p className="text-gray-300">info@mescyt.gob.do</p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                BÚSCANOS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-300">
                    Av. Máximo Gómez No.31, esq. Pedro Henríquez Ureña, Santo
                    Domingo, República Dominicana
                  </p>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-white ">
          <div className="container mx-auto py-4 px-5 flex flex-wrap items-center flex-col xs:flex-row">
            <p className="mb-8 md:mb-0 text-center grid justify-center gap-4 md:flex md:items-center">
              ©2021 Todos los derechos reservados. <br className="md:hidden" />
              Desarrollado por
              <div className="flex gap-4 justify-center items-center">
                <img className="w-16" src={OGTIC} alt="" />
                <img className="w-28" src={INNOVACION} alt="" />
              </div>
            </p>
            <span className="inline-flex xs:ml-auto xs:mt-0 mt-2 justify-center items-center xs:justify-start">
              <p className="azul text-xs font-semibold">SÍGUENOS EN</p>
              <a
                className="ml-3 flex-shrink-0 cursor-pointer"
                href="https://www.facebook.com/MESCyTRD"
                target="_blank"
              >
                <AiOutlineFacebook className="text-blue-900 w-6 h-6 hover:text-blue-900 transform hover:scale-110 transition-all duration-200" />
              </a>
              <a
                className="ml-3 flex-shrink-0 cursor-pointer"
                href="https://www.youtube.com/user/mescyt"
                target="_blank"
              >
                <AiOutlineYoutube className="text-blue-900 w-7 h-7 hover:text-red-600 transform hover:scale-110 transition-all duration-200" />
              </a>
              <a
                className="ml-3 flex-shrink-0 cursor-pointer"
                href="https://twitter.com/MESCYTRD"
                target="_blank"
              >
                <AiOutlineTwitter className="text-blue-900 w-7 h-7 hover:text-blue-500 transform hover:scale-110 transition-all duration-200" />
              </a>
              <a
                className="ml-3 flex-shrink-0 cursor-pointer"
                href="https://www.instagram.com/mescytrd/"
                target="_blank"
              >
                <AiOutlineInstagram className="text-blue-900 w-7 h-7 hover:text-pink-600 transform hover:scale-110 transition-all duration-200" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
