import Select from 'react-select'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { searchByProvince } from '../../../../../redux/slices/municipality/_actions'
import { removeAccents } from '../../../../utils/remove-accents'

export default function MunicipalitySelect({ onSelect, id, provinceId }) {
  const [selected, setSelected] = useState({})

  const { data, status } = useSelector((state) => state.municipality.searchBy)
  const dispatch = useDispatch()

  useEffect(() => {
    const fn = async () => dispatch(await searchByProvince(provinceId))

    provinceId && fn()
    //eslint-disable-next-line
  }, [dispatch, provinceId])

  useEffect(() => {
    const finded =
      id &&
      data.find(
        (item) =>
          parseInt(item.id) === parseInt(id) ||
          removeAccents(item.name).includes(id),
      )

    if (finded) {
      return finded && setSelected(finded)
    }
    setSelected(data && data.length ? data[0] : {})
    // eslint-disable-next-line
  }, [id, onSelect, status])

  if (status === 'loading') return <>Loading...</>
  return (
    <Select
      options={data}
      value={Object.keys(selected).length && id ? selected : null}
      placeholder="Seleccionar municipio"
      getOptionValue={(item) => item}
      getOptionLabel={(item) => item.name}
      onChange={(item) => onSelect('municipio', item)}
    />
  )
}
