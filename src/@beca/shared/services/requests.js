import { getAuth } from "../utils/auth";

export const createRequest = async (convocatoria_detail_id) => {
  const { token } = getAuth();
  if (!token) return;
  const form = new FormData();
  form.append("convocatoria_detail_id", convocatoria_detail_id);
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/solicitudes/create`,
    {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      }),
      body: form,
    }
  );
  const json = await res.json();
  if (json.status === "error") throw Error(json.message);
  return json;
};

export const getRequests = async () => {
  try {
    const { token } = getAuth();
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/solicitudes/getByCandidato`,
      {
        method: "get",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        }),
      }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error, error.response, error.message);
  }
};

export const getRequest = async (aplication_id) => {
  try {
    const { token } = getAuth();
    const body = new FormData();
    body.append("aplication_id", aplication_id);

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/solicitudes/show`,
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
  } catch (error) {
    console.log(error, error.response, error.message);
  }
};

export const answerMultiple = async (payload) => {
  try {
    const { token } = getAuth();
    const body = JSON.stringify(payload);
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/solicitudes/forms/answerMultiple`,
      {
        method: "post",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body,
      }
    );
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log(error.message, error.response, error, "errors");
    throw error;
  }
};