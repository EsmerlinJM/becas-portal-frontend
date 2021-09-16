import {
  getRequests,
  getRequest,
  sendRequest,
} from '../../../shared/services/requests'
import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllRequest = createAsyncThunk(
  'myRequests/getAll',
  async () => await getRequests(),
)

export const getOneRequest = createAsyncThunk(
  'myRequests/one',
  async (id) => await getRequest(id),
)

export const changeStatusRequest = createAsyncThunk('myRequests/update', (id) =>
  sendRequest(id),
)

export const setRequest = createAction('myRequests/setRequest')
