import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFolderFill, BsFillBarChartFill } from "react-icons/bs";
import { SiMathworks } from "react-icons/si";
import { RiCommunityFill } from "react-icons/ri";
import { FaSign } from "react-icons/fa";

export default function OpenCallsBlock() {
  return (
    <div className="truncate flex items-center  bg-white m-2 text-gray-500 divide-x-2 invisible xs:invisible sm:invisible md:visible lg:visible">
      <div className="flex">
        <div>
          <img
            height={"100%"}
            width={190}
            src="https://media-cdn.tripadvisor.com/media/photo-s/0c/34/55/ec/municipality-building.jpg"
            alt=""
          />
        </div>
        <div className="mx-4 self-center">
          <p className="text-base font-bold	text-blue-900">
            Becas Nacionales 2021
          </p>
          <div className="flex justify-center">
            <button className="bg-green-300 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full mt-2">
              Abierta
            </button>
          </div>
        </div>
      </div>
      <div className="mx-4 ">
        <div className="ml-10">
          <span className="flex items-center ">
            <FaSign />
            <p className="ml-3">Nacional</p>
          </span>
          <span className="flex items-center">
            <BsFolderFill />
            <p className="ml-3">
              Ministerio de Educación Superior, Ciencia y Tecnología
            </p>
          </span>
          <span className="flex items-center">
            <FaRegCalendarAlt />
            <p className="ml-3">22/01/2020 - 22/02/2020</p>
          </span>
        </div>
      </div>

      <div className="mx-4">
        <div className="ml-10">
          <span className="flex items-center">
            <BsFillBarChartFill />
            <p className="ml-3">Grado, Master, Doctorados</p>
          </span>
          <span className="flex items-center">
            <SiMathworks />
            <p className="ml-3">100% mat. Alojamiento</p>
          </span>
          <span className="flex items-center">
            <RiCommunityFill />
            <p className="ml-3">123</p>
          </span>
        </div>
      </div>
    </div>
  );
}
