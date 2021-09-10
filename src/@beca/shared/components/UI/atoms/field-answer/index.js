import Select from "react-select";

export default function FiledAnswer({
  type,
  name,
  canditate_answer,
  fieldId,
  data,
  required,
  onChange,
}) {
  const items = data && data.split(",");

  const onSetValue = (target) => {
    const { value } = target;
    onChange({ name: "canditate_answer", value });
  };

  if (type === "select") {
    return (
      <div className="m-2">
        <p className="mb-1.5 text-xs font-semibold">{name}</p>
        <Select
          options={items.map((it) => ({ name: it }))}
          getOptionLabel={(item) => item.name}
          value={{ name: canditate_answer }}
          getOptionValue={(item) => item}
          onChange={(item) => onSetValue({ name, value: item.name })}
        />
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div className="flex my-4">
        {items.map((it, i) => (
          <div className="m-2" key={i}>
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="yes"
            >
              <input
                className="mr-1.5"
                type="checkbox"
                checked={it === canditate_answer}
                onChange={() => onSetValue({ name, value: it })}
              />
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
        {items.map((it, i) => (
          <div className="mx-2" key={i}>
            <label className="flex text-xs text-gray-400" htmlFor="yes">
              <input
                name={name}
                className="mr-1.5"
                type="radio"
                checked={it === canditate_answer}
                onChange={() => onSetValue({ name, value: it })}
              />
              {it}
            </label>
          </div>
        ))}
      </div>
    );
  }

  if (type === "file") {
    return (
      <div className="flex flex-col mx-2 my-2">
        <p className="mb-1.5 font-semibold text-xs ">{name}</p>
        <input
          type={type}
          name={name}
          // value={canditate_answer}

          onChange={({ target }) =>
            target.files &&
            target.files.length &&
            onSetValue({ value: target.files[0] })
          }
          className=" text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none "
        />{" "}
      </div>
    );
  }
  console.log(type);
  return (
    <div className="flex flex-col mx-2 my-2">
      <p className="mb-1.5 font-semibold text-xs ">{name}</p>
      <input
        type={type}
        name={name}
        value={canditate_answer}
        onChange={({ target }) => onSetValue(target)}
        className=" text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none "
      />{" "}
    </div>
  );
}
