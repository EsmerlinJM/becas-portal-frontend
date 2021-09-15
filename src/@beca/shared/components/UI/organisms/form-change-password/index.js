import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { changePassword } from "../../../../services/user";

export default function FormChangePassword() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const action = handleSubmit((data) => {
    toast.promise(changePassword(data), {
      loading: "Guardando...",
      success: () => {
        setValue("password", "");
        setValue("current_password", "");
        setValue("password_confirmation", "");
        return <b>Guardado correctamente...</b>;
      },
      error: ({ data }) => {
        return <b>{data.message || "No se ha guadado correctamente!"}</b>;
      },
    });
  });

  return (
    <>
      <div className="w-full bg-white grid gap-4 md:grid-cols-1 grid-cols-1 text-xs p-5">
        <div>
          <p className="mb-1.5 font-semibold">Contraseña actual</p>
          <input
            className={`${
              errors.current_password ? " border-red-300" : " border-gray-300"
            }  font-thin text-sm focus:outline-none border rounded px-6 py-3 w-full`}
            type="password"
            placeholder="Contraseña actual"
            {...register("current_password", { required: true })}
          />
          <div className="mb-3">
            {errors.current_password && (
              <p className="text-red-300"> Este campo es requerido</p>
            )}
          </div>
        </div>

        <div>
          <p className="mb-1.5 font-semibold">Nueva contraseña</p>
          <input
            className={`${
              errors.password ? " border-red-300" : " border-gray-300"
            }  font-thin text-sm focus:outline-none border rounded px-6 py-3 w-full`}
            type="password"
            placeholder="Nueva contraseña"
            {...register("password", { required: true })}
          />
          <div className="mb-3">
            {errors.password && (
              <p className="text-red-300"> Este campo es requerido</p>
            )}
          </div>
        </div>

        <div>
          <p className="mb-1.5 font-semibold">Confirmar nueva contraseña</p>
          <input
            className={`${
              errors.password_confirmation
                ? " border-red-300"
                : " border-gray-300"
            }  font-thin text-sm focus:outline-none border rounded px-6 py-3 w-full`}
            type="password"
            placeholder="Confirmar contraseña"
            {...register("password_confirmation", {
              required: true,
              validate: (confirmPass) => confirmPass === password,
            })}
          />
          <div className="mb-3">
            {errors.password_confirmation?.type === "required" && (
              <p className="text-red-300"> Este campo es requerido</p>
            )}
            {errors.password_confirmation?.type === "validate" && (
              <p className="text-red-300"> Las contraseñas no coinciden</p>
            )}
          </div>
        </div>
        {password && (
          <button
            onClick={action}
            className="fadeIn rounded-3xl transition delay-75 azulbg text-white hover:bg-white border border-blue-900 hover:border-blue-800 hover:text-blue-800  px-16 py-3 cursor-pointer uppercase"
          >
            Guardar
          </button>
        )}
      </div>
    </>
  );
}
