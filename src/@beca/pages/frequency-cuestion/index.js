import { lazy } from 'react'
const CPN = lazy(() => import('./frequency-cuestion'))

const routes = [
  {
    component: CPN,
    exact: true,
    path: '/FAQs',
  },
]

export default routes
