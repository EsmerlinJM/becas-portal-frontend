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

export default function Footer() {
  const history = useHistory()
  
  return (
    <div className="fadeIn">
      <div className="footer w-full azulbg md:flex items-center p-7">
        <div className="logos flex items-center justify-around max-w-xl my-12 md:my-0 md:px-4 pb-12 md:pb-0 border-b-2 md:border-none border-gray-400">
          <img className="h-16 md:h-24" src={BECA} alt="" />
          <img className="h-16 md:h-24" src={GOBRD} alt="" />
        </div>
        <div className="info grid grid-rows-4 text-center md:flex md:border-l-2 border-gray-400">
          <div className="ayuda text-white text-xs w-full px-5 mb-4 md:mb-0">
            <h4 className="font-bold mb-4">AYUDA</h4>
            <div className="enlaces text-blue-600 flex flex-col">
              <span
                onClick={() => history.push('/terminos-condiciones')}
                className=" mb-2 ml-3 hover:border-white hover:text-white text-blue-400  cursor-pointer"
                href="#"
              >
                Términos de Uso
              </span>
              <span
                onClick={() => history.push('/politicas-privacidad')}
                className=" mb-2 ml-3 hover:border-white hover:text-white text-blue-400 cursor-pointer"
                href="#"
              >
                Política de Privacidad
              </span>
              <span
                onClick={() => history.push('/cuetion-frequency')}
                className=" mb-2 ml-3 hover:border-white hover:text-white text-blue-400  cursor-pointer"
                href="#"
              >
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
      <div className="footer2 p-4 md:p-0 m-5 grid justify-center md:flex md:justify-between">
        <div className="ogtic mb-8 md:mb-0 grid justify-center gap-4 md:flex md:items-center ">
          <p className="text-center azul text-xs font-semibold">
            ©2021 Todos los derechos reservados. <br className="md:hidden" />
            Desarrollado por
          </p>
          <div className="flex gap-4 justify-center items-center">
            <img className="w-16" src={OGTIC} alt="" />
            <img className="w-28" src={INNOVACION} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <p className="azul text-sm font-semibold">SÍGUENOS</p>
          <a className="ml-3 flex-shrink-0 cursor-pointer" href="https://www.facebook.com/MESCyTRD" target="_blank">
            <img src={FB} alt="" />
          </a>
          <a className="ml-3 flex-shrink-0 cursor-pointer" href="https://www.youtube.com/user/mescyt" target="_blank">
            <img src={YTB} alt="" />
          </a>
          <a className="ml-3 flex-shrink-0 cursor-pointer" href="https://twitter.com/MESCYTRD" target="_blank">
            <img src={SP} alt="" />
          </a>
          <a className="ml-3 flex-shrink-0 cursor-pointer" href="https://www.instagram.com/mescytrd/" target="_blank">
            <img src={IG} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
