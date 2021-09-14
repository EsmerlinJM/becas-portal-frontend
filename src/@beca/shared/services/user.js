import customAxios, { authAxios } from '../utils/customAxios'
import { getAuth, logOut as logoutUser } from '../utils/auth'
import { clearUser } from '../../redux/slices/user/_actions'

export const createUser = async (payload) => {
  const { data } = await customAxios.post('/profile/register', { ...payload })
  return data.data
}

export const login = async (payload) => {
  const { data } = await customAxios.post('/profile/loginCandidato', {
    ...payload,
  })
  return data
}
export const updateSocioEconomico = async (payload) => {
  try {
    const form = new FormData()
    Object.entries(payload).map((item) => form.append(item[0], item[1]))
    const { data } = await authAxios().post(
      '/candidatos/economicos/update',
      form,
    )
    return data
  } catch (error) {
    console.error(error.response, error.message)
  }
}

export const getProfile = async (token) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/profile/getProfile`,
    {
      method: 'post',
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    },
  )
  const { data, status } = await res.json()
  if (status) throw Error('Iniciar sesion correctamente')
  return data
}

export const logOut = async (history, dispatch) => {
  try {
    await authAxios().post('/profile/logout')
    history && logoutUser(history)
    dispatch(clearUser())
  } catch (error) {
    history && logoutUser(history)
    dispatch(clearUser())
  }
}

export const updateProfile = async (oayload) => {
  try {
    const body = new FormData()
    Object.entries(oayload).map((item) => body.append(item[0], item[1]))
    const { data } = await authAxios().post('/profile/update', body)
    return data.data
  } catch (error) {
    console.error(error, error.response)
    return {}
  }
}

export const resetPass = async (email) => {
  // /email/forgotPassword?email=ivan.firestone@fmt.com.do
  const res = await customAxios.get(`/email/forgotPassword?email=${email}`)
  return res
}

export const changePassword = async (payload) => {
  try {
    const form = new FormData()
    Object.entries(payload).map((item) => form.append(item[0], item[1]))
    const res = await authAxios().post('/profile/changepassword', form)
    return res
  } catch (error) {
    throw error.response
  }
}
