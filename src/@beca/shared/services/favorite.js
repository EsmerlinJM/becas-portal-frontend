import { getAuth } from "../utils/auth";

export const addFavorite = async (offetId) => {
  const { token } = getAuth();
  const form = new FormData();
  form.append("convocatoria_detail_id", offetId);
  const res = await fetch(`${process.env.REACT_APP_API_URL}/favoritos/create`, {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
    body: form,
  });
  const json = await res.json();
  return json.data;
};

export const deleteFavorite = async (favorite_id) => {
  try {
    const { token } = getAuth();
    const form = new FormData();
    form.append("favorite_id", favorite_id);
    await fetch(`${process.env.REACT_APP_API_URL}/favoritos/delete`, {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
      body: form,
    });
    return { id: favorite_id };
  } catch (error) {
    console.log(error.response);
    throw Error("Upp, error!");
  }
};
