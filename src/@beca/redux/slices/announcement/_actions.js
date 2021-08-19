import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  announcementAll,
  announcementOne,
} from "../../../shared/services/announcement";

export const announcementGetAll = createAsyncThunk(
  "announcement/getAll",
  async () => await announcementAll()
);

export const announcementGetOne = createAsyncThunk(
  "announcement/getOne",
  async (id) => await announcementOne(id)
);

export const setRecent = createAsyncThunk(
  "announcement/recent",
  (payload) => payload
);
