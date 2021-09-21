import { configureStore } from '@reduxjs/toolkit'

import area from './slices/area/_reducers'
import offers from './slices/ofert/_reducers'
import province from './slices/province/_reducers'
import announcement from './slices/announcement/_reducers'
import institution from './slices/institution/_reducers'
import applied from './slices/all-applied/_reducers'
import user from './slices/user/_reducers'
import myRequest from './slices/my-requests/_reducers'
import municipality from './slices/municipality/_reducers'
import country from './slices/country/_reducers'
import notification from './slices/notification/_reducers'
import message from './slices/message/_reducers'
import beca from './slices/beca/_reducers'

export default configureStore({
  reducer: {
    area,
    offers,
    province,
    institution,
    announcement,
    applied,
    user,
    myRequest,
    municipality,
    country,
    notification,
    message,
    beca,
  },
})
