import { useForm } from "react-hook-form";
import ProvinceSelect from "../../atoms/province-select";
import MunicipalitySelect from "../../atoms/municipality-by-province-select";
import CountrySelect from "../../atoms/country-select";
import { formatDate } from "../../../../utils/format-date";

export default function FormPersonalData({ user, onClick }) {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    // formState: { errors },
  } = useForm();
  const action = handleSubmit((data) => {
    console.log(data, "jiji");
    // onClick(data);
  });
  const provinceId = watch("province_id");
  const municipalityId = watch("municipality_id");
  const countryId = watch("country_id");

  return (
    <>
      <div className="px-2 py-3 m-auto grid grid-cols-1 gap-y-4">
        <span className="w-full bg-white grid gap-3 md:grid-cols-2 grid-cols-1 text-xs p-5">
          <div>
            <p className="mb-1.5 font-semibold">
              Número de cédula de identidad
            </p>
            <input
              {...register("document_id", { required: true })}
              className="text-xs border w-full rounded px-3 py-3 outline-none mb-3"
              type="text"
              name="cedula"
              defaultValue={user.document_id}
              maxLength={11}
              minLength={11}
              placeholder="000-0000000-0"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Telefono</p>
            <input
              defaultValue={user.contact_phone}
              {...register("contact_phone")}
              className="text-xs border w-full rounded px-3 py-3 outline-none mb-3"
              type="text"
              name="passport"
              id
              placeholder="8099973338"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Nombres</p>
            <input
              defaultValue={user.name}
              {...register("name", { required: true })}
              className="text-xs border w-full rounded px-3 py-3 outline-none mb-3"
              type="text"
              name="nombre"
              placeholder="Isbel Cristina"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Apellidos</p>
            <input
              defaultValue={user.last_name}
              {...register("last_name", { required: true })}
              className="text-xs border w-full rounded px-3 py-3 outline-none mb-3"
              type="text"
              name="apellido"
              placeholder="Bautista Durán"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Fecha de nacimiento</p>
            <input
              defaultValue={formatDate(user.born_date)}
              {...register("born_date", { required: true })}
              className="text-xs text-gray-400 border w-full rounded px-3 py-3 outline-none mb-3"
              type="date"
            />
          </div>
          {/* <div>
            <p className="mb-1.5 font-semibold">Nacionalidad</p>
            <input
              defaultValue={user.nacionalidad}
              className="text-xs border w-full rounded px-3 py-3 outline-none mb-3"
              type="text"
              name="nacionalidad"
              placeholder="República Dominicana"
            />
          </div> */}

          <div className="self-center">
            <label className="mb-1.5 font-semibold">País</label>

            <CountrySelect
              id={countryId || user.country.id}
              onSelect={(_, item) => setValue("country_id", item.id)}
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Dirección</p>
            <input
              defaultValue={user.address}
              className="text-xs border w-full rounded px-3 py-3 outline-none mb-3"
              type="text"
              name="address"
              placeholder="Dirección"
            />
          </div>
          {(countryId ? +countryId : +user.country?.id) === 62 && (
            <>
              <div className="self-center">
                <label className="mb-1.5 font-semibold">Pronvincia</label>
                <ProvinceSelect
                  id={provinceId || user.province?.id}
                  onSelect={(_, item) => setValue("province_id", item.id)}
                />
              </div>

              <div className="self-center">
                <label className="mb-1.5 font-semibold">Municipio</label>
                <MunicipalitySelect
                  id={municipalityId}
                  provinceId={provinceId || user.province?.id}
                  onSelect={(_, item) => setValue("municipality_id", item.id)}
                />
              </div>
            </>
          )}

          {/* <div>
            <p className="mb-1.5 font-semibold">Género</p>
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="fem"
            >
              <input
                defaultValue={user.genero}
                {...register("genero", { required: true })}
                className="mr-1.5"
                type="radio"
                name="gender"
                id="fem"
              />
              Femenino
            </label>
            <label
              className="flex items-center text-xs text-gray-400 mb-3"
              htmlFor="masc"
            >
              <input
                defaultValue={user.born_date}
                {...register("genero", { required: true })}
                className="mr-1.5"
                type="radio"
                name="gender"
                id="masc"
              />
              Masculino
            </label>
          </div> */}
          {/* <div>
            <p className="mb-1.5 font-semibold">Estado Civil</p>
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="solt"
            >
              <input className="mr-1.5" type="radio" name="estado" id="solt" />
              Soltero/a
            </label>
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="casado"
            >
              <input
                className="mr-1.5"
                type="radio"
                name="estado"
                id="casado"
              />
              Casado/a
            </label>
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="divor"
            >
              <input className="mr-1.5" type="radio" name="estado" id="divor" />
              Divorciado/a
            </label>
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="viudo"
            >
              <input className="mr-1.5" type="radio" name="estado" id="viudo" />
              Viudo/a
            </label>
          </div> */}
          <div className="md:col-span-2 mt-7 flex md:justify-end justify-center">
            <button
              onClick={action}
              className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
            >
              Guardar
            </button>
          </div>
        </span>
      </div>
    </>
  );
}
