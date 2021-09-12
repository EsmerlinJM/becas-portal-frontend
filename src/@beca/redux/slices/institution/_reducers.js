import { createSlice } from '@reduxjs/toolkit'
import { getAllInstitution } from './_actions'
import { reducerGenerator } from '../../../shared/utils/reducer-generator'
import { initialState } from '../../../shared/utils/initial-state'

const actions = [{ action: getAllInstitution, key: 'all' }]
const reducers = reducerGenerator(actions)

const institution = createSlice({
  name: 'institution',
  initialState,
  extraReducers: {
    ...reducers,
  },
})

export default institution.reducer
