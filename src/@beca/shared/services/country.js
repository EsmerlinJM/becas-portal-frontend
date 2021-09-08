import customAxios from "../utils/customAxios";

export const getCountries = async () => {
  const { data } = await customAxios.get("/paises/getAll");
  return data.data;
};
