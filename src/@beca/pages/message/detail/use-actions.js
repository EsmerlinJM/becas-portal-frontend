import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOneMessage } from '../../../redux/slices/message/_actions'

export default function useActions(id) {
  const [res, setRes] = useState(false)

  const dispatch = useDispatch()
  const {
    all,
    one: { data },
  } = useSelector((state) => state.message)

  useEffect(() => {
    dispatch(setOneMessage(all.data.find((item) => item.id === +id)))
    // eslint-disable-next-line
  }, [])

  return [{ data, res }, { setRes }]
}
