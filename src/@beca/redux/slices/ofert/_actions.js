import {
  allOfert,
  oneOfert,
  searchByAll,
} from "../../../shared/services/ofert";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllOffer = createAsyncThunk(
  "ofert/getAll",
  async (id) => await allOfert(id)
);

export const searchByOffer = createAsyncThunk(
  "ofert/searchBy",
  async (filtered) => filtered
);

export const getOneOfert = createAsyncThunk(
  "ofert/getOne",
  async (id) => await oneOfert(id)
);

export const getAllOfferByAll = createAsyncThunk(
  "ofert/getAll",
  async (value) => await searchByAll(value)
);
