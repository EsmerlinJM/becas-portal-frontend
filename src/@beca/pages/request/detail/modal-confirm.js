import ModalTemplate from '../../../shared/components/UI/molecules/modal-template'
import Logo from '../../../../img/AF Logo Beca tu Futuro RGB-07@2x.png'
export default function ModalConfirm({ isOpen, onClose, action }) {
  return (
    <ModalTemplate
      isOpen={isOpen}
      onClose={(close) => onClose(close)}
      header={
        <div className=" p-5 flex flex-col items-center w-full">
          <img src={Logo} alt="" className="w-36" />
          <p className=" text-center text-xl">¿Desea enviar el formulario?</p>
          <p className="text-xs text-gray-500">
            Una vez envies ya no hay vuelta atras!{' '}
          </p>
        </div>
      }
      body={<></>}
      footer={
        <div className="flex justify-end bg-white  pr-5">
          <button
            onClick={(close) => onClose(close)}
            className=" mr-2 uppercase text-xs px-5 py-3 rounded-3xl bg-red-500 text-white hover:bg-red-700"
          >
            {' '}
            Cancelar
          </button>
          <button
            onClick={() => action()}
            className=" uppercase text-xs px-5 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
          >
            {' '}
            Enviar solicitud
          </button>
        </div>
      }
    />
  )
}
