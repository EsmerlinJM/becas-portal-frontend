import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import Loading from 'react-loader-spinner'
import { getOneUser, addFavorites } from '../../../redux/slices/user/_actions'
import { getAuth } from '../../utils/auth'

export default function Auth({ children }) {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const { data, status } = useSelector((state) => state.user.one)

  useEffect(() => {
    const fn = async (tk) => dispatch(await getOneUser(tk))
    const { token } = getAuth()
    if (location.pathname === '/login' || location.pathname === '/register') {
      token && history.push('/')
    }
    !Object.keys(data || {}).length && token && fn(token)
  }, [history, location.pathname, data, dispatch])

  useEffect(() => {
    if (status === 'error') {
      localStorage.removeItem('dx')
      localStorage.removeItem('token')
      history.push('/login')
    }

    if (status === 'completed') {
      console.log(addFavorites)
      if (Object.keys(data).length)
        return dispatch(addFavorites(data.favoritos || []))

      const fvs = JSON.parse(localStorage.getItem('favorite_offers') || '[]')
      dispatch(addFavorites(fvs))
    }
    // eslint-disable-next-line
  }, [status, history]);

  if (status === 'loading')
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loading type="MutatingDots" color="red" />
      </div>
    )

  return children
}
