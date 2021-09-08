import { municipalityByProvince } from "../../../shared/services/municipality";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchByProvince = createAsyncThunk(
  "monicipality/searchBy",
  async (id) => await municipalityByProvince(id)
);
