import customAxios, { authAxios } from '../utils/customAxios'

export const createMessage = async (payload) => {
  const { data } = await customAxios.post('/mensajes/create', {
    ...payload,
  })
  return data.data
}

export const getAllMessage = async () => {
  const { data } = await authAxios().get('/mensajes/internos/getAll')
  return data.data
}

export const markMultiple = async (items) => {
  try {
    const promises = items.map((item) =>
      item.estado === 'read' ? markUnread(item.id) : markRead(item.id),
    )
    const all = await Promise.all(promises)
    return all
  } catch (error) {
    throw error
  }
}

export const markRead = async (id) => {
  const form = new FormData()
  form.append('mensaje_id', id)
  const { data } = await authAxios().post('/mensajes/internos/setRead', form)
  return data.data
}

export const markUnread = async (id) => {
  const form = new FormData()
  form.append('mensaje_id', id)
  const { data } = await authAxios().post('/mensajes/internos/setUnread', form)
  return data.data
}

export const deleteMessage = async (id) => {
  const form = new FormData()
  form.append('mensaje_id', id)
  const { data } = await authAxios().post('/mensajes/internos/delete', form)
  return data.data
}

export const deleteMultipleMessage = async (arrMsg) => {
  try {
    const promises = arrMsg.map((item) => deleteMessage(item.id))
    await Promise.all(promises)
    return true
  } catch (error) {
    console.error(error)
  }
}

export const createMsg = async (payload) => {
  const form = new FormData()
  Object.entries(payload).map((item) => form.append(item[0], item[1]))
  const { data } = await authAxios().post(
    `/mensajes/internos/compose_candidate`,
    form,
  )
  return data.data
}
