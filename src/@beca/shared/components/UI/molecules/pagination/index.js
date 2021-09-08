export default function Pagination({ active, onSelectScreen, screens }) {
  return (
    <div className="flex  justify-end ">
      <p className=" self-center mr-4">
        Página {active.toLocaleString()} de {screens.toLocaleString()}{" "}
      </p>
      <button
        className="outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out mr-2"
        onClick={() => active !== 1 && onSelectScreen(active - 1)}
      >
        Atras{" "}
      </button>
      <button
        className="outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        onClick={() => !(screens <= active) && onSelectScreen(active + 1)}
      >
        Seguiente{" "}
      </button>
    </div>
  );
}
