import { createSlice } from '@reduxjs/toolkit'
import { setNotifications } from './_actions'
import { initialState } from '../../../shared/utils/initial-state'
import { fulfilled } from '../../../shared/utils/reducer-generator'

const notification = createSlice({
  name: 'notification',
  initialState,
  extraReducers: {
    [setNotifications]: fulfilled({ key: 'all' }),
  },
})

export default notification.reducer
