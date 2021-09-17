import { useDispatch, useSelector } from 'react-redux'
import home3834 from '../../../../../../img/Group 3834@2x.png'
import Logo from '../../../../../../img/Logo_BECATUFUTURO.svg'
import macbookimg from '../../../../../../img/Macbook-BECAS.png'
import pattern from '../../../../../../img/pattern.png'

import { useHistory } from 'react-router'
import { getAuth } from '../../../../utils/auth'

import HeaderUser from '../header-user'
import InputSearchHome from '../../atoms/input-search-home'
import ModalInitiUser from '../user-modal-init'
import Header2 from '../header-2'
import { useEffect, useRef } from 'react'

export default function HomeInit() {
  const video = useRef()
  const { data: user, status } = useSelector((state) => state.user.one)
  const history = useHistory()
  const { token } = getAuth()

  const userExist =
    token && status === 'completed' && Object.keys(user || {}).length && user.id

  useEffect(() => {
    video.current?.play()
  }, [video])

  return (
    <>
      {userExist ? <HeaderUser user={user} isHome /> : null}
      <div className="home flex">
        {userExist && <ModalInitiUser user={user} />}
        <div className="left w-screen">
          {!userExist && (
            <div className="lg:hidden">
              <Header2 />
            </div>
          )}
          <div className="header1 bg-white hidden lg:flex items-center">
            <img
              className="w-40 ml-10"
              src={Logo}
              alt=""
              onClick={() => history.push('/')}
            />
            <div className="mt-11 m-7 text-xs text-gray-400 font-bold">
              <span className="cursor-pointer  m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 hidden">
                BLOG
              </span>
              <span
                onClick={() => history.push('/FAQs')}
                className="cursor-pointer m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800"
              >
                PREGUNTAS FRECUENTES
              </span>
            </div>
          </div>
          <div className="busqueda p-4 h-96 flex flex-col  lg:ml-52 lg:mr-32 justify-center mt-16 sm:mt-8 mb-8 ml-16 mr-8">
            <div className="azul lg:text-6xl text-3xl 	border-gray-300 pb-4">
              <h3 className="font-bold">Regístrate</h3>
              <h3 className="pb-2">y entérate a tiempo</h3>
              <h3 className="font-bold lg:text-2xl text-1xl">
                de las próximas ofertas de becas
              </h3>
            </div>
            <div className="max-w-xl border-b-2" />
            <p className="font-semibold mb-5 mt-4 azul ">
              Siguiente convocatoria de becas:
              <span className="text-yellow-600 pl-1">
                {' '}
                31 de enero de 2022.
              </span>
            </p>
            <div>
              <InputSearchHome />
              <p className="text-xs select-none font-thin text-gray-400 pl-6 py-1">
                <i>Ej. Odontología</i>
              </p>
            </div>
          </div>
        </div>
        <div className="right azulbg xl:w-3/5 border border-blue-400 xl:block hidden ">
          <div className="header1 flex items-center justify-center">
            <div
              className="m-5 text-xs text-white "
              // onClick={closeSesion}
            >
              <span
                onClick={() => history.push('/login')}
                className="font-bold m-3 transition delay-100 hover:text-blue-100 azulbg hover:border-white cursor-pointer"
              >
                INICIAR SESIÓN
              </span>
              <button
                onClick={() => history.push('/register')}
                className="font-bold transition delay-100 p-2.5 bg-white azul rounded-3xl m-3 hover:bg-blue-100"
              >
                REGÍSTRATE AHORA
              </button>
            </div>
          </div>
          <div className="w-full">
            <img
              className="-ml-24 -mb-1 pr-20 w-full"
              src={home3834}
              alt="hola"
            />
          </div>
        </div>
      </div>
      {!userExist && (
        <div className="right azulbg xl:w-3/5 border border-blue-400 xl:hidden block w-full ">
          <div className="header1 flex items-center justify-center">
            <div
              className="m-5 text-xs text-white "
              // onClick={closeSesion}
            >
              <span
                onClick={() => history.push('/login')}
                className="font-bold m-3 transition delay-100 hover:text-blue-100 azulbg hover:border-white cursor-pointer"
              >
                INICIAR SESIÓN
              </span>
              <button
                onClick={() => history.push('/register')}
                className="font-bold transition delay-100 p-2.5 bg-white azul rounded-3xl m-3 hover:bg-blue-100"
              >
                REGÍSTRATE AHORA
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="right shadow-lg border border-blue-400 block w-full lines-pattern align-middle">
        <div className="header1 lg:flex-col flex items-center justify-center xl:px-52 lg:px-32 px-8 py-16 bg-lighBlue" style={{backgroundImage:`url(${pattern})` }}>
          <div className="grid md:grid-cols-2">
            <img src={macbookimg} alt="macbook becas" className="max-h-96	" />
            <div className="azul lg:text-4xl xl:text-5xl  text-3xl border-gray-300 pt-8 md:mr-0 m-auto  ">
              <h3 className="">Dale a play y conoce</h3>
              <h3 className="font-light	">todas las opciones que</h3>
              <h3 className="font-light	">baca tu futuro trae para tí</h3>
              <a
                href="https://www.youtube.com/watch?v=BoCf3tIuzy4"
                target="_blank"
                className="uppercase text-white azulbg px-6 rounded-3xl py-2 text-lg"
              >
                ver Video Explicativo
              </a>
            </div>
          </div>

          {/* <video
            className="shadow-lg rounded-md border min-w-full	"
            controls
            type="video/mp4"
            ref={video}
            autoplay
            loop
          >
            <source
              src="https://storage.googleapis.com/becas-backend-storage/APP_IMAGES/Beca%20tu%20futuro1(1080p).mp4"
              type="video/mp4"
            />
            <source
              src="https://storage.googleapis.com/becas-backend-storage/APP_IMAGES/Beca%20tu%20futuro1(1080p).mp4"
              type="video/mp4"
            />
          </video> */}
        </div>
      </div>
    </>
  )
}
