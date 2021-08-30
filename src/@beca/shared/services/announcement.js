import customAxios from '../utils/customAxios'

export const announcementAll = async () => {
  const { data: res } = await customAxios.get(`/convocatorias/portal`)
  return res.data
}

export const announcementOne = async (id) => {
  const form = new FormData()
  form.append('convocatoria_id', id)
  const res = await customAxios.get(`/convocatorias/show`, {
    body: form,
  })
  return res.data
}
