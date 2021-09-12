import { createMessage as create } from "../../../shared/services/message";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { saveEducation as savEducation } from "../../../shared/services/education";

import {
  addFavorite as createFavorite,
  deleteFavorite as removeFav,
} from "../../../shared/services/favorite";
import {
  getProfile,
  logOut,
  updateProfile,
} from "../../../shared/services/user";
import { saveWorkExperience as saveExperience } from "../../../shared/services/work-exprience";

export const createMessage = createAsyncThunk(
  'user/message',
  async (payload) => await create(payload),
)

export const setUser = createAction("user/setUser");

export const getOneUser = createAsyncThunk(
  "user/one",
  async (token) => await getProfile(token)
);
export const clearUser = createAction("user/clear");

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (payload) => await updateProfile(payload)
);
export const logoutUser = createAsyncThunk("user/logout", async (history) => {
  await logOut(history);
  return {};
});

export const addFavorite = createAsyncThunk(
  'user/addFavorite',
  async (offerId) => await createFavorite(offerId),
)

export const addFavorites = createAction('user/addFavorites')
export const deleteFavorite = createAsyncThunk(
  "user/deleteFavorite",
  async (id) => await removeFav(id)
);

export const saveEducation = createAsyncThunk(
  "user/createEducation",
  async (payload) => await savEducation(payload)
);

export const saveWorkExperience = createAsyncThunk(
  "user/saveWorkExperience",
  async (payload) => await saveExperience(payload)
);
export const readNotification = createAction("user/readNotification");
