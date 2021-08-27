import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createMessage } from "../../../../../redux/slices/user/_actions";
import { isValidEmail } from "../../../../utils/validate-email";
import { toast } from "react-hot-toast";

export default function ApplyForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const action = handleSubmit((data) => {
    toast.promise(dispatch(createMessage(data)), {
      loading: "Enviando...",
      success: <b>Enviado correctamente!</b>,
      error: <b>Upss, algo salio mal.</b>,
    });

    setValue("name", "");
    setValue("email", "");
    setValue("message", "");
  });

  return (
    <div className="p-3">
      <div className="m-6  flex flex-col justify-center">
        <h2 className="text-blue-900 font-bold text-lg">Ayudanos a mejorar</h2>
        <p className="text-sm">
          Queremos saber si tienes sugerencias, dudas o comentarios de todo el
          sistema de becas y la plataforma.
        </p>
      </div>
      <div className="flex-col mt-8">
        <div className="flex flex-col mb-6">
          <div className="mb-3 flex flex-col">
            <input
              className={`rounded-3xl bg-blue-50 p border ${
                errors.name ? "border-red-600" : "border-blue-600"
              } bg-bl font-thin text-sm focus:outline-none border border-gray-300 px-6 py-3`}
              type="text"
              placeholder="Nombre Completo"
              {...register("name", {
                required: true,
                minLength: 6,
              })}
            />
            {errors.name?.type === "required" && (
              <span className="text-red-500 text-xs mt-1 ">
                Este campo es obligatorio
              </span>
            )}
            {errors.name?.type === "minLength" && (
              <span className="text-red-500 text-xs  mt-1">
                minimo 6 caracteres
              </span>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <input
              className={`rounded-3xl bg-blue-50 p-2.5 border ${
                errors.email ? "border-red-600" : "border-blue-600 "
              }  font-thin text-sm focus:outline-none border border-gray-300 px-6 py-3`}
              name="email"
              type="email"
              required
              minLength={6}
              placeholder="Correo Electrónico"
              {...register("email", {
                required: true,
                minLength: 6,
                validate: (email) => isValidEmail(email),
              })}
            />

            {errors.email?.type === "required" && (
              <span className="text-red-500 text-xs mt-1 ">
                Este campo es obligatorio
              </span>
            )}
            {errors.email?.type === "minLength" && (
              <span className="text-red-500 text-xs  mt-1">
                minimo 6 caracteres
              </span>
            )}
            {errors.email?.type === "validate" && (
              <span className="text-red-500 text-xs mt-1">
                email incorrecto
              </span>
            )}
          </div>

          <div className="mb-3 flex flex-col">
            <textarea
              className={`rounded-2xl bg-blue-50 border ${
                errors.message ? "border-red-600" : "border-blue-600 "
              } font-thin text-sm focus:outline-none border border-gray-300 px-6 py-3 h-32 max-h-32`}
              required
              minLength={10}
              placeholder="Escribe tu comentario..."
              {...register("message", { required: true, minLength: 10 })}
            />

            {errors.message?.type === "required" && (
              <span className="text-red-500 text-xs mt-1 ">
                Este campo es obligatorio
              </span>
            )}
            {errors.message?.type === "minLength" && (
              <span className="text-red-500 text-xs  mt-1">
                minimo 10 caracteres
              </span>
            )}
          </div>
          <input
            className="bg-blue-900 transition delay-75 submit text-white hover:bg-white border hover:border-blue-800 hover:text-blue-800 rounded-3xl mx-4 px-16 py-3.5 cursor-pointer"
            type="submit"
            value="ENVIAR"
            onClick={action}
          />
        </div>
      </div>
    </div>
  );
}
