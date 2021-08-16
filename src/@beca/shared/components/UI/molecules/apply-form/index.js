export default function ApplyForm() {
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
        <form className="flex flex-col mb-6">
          <input
            className="rounded-3xl bg-blue-50 p-2.5 border border-blue-600 bg-bl font-thin text-sm focus:outline-none border border-gray-300 px-6 py-3 mb-3"
            name="name"
            type="text"
            required
            placeholder="Nombre Completo"
          />
          <input
            className="rounded-3xl bg-blue-50 p-2.5 border border-blue-600 font-thin text-sm focus:outline-none border border-gray-300 px-6 py-3 mb-3"
            name="email"
            type="email"
            required
            autoComplete="current-password"
            placeholder="Correo Electrónico"
          />
          <textarea
            className="rounded-2xl bg-blue-50 border border-blue-600 font-thin text-sm focus:outline-none border border-gray-300 px-6 py-3 mb-3 h-32 max-h-32"
            name="comment"
            placeholder="Escribe tu comentario..."
            id
          />
          <input
            className="bg-blue-900 transition delay-75 submit text-white hover:bg-white border hover:border-blue-800 hover:text-blue-800 rounded-3xl m-4 px-16 py-3.5 cursor-pointer"
            type="submit"
            value="ENVIAR"
          />
        </form>
      </div>
    </div>
  );
}
