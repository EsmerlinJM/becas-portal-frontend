import { createAsyncThunk } from "@reduxjs/toolkit";
import { allCadidateApplied } from "../../../shared/services/all-applied";

export const getAllApplied = createAsyncThunk(
  "applied/getAll",
  async (id) => await allCadidateApplied(id)
);
