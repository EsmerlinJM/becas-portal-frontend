import { authAxios } from "../utils/customAxios";

export const readNotification = async (id) => {
  const res = await authAxios().post(
    `/notificaciones/update?notificacion=${id}`
  );
  return res;
};
