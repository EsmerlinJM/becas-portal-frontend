import { createSlice } from '@reduxjs/toolkit'
import {
  createMessage,
  getOneUser,
  addFavorite,
  addFavorites,
  deleteFavorite,
  clearUser,
  saveEducation,
  saveWorkExperience,
  setUser,
} from './_actions'
import {
  reducerGenerator,
  rejected,
  fulfilled,
} from '../../../shared/utils/reducer-generator'
import { initialState } from '../../../shared/utils/initial-state'

const actions = [
  { action: createMessage, key: 'message' },
  { action: getOneUser, key: 'one' },
]
const reducers = reducerGenerator(actions)

const user = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    ...reducers,
    [setUser]: fulfilled({ key: 'one' }),
    [clearUser]: () => initialState,
    [saveEducation.rejected]: rejected({ key: 'one' }),
    [saveEducation.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        one: {
          data: {
            ...state.one.data,
            formacion_academica: payload,
          },
          status: 'completed',
        },
      }
    },
    [saveWorkExperience.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        one: {
          data: {
            ...state.one.data,
            experiencia_laboral: payload,
          },
          status: 'completed',
        },
      }
    },
    [addFavorites]: fulfilled({ key: 'favorites' }),
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

    [addFavorite.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        favorites: {
          data: [payload, ...state.favorites.data],
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
