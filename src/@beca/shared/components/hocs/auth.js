import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { clearUser, getOneUser } from '../../../redux/slices/user/_actions'
import { addFavorites } from '../../../redux/slices/user/_actions'
import { getAuth } from '../../utils/auth'
import { logOut } from '../../services/user'
import { setNotifications } from '../../../redux/slices/notification/_actions'
import { getAllMessage } from '../../../redux/slices/message/_actions'

import Loading from 'react-loader-spinner'

const validatePathsNotLogger = [
  '/login',
  '/register',
  '/reset-pass',
  '/reset-pass/token-invalid',
  '/reset-pass/token-valid',
]

const validataPatshLogger = [
  '/my-requests',
  '/my-requests/detail/',
  '/profile',
  '/becas',
]

export default function Auth({ children }) {
  const location = useLocation()
  const history = useHistory()
  const { token } = getAuth()
  const { data, status } = useSelector((state) => state.user.one)

  const dispatch = useDispatch()
  const logout = async () => {
    await logOut(history, dispatch)
  }

  useEffect(() => {
    // get initial state when is logged
    const fn = async (tk) => {
      dispatch(await getOneUser(tk))
      dispatch(await getAllMessage())
    }

    // execute when token exist and not data
    !Object.keys(data).length && token && fn(token)

    if (status === 'completed') {
      // set favs and notifacation when data and token exist
      if (Object.keys(data).length) {
        dispatch(addFavorites(data.favoritos || []))
        dispatch(setNotifications(data.notificaciones || []))
        return
      }
      // not logged
      const fvs = JSON.parse(localStorage.getItem('favorite_offers') || '[]')
      dispatch(addFavorites(fvs))
    }

    // logout when status of getData is error
    if (status === 'error') {
      logout()
    }
    //eslint-disable-next-line
  }, [dispatch, token, status, data])

  // validate routes when no logged
  if (token && validatePathsNotLogger.includes(location.pathname))
    history.push('/')

  // validate routes when logged
  if (!token && validataPatshLogger.includes(location.pathname)) {
    dispatch(clearUser())
    history.push('/')
  }

  if (status === 'loading')
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loading type="MutatingDots" color="#ee2a24" secondaryColor="#003876" />
      </div>
    )
  return children
}
