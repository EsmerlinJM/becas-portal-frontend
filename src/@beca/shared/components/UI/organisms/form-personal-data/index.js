import { useForm } from "react-hook-form";
import { formatDate } from "../../../../utils/format-date";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../../redux/slices/user/_actions";

import ProvinceSelect from "../../atoms/province-select";
import MunicipalitySelect from "../../atoms/municipality-by-province-select";
import CountrySelect from "../../atoms/country-select";

import toast from "react-hot-toast";

export default function FormPersonalData({ user, onClick }) {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country_id: user.country.id,
      contact_phone: user.contact_phone,
      document_id: user.document_id,
      last_name: user.last_name,
      name: user.name,
      municipality_id: user.municipality?.id,
      province_id: user.province?.id,
      address: user.address,
    },
  });

  const action = handleSubmit(async (data) => {
    if (!data.country_id) return toast.error("Seleccionar país");
    if (!data["province_id"]) data["province_id"] = 1;
    if (!data["municipality_id"]) data["municipality_id"] = 1;

    dispatch(await updateUser(data));
    // onClick && onClick(data);
  });

  const provinceId = watch("province_id");
  const municipalityId = watch("municipality_id");
  const countryId = watch("country_id");
  const gender = watch("genero");

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
              className={`text-xs border w-full rounded px-3 py-3 outline-none mb-3 ${
                errors.document_id ? "border-red-500" : ""
              }`}
              type="text"
              defaultValue={user.document_id}
              maxLength={11}
              minLength={11}
              placeholder="000-0000000-0"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Telefono</p>
            <input
              {...register("contact_phone")}
              className={`text-xs border w-full rounded px-3 py-3 outline-none mb-3`}
              type="text"
              name="passport"
              placeholder="8099973338"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Nombres</p>
            <input
              className={`text-xs border w-full rounded px-3 py-3 outline-none mb-3 ${
                errors.name ? "border-red-500" : ""
              }`}
              {...register("name", { required: true })}
              type="text"
              placeholder="Isbel Cristina"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Apellidos</p>
            <input
              type="text"
              placeholder="Bautista Durán"
              {...register("last_name", { required: true })}
              className={`text-xs border w-full rounded px-3 py-3 outline-none mb-3 ${
                errors.last_name ? "border-red-500" : ""
              }`}
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Fecha de nacimiento</p>
            <input
              defaultValue={formatDate(user.born_date)}
              {...register("born_date", { required: true })}
              className={`text-xs border w-full rounded px-3 py-3 outline-none mb-3 ${
                errors.born_date ? "border-red-500" : ""
              }`}
              type="date"
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Género</p>
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="fem"
            >
              <input
                {...register("genero", { required: true })}
                className="mr-1.5"
                type="radio"
                value="femenino"
                checked={gender === "femenino" || user.genero === "femenino"}
              />
              Femenino
            </label>
            <label
              className="flex items-center text-xs text-gray-400 mb-3"
              htmlFor="masc"
            >
              <input
                {...register("genero", { required: true })}
                className="mr-1.5"
                type="radio"
                value="masculino"
                checked={gender === "masculino" || user.genero === "masculino"}
              />
              Masculino
            </label>
          </div>
          <div className="self-center">
            <label className="mb-1.5 font-semibold">País</label>

            <CountrySelect
              id={countryId || user.country?.id}
              onSelect={(_, item) => setValue("country_id", item.id)}
            />
          </div>
          <div>
            <p className="mb-1.5 font-semibold">Dirección</p>
            <input
              {...register("address")}
              className={`text-xs border w-full rounded px-3 py-3 outline-none mb-3 ${
                errors.address ? "border-red-500" : ""
              }`}
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
