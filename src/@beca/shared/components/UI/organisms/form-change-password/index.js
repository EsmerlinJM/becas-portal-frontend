import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { changePassword } from '../../../../services/user'

export default function FormChangePassword() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm()
  const password = watch('password')

  const action = handleSubmit((data) => {
    toast.promise(changePassword(data), {
      loading: 'Guardando...',
      success: () => {
        setValue('password', '')
        setValue('current_password', '')
        setValue('password_confirmation', '')
        return <b>Guardado correctamente...</b>
      },
      error: ({ data }) => {
        return <b>{data.message || 'No se ha guadado correctamente!'}</b>
      },
    })
  })

  return (
    <>
      <div className="fadeIn">
        <div className="login flex flex-col">
          <div className="w-80 flex flex-col items-center xl:items-start">
            <h4 className="font-bold text-xl mb-2">Cambiar contraseña</h4>
          </div>
          <div className="flex flex-col justify-center mb-6">
            <input
              className={`${
                errors.current_password ? ' border-red-300' : ' border-gray-300'
              } w-80 font-thin text-sm focus:outline-none border rounded px-6 py-3`}
              type="password"
              placeholder="Actual contraseña"
              {...register('current_password', { required: true })}
            />
            <div className="mb-3">
              {errors.current_password && (
                <p className="text-red-300"> Este campo es requerido</p>
              )}
            </div>
            <input
              className={`${
                errors.password ? ' border-red-300' : ' border-gray-300'
              } w-80 font-thin text-sm focus:outline-none border rounded px-6 py-3`}
              type="password"
              placeholder="Nueva contraseña"
              {...register('password', { required: true })}
            />
            <div className="mb-3">
              {errors.password && (
                <p className="text-red-300"> Este campo es requerido</p>
              )}
            </div>
            <input
              className={`${
                errors.password_confirmation
                  ? ' border-red-300'
                  : ' border-gray-300'
              } w-80 font-thin text-sm focus:outline-none border rounded px-6 py-3 `}
              type="password"
              placeholder="Confirmar contraseña"
              {...register('password_confirmation', {
                required: true,
                validate: (confirmPass) => confirmPass === password,
              })}
            />
            <div className="mb-3">
              {errors.password_confirmation?.type === 'required' && (
                <p className="text-red-300"> Este campo es requerido</p>
              )}
              {errors.password_confirmation?.type === 'validate' && (
                <p className="text-red-300"> Las contraseñas no coinciden</p>
              )}
            </div>
            <button
              onClick={action}
              className="w-80 rounded-3xl transition delay-75 azulbg text-white hover:bg-white border border-blue-900 hover:border-blue-800 hover:text-blue-800 rounded px-16 py-3 cursor-pointer uppercase"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
