import { createMessage as create } from "../../../shared/services/message";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createMessage = createAsyncThunk(
  "user/message",
  async (payload) => await create(payload)
);
