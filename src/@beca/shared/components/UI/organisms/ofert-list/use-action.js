import { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuth } from "../../../../utils/auth";
import { initialState, reducer } from "./use-reducer";

import {
  addFavorite,
  addFavorites,
  deleteFavorite,
} from '../../../../../redux/slices/user/_actions'
const screenNum = 12

export default function useAction(justFavorites) {
  const [stateR, dispatchR] = useReducer(reducer, initialState);
  const {
    user: {
      favorites: { data: favorites, status: statusFav },
    },
    offers: {
      all: { data, status },
      searchBy: { data: oferts, status: searchStatus },
    },
  } = useSelector((state) => state)

  const { token } = getAuth()
  const dispatch = useDispatch()

  function onSelectScreen(active) {
    const curr = active * screenNum
    dispatchR({
      type: 'SET_SCREEN',
      payload: {
        active,
        items: (justFavorites
          ? favorites.map((it) => it.convocatoria_detail)
          : oferts
        ).slice(curr - screenNum, curr),
      },
    })
  }

  async function addFavoriteUser(offerId) {
    const finded = stateR.objFavs[offerId]
    if (finded) return dispatch(await deleteFavorite(finded.id))
    dispatch(await addFavorite(offerId))
  }

  function addFavoriteNoUser(id) {
    const favorites = JSON.parse(
      localStorage.getItem('favorite_offers') || '[]',
    )
    let objtFavs = stateR.objFavs

    if (objtFavs[id]) {
      delete objtFavs[id]
    } else {
      objtFavs = {
        ...objtFavs,
        [id]: { convocatoria_detail: data.find((it) => it.id === id) },
      }
    }

    localStorage.setItem('favorite_offers', JSON.stringify(favorites))
    dispatch(addFavorites(Object.values(objtFavs)))
  }

  async function saveFavorite(offerId) {
    token ? await addFavoriteUser(offerId) : addFavoriteNoUser(offerId)
  }
  useEffect(() => {
    dispatchR({
      type: 'SET_LOADING',
      payload: {
        loading: true,
      },
    })

    const fvs = justFavorites && favorites.map((it) => it.convocatoria_detail);
    const numScreen = (justFavorites ? favorites : oferts).length / screenNum;
    const num = Math.ceil(numScreen <= 0 ? 1 : numScreen);
    const scrns = [];

    for (let i = 0; i < num; i++) {
      scrns.push(i + 1)
    }

    dispatchR({
      type: 'INIT',
      payload: {
        items: (justFavorites ? fvs : oferts).slice(0, screenNum),
        active: 1,
        screens: scrns,
        loading: false,
      },
    });
    //eslint-disable-next-line
  }, [oferts, searchStatus, statusFav]);

  useEffect(() => {
    dispatchR({
      type: 'SET_OBJ_FAVS',
      payload: {
        favorites,
      },
    })
    // eslint-disable-next-line
  }, [favorites.length, statusFav]);

  return [
    {
      stateR,
      status,
      oferts: justFavorites
        ? favorites.map((it) => it.convocatoria_detail)
        : oferts,
      countResult: (justFavorites ? favorites : oferts).length,
      favorites,
      statusFav,
    },
    { onSelectScreen, saveFavorite },
  ]
}
