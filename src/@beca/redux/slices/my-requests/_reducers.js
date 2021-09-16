import { createSlice } from '@reduxjs/toolkit'
import {
  getAllRequest,
  getOneRequest,
  setRequest,
  changeStatusRequest,
} from './_actions'
import {
  reducerGenerator,
  fulfilled,
} from '../../../shared/utils/reducer-generator'
import { initialState } from '../../../shared/utils/initial-state'

const actions = [
  { action: getAllRequest, key: 'all' },
  { action: getOneRequest, key: 'one' },
  { action: changeStatusRequest, key: 'one' },
]

const reducers = reducerGenerator(actions)

const myRequest = createSlice({
  name: 'myRequest',
  initialState,
  extraReducers: {
    ...reducers,
    [setRequest]: fulfilled({ key: 'one' }),
  },
})

export default myRequest.reducer
