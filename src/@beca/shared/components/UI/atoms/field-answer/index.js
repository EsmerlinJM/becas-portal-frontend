import Select from 'react-select'

export default function FiledAnswer({
  type,
  name,
  canditate_answer,
  fieldId,
  data,
  required,
  onChange,
}) {
  const items = data && data.split(',')
  const arrAnswer =
    type === 'checkbox' && canditate_answer && canditate_answer.split(',')
  const objAnswer =
    arrAnswer && arrAnswer.reduce((acc, curr) => ({ ...acc, [curr]: curr }), {})

  const onSetValue = (target) => {
    const { value } = target
    let val = value

    if (type === 'checkbox' && arrAnswer) {
      if (arrAnswer.includes(val)) {
        const it = arrAnswer.filter((it) => it !== val)
        val = it.join(',')
      } else {
        val = [...(arrAnswer || []), val].join(',')
      }
    }

    onChange({ name: 'canditate_answer', value: val })
  }

  if (type === 'select') {
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
    )
  }

  if (type === 'checkbox') {
    return (
      <div className="flex my-4 flex-col xs:flex-col ms:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row ">
        {items.map((it, i) => (
          <div className="m-2" key={i}>
            <label
              className="flex items-center text-xs text-gray-400"
              htmlFor="yes"
            >
              <input
                className="mr-1.5"
                type="checkbox"
                checked={objAnswer && objAnswer[it]}
                onChange={() => onSetValue({ name, value: it })}
              />
              {it}
            </label>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'radio') {
    return (
      <div className="my-4 flex flex-col xs:flex-col ms:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row ">
        {items.map((it, i) => (
          <div className="mx-2" key={i}>
            <label className="flex text-xs text-gray-400" htmlFor="yes">
              <input
                name={name}
                className="mr-1.5"
                type="radio"
                checked={it.trim() === (canditate_answer || '').trim()}
                onChange={() => onSetValue({ name, value: it })}
              />
              {it}
            </label>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'file') {
    return (
      <div className="flex flex-col mx-2 my-2">
        <p className="mb-1.5 font-semibold text-xs ">{name}</p>
        <input
          type={type}
          name={name}
          onChange={({ target }) =>
            target.files &&
            target.files.length &&
            onSetValue({ value: target.files[0] })
          }
          className=" text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none "
        />
        {canditate_answer && (
          <a
            className="hover:border-blue-500 text-xs transition delay-75 border-b border-transparent text-blue-500 cursor-pointer"
            rel="noreferrer"
            href={canditate_answer}
            target="_blank"
          >
            Ver
          </a>
        )}
      </div>
    )
  }
  return (
    <div className="flex flex-col mx-2 my-2">
      <p className="mb-1.5 font-semibold text-xs ">{name}</p>
      <input
        type={type}
        name={name}
        value={canditate_answer}
        onChange={({ target }) => onSetValue(target)}
        className=" text-xs text-gray-400 border w-full rounded px-3 py-2 outline-none "
      />{' '}
    </div>
  )
}
