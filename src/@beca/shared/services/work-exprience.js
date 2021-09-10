import { authAxios } from "../utils/customAxios";

export const deleteWorkExperience = async (id) => {
  const form = new FormData();
  form.append("experiencia", id);
  const { data } = authAxios().post("/candidatos/experiencia/delete", form);
  return data;
};

export const saveWorkExperience = async (payload) => {
  try {
    const arrCreate = [];
    const arrUpdate = [];
    const save = [];
    payload.forEach((item) => {
      const body1 = new FormData();
      const body2 = new FormData();

      if (item.id) {
        Object.entries({ ...item, experiencia: item.id }).map((it) =>
          body1.append(it[0], it[1])
        );
        arrUpdate.push(body1);
      } else {
        Object.entries(item).map((it) => body2.append(it[0], it[1]));
        arrCreate.push(body2);
      }
    });

    for (const form of arrUpdate) {
      const {
        data: { data },
      } = await authAxios().post("/candidatos/experiencia/update", form);
      save.push(data);
    }

    for (const form of arrCreate) {
      const {
        data: { data },
      } = await authAxios().post("/candidatos/experiencia/create", form);
      save.push(data);
    }
    return save;
  } catch (error) {
    console.log(error, error.message, error.response);
    return [];
  }
};
