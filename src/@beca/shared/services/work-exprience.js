import { getAuth } from "../utils/auth";

export const deleteWorkExperience = async (id) => {
  const { token } = getAuth();

  const body = new FormData();
  body.append("experiencia", id);

  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/candidatos/experiencia/delete`,
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
