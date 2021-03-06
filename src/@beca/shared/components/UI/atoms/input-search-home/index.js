import { useState } from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-hot-toast'
import Buscar_CTA_BLUE from '../../../../../../img/Buscar-CTA-blue.svg'
import Buscar_CTA from '../../../../../../img/Buscar-CTA.svg'

export default function InputSearchHome({
  placeholder = '¿Qué quieres estudiar?',
  widthImg = 'w-11',
  heightInput = '',
  isHeader = false,
  widthInput = 'w-96',
  mlImg_ = '-ml-9',
}) {
  const [query, setQuery] = useState(null)
  const history = useHistory()

  const onSearch = () => {
    if (query && query.length > 5) {
      history.push(`/query-result?all=${query}`)
      return
    }
    query?.length <= 5 && toast.error('Mínimo 6 caracteres')
  }

  return (
    <div className="flex items-center">
      <input
        className={`${heightInput} outline-none border rounded-3xl ${widthInput} py-3.5 px-6 focus:placeholder-blue-100 placeholder-blue-900 text-xs font-bold`}
        name="user"
        type="text"
        required
        placeholder={placeholder}
        defaultValue={query}
        onKeyPress={({ key }) => key === 'Enter' && onSearch()}
        onChange={({ target }) => setQuery(() => target.value)}
        maxLength={50}
      />

      <input
        className={`${widthImg} ${mlImg_}  text-black hover:fill-current hover:text-black`}
        src={isHeader ? Buscar_CTA_BLUE : Buscar_CTA}
        type="image"
        alt="hola"
        placeholder="Consultar"
        onClick={onSearch}
      />
    </div>
  )
}
