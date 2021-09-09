import Select from "react-select";

export default function FiledAnswer({ type, name, fieldId, data, required }) {
  const items = data && data.split(",");

  if (type === "select") {
    return (
      <div className="m-2">
        <p className="mb-1.5 text-xs font-semibold">{name}</p>
        <Select
          options={items.map((it) => ({ name: it }))}
          getOptionLabel={(item) => item.name}
        />
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div className="flex my-4">
        {items.map((it) => (
          <div className="m-2">
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="yes"
            >
              <input className="mr-1.5" type="checkbox" />
              {it}
            </label>
          </div>
        ))}
      </div>
    );
  }

  if (type === "radio") {
    return (
      <div className="my-4 flex">
        {items.map((it) => (
          <div className="mx-2">
            <label className="flex text-xs text-gray-400" htmlFor="yes">
              <input className="mr-1.5" type="radio" name="becado" id="yes" />
              {it}
            </label>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col mx-2 my-2">
      <p className="mb-1.5 font-semibold text-xs ">{name}</p>
      <input
        type={type}
        className=" text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none "
      />{" "}
    </div>
  );
}
