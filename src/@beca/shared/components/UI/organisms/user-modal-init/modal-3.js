import ModalTemplate from "../../molecules/modal-template";
// import NumberFormat from "react-number-format";

export default function ModalUser3({
  width = "w-2/5",
  open,
  onExit,
  onChange,
  onMove,
  phone,
}) {
  return (
    <ModalTemplate
      isOpen={open}
      width={width}
      onClose={(exit) => onExit(exit)}
      header={
        <div className="w-full flex justify-between items-center  py-3 px-5">
          <p className="text-sm font-semibold">Agrega datos de contacto</p>
          <p className="text-xs text-gray-400">Paso 2 de 3</p>
        </div>
      }
      body={
        <div className="flex flex-col px-5">
          <p className="mb-2 text-sm">
            Ayudanos a contactarte por diferentes vías.
          </p>
          <p className="text-sm mb-1  mt-2">Número de teléfono:</p>
          <input
            defaultValue={phone}
            placeholder="809-000-0000"
            {...onChange("contact_phone")}
            className="text-xs border rounded px-3 py-3 outline-none mb-3"
          />
        </div>
      }
      footer={
        <div className="mt-5 flex justify-end space-x-2 px-5">
          <button
            onClick={() => onMove(4, true)}
            className="uppercase text-xs border px-6 py-2 rounded-3xl border-red-700 hover:bg-red-50 transition-all"
          >
            Saltar
          </button>
          <button
            onClick={() => onMove(4, false)}
            className="uppercase text-xs px-6 py-2 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
          >
            Guardar
          </button>
        </div>
      }
    />
  );
}
