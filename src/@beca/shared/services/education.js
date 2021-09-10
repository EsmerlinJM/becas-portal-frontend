import { getAuth } from "../utils/auth";

export const createEducation = async (payload) => {
  const { token } = getAuth();
  const body = new FormData();
  const item = payload[payload.length - 1];
  Object.entries({ ...item, isBecado: 1 }).map((it) =>
    body.append(it[0], it[1])
  );
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/candidatos/formacion/create`,
    {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      }),
      body,
    }
  );
  const { data } = await res.json();
  return data;
};

export const deleteEducation = async (id) => {
  const { token } = getAuth();
  const body = new FormData();

  body.append("formacion", id);
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/candidatos/formacion/delete`,
    {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      }),
      body,
    }
  );
  const { data } = await res.json();
  return data;
};
