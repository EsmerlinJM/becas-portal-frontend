import customAxios from '../utils/customAxios'

export const allCadidateApplied = async (convocatoria_id) => {
  const { data } = await customAxios.post('/becados/filter', {
    convocatoria_id,
  })
  return data.data
}
