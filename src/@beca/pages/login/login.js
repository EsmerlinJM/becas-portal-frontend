import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useHistory } from 'react-router'
import BECA from '../../../img/AF Logo Beca tu Futuro RGB-07@2x.png'
import GROUP from '../../../img/Group 3834@2x.png'

import useAction from './use-action'
import { isValidEmail } from '../../shared/utils/validate-email'

export default function Login() {
  const history = useHistory()
  const [{ errors, loading, logErr }, actions] = useAction(history)

  return (
    <>
      <Helmet>
        <title>Iniciar sesión - Beca tu Futuro</title>
      </Helmet>
      <div className="grid grid-cols-1 fadeIn">
        <div className=" grid grid-cols-1 xl:grid-cols-5 h-screen">
          <div className="left col-span-3">
            <div className="header1 bg-white flex items-center xl:justify-start justify-between">
              <img
                onClick={() => history.push('/')}
                className="w-40 ml-10 cursor-pointer"
                src={BECA}
                alt=""
              />
              <div className="m-7 text-xs text-gray-400 font-bold flex items-center">
                <span className="m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer">
                  BLOG
                </span>
                <span className="ml-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 cursor-pointer">
                  PREGUNTAS FRECUENTES
                </span>
              </div>
            </div>
            <div className="login flex flex-col items-center mt-24 ">
              <div className="w-80 flex flex-col ">
                <h4 className="font-bold text-xl mb-2 xl:text-left text-center">Inicia sesión</h4>
                <p className="font-light text-sm mb-6 ">
                  Si ya tienes una cuenta creada, accede a tu perfil para ver o
                  realizar solicitudes.
                </p>
              </div>
              <div className="flex flex-col mb-6">
                <input
                  className={`w-80 font-thin text-sm focus:outline-none border rounded  px-6 py-3 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  type="email"
                  placeholder="Correo"
                  {...actions.register('email', {
                    required: true,
                    validate: (email) => isValidEmail(email),
                  })}
                  onKeyPress={({ key }) => key === 'Enter' && actions.action()}
                />
                <div className="mb-3 flex flex-col">
                  {errors.email?.type === 'required' && (
                    <span className="text-red-500 text-xs mt-1 ">
                      Este campo es obligatorio
                    </span>
                  )}
                  {errors.email?.type === 'validate' && (
                    <span className="text-red-500 text-xs mt-1">
                      email incorrecto
                    </span>
                  )}
                </div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  {...actions.register('password', { required: true })}
                  onKeyPress={({ key }) => key === 'Enter' && actions.action()}
                  className={`w-80 font-thin text-sm focus:outline-none border rounded  px-6 py-3 ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <div className="mb-3 flex flex-col">
                  {errors.password?.type === 'required' && (
                    <span className="text-red-500 text-xs mt-1">
                      Este campo es obligatorio
                    </span>
                  )}
                  {errors.password?.type === 'validate' && (
                    <span className="text-red-500 text-xs  mt-1">
                      email incorrecto
                    </span>
                  )}

                  {logErr && (
                    <span className="text-red-500  text-xs mt-1">{logErr}</span>
                  )}
                </div>
                <button
                  disabled={loading}
                  onClick={actions.action}
                  className="w-80 transition delay-75 azulbg text-white hover:bg-white border border-blue-900 hover:border-blue-800 hover:text-blue-800 rounded px-16 py-3 cursor-pointer"
                >
                  {loading ? 'ACCEDIENDO...' : 'ACCEDER'}
                </button>
              </div>
              <div className="flex flex-col items-center">
                <span
                  onClick={() => history.push('/register')}
                  className="w-80 text-center transition delay-75 text-red-700 hover:bg-white border border-red-400 hover:border-blue-800 hover:text-blue-800 rounded px-10 py-3 mb-3 cursor-pointer"
                >
                  CREAR CUENTA
                </span>
                <span
                  onClick={() => history.push("/reset-pass")}
                  className="hover:border-blue-500 transition delay-75 border-b border-transparent text-blue-500 cursor-pointer"
                >
                  ¿Olvidaste tu contraseña?
                </span>
              </div>
            </div>
          </div>
          <div className="right col-span-2 azulbg items-end hidden sm:hidden xl:flex">
            <div className>
              <img className="-ml-28 pr-7" src={GROUP} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
