import { getAllRequest } from "../../../redux/slices/my-requests/_actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useReducer } from "react";
import { reducer, initialState } from "./reducer";
const screenNum = 6;

export default function useAction() {
  const [state, dispatch2] = useReducer(reducer, initialState);

  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.myRequest.all);

  function onSelectScreen(active) {
    const curr = active * screenNum;
    dispatch2({
      type: "SET_SCREEN",
      payload: {
        active,
        items: data.slice(curr - screenNum, curr),
      },
    });
  }

  useEffect(() => {
    const fn = async () => {
      dispatch(await getAllRequest());
    };

    fn();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch2({
      type: "SET_LOADING",
      payload: {
        loading: true,
      },
    });

    const numScreen = (data || []).length / screenNum;
    const num = Math.ceil(numScreen <= 0 ? 1 : numScreen);
    const scrns = [];

    for (let i = 0; i < num; i++) {
      scrns.push(i + 1);
    }

    dispatch2({
      type: "INIT",
      payload: {
        items: (data || []).slice(0, screenNum),
        active: 1,
        screens: scrns,
        loading: false,
      },
    });
    //eslint-disable-next-line
  }, [data, status]);

  return [{ state, status }, { onSelectScreen }];
}
