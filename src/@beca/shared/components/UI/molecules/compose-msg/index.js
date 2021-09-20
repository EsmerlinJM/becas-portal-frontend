import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import ModalTemplate from '../modal-template'

const Part = ({ part, onClose, action, register, errors }) => {
  if (part === 'footer') {
    return (
      <div className="flex md:justify-end justify-center space-x-2 px-5">
        <button
          onClick={() => onClose(false)}
          className="uppercase text-xs px-6 py-3 rounded-3xl bg-white border border-red-500 text-red-500 hover:text-white hover:bg-red-500"
        >
          Descartar
        </button>
        <button
          onClick={action}
          className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
        >
          Enviar
        </button>
      </div>
    )
  }
  if (part === 'body') {
    return (
      <span className="w-full bg-white pt-2 ">
        <div className="px-4 text-xs space-y-5">
          <div className="relative inline-flex w-full flex-col space-y-1">
            <p className="font-semibold text-blue-800">Asunto del mensaje:</p>
            <input
              placeholder="Asunto"
              {...register('subject', { required: true })}
              className={`border ${
                errors.subject ? 'border-red-500' : ' border-blue-700'
              } bg-blue-50 rounded outline-none cursor-pointer text-blue-400 md:w-1/2 w-2/3 p-3 focus:bg-gray-50 `}
            />
          </div>
          <div>
            <p className="font-semibold text-blue-800 mb-1">
              Redacta tu mensaje:
            </p>
            <textarea
              {...register('message', { required: true })}
              className={`border ${
                errors.message ? 'border-red-500' : 'border-blue-700'
              } bg-blue-50 rounded w-full outline-none resize-none p-3 placeholder-blue-400 focus:bg-gray-50`}
              cols={30}
              rows={10}
              placeholder="Redactar Mensaje..."
              defaultValue={''}
            />
          </div>
        </div>
      </span>
    )
  }
}
function ComposeMsg({ onAction, onClose, isOpen, isModal = false }) {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm()

  const action = handleSubmit((data) => {
    toast.promise(onAction(data), {
      loading: 'Enviando...',
      success: () => {
        setValue('subject', '')
        setValue('message', '')
        return <b>Enviado correctamente!</b>
      },
      error: <b>Ups, intentar mas tarde!</b>,
    })
  })

  return (
    <>
      {isModal ? (
        <ModalTemplate
          isOpen={isOpen}
          onClose={(close) => onClose(close)}
          header={
            <span className="flex justify-end p-5">
              <p>Enviar mensaje</p>
            </span>
          }
          body={<Part part="body" register={register} errors={errors} />}
          footer={<Part part="footer" onClose={onClose} action={action} />}
        />
      ) : (
        <div className="notificaciones  pt-3 m-auto grid grid-cols-1 gap-y-4">
          <Part part="body" register={register} errors={errors} />
          <div className="mb-4">
            <Part part="footer" onClose={onClose} action={action} />
          </div>
        </div>
      )}
    </>
  )
}

export default ComposeMsg
