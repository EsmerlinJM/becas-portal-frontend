import { createAsyncThunk } from '@reduxjs/toolkit'
import { allPronvince } from '../../../shared/services/provinces'

export const getAllProvince = createAsyncThunk(
  'province/getAll',
  async () => await allPronvince(),
)
// export const setOneProvince = () =>
//   createAsyncThunk("province/setOne", (payload) => payload);
