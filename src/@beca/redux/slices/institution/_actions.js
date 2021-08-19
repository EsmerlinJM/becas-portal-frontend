import { allInstitutions } from "../../../shared/services/institution";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllInstitution = createAsyncThunk(
  "institution/getAll",
  async () => await allInstitutions()
);
