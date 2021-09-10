import { formatDate } from "../../../../utils/format-date";

export default function WorkExperience({ item, onChange }) {
  return (
    <>
      <div className=" py-3 m-auto grid grid-cols-1 gap-y-4">
        <span className="w-full bg-white grid gap-3 md:grid-cols-2 grid-cols-1 text-xs p-5">
          <div>
            <p className="mb-1.5 font-semibold">Nombre de la Empresa</p>
            <input
              onChange={({ target }) => onChange(target)}
              className="text-xs border w-full rounded px-3 py-2 outline-none"
              name="empresa"
              value={item.empresa}
              placeholder="Ej. Banco Popular"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Teléfono de Contacto Empresa</p>
            <input
              className="text-xs border w-full rounded px-3 py-2 outline-none"
              type="text"
              name="telefono"
              value={item.telefono}
              onChange={({ target }) => onChange(target)}
              placeholder="809-000-0000"
            />
          </div>
          <div className="flex space-x-16">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Posición Ocupada</p>
              <input
                className="text-xs border w-full rounded px-3 py-2 outline-none"
                type="text"
                name="posicion"
                value={item.posicion}
                onChange={({ target }) => onChange(target)}
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
                  onChange={() =>
                    onChange({ name: "tipo_contrato", value: "Indefinido" })
                  }
                  checked={
                    item.tipo_contrato === "Indefinido" ||
                    item.tipo_contrato === "Fijo"
                  }
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
                  onChange={() =>
                    onChange({ name: "tipo_contrato", value: "Temporal" })
                  }
                  checked={item.tipo_contrato === "Temporal"}
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
                  onChange={() =>
                    onChange({ name: "tipo_contrato", value: "Pasantia" })
                  }
                  checked={item.tipo_contrato === "Pasantia"}
                />
                Pasantía
              </label>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Fecha de ingreso</p>
              <input
                name="fecha_entrada"
                value={formatDate(item.fecha_entrada)}
                onChange={({ target }) => onChange(target)}
                className="text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none"
                type="date"
              />
            </div>
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Fecha de salida</p>
              <input
                name="fecha_salida"
                value={formatDate(item.fecha_salida)}
                onChange={({ target }) => onChange(target)}
                className="text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none"
                type="date"
              />
              <label
                className="flex items-center text-xs text-gray-600 mt-1"
                htmlFor="actual"
              >
                <input
                  className="mr-1.5 mt-0.5"
                  type="checkbox"
                  value=""
                  name="fecha_salida"
                  checked={!item.fecha_salida}
                  onChange={({ target }) => onChange(target)}
                />
                Actualmente estoy laborando aquí
              </label>
            </div>
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Documento</p>
            <input
              name="documento"
              onChange={({ target }) =>
                onChange({ name: target.name, value: target.files[0] })
              }
              className="text-xs border w-full rounded px-3 py-2 outline-none"
              type="file"
              accept="image/*,.pdf"
              placeholder="Documentación"
            />
            {item.documento_url && (
              <a
                className="hover:border-blue-500 transition delay-75 border-b border-transparent text-blue-500 cursor-pointer"
                rel="noreferrer"
                href={item.documento_url}
                target="_blank"
              >
                {" "}
                Ver documento{" "}
              </a>
            )}
          </div>
        </span>
      </div>
    </>
  );
}
