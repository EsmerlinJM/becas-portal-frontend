import React from "react";
import BECA from "../../../../../../img/groupp.png";
import FB from "../../../../../../img/facebook(1).svg";
import YTB from "../../../../../../img/youtube-brands.svg";
import SP from "../../../../../../img/Shape.svg";
import IG from "../../../../../../img/instagram(3).svg";
import OGTIC from "../../../../../../img/Group 3826@2x.png";

export default function Footer() {
  return (
    <div className="fadeIn">
      <div className="footer w-full azulbg md:flex items-center p-7">
        <div className="logos flex justify-center w-full max-w-xl my-12 md:my-0 pb-12 md:pb-0 border-b-2 md:border-none border-gray-400">
          <img className="w-96 md:mr-10" src={BECA} alt="" />
        </div>
        <div className="info grid grid-rows-4 text-center md:flex md:border-l-2 border-gray-400">
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
      <div className="footer2 p-4 md:p-0 m-5 md:flex md:ml-24 md:mr-16 md:justify-between border-box">
        <div className="ogtic mb-8 md:mb-0 flex items-center azul text-xs font-semibold">
          <p>©2021 Todos los derechos reservados. Desarrollado por </p>
          <img className="w-16 mx-2 mt-0.5" src={OGTIC} alt="" />
        </div>
        <div className="flex items-center   justify-center ">
          <p className="azul text-sm font-semibold">SÍGUENOS</p>
          <span className="ml-3 flex-shrink-0" href="#">
            <img src={FB} alt="" />
          </span>
          <span className="ml-3 flex-shrink-0" href="#">
            <img src={YTB} alt="" />
          </span>
          <span className="ml-3 flex-shrink-0" href="#">
            <img src={SP} alt="" />
          </span>
          <span className="ml-3 flex-shrink-0" href="#">
            <img src={IG} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}
