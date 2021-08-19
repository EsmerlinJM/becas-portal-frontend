import { allPronvince } from "../../../shared/services/provinces";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProvince = createAsyncThunk(
  "province/getAll",
  async () => await allPronvince()
);
// export const setOneProvince = () =>
//   createAsyncThunk("province/setOne", (payload) => payload);
