import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";

import Search from "../../../../../../img/Buscar-CTA-blue.svg";
import qs from "querystring";

import { AiOutlineClear } from "react-icons/ai";

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

    setQuery(() => (params2.all ? params2.all : ""));
    history.push({
      pathname: "query-result",
      search: qs.stringify(newParams).replace("%3F", ""),
    });
  };

  useEffect(() => {
    const params = JSON.stringify(qp).replace("?", "");
    const params2 = JSON.parse(params);
    if (params2.search) return setQuery(() => params2.search);
    if (params2.all) return setQuery(() => params2.all);

    //eslint-disable-next-line
  }, []);
  return (
    <div className="flex items-center">
      <button
        onClick={onClear}
        className="outline-none  flex bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-500  py-2 px-4 border-b-4 border-blue-500 hover:border-blue-300 rounded-full mr-2"
      >
        <AiOutlineClear
          className="mr-1 text-blue-500 hover:text-white self-center"
          size={20}
        />
        Limpiar
      </button>
      <input
        className="outline-none text-gray-600  text-xs font-bold focus:border-blue-100 border rounded-3xl w-full p-3.5 pl-6 focus:placeholder-blue-100 placeholder-blue-800"
        name="user"
        type="text"
        required
        placeholder="¿Qué quieres estudiar?"
        maxLength="50"
        defaultValue={query}
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
