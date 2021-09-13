import { useState, useEffect, useRef } from 'react'
import { useLocation, useHistory } from 'react-router'

import qs from 'querystring'

import { AiOutlineClear } from 'react-icons/ai'
import Search from '../../../../../../img/Buscar-CTA-blue.svg'

export default function InputSearchResult() {
  const inpSearch = useRef()
  const [query, setQuery] = useState(null)
  const { search } = useLocation()
  const qp = qs.parse(search)
  const history = useHistory()

  const onSearch = () => {
    const newParams = {
      ...qp,
      search: query,
    }

    history.push({
      pathname: 'query-result',
      search: qs.stringify(newParams).replace('%3F', ''),
    })
  }

  const onClear = () => {
    const params = JSON.stringify(qp).replace('?', '')
    const params2 = JSON.parse(params)

    const newParams = params2.id
      ? {
          id: params2.id,
        }
      : { all: params2.all }

    setQuery(() => (params2.all ? params2.all : ''))
    history.push({
      pathname: 'query-result',
      search: qs.stringify(newParams).replace('%3F', ''),
    })

    inpSearch.current.value = ''
  }

  useEffect(() => {
    const params = JSON.stringify(qp).replace('?', '')
    const params2 = JSON.parse(params)
    if (params2.search) return setQuery(() => params2.search)
    if (params2.all) return setQuery(() => params2.all)

    // eslint-disable-next-line
  }, [])
  return (
    <div className="flex items-center">
      <button
        onClick={onClear}
        className="px-4 py-2 flex rounded-md text-sm font-medium border-b-2 focus:outline focus:ring transition text-white azulbg border-azulbg hover:bg-blue-800  mr-2"
      >
        <AiOutlineClear
          className="mr-1 text-white hover:text-white self-center"
          size={20}
        />
        Limpiar
      </button>
      <input
        className="outline-none text-gray-600  text-xs font-bold focus:border-blue-100 border rounded-3xl w-full p-3.5 pl-6 focus:placeholder-azul-300 placeholder-azul"
        name="user"
        type="text"
        required
        placeholder="¿Qué quieres estudiar?"
        maxLength="50"
        defaultValue={query}
        ref={inpSearch}
        onKeyPress={({ key }) => key === 'Enter' && onSearch()}
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
  )
}
