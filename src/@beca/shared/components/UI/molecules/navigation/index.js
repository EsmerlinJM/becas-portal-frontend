import { useHistory } from "react-router";

const obj = {
  name: "Resultados",
  path: "/query-result?id=3",
  parents: [{ name: "Inicio", path: "/" }],
};

export default function Navigation({ ob = obj }) {
  const pathname = window.location.pathname;
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
      className={`bg-gray-50 w-full flex ${
        pathname === "/query-result" ? "justify-end" : " justify-center"
      } p-4 shadow-md border-b-2 text-gray-400`}
    >
      <div className="w-3/4 flex justify-between mr-6">
        <p className="text-md ">{ob.name}</p>

        <span className="flex items-center">
          {ob.parents.map((rou) => (
            <p
              key={rou.path}
              onClick={() => redirect(rou.path)}
              className="text-sm mr-2 self-end transition delay-100 border-b-2 border-gray-50  hover:text-blue-800 hover:border-blue-800 cursor-pointer"
            >
              {rou.name}
              {" /"}
            </p>
          ))}
          <p className="text-sm self-end transition delay-100 border-b-2 border-gray-50 hover:text-blue-800  hover:border-blue-800 cursor-pointer ">
            {ob.name}{" "}
          </p>
        </span>
      </div>
    </div>
  );
}
