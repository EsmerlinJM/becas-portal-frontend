import customAxios, { authAxios } from '../utils/customAxios'

export const createMessage = async (payload) => {
  const { data } = await customAxios.post('/mensajes/create', {
    ...payload,
  })
  return data.data
}

export const getAllMessage = async () => {
  const { data } = await authAxios().post('mensajes/getAll')
  return data.data
}

export const markMultiple = async (items) => {
  try {
    const promises = items.map((item) =>
      item.status === 'read' ? markUnread(item.id) : markRead(item.id),
    )
    const all = await Promise.all(promises)
    return all
  } catch (error) {
    throw error
  }
}

export const markRead = async (id) => {
  const form = new FormData()
  form.append('message_id', id)
  const { data } = await authAxios().post('mensajes/markRead', form)
  return data.data
}

export const markUnread = async (id) => {
  const form = new FormData()
  form.append('message_id', id)
  const { data } = await authAxios().post('mensajes/markUnRead', form)
  return data.data
}

export const deleteMessage = async (id) => {
  const form = new FormData()
  form.append('message_id', id)
  const { data } = await authAxios().post('mensajes/delete', form)
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
