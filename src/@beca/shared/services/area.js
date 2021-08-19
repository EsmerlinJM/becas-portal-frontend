import customAxios from "../utils/customAxios";

export const allArea = async () => {
  const { data } = await customAxios.get("/areas/desarrollo/getAll");
  return data.data;
};
