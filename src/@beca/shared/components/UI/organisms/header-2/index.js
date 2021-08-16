import Logo from "../../../../../../img/AF Logo Beca tu Futuro RGB-07@2x.png";
export default function Header2() {
  return (
    <div className="px-5 mx-auto flex  md:justify-between lg:justify-between">
      <div className=" flex">
        <div>
          <img src={Logo} alt="logo3" className="w-40" />
        </div>
        <div className=" m-7 text-sm text-gray-400 font-bold hidden xs:hidden sm:hidden  md:flex lg:flex xl:flex">
          <span className="m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer">
            BLOG
          </span>
          <span className="m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer">
            PREGUNTAS FRECUENTES
          </span>
        </div>
      </div>
      <div className="header1 flex items-center justify-center">
        <div className=" text-sm text-white ">
          <span className="font-bold m-3 transition delay-100 hover:text-blue-800 hover:border-blue-800 blancobg text-gray-400 cursor-pointer ">
            INICIAR SESIÓN
          </span>
          <button className="font-bold transition delay-100 p-2.5 hover:bg-red-600 azulbg  rounded-3xl m-3 bg-blue-700">
            REGÍSTRATE AHORA
          </button>
        </div>
      </div>
    </div>
  );
}
