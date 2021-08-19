import { useState } from "react";
import { useLocation, useHistory } from "react-router";

import Search from "../../../../../../img/Buscar-CTA-blue.svg";
import qs from "querystring";

export default function InputSearchResult() {
  const [query, setQuery] = useState(null);
  const search = useLocation().search;
  const qp = qs.parse(search);
  const history = useHistory();

  const onSearch = () => {
    const newParams = {
      ...qp,
      search: query,
    };

    history.push({
      pathname: "query-result",
      search: qs.stringify(newParams).replace("%3F", ""),
    });
  };

  const onClear = () => {
    const params = JSON.stringify(qp).replace("?", "");
    const params2 = JSON.parse(params);
    const newParams = params2["id"]
      ? {
          id: params2.id,
        }
      : { all: params2.all };

    history.push({
      pathname: "query-result",
      search: qs.stringify(newParams).replace("%3F", ""),
    });
  };

  return (
    <div className="flex items-center">
      <button
        onClick={onClear}
        className="outline-none  bg-red-500 hover:bg-yellow-400 text-white  py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded-full mr-2"
      >
        Limpiar
      </button>
      <input
        className="outline-none text-gray-600  text-xs font-bold focus:border-blue-100 border rounded-3xl w-full p-3.5 pl-6 focus:placeholder-blue-100 placeholder-blue-800"
        name="user"
        type="text"
        required
        placeholder="¿Qué quieres estudiar?"
        maxlength="50"
        onKeyPress={({ key }) => key === "Enter" && onSearch()}
        onChange={({ target }) => setQuery(target.value)}
      />

      <input
        onClick={onSearch}
        className=" outline-none w-11 -ml-11 hover:scale-x-100"
        src={Search}
        type="image"
        alt="img"
        value="Consultar"
      />
    </div>
  );
}
