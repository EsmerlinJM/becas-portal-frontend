import { createMessage as create } from "../../../shared/services/message";
import {
  addFavorite as createFavorite,
  deleteFavorite as removeFav,
} from "../../../shared/services/favorite";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getProfile, logOut } from "../../../shared/services/user";

export const createMessage = createAsyncThunk(
  "user/message",
  async (payload) => await create(payload)
);

export const getOneUser = createAsyncThunk(
  "user/one",
  async (token) => await getProfile(token)
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (token, history) => await logOut(token, history)
);

export const addFavorite = createAsyncThunk(
  "user/addFavorite",
  async (offerId) => await createFavorite(offerId)
);

export const addFavorites = createAction("user/addFavorites");
export const deleteFavorite = createAsyncThunk(
  "user/deleteFavorite",
  async (id) => await removeFav(id)
);
