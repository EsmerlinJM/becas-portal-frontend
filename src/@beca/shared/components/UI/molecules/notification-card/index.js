// import Group from '../../../../../../img/Group 3908@2x.png'
import { FaUserCheck } from 'react-icons/fa'

export default function CardNotification({ item, onRead, onDelete }) {
  return (
    <span className="grid grid-cols-12 items-center bg-white cursor-pointer p-4 shadow hover:shadow-lg transition-all">
      <div className="col-span-1 hidden md:flex items-center justify-center">
        {/* <img className="" src={Group} alt="kk" /> */}
        <div className="flex justify-center items-center bg-blue-200 p-5 rounded-full">
          <FaUserCheck className="w-8  h-8 text-blue-900" />
        </div>
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
              <label className="flex items-center cursor-pointer mb-4">
                {item.read ? 'Leída' : 'Marcar como leída'}
                <input
                  className="mt-0.5 ml-1 w-2.5 h-2.5 appearance-none outline-none border-2 border-blue-400 rounded-xl checked:bg-blue-500 checked:border-transparent cursor-pointer"
                  type="checkbox"
                  onChange={() => onRead(item)}
                  checked={item.read}
                />
              </label>
              <label
                onClick={() => onDelete(item)}
                className="text-right text-xs italic cursor-pointer hover:text-black "
              >
                Borrar
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-400  text-xs italic  col-span-1 flex flex-col items-end space-y-4 ">
        <div className="hidden md:flex flex-col">
          <label
            onClick={() => onRead(item)}
            className="flex items-center cursor-pointer  mb-4 hover:text-black  "
          >
            <div className="hidden md:block">
              {item.read ? 'Leída' : 'Marcar como leída'}
            </div>
            <input
              className="mt-0.5 ml-1 w-2.5 h-2.5 appearance-none outline-none border-2 border-blue-400 rounded-xl checked:bg-blue-500 checked:border-transparent cursor-pointer"
              type="checkbox"
              checked={item.read}
              onChange={() => {}}
            />
          </label>
          <label
            onClick={() => onDelete(item)}
            className="text-right text-xs italic cursor-pointer hover:text-black "
          >
            Borrar
          </label>
        </div>
      </div>
    </span>
  )
}
