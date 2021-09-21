import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOneBeca } from '../../../redux/slices/beca/_actions'

export default function useAction() {
  const dispatch = useDispatch()
  const {
    all,
    one: { data },
  } = useSelector((state) => state.beca)

  const onSetOne = (item) => {
    const finded = all.data.find((it) => it.id === item.becaId)
    dispatch(setOneBeca(finded))
  }

  useEffect(() => {
    if (!all.data.length) return
    dispatch(setOneBeca(all.data[0]))
  }, [all.data])

  return [{ data, all: all.data }, { onSetOne }]
}
