export const setAuth = (user, history) => {
  const {
    access_token,
    user: { id },
  } = user
  localStorage.setItem('dx', `${id}`)
  localStorage.setItem('token', access_token)
  setTimeout(() => history.push('/'), 500)
}

export const logOut = (history) => {
  localStorage.removeItem('dx')
  localStorage.removeItem('token')
  history.push('/')
}

export const getAuth = () => {
  const id = parseInt(localStorage.getItem('dx'))
  const token = localStorage.getItem('token')

  return { token, id }
}
