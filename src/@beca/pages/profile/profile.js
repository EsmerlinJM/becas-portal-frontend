import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'

import PP from '../../../img/pp.png'
import Header2Natigation from '../../shared/components/hocs/header2-natigation'
import FormPersonalData from '../../shared/components/UI/organisms/form-personal-data'
import FormChangePassword from '../../shared/components/UI/organisms/form-change-password'

import { converterImage } from '../../shared/utils/image-binary'
import { setUser } from '../../redux/slices/user/_actions'
import { updateProfile } from '../../shared/services/user'
import toast from 'react-hot-toast'
import { MdModeEdit } from 'react-icons/md'

const objNav = {
  name: 'Perfil',
  parents: [{ name: 'Inicio', path: '/' }],
}

export default function Profile() {
  const { data } = useSelector((state) => state.user.one)
  const history = useHistory()
  const dispatch = useDispatch()

  const [picture, setPicture] = useState('')
  const [change, setChange] = useState('')

  const update = async () => {
    if (!change) return

    const payload = {
      genero: data.genero,
      country_id: data.country?.id,
      last_name: data.last_name,
      name: data.name,
      image: change,
    }

    toast.promise(updateProfile({ ...payload, ...data }), {
      loading: 'Guardando...',
      success: (data) => {
        dispatch(setUser(data))
        return <b>Guardado exitosamente! </b>
      },
      error: <b>Ups, ha ocurrido un error!</b>,
    })
  }

  useEffect(() => {
    if (typeof change === 'object') {
      converterImage(change, setPicture)
    }
  }, [change])

  return (
    <>
      <Header2Natigation objNav={objNav}>
        <div className="p-4 xl:w-5/6 py-3 mx-auto ">
          <div className="w-full bg-white grid lg:grid-cols-2 grid-cols-1 text-xs p-5 shadow">
            <div className=" pr-4">
              <div className="grid">
                <h4 className="font-bold text-xl mb-2 text-center">
                  Actualizar foto
                </h4>

                <div className="grid justify-center mt-2 mb-2">
                  <label className="relative transform hover:scale-105 transition-all duration-200">
                    <div className="absolute -top-2 -right-2 p-2 bg-blue-900 rounded-full">
                      <MdModeEdit className="h-4 w-4 text-white" />
                    </div>
                    <img
                      className="rounded-lg w-48 h-48 border-2 border-blue-700 object-cover"
                      src={picture || data.image_url || PP}
                      alt=""
                    />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={({ target }) =>
                        target.files.length && setChange(target.files[0])
                      }
                    />
                  </label>
                </div>
                <button
                  onClick={update}
                  className="uppercase mb-2 text-xs px-3 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800 transition-all"
                >
                  Actualizar Foto de Perfil
                </button>
              </div>

              <div className="grid">
                <div className={'mt-4'}>
                  <FormChangePassword />
                </div>
              </div>
            </div>

            <div className="grid lg:border-l border-blue-200">
              <p className="text-xl pl-4 mb-5 text-blue-900 font-semibold uppercase">
                Datos personales
              </p>
              <FormPersonalData user={data} />
            </div>
            <div className="md:col-span-2 mt-7 flex justify-center space-x-3">
              <button
                onClick={() => history.push('/my-requests')}
                className="outline-none uppercase text-xs px-6 py-3 rounded-3xl border border-blue-900 text-blue-900 hover:bg-gray-100 transition-all"
              >
                Ir a mis solicitudes
              </button>
              {/* <button className="uppercase text-xs px-6 py-3 rounded-3xl border border-blue-900 text-blue-900 hover:bg-gray-100 transition-all">
                  Ir a mi beca
                </button> */}
              {/* <button className="uppercase text-xs px-6 py-3 rounded-3xl border border-blue-900 text-blue-900 hover:bg-gray-100 transition-all">
                  Ir a convocatorias
                </button> */}
            </div>
          </div>
        </div>
      </Header2Natigation>
    </>
  )
}
