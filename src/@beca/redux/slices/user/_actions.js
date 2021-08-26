import { createMessage as create } from "../../../shared/services/message";
import { createAsyncThunk } from "@reduxjs/toolkit";
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
