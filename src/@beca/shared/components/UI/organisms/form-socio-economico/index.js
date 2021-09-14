import { setUser } from '../../../../../redux/slices/user/_actions'
import { updateSocioEconomico } from '../../../../services/user'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import Select from 'react-select'

const arrOp = [
  { value: 'RD$ 1 -10000' },
  { value: 'RD$ 10,000 – 20,000' },
  { value: 'RD$ 20,000 – 30,000' },
  { value: 'RD$ 30,000 – 40,000' },
  { value: 'Más de RD$ 50,000' },
]
export default function FormSocioEconomico({ user }) {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const { handleSubmit, register, setValue, watch } = useForm({
    defaultValues: user.socio_economico,
  })
  const vehiculo_propio = watch('vehiculo_propio')
  const madre_nivel_educativo = watch('madre_nivel_educativo')
  const madre_rango_salarial = watch('madre_rango_salarial')
  const madre_trabaja = watch('madre_trabaja')

  const padre_nivel_educativo = watch('padre_nivel_educativo')
  const padre_rango_salarial = watch('padre_rango_salarial')
  const padre_trabaja = watch('padre_trabaja')

  const action = handleSubmit((data) => {
    setLoading(true)
    const payload = { ...data }

    for (const name in payload) {
      if (!payload[name]) delete payload[name]
    }

    toast.promise(updateSocioEconomico(payload), {
      loading: 'Guardando...',
      success: () => {
        setLoading(false)
        dispatch(
          setUser({
            ...user,
            socio_economico: { ...user.socio_economico, ...payload },
          }),
        )
        return <b>Guardado correctamente! </b>
      },
      error: () => {
        setLoading(false)
        return <b>Ups, ha ocurrido un error! </b>
      },
    })
  })

  return (
    <>
      <div className="grid grid-cols-1 gap-y-4">
        <div className="bg-white grid gap-y-5 gap-x-20 md:grid-cols-2 grid-cols-1 text-xs p-5">
          <div className="md:col-span-2 flex justify-center items-center pb-4">
            <p className="text-sm font-semibold text-center md:text-left mb-2 underline">
              Datos Generales:
            </p>
          </div>
          <div className="">
            <p className="font-semibold">Monto de Alquiler </p>
            <input
              className="text-xs border w-full rounded px-3 py-3 outline-none"
              type="number"
              {...register('monto_alquiler')}
              placeholder="..."
            />
            <p className="mb-1.5" style={{ fontSize: '10px' }}>
              (solo en caso de que viva alquilado)
            </p>
          </div>
          <div className="">
            <p className="mb-1.5 font-semibold">¿Posee vehículo propio?</p>
            <div className="flex items-center justify-around sm:justify-start gap-4">
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="yesCar"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  checked={vehiculo_propio === 'Si' && true}
                  onChange={() => setValue('vehiculo_propio', 'Si')}
                />
                Sí
              </label>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="noCar"
              >
                <input
                  checked={vehiculo_propio === 'No' && true}
                  onChange={() => setValue('vehiculo_propio', 'No')}
                  className="mr-1.5"
                  type="radio"
                />
                No
              </label>
            </div>
          </div>
          <hr className="md:col-span-2 mt-4" />
          {/*----------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <div className="md:col-span-2 flex justify-center mb-4">
            <p className="text-sm font-semibold text-center md:text-left mb-2 underline">
              Datos de la Madre del solicitante:
            </p>
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Nombre completo de la Madre</p>
            <input
              {...register('madre_nombre')}
              className="text-xs border w-full rounded px-3 py-3 outline-none mb-3"
              type="text"
              placeholder="Ej. Maria Pérez"
            />
          </div>
          <div className="flex space-x-16">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Nivel educativo</p>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="prim2"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  checked={madre_nivel_educativo === 'Sin estudios '}
                  onChange={() =>
                    setValue('madre_nivel_educativo', 'Sin estudios')
                  }
                />
                Sin estudios
              </label>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="sec2"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  checked={madre_nivel_educativo === 'Basico'}
                  onChange={() => setValue('madre_nivel_educativo', 'Basico')}
                />
                Basico
              </label>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="sec2"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  checked={madre_nivel_educativo === 'Medio'}
                  onChange={() => setValue('madre_nivel_educativo', 'Medio')}
                />
                Medio
              </label>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="tec2"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  checked={madre_nivel_educativo === 'Tecnico'}
                  onChange={() =>
                    setValue('madre_nivel_educativo', 'Universitario')
                  }
                />
                Universitario
              </label>
            </div>
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">¿Labora actualmente?</p>
              <div className="flex items-center justify-around sm:justify-start gap-4">
                <label className="flex items-center text-xs text-gray-400">
                  <input
                    className="mr-1.5"
                    type="radio"
                    checked={madre_trabaja === 'Si' && true}
                    onChange={() => setValue('madre_trabaja', 'Si')}
                  />
                  Sí
                </label>
                <label
                  className="flex items-center text-xs text-gray-400"
                  htmlFor="no"
                >
                  <input
                    className="mr-1.5"
                    type="radio"
                    checked={madre_trabaja === 'No' && true}
                    onChange={() => setValue('madre_trabaja', 'No')}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex space-x-10">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Nombre de la Empresa</p>
              <input
                className="text-xs border w-full rounded px-3 py-3 outline-none"
                type="text"
                placeholder="Ej. Banco Popular"
                {...register('madre_lugar_trabajo')}
              />
            </div>
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Posición Ocupada</p>
              <input
                {...register('madre_funcion_trabajo')}
                className="text-xs border w-full rounded px-3 py-3 outline-none "
                type="text"
                placeholder="Ej. Abogado/a"
              />
            </div>
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Rango salarial</p>
            <Select
              options={arrOp}
              getOptionLabel={(item) => item.value}
              getOptionValue={(item) => item}
              value={{
                value:
                  madre_rango_salarial ||
                  user.socio_economico?.madre_rango_salarial,
              }}
              placeholder="Rango salarial"
              onChange={(item) => setValue('madre_rango_salarial', item.value)}
            />
          </div>
          <hr className="md:col-span-2 mt-4" />
          {/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <div className="md:col-span-2 flex justify-center mb-4">
            <p className="text-sm font-semibold text-center md:text-left mb-2 underline">
              Datos del Padre del solicitante:
            </p>
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Nombre completo del Padre </p>
            <input
              {...register('padre_nombre')}
              className="text-xs border w-full rounded px-3 py-3 outline-none mb-3"
              type="text"
              placeholder="Ej. Juan Pérez"
            />
          </div>
          <div className="flex space-x-16">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Nivel educativo</p>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="prim2"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  checked={padre_nivel_educativo === 'Sin estudios '}
                  onChange={() =>
                    setValue('padre_nivel_educativo', 'Sin estudios')
                  }
                />
                Sin estudios
              </label>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="sec2"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  checked={padre_nivel_educativo === 'Basico'}
                  onChange={() => setValue('padre_nivel_educativo', 'Basico')}
                />
                Basico
              </label>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="sec2"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  checked={padre_nivel_educativo === 'Medio'}
                  onChange={() => setValue('padre_nivel_educativo', 'Medio')}
                />
                Medio
              </label>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="tec2"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  checked={padre_nivel_educativo === 'Tecnico'}
                  onChange={() =>
                    setValue('padre_nivel_educativo', 'Universitario')
                  }
                />
                Universitario
              </label>
            </div>
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">¿Labora actualmente?</p>
              <div className="flex items-center justify-around sm:justify-start gap-4">
                <label
                  className="flex items-center text-xs text-gray-400"
                  htmlFor="yes2"
                >
                  <input
                    className="mr-1.5"
                    type="radio"
                    checked={padre_trabaja === 'Si' && true}
                    onChange={() => setValue('padre_trabaja', 'Si')}
                  />
                  Sí
                </label>
                <label
                  className="flex items-center text-xs text-gray-400"
                  htmlFor="no2"
                >
                  <input
                    className="mr-1.5"
                    type="radio"
                    checked={padre_trabaja === 'No' && true}
                    onChange={() => setValue('padre_trabaja', 'No')}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex space-x-10">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Nombre de la Empresa</p>
              <input
                {...register('padre_lugar_trabajo')}
                className="text-xs border w-full rounded px-3 py-3 outline-none"
                type="text"
                placeholder="Ej. Banco Popular"
              />
            </div>
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Posición Ocupada</p>
              <input
                {...register('padre_funcion_trabajo')}
                className="text-xs border w-full rounded px-3 py-3 outline-none "
                type="text"
                placeholder="Ej. Abogado/a"
              />
            </div>
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Rango salarial</p>
            <Select
              options={arrOp}
              getOptionLabel={(item) => item.value}
              getOptionValue={(item) => item}
              value={{
                value:
                  padre_rango_salarial ||
                  user.socio_economico?.padre_rango_salarial,
              }}
              placeholder="Rango salarial"
              onChange={(item) => setValue('padre_rango_salarial', item.value)}
            />
          </div>
          <div className="md:col-span-2 mt-7 flex md:justify-end justify-center space-x-3">
            <button
              onClick={action}
              disabled={loading}
              className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
            >
              {loading ? 'Guardando...' : ' Guardar'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
