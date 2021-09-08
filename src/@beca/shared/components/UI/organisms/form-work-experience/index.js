import { GoPlus } from "react-icons/go";
export default function WorkExperience({ exprience }) {
  return (
    <>
      <div className=" py-3 m-auto grid grid-cols-1 gap-y-4">
        <span className="w-full bg-white grid gap-3 md:grid-cols-2 grid-cols-1 text-xs p-5">
          <div>
            <p className="mb-1.5 font-semibold">Nombre de la Empresa</p>
            <input
              className="text-xs border w-full rounded px-3 py-2 outline-none"
              type="text"
              name="carrera"
              id
              maxLength={11}
              minLength={11}
              placeholder="Ej. Banco Popular"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Teléfono de Contacto Empresa</p>
            <input
              className="text-xs border w-full rounded px-3 py-2 outline-none"
              type="text"
              name="institucion"
              id
              placeholder="809-000-0000"
            />
          </div>
          <div className="flex space-x-16">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Posición Ocupada</p>
              <input
                className="text-xs border w-full rounded px-3 py-2 outline-none"
                type="text"
                name="institucion"
                id
                placeholder="Ej. Desarrollador Web"
              />
            </div>
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Tipo de Contrato</p>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="fijo"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  name="contrato"
                  id="fijo"
                />
                Fijo / Indefinido
              </label>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="temp"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  name="contrato"
                  id="temp"
                />
                Temporal
              </label>
              <label
                className="flex items-center text-xs text-gray-400"
                htmlFor="pasante"
              >
                <input
                  className="mr-1.5"
                  type="radio"
                  name="contrato"
                  id="pasante"
                />
                Pasantía
              </label>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Fecha de ingreso</p>
              <input
                className="text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none"
                type="date"
                name="fechaingreso"
                id
              />
            </div>
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Fecha de salida</p>
              <input
                className="text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none"
                type="date"
                name="fechasalida"
                id
              />
              <label
                className="flex items-center text-xs text-gray-600 mt-1"
                htmlFor="actual"
              >
                <input
                  className="mr-1.5 mt-0.5"
                  type="checkbox"
                  name="actual"
                  id="actual"
                />
                Actualmente estoy laborando aquí
              </label>
            </div>
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Documentación</p>
            <input
              className="text-xs border w-full rounded px-3 py-2 outline-none"
              type="file"
              max={4}
              min={2}
              accept="application/pdf"
              name="indice"
              id
              placeholder="2.00 - 4.00"
            />
          </div>
          <div className="md:col-span-2 mt-7 flex md:justify-end justify-center space-x-3">
            <button className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800">
              Guardar
            </button>
            <button className="uppercase text-xs px-3 py-2 rounded-3xl bg-blue-900 text-white hover:bg-blue-800">
              {/* <img className="w-4" src="img/PngItem_679828.png" alt /> */}
              <GoPlus />
            </button>
          </div>
        </span>
      </div>
    </>
  );
}
