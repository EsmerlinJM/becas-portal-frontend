import ModalTemplate from "../../molecules/modal-template";
import Logo from "../../../../../../img/AF Logo Beca tu Futuro RGB-07@2x.png";

export default function ModalUser1({ width = "w-2/5", open, onExit, onMove }) {
  return (
    <ModalTemplate
      isOpen={open}
      onClose={(exit) => onExit(exit)}
      width={width}
      header={
        <div className="w-full flex justify-center px-5">
          <img className="w-44" src={Logo} alt="" />
        </div>
      }
      body={
        <div className="flex flex-col items-center text-center px-5">
          <p className="mb-2 font-bold">¡Hola!</p>
          <p className="w-11/12">
            Para que tengas una mejor experiencia buscando la beca de tu futuro,
            completa tu perfil en pocos pasos.
          </p>
        </div>
      }
      footer={
        <div className="mt-5 flex justify-center text-center w-full px-5">
          <button
            onClick={() => onMove(2)}
            className="px-32 py-3 uppercase text-xs bg-blue-900 hover:bg-blue-700 rounded-3xl transition-colors duration-150 ease-linear text-white font-semibold"
          >
            Continuar
          </button>
        </div>
      }
    />
  );
}
