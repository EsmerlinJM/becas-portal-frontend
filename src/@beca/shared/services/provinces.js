import customAxios from '../utils/customAxios'

export const allPronvince = async () => {
  const { data } = await customAxios.get('/provincias/getAll')
  return data.data
}
