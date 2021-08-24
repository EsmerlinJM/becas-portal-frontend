import customAxios from "../utils/customAxios";

export const createUser = async (payload) => {
  const { data } = await customAxios.get("/profile/register", { ...payload });
  return data.data;
};
