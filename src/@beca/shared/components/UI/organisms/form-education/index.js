import { GoPlus } from "react-icons/go";
export default function FormEducation({ education }) {
  return (
    <>
      <div className="py-3 m-auto grid grid-cols-1 gap-y-4">
        <span className="w-full bg-white grid gap-3 md:grid-cols-2 grid-cols-1 text-xs p-5">
          <div>
            <p className="mb-1.5 font-semibold">Carrera</p>
            <input
              className="text-xs border w-full rounded px-3 py-2 outline-none"
              type="text"
              name="carrera"
              id
              maxLength={11}
              minLength={11}
              placeholder="Ej. Ingeniería Civil"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Institución</p>
            <input
              className="text-xs border w-full rounded px-3 py-2 outline-none "
              type="text"
              name="institucion"
              id
              placeholder="Ej. Universidad APEC"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Fecha de ingreso</p>
              <input
                className="text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none "
                type="date"
                name="fechaingreso"
                id
              />
            </div>
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Fecha de salida</p>
              <input
                className="text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none "
                type="date"
                name="fechasalida"
                id
              />
              <label
                className="flex items-center text-xs text-gray-600"
                htmlFor="actual"
              >
                <input
                  className="mr-1.5 mt-0.5"
                  type="checkbox"
                  name="actual"
                  id="actual"
                />
                Actualmente cursando
              </label>
            </div>
          </div>

          <div>
            <p className="mb-1.5 font-semibold">Índice académico</p>
            <input
              className="text-xs border w-full rounded px-3 py-2 outline-none "
              type="number"
              max={4}
              min={2}
              name="indice"
              id
              placeholder="2.00 - 4.00"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">
              Certificación de estudios (.pdf)
            </p>
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
          <div>
            <p className="mb-1.5 font-semibold">Becado</p>
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="yes"
            >
              <input className="mr-1.5" type="radio" name="becado" id="yes" />
              Sí
            </label>
            <label
              className="flex items-center text-xs text-gray-400 "
              htmlFor="no"
            >
              <input className="mr-1.5" type="radio" name="becado" id="no" />
              No
            </label>
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
