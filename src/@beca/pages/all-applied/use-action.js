import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllApplied } from '../../redux/slices/all-applied/_actions'
export default function useAction(id) {
  const dispatch = useDispatch()
  const { data, status } = useSelector((state) => state.applied.all)

  useEffect(() => {
    const fn = async () => {
      dispatch(await getAllApplied(id))
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
    id && fn()
    // eslint-disable-next-line
  }, []);

  return [{ data, status }]
}
