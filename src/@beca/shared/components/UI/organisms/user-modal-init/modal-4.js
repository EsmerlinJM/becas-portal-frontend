import ModalTemplate from "../../molecules/modal-template";
import IMGT from "../../../../../../img/Path 2157@2x.png";
import { useEffect, useState } from "react";

export default function ModalUser4({
  width = "w-2/5",
  open,
  onExit,
  onChange,
  photo = "",
  onMove,
}) {
  const pp = photo || IMGT;
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    const fn = () => {
      if (typeof pp === "object") {
        var reader = new FileReader();
        reader.readAsDataURL(pp);
        reader.onload = function () {
          return setPicture(reader.result);
        };
      }
      setPicture(pp);
    };
    fn();
    //eslint-disable-next-line
  }, [photo]);

  return (
    <ModalTemplate
      isOpen={open}
      width={width}
      onClose={(exit) => onExit(exit)}
      header={
        <div className="w-full flex justify-between items-center py-3 px-5">
          <p className="text-sm font-semibold">Identifica tu foto de perfil</p>
          <p className="text-xs text-gray-400">Paso 3 de 3</p>
        </div>
      }
      body={
        <div className="flex flex-col px-5">
          <p className="mb-3 text-sm">
            Personaliza tu perfil a través de una foto de tu rostro.
          </p>
          <div className="border border-dashed px-3 py-8 rounded flex flex-col space-y-2 justify-center items-center">
            <img className="w-8" src={picture} alt="" />
            <p className="text-sm">Arrastra la imagen</p>
            <p className="text-sm">O</p>
            <input
              type="file"
              onChange={({ target }) => onChange("image", target.files[0])}
              name="image"
              accept="image/*"
              className=" bg-blue-900 text-white px-2 py-2 rounded hover:bg-blue-800"
            />
            Seleccionar archivo
          </div>
        </div>
      }
      footer={
        <div className="mt-5 flex justify-end space-x-2 px-5">
          <button
            onClick={() => onMove(5, true)}
            className="uppercase text-xs border px-6 py-2 rounded-3xl border-red-700 hover:bg-red-50 transition-all"
          >
            Saltar
          </button>
          <button
            onClick={() => onMove(5, false)}
            className="uppercase text-xs px-6 py-2 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
          >
            Guardar
          </button>
        </div>
      }
    />
  );
}
