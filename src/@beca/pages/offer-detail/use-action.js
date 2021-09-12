import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getOneOfert } from '../../redux/slices/ofert/_actions'

export default function useAction() {
  const { id } = useParams();
  const { data, status } = useSelector((state) => state.offers.one);
  const { data: message } = useSelector((state) => state.announcement.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      dispatch(await getOneOfert(id))
    }
    id && fn()
  }, [id, dispatch])

  return [{ data, status, message }];
}
