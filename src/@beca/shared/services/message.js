import customAxios from "../utils/customAxios";

export const createMessage = async (payload) => {
  const { data } = await customAxios.post("/mensajes/create", {
    ...payload,
  });
  return data.data;
};
