import customAxios from '../utils/customAxios'
import { logOut as logoutUser } from '../utils/auth'

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
  const { data } = await res.json()
  return data
}

export const logOut = async (token, history) => {
  console.log(token)
  try {
    await fetch(`${process.env.REACT_APP_API_URL}/profile/logout`, {
      method: 'post',
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })

    logoutUser(history)
    return {}
  } catch (error) {
    return {}
  }
}
