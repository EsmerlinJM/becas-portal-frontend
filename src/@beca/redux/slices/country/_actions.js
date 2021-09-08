import { getCountries } from "../../../shared/services/country";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCountries = createAsyncThunk(
  "country/getAll",
  async () => await getCountries()
);
