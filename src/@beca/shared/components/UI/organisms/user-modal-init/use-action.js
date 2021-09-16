import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { setUser } from "../../../../../redux/slices/user/_actions";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../../services/user";
import toast from "react-hot-toast";

const entity = {
  2: "document_id",
  3: "contact_phone",
  4: "image",
};
const initialState = {
  active: 1,
  close: false,
  skips: [],
};
export default function useAction(user, valDocument, valContact) {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const { handleSubmit, register, setValue, watch } = useForm();
  const onMove = (step, skip) => {
    let next = step;
    if (step === 2 && valDocument) next = 3;
    if (step === 3 && valContact) next = 4;

    setState((st) => ({
      ...st,
      active: next,
      skips: skip ? [...st.skips, entity[next - 1]] : st.skips,
    }));
  };

  const action = handleSubmit(async (data) => {
    const payload = {
      ...data,
    };

    for (const name in payload) {
      if (!payload[name]) delete payload[name];
      if (state.skips.includes(name)) delete payload[name];
    }

    if (!Object.keys(payload).length) return;
    const res = await updateProfile({
      country_id: user.country?.id,
      last_name: user.last_name,
      name: user.name,
      genero: user.genero,
      contact_phone: user.contact_phone,
      document_id: user.document_id,
      ...payload,
    });
    dispatch(setUser(res));
    toast.success("Actualizado correctamente!");
    setState({ ...initialState, close: true });
  });

  useEffect(() => {
    if (state.active === 6) action();
    //eslint-disable-next-line
  }, [state.close, state.active]);

  return [{ ...state }, { onMove, register, setState, setValue, watch }];
}
