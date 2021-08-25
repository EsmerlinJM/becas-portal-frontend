import customAxios from "../utils/customAxios";

export const createUser = async (payload) => {
  const { data } = await customAxios.post("/profile/register", { ...payload });
  console.log(data, " data");
  return data.data;
};
