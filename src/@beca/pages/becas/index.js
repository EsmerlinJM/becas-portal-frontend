import { lazy } from 'react'
const Beca = lazy(() => import('./list'))

const routes = [
  {
    exact: true,
    path: '/mi-beca',
    component: Beca,
  },
]

export default routes
