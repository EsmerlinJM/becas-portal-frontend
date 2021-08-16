import Label from "../../atoms/label";
import BorderTop from "../../atoms/border-top-color";
import { BsStar } from "react-icons/bs";

export default function OfertaResult() {
  return (
    <BorderTop borderColor="red-600 ">
      <div className="max-w-sm  overflow-hidden bg-white rounded">
        <div className="w-full flex justify-between border-b-2 border-gray-100 h-28">
          <div className="w-48 flex items-center">
            <img
              className="w-full"
              src={"https://img.icons8.com/clouds/452/schoology.png"}
              style={{ height: "90px" }}
              width="100%"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="w-52 flex items-center justify-center">
            <Label bgColor="red-600" title="Internacional" />
          </div>
        </div>
        <div className="px-5 py-2">
          <p className="text-gray-600 truncate">
            Instituto Cultura Dominico Américano
          </p>
          <p className="text-sm font-bold my-5">
            Licenciatura en Comunicación Audiovisual
          </p>

          <div className="flex justify-between text-gray-600 text-xs">
            <span>República Checa</span>
            <span>Semi-Presencial</span>
          </div>
        </div>

        <div className="pt-4 text-center cursor-pointer ">
          <span
            className={` w-full inline-block 
          hover:bg-blue-50 hover:text-blue-900  transition duration-300 
          ease-in-out px-3 py-2 text-sm font-semibold text-gray-700 mr-2 border-t-2  flex justify-between px-4`}
          >
            <span> TÈCNICO</span>
            <span>
              <BsStar size={20} />
            </span>
          </span>
        </div>
      </div>
    </BorderTop>
  );
}
