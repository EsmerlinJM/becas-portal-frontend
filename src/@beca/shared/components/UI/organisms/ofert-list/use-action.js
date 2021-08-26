import { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuth } from "../../../../utils/auth";
import { initialState, reducer } from "./use-reducer";
import { getAllOffer } from "../../../../../redux/slices/ofert/_actions";
import {
  addFavorite,
  addFavorites,
  deleteFavorite,
} from "../../../../../redux/slices/user/_actions";
const screenNum = 12;

export default function useAction(id) {
  const [stateR, dispatchR] = useReducer(reducer, initialState);
  const {
    user: {
      favorites: { data: favorites, status: statusFav },
    },
    offers: {
      all: { data, status },
      searchBy: { data: oferts, status: searchStatus },
    },
  } = useSelector((state) => state);

  const { token } = getAuth();
  const dispatch = useDispatch();

  function onSelectScreen(active) {
    const curr = active * screenNum;
    dispatchR({
      type: "SET_SCREEN",
      payload: {
        active,
        items: oferts.slice(curr - screenNum, curr),
      },
    });
  }

  async function addFavoriteUser(offerId) {
    const finded = stateR.objFavs[offerId];
    if (finded) return dispatch(await deleteFavorite(finded.id));
    dispatch(await addFavorite(offerId));
  }

  function addFavoriteNoUser(id) {
    let favorites = JSON.parse(localStorage.getItem("favorite_offers") || "[]");
    let objtFavs = stateR.objFavs;

    if (objtFavs[id]) {
      delete objtFavs[id];
    } else {
      objtFavs = {
        ...objtFavs,
        [id]: { convocatoria_detail: data.find((it) => it.id === id) },
      };
    }

    localStorage.setItem("favorite_offers", JSON.stringify(favorites));
    dispatch(addFavorites(Object.values(objtFavs)));
  }

  async function saveFavorite(offerId) {
    token ? await addFavoriteUser(offerId) : addFavoriteNoUser(offerId);
  }

  useEffect(() => {
    dispatchR({
      type: "SET_LOADING",
      payload: {
        loading: true,
      },
    });

    const fn = async () => dispatch(await getAllOffer(id));
    id.id && !data.length && fn();

    dispatchR({
      type: "SET_LOADING",
      payload: {
        loading: false,
      },
    });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatchR({
      type: "SET_LOADING",
      payload: {
        loading: true,
      },
    });

    const numScreen = oferts.length / screenNum;
    const num = Math.ceil(numScreen <= 0 ? 1 : numScreen);
    const scrns = [];

    for (let i = 0; i < num; i++) {
      scrns.push(i + 1);
    }

    dispatchR({
      type: "INIT",
      payload: {
        items: oferts.slice(0, screenNum),
        active: 1,
        screens: scrns,
        loading: false,
      },
    });
    //eslint-disable-next-line
  }, [oferts, searchStatus]);

  useEffect(() => {
    dispatchR({
      type: "SET_OBJ_FAVS",
      payload: {
        favorites,
      },
    });
    //eslint-disable-next-line
  }, [favorites.length, statusFav]);

  const color = localStorage.getItem("color");

  return [
    {
      stateR,
      status,
      oferts,
      countResult: oferts.length,
      statusFav,
      color,
    },
    { onSelectScreen, saveFavorite },
  ];
}
