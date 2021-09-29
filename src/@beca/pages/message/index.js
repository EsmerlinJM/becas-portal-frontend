import { lazy } from 'react'

const List = lazy(() => import('./list'))
const Detail = lazy(() => import('./detail'))

const routes = [
  {
    exact: true,
    path: '/messages',
    component: List,
  },
  {
    exact: true,
    path: '/messages/detail/:messageId',
    component: Detail,
  },
]

export default routes
