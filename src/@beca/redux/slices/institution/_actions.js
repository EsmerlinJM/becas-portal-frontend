import { createAsyncThunk } from '@reduxjs/toolkit'
import { allInstitutions } from '../../../shared/services/institution'

export const getAllInstitution = createAsyncThunk(
  'institution/getAll',
  async () => await allInstitutions(),
)
