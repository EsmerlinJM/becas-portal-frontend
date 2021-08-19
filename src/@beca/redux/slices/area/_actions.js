import { allArea } from "../../../shared/services/area";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllArea = createAsyncThunk(
  "area/getAll",
  async () => await allArea()
);
