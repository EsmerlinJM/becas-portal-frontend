import { createSlice } from '@reduxjs/toolkit'
import {
  getAllOffer,
  searchByOffer,
  getOneOfert,
  getAllOfferByAll,
} from './_actions'
import { reducerGenerator } from '../../../shared/utils/reducer-generator'
import { initialState } from '../../../shared/utils/initial-state'

const actions = [
  { action: getAllOffer, key: 'all' },
  { action: getAllOfferByAll, key: 'all' },
  { action: getOneOfert, key: 'one' },
  { action: searchByOffer, key: 'searchBy' },
]

const reducers = reducerGenerator(actions)

const offer = createSlice({
  name: 'offer',
  initialState,
  extraReducers: {
    ...reducers,
  },
})

export default offer.reducer
