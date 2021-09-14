import { authAxios } from '../utils/customAxios'

export const readNotification = async (id) => {
  const res = await authAxios().post(
    `/notificaciones/update?notificacion=${id}`,
  )
  return res
}

export const deleteNotification = async (id) => {
  const res = await authAxios().post(
    `/notificaciones/delete?notificacion=${id}`,
  )
  return res
}

export const getAllNotifications = async () => {
  const { data } = await authAxios().get(`/notificaciones/getAll`)
  return data.data
}
