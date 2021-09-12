import { createSlice } from "@reduxjs/toolkit";
import {
  createMessage,
  getOneUser,
  logoutUser,
  addFavorite,
  addFavorites,
  deleteFavorite,
  updateUser,
  clearUser,
  saveEducation,
  saveWorkExperience,
  readNotification,
  setUser,
} from "./_actions";
import {
  reducerGenerator,
  rejected,
  fulfilled,
} from "../../../shared/utils/reducer-generator";
import { initialState } from "../../../shared/utils/initial-state";

const actions = [
  { action: createMessage, key: "message" },
  { action: getOneUser, key: "one" },
  { action: logoutUser, key: "one" },
  { action: updateUser, key: "one" },
];
const reducers = reducerGenerator(actions);

const user = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    ...reducers,
    [setUser]: fulfilled({ key: "one" }),
    [clearUser]: () => initialState,
    [readNotification]: (state, { payload }) => ({
      ...state,
      one: {
        ...state.one.data,
        notificaciones: payload,
      },
    }),
    [saveEducation.rejected]: rejected({ key: "one" }),
    [saveEducation.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        one: {
          data: {
            ...state.one.data,
            formacion_academica: payload,
          },
          status: "completed",
        },
      };
    },
    [saveWorkExperience.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        one: {
          data: {
            ...state.one.data,
            experiencia_laboral: payload,
          },
          status: "completed",
        },
      };
    },
    [addFavorites]: fulfilled({ key: "favorites" }),
    [deleteFavorite.fulfilled]: (state, { payload }) => {
      const filtered = state.favorites.data.filter(
        (it) => it.id !== payload.id
      );
      return {
        ...state,
        favorites: {
          data: filtered,
          status: "completed",
        },
      };
    },

    [addFavorite.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        favorites: {
          data: [payload, ...state.favorites.data],
          status: "completed",
        },
      };
    },
  },
});

export default user.reducer;
