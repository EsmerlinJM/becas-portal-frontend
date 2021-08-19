import customAxios from "../utils/customAxios";

export const allInstitutions = async () => {
  const { data } = await customAxios.get("/instituciones/getAll");
  return data.data;
};
