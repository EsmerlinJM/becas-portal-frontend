import { createSlice } from '@reduxjs/toolkit'
import { getAllMessage, setAllMessage, setOneMessage } from './_actions'
import {
  reducerGenerator,
  fulfilled,
} from '../../../shared/utils/reducer-generator'
import { initialState } from '../../../shared/utils/initial-state'

const actions = [{ action: getAllMessage, key: 'all' }]
const reducers = reducerGenerator(actions)

const message = createSlice({
  name: 'message',
  initialState,
  extraReducers: {
    ...reducers,
    [setAllMessage]: fulfilled({ key: 'all' }),
    [setOneMessage]: fulfilled({ key: 'one' }),
  },
})

export default message.reducer
