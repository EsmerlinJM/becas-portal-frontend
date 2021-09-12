import { createAsyncThunk } from '@reduxjs/toolkit'
import { allOfert, oneOfert, searchByAll } from '../../../shared/services/ofert'

export const getAllOffer = createAsyncThunk(
  'ofert/getAll',
  async (id) => await allOfert(id),
)

export const searchByOffer = createAsyncThunk(
  'ofert/searchBy',
  async (filtered) => filtered,
)

export const getOneOfert = createAsyncThunk(
  'ofert/getOne',
  async (id) => await oneOfert(id),
)

export const getAllOfferByAll = createAsyncThunk(
  "ofert/searchByAll",
  async (value) => await searchByAll(value)
);
