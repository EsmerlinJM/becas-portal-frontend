import { lazy } from 'react'

const Login = lazy(() => import('./login'))

const routes = [
  {
    exact: true,
    path: '/login',
    component: Login,
  },
]

export default routes
