import { useHistory } from "react-router";

const obj = {
  name: "Resultados",
  path: "/query-result?all=a",
  parents: [{ name: "Inicio", path: "/" }],
};

export default function Navigation({ ob = obj }) {
  const { pathname } = window.location;
  const history = useHistory();

  const redirect = (name) => {
    if (name === "isGoBack") {
      history.goBack();
      return;
    }
    history.push(name);
  };

  return (
    <div
      className={`bg-gray-50 flex ${
        pathname === "/query-result" ? "justify-end" : " justify-center"
      } p-4 shadow border-b-2 text-gray-400 h-12`}
    >
      <div className="w-4/5 flex justify-between items-center">
        <p className="text-md ">{ob.name}</p>
        <span className="flex truncate">
          {ob.parents.map((rou) => (
            <p
              key={rou.path}
              onClick={() => redirect(rou.path)}
              className="text-sm mr-2 self-end transition delay-100 border-b-2 border-gray-50  hover:text-blue-800 hover:border-blue-800 cursor-pointer "
            >
              {rou.name}
              {" /"}
            </p>
          ))}
          <p className="text-sm self-end transition delay-100 border-b-2 border-gray-50 hover:text-blue-800  hover:border-blue-800 cursor-pointer  truncate">
            {ob.name}
          </p>
        </span>
      </div>
    </div>
  );
}
