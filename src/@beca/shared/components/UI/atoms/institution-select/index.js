import Select from 'react-select'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllInstitution } from '../../../../../redux/slices/institution/_actions'
import { removeAccents } from '../../../../utils/remove-accents'

export default function InstitutionSelect({ onSelect, id }) {
  const [selected, setSelected] = useState({})

  const { data, status } = useSelector((state) => state.institution.all)
  const dispatch = useDispatch()

  useEffect(() => {
    const fn = async () => dispatch(await getAllInstitution())
    !data.length && fn()
  }, [data.length, dispatch])

  useEffect(() => {
    const finded =
      id &&
      data.find(
        (item) =>
          parseInt(item.id) === parseInt(id) ||
          removeAccents(item.name).includes(id),
      )
    finded && setSelected(finded)
    // eslint-disable-next-line
  }, [id, onSelect, status]);

  if (status === 'loading') return <>Loading...</>
  return (
    <Select
      options={data}
      value={Object.keys(selected).length && id ? selected : null}
      placeholder="Seleccionar"
      getOptionValue={(item) => item}
      getOptionLabel={(item) => item.name}
      onChange={(item) => onSelect('institution', item)}
    />
  )
}
