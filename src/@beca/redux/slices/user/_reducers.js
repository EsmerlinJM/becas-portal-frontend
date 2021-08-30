import { createSlice } from '@reduxjs/toolkit'
import {
  createMessage,
  getOneUser,
  logoutUser,
  addFavorite,
  addFavorites,
  deleteFavorite,
} from './_actions'
import { reducerGenerator } from '../../../shared/utils/reducer-generator'
import { initialState } from '../../../shared/utils/initial-state'

const actions = [
  { action: createMessage, key: 'message' },
  { action: getOneUser, key: 'one' },
  { action: logoutUser, key: 'one' },
]

const reducers = reducerGenerator(actions)

const user = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    ...reducers,
    [addFavorites]: (state, { payload }) => ({
      ...state,
      favorites: {
        data: payload,
        status: 'completed',
      },
    }),
    [deleteFavorite.fulfilled]: (state, { payload }) => {
      const filtered = state.favorites.data.filter((it) => it.id !== payload.id)
      return {
        ...state,
        favorites: {
          data: filtered,
          status: 'completed',
        },
      }
    },
    [addFavorite.fulfilled]: (state, { payload }) => ({
      ...state,
      favorites: {
        data: [payload, ...state.favorites.data],
        status: 'completed',
      },
    }),
  },
})

export default user.reducer
