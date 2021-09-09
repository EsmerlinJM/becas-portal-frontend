import { formatDate } from "../../../../utils/format-date";
export default function FormEducation({ item }) {
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
              defaultValue={item.carrera}
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
              defaultValue={item.institucion}
              placeholder="Ej. Universidad APEC"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Fecha de ingreso</p>
              <input
                defaultValue={formatDate(item.fecha_entrada)}
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
                defaultValue={formatDate(item.fecha_entrada)}
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
              defaultValue={item.indice}
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
              <input
                checked={item.isBecado && true}
                className="mr-1.5"
                type="radio"
                name="becado"
                id="yes"
              />
              Sí
            </label>
            <label
              className="flex items-center text-xs text-gray-400 "
              htmlFor="no"
            >
              <input
                checked={!item.isBecado && true}
                className="mr-1.5"
                type="radio"
                name="becado"
                id="no"
              />
              No
            </label>
          </div>
        </span>
      </div>
    </>
  );
}
