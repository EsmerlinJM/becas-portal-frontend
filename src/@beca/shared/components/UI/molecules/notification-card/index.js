import Group from "../../../../../../img/Group 3908@2x.png";

export default function CardNotification({ item }) {
  return (
    <span className="grid grid-cols-12 items-center bg-white cursor-pointer p-4 shadow hover:shadow-lg transition-all">
      <div className="col-span-1 hidden md:flex items-center justify-center">
        <img className="" src={Group} alt="kk" />
      </div>
      <div className="col-span-11 md:col-span-10 flex items-center space-x-3 p-4 pt-2">
        <div className="">
          <div className="mb-2">{item.nombre}</div>
          <p className="text-sm text-gray-400">
            {item.descripcion}
            {/* <span className="font-semibold text-gray-500">Luisaura Jesmin</span>{" "}
            ha completado la evaluación correspondiente a
            <span className="font-semibold text-gray-500">
              Universidad Autónoma de Santo Domingo (UASD)
            </span>{" "}
            para{" "}
            <span className="font-semibold text-gray-500">
              Becas Nacionales
            </span> */}
          </p>

          <div className="flex items-center justify-between mt-4 ">
            <div className="italic font-thin ">{item.creada}</div>
            <div className="text-xs italic text-gray-400 cursor-pointer md:hidden">
              <label className="flex items-center cursor-pointer">
                {item.read ? "Leída" : "Marcar como leída"}
                <input
                  className="mt-0.5 ml-1 w-2.5 h-2.5 appearance-none outline-none border-2 border-blue-400 rounded-xl checked:bg-blue-500 checked:border-transparent cursor-pointer"
                  type="checkbox"
                  onChange={() => {}}
                  checked={item.read}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-end space-y-4">
        {/* <div>
          <img
            className="w-3 h-3 cursor-pointer"
            src="img/Close@2x.png"
            alt=""
          />
        </div> */}
        <div className="text-xs italic text-gray-400 cursor-pointer hidden md:flex">
          <label className="flex items-center cursor-pointer">
            <div className="hidden md:block">
              {item.read ? "Leída" : "Marcar como leída"}
            </div>
            <input
              className="mt-0.5 ml-1 w-2.5 h-2.5 appearance-none outline-none border-2 border-blue-400 rounded-xl checked:bg-blue-500 checked:border-transparent cursor-pointer"
              type="checkbox"
              onChange={() => {}}
              checked={item.read}
            />
          </label>
        </div>
      </div>
    </span>
  );
}
