import { getAuth } from "../utils/auth";
import { authAxios } from "../utils/customAxios";

export const createEducation = async (payload) => {
  try {
    const arrCreate = [];
    const arrUpdate = [];
    const save = [];

    payload.forEach((item) => {
      const body1 = new FormData();
      const body2 = new FormData();

      if (item.id) {
        Object.entries({
          ...item,
          formacion: item.id,
          isBecado: +item.isBecado,
          fecha_salida: item.fecha_salida || "",
        }).map((it) => body1.append(it[0], it[1]));
        arrUpdate.push(body1);
      } else {
        Object.entries({ ...item, isBecado: +item.isBecado }).map((it) =>
          body2.append(it[0], it[1])
        );
        arrCreate.push(body2);
      }
    });

    for (const form of arrUpdate) {
      const {
        data: { data },
      } = await authAxios().post("/candidatos/formacion/update", form);
      save.push(data);
    }

    for (const form of arrCreate) {
      const {
        data: { data },
      } = await authAxios().post("/candidatos/formacion/create", form);
      save.push(data);
    }

    return save;
  } catch (error) {
    console.log(error, error.message, error.response);
  }
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
