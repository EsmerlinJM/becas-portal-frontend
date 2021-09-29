import { createSlice } from '@reduxjs/toolkit'
import { getAllBecas, setOneBeca } from './_actions'
import {
  reducerGenerator,
  fulfilled,
} from '../../../shared/utils/reducer-generator'
import { initialState } from '../../../shared/utils/initial-state'

const actions = [{ action: getAllBecas, key: 'all' }]
const reducers = reducerGenerator(actions)

const beca = createSlice({
  name: 'beca',
  initialState,
  extraReducers: {
    ...reducers,
    [setOneBeca]: fulfilled({ key: 'one' }),
  },
})

export default beca.reducer
