import ModalTemplate from "../../molecules/modal-template";
import Group2x from "../../../../../../img/Group 3891@2x.png";
import Logo from "../../../../../../img/AF Logo Beca tu Futuro RGB-07@2x.png";

export default function ModalUser5({ width = "w-2/5", open, onExit, action }) {
  return (
    <ModalTemplate
      isOpen={open}
      width={width}
      onClose={(exit) => onExit(exit)}
      header={
        <div className="w-full flex justify-center px-5">
          <img className="w-48 " src={Logo} alt="" />
        </div>
      }
      body={
        <div className="flex flex-col items-center text-center space-y-3 px-5">
          <p className="font-bold">¡Listo!</p>
          <p className="w-11/12">
            Ahora podrás realizar solicitudes y ver el estatus de estás desde tu
            perfil.
          </p>
          <img className="w-72" src={Group2x} alt="" />
        </div>
      }
      footer={
        <div className="flex justify-center text-center w-full px-5">
          <button
            onClick={() => action(true)}
            className="px-32 py-3 uppercase text-xs bg-blue-900 hover:bg-blue-700 rounded-3xl transition-colors duration-150 ease-linear text-white font-semibold"
          >
            Continuar
          </button>
        </div>
      }
    />
  );
}
