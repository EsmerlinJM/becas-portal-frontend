import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllMessage as getAll } from '../../../shared/services/message'

export const getAllMessage = createAsyncThunk(
  'message/getAll',
  async () => await getAll(),
)

export const setAllMessage = createAction('message/setAll')
export const setOneMessage = createAction('message/setOne')
