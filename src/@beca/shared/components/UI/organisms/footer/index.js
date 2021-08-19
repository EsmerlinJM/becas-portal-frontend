import React from "react";
import { FaFacebookSquare, FaShapes } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ImInstagram } from "react-icons/im";
import BECA from "../../../../../../img/groupp.png";

export default function Footer() {
  return (
    <div className="fadeIn">
      <div className="footer w-full azulbg flex items-center p-7">
        <div className="logos flex justify-center w-full max-w-xl">
          <img className="w-96 mr-10" src={BECA} alt="" />
        </div>
        <div className="info flex border-l-2 border-gray-400">
          <div className="ayuda text-white text-xs w-full px-5">
            <h4 className="font-bold mb-4">AYUDA</h4>
            <div className="enlaces text-blue-600 flex flex-col">
              <span className="mb-2" href="#">
                Términos de Uso
              </span>
              <span className="mb-2" href="#">
                Política de Privacidad
              </span>
              <span className="mb-2" href="#">
                Preguntas Frecuentes
              </span>
            </div>
          </div>
          <div className="informacion text-white text-xs w-full px-5">
            <h4 className="font-bold mb-4">INFORMACIÓN</h4>
            <p>
              Ministerio de Educación Superior, Ciencia y Tecnología. República
              Dominicana
            </p>
          </div>
          <div className="llamanos text-white text-xs w-full px-5">
            <h4 className="font-bold mb-4">LLÁMANOS</h4>
            <p>Tel: (809) 731-1100</p>
            <p>Fax: (809) 731-1101</p>
            <p>info@mescyt.gob.do</p>
          </div>
          <div className="buscanos text-white text-xs w-full px-5">
            <h4 className="font-bold mb-4">BÚSCANOS</h4>
            <p>
              Av. Máximo Gómez No.31, esq. Pedro Henríquez Ureña, Santo Domingo,
              República Dominicana
            </p>
          </div>
        </div>
      </div>
      <div className="footer2 w-screen m-5 pl-20 flex justify-between">
        <div className="ogtic flex items-center azul text-xs font-semibold">
          <p>©2021 Todos los derechos reservados. Desarrollado por </p>
          <img
            className="w-16 mx-2 mt-0.5"
            src="img/Group 3826@2x.png"
            alt=""
          />
        </div>
        <div className="flex items-center pr-32">
          <p className="azul text-sm font-semibold">SÍGUENOS</p>
          <span className="ml-3 flex-shrink-0" href="#">
            {/* <img src="img/facebook(1).svg" alt="" />
             */}
            <FaFacebookSquare className="text-blue-500" size={20} />
          </span>
          <span className="ml-3 flex-shrink-0" href="#">
            {/* <img src="img/youtube-brands.svg" alt="" /> */}
            <IoLogoYoutube className="text-red-500" size={20} />
          </span>
          <span className="ml-3 flex-shrink-0" href="#">
            {/* <img src="img/Shape.svg" alt="" /> */}
            <FaShapes />
          </span>
          <span className="ml-3 flex-shrink-0" href="#">
            {/* <img src="img/instagram(3).svg" alt="" /> */}
            <ImInstagram color="#8a3ab9" size={20} />
          </span>
        </div>
      </div>
    </div>
  );
}
