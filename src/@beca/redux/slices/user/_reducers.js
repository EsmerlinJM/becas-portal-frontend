import { createSlice } from "@reduxjs/toolkit";
import {
  createMessage,
  getOneUser,
  logoutUser,
  addFavorite,
  addFavorites,
  deleteFavorite,
  updateUser,
  createEducation,
  clearUser,
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
    [clearUser]: () => initialState,
    [createEducation.rejected]: rejected({ key: "one" }),
    [createEducation.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        one: {
          data: {
            ...state.one.data,
            formulario_answers: payload,
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
