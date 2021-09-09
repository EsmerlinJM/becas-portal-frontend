import { formatDate } from "../../../../utils/format-date";

export default function WorkExperience({ item }) {
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
              defaultValue={item.empresa}
              placeholder="Ej. Banco Popular"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Teléfono de Contacto Empresa</p>
            <input
              className="text-xs border w-full rounded px-3 py-2 outline-none"
              type="text"
              name="institucion"
              defaultValue={item.telefono}
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
                defaultValue={item.posicion}
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
                  checked={item.tipo_contrato === "Indefinido"}
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
                defaultValue={formatDate(item.fecha_entrada)}
                className="text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none"
                type="date"
                name="fechaingreso"
              />
            </div>
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Fecha de salida</p>
              <input
                defaultValue={formatDate(item.fecha_salida)}
                className="text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none"
                type="date"
                name="fechasalida"
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
                  checked={!item.fecha_salida}
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
              accept="application/pdf"
              name="indice"
              placeholder="Documentación"
            />
          </div>
        </span>
      </div>
    </>
  );
}
