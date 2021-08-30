import { lazy } from 'react'

const OfferDetail = lazy(() => import('./offer-detail'))

const routes = [
  {
    component: OfferDetail,
    path: '/query-result/detail/:id',
  },
]
export default routes
