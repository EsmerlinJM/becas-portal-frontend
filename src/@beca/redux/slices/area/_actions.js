import { createAsyncThunk } from '@reduxjs/toolkit'
import { allArea } from '../../../shared/services/area'

export const getAllArea = createAsyncThunk(
  'area/getAll',
  async () => await allArea(),
)
