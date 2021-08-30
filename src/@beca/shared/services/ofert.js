import customAxios from '../utils/customAxios'

export const allOfert = async (convocatoria_id) => {
  const { data } = await customAxios.post('/convocatorias/details/getAll', {
    convocatoria_id,
  })
  return data.data
}

export const oneOfert = async (convocatoria_detail_id) => {
  const { data } = await customAxios.post('/convocatorias/details/show', {
    convocatoria_detail_id,
  })

  return data.data
}

export const searchByAll = async (busqueda) => {
  const { data } = await customAxios.post('/convocatorias/details/search', {
    busqueda,
  })
  return data.data
}
