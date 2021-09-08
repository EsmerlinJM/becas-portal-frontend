import { getRequests, getRequest } from "../../../shared/services/requests";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllRequest = createAsyncThunk(
  "myRequests/getAll",
  async () => await getRequests()
);

export const getOneRequest = createAsyncThunk(
  "myRequests/one",
  async (id) => await getRequest(id)
);
