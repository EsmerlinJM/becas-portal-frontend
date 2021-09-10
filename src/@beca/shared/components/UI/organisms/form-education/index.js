import { formatDate } from "../../../../utils/format-date";

export default function FormEducation({ item, onChange }) {
  const converterFile = async (files) => {
    // var file = files[0];
    // var r = new FileReader();
    // r.onload = function () {
    //   const rr = r.result;
    //   console.log(r);
    // onChange({ name: "certificado", value: "" });
    // };
  };
  return (
    <>
      <div className="py-3 m-auto grid grid-cols-1 gap-y-4">
        <span className="w-full bg-white grid gap-3 md:grid-cols-2 grid-cols-1 text-xs p-5">
          <div>
            <p className="mb-1.5 font-semibold">Carrera</p>
            <input
              className={`text-xs border w-full rounded px-3 py-2 outline-none border-gray-200`}
              type="text"
              name="carrera"
              placeholder="Ej. Ingeniería Civil"
              onChange={({ target }) => onChange(target)}
              value={item.carrera}
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Institución</p>
            <input
              name="institucion"
              value={item.institucion}
              onChange={({ target }) => onChange(target)}
              className={`text-xs border w-full rounded px-3 py-2 outline-none 
               border-gray-200
              `}
              type="text"
              placeholder="Ej. Universidad APEC"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Fecha de ingreso</p>
              <input
                name="fecha_entrada"
                value={formatDate(item.fecha_entrada)}
                onChange={({ target }) => onChange(target)}
                className={`text-xs border w-full rounded px-3 py-2 outline-none border-gray-200`}
                type="date"
              />
            </div>
            <div className="w-1/2">
              <p className="mb-1.5 font-semibold">Fecha de salida</p>
              <input
                name="fecha_salida"
                value={formatDate(item.fecha_salida)}
                onChange={({ target }) => onChange(target)}
                className="text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none "
                type="date"
              />
              <label
                className="flex items-center text-xs text-gray-600"
                htmlFor="actual"
              >
                <input
                  checked={!formatDate(item.fecha_salida)}
                  onChange={() => onChange({ name: "fecha_salida", value: "" })}
                  className="mr-1.5 mt-0.5"
                  type="checkbox"
                  name="actual"
                />
                Actualmente cursando
              </label>
            </div>
          </div>

          <div>
            <p className="mb-1.5 font-semibold">Índice académico</p>
            <input
              className={`text-xs border w-full rounded px-3 py-2 outline-none border-gray-200`}
              type="number"
              name="indice"
              value={item.indice}
              onChange={({ target }) => onChange(target)}
              max={4}
              min={2}
              placeholder="2.00 - 4.00"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Certificación de estudios</p>
            <input
              className="text-xs border w-full rounded px-3 py-2 outline-none"
              type="file"
              name="certificado"
              onChange={
                ({ target }) =>
                  target.files.length && converterFile(target.files)
                // onChange({
                //   name: "certificado",
                //   value: target.files[0],
                // })
              }
              // accept="application/pdf"
              placeholder="Certificado"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Becado</p>
            <label className="flex items-center text-xs text-gray-400">
              <input
                onChange={() => onChange({ name: "isBecado", value: true })}
                checked={item.isBecado}
                className="mr-1.5"
                type="radio"
              />
              Sí
            </label>
            <label className="flex items-center text-xs text-gray-400 ">
              <input
                onChange={() => onChange({ name: "isBecado", value: false })}
                checked={!item.isBecado}
                className="mr-1.5"
                type="radio"
              />
              No
            </label>
          </div>
        </span>
      </div>
    </>
  );
}
