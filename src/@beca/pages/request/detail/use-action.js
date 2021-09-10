import { useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { getOneRequest } from "../../../redux/slices/my-requests/_actions";
import { arrValidateField } from "../../../shared/components/UI/organisms/form-education-list";
import { arrValidateField as validateField } from "../../../shared/components/UI/organisms/form-work-experience-list";
import {
  saveEducation,
  saveWorkExperience,
} from "../../../redux/slices/user/_actions";
import reducer, { initialState } from "./reducer";
import { deleteEducation } from "../../../shared/services/education";
import { deleteWorkExperience } from "../../../shared/services/work-exprience";
import { answerMultiple } from "../../../shared/services/requests";

export default function useAction(id) {
  const dispatch = useDispatch();
  const [state, dispatch2] = useReducer(reducer, initialState);

  const { data, status } = useSelector((state) => state.myRequest.one);
  const { data: user } = useSelector((state) => state.user.one);

  const onDelete = async (index, key) => {
    try {
      const item = state[key][index];
      dispatch2({
        type: "ON_CHANGE_INIT",
        key: key,
        payload: {
          ...state,
          [key]: state[key].filter((_, i) => i !== index),
        },
      });

      if (item.id) {
        key === "formsWorkExperience" && (await deleteWorkExperience(item.id));
        key === "formsEducation" && (await deleteEducation(item.id));
        toast.success("Eliminado correctamente!");
      }
    } catch (error) {
      toast.error("Upss, ha ocurrido un error!");
    }
  };

  const answer = () => {
    try {
      dispatch2({
        type: "SET_LOADING",
        payload: true,
      });

      let val = true;
      const payload = [];
      const items = state.formsInstitution;

      for (const item of items) {
        if (item.formulario_detail_required && !item.canditate_answer) {
          val = false;
          return toast.error(
            <b>El campo {item.formulario_detail_name} es obligatorio</b>
          );
        }
        payload.push({
          aplication_form_id: item.id,
          respuesta: item.canditate_answer,
        });
      }

      val &&
        toast.promise(answerMultiple(payload), {
          loading: <b>Guardando...</b>,
          success: () => {
            dispatch2({
              type: "SET_LOADING",
              payload: false,
            });
            return <b>Guardado correctamente!</b>;
          },
          error: (error) => {
            dispatch2({
              type: "SET_LOADING",
              payload: false,
            });
            console.log(error.message, error.response, error, "errors");
            return <b>Ups, a ocurrido un error, intentar mas tarde!</b>;
          },
        });
    } catch (error) {
      dispatch2({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };

  const save = async (key) => {
    if (key === "formsInstitution") return answer();

    dispatch2({
      type: "SET_LOADING",
      payload: true,
    });
    let i = 0;
    const objVal = {
      formsEducation: { val: arrValidateField, action: saveEducation },
      formsWorkExperience: { val: validateField, action: saveWorkExperience },
    };

    const obj = objVal[key];
    const items = state[key];

    for (const item of items) {
      for (const field of obj.val) {
        if (!item[field]) {
          return toast.error(
            <b className="text-sm">
              Del formulario #{i + 1}; el campo {field.replace("_", "")} es
              obligatorio
            </b>
          );
        }
      }
      i += 1;
    }

    await dispatch(await obj["action"](items));
    toast.success("Guardado correctamente!");
    dispatch2({
      type: "SET_LOADING",
      payload: false,
    });
  };

  useEffect(() => {
    const fn = async () => {
      dispatch(await getOneRequest(id));
    };
    fn();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (data && status === "completed" && user) {
      dispatch2({
        type: "ON_CHANGE_INIT",
        payload: {
          ...initialState,
          formsEducation: user.formacion_academica,
          formsWorkExperience: user.experiencia_laboral,
          formsInstitution: data.formulario_answers,
          user: user,
          request: data,
        },
      });
    }
  }, [status, data, user]);

  return [
    { state, status },
    { dispatch2, save, onDelete },
  ];
}
