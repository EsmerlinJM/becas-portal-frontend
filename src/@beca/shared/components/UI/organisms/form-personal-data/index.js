import { useForm } from "react-hook-form";
import { formatDate } from "../../../../utils/format-date";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../../redux/slices/user/_actions";

import ProvinceSelect from "../../atoms/province-select";
import MunicipalitySelect from "../../atoms/municipality-by-province-select";
import CountrySelect from "../../atoms/country-select";

import { toast } from "react-hot-toast";
import { updateProfile } from "../../../../services/user";

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
      country_id: user.country?.id,
      contact_phone: user.contact_phone,
      document_id: user.document_id,
      last_name: user.last_name,
      name: user.name,
      municipality_id: user.municipality?.id,
      province_id: user.province?.id,
      address: user.address,
      born_date: formatDate(user.born_date || ""),
    },
  });
  const onSubmit = async (data) => {
    if (!data.country_id) return toast.error("Seleccionar país");
    if (!data["province_id"]) data["province_id"] = 1;
    if (!data["municipality_id"]) data["municipality_id"] = 1;

    const payload = await updateProfile(data);
    dispatch(setUser(payload));
    toast.success("Guardado correctamente!");
  };

  const provinceId = watch("province_id");
  const municipalityId = watch("municipality_id");
  const countryId = watch("country_id");
  const gender = watch("genero");

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white grid gap-4 grid-cols-1 md:grid-cols-2  text-xs p-5"
      >
        <div>
          <p className="mb-1.5 font-semibold">Número de cédula de identidad</p>
          <input
            {...register("document_id", {
              required: true,
              validate: (cedula) => cedula.length === 11,
            })}
            className={` border w-full rounded px-3 py-3 outline-none ${
              errors.document_id ? "border-red-500" : ""
            }`}
            type="number"
            defaultValue={user.document_id}
            placeholder="00000000000"
          />
          <div className="mb-3">
            {errors.document_id?.type === "validate" && (
              <p className="text-red-300">Debes ingresar una cédula válida.</p>
            )}
          </div>
        </div>
        <div>
          <p className="mb-1.5 font-semibold">Teléfono móvil</p>
          <input
            {...register("contact_phone", { min: 0 })}
            className={` border w-full rounded px-3 py-3 outline-none ${
              errors.contact_phone ? "border-red-500" : ""
            }`}
            type="number"
            placeholder="8099973338"
            defaultValue={user.contact_phone}
          />
          <div className="mb-3">
            {errors.contact_phone?.type && (
              <p className="text-red-300">Debes ingresar un teléfono válido.</p>
            )}
          </div>
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
            defaultValue={user.name}
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
            defaultValue={user.last_name}
          />
        </div>
        <div>
          <p className="mb-1.5 font-semibold">Fecha de nacimiento</p>
          <input
            {...register("born_date", { required: true })}
            className={`text-xs border w-full rounded px-3 py-3 outline-none mb-3 ${
              errors.born_date ? "border-red-500" : ""
            }`}
            defaultValue={formatDate(user.born_date)}
            type="date"
          />
        </div>
        <div className="">
          <p className="mb-1.5 font-semibold">Género</p>
          <div className="flex items-center justify-around py-3">
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="fem"
            >
              <input
                {...register("genero", { required: true })}
                className="mr-1.5"
                type="radio"
                value="femenino"
                checked={
                  gender ? gender === "femenino" : user.genero === "femenino"
                }
              />
              Femenino
            </label>
            <label
              className="flex items-center text-xs text-gray-400 "
              htmlFor="masc"
            >
              <input
                {...register("genero", { required: true })}
                className="mr-1.5"
                type="radio"
                value="masculino"
                checked={
                  gender ? gender === "masculino" : user.genero === "masculino"
                }
              />
              Masculino
            </label>
          </div>
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
            placeholder="Dirección"
            defaultValue={user.address}
          />
        </div>
        {(countryId ? +countryId : +user.country?.id) === 62 && (
          <>
            <div className="self-center">
              <label className="mb-1.5 font-semibold">Provincia</label>
              <ProvinceSelect
                id={provinceId || user.province?.id}
                onSelect={(_, item) => setValue("province_id", item.id)}
              />
            </div>

            <div className="self-center">
              <label className="mb-1.5 font-semibold">Municipio</label>
              <MunicipalitySelect
                id={municipalityId || user.municipality?.id}
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
          <button className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800">
            Guardar
          </button>
        </div>
      </form>
    </>
  );
}
