import { useEffect, useState } from 'react'

export default function GradeBlock({ items }) {
  const [buffer, setBuffer] = useState({
    items: [],
    average: 0,
  })

  useEffect(() => {
    let sum = 0
    let count = 0

    const mapping = items.map((it) => {
      count += 1
      sum += it.calificacion
      return { ...it }
    })
    const average = (sum / count).toFixed(1)
    setBuffer({ items: mapping, average })
    // eslint-disable-next-line
  }, [items])

  return (
    <div className="shadow">
      <div className="text-sm bg-blue-900 text-white flex justify-between flex-wrap items-center h-20  px-4">
        <p>Historial Académico </p>
        <p className="font-bold"> {buffer.average} </p>
      </div>
      <div>
        {buffer.items.map((it) => (
          <div
            key={it.id}
            className="flex justify-between flex-wrap border h-16 items-center px-4 text-xs"
          >
            <p>{it.periodo} </p>
            <p className="font-bold">{it.calificacion} </p>
          </div>
        ))}
      </div>
    </div>
  )
}
