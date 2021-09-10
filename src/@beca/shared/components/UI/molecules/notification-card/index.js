import Group from "../../../../../../img/Group 3908@2x.png";

export default function CardNotification({ item }) {
  return (
    <span className="w-full flex items-center justify-between bg-white h-16 cursor-pointer px-4 shadow hover:shadow-lg transition-all">
      <div className="flex items-center space-x-3">
        <div>
          <img className="w-10" src={Group} alt="kk" />
        </div>
        <div className="text-xs text-gray-400">
          <p>
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
            .
          </p>
          <p className="italic font-thin">{item.creada}</p>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-4">
        <div>
          <img
            className="w-3 h-3 cursor-pointer"
            src="img/Close@2x.png"
            alt=""
          />
        </div>
        <div className="flex items-center space-x-1 text-xs italic text-gray-400 cursor-pointer">
          <label className="items-center cursor-pointer hidden md:flex">
            {item.read ? "Leída" : "Marcar como leída"}
            <input
              className="mt-0.5 ml-1 w-2.5 h-2.5 appearance-none outline-none border-2 border-blue-400 rounded-xl checked:bg-blue-500 checked:border-transparent"
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
