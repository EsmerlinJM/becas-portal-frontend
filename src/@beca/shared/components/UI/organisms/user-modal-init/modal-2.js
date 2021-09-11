import ModalTemplate from "../../molecules/modal-template";
// import ReactFormat from "react-number-format";

export default function ModalUser2({
  width = "w-2/5",
  open,
  onExit,
  onChange,
  onMove,
  document,
}) {
  return (
    <ModalTemplate
      isOpen={open}
      onClose={(exit) => onExit(exit)}
      width={width}
      header={
        <div className="w-full flex justify-between items-center  py-3 px-5">
          <p className="text-sm font-semibold">Verifica tu identidad</p>
          <p className="text-xs text-gray-400">Paso 1 de 3</p>
        </div>
      }
      body={
        <div className="flex flex-col px-5">
          <p className="mb-2 text-sm">
            Coloca tu cédula de identidad para validar tus datos personales.
          </p>
          <p className="text-sm mb-1 ">Cédula de identidad:</p>
          <input
            placeholder="Cédula de identidad"
            className="text-xs border rounded px-3 py-3 outline-none mb-3"
            {...onChange("document_id")}
            defaultValue={document}
          />
          <p className="font-semibold">
            ¡Bienvenido/a! Isbel Cristina Bautista Durán
          </p>
        </div>
      }
      footer={
        <div className="mt-5 flex justify-end space-x-2 px-5">
          <button
            onClick={() => onMove(3, true)}
            className="uppercase text-xs border px-6 py-2 rounded-3xl border-red-700 hover:bg-red-50 transition-all"
          >
            Saltar
          </button>
          <button
            onClick={() => onMove(3, false)}
            className="uppercase text-xs px-6 py-2 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
          >
            Guardar
          </button>
        </div>
      }
    />
  );
}
