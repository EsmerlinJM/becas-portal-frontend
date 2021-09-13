import { lazy } from 'react'

const PoliticaPrivacidad = lazy(() => import('./politicas-y-privacidad'))
const TerminosYCondiciones = lazy(() => import('./politicas-y-privacidad'))

const routes = [
  {
    component: PoliticaPrivacidad,
    path: '/politicas-privacidad',
    exact: true,
  },
  {
    component: TerminosYCondiciones,
    path: '/terminos-condiciones',
    exact: true,
  },
]

export default routes
