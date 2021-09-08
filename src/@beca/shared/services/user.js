import customAxios from "../utils/customAxios";
import { getAuth, logOut as logoutUser } from "../utils/auth";

export const createUser = async (payload) => {
  const { data } = await customAxios.post("/profile/register", { ...payload });
  return data.data;
};

export const login = async (payload) => {
  const { data } = await customAxios.post("/profile/loginCandidato", {
    ...payload,
  });
  return data;
};

export const getProfile = async (token) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/profile/getProfile`,
    {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    }
  );
  const { data, status } = await res.json();
  if (status) throw Error("Iniciar sesion correctamente");
  return data;
};

export const logOut = async (history) => {
  try {
    const { token } = getAuth();
    await fetch(`${process.env.REACT_APP_API_URL}/profile/logout`, {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    });
    history && logoutUser(history);
    return {};
  } catch (error) {
    return {};
  }
};

export const updateProfile = async (oayload) => {
  const { token } = getAuth();
  if (!token) return;
  const body = new FormData();
  Object.entries(oayload).map((item) => body.append(item[0], item[1]));
  const res = await fetch(`${process.env.REACT_APP_API_URL}/profile/update`, {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
    body,
  });
  const { data } = await res.json();
  return data;
};
