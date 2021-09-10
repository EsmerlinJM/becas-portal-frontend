import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
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
export const setRecent = createAction("announcement/recent");
export const setAnnouncementMessage = createAction("announcement/message");
