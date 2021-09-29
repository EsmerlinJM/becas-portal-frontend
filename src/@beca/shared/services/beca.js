import { authAxios } from '../utils/customAxios'

export const getAllBecas = async () => {
  const { data } = await authAxios().get('/becados/getMisBecas')
  return data.data
}
