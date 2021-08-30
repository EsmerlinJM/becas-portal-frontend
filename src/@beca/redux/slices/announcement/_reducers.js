import { createSlice } from '@reduxjs/toolkit'
import { announcementGetAll, announcementGetOne, setRecent } from './_actions'
import { reducerGenerator } from '../../../shared/utils/reducer-generator'
import { initialState } from '../../../shared/utils/initial-state'

const actions = [
  { action: announcementGetAll, key: 'all' },
  { action: announcementGetOne, key: 'one' },
]

const reducers = reducerGenerator(actions)

const announcement = createSlice({
  name: 'announcement',
  initialState,
  extraReducers: {
    ...reducers,
    [setRecent.fulfilled]: (state, { payload }) => ({
      ...state,
      recent: { data: payload, status: 'completed' },
    }),
  },
})

export default announcement.reducer
