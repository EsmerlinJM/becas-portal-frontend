import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateUser } from "../../../../../redux/slices/user/_actions";
import { useDispatch } from "react-redux";

const entity = {
  2: "document_id",
  3: "contact_phone",
  4: "image",
};

export default function useAction(user) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    active: 1,
    close: false,
    skips: [],
  });
  const { handleSubmit, register, setValue, watch } = useForm();
  const onMove = (step, skip) => {
    setState((st) => ({
      ...st,
      active: step,
      skips: skip ? [...st.skips, entity[step - 1]] : st.skips,
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

    Object.keys(payload).length &&
      dispatch(
        await updateUser({
          country_id: user.country?.id,
          last_name: user.last_name,
          name: user.name,
          genero: user.genero,
          ...payload,
        })
      );
  });

  useEffect(() => {
    if (state.active === 5) action();
    //eslint-disable-next-line
  }, [state.close, state.active]);

  return [{ ...state }, { onMove, register, setState, setValue, watch }];
}
