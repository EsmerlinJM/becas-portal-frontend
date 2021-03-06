import { useHistory } from 'react-router'
import { Helmet } from 'react-helmet-async'
import BECA from '../../../img/AF Logo Beca tu Futuro RGB-07@2x.png'
import GROUP from '../../../img/Group 3834@2x.png'
import Beca from '../../../img/AF Logo Beca tu Futuro RGB-07.png'
import Modal from '../../shared/components/UI/molecules/modal-template'

import { isValidEmail } from '../../shared/utils/validate-email'

import useAction from './use-action'
import useVerification from './use-verification'
import Header2 from '../../shared/components/UI/organisms/header-2'

export default function Register() {
  const [{ errors, loading, modal }, actions] = useAction()

  const [state, action] = useVerification()

  const history = useHistory()
  const password = actions.watch('password')

  return (
    <div className="fadeIn  h-screen">
      <Helmet>
        <title>Registrate | Beca tu futuro </title>
      </Helmet>
      <Modal
        isOpen={state.modal}
        onClose={() => action.setModal(false)}
        body={
          <form
            className="flex-col"
            onSubmit={action.handleSubmit(action.action)}
          >
            <div  className="flex">
              <input
                className="w-full rounded-l p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                placeholder="micorreo@ejemplo.com"
                {...action.register('email', {
                  required: { value: true, message: 'campo obligatorio' },
                  pattern: {value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ,message:'Este correo no es valido'}
                })}
              />
              <button
                type="submit"
                className="px-5 rounded-r azulbg text-white font-bold p-2 uppercase "
              >
                enviar
              </button>
            </div>
            <p className="block px-1 text-red-600 text-sm font-semibold">{state.errors.email?.message || ''}</p>
          </form>
        }
        header={
          <div className="flex flex-col py-2 items-center w-full">
            <div className="w-3/4 flex flex-col items-center">
              <p className="font-bold text-center">Verificaccion de correo</p>
            </div>
          </div>
        }
      />

      <Modal
        isOpen={modal}
        onClose={(close) => actions.setModal(() => close)}
        body={
          <p className="px-5 text-center text-gray-500">
            Recibir??s un correo electr??nico para validar la informaci??n de tu
            perfil y completar los siguientes pasos
          </p>
        }
        header={
          <div className="flex flex-col items-center w-full">
            <div className="w-3/4 flex flex-col items-center">
              <div className="w-3/4">
                <img src={Beca} alt="" width="100%" height="100%" />
              </div>
              <p className="font-bold text-center">
                Est??s a pocos pasos de iniciar un futuro talentoso
              </p>
            </div>
          </div>
        }
      />
      <div className="grid grid-cols-1  h-full ">
        <div className=" grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-5 ">
          <div className="left col-span-3">
            <Header2 />
            <div className="login flex flex-col items-center justify-center mt-20 p-3">
              <div className="">
                <h4 className="font-bold text-xl mb-2 xl:text-left text-center">
                  Registrar cuenta
                </h4>
                <p className="w-80 font-light text-sm mb-6">
                  Crea tu perfil para que puedas acceder a llenar una aplicaci??n
                  a la beca de tu elecci??n.
                </p>
              </div>
              <div className="flex flex-col mb-6">
                <input
                  className={`
                  w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3 
                  ${errors.name ? 'border-red-600' : 'border-gray-300'}
                  `}
                  name="nombre"
                  type="text"
                  {...actions.register('name', { required: true })}
                  placeholder="Nombre"
                />
                <div className="mb-3">
                  {errors.name?.type === 'required' && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                </div>
                <input
                  className={`
                  w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3 
                  ${errors.last_name ? 'border-red-600' : 'border-gray-300'}
                  `}
                  name="apellido"
                  type="text"
                  placeholder="Apellido"
                  {...actions.register('last_name', { required: true })}
                />
                <div className="mb-3">
                  {errors.last_name?.type === 'required' && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                </div>
                <input
                  className={`
                  w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3
                  ${errors.email ? 'border-red-600' : 'border-gray-300'}
                  `}
                  name="email"
                  type="email"
                  placeholder="Correo electr??nico"
                  {...actions.register('email', {
                    required: true,
                    validate: (email) => isValidEmail(email),
                  })}
                />
                <div className="mb-3">
                  {errors.email?.type === 'required' && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                  {errors.email?.type === 'validate' && (
                    <span className="text-red-500 text-xs mt-1 ">
                      email incorrecto
                    </span>
                  )}
                </div>
                <input
                  className={`
                  w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3
                  ${errors.password ? 'border-red-600' : 'border-gray-300'}
                  `}
                  type="password"
                  placeholder="Contrase??a"
                  {...actions.register('password', {
                    required: true,
                    minLength: 8,
                  })}
                />
                <div className="mb-3">
                  {errors.password?.type === 'required' && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className="text-red-500 text-xs mt-1 ">
                      8 caracteres como minimo
                    </span>
                  )}
                </div>
                <input
                  className={`
                  w-80 font-thin text-sm focus:outline-none border rounded border-gray-300 px-6 py-3
                  ${
                    errors.password_confirmation
                      ? 'border-red-600'
                      : 'border-gray-300'
                  }
                  `}
                  name="pass"
                  type="password"
                  placeholder="Repetir contrase??a"
                  {...actions.register('password_confirmation', {
                    required: true,
                    validate: (confirmPass) =>
                      confirmPass ? confirmPass === password : true,
                  })}
                />
                <div className="mb-3">
                  {errors.password_confirmation?.type === 'required' && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                  {errors.password_confirmation?.type === 'validate' && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Las contrase??as no coinciden
                    </span>
                  )}
                </div>
                <button
                  onClick={actions.action}
                  disabled={loading}
                  className="w-80 transition delay-75 azulbg text-white hover:bg-white border border-blue-900 hover:border-blue-800 hover:text-blue-800 rounded px-16 py-3 mb-2 cursor-pointer"
                >
                  {loading ? 'CREANDO CUENTA...' : 'CREAR CUENTA'}
                </button>
                {/* Resend  verification email */}
                <button
                  onClick={() => action.setModal(true)}
                  disabled={loading}
                  className="w-80 transition delay-75 border-blue-900  text-sm font-semibold hover:border-b-2 text-currentBlue px-5 py-2 mb-2 cursor-pointer"
                >
                  {loading ? 'Reenviando...' : 'Reenviar correo de verificaci??n'}
                </button>

                <div className="flex text-sm justify-center">
                  <p className="px-1">??Ya tienes una cuenta?</p>
                  <span
                    onClick={() => history.push('/login')}
                    className="hover:border-blue-500 transition delay-75 border-b border-transparent text-blue-500 cursor-pointer"
                  >
                    INICIA SESI??N
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right col-span-2 azulbg items-end hidden sm:hidden xl:flex">
            <div >
              <img className="-ml-28 pr-7" src={GROUP} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
