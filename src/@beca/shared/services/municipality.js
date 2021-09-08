import customAxios from "../utils/customAxios";

export const municipalityByProvince = async (provinceId) => {
  const { data } = await customAxios.get(
    "/municipios/byProvince?province_code=" + provinceId
  );
  return data.data;
};
